---
title: "Performance Analyzer Release 5.0.5"
image: /images/blog/nutanix.png
tags: ["Ops", "opvizor"]
date: "2019-02-25"
---

Some days ago we informed our users and blog reader about our upcoming Nutanix Prism and Prism Central support. Good news, its available with our latest [release patch 5.0.5](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch).

But that's not all - we encounter plenty of situations out in the open, where ESXi hosts are not running with the correct time set. As Performance Analyzer uses time series data and time tagged performance metrics, we're quite sensitive to time offsets. Therefore, we decided not just to resolve our issues, but also help admins to check the configured and used time in general, VMware vCenter and ESXi.

Last but not least we integrated a nice VMware vSAN memory calculation, that helps you to plan and check the physical memory usage to run vSAN storage.

**Patch is only valid for Performance Analyzer 5.0.2, so please update to 5.0.2 first.**

_Functional Improvements:_

- Nutanix Prism Element and Prism Central support
    
    ![Nutanix Highlights](/images/blog/nutanix.png)
    
- Oracle support for Container Databases and Plug-able Databases (needs also the new Oracle\_v2-Patch)
- Added VSAN Memory Calculation
- Added Password Change Option in Console Menu
- Added Warning on Upload of non-patch file
- Added Multistat Panel Plugin
- Changed Logic of determining ESXi host name to reflect vCenter behavior
- vCenter connection Test reports clock difference issues
- Multitarget Support for VMware Crawlers

_Appliance Operating System:_

- added NTP support and automatic switch between NTP and VMware Tools Timesync

_New Dashboard:_

- VMware Config: Clocks and Timedrift

_![ESXi time sync](/images/blog/timecheck.png)_

_Improved Dashboards:_

- Admin Graphite Server
- VMware Performance: VM - added NUMA Panels
- VSAN Capacity & Balance: added [Memory Calculation](https://kb.vmware.com/s/article/2113954)

_![VMware vSAN memory utilization](/images/blog/vsan_memory.png)_

_Fixes:_

- Fixed Solidfire Collector Exception
- Spectre & Meltdown: fixed false reporting for already patched hosts
- Support special Bladecenter and Blade Metrics in Cisco UCS Dashboards
