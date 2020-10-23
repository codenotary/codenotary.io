---
title: "VMware vSphere 6 and VMware Monitoring Make Waves in the Enterprise"
tags: ["Ops", "opvizor"]
date: "2016-01-07"
---

vSphere 6 was announced back in February and released in March 2015. However, that doesn't mean that every customer has already upgraded to it or is totally aware of all the features. Blogs and news writers are already touting its many new and improved features. It is clear from the announcements that VMware is moving steadily in the direction of [enabling a completely software-defined data center](http://searchvirtualstorage.techtarget.com/feature/VMware-vSphere-6-release-good-news-for-storage-admins), where each layer of the infrastructure is virtualized, featuring the virtual machine as the centerpiece of the affair. Here are the benefits to look forward to with VMware vSphere 6.

## Introducing Virtual Volumes (VVOLs)

![VMware vSphere 6](/images/blog/bigstock-Attractive-Businesswoman-Looki-75907184.jpg)

_What does vSphere 6 have in store? The promises are exciting,..._

[VVOLs are responsible for enabling the provision](http://searchvirtualstorage.techtarget.com/feature/Prepare-for-VMware-VVOLs-and-how-they-will-change-storage-products), monitoring, and management of the VM's application storage. This includes compression, cache, thin provisioning, snapshots, clones, replication, de-dupe, encryption, etc. VVOLs handle these issues holistically, allowing for precise, policy-based resource allocations to each virtual machine. The resources can be distributed and re-distributed as needed for applications as the situation changes. This feature is new for vSphere 6.

## Improvements to VSAN

First introduced with version 5.5, VSAN is "hardware agnostic". It can be used on either legacy systems or with new hardware. Though there were originally some [problems with the beta version of VSAN](http://searchvirtualstorage.techtarget.com/essentialguide/VMware-VSAN-features-and-realities), improvements have been swift and significant. VSAN now has made huge strides towards a truly software-defined data center.

## Improvements to Fault Tolerance

Fault tolerance was first introduced with version 4. It is designed to keep apps running with [zero downtime and zero data loss](http://www.vmwarearena.com/vsphere-6-0-whats-new-in-vmware-fault-tolerance-ft/), even when there is a fatal error in the host. It works by keeping two hosts in complete synchronization, so that if one goes down, the other carries on without missing a beat. Before, fault tolerance had the limitation that hosts had to share data storage and VM disk, but that limitation has been dealt with in version 6.

## Improvements to High Availiability

![High Availability](/images/blog/bigstock-Business-meeting-in-an-offic-45341533.jpg)

Some of the features and improvements are completely new, but most are just significant improvements on existing features.

[High Availability in VMware](https://www.vmware.com/products/vsphere/features/high-availability) works by failing over and restarting hosts that run protected virtual machines in the same cluster. It leads to no lost data and usually imperceptible performance fluctuations for the user. With version 5, VMware has delivered support for Virtual Machine Component Protection. This offers enhanced protection from APD and PDL in block storage (FC, iSCSI, FCoE) or file storage (NFS). Before, vSphere only offered limited ability to detect problems with PDL, and no means by which to deal with APD. With version 6, these conditions can be detected, vCenter is made aware of the issues, and automatic failover is able to be initiated without any action on the part of the administrator.

## Upgrades to vMotion

vMotion has always been limited to [moving a virtual machine between hosts](http://searchvirtualstorage.techtarget.com/definition/Storage-vMotion), each supported by a single vCenter. With version 6, this is no longer the case. Virtual machines can now be moved across vCenters, and the restriction on distance (that was problematic in version 5.5) has also been eliminated. There is no 100-mile restriction and no RTT (round-trip time of less than 10 milliseconds) restriction, though intercontinental distances still have a RTT restriction of fewer than 150 milliseconds.

Excited about the better monitoring and control afforded by vSphere 6? You don't have to wait! You can get better VMware monitoring capabilities today with Opvizor's VMware performance monitoring tools. 

[Register now!](https://www.opvizor.com/register/)
