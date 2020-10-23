---
title: "Enlarge a disk and partition of any Linux VM without a reboot"
tags: ["Ops", "opvizor"]
date: "2020-02-24"
---

Some days ago, one of our Performance Analyzer customers asked in a workshop how we handle the data growth over time and how they can resize the data partition. Like many other customers, they want to make sure that the disks are not filling up anytime soon.

On the other hand our goal was, that no customer needs to oversize the data disk - and our automatic resizing solves that issue in a very convenient way:

**There is only a simple resize of the virtual disk of the virtual appliance required and the scripts in our appliance handle everything else automatically.**

That can be done while the virtual machine is running using pretty much any modern linux distribution - just make sure that no snapshots are active!

_When following that guide for the first time on a production system - we would recommend a backup (without snapshots)._

Performance Analyzer is smart enough to detect the change, and enlarges both the partition and the file system contained in the partition.

All done in a cron job:

- detect the resize of either the boot or the data disk
- resize the last partition to add the new space

## But what is the magic behind that?

Something we didn't mention - all is done without LVM!

Let's get into some details:

The Performance Analyzer appliance has a two disk configuration. The first disk holds the operating system, the second disk the data. We skipped the swap partition and have a swap file within the root file system. That is acceptable since we avoid swapping at all costs anyway.  
  
It's important to know that only the last or the only partition within a disks (green color) can be resized in an straightforward way.  
The disk layout of Performance Analyzer looks like this:

![](/images/blog/diagram1.png)

disk partition setup

If you want to enlarge the second disk, you simply change the VM configuration and increase the disk there. If the option is greyed out then make sure to remove existing snapshots.

![](/images/blog/pccepbmjomjckjmf.png)

enlarge virtual disk

Although the disk is resized, the Linux kernel is not aware of that change.

![](/images/blog/diagram2.png)

disk is resized, but the linux kernel is not aware of the new size without reboot or interaction

To make the kernel aware, one can issue the following command as root:

```
echo 1 > /sys/class/block/sdb/device/rescan
```

This triggers a rescan of the device sdb. If you resized another disk, replace sdb with the disk number you changed. You can follow the procedure in syslog - and you should see some lines similar to this:

```
[89741.613318] sd 2:0:1:0: [sdb] 106954752 512-byte logical blocks: (54.8 GB/51.0 GiB)
[89741.613393] sdb: detected capacity change from 53687091200 to 54760833024
```

When the kernel finishes the rescan (usually within fractions of a second), it is aware of the larger disk:

![](/images/blog/diagram3.png)

new disk size detected, partition is unchanged

The partition is not automatically adjusted and needs to be resized as well in two steps

- resizing the partition
- make the kernel aware of the bigger partition

Typically fdisk was the tool of choice for the first step and a utility like partprobe (or a reboot) for the second step.  
But things changed and you can use a great software called _**growpart**_

**_growpart_** is part of the **cloud-utils-package**, and should be available in your distro's repositories, in case its not already installed with your OS. Debian or Ubuntu:

```
sudo apt-get install -y cloud-utils
```

With growpart, enlarging the partition to maximum size and informing the kernel of the changed partition size is a one-liner:

```
growpart /dev/sdb 1
```

The first parameter is the disk device, the second parameter is the number of the partition to resize. After running growpart, your disks look like this:

![](/images/blog/diagram5.png)

partition is resized using growpart

The partition is resized now and the kernel is already using the new partition table.

The last missing piece is the file system. Since we use an ext4 file system on Ubuntu in Performance Analyzer, this is an one-liner as well, that can even run on a mounted file system:

```
resize2fs /dev/sdb1
```

In case you're using any other file system, you need to check for the right tools to resize.

![](/images/blog/diagram6.png)

completely resized without reboot or LVM

That's it, the disk, the partition and the filesystem are resized and you can use the newly gained disk space immediately, without any reboot or the use of LVM.

## Putting the pieces together

Opvizor automated this process by creating a cron job which runs every 5 minutes. This job checks, if one of the Performance Analyzer's disk changed in size and resizes the partitions and file systems on this disks.

### /etc/cron.d/resize\_disk

As an example to run the script disk\_resize every 5 minutes as root, simply add the following line to /etc/cron.d/resize\_disk

```
*/5 * * * *   root   /usr/local/bin/disk_resize.sh
```

### disk\_resize.sh

The script /usr/local/bin/disk\_resize.sh itself looks that:

```
#!/bin/bash
LOGFILE=/data/log/speed/resize.log
LOCKFILE=/tmp/enlarge.lock
export PATH=/usr/sbin:/usr/bin:/sbin:/bin


NEEDREBOOT=0

dotlockfile -r 0 $LOCKFILE || exit 1

echo 1 > /sys/class/block/sda/device/rescan
sleep 5
GROWPART_OUT=`growpart /dev/sda 2`
if [ $? -eq 0 ]; then
    echo `date` >> $LOGFILE
    echo "trying to resize fs" >> $LOGFILE
    echo $GROWPART_OUT >> $LOGFILE
    resize2fs /dev/sda2 >> $LOGFILE 2>&1
    echo `date` >> $LOGFILE
    echo "resize done" >> $LOGFILE
    #TODO: need reboot
    NEEDREBOOT=1
fi

echo 1 2>/dev/null >/sys/class/block/sdb/device/rescan
sleep 5
GROWPART_OUT=`growpart /dev/sdb 1`
if [ $? -eq 0 ]; then
    echo `date` >> $LOGFILE
    echo "trying to resize fs" >> $LOGFILE
    echo $GROWPART_OUT >> $LOGFILE
    resize2fs /dev/sdb1 >> $LOGFILE 2>&1
    echo `date` >> $LOGFILE
    echo "resize done" >> $LOGFILE
    #TODO: need reboot
    NEEDREBOOT=1
fi

dotlockfile -u $LOCKFILE

if [ $NEEDREBOOT -eq "1" ]; then
    /sbin/reboot
fi
```
