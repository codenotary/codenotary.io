---
title: "Opvizor Performance Analyzer: Part 3 - Performance in real time for DataCore SAN Symphony"
image: /images/blog/1-1.png
tags: ["Ops", "opvizor"]
date: "2016-09-08"
---

You can find a best practice guide [here](https://datacore.custhelp.com/app/answers/detail/a_id/1626), and a complete technical marketing documentation [here](http://www.datacore.com/sf-docs/default-source/manuals/datacore-virtual-san-design-guide.pdf?sfvrsn=8).

The introduction from DataCore Software best practices:

"DataCore has supported sending SCSI commands over an IP Network since 2001, first with our own STP driver until iSCSI became ratified and an iSCSI driver for Windows was available on Windows 2000 in 2003. DataCore have an iSCSI Target driver but rely on Third Party iSCSI initiator drivers to send the packets across the IP network. iSCSI 'sits' above and uses TCP in the network layer as the protocol to transfer commands from the initiator to the target. iSCSI uses specific name formats, typically IQN (iSCSI Qualified Name) but sometimes EUI (Extended Unique Identifier).

In most configurations the standard default settings will provide good performance and there is no need to make any changes. However, in Windows 2012 (and R2) and Windows 2008 (R2) there are a few specific parameters that should be set to help stabilize and improve performance. This document explains many of the settings, and offers recommendations with those that can help with iSCSI performance.

It should be noted that this networking area is complex and depending on a customer implementation will determine the best setting for that specific installation."

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze your DataCore SANSymphony systems configuration and performance metrics. Correlate events and metrics from your Storage system, the underlying operating system and the related infrastructure components (VMware vSphere Datastores aso.). Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![DataCore SAN](/images/blog/1-1.png)

Some of our DataCore SANSymphony integration features are:

- Find DataCore server bottlenecks and performance issues
- Check caching and replication efficiency in real time
- Full insights into Latency and IOps
- React on front-end and backend-network anomalies
- Combine DataCore SANsymphony metrics with consumer (VMware vSphere, MS Hyper-V)

![DataCore SAN](/images/blog/2-1.png)

### [Sign Up for Performance Analyzer today!](http://try.opvizor.com/perfanalyzer)
