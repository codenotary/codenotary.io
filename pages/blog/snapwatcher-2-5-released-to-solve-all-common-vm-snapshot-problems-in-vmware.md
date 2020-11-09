---
title: "Snapwatcher 2.5 released to solve all common VM snapshot problems in VMware"
image: /images/blog/wpid-snapwatcher.png
tags: ["Ops", "opvizor"]
date: "2015-06-02"
---

[opvizor](https://www.opvizor.com "opvizor ") just released the 2.5 version of its [Snapwatcher](http://www.snapwatcher.com "Snapwatcher ") which discovers any hidden, inconsistent or so called ‘Zombie’ VM snapshot in the customers VMware environment. Snapwatcher helps customers to free up more disk space and avoid possible downtime. The latest version contains new workflows to fix inconsistent snapshots, more details about snapshot hierarchy, size and the creator as well as full fixing process tracking including VM log file details.

> “Over 3000 Snapwatcher downloads since the beta start end of February this year is an amazing start and helps about 80% of all VMware vSphere environments that are currently affected by invalid snapshots which are dangerous but very hard to detect. Thanks to our Health Analyzer statistics of millions of customers’ virtual machines we knew that Snapwatcher is going to solve a very common problem when running VMware. Hearing from Snapwatcher users about terabytes of disk space being freed up again by deleting hidden snapshots is amazing.” says Dennis Zimmer, CEO and founder of opvizor.

_Snapwatcher_ is designed to free precious but wasted disk space by fixing broken, old and invalid snapshots with a click. It monitors VMware snapshots across all VMware vCenter systems and reports progress of any space it was able to save. Snapwatcher’s powerful grid allows the user to monitor hundreds of snapshots at a time, making it easy to immediately detect any bad snapshots in the Virtual Environment.

[![Nobody gets VMware Snapshot problems solved like Snapwatcher](/images/blog/wpid-snapwatcher.png)](http://try.opvizor.com/snapwatcherent)

The user can see when the snapshot has been created, who created it and tracks how these have been handled. As the software doesn’t rely only on the VMware vCenter API data and also checks the real data store usage, the customer gets deep insights about the space waste even when the VM snapshots are inconsistent or in “Zombie” state.

As VM snapshots are a popular virtualization function, and make it possible for virtual machine administrators to revert to previous stages when something goes wrong with the latest installed update. However, snapshots must be consistently monitored by age, size and growth rates to prevent invalid snapshots from hogging disk space. Invalid snapshots are caused by many kinds of actions the system admin has no control of, such as backup solutions which trigger snapshot creation and deletion. If the VMware struggles to delete the snapshot files, an invalid snapshot is created. Until now, these kinds of snapshots have been hard to detect, and would typically continue to grow and waste large volumes of disk space if left ignored.

![McMillan takes care of VM Snapshot problems using Snapwatcher](/images/blog/wpid-mcmillan.png)

McMillan LLP.

> "Snapwatcher allows the VMware Administrator to view and monitor the virtual machine snapshots in his/her environment.  It allows you to reconcile broken snapshots by using specific methods built in to FIX them.  Excluding certain snapshots from the view is also available so that if you have an environment like Citrix XenApp where deltas are used they are not shown every time you use the application.  Snapwatcher is highly recommended for any VMware Administrator and pairs nicely with the main opvizor product." states Chris Childerhose, Technical Specialist - Storage, Virtualization & Backup at McMillan LLP

Snapwatcher, your VM snapshot problems solver,  is being released as version 2.5, and can be downloaded on the opvizor website [http://www.snapwatcher.com](http://try.opvizor.com/snapwatcherent).

Both solutions, **Snapwatcher** and **Health Analyzer** can be greatly combined to offer a complete analysis and healing solution for your VMware vSphere. See for yourself and register at [www.opvizor.com/register](https://www.opvizor.com/register) to start with a free health check that would easily be worth $2,000 and more.
