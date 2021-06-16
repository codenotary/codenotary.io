---
title: "CNIL Metrics and Logs: Part 17 – Performance in real time for Microsoft SQL Server"
image: /images/blog/1-5.png
tags: ["Ops", "opvizor"]
date: "2016-11-02"
---

[Rand Group](https://www.randgroup.com/software/sql-server/sql-server-optimization/?gclid=CjwKEAjw7ZHABRCTr_DV4_ejvgQSJACr-Ycwi3ReSVVDFlyt7or3p_RNnKH0RhMKsCG5vTAtoqBs2hoCCzvw_wcB) offers a possibility to optimize your performance on SQL servers.

As an IT Professional, your goal is to keep the technology environment humming along so no one has reason to yell at talk to you. Rand Group specializes in improving the performance of Business Applications like Microsoft Dynamics ERP, SharePoint, CRM, and Exchange.

**SQL Server Optimization services** includes a review and if necessary, optimization, of your:

- SQL environment and services
- Hardware performance
- Underlying storage performance (disk speed, volumes, and latency)
- SQL trace flags and configuration parameters
- SQL memory allocation
- SQL indexes and fragmentation
- SQL maintenance and optimization plans
- Database configuration, growth patterns, and sizing
- Backup and disaster recovery plan and high availability
- Recovery models
- Additional areas for improvement

The official [SQL Server Blog](https://blogs.technet.microsoft.com/dataplatforminsider/) from Microsoft, here is one of the official news

## Azure Premium Storage and SQL Server

Premium Storage is based on Solid State Disks (SSD) in the storage backend, dedicated fast connections between the storage backend and new compute clusters, and VMs local read-only caches that are also SSD-based. Writes are sent to the backend to guarantee their persistence via 3 copies. Writes trigger an update on the VM read-only cache. Reads that can be served from the cache return immediately; others are served quickly from the backend, also updating the cache as a result. More details [here](http://azure.microsoft.com/blog/2015/04/16/azure-premium-storage-now-generally-available-2/).

VMs using Premium Storage get a guaranteed higher storage bandwidth to serve writes and reads. Reads served from the cache are not counted towards this bandwidth. The high bandwidth allows writing and reading more data per second to the storage. This increases transaction throughput and reduces the time for query scans and other operations such as backup/restore, batch loads, and index rebuilds.

## Microsoft SQL Server on vSphere Best Practices Guide

Blog post of VMware by [Niran Even-Chen](http://blogs.vmware.com/apps/author/niranevenchen)

> Microsoft SQL server is the most virtualized enterprise mission critical application today. In recent years it has become a mainstream effort among VMware customers to virtualize critical databases to allow better agility and scale while increasing availability and operational efficiency.This guide, now named “Architecting Microsoft SQL Server on VMware vSphere – Best Practices Guide” to reflect its focus on architecture and configurations of vSphere as well as SQL server for maximizing the benefits of virtualizing SQL server, is aimed at providing VMware customers and partners guidance on how to achieve best performance and efficiency with the latest versions of Microsoft SQL server and VMware vSphere.In this guide there are also references to other VMware and third-party documents which we encourage the reader to consult for better understanding of the topics discussed.

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze Microsoft SQL Server configuration and performance metrics. Correlate events and metrics from databases, operating system and virtualization layer (VMware vSphere, Microsoft Hyper-V). Troubleshoot bottlenecks and capacity issues in minutes using our efficient data crawler and preconfigured dashboards. Complete setup in minutes instead of hours or days.

![Microsoft SQL Server](/images/blog/1-5.png)

Some of our Microsoft SQL Server integration features are:

- Visualize real-time and historical performance metrics of your SQL Server
- Set important thresholds for your SQL Server based on custom metrics
- Use Database I/O and Size trends to plan capacity and performance ahead
- Share important data from your SQL Server with your team in real-time
- Full insights into Disk Latency and VM Disk IOps of the underlying operating system
- Native installation on top of Windows Server OS and Azure SQL are supported

![Microsoft SQL Server](/images/blog/2-5.png)

### [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
