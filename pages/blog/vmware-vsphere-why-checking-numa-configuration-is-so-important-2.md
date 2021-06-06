---
title: "VMware vSphere — Why checking NUMA Configuration is so important!"
image: /images/blog/1.png
tags: ["Ops", "opvizor"]
date: "2018-03-07"
---
## What is NUMA

Non-uniform memory access (NUMA) is a computer memory design used in multiprocessing, where the memory access time depends on the memory location relative to the processor. Under NUMA, a processor can access its own local memory faster than non-local memory (memory local to another processor or memory shared between processors). The benefits of NUMA are limited to particular workloads, notably on servers where the data is often associated strongly with certain tasks or users. 

Wikipedia — https://en.wikipedia.org/wiki/Non-uniform\_memory\_access

## The performance impact of NUMA

The main take away is, that the cpu — memory access is always the fastest, when the cpu can access its local memory. NUMA Nodes are CPU/Memory couples. Typically, the CPU Socket and the closest memory banks built a NUMA Node. Whenever a CPU needs to access the memory of another NUMA node, it cannot access it directly but is required to access it through the CPU owning the memory.

Remote node memory access is super-slow, not just 1 or 2% and the impact is not isolated to a single VM.

We've seen environments with hundred-thousands of NUMA migrations a day and dozens of TB remote memory usage. Oracle databases, SAP HANA, MS SQL, Microsoft Exchange, CAD applications and many more resource-intense applications were unbearable slow. When your server applications slow down, all of your clients suffer from the performance drop as well.

The most common way to check on an ESXi what VMs are using home or remote node memory is using esxtop on the command line. 

![NUMA-esxtop](/images/blog/numa-esxtop.png)

The N%L metric indicates the percentage of memory accessed in the NUMA home node.
If its not above 90, you know that a decent amount of memory is accessed on the remote node, and the performance drop can be substantial. Especially when the values are 60 and below for a longer period of time.

## the esxtop issue

When you take VM performance serious, you need to monitor remote node usage and NUMA migrations in a strategic way. Tools like esxtop provide a realtime view of a specific host and the VMs on that ESXi.

As virtual machines migrate between hosts on a regular basis and only a few people are capable of watching 10 esxtop views live while trackikng the VM location, you need software that focus on NUMA.

CNIL Metrics and Logs is a software that runs within a few minutes in your VMware vSphere environment and immediately starts monitoring the NUMA KPIs and tracks these metrics over time.

![NUMA-ML](/images/blog/numa-KPIs.png)

See Metrics and Logs in action (5 minute deployment): https://www.codenotary.com/products/immutable-ledger-metrics-and-logs

## Why do you need a NUMA strategy?

Each virtual machine managed by the NUMA scheduler is assigned a home node. A home node is one of the system’s NUMA nodes containing processors and local memory.

When memory is allocated to a virtual machine, the ESXi host always try to allocate it from the home node. The virtual CPUs of the virtual machine are constrained to run on the home node to maximize memory locality.

The VMkernel NUMA scheduler can dynamically change a virtual machine’s home node to respond to changes in system load whenever required or possible.

Nevertheless, the VMkernel works within physical and technical boundaries, and misconfigurations can cause bad performance. 
**You cannot just rely on the VMkernel for optimized load balancing of your VMs.**

Therefore, you need to start by checking your current NUMA situation.

1) Does NUMA remote access happen?
2) Do VMs migrate their Home node often? More than 10 times a day?
3) How much memory is moved with each NUMA migration?
4) How many VMs are affected?
5) Is that a general or ESXi host specific situation?

Then you need to start adjusting default VMernel settings or fix misconfigurations on a ESXi/VM basis and track all improvements over time.

We've seen VMs suffering massively from thousands of migrations a day. As every migration triggers a memory content migration as well (the VMkernel tries to optimize by moving remote node memory to home node memory) it can easily slow down the whole ESXi host.

Your strategy and goal should be to avoid NUMA remote node access (except for short periods of time) and get the NUMA migration close to 0.


## How to detect NUMA performance issues

