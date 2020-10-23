---
title: "Release - Opvizor Performance Analyzer version 4.8"
tags: ["Ops", "opvizor"]
date: "2018-03-01"
---

Release - Performance Analyzer version 4.8

We're thrilled to announce the new release 4.8 of our extremely popular Performance Analyzer product  to run, plan and monitor your virtual environment and much more. As always we spent time on simplifying look & feel, fixed some bugs and added lots of new metrics to extend our dashboards.

This time we simplified Active Directory integration in our Admin interface, that allows you to define roles for specific AD groups. These roles are defined to 

![Active Directory Permissions](/images/blog/paads.png)

But that's the back-end that you typically touch once a month - more important for you: our front-end changes are very neat.

You can find the patch here: [Changelog/Patch](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)

One of the coolest features is the integration of ESXTOP metrics and the Intel Spectre/Meltdown Dashboard

### New Starter Dashboard for VMs including NUMA Home Node information.

![Performance Analyzer version 4.7](/images/blog/numa.png)

### New Starter Dashboard for ESXi

![ESXi Starter for Troubleshooting](/images/blog/Starter_ESX_TroubleshootingDashboard_mini.png)

### Intel Spectre/Meltdown Dashboard including status and performance change compared to the reference period

![Intel Spectre and Meltdown Dashboards](/images/blog/specmels.png)

Full Feature and Change Log:

Data Crawling

- crawling speed - multi-threading support improved (starting 4 vCPU and higher for large environments)
- ESXTOP integration, i. e. NUMA Home Node % and Bytes
- new metrics added (NUMA metrics, CPU Features, Microcode and ESXi Patchlevel)
- extensive support for renaming and movement of VMs, cluster or ESXi hosts (migration)
- avoid vCenter bug sending extremly high latency values
- support for NetApp ONTAP 9.3 and NetApp OCUM 7.3
- new OS collectors (Windows, Linux, MS SQL)

Dashboard

- new Intel bug Spectre/Meltdown dashboard including update progress and performance changes due to the patch
- new Starter Dashboards for VM and ESXi host troubleshooting
- new Highlight Dashboards for Linux and Windows OS
- added widget help for VMware dashboards
- small visualization bugs fixed

Other

- Admin interface changes: AD configuration, AD Group support for Administrator, Editor or Viewer roles
- logging enhancement
- /var/log directory moved to /data disk (2nd virtual disk of VM), that supports auto-resize
- new Grafana 4.6.3 engine
- new Heatmap plugin
- Out of memory detection (lack of resources)
- minor bugfixes and improvements

If you haven´t started using Performance Analyzer already, make sure to start today!!

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer.png)](https://try.opvizor.com/perfanalyzer)
