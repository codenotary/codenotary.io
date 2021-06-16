---
title: "Virtual Machine Performance Trends"
image: /images/blog/7days-1024x210.png
tags: ["Ops", "opvizor"]
date: "2020-04-22"
---

During these extraordinary times, we received more customer inquiries than ever before. Customer all over the world had to fight performance issues and degraded server response time because of the new mass of people working from home. Plenty of new virtual desktops were deployed utilizing the existing resources.

Of course you can fight these new resource request with more available resources. But lack of budget and time to delivery are often the roadblock to get to find quick solution. Luckily, many times we could help by utilizing the existing resources in a much better way -- find and eliminate the nasty configuration issues that massively decrease performance.

The one thing on top of the list is ... NUMA (NUMA Remote Node usage, NUMA Migrations). Your systems can easily suffer over 50% performance degradation - that's quite something if its your database everyone is working with.

![](/images/blog/7days-1024x210.png)

NUMA performance trends

As there are many different ways to optimize the NUMA memory usage we thought of something really helpful. Instead of only detecting bad NUMA configuration and tracking the NUMA performance metrics, we wanted to show a trend. That way you can make changes and track the impact for a single VM, an ESXi host or a whole cluster over time.

## The main NUMA metrics to check

Before we look into the trends, let's start with the most important configurations that result in better or worse NUMA aligment.

What are the main NUMA metrics every VMware vSphere admin should keep an eye on:

- NUMA Home Node usage
- NUMA Remote Node usage
- NUMA Home Node migration

All of these metrics are affected by:

- Host configuration
    - VMware ESXi version (the higher the better the options)
    - CPU Sockets
    - NUMA Nodes per Socket
    - NUMA Node memory size
    - BIOS NUMA node interleaving (some poor configurations has NUMA node interleaving active = very bad idea)
    - BIOS Power management (don't select balanced if you expect highest performance) - [https://kb.vmware.com/s/article/1018206](https://kb.vmware.com/s/article/1018206)
- VM configuration
    - VM Hardware version
    - CPU Sockets (overspending can hurt)
    - CPU Cores per Socket (should be aligned with the underlying hardware)
    - Memory size (don't configure over the capacity of a NUMA node) or make sure that vNUMA is active
    - CPU/Memory Hot-Add activated (no good outcome for NUMA - kills even the best VMkernel intention of proper NUMA alignment); be very careful with that
    - vNUMA (9 vCPU's and higher activate vNUMA; or an advanced option numa.vcpu.min)

I'm sure there is more to look at, but these are the most common things we've caught in the last years.

## The benchmark

When you start optimizing your environment for a better resource usage and less resource waste, it's important to set a benchmark. I would recommend using PowerCLI scripts to get the most important configuration documented, so you can start to compare against these.

**Some good scripts are inventory and NUMA checks**

Inventory Reporting for vSphere:

[https://github.com/AsBuiltReport/AsBuiltReport.VMware.vSphere](https://github.com/AsBuiltReport/AsBuiltReport.VMware.vSphere)

Virtual Machine Compute Optimizer Report:

[https://flings.vmware.com/virtual-machine-compute-optimizer](https://flings.vmware.com/virtual-machine-compute-optimizer)

Definitely create one of these before your start optimizing as, it helps you to keep track.

One of the many benefits of using CNIL Metrics and Logs is, that it can store common configuration and performance data for months or even years, so the benchmark is built-in by selecting the past time range. **Btw. we're working hard on a new feature to compare VM performance before and after certain changes.**

![](/images/blog/benchmark-1024x733.png)

## Performance Trends

Out of the box you get many different Performance related dashboards that help you finding NUMA misalignment and resulting performance degradation. As a rule of thumb, the higher the NUMA migrations the worse, the higher the NUMA Remote Node usage the worse.

Of course it happens when a VM is migrated or from time to time that these counters go up temporary - but never permanent or in the hundreds (or GB) a day.

Dashboards to get a quick overview what VMs suffer the most:

**Starter: VMware Virtual Machines**

![](/images/blog/starter-vm2-1024x471.png)

Check NUMA Performance per VM

**ESXi details: VMware Performance: ESXi host**

![](/images/blog/esx_new-1024x494.png)

Check the Performance of the ESXi host and NUMA nodes, metrics

### Check the trends

Existing customers can access these dashboards in the Customer Portal. In case you want to test them during the trial please contact our sales team.

![](/images/blog/trend_vm-1024x700.png)

Compare VM performance today, yesterday and weeks ago

The performance comparison can be done either for an individual VM, the ESXi host, the cluster or even across multiple vCenter. The time range to compare is also flexible and you can pick 2days, 7 days or 30days (or any other time).

To compare the whole environment and how each of these days changed form a NUMA Remote Node usage or NUMA migration perspective check our the NUMA special dashboard.

![](/images/blog/7days-1-1024x210.png)

How did the situation change compared to 7 days ago and what day had the highest impact

## Bottom Line

Our customers found plenty of ways to get far more performance out of their existing environment and saved ten-, hundred or sometimes a million dollar in new hardware by removing the performance blocker.

Check your NUMA metrics - you might be surprised how many performance issues have its root there.
