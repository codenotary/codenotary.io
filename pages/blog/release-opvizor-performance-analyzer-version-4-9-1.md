---
title: "Release - Opvizor Performance Analyzer version 4.9.1"
tags: ["Ops", "opvizor"]
date: "2018-05-17"
---

We're thrilled to announce the new release 4.9.1 of our extremely popular Performance Analyzer product to monitor and analyze your virtual environment. We spent a lot of time to improve the chart and panel hints to explain performance bottlenecks and the shown metrics. Furthermore, we added a lot of functionality for Cisco (Cisco UCS and Cisco HyperFlex) as well as NetApp Solidfire. Of course we also fixed some bugs and added lots of new metrics to extend our dashboards.

Last but not least, we support VMware Horizon View session (PCoIP and Blast protocol) performance data collection to monitor response time, data throughput and frames per second. 

[Release 4.9.1 Download](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)

**new features:**

- NetApp Solidfire support (additional license)
- Cisco UCS support (additional license)
- Cisco Hyperflex support (additional license)
- VMware vFlash configuration and performance metrics
- VMware Horizon view support (additional license)
- Workaround if vCenter and ESXi system times are mismatching
- Updated VMware dashboards - extended description
- new dashboards: "Highlights: Virtual Machines - Disksize", "Starter: VMware Datastores"
- PDF-Export of dashboards
- automatic resizing for system disk
- support for Postgresql-based reports (Inventory, Snapshot, Change Management - additional license)

**bug fixes:**

- NUMA-statistics collection skips infrastructure lower than VMware vSphere 6.0
- allow "-" in VMware infrastructure-names
- missing Performance-metrics showing as -1
- Veeam data crawler was stopping under certain circumstances
- relaxed data collection interval for Microsoft SQL
- custom retentions UI was broken in some cases
- relaxed config data collection (5 to 10 minutes interval)

Dashboard Cisco UCS:

[![Cisco UCS Performance Analyzer version 4.9.1](/images/blog/ciscoucs_pa491.png)](https://try.opvizor.com/perfanalyzer)

Dashboard Cisco HyperFlex

[![Cisco HyperFlex Savings View](/images/blog/vmsavings_hyperflex.png)](https://try.opvizor.com/perfanalyzer)

Dashboard NetApp Solidfire

![NetApp Solidfire](/images/blog/solidfir.png)

Dashboard VMware Horizon View

![VMware View](/images/blog/vmware_view.png)

If you missed Performance Analyzer so far, make sure to give it a try and check for critical VMware vSphere performance issues and much more. It´s a free trial!

\>
