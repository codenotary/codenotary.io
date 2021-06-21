---
title: "CNIL Metrics and Logs: Part 9 – Performance in real time for NetApp"
image: /images/blog/netapp_dashboard-1.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-09-29"
---

There is a best practices available as white paper for NetApp and VMware vSphere Storage. You can find the complete paper [here](ftp://ftp.netapp.com/pub/alim/pub/tr-3749.pdf).

In the [NetApp Community](http://community.netapp.com/) there a many interesting discussions, e.g.

> "Beginning this month, Tech OnTap highlights popular discussion threads appearing in the NetApp Technical Community. In this month’s discussion, Christopher Madden, NetApp IT enterprise architect, shares his Graphite/Grafana Quick Start Installation Guide and fields dozens of questions from community members."

See the complete discussion [here](http://community.netapp.com/t5/Tech-OnTap-Articles/Ask-the-Experts-How-Can-I-Monitor-NetApp-Storage-Performance-with-Graphite-and/ta-p/122363).

### What are the best practices for adding disks to an existing aggregate or traditional volume?

When determining how many disks to add to an existing aggregate or traditional volume (TradVol), the following must be considered:

- The number of disks currently in the aggregate/TradVol
- The size of the RAID group(s)
- The current amount of space used in the aggregate/TradVolIn an aggregate, space used will show the space guarantees of the associated FlexVols, not just the actual usage by stored data.

When disks are added to an existing aggregate/TradVol, the storage system will attempt to keep the amount of data stored on each disk about equal.

For example, if you have four 20GB data disks in a TradVol/aggregate containing 60 GB of data, each disk will hold approximately 15 GB. The total space in the volume is 80 GB. The used space is 60GB. Each data disk contains 15GB of data.

When you add a new disk to that aggregate/TradVol, the storage system will write new data to this disk until it matches the pre-existing disks, which contain 15 GB each. 

In the previous example, after adding one 20GB disk to the aggregate/TradVol, the total size will be 100GB. The used space is still 60GB. The original three disks contain 15GB used space each. The newly added disk has 0GB used. Writes to the aggregate/TradVol will go to the newly added disk until its used space reaches 15GB. Once all four data disks have 15GB used, then the data will be striped across all four disks.

For best performance, it is advisable to add a new RAID group of equal size to existing RAID groups. If a new RAID group cannot be added, then at minimum, three or more disks should be added at the same time to an existing RAID group. This allows the storage system to write new data across multiple disks.

For example, if you have four 20GB data disks in an aggregate/TradVol containing 60 GB of data, each disk will hold approximately 15 GB. The total space in the volume is 80 GB. The used space is 60GB. Each data disk contains 15GB of data.

When three new disks are added, the total space in the aggregate/TradVol is 420GB. The used space is 60GB. The original three disks contain 15GB each of data. The three new disks contain 0GB of data. When new data is written to the aggregate/TradVol, it will be striped evenly across the three new disks until each disk contains 15GB of data. Once that occurs, new data will be striped evenly across all six data disks.

By adding a minimum of three disks at a time to an aggregate/TradVol, the throughput to disk is increased by providing more disks to write to at a given time.

Please read the complete article [here](https://kb.netapp.com/support/index?page=content&id=3011682) with some hopefully helpful examples.

# The new way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/).

Monitor and Analyze your NetApp storage systems (7-mode and Cluster mode) configuration and performance metrics. Correlate events and metrics from your Storage system, the underlying operating system and the related infrastructure components (VMware vSphere Datastores aso.). Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![NetApp Dashboard](/images/blog/netapp_dashboard-1.png)

Some of our NetApp integration features are:

- Monitor metrics across 7-mode and Cluster mode systems
- Check caching and deduplication efficiency in real time
- Full insights into Latency and IOps
- React on front-end and backend-network anomalies
- Drilldown from Highlights to Details, Filer Overview to single Disk

![NetApp Highlights](/images/blog/netapp_cl_highlights-1.png)

### [Sign Up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today!
