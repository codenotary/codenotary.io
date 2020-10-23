---
title: "What's Up With the All-New VMware Virtual SAN 6.2?"
tags: ["Ops", "opvizor"]
date: "2016-05-24"
---

VMware Hyper-Converged software takes standard x86 servers and DAS (directly-attached storage) and morphs it into a truly simple Hyper-Converged Infrastructure (abbreviated as HCI). 

This helps [cut down the rising costs of storage](http://www.vmware.com/files/pdf/products/vsan/vmware-virtual-san-6-2-technical-white-paper.pdf), keeps complexity under control, and removes many of the performance limitations. It also makes it easy to leverage the most cost-effective and high-performance HCI solutions possible. Available as a software stack, it comes with VMware vSphere, Virtual SAN, vCenter Server, and enterprise-grade native storage.Virtual SAN 6.2 is integrated with vSphere natively, and can be configured in just a few simple clicks of the mouse. 

Additionally, it allows for zero dependence on external shared storage, and allows virtual machines to be assigned specific storage policies, according to the needs of the various applications in play within any given infrastructure. This setup allows for highly predictable performance and as much as a [ten-time improvement in storage efficiency](https://www.vmware.com/products/whats-new-virtual-san). 

## **Virtual SAN 6.2 is Built for Modern All-Flash Storage**

![Virtual SAN](/images/blog/bigstock--123061796.jpg)

_Virtual SAN 6.2 is designed to support modern infrastructures that are utilizing all-flash storage._

Optimized to leverage all-flash storage that is becoming more commonplace, [Virtual SAN 6.2](https://blogs.vmware.com/virtualblocks/2016/02/10/whats-new-vmware-virtual-san-6-2/) provides highly efficient near-line de-duplication, compression, and erasure coding in order to lower costs to as little as $1 per gigabyte of usable capacity. This is a 50 percent reduction in costs compared to competing hybrid solutions, which come with lower performance, as well. 

## **An Overview of Features** 

The latest features VMware provides in Virtual SAN 6.2 also include better health service and improved performance (leverage [the Performance Analyzer VMware monitoring solution](http://try.opvizor.com/perfanalyzer/) in your VMware environment for the optimal results). The latest version of Virtual SAN also offers improved space-saving technologies, which have been optimized for all-flash architectures, boosting storage capacity while simultaneously allowing for greater availability and performance. 

The de-duplication and compression enabling technologies can lower storage consumption by an impressive 7 times (though this does vary according to the kinds of data being stored, the number of duplicated blocks, the compressibility of the kinds of data, and the distribution of those blocks). 

## **Storage Policy Based Management (SPBM)** 

Virtual SAN 6.2 rolls out an entirely new Storage Policy Based Management (SPBM) rule, which VMware is calling the Fault Tolerance Method. This rule allows for administrators to select which method of fault tolerance should be used in their virtualized environments. Up until now, RAID-1 (Mirroring) was the sole method of failure tolerance used. With Virtual SAN 6.2, administrators can take advantage of RAID 5/6 (Erasure Coding) for all-flash architectures. 

## **Quality of Service (QoS)**

Virtual SAN 6.2 also introduces a new Quality of Service or QoS feature, which is designed to limit the number of IOPS any single object is allowed to consume. As the environment grows, this allows for expandability without added costs or a decrease in performance. This feature can help eliminate the "noisy neighbor" problem, and helps administrators manage larger-scale environments where numerous business units or customers are sharing available resources. 

##  **Improvements in Performance**

![VMware Virtual SAN](/images/blog/bigstock--125277152.jpg)

_Virtual SAN 6.2 provides lower cost storage while sacrificing nothing in terms of performance._

A whole set of new graphs and data points come with Virtual SAN 6.2, which offer information about the performance at all levels, including the cluster level, the host level, the virtual machine level, and the disk level. The administrator can also modify the Time Range in order to display information about the last few hours, or about a customized range of dates and times. 

Since the performance features of Virtual SAN 6.2 are specific to that system, you will still need to leverage [other VMware monitoring tools](http://try.opvizor.com/perfanalyzer/) to stay on top of the entirety of your VMware environment. Virtual SAN 6.2 assigns a performance service at the cluster level, and the history of performance is stored as a Virtual SAN object, which is totally separate from vCenter. Storage policies are issued to objects in order to control space consumption, availability, and performance related to a specific object. If that particular object becomes unavailable, the performance history associated with that cluster will also become unavailable until the access to that specific object is restored. 

Virtual SAN's data store allows the database related to performance history to take up as much as 255 gigabytes of capacity. 

## **Virtual SAN 6.2 Performance Metrics & VMware Monitoring** 

Virtual SAN 6.2 shows performance metrics for the virtual machines running on Virtual SAN 6.2, plus the Virtual SAN backend, at the cluster level. This setup allows for fast visibility across the entire cluster, displaying conveniently how Virtual SAN and its related objects are performing at any given time. 

## **Virtual SAN 6.2 Host Metrics** 

Not only does Virtual SAN 6.2 show performance at the cluster level, it also provides monitoring and metrics at the host level. This includes metrics for virtual machine consumption, plus the back end metrics that are related to any particular host. Other settings are also provided for delivering additional metrics, as needed by the administrator. 

## **Virtual SAN 6.2 Virtual Machine Metrics** 

Virtual SAN 6.2 also provides metrics at the virtual machine level. Administrators are now able to see performance data per cluster, per host, per group of disks, or per particular devices. This includes virtual machine consumption related to the applications in use. 

## **Virtual SAN 6.2 Health Services** 

This version of Virtual SAN also provides better health services than any of the previous versions. This service monitors and tests various items across the environment, including hardware compatibility issues, network connectivity issues, the health of specific clusters, and information on capacity consumption. The health service offers a number of metrics, including throughput, IOPs, latency, etc. Virtual SAN 6.2 comes with this health service enabled by default, and it's set up to assess the health of the environment once per hour. Of course, these settings can easily be changed to meet the needs of your environment. 

## **Virtual SAN 6.2 Support for Applications** 

This version of Virtual SAN goes even further in terms of supporting a wide variety of platforms and workloads. It easily scales to accommodate both large and small workloads, and is robust and effective in terms of supporting critical business applications, virtual desktop infrastructure (VDI), testing and development environments, and a host of other use cases. 

It supports Microsoft Windows Server Failover Clustering when used together with File Share Witness, plus support for SAP applications. Application types are also much more scalable with this version of Virtual SAN, and now doesn't come with the sizing challenges that are usually experienced when using legacy storage alternatives. 

For all of your VMware monitoring needs, check [Performance Analyzer](http://try.opvizor.com/perfanalyzer/) today and ask for the VSAN integration.
