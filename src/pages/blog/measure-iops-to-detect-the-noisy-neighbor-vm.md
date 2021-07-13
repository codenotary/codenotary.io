---
title: "Measure IOPS to detect the noisy neighbor VM"
image: /images/blog/vmiops_detail-1.png
tags: ["Ops", "opvizor"]
date: "2016-10-28"
---

Measure IOPS is a very important task for any serious VMware vSphere Admin. Not just knowing what systems are utilizing most of my expensive storage, but also if they should be so greedy.

![Measure IOps VM](/images/blog/vmiops_detail-1.png)

The input/output operations per second (IOps) metric of any system is a key way to measure how much data is being exchanged between the storage and the related system. In a virtual environment is becomes enormously important as many virtual machines are sharing the same datastore and the same storage system. If one VM produces a ridiculous amount of transactions reading and/or writing to the disk it can have very negative effects to the overall storage performance.

Finding noisy neighbors, so Virtual Machines that use so many resources that other VMs running next to them encounter performance issues, can be tricky. Therefore, you should make sure to use the right tools to detect and visualize these.

It definitely helps to know the hosts drive or storage connection and the storage itself can handle. This is critical to setup the right thresholds. When troubleshooting issues and trying to map out your future capacity needs.

![Virtual Machine Disk metrics](/images/blog/vmiops.png)

Again, without a monitoring tool (and it does not need to be expensive) it can and will be horribly time consuming. Even if you know how to interpret [esxtop](http://searchvmware.techtarget.com/definition/esxtop), it only shows a single ESXi host at a time. Multiple hosts are no fun to monitor using local tools on the host console, trying to gather the IOPS information.

When speaking about ESXi hosts, you should also be able to check for the latency and IOps of these guys in the same console.

![VMware ESXi Disk Latency and IOps](/images/blog/esxlatency.png)

It would be kind of cool to merge these information in an easy way, right? I would think so / and here we go:

![Compare ESXi and VM IOps](/images/blog/iopsvmhost.png)

If you want to try by yourself, just start the [free 30 day trial of Performance Analyzer](http://try.opvizor.com/opvizor-perfanalyzer-product-page/)
