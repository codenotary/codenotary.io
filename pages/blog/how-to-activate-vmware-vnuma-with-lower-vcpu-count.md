---
title: "How to activate VMware vNUMA with lower vCPU count"
tags: ["Ops", "opvizor"]
date: "2018-11-15"
---

Since we released our NUMA metrics dashboard, hundreds of customers were able to detect issues and unbalances NUMA usage. The performance degradation due to NUMA remote node usage can be massive and easily reach 75% performance loss.

![VMware NUMA issue](/images/blog/numa_issues.png)

We also get many questions about vNUMA and how to configure NUMA the best way. Therefore, we start a series about NUMA, vNUMA with this article. 

How to activate VMware vNUMA with lower CPU count

## What is NUMA

Non-uniform memory access (NUMA) is a computer memory design used in multiprocessing, where the memory access time depends on the memory location relative to the processor. Under NUMA, a processor can access its own local memory faster than non-local memory (memory local to another processor or memory shared between processors). The benefits of NUMA are limited to particular workloads, notably on servers where the data is often associated strongly with certain tasks or users. Wikipedia — 

[https://en.wikipedia.org/wiki/Non-uniform\_memory\_access](https://en.wikipedia.org/wiki/Non-uniform_memory_access)

When it comes to vNUMA, it means, that VMware ESXi is showing the physical NUMA configuration of the underlying hardware to the virtual machine, instead of hiding it. 

You can read more about NUMA, vNUMA and Performance issues here: 

[https://itnext.io/vmware-vsphere-why-checking-numa-configuration-is-so-important-9764c16a7e73](https://itnext.io/vmware-vsphere-why-checking-numa-configuration-is-so-important-9764c16a7e73)

vNUMA is deactivated by default for virtual machines with less than 9 vCPUs, or CPU or Memory hot-add is activated.

## vNUMA controls

VMware offers a bunch of advanced parameters to tweak vNUMA that can be found here:

[https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-3E956FB5-8ACB-42C3-B068-664989C3FF44.html](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-3E956FB5-8ACB-42C3-B068-664989C3FF44.html)

## Activate vNUMA for VMs with less vCPUs cores (i. e. 4, 6 or 8 vCPUs)

The virtual machine must be powered off to proceed.

![edit virtual machine hardware and settings](/images/blog/editsettings.png)

### Deactivate Hot Plug

First make sure, that CPU hot add or hot plug are deactivated.

![NUMA deactivate CPU-Hot-Plug](/images/blog/cpu-hot-add.png)

Same for Memory Hot Plug

![NUMA memory hot plug](/images/blog/mem-hot-add.png)

### Now we change the VM options

![Edit VM options](/images/blog/advoptions.png)

### Change the NUMA option

Please keep in mind, that most advanced NUMA options are not existing in the list, so you need to add them. If the option is already in the list, you can just change the value and save the config.

![add NUMA configuration parameter](/images/blog/addconfig.png)

### add the parameter numa.vcpu.min 

As the NUMA architecture will only be present with 9 and more vCPUs by default, you should set the value to the current amount of vCPUs, i. e. if you have 2 vCPU sockets and 2 vCPU cores each, you should set the value to 4.

![NUMA minimal setting](/images/blog/vnumamin.png)

After powering on the virtual machine the guest operating system can see the NUMA architecture and act accordingly.

Please be aware, that the VMware VMkernel does a pretty good job in managing NUMA, but sometimes and especially if you find systems that have NUMA unbalanced, it makes sense to give vNUMA the preference.
