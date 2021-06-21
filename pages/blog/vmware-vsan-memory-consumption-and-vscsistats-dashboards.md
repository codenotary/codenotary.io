---
title: "VMware vSAN memory consumption and vSCSIstats dashboards"
image: /images/blog/calculator.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-03-19"
---

The VMware vSAN community grows fast and we see more and more of our customers to integrate our vSAN plugin into Performance Analyzer.

Based on great feedback and some interesting findings we updated and added some of our dashboards to show storage histogram profiles per VM and also to calculate current and future vSAN memory consumption. Especially the memory consumption is not clear to every customer and we wanted to show real numbers.

Lets start with the VMware vSAN memory consumption, what it is, how its calculated and why its a topic.

The amount of Memory of required overhead is mandatory and cannot be avoided and shouldn't be reduced to maintain optimized performance. Memory overhead is something known for any virtual storage system and just the amount varies. The biggest difference when it comes to vSAN is, that you don't see the memory consumption as a task, process or virtual machine. When a virtual storage solution runs virtual machines, the memory usage can simply be checked at the virtual machine level - that's the big difference.

It's important when designing a VMware vSAN environment to keep the memory consumption in mind. When running a home lab that amount can be painful.

There is a very good VMware KB article about it: [https://kb.vmware.com/s/article/2113954](https://kb.vmware.com/s/article/2113954)

You definitely want to avoid shortcomings when using vSAN  [https://kb.vmware.com/s/article/2071753](https://kb.vmware.com/s/article/2071753)

The KB article describes the formula to calculate the memory consumption to run vSAN in a proper way as the involved components 

To calculate vSAN memory consumption in these releases, use this equation:

**BaseConsumption +(NumDiskGroups \* (DiskGroupBaseConsumption + (SSDMemOverheadPerGB \* SSDSize))) +(NumCapacityDisks \* CapacityDiskBaseConsumption)**

Where:

- BaseConsumption: is the fixed amount of memory consumed by vSAN per ESXi host.
- NumDiskGroups: is the number of disk groups in the host, this value should range from 1 to 5.
- DiskGroupBaseConsumption: is the fixed amount of memory allocated to each individual disk group in the host. This is mainly used to allocate resources used to support inflight operations on a per disk group level.
- SSDMemOverheadPerGB: is the amount of memory allocated per GB of SSD.
- SSDSize: is the size of the SSD disk in GB.
- NumCapacityDisks: is the number of capacity disks in the host (across all the diskgroups).
- CapacityDiskBaseConsumption: is the amount of memory allocated per capacity disk.

Note: The size of the SSD for all flash is capped at 600GB, and thus using SSDs larger than 600 GB will not consume additional memory.Constants

- BaseConsumption = 5426 MB
- DiskGroupBaseConsumption = 636 MB
- SSDMemOverheadPerGB (hydrid) = 8 MB
- SSDMemOverheadPerGB (allflash) = 14 MB
- CapacityDiskBaseConsumption= 70 MB

Note: In these releases, encryption and deduplication features have no impact on memory consumption.

Bad thing - who wants to sit down and calculate numbers. Therefore, we created a dashboard to do that calculation for you and visualize it in a nice way. Furthermore, you can switch between Hybrid and All Flash calculation - the dashboard is called VMware vSAN: Capacity and Balancing. It shows the distribution of all vSAN Nodes.

![vSAN memory consumption](/images/blog/calculator.png)

Another important topic we spent development time is the Storage profile histograms. It allows you to check the storage profile of your systems. More read, more write, what block size. That helps when planning for storage upgrades.

![VMware vSAN Histogram](/images/blog/histo.png)

Independent if you're using VMware vSAN or any other storage system and you need to get a storage profile of a datastore, single virtual machine or a complete cluster - make sure to check out our latest integration that brings vSCSIstats into Performance Analyzer.

Here comes a single VM:

![VM storage profile](/images/blog/histo2.png)

Here comes the datastore view:

![VMware datastore profile](/images/blog/iosize.png)

Just make sure to follow our guideline how to activate our vSCSIstats collector.

[https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/860160001/vscsiStats](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/860160001/vscsiStats)

Since vscsiStats consumes some host resources itself, it is not recommended to have it running all the time. But it is very helpful, if you have to troubleshoot storage performance.

To enable the Performance Analyzer vSCSIstats collector, Just add a custom attribute "opvizor.vscsistats" to the host(s) you want to monitor, and set it to 1 to start data collection. Set it to 0 to stop data collection. 

If you want to learn more about vSCSIstats check that blog post: [http://buildvirtual.net/using-vscsistats-to-gather-storage-performance-data/](http://buildvirtual.net/using-vscsistats-to-gather-storage-performance-data/)
