---
title: "Windows 10 VM crashes on ESXi 6 with an unrecoverable error"
image: /images/blog/win10error-1.png
tags: ["Ops", "opvizor"]
date: "2016-02-02"
---

We ran into a situation with a customer some days ago that a VM running Windows 10 (x64) as the Guest OS was automatically powered off after some hours (roughly a day). In the beginning nobody really noticed a permanent issue and just started the virtual machine again.

After the third time the customer became suspicious and checked his environment using our [Health Analyzer](http://try.opvizor.com/health-analyzer/). Many issues could be detected and fixed but not the virtual machine shutdown. Our support got involved and we figured out that there was an unrecoverable error happening that caused the VMkernel to shut down (crash) the virtual machine. Luckily we could reproduce the error in our own lab pretty quick, making us think that this is a general issue for anybody running ESXi 6 and Windows 10.

![Windows 10 VM crashes on ESXi 6](/images/blog/win10error-1.png)

As it turned out all of our Windows 10 VMs stopped after some hours or days with the same error message on ESXi 6: _**VMware ESX unrecoverable error: (vcpu-0) NOT\_REACHED bora/devices/ahci/ahci\_user.c:1530**_

After searching some time through community forums looking for this suspicious log entry we found a hint that the S.M.A.R.T. commands that MS Windows is issuing to check drives & devices are the potential cause. Some hints were also pointing towards the SATA devices. So we removed the SATA DVD drive and started the virtual machine again.

Several days had gone by without any downtime, so we added the DVD drive again and several hours later the VM was down again with the same unrecoverable error.

![VM DVD removal](/images/blog/dvdremove.png)

Finally removing the DVD drive and adding it again using the IDE controller instead of the SATA controller solved the issue and the virtual machine is running fine since then.

![Add IDE DVD to VM](/images/blog/add-dvd-1.png)

So it seems that the issue happens when MS Windows is issuing S.M.A.R.T. commands to the emulated SATA DVD. The result is a permanent powerering off the virtual machine, except HA is automatically catching it.

We'll keep you updated regarding news and we're going to integrate that check into [Health Analyzer](http://try.opvizor.com/health-analyzer/) as well.
