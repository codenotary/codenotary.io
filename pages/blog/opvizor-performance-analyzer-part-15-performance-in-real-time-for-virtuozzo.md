---
title: "Opvizor Performance Analyzer: Part 15 – Performance in real time for Virtuozzo"
tags: ["Ops", "opvizor"]
date: "2016-10-20"
---

[Here](https://virtuozzo.com/wp-content/uploads/2016/03/Virtuozzo_Using_IO_Limits_WP_Ltr_2012_March2016.pdf) is a white paper available for BEST PRACTICES FOR PARALLELS CONTAINERS FOR LINUXUsing I/O Limits to Maximize Container Performance

Introduction 

> I/O limits were introduced in Parallels Virtuozzo Containers for Linux 4.6 with Kernel 2.6.18, and in Parallels Server Bare Metal 5 with Kernel 2.6.32 and is now available in Parallels Cloud Server 6.0. Used in conjunction with CPU scheduling, these I/O limits provide very granular and powerful controls that help you avoid performance degradation in situations where high disk I/O activities in one container could slow down the performance of other containers on the server – situations that are sometimes referred to as “container penetration.” There is no one best I/O limit setting to use: typically, settings will differ from one server to the next because the Input/Output Operations per Second (I/OPS) throughput of disk subsystems themselves vary heavily, depending on the disk performance, RAID levels, and type of storage. Network bandwidth limits are another important factor to consider when setting the upper and lower I/O limits. This document will guide you in the best practices for setting I/O limits for any given server, taking all relevant factors into account. It covers only DAS (Direct Attached Storage) and does not describe settings for SAN-like storage solutions (e.g. Dell EqualLogic), as these solutions usually have separate mechanisms for avoiding I/O bottlenecks. 

You can also find a slide show with the title

## [Best Practices for IaaS with Parallels Virtuozzo Containers](http://download.parallels.com/summit/2012/presentations/LowellAnderson_BestPractices_Summit2012.pdf)

by Lowell Anderson, Director, Product Marketing, IAAS, Parallels

## Virtuozzo containers for Windows best practices and known limitations are [here](https://kb.plesk.com/en/112060).

Please find below the best practices

1. General use-cases
    
    Virtuozzo containers for Windows is highly recommended for hosters deploying small- and medium-sized containers that do not run mission-critical applications. The recommended scenarios are:
    
    - Platform for IIS hosting
    - Platform for Plesk hosting
    - Remote desktop and VDI (Firefox, MS Office, Skype, Acrobat Reader)
2. High-availability offerings
    
    Using the Microsoft Windows clustering software, you can create a [Virtuozzo failover cluster](http://download.swsoft.com/pvc/46/win/docs/en/VzClustering.pdf) consisting of two or more Hardware Nodes and providing failover support for Virtuozzo mission-critical services and containers. If one Hardware Node in the cluster fails or is taken offline as part of planned maintenance, the services and containers from the problem server are automatically failed over to another Node in the cluster.
    
    NOTE: Virtuozzo containers for Windows technology itself does not provide an SLA greater than 99.5%.
    
3. Virtuozzo containers for Windows versions
    
    To use the full power of high-performance servers, Virtuozzo recommends using the 64-bit version of Virtuozzo containers 4.6. The 64-bit version can be installed on servers running Windows Server 2008 R2 or the x86-64 editions of Windows Server 2008 and Windows Server 2003.
    
    NOTE: We do not recommend using 32-bit versions of Windows for resource-consuming containers with web and database hosting. Due to the non-paged pool limitation of 32-bit versions of Windows, the density of containers with web and database hosting servers decreases significantly.
    
    Related Knowledgebase articles:
    
    - [1675](http://kb.virtuozzo.com/en/1675 "[How To] Troubleshooting paged and nonpaged memory pool shortage (Event ID 2019 or 2020)"): \[How To\] Troubleshooting paged and nonpaged memory pool shortage (Event ID 2019 or 2020)
4. Virtuozzo containers for Windows container parameters
    
    NOTE: These parameters are approximate and apply to a typical container configuration. Some applications may require higher RAM and numproc limits. Consider application-specific requirements when setting up resource limits for containers.
    
5. Memory-hungry applications inside containers
    
    A container does not have its own paging file and its memory limit defines a portion of the paging file on the server assigned to this container. If customers run a memory-intensive application inside a container, the memory limit for this container must be set high enough to provide optimal application performance. Therefore, the service provider must provide appropriate guidance to the end-customer regarding the intended use and the appropriate level of memory availability for that customer’s VPS.
    
6. Backups
    
    Virtuozzo containers for Windows has a native backup tool that allows users to easily backup and restore the entire contents of containers. There is no need to install backup applications inside containers unless the application requires application-level backups (e.g., to restore individual Microsoft Exchange mailboxes). Customers can also use any of the [supported third-party backup](http://kb.virtuozzo.com/en/8527) tools to back up and restore containers.
    
    NOTE: We highly recommend backing up containers regularly.
    
    NOTE: Customers do not need to install backup applications inside containers unless they want to create application-level backups. In this case, they need to install a VSS-aware application on an additional drive rather than on the system drive (C). See the Usage Limitations section for more details.
    
    NOTE: For the best experience with Virtuozzo containers for Windows, we recommend backing up large containers to local storage and then transferring the resulting backups to network storage if required.
    
    NOTE: In addition to incremental and differential backups, we highly recommend creating full backups at regular intervals.
    
7. Migration
    
    Before migrating containers, always make sure that both physical servers have the same set of Microsoft updates and the same version of Internet Explorer installed.
    
    Related Knowledgebase article:
    
    - [3591](http://kb.virtuozzo.com/en/3591 "[Info] OS version compatibility for containers migration"): \[Info\] OS version compatibility for containers migration
    - [126432](http://kb.virtuozzo.com/en/126432) \[HUB\] Windows containers migration
8. Databases
    
    We highly recommend using Microsoft SQL or MySQL databases inside containers.
    
    NOTE: If a customer plans to use other databases inside a container, please ensure that the memory limit for the container is set high enough to provide the optimal database performance.
    
9. Microsoft .NET Framework
    
    Virtuozzo containers for Windows itself does not require the .NET Framework to function, which is why it is not necessary to install .NET Framework packages on the Hardware Node to make it work inside containers. If an application inside a container requires the .NET Framework, it will need to be installed directly inside the container.
    
    NOTE: .NET Framework versions differ among OS versions. Consider the OS compatibility table when installing the .NET Framework:
    
    [111448](http://kb.virtuozzo.com/en/111448 "How do I properly install .NET Framework inside containers?"): How do I properly install .NET Framework inside containers?
    
10. Defragmentation
    
    To achieve the best performance and reduce disk space usage, it is strongly recommended that you perform disk defragmentation for both the Hardware Node and the containers on a regular basis.
    
    Related Knowledgebase article:
    
    - [114828](http://kb.virtuozzo.com/114828 "Disk defragmentation in containers best practices"): Disk defragmentation in containers best practices

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze Virtuozzo and its base OS configuration and performance metrics. Correlate events and metrics from applications and OS inside the guest with our Virtuozzo metrics integration. Combine them with CentOS OS metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![Virtuozzo](/images/blog/1-3.png)

Some of our Virtuozzo integration features are:

- Get System overall status (across multiple systems)
- Find Disk I/O bottlenecks
- Full insights into Disk Latency and VM Disk IOps
- See CPU scheduling, Memory Issues and Network Issues (Packet Loss) instantly
- Get all networking details
- Combine with applications running on top of the Container or VPS

![Virtuozzo](/images/blog/2-3.png)

### [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
