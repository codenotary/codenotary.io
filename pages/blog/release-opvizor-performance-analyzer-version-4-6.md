---
title: "Release - Opvizor Performance Analyzer version 4.6"
tags: ["Ops", "opvizor"]
date: "2017-12-13"
---

# Release - Performance Analyzer version 4.6

We're thrilled to announce the new release 4.6 of our extremely popular Performance Analyzer product  to run, plan and monitor your virtual environment and much more. As always we spent time on simplifying look & feel, fixed some bugs and added lots of new metrics to extend our dashboards.

Enabling HTTPS on your appliance is still optional, but now extremly easy using our admin interface. No command line configuration anymore!

**More and more customers switching from highly complex operations management tools and old-style monitoring products to Performance Analyzer. Because they are tired of "where did I find that information" or "I know its possible, but I have no idea how to customize that view".** 

10 minutes, and Performance Analyzer is up and running in your vSphere environment, ready to check for noisy neighbors, storage bottlenecks or fast growing snapshots. Some more minutes and you have NetApp, Microsoft Windows, MS SQL, Linux, DataCore or Veeam Enterprise Backup manager integrated.

Many new features have been added in our admin interface to simplify integrations and restore dashboards.

But that's the back-end that you typically touch once a month - more important for you: our front-end changes are very neat.

Some use cases:

## NUMA

Here comes NUMA - very important to monitor and track NUMA nodes and the virtual machine resources using them.

![VMware ESXi NUMA config Release - Performance Analyzer version 4.6](/images/blog/numa_sm.png)

## ESXi HBA adapter

![VMhba Views](/images/blog/vmhba-sm.png)

## VMkernel Latency:

![VMkernel Queue](/images/blog/vmkernel_queue_sm.png)

## Network Compass 

shows the network traffic of virtual machines that stays are running on the same host vs. communication between VMs running on different hosts.

![Network Compass](/images/blog/network_compass_sm-1.png)

**New Features, version 4.6**

Data Crawling

- crawling speed has been improved
- new metrics added (more ESXi host, VM, storage and network metrics)
- new distributed vSwitch metrics
- new VM network communication direction metrics collection
- wasted resources data collection (paid add on)
- right sizing data collection (paid add on)
- support for localized events and changes
- support for VM configuration changes (paid add on)
- support for custom attributes and tags (paid add on)
- support for NetApp ONTAP 9.2 and NetApp OCUM 7.2
- support Microsoft Windows 32 Bit
- support Microsoft SQL named instances
- support for SNMP network devices
- support for VMware vCenter Appliance 6.5 (VCSA monitoring)

Dashboard

- VMware Performance: Host Single Dashboard extension = vmhba, kernel latency, NUMA
- VMware Performance: Network compass = Get information about the network "host-only" communication vs multi-host communication
- fix for no-data alerting
- small visualization bugs fixed

Other

- Admin interface changes: SSL configuration, retention configuration improved
- online resize data disk
- new Grafana 4.6 engine
- minor bugfixes and improvements

We already support many integrations out of the box or consulting-based and offer attractive customizing and project support packages:

- VMware vSphere
- VMware vCenter appliance (VCSA)
- Microsoft Hyper-V
- Amazon Web Services
- Microsoft Azure
- NetApp
- Docker
- Linux and Windows guest systems
- MS Windows processes and services
- Linux processes and services
- DataCore
- Microsoft SQL and other databases
- Veeam Enterprise Backup Manager

Please find [here](https://www.opvizor.com/performance-analyzer-integrations/) a list with all integrations:

[https://www.opvizor.com/performance-analyzer-integrations/](https://www.opvizor.com/performance-analyzer-integrations/)

_To evaluate please register here: [](http://try.opvizor.com/perfanalyzer)[Performance Analyzer 4.6](http://try.opvizor.com/perfanalyzer)_

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer.png)](http://try.opvizor.com/perfanalyzer)

Existing customers can download the patch here in a matter of hours, depending on the running version: [Changelog](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)
