---
title: "VMware vMotion Special Features - Part 3"
image: /images/blog/wpid-confmax_net.png
tags: ["Ops", "opvizor"]
date: "2015-07-20"
---

**_Quick Resume & Stun During Page Send_**

Since the amount of memory available to virtual machines is always growing, VMware must be aware of this and must optimize vMotion for these VMs. Therefore VMware introduced some VMware vMotion Special Features to cover the future needs. _Quick Resume_ is a minimal modification to the vMotion procedure, since the entire memory capacity on the target host is not required until the migration is finished completely. _Quick Resume_ activates the target VM already before the entire memory data has been migrated. The source VM is paused (_Stun Mode)_, but its resources are not freed. In the background, VMware continues to copy the rest of the memory content and allows the target ESX host to access pages on the source ESX host.

As beautiful as this process seems at first glance, it also introduces the possibility of dangerous issues in the case of a hardware crash during the _Quick Resume_ process. In order to circumvent this, VMware uses a file on the central storage that acts as a sort of data buffer so that in the case of a hardware failure the migration process can still be completed. Of course this leads to this form of _Quick Resume_ having a decreased performance, but without this functionality a vMotion process between VMs with a large amount of vRAM would not be possible.

In vSphere 5.x this functionality is controlled using [Stun During Page Send or Slow Down During Page Send](http://www.vmware.com/files/pdf/vmotion-perf-vsphere5.pdf "Stun During Page Send or Slow Down During Page Send") (SDPS). Using this functionality the vMotion process monitors the rate of changed memory pages (_dirty pages)_ during the vMotion procedure and compares this with the current possible transfer bandwidth to the target ESX. Based on this result, the CPU of the source VM can be slowed somewhat by artificially introducing stops (sleep) on the order of milliseconds to slow down the rate of change. Doing this gives the vMotion process the chance to migrate even very dynamic systems.

Though this may introduce performance degradations, one must consider that slow data transfer rates or high data modification rates previously led to regular vMotion failures in older vMotion versions. 

**_Multi-NIC vMotion Support_**

Multi-NIC vMotion support, available since vSphere 5.x, is a clear step forward. It increases the bandwidth of the vMotion transfer by allowing multiple network adapters to be used simultaneously. However in order to benefit from the multi-NIC support there are some design considerations to take into account regarding the network infrastructure in the vSphere environment. 

It is possible to couple up to 4 1-Gbe and 16 10-Gbe network cards together for the vMotion transfer when mixing speed. The full list can be found here: [VMware vSphere 6 Configuration Maximums](https://www.vmware.com/pdf/vsphere6/r60/vsphere-60-configuration-maximums.pdf "VMware vSphere 6 Configuration Maximums")

![VMware vMotion Special Features - VMware vSphere 6 configuration maximum](/images/blog/wpid-confmax_net.png)

You should pay attention during the planning stage to which virtual machines will be used (vRAM configuration) as well as the layout of the server systems (PCI bus use) in order to properly handle increased network traffic (peaks).

**_Higher Latency Link Support_**

Before vSphere 5.x latencies above 5 ms were not permitted, despite such latencies being not uncommon when using vMotion over long distances (Long Distance vMotion). For this reason some cluster implementations spanning the borders of computing centers could not be operated or could  only be operated in a limited manner. To alleviate this limitation the supported latency was doubled from 5 ms to 10 ms in vSphere 5.5, but vSphere 6.0 shows up with 150ms support, however this feature requires an Enterprise Plus license.

**_Cross VMware vCenter Support_**

You can move between vCenter Servers with all migration types, cold  migrate, vMotion and Storage vMotion. There is also a way of a shared nothing migration, if you don't have any shared storage accessible by Source and Target ESXi host!

## VMware vMotion monitoring

The knowledge about these VMware vMotion Special Features as well as the knowledge how to use them go hand in hand.

To get a good feeling about your daily vMotion tasks and how long they take, check out our 

[VMotion/svMotion Report](https://www.opvizor.com/register "VMotion/svMotion Report")
