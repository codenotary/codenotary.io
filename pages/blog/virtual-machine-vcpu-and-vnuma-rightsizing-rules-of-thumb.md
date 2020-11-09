---
title: "Virtual Machine vCPU and vNUMA Rightsizing – Rules of Thumb"
image: /images/blog/numa.png
tags: ["Ops", "opvizor"]
date: "2018-07-10"
---

there is a very helpful blog from [VMware's performance team](https://blogs.vmware.com/performance), please find the article [here](https://blogs.vmware.com/performance/2017/03/virtual-machine-vcpu-and-vnuma-rightsizing-rules-of-thumb.html). And due to our new version of [Performance Analyzer](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) we want to seize the opportunity to share this information.

Using virtualization, we have all enjoyed the flexibility to quickly create virtual machines with various virtual CPU (vCPU) configurations for a diverse set of workloads.  But as we virtualize larger and more demanding workloads, like databases, on top of the latest generations of processors with up to 24 cores, special care must be taken in vCPU and vNUMA configuration to ensure performance is optimized.

Btw. you´ll be thrilled by our upcoming NUMA dashboard integrations that are available by end of this week.

[![Virtual Machine vCPU vNUMA](/images/blog/numa.png)](http://try.opvizor.com/perfanalyzer)

[![Performance Analyzer Download](/images/blog/button_download-performance-analyzer.png)](http://try.opvizor.com/perfanalyzer)

Much has been said and written about how to optimally configure the vCPU presentation within a virtual machine – Sockets x Cores per Socket

![vNUMA](/images/blog/1.jpg)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2017/03/virtual-machine-vcpu-and-vnuma-rightsizing-rules-of-thumb.html)

Side bar: When you create a new virtual machine, the number of vCPUs assigned is divided by the Cores per Socket value (default = 1 unless you change the dropdown), to give you the calculated number of Sockets.  If you are using PowerCLI, these properties are known as [NumCPUs and NumCoresPerSocket](http://pubs.vmware.com/vsphere-60/index.jsp?topic=%2Fcom.vmware.wssdk.apiref.doc%2Fvim.vm.ConfigSpec.html). In the example screenshot above, 20 vCPUs (NumCPUs) divided by 10 Cores per Socket (NumCoresPerSocket) results in 2 Sockets. Let’s refer to this virtual configuration as 2 Sockets x 10 Cores per Socket.

## History

The ability to set this presentation was originally introduced in vSphere 4.1 to overcome operating system license limitations. As of vSphere 5, those configuration items now set the virtual NUMA (vNUMA) topology that is exposed to the guest operating system.

NUMA is becoming increasingly more important to ensure workloads, like databases, allocate and consume memory within the same physical NUMA node that the vCPUs are scheduled.  When a virtual machine is sized larger than a single physical NUMA node, a vNUMA topology is created and presented to the guest operating system.  This virtual construct allows a workload within the virtual machine to benefit from physical NUMA, while continuing to support functions like vMotion.

While the vSphere platform is extremely configurable, that flexibility can sometimes be our worst enemy in that it allows for many sub-optimal configurations.

Back in 2013, [I posted an article](https://blogs.vmware.com/vsphere/2013/10/does-corespersocket-affect-performance.html) about how Cores per Socket could affect performance based on how vNUMA was configured as a result.  In that article, I suggested different options to ensure the vNUMA presentation for a virtual machine was correct and optimal. The easiest way to achieve this was to leave Cores per Socket at the default of 1 which present the vCPU count as Sockets without configuring any virtual cores.  Using this configuration, ESXi would automatically generate and present the optimal vNUMA topology to the virtual machine.

However, this suggestion has a few shortcomings. Since the vCPUs are presented as Sockets alone, licensing models for Microsoft operating systems and applications were potentially limiting by the number of sockets.  This is less of an issue today with operating system core-based licensing, which Microsoft transitioned to starting with Windows Server 2016, but is still a consideration for earlier releases.

**Example:**

Since both Windows Server 2012 and 2016 only support up to 64 sockets, creating a “monster” Windows virtual machine with more than 64 vCPUs requires us to increase the Cores per Socket so the guest can consume all the assigned processors.

**Example:**

A virtual machine with 8 Sockets x 1 Core per Socket, hosting a single Microsoft SQL Server 2016 Standard Edition license, would only be able to consume 4 of the 8 vCPUs since that edition’s license limits to “lesser of 4 sockets or 24 cores”.  If the virtual machine is configured with 1 Socket x 8 Cores per Socket, all 8 vCPUs could be leveraged (reference: [https://msdn.microsoft.com/en-us/library/ms143760.aspx)](https://msdn.microsoft.com/en-us/library/ms143760.aspx)).

Additionally, some applications, like Microsoft SQL Server 2016, behave differently based on the Cores per Socket topology presented to them.

**Example:**

A virtual machine, hosting a Microsoft SQL Server 2016 Enterprise Edition license, created with 8 Sockets x 2 Cores per Socket may behave differently than a virtual machine created with 2 Sockets x 8 Cores per Socket, even though they’re both 16 vCPUs.  This is due to the soft-NUMA feature within SQL Server which gets automatically configured based on the number of cores the operating system can use (reference: https://msdn.microsoft.com/en-us/library/ms345357.aspx).

**vNUMA Behavior Changes in vSphere 6.5**

In an effort to automate and simplify configurations for optimal performance, vSphere 6.5 introduced a few changes in vNUMA behavior.  Thanks to Frank Denneman for thoroughly documenting them here:

[http://frankdenneman.nl/2016/12/12/decoupling-cores-per-socket-virtual-numa-topology-vsphere-6-5/](http://frankdenneman.nl/2016/12/12/decoupling-cores-per-socket-virtual-numa-topology-vsphere-6-5/)

Essentially, the vNUMA presentation under vSphere 6.5 is no longer controlled by the Cores per Socket value. vSphere will now always present the optimal vNUMA topology [unless you use advanced settings](https://pubs.vmware.com/vsphere-65/index.jsp?topic=%2Fcom.vmware.vsphere.resmgmt.doc%2FGUID-89C52376-60C3-452A-A269-9F4F7FE489C6.html).

That said…

**vNUMA Considers Compute Only**

When a vNUMA topology is calculated, it only considers the compute dimension. It does not take into account the amount of memory configured to the virtual machine, or the amount of memory available within each pNUMA node when a topology is calculated. So, this needs to be accounted for manually.

**Example:**

An ESXi host has 2 pSockets, each with 10 Cores per Socket, and has 128GB RAM per pNUMA node, totalling 256GB per host.

If you create a virtual machine with 128GB of RAM and 1 Socket x 8 Cores per Socket, vSphere will create a single vNUMA node. The virtual machine will fit into a single pNUMA node.

If you create a virtual machine with 192GB RAM and 1 Socket x 8 Cores per Socket, vSphere will still only create a single vNUMA node even though the requirements of the virtual machine will cross 2 pNUMA nodes resulting in remote memory access. This is because only the compute dimension in considered.

The optimal configuration for this virtual machine would be 2 Sockets x 4 Cores per Socket, for which vSphere will create 2 vNUMA nodes and distribute 96GB of RAM to each of them.

## So how do we make this easier?

Based on the value a compute configuration can provide, these are some simple rules that can be followed to ensure the optimal configuration is implemented.

**I propose the following Rules of Thumb:**

1. While there are many advanced vNUMA settings, only in rare cases do they need to be changed from defaults.
2. Always configure the virtual machine vCPU count to be reflected as Cores per Socket, until you exceed the physical core count of a single physical NUMA node OR until you exceed the total memory available on a single physical NUMA node.
3. When you need to configure more vCPUs than there are physical cores in the NUMA node, OR if you assign more memory than a NUMA node contains, evenly divide the vCPU count across the minimum number of NUMA nodes.
4. Don’t assign an odd number of vCPUs when the size of your virtual machine, measured by vCPU count or configured memory, exceeds a physical NUMA node.
5. Don’t enable vCPU Hot Add unless you’re okay with [vNUMA being disabled](https://kb.vmware.com/kb/2040375).
6. Don’t create a VM larger than the total number of physical cores of your host.

Example:

This table outlines how a virtual machine should be configured on a dual socket 10 core physical host to ensure an optimal vNUMA topology and performance regardless of vSphere version where the assigned memory is less than or equal to a pNUMA node.

![vNUMA](/images/blog/2.png)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2017/03/virtual-machine-vcpu-and-vnuma-rightsizing-rules-of-thumb.html)

Example:

This table outlines how a virtual machine should be configured on a dual socket 10 core physical host to ensure an optimal vNUMA topology and performance regardless of vSphere version where the assigned memory is greater than that of a pNUMA node.

![vNUMA](/images/blog/3.png)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2017/03/virtual-machine-vcpu-and-vnuma-rightsizing-rules-of-thumb.html)

To sum it up, these are some of the benefits provided using these rules of thumb:

- The resulting vNUMA topology will be correct and optimal regardless of the version of vSphere you are using.
- Reduction in remote memory access since a virtual machine will be contained within the fewest number of physical NUMA nodes.
- Proper alignment with most operating system and application licenses models.
- Provides the in-guest application the opportunity for optimal self-configuration.

There are always exceptions to ‘Rules of Thumb’ so let’s explore yours in the comments section below.

- [@vmMarkA](https://twitter.com/vmMarkA)
