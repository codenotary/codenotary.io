---
title: "VMotion and Storage VMotion : What These Are and How They Work"
tags: ["Ops", "opvizor"]
date: "2016-04-07"
---

# VMotion and Storage VMotion: What These Are and How They Work

VMware VMotion and Storage VMotion are products that allow the live migration of virtual machines among various physical servers, while the VMs are running, with no downtime, no interruption in service, and total transaction integrity. VMotion improves the availability of VMs by enabling maintenance without incurring disruption to the business operations. It moves VMs within pools of server resources so that resources are allocated according to the priorities of the business. VMotion is an [important technology](http://blogs.vmware.com/vsphere/2011/02/vmotion-whats-going-on-under-the-covers.html) for delivering and empowering a dynamic, fully automated, and completely self-optimizing data center. 

## **How VMotion Works**

![VMotion and Storage vMotion](/images/blog/bigstock-Businesswoman-Hard-At-Work-In--70382983.jpg)

_VMotion and Storage_ _VMotion_ _allow for the dynamic and cross-physical-system alignment of compute and storage resources, so that user performance isn't impacted by ordinary maintenance._

There are [three basic technologies](http://www.vmware.com/files/pdf/VMware-VMotion-DS-EN.pdf) that allow VMotion to dynamically align resources according to business priorities. First, it leverages the encapsulation of the entire state of a VM with a collection of files, which are stored on a shared storage component (such as Fibre Channel, NAS, or SAN). 

It either uses VMFS or NFS to allow a number of installations of ESXi to be able to access the same VMs at the same time.The second technology that empowers VMotion is the active memory and execution state of the VM, which is transferred via a high-speed network between Source and Destination. 

It enables the VM to instantly migrate from the source ESXi host to the destination ESXi host. Based on a proven preparation in precopying most of the data, the final switch happens so quickly that it is imperceptible to the user, because it keeps track of the transactions in memory by using a bitmap. When the whole of the system state and memory are migrated to the target ESXi host, VMotion then suspends the source VM, copies the bitmap over to the target ESXi host, and then resumes the VM operations on that target host. 

That process happens in less than two seconds when using a Gigabit Ethernet network.The third technology behind VMotion is the virtualization of the networks being accessed by the VMs. This is done via the ESXi host, so that even after migration occurs, the VM network identity and connections are saved. VMotion also manages the virtual MAC address during this process, informing the connected network switch of that change: After the destination machine is enabled, VMotion pings the router to make it aware of the new location of the MAC address. 

This occurs without any downtime or disruption to the users. 

## **How Storage VMotion Works**

![Storage vMotion](/images/blog/bigstock-Digital-Marketing-Graph-Statis-90704168.jpg)

_VMotion and_ _Storage_ _VMotion allow for the business' priorities to be met without disrupting the workflow of the users._

[Storage VMotion](http://www.vmware.com/files/pdf/VMware-Storage-VMotion-DS-EN.pdf) makes storage and capacity management more efficient. It is a feature of vSphere that delivers an easy, intuitive interface to allow the live migration of VM disk files across storage arrays, while causing no downtime and no interruption or heavy deterioration of the performance of the VMs. It works by relocating the VM disk files to various storage locations, enabling the business to be proactive about storage migration and to improve the performance of storage in terms of capacity management. 

Like vMotion, Storage VMotion is completely integrated with vCenter Server, which allows for the easiest possible migration and monitoring.Storage VMotion works with any OS and storage hardware that is supported by ESXi. It enables administrators to take advantage of a mixture of heterogeneous file formats and data stores, without incurring any downtime. 

With Storage VMotion, administrators can migrate VM disk files to alternate LUNs in order to optimize performance with no downtime. It allows administrators to increase or decrease storage allotment, without a lot of manual work. Additionally, Storage VMotion can act as a tool to tier the storage, based on the value of the data, performance requirements, and the cost of various storage solutions. 

If you're in the market for a better VMware monitoring solution, Opvizor has your answer. Snapwatcher enables VMware snapshot monitoring and reporting so that you can track invalid snapshots that can happen when migrating virtual machines. [Register](https://mediashower.com/ce2/37989/2/177) for Snapwatcher here, to detect and solve all kinds of bad Snapshots.
