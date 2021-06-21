---
title: "The Benefits of vMotion Over Live Migration (and the Best VMware Monitoring Solution to Do the Job Right)"
image: /images/blog/auto-racing-558065_640.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-04-19"
---

vMotion or Live Migration? The two seem extremely similar. Each migrates running VMs among hosts, with unnoticeable downtime to the end users. Like a fine wine or high-performance sports car, you have to spend time with each to begin noticing the subtle, yet distinct, differences between these two. 

But most people don't have the time or resources to spend quality time delving into both. You have to pick one or the other, and then you're basically stuck with what you've got and what you've invested all the time to learn. 

Unless, of course, you find a resource like this to talk you through it! 

## **The Main Difference is Performance**

![vMotion performance](/images/blog/auto-racing-558065_640.jpg)

_It's all in the performance. Have you ever noticed how seldom the car that takes pole position actually wins the race? That's because one short run doesn't necessarily indicate how the car will perform during competition conditions. That's a lot like comparing vMotion with Live Migration._

vMotion is available with vSphere Essentials Plus and higher versions. Live Migration is offered as part of the free Hyper-V Server 2012. Hyper-V Server 2012 lacks a logical graphical UI, however, it does come with many of the advanced features that are offered in the paid version. Microsoft claims that Live Migration is capable of handling an unlimited number of live migrations at the same time. In the real world, though, this isn't the smartest course of action. 

According to the experts, "infinite" is a highly inflated claim, and doesn't hold true in practical application.During a [research study](http://searchservervirtualization.techtarget.com/essentialguide/Live-Migration-vs-vMotion-guide-to-VM-live-migration-features), VMware was able to complete live migrations almost five and a half times quicker than the average Live Migration. (The study involved using vSphere 5 in Windows 2008 R2 SP1.) The same study concluded that Live Migration deteriorated the performance of live OSs and applications more so than did vMotion. 

Say you applied these differences across a massive live migration, such as that common in a large enterprise. The performance differences would be significantly compounded, most likely leading to noticeable and possibly problematic degradation in performance. Most enterprises just can't afford this kind of performance hit on a regular basis, which is why most opt to use the more tried-and-true vMotion. vMotion is scalable (and perhaps more reliable) to a greater extent, making it ideal for the larger IT environments. 

## **Another Difference is Longevity**

![vMotion Over Live Migration](/images/blog/football-1207235_640.jpg)

_Longevity is another area where vMotion surpasses Live Migration. Which would you rather have to prove your skills on the gridiron in -- a brand new pair of untested cleats, or the old, broken-in pair you've been comfortable in for eons? The old pair won't give you blisters._

While there is no doubt that Microsoft is capable of producing high-quality products (after all, who isn't still grieving over the loss of Windows XP and having anxiety issues over the clock ticking toward the time when Windows 7 will no longer be supported?), VMware has simply been in the virtualization game longer than our friends in Redmond. vSphere has just been around longer, commands a larger share of the market (particularly within the larger enterprise segment), and has [garnered the trust of the data center](http://searchservervirtualization.techtarget.com/tip/Comparing-the-subtle-differences-between-vMotion-vs-Live-Migration). 

## **Beyond the Virtual Machines** 

There is another aspect to consider, as well. You aren't just looking at the issue of migrating live VMs, you're actually choosing between two entire packages that comprise a total hypervisor. You're really looking at the difference between vSphere and the vCloud Suite and that of Windows Server and System Center. In fact, vSphere was [outperforming Windows Server out of the gate](https://redmondmag.com/articles/2015/05/01/vsphere-vs-hyperv.aspx), and the race hasn't quite gotten tight since. vSphere outpaces Windows Server 2012 in terms of scalability, security, as well as the performance of VMs. 

## **How to Get Started with vMotion** 

Begin by downloading and configuring vMotion. vMotion is one of the features that comes with vSphere Enterprise Plus, vSphere Enterprise, and vSphere Advanced suites. A trial is available if you're unsure yet whether you are ready to buy the whole enterprise package. Be sure you [check the requirements](http://searchvmware.techtarget.com/tip/Downloading-configuring-and-using-VMotion-in-vSphere-4) before downloading and installing, and that you add a vMotion-enabled VMkernel adapter (which allows you to use Fibre Channel storage). After configuration, you can begin live migrations with just a few clicks of the mouse. 

## **Understand the Inner Workings of vMotion Live Migrations** 

The VMware Distributed Resource Scheduler (DRS) is what is responsible for migrating the VMs off of hosts that are stressed for resources. This achieves a balance of resource utilization, and results in zero downtime for the end users. This helps save power and cooling costs. vMotion can also apply patches when necessary. 

**The process goes like this:** 

- It is determined that a running VM needs to be migrated from ESX 1 to ESX 2. (This is called vMotioning).
- The memory bitmap of the VM is copied from ESX 1 to ESX 2, while changes that continue to be made are written out to a bitmap on ESX 1.
- The VM is disabled on ESX 1 and its memory bitmap is copied over to ESX 2.
- The VM is then restarted (within milliseconds) onto ESX 2, and all of its access is now routed to the copy of the VM's memory, which is now running on ESX 2.
- Now, the remainder of the VM's memory is copied over to ESX 2, while the memory is still in the process of being read and written from ESX 1.
- When the live migration goes successfully, the VM is now completely unregistered from ESX 1 and running smoothly on ESX 2. 
- The physical switch the ESX is connected to will be informed by the ESX host using reverse ARP.

**Using vMotion With the Distributed Resource Scheduler** 

Even though these tools are designed to be used together, the features and functionalities don't always work perfectly in concert. DRS is designed to allocate resources, while vMotion migrates the live VMs when resources need to be reallocated. 

But it doesn't always work just perfectly, especially when fundamental misconfigurations exist. Sometimes, vMotion fails to provide connectivity to the VM as the VLAN is misconfigured, and other times the VM simply fails to migrate like it should as the vCenter is not stable. That means that you always need a good VMware monitoring solution, like Health Analyzer. You can [](https://mediashower.com/ce2/39437/3/177)[sign up for your vSphere Health-Check-as-a-Service](http://try.opvizor.com/health-analyzer/) today.
