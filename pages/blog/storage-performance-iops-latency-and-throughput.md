---
title: "Storage performance: IOPS, latency and throughput"
tags: ["Ops", "opvizor"]
date: "2017-02-09"
---

This blog post is a summary  of articles I found about IOPS, latency and throughput and why it is important when troubleshooting storage performance.

Our Performance Analyzer product can become the easiest and best source to track these in real time. Tracking storage performance is an important part.

## 

[![Performance Analyzer Storage performance](/images/blog/iops.png)](http://try.opvizor.com/perfanalyzer)

## Storage performance: IOPS, latency and throughput

[Rickard Nobel](http://www.linkedin.com/in/rickardnobel) once wrote an article about storage performance, here are some information in extracts:

The most common value from a disk manufacturer is how much _throughput_ a certain disk can deliver. This number is usually expressed in **Megabytes / Second (MB/s)** and it is easy to believe that this would be the most important factor to look at. The maximum throughput for a disk could be for example 140 MB/s, however for several reasons this is often not as critical as it seems and we shall not expect to actually achieve that amount of throughput on a typical disk in production. We shall return to this value later.

Next term which is very common is called **IOPS**. This means **IO operations per second**, which means the amount of _read or write operations_ that could be done in one seconds time. A certain amount of IO operations will also give a certain throughput of Megabytes each second, so these two are related. A third factor is however involved: **the size of each IO request**. Depending on the operating system and the application/service that needs disk access it will issue a request to read or write a certain amount of data at the same time. This is called the **IO size** and could be for example 4 KB, 8 KB, 32 KB and so on. The minimum amount of data to read/write is the size of one sector, which is 512 byte only.

This means:

**Average IO size x IOPS = Throughput in MB/s**

Each IO request will take some time to complete, this is called the average latency. This latency is measured in milliseconds (ms) and should be as low as possible. There are several factors that would affect this time. Many of them are physical limits due to the mechanical constructs of the traditional hard disk.

Find Rickard's complete article [here](http://rickardnobel.se/storage-performance-iops-latency-throughput/).

## VMware Storage Throughput, IOPS, and Latency on TrueNAS with SIOC

[Brad Meyer](https://twitter.com/ixsystems) wrote an article about managing VMware Storage Throughput, IOPS, and Latency on TrueNAS with SIOC.

Here are some of his information in extracts:

**What is SIOC?** VMware introduced Storage I/O Control (SIOC) with the release of ESX and ESXi 4.1 back in 2010 providing the ability to manage storage I/O priorities when multiple VMs occupy a single shared datastore. As Cormac Hogan states in his article [_NF_](http://cormachogan.com/2012/12/12/nfs-best-practices-part-3-interoperability-considerations/)[_S Best Practices – Part 3:_ _Interoperab__ility Con_](http://cormachogan.com/2012/12/12/nfs-best-practices-part-3-interoperability-considerations/)[_s__iderations_](http://cormachogan.com/2012/12/12/nfs-best-practices-part-3-interoperability-considerations/) – “_The whole point of Storage I/O Control (SIOC) is to prevent a single virtual machine (VM) residing on one ESXi host from consuming more than its fair share of bandwi__dth on a datastore that it shares with other VMs which reside on other ESXi hosts._”

It’s really the “noisy neighbor” problem in VMware. You don’t want a lower priority VM strangling I/O capacity from a higher priority VM that shares the same datastore. This diagram shows the situation and what SIOC does for your datastore performance.

![Storage performance](/images/blog/blog1-1.jpg)

Photo courtesy of [Brad Meyer/ixsystems](https://www.ixsystems.com/blog/managing-vmware-sioc-truenas/)

The diagram shows that the “Data Mining” and “Print Server” VMs are using more datastore I/O resources than the more important “Online Store” and “Microsoft Exchange” VMs. With SIOC set, the “Online Store” and “Microsoft Exchange” VMs get VIP I/O priority and do not get limited by their “noisy neighbors” in the datastore.

**TrueNAS Hybrid and All Flash storage systems by iXsystems provide complete integration and compatibility for VMware SIOC whether you use Fibre Channel or iSCSI LUNs, or NFS.** It’s not necessary to get one storage solution for SAN and another for NAS. TrueNAS integrates both block and file storage protocols into one, easy to use system that is a fraction of the cost of comparable storage systems on the market today.

Read [here](https://www.ixsystems.com/blog/managing-vmware-sioc-truenas/) the complete article from Brad.

## Measure IOPS to weed out selfish VMs

[Mike Preston](http://twitter.com/mwpreston) wrote ["Measure IOPS to weed out selfish VMs"](http://searchvmware.techtarget.com/photostory/4500242982/The-top-10-PowerCLI-scripts-for-vSphere-administrators/11/Measure-IOPS-to-weed-out-selfish-VMs) in "The top 10 PowerCLI scripts for vSphere administrators":

The input/output operations per second (IOPS) metric is a key way to measure just how much data can be exchanged from the [storage and the virtualization arenas](http://searchvirtualstorage.techtarget.com/feature/10-ways-to-improve-virtual-server-storage). Knowing how many IOPs our VMs drive, our hosts drive, and our storage can handle is critical when you are troubleshooting issues and trying to map out your future capacity needs.

Without an expensive monitoring tool or the experience to run and interpret[esxtop](http://searchvmware.techtarget.com/definition/esxtop), then the administrator will have a challenge of trying to gather the IOPS information some other way.

[This script, from Curtis Salinas](https://communities.vmware.com/docs/DOC-13523), inspects the performance of VMs in your vSphere environment and analyzes hosts and VMs throughout the data center. The script can display the results to the screen and a .CSV file and can help track down which VMs are eating up more than their share of resources and straining your storage system.

## VMware vSphere storage design considerations

[Gareth Hogarth](http://www.twitter.com/viGareth) wrote in his Blog, [viKernel](https://vikernel.wordpress.com/about/) about VMWARE VSPHERE STORAGE DESIGN CONSIDERATIONS:

**Key Decision Points & Considerations**

- Plan for failure, a good storage design should take into account the impact of failure, for example:
    - Site failure (DR), your SAN array may support block level replication, if you don’t have this capability (due to cost or features) look at network/host level replication offered in vSphere 5.1 or other replication tools. Disaster recovery is not just about ensuring you can backup and restore data its about ensuring business continuity.
    - Identify bandwidth replication requirements / what is the rate of change ? (this impacts whether or not you can perform synchronous or a-synchronous replication).
    - Failure of individual components (review this end to end) fabric interconnects, switches, storage processors, drive shelves, host HBA, power etc… the key point here is to find ways for mitigating any risks from an infrastructure point of view.
- Size and plan according to workload peaks (example factors: backups, month-end reporting)
- Array availability requirements, n+1, n+2 etc… at minimum your solution should withstand the failure of at least one node (n+1), however be aware of the impact if a storage processor is down for maintenance. During periods of maintenance availability requirements might not be satisfied.
- Scale the design for current and future IOPs and capacity requirements, total storage capacity is the sum of all current storage usage plus projected growth, IOPs provides the performance the array needs to support the workloads.
- Do you plan to use advanced technologies such as – deduplication, sub-lun tiering, caching?
    - How will this impact the design, observe SIOC & array vendor best practises regarding the use of sub-lun tiering.
- Number and speed of drives needed (FC/SAS, SATA/NL, SSD), this has an impact on performance, capacity, availability and budget etc..

Please continue reading the complete article [here](https://vikernel.wordpress.com/tag/vmware-calculate-iops/).

## How To Measure IOPS Of A Virtual Machine With Resource Metering And MeasureVM

Didier Van Hoye wrote in his Blog [Working Hard on IT](https://blog.workinghardinit.work/) this article about how to measure IOPS of a virtual machine. Please follow the [link](https://blog.workinghardinit.work/2014/01/08/how-to-measure-iops-of-a-virtual-machine-with-resource-metering-and-measurevm/) for the complete article:

The first time we used the Storage QoS capabilities in Windows Server 2012 R2 it was done in a trial and error fashion. We knew that it was the new VM causing the disruption and kind of dropped the Maximum IOPS to a level that was acceptable.  We also ran some PerfMon stats & looked at the IOPS on the HBA going the host. It was all a bit tedious and convoluted.  Discussing this with Senthil Rajaram, who’s heavily involved with anything storage at Microsoft he educated me on how to get it done fast & easy.

Fast & easy insight into virtual machine IOPS.

The fast and easy way to get a quick feel for what IOPS a VM is generating has become available via resource metering and Measure-VM. In Windows Server 2012 R2 we have new storage metrics we can use for that, it’s not just cool for charge back or show back.

### Performance Analyzer Storage performance Views

Our Performance Analyzer product gives you instant access to the most vital ESXi host and VM information needed to troubleshoot your storage. If you need to go deeper into vSAN, NetApp or DataCore. We offer plugins for that.

![Top VM storage performance](/images/blog/topiops.png)

### If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/opvizor-perfanalyzer-product-page/).
