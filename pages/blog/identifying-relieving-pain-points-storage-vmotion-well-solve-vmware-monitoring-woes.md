---
title: "Identifying & Relieving the Pain Points of Storage vMotion (As Well as How to Solve Those VMware Monitoring Woes)"
tags: ["Ops", "opvizor"]
date: "2016-04-26"
---

# Identifying & Relieving the Pain Points of Storage vMotion (As Well as How to Solve Those VMware Monitoring Woes)

Storage vMotion allows you to migrate a virtual machine's entire datastore off of one storage system and into another one. It involves physically moving the entire home directory (including log, swap, config, and snapshots) to another storage device, and includes a quick suspension of the virtual machine, which is completely transparent to the user. 

The time it takes to transfer the entire datastore of the virtual machine from one storage system to the other varies, and it can lead to some performance issues with the applications that happen to be running. Storage vMotion has been a part of VMware since version 3, though it began as a mere command line utility, allowing you to upgrade VMFS. 

By version 3.5, it was actually called Storage vMotion, and the GUI appeared first in version 4. 

Let´s check about the common Pain Points of Storage vMotion.

## **What Storage vMotion is Supposed to Do**

![Storage vMotion](/images/blog/board-1226680_640.jpg)

_Storage vMotion would work much better in a completely software-defined data center, or at least in an environment in which all of the storage was virtualized. That just isn't the case in most enterprise data centers; at least, it is not yet a reality._

Storage vMotion [is usually invoked](http://storageswiss.com/2015/08/18/why-storage-vmotion-hurts/) when a user has complained about a machine's slow performance. While Storage vMotion is helpful in solving storage issues like performance and capacity, there are some inherent pain points when using it. The first reason that Storage vMotion comes with such pain is that it requires a lot of time and effort by the administrator. 

The process means a lot of extremely fast analysis, real-time decision making, and involves a high risk of error. Many data centers simply can't afford this kind of time or don't want to undergo the stress involved in using Storage vMotion. 

## **The Pain Points Associated with Using Storage vMotion**

![Pain Points of Storage vMotion](/images/blog/accident-1238326_640.jpg)

_Storage vMotion consumes a lot of resources during the migration of a virtual machine, especially processing power. It can also affect the performance of other virtual machines on your network during the process. Few data centers are willing to let go of the time, labor, effort, and resources to use Storage vMotion._ 

Another reason Storage vMotion is painful is because it involves a complete physical move of the virtual machine's data sets, not simply the memory addresses, which is not just time consuming, it is also a resource-intensive process. Additionally, Storage vMotion is only capable of working in a completely VMware environment. 

Most data centers are [not fully virtualized](https://virtualizationreview.com/articles/2015/06/01/performance-issues-are-top-pain-point-for-storage.aspx) just yet, and many data centers are using numerous hypervisors -- meaning Storage vMotion simply isn't an option for them. 

Another pain point with Storage vMotion is that the sheer size of the move takes up a significant amount of network resources, particularly CPU power. The host server's resources must take care of the initial copy and change block copies until the point at which the destination storage is caught completely up. 

The CPU then has to manage the sending and receiving of all of the data of the virtual machine, which means that the resources of both the host and the storage affects the performance of other virtual machines during the process of migrating a single virtual machine from one storage to another.Lastly, Storage vMotion can contribute, both directly and indirectly, to server sprawl. 

It does not identify a single storage system that is capable of delivering on all of the storage demands, rather, it encourages a piecemeal storage infrastructure that is unnecessarily large and disjointed. This is an inefficient and expensive way to operate a data center. 

  **Alleviating the Pain of Storage vMotion**

![Storage vMotion](/images/blog/hard-disk-drive-838665_640.jpg)

_Investing in all flash drives is too expensive. Investing in all hard disk drives doesn't give the data center enough high-performance storage to support the more demanding mission-critical workloads. Most data centers use a combination of these solutions. You can also use a combination of solutions to address the migration of virtual machine memory._ 

Since using all flash memory is just too expensive, and using all hard disk drives just isn't fast enough to handle the more intensive mission-critical workloads, most data centers are operating a mix of flash and hard disk drives. 

The management of moving data between and among the various storage tiers can be done using VVOLS or by the storage system's data movement intelligence or, better still, by both of these methods.Introduced with vSphere version 6, [VVOLS](http://storageswiss.com/2015/04/30/what-are-vvols/) are used to associate the virtual machines with the storage that they are utilizing. 

VVOLS offer visibility and make it easier to merge storage and server administration.A system of consolidated storage solutions should be able to deliver a Quality of Service QoS) function capable of integrating with VVOLS and with Storage vMotion, or at least to offer the function independently for situations like when you are working outside VMware or are dealing with non-virtualized workloads. It is important for any storage system to be able to migrate data within the system itself, and not just across different storage systems. 

This is often done using a physical LUN migration among the various tiers of the system.A software-defined data center would be able to do this data migration in real time by tagging all of the I/Os in a given array and adjusting the data placement of each one appropriately. As the I/O usage of the various workloads migrate the system should be able to make necessary adjustments to the position of the data, assuring that the most demanding workloads still receive the resources they need to maintain a high level of performance. 

Implementing a single system of storage with intelligent, QoS-driven data migration capabilities helps encourage workload consolidation. When the system is capable of taking on more of the workload, the storage administrator has fewer demands on time and resources. A combination of flash and hard disk storage allows the administrator to distribute the workloads appropriately, achieving high-performance for those workloads that are mission critical, while still being able to meet the overall capacity demands of the organization. 

## **VMware Monitoring** 

No matter which option you choose for managing resources and virtual machine memory and workloads, one thing is always constant. Storage vMotion is also known to be behave a bit strange when combined with backups using the vSphere API - or viceversa. [Sign up for Snapwatcher](https://mediashower.com/ce2/39439/3/177) to begin a better VMware Snapshot management solution for your environment today.
