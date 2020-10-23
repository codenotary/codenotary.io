---
title: "VMware CPU Co-Stop and SQL Server Performance"
tags: ["Ops", "opvizor"]
date: "2016-10-31"
---

A very useful article from [David Klee](http://www.davidklee.net/about/) about the intricacies of virtualization CPU scheduling and its impact on the performance of the VMs.

You can read the complete article [here](http://www.davidklee.net/2016/03/03/vmware-cpu-co-stop-and-sql-server-performance/), or see some excerpts below.

![VMware CPU Co-Stop](/images/blog/costop2-1.png)

[](https://www.brentozar.com/sql/sql-server-performance-tuning/)

You’ll need access into VMware’s vCenter Server to see this metric. It’s not visible from inside the VM. [At least read-only access is advised, and if you’re a DBA, you need access into this layer anyway so you can better do your job.](http://www.davidklee.net/articles/sql-server-articles/why-sql-server-dbas-need-access-to-vmware-vcenter/)

First of all, a hypervisor metric called [Ready Time](http://www.davidklee.net/articles/sql-server-articles/cpu-overcommitment-and-its-impact-on-sql-server-performance-on-vmware/) / [Wait Time Per Dispatch](http://www.davidklee.net/2013/11/14/vmware-vcpu-ready-time-equivalent-in-hyper-v/) indicates that the hypervisor is queuing up the VM’s requests for executing tasks on the physical CPUs. The amount of time taken in the vCPU scheduling queue during an individual scheduling queue is measured, and the percentage performance hit on that vCPU is measured and reported. [This metric is fairly easy to understand if you are given the math and explanation.](http://www.davidklee.net/articles/sql-server-articles/cpu-overcommitment-and-its-impact-on-sql-server-performance-on-vmware/) **But, what about the scheduling of a widely parallelized process or task, such as a database query that is executed on all vCPUs?** Is it different?

## It’s worse.

[In early versions of the hypervisors](https://communities.vmware.com/docs/DOC-4960), if you had multiple vCPUs on a VM and executed a task that needed all available vCPUs to process a task, the host would need to each physical CPU free before that task would be executed in parallel. It was very strict, and it meant that the performance overhead was exceptionally high. Newer versions of the hypervisor have a relaxed CPU ‘co-scheduler’, where the CPU queues for a VM’s vCPUs might not execute exactly in parallel, but that the performance impact on the source VM and background VMs on the same host is not as great. However, as a result of this overhead, the overall time taken to execute that task is limited by the slowest physical CPU, or most bottlenecked CPU queue, in the group. Even with relaxed co-scheduling, sometimes all the vCPUs need to be scheduled to run simultaneously, and this is where Co-Stop comes in to play.

[VMware’s CPU Co-Stop metric](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1017926) shows you the amount of time that a parallelized request spends trying to line up the vCPU schedulers for the simultaneous execution of a task on multiple vCPUs. It’s measured in milliseconds spent in the queue per vCPU per polling interval. Higher is bad. Very bad. The operating system is constantly reviewing the running processes, and checking their runtime states. It can detect that a CPU isn’t keeping up with the others, and might actually flag a CPU is actually BAD if it can’t keep up and the difference is too great.

If you see blips above zero, you’ve got a performance challenge. The higher the number gets, the worse the performance impact can be. And… it’s not just the performance of this VM. It’s the performance of all of the VMs on the host. The vCPUs on the other VMs are sure to be impacted by this scheduling delay, and their performance will be negatively impacted as well.

To view the CPU Co-Stop values for one of your SQL Server VMs, open the vCenter Server web client link provided to your by your VM administrators, select your VM, select the Monitor tab, select Performance, and then Advanced. Click the CPU view and then Chart Options. Select ‘Co-Stop’ under real-time stats.

![CPU Co-Stop and SQL Server Performance](/images/blog/vcenter_costop.png)

Photo courtesy of http://www.davidklee.net/

The numbers that you see are milliseconds per 20-second polling interval that are spent in this paused state.

![VMware CPU Co-Stop and SQL Server Performance](/images/blog/0d4cf0357eb244c49400cc2164e19351.png)

Photo courtesy of http://www.davidklee.net/

This VM is healthy (at least from this view). Occasionally you’ll see small blips, and that’s OK. It’s when you see higher Co-Stop times that are sustained over minutes or hours where you get the large performance impacts. I’ve seen this value over 8000 per vCPU, and that VM took a performance hit over 90%.

I want to see sustained numbers no greater than 10ms per polling interval. Not 10 percent, mind you… 10ms.

SQL Server will widely parallelize high impact queries across as many CPUs as it can, up to the number set in the Max Degree of Parallelism setting. If come of these vCPUs are artificially slowed down to let the others catch up, your query performance will suffer. This delay is one that is more immediately felt than Ready time.

## How to detect it?

If you're looking for a very modern way to check and monitor not just Co-Stopping but all important performance metrics without spending much time on configuration and setup, you should give [Performance Analyzer a try](http://try.opvizor.com/opvizor-perfanalyzer-product-page/). It doesn't take more than a couple of minutes and you see the first results.

![VMware Co-Stop Performance Issue](/images/blog/costop.png)

That can be even more useful when you combine it with our Database View, i. e. MS SQL as database performance is hurt a lot by Co-Stopping.

![Microsoft SQL Analysis](/images/blog/sqlwait.png)

## What can we do about it?

You can reduce the number of vCPUs on the VM, but only if you can prove that you do not **_need_** all of them. You can “right-size” the VMs with the right number of vCPUs and/or the right vNUMA configuration to match the physical server’s NUMA configuration. You can move background workloads to other hosts to reduce the load on the host that your impacted VM is running on. You can reduce the background activity on the physical CPUs by throttling back background VMs using resource pools or CPU throttling, if necessary.

**Whatever you do, go to your VM administrators if you experience sustained high vCPU Co-Stop times. They might not be aware of this problem, or even know what Co-Stop is.**

Please be warned that if you are running a critical SQL Server or other mission-critical application with a snapshot on the VM, you might experience high vCPU Co-Stop times, and your VM’s performance can considerably suffer. [VMware even has a KB article on this topic.](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2000058) Please make your VM administrators aware of this challenge.  Do not use snapshots as a temporary backup for your critical VMs – EVER.

### Find [here](http://www.davidklee.net/articles/) some more articles from David

Here are some other articles about this topics:

- [How too many vCPUs can negatively affect performance](http://www.gabesvirtualworld.com/how-too-many-vcpus-can-negatively-affect-your-performance/) from Gabrie van Zanten
- [Let’s all take a minute to talk about co-stop](http://www.anexinet.com/blog/lets-all-take-a-minute-to-talk-about-co-stop/) from Chris Hayner
- [SQL Server Performance Tuning Tips](https://www.mssqltips.com/sql-server-tip-category/9/performance-tuning/)
- [How to Make Slow SQL Servers Go Faster](https://www.brentozar.com/sql/sql-server-performance-tuning/) by [Brent Ozar](https://twitter.com/BrentOzarULTD)

### [](https://mediashower.com/ce2/43911/6/177)[Start your Free 30 day trial today!](http://try.opvizor.com/opvizor-perfanalyzer-product-page/)
