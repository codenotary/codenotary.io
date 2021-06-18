---
title: "VMware vSphere VM Snapshot Size And Age issues"
image: /images/blog/snapshotmanager.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-03-09"
---

## Introduction

Virtual machine snapshots are one of the most useful features of VMware vSphere as they preserve the state of a virtual machine’s virtual disk and, optionally, virtual memory before a critical event such as an application upgrade or configuration change. VM Snapshots are also taken by most virtualization backup applications at the start of the backup and then removed at the end of the backup. In fact, besides vMotion, snapshots were one of the original top reasons that organizations adopted virtualization technologies to begin with. As snapshots are a point in time freeze, all new data needs to be written in additional files that can grow into a large **VM snapshot size** or become old if forgotten.

## Impact

What many vSphere administrators don’t know is that the quantity and age of snapshots on a virtual machine are directly related to their performance impact on a virtual machine. This was especially true with older vSphere versions (prior to ESXi 4.1) because they locked the entire LUN where the virtual machine was stored using a SCSI-2 reservation while taking a snapshot or when booting virtual machines. With ESXi 5 and above, you have the option to configure VAAI (vSphere API for Array Integration) which only locks the individual virtual machine, and does so with hardware assisted locking, as long as your storage array supports VAAI. With VAAI in place, there is much less performance impact when snapshots are in use but that impact isn’t completely eliminated.

Besides the performance impact, there is also the potential for vCenter to not be aware of snapshots due to an out-of-sync condition also called a inconsistent VM snapshot or broken VM snapshot. In this case, it is possible that a virtual machine, which has snapshots and performs a large number of disk writes, could have a snapshot that fills the datastore and causes all virtual machines on that datastore to go down until space is freed. So you can end up with a massive VM snapshot size eating up your production space. Finally, there are situations where vSphere can report that snapshot files need to be consolidated. While the end result of this consolation is good, the actual consolidation process can mean that a virtual machine is paused (or at least runs very slow) for anywhere between a few minutes to more than 30 minutes.

## Ease of Detection

While you could go into the Snapshot Manager for each virtual machine and see if that virtual machine has any snapshots, this is an exceedingly inefficient process, especially in larger organizations. Furthermore if the snapshot is inconsistent you can't even see the real VM snapshot size. Additionally, there are times that backup applications are unable to complete successfully and completely remove all the snapshots that have been created. As a result, it’s easy to end up with unintended snapshots that you didn’t even know existed. Additionally, it is possible to have snapshot files consuming disk space that aren’t even displayed in the snapshot manager!

![VM Snapshot Size](/images/blog/snapshotmanager.png)

 

One way of detecting snapshots is to use the storage reporting function, report on virtual machine files, and sort on the file type. It’s here that you’ll be able to see what snapshot data files are taking up space on each datastore. To access this report, go to the Storage Inventory in the vSphere Web Client, click on a datastore, click on Monitor, and then on Storage Reports. Finally, click on the File Type column heading to sort by file type and scroll down to the Snapshot Data files, if they exist. Another way to identify snapshot files is to use PowerCLI, as shown in this article.

## Benefits of Solving

By removing snapshots for a virtual machine, guest OS and application performance can be improved, and you can reclaim the disk space that is currently consumed by unnecessary snapshot files. Additionally, you may be able to prevent outages causes if a datastore were to fill up or if a virtual machine had a large number of snapshots that needed consolidation.

## Ease of Solving

Simply removing a snapshot is easy but finding snapshots can be much more challenging. By having an automated tool that helps to identify and alert you to snapshots you may not have known about can be invaluable. Note that the recommendation for snapshots is to have no snapshots older than one week and no snapshots over 5GB in size. For more information about virtual machine backup best practices, see [VMware KB 1025279](http://kb.vmware.com/kb/1025279).

## Conclusion: How opvizor Helps

As shown in in the figure, opvizor allows you to very quickly identify snapshots that are large or have been aging for some time. Furthermore, invalid snapshots, the silent killer of any datastore, is also detected in minutes. Armed with this information, you’ll be able to quickly remove these snapshots, if they aren’t needed.

![opvizor old VM snapshot](/images/blog/snapage2.png)

Learn more about a typical memory related issues, opvizor automatically finds in minutes:

##### [**Sign Up for opvizor!**](/register)

Because old and large snapshots are often forgotten or even inconsistent, so incredibly hard to detect, a problem can arise quick. The problem is that a single Snapshot’s Delta-file is able to grow to the same size of the original file. Left alone for too long, they can quickly balloon and eat up all the space in your datastores.

![opvizor Snapwatcher - Say Goodbye to inconsistent VM Snapshots](/images/blog/snapwatcher_2.png)

We have a special solution called “Snapwatcher,” a simple tool that can help you discover and remove any ugly, old, large and hard-to-find broken snapshot.

This is the first automated solution that constantly monitors all snapshots in the entire VMware vCenter systems to catch and repair old, broken or inconsistent VM snapshots. Our powerful grid allows you to manage actions on hundreds of snapshots in one simple dashboard view. Snapwatcher does the hard work to protect your disk space from broken snapshots so you don’t have to.

You can download and try Snapwatcher here by clicking “[Try Snapwatcher by opvizor!](http://try.opvizor.com/snapwatcher)”

## Co-Author

[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)
