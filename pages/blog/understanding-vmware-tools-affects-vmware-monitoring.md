---
title: "Understanding VMware Tools (and how it affects VMware Monitoring)"
image: /images/blog/printer-159612_640.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-04-05"
---

VMware Tools is a [suite of tools](http://searchservervirtualization.techtarget.com/definition/VMware-Tools) that installs into the guest OS. The suite is offered for Windows, Linux, FreeBSD, and Netware OSs, and the tools are created to provide an additional level of functionality within the virtual machine (VM) environment. 

VMware Tools also enhance the interactions between the host and the guest machines, such as permitting the host system to cleanly power off the guest OS, or allowing files on the guest to be copied, launched, or killed from the host system -- among other things. 

While it isn't absolutely necessary to [install and use VMware Tools](http://blogs.vmware.com/vsphere/2016/02/understanding-the-three-types-of-vm-tools.html) in your VMware environment, it is highly advisable to do so. The Tools suite comes with a full set of drivers and utilities to boost the performance of the VM's guest OS and to improve the interaction between the guest and the host. There are several components of this free suite of tools, including: 

## **VMware Device Drivers**

![VMware Tools Driver](/images/blog/printer-159612_640.jpg)

_The VMware Device Drivers tool can replace many of the OS drivers needed to use various devices with the VMs. This tool is cleaner and more efficient than most of the drivers that come with the devices._

Device Drivers is designed to replace a lot of the guest OS drivers to power physical hardware on the network, improving network connectivity and helping to prevent compatibility issues among drives. This tool also assures that mouse operations are smooth, and makes it easier to support the sharing of folders and files (using Workstation products). The Device Drivers tool also delivers a better quality of sound, graphics, and networking performance to the end users. 

## **VMware Services** 

VMware Services is the tool designed to handle the management of communications between the host OS and the guest OS. It runs in the background, and in the Windows OS is referred to as vmtoolsd.exe. In the Mac OS X, it is called vmware-tools-daemon, and in Linux, FreeBSD, and Solaris it is vmtoolsd. 

## **VMware User Process**

![VMware User process](/images/blog/mouse-160032_640.jpg)

_The User Process tool makes the mouse pointer operate more smoothly on the VM, and improves the screen resolution for a better user experience._

The User Process tool gives the administrator the power to cut and paste text from the Remote Console or the host OS and back. This tool also improves the performance of the mouse pointer and boosts screen resolution. 

## **VMware Control Panel** 

Control Panel delivers a user-friendly, centralized place inside the guest OS in order to change the various VMware Tools settings. Control Panel is organized into a set of tabs, making it easy and intuitive to make these configurations changes.In addition to VMware Tools, you will also need a good VMware monitoring solution. 

## VMware Performance and Optimization

To enable the memory saving ballooning technology, the VMware Tools installation is required. You can find more information about memory ballooning in this interview with [Raffaele Giordanelli](/blog/expert-interview-series-raffaele-giordanelli-about-memory-ballooning/).

VMware Snapshot - Quiescing: If the <quiesce> flag is 1 or true, and the virtual machine is powered on when the snapshot is taken, VMware Tools is used to quiesce the file system in the virtual machine. Quiescing a file system is a process of bringing the on-disk data of a physical or virtual computer into a state suitable for backups. This process might include such operations as flushing dirty buffers from the operating system's in-memory cache to disk, or other higher-level application-specific tasks. --< [VMware KB article](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1015180)

Sometimes VM Snapshots don't behave as expected.

That's where Snapwatcher comes in. Snapwatcher allows you to monitor VMware snapshots across vCenter systems, detect invalid snapshots, and manage hundreds of snapshots smoothly and with ease. In one click, it frees up valuable disk space that is often wasted with broken, invalid, or old snapshots. [Sign up for Snapwatcher](https://mediashower.com/ce2/37988/3/177) today