There are many different ways to run into NUMA performance issues, but its not really simple to monitor it without 3rd party software. As we already know, the most important thing to check is the NUMA Home Node usage.

### ESXTOP

When accessing the VMware ESXi console, you can use the esxtop command to check the current NUMA Home Node usage:

- esxtop
- m (the letter)
- f (to enable fields)
- G (to enable NUMA information)

Be aware, that the information is shown in real time and does not store or show any historic data. Furthermore, its hard to find NUMA information across multiple ESXi hosts in a cluster.

There are great articles and documents for esxtop:

[http://www.yellow-bricks.com/esxtop/#esxtop-run](http://www.yellow-bricks.com/esxtop/#esxtop-run)

[http://www.exitthefastlane.com/2016/04/vsphere-design-for-numa-architecture.html](http://www.exitthefastlane.com/2016/04/vsphere-design-for-numa-architecture.html)

## CNIL Metrics and Logs

Your strategy needs to be supported by software that detects and tracks NUMA KPIs and your optimization efforts. 
Metrics and Logs, collects all important NUMA metrics over a long period of time for all your ESXi hosts and VMs and visualize them. That way NUMA issues become visible and are not hidden anymore.

1) Home Node usage (% and GByte)
2) Remote Node usage (% and GByte)
3) NUMA migrations
4) Behaviour over time
5) Coloring codes (warning, critical)

Check out [CNIL Metrics and Logs](https://www.codenotary.com/products/immutable-ledger-metrics-and-logs). You can use the 30 day free trial to get started.

![NUMA](/images/blog/numa-2.png)

The important Metrics can be found in the Starter: VMware Virtual Machine Dashboard under Virtual Machine Memory Access Slowdown indicators

NUMA Home Node % shows the percentage of memory access that stays in the NUMA Home Node (the fastest memory access). That value should always be 100% or very close to 100%. If it goes below 90% for some time you should start optimizing.

NUMA Remote Node Access shows the memory amount in Byte that is accessed using the remote node (slowest memory access). When it comes to single digit Mbyte amounts, don´t worry. But — Gigabytes … take action!

Just make sure to use a vCenter role for the Metrics and Logs  user that allows Service Managers access.

![NUMA](/images/blog/numa-3.png)

## Key take aways: VMware configuration for NUMA optimization

- Don´t enable Node interleaving in your server BIOS!
- Order or configure the physical server hardware to have equal memory amounts for each NUMA node.
- Assign less or equal amount of vCPU´s to VMs than the total number of physical cores of a single CPU Socket (stay within 1 NUMA Node). Don´t count Hyperthreading!
- Check your virtual infrastructure in general to work optimized with the physical NUMA node limits of your servers. Watch for Monster-VMs!
- Avoid single VM consuming more vCPUs than the single NUMA node or it might be scheduled across multiple NUMA nodes causing memory access degradation.
- Avoid single or multiple VMs consuming more RAM than a single NUMA node, because it will cause the VMkernel to span a percentage of the memory content in the the remote NUMA node resulting in reduced performance.
- vNUMA (virtual NUMA) is enabled by default for VMs with 8 or more vCPUs. Caution! When enabling “hot add CPU/memory” or configuring CPU affinity, it automatically deactivates vNUMA.
- VMkernel NUMA rebalancing takes place every 2 seconds.

## What can potentially cause NUMA misplacement

- Configuring VM memory limits lower than the configured memory
- Configuring more vCPUs than physical cores per CPU socket
- Configuring more memory than the NUMA node has available

### Some more information about NUMA:

[http://frankdenneman.nl/2016/07/06/introduction-2016-numa-deep-dive-series/](http://frankdenneman.nl/2016/07/06/introduction-2016-numa-deep-dive-series/)

[http://frankdenneman.nl/2016/08/22/numa-deep-dive-part-5-esxi-vmkernel-numa-constructs/](http://frankdenneman.nl/2016/08/22/numa-deep-dive-part-5-esxi-vmkernel-numa-constructs/)

### [Sign up](https://www.codenotary.com/products/immutable-ledger-metrics-and-logs) for CNIL Metrics and Logs today and start 30 days for free!

