---
title: "Ubuntu - How to use Intel Optane Memory for SSD Caching"
tags: ["Ops", "opvizor"]
date: "2020-03-25"
---

## How to use Intel Optane Memory for SSD Caching

Recently Michael from Opvizor ordered a new laptop - a HP ProBook 650 G5. And here comes his story to enable Intel Optane using Ubuntu.

Addicted to Linux, the decision was clear to purge Windows and to setup **Ubuntu**, currently 18.04 LTS.  
But wait:

**The machine is equiped with an "INTEL® OPTANE™ MEMORY H10 WITH SOLID STATE STORAGE".**

**What is that?  
**Ask Google helped:

It is a solid state disk with an additional non volatile cache memory. That cache is build up of Optane memory, which is slower than DRAM, but faster than flash memory, and non volatile too.  
Its easy for Windows users - there is the preinstalled Intel RST-Driver, which setups the Optane memory as cache for the SSD. But in Linux? No driver support from Intel for that.

However, using the Optane Memory isn't that hard. Many people on the net suggest to use it as an independent, fast, but also small disk.

But my workloads vary, and I don't want to waste time deciding what to put on Optane and what to put on flash. So I wanted to use the Optane Memory as cache too, like the Windows people do.

## Optane Memory in Linux

On the physical layer, the device splits up into two independent nvme devices:

```
lspci | grep "Non-Volatile"
02:00.0 Non-Volatile memory controller: Intel Corporation Device 0975 (rev 03)
03:00.0 Non-Volatile memory controller: Intel Corporation Device 0975
```

These devices are mapped as /dev/nvme0 and /dev/nvme1, and because of nvme technology, the usable blockdevices are /dev/nvme0n1 and /dev/nvme1n1 (aka nvme namespaces).  
So the first step is to disable the BIOS option "Advanced / System options / Configure Storage Controller for Intel Optane". Have a look in the option ROM of the controller too, to make sure there is no combined device anymore. These options are intended for the RST-driver to recognize a device constructed of the two components. But in Linux we will do that without RST, so no need for that options.

Be aware: Since there is no support for RST's caching with Optane memory in Linux, you can't dual boot Windows with RST caching configured, and Linux. Either turn of Optane in Windows or put Windows into a VM in the Linux OS. To make things not complicated, the following won't consider dual boot.

## Installation

### Step 1

Start with a conventional installation, use the complete SSD (/dev/nvme0n1) with LVM and LUKS Encryption. LVM is mandatory for the latter steps, encryption optional, but assumed to be enabled. So in the installer, these are the selections:

![](/images/blog/install.png)

After installation, the resulting disk layout is quite simple:

```
Device           Start        End   Sectors   Size Type
/dev/nvme0n1p1    2048    1050623   1048576   512M EFI System
/dev/nvme0n1p2 1050624    2549759   1499136   732M Linux filesystem
/dev/nvme0n1p3 2549760 1000214527 997664768 475.7G Linux filesystem
```

nvme0n1p1 holds _/boot/efi_, _nvme0n1p2_ holds _/boot_, and _nvme0n1p3_ holds a LUKS container, which is used by LVM as physical device for the volume group _ubuntu-vg_. LVM delivers the logical volumes for swap and root.

### Configure LUKS

When you have successfully booted into your new system, the next step is to configure the LUKS encryption layer:

```
# Setup the LUKS container holding the crypted Optane Memory:
sudo cryptsetup luksFormat /dev/nvme1n1

# Open the LUKS device:
sudo cryptsetup luksOpen /dev/nvme1n1 nvme1n1_crypt

# Add the LUKS device to the existing volume group:
sudo vgextend ubuntu-vg /dev/mapper/nvme1n1_crypt

# Get the UUID of the LUKS container:
sudo blkid /dev/nvme1n1

# Copy the blkid to you clipboard. Now edit the file /etc/crypttab, e.g. with the command 
sudo pico /etc/crypttab 
```

The purpose of _/etc/crypttab_ is to hold a list of encrypted devices. This information is essential for booting the system. There should be already one line for the device _nvme0n1p3\_crypt_ . Now add the line for nvme1n1\_crypt, using the UUID from the last step.

