---
title: "Resize Photon OS system disk"
image: /images/blog/vmdk-resize.jpg
tags: ["Ops", "opvizor"]
date: "2018-12-03"
---

As we work more and more with Photon OS, we encounter typical system administrator tasks, but are used to Debian or Ubuntu.

So here comes a guideline to resize the [Photon OS](https://vmware.github.io/photon/) system disk (first disk of the virtual machine). Its pretty simple and straightforward.

### 1) Increase the virtual disk

![Resize Photon OS system disk](/images/blog/vmdk-resize.jpg)

Hint: When the menu is greyed out, there is a snapshot active! You need to delete the snapshot to extend the disk.

### 2) Rescan the SCSI Bus

echo 1 > /sys/class/block/sda/device/rescan

### 3) check the new disk size using

fdisk -l

![check disk size](/images/blog/fdisk.jpg)

### 4) Install parted

tdnf update

tdnf install parted

![Install parted](/images/blog/parted.jpg)

### 5) Resize the partition

![Resize Photon OS partition](/images/blog/parted-sda-1.jpg)

parted commands:

1. parted /dev/sda
2. print
3. resizepart 2 100%
4. quit

### 6) Resize the filesystem

resize2fs /dev/sda2

All done and the partition is resized and fully usable. You can check using df -h
