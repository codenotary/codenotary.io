---
title: "Don't Boo Hoo Over Broken VMware Snapshots: A Better VMware Monitoring Solution is Here"
image: /images/blog/photographer-1026441_640.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-05-05"
---

VMware snapshots can be seen as point in time copies (or little pictures) of a virtual machine's disk file and the configuration the time they are created. Snapshots [preserve the disk files content](http://searchvmware.techtarget.com/tip/How-VMware-snapshots-work) so that they can be reverted back to in the event that something goes wrong with the virtual machine. Snapshots are extremely helpful when upgrading or patching applications and servers, making it possible for the VMware admin to restore a machine when things go awry. 

## **When Good Snapshots Go Bad**

![Broken VMware snapshots](/images/blog/photographer-1026441_640.jpg)

_Snapshots are like little pictures of your virtual machines that you can revert to if something goes wrong with the VM. Unfortunately, if the snapshots go bad, there aren't any snapshots of the snapshots, so you're kind of stuck with lots of snapshots in memory but no way to restore your VMs or find the bad snapshots._

Sometimes, [snapshots themselves go bad](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1015180), meaning they aren't any good for restoring the virtual machine that they are supposed to represent. Snapshots can become broken or invalid by any number of actions, most of which are completely outside the control of the system administrator. 

For example, certain backup software can cause a snapshot to be created and deleted. Also, VMware can choke up, causing an invalid snapshot that is hard to detect. 

These hard to find snapshots hide, taking up lots of memory for no good purpose at all. 

## **More Snapshots Means More Invalid Snapshots** 

Usually, the more snapshots you've got, the larger the number of invalid or broken snapshots is. It's not an uncommon problem at all, especially when working with VMware's integrated vCenter Snapshots. In fact, more than 80 percent of all VMware vSphere environments are infected by broken and invalid snapshots. Many times, these bad snapshots are not able to be detected by VMware itself. 

A single delta file can get as large as the original VMDK, consuming many terabytes of your storage space. As everyone knows, storage is not cheap, and taking up storage needlessly is a big no no. 

## **When VMware Can't Find Bad Snapshots for You**

![Snapwatcher inconsistent VM Snapshots](/images/blog/photo-1015961_640.jpg)

_Snapwatcher can find those hidden snapshots and fix them or delete them, so that you can regain all of that valuable storage space._

Fortunately, there is a [solution for finding](http://www.mindthevirt.com/snapwatcher-stop-the-pain-with-broken-vmware-snapshots-467), identifying, and deleting these bad snapshots so that you can free up memory and improve the operating environment for VMware. Opvizor, an US company, has developed a free solution so that VMware administrators can find and exterminate those bad snapshots. The product is called Snapwatcher.

One customer was able to reclaim close to 20 terabytes of storage space over time using the Snapwatcher tool. That's a lot of memory to be eaten up with useless snapshots!

Get the [Snapwatcher](http://try.opvizor.com/snapwatcher/) tool.

## Snapwatcher by Opvizor Finds and Fixes Bad Snapshots 

Snapwatcher shows an overview of all of the snapshots in your vSphere environment. The software highlights the biggest snapshots, and sorts the snapshots (like broken VMware snapshots) by name, host, and virtual machine. In the work history section, you can tell how many snapshots have been fixed or corrected, along with how much storage space was recovered during the process. 

You can even establish your own rules for determining the conditions under which Snapwatcher will highlight the snapshots.

Let's see how this works in real practice. Say a certain usage within a specific data store has been reached or that a particular snapshot reaches a certain predetermined size. The right snapshot can be highlighted, making it much easier on the VMware administrator. 

You no longer have to be tied down watching what your snapshots are up to. You can get all of the information you need to know quickly and easily within the Snapwatcher interface. When something does go wrong or gets broken, you can fix it simply and quickly with the Snapwatcher tool.

**Problems Addressed by the Snapwatcher Product**

![Get VM snapshot problems addressed](/images/blog/snapshot-1159236_640.jpg)

_It's kind of like having a crew of little fix it guys hiding in your systems. Only it's not quite that creepy, and the little guys don't ask for overtime or file workers' comp claims._

Snapwatcher can correct a number of problems, including any inconsistencies between the VMware snapshot manager and the actual snapshots, the most snapshot failures related to lock, and the ability to detect the MAC of a host and remotely unlock the file from the locking host. The fixing methods are built directly into Snapwatcher, making the admin's job as easy as it can be. 

 Snapwatcher is even capable of determining when the backup software is still running so that it can make sure that not all of the lock files will be unlocked. One Snapwatcher user was able to recover a whopping 16 terabytes that were taken up by invalid and inconsistent snapshots!

## **Get Snapwatcher Today**

You can [sign up for Snapwatcher](https://mediashower.com/ce2/39441/3/177) for free and get started freeing up valuable storage space in your VMware environment right now!
