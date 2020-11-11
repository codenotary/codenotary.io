---
title: "Understanding VMware vSphere Terminology When Switching From Microsoft Hyper-V"
image: /images/blog/bigstock-Jargon-Concept-36887773.jpg
tags: ["Ops", "opvizor"]
date: "2015-12-17"
---

Whether you're making the switch from Microsoft HyperV to vSphere, or just need to be able to discuss the two platforms intelligently, you will find that there are a [number of terms](http://www.vwired.co.uk/2014/12/14/hyper-v-terminology-in-vmware-speak/) that are just enough different between the two as to make conversations a bit confusing. Here is a list of VMware vSphere terms and the corresponding terminology in Microsoft Hyper-V.

## VMware vSphere....................Microsoft Hyper-V

![VMware vSphere Terminology](/images/blog/bigstock-Jargon-Concept-36887773.jpg)

_Once you get accustomed to the different ways that vSphere and Hyper-V express things and get a feel for the differences in development, it is actually pretty easy to go back and forth between the two platforms._

## VMware vCenter Server and Microsoft Hyper-V Virtual Machine Manager

Both platforms have their [own management tools](http://searchservervirtualization.techtarget.com/tip/A-guide-to-Hyper-V-features-for-the-VMware-administrator). VSphere calls theirs the vCenter Server and vCenter Client, while Hyper-V calls theirs the System Center Virtual Machine Manager, blessedly shortened to SCVMM. SCVMM includes both a server and a client component.

## VMware Cluster and Windows Failover Cluster

Virtual server clustering is an essential step in allowing for high availability. Both platforms require hosts to connect to LUNs (shared-storage logical unit numbers), where the VM (virtual machine) disk files are stored. Clustering empowers failover in the event of host failure and also enables load balancing in the VMs.

## VMware vMotion and Hyper-V Live Migration

VMs can be migrated among hosts when clustered on shared storage. This migration allows for no downtime. VMware's is called vMotion, while Hyper-V's is called Live Migration. The process of migration works essentially the same way on both platforms.

## VMware HA and High-Availability Virtual Machines

![VMware vSphere Cloud](/images/blog/bigstock-Cloud-Computing-Datacenter-22024610.jpg)

_Clustering allows for failover among clusters. These two platforms handle failover a bit differently, but Hyper-V makes it a little harder to determine where virtual machines should restart when recovering from a failure._

Each of these platforms provides high-availability clustering capabilities, and each works in about the same way. Hyper-V clusters just might be a little harder to build. However, the real difference lies in the calculations regarding [failover](http://tritoneco.com/2012/07/18/vmware-vsphere-microsoft-hyper-v-term-sheet/). When a host fails in either platform, the VMs also fail. It's critical that the failed VMs restart at the right place. In the most recent version of Hyper-V and SCVMM, the failed VMs restart depending on configurations assigned in Windows Failover Clustering. The administrator is able to affect placement by way of suggesting which host each VM should restart on, but the settings have to be configured manually, which is quite difficult.

Though VMware and Hyper-V do have such differences, once a developer masters the terminology and a few such idiosyncrasies, it isn't difficult at all to master both platforms.

Are you looking for better ways of keeping up with VMware news and updates? Want to find a better VMware monitoring tool and other great resources? 

[Sign up for our newsletter](http://opvizor.us6.list-manage.com/subscribe?u=5e67b89e18341af0e8844b002&id=1e918cd24e) today.