```
nvme0n1p3_crypt UUID=a4850a5a-3f97-4bf4-a965-63b162c0f88d none luks,discard
nvme1n1_crypt   UUID=f338d02f-de8d-478f-80ec-175d0d88db58 none luks
```

Of course, your UUIDs will be different. The discard option is not used for the Optane-based device, since Optane Memory works in a different way than flash memory and so won't need discards.

### lvmcache

The cache is build with [lvmcache](https://wiki.archlinux.org/index.php/LVM#LVM_cache), gives a compact explanation. Use the command:

```
sudo lvcreate --type cache --cachemode writeback -l100%FREE -n root_cachepool ubuntu-vg/root /dev/mapper/nvme1n1_crypt
```

That command given, you created a pool for the caching using the complete optane memory. Due to thin provisioning capabilities, this pool serves both caching and metadata device needed by the kernel driver dm-cache.

The cache is created for the logical volume root (holding your root filesystem). The cache mode is set to writeback, which is perfectly good since you use non volatile memory!

### Do not reboot

And now: DON'T REBOOT, since the machine won't come up again! You have to do some additional tasks. Enable the universe-repositories and install the thin-provisioning-tools.

These will be needed to check the consistency of the cached device on boot.

```
sudo apt update
sudo apt install thin-provisioning-tools
```

### script thin-provisioning-tools

Download the script thin-provisioning-tools and install it to the directory /usr/share/initramfs-tools/hooks:

Download [thin-provisioning-tools](https://storage.googleapis.com/opvizor/thin-provisioning-tools)

```
sudo chown root:root ~/Downloads/thin-provisioning-tools
sudo chmod 0755 ~/Downloads/thin-provisioning-tools
sudo mv ~/Downloads/thin-provisioning-tools /usr/share/initramfs-tools/hooks/
```

The script is based on this [article](https://bugs.launchpad.net/ubuntu/+source/lvm2/+bug/1634697), with support for lvmcache added. The purpose of this script is, to put the binaries of the thin-provisioning-tools onto the initial ramdisk, and to load the required kernel modules for caching.

### Finish

```
sudo update-initramfs -k all -u
```

These initial ramdisk(s) have support for:

- second LUKS device based on the Optane Memory
- the kernel drivers needed to run the cache
- the tools used to check the cached volume, needed for starting it

NOW you are save to reboot. Don't be afraid when asked twice for LUKS passwords: once for nvme0n1p3\_crypt, and once for nvme1n1\_crypt.

## Results

To get a quick overview of your cache usage, issue the command

```
sudo lvdisplay /dev/ubuntu-vg/root
```

You can repeat the command over time. You will see the cache filling with data, and you will see the efficiency going up when looking at the ratio hits/misses. E.g.

```
  --- Logical volume ---
  LV Path                /dev/ubuntu-vg/root
  LV Name                root
  VG Name                ubuntu-vg
  LV UUID                xrD6tK-Ovfn-pweo-EuR2-bvid-xBsg-36GZ5b
  LV Write Access        read/write
  LV Creation host, time ubuntu, 2020-03-18 11:09:25 +0100
  LV Cache pool name     root_cachepool
  LV Cache origin name   root_corig
  LV Status              available
  # open                 1
  LV Size                464,00 GiB
  Cache used blocks      39,17%
  Cache metadata blocks  11,07%
  Cache dirty blocks     0,01%
  Cache read hits/misses 625340 / 443779
  Cache wrt hits/misses  985117 / 2027530
  Cache demotions        0
  Cache promotions       172267
  Current LE             118784
  Segments               1
  Allocation             inherit
  Read ahead sectors     auto
  - currently set to     256
  Block device           253:5
```

## Additional notes

If you decide to remove the cache from your configuration, run

```
sudo lvconvert --uncache ubuntu-vg/root
```

Typically, Ubuntu 18.04 creates a logical volume for swapping. Consider to replace this with a swapfile in your root filesystem. The logical volume swap is not cached with Optane memory, but the logical volume root is.
