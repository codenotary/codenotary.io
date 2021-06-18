---
title: "NetApp SolidFire extension for Performance and Capacity monitoring"
image: /images/blog/add_solidfire.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-07-24"
---

Since Performance Analyzer 4.9.2 we support [NetApp SolidFire](https://www.netapp.com/us/products/converged-systems/hyper-converged-infrastructure.aspx), so you can monitor and analyze your NetApp SolidFire HCI systems configuration and performance metrics. Correlate events and metrics from your Storage system, the underlying operating system and the related infrastructure components (VMware vSphere Datastores aso.). Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![NetApp SolidFire extension](/images/blog/add_solidfire.png)

NetApp SolidFire is a business division of NetApp Inc. that specializes in all-flash storage systems. NetApp acquired SolidFire in early 2016 with the intention of selling its arrays to cloud providers and customers looking to build private clouds, end user computing and workload consolidation.

![NetApp solidfire Cluster View](/images/blog/cluster_view.png)

Some of our NetApp SolidFire extension metrics collected are:

Cluster

- active BlockSpace
- active Sessions
- average IOPS
- cluster Recent IO Size
- current IOPS
- max IOPS
- max OverProvisionableSpace
- max ProvisionedSpace
- max UsedMetadataSpace
- max UsedSpace
- non Zero Blocks
- peak Active Sessions
- peak IOPS
- provisioned Space
- snapshot Non Zero Blocks
- total Ops
- unique Blocks
- unique Blocks Used Space
- used Metadata Space
- used Metadata Space In Snapshots
- used Space
- zero Blocks

Volume:

-  volume Size
-  zero Blocks
-  non Zero Blocks
-  volume Utilization
-  actual IOPS
-  average IOPS Size
-  throttle
-  burst IOPS Credit
-  client Queue Depth
-  latency USec
-  total Latency USec
-  write Bytes
-  write Ops
-  write Latency USec
-  unaligned Writes
-  read Bytes
-  read Ops
-  read Latency USec
-  unaligned Reads

Nodes:

- cpu
- used Memory
- network Utilization Storage
- network Utilization Cluster
- cBytes Out
- cBytes In
- sBytes Out
- sBytes In
- mBytes Out
- mBytes In

DrivesStatus:

- active
- available
- erasing
- failed
- removing

![NetApp Solidfire extension dashboards](/images/blog/navigation-2.png)

That information of our NetApp Solidfire extension is presented very functional and easy to understand with our built in dashboards. Combined with the integrated VMware vSphere dashboards for beginner, advanced users and experts you can gain insights you´ve never been able to see before.
