---
title: "New release - Performance Analyzer 4.2"
tags: ["Ops", "opvizor"]
date: "2017-05-23"
---

Opvizor released version 4.2 of its Performance Analyzer product for virtual environments, datacenter and applications today, which has been completely reworked and major new features have been added. 

One of the most important out-of-the-box improvements can be found within the VMware vSphere data collector. Most universal time series based products are not aware of the VMware unique object id and duplicate system data when virtual machines or cluster are renamed. Same is true for all public Grafana VMware vSphere integrations currently available.. That causes issues in statistics and top consumer charts and can waste large amounts of valuable storage (mostly SSD or Flash).

Our new data collector is fully aware of the unique id and supports moving or renaming any object and makes sure that all data is 100% accurate. That also enables us to aggregate multi-tenant environments or simulate environments without any redundant data.

While collecting data is just the backend of any monitoring software, the visualization puts sense into the data. We worked closely with our existing customers and listened carefully to the needs of new and potentials customers to design the most impactful dashboards. 

Visualizing storage bottlenecks, showing noisy neighbor VMs and statistics for resource and capacity planning are only some of our key features that save your day.

![Performance Analyzer virtual machine KPIs](/images/blog/highlights-1.png)

Last but not least, we support complex alerting rules to react on situations causing bad performance, that consists of multiple exceeded thresholds (at different interval, i. e. 15 minutes, 60 minutes, average or peak).

## **New Features, version 4.2**

- 100 new metrics are collected for VMware, NetApp, DataCore and Windows/Linux OS (and more)
- New and enhanced dashboards, i. e. VM key performance metrics
- Support for complex alerting rules and notifications
- Updated to Grafana 4.2 ([change log)](http://docs.grafana.org/guides/whats-new-in-v4-2/): Improved UI, new charts and panels)
- Update Admin UI: New UI, faster, fresh artwork
- All new VMware vSphere collector: faster, full unique object awareness (handles all kinds of object renaming or moving)
- Automatic Cleanup: When entities are removed from the infrastructure, the corresponding metrics are automatically purged after 30 days.
- Replaced Collectd with Telegraf. Metrics are mapped under perfanalyzer.\* path
- Changed Mailsystem Setup: Reporting System and Grafana UI mail settings merged, transport-protocol is auto-detected, admin E-Mail-Adress is synced with Grafana administrator. 
- Auto-resize for resized data disk (Data storage)
- Dashboard archive old dashboards function

## **Bug fixes**

- NetApp: Poller is now a mandatory field
- set Expire-Header on Admin-UI-Ressources
- Log Rotation for Reporting-Logs
- corrected issue on multiple clusters for reports
- changed locking mode for databases

Fully customized dashboards with almost unlimited potential of integration offers our customers the maximum of transparency for an attractive price. We already support many integrations and offer attractive customizing and project support packages:

- VMware vSphere
- VMware vCenter appliance (VCSA)
- Microsoft Hyper-V
- Amazon Web Services
- NetApp
- Docker
- Linux and Windows guest systems
- MS Windows processes and services
- Linux processes and services
- DataCore
- Microsoft SQL and other databases

Please find [here](https://www.opvizor.com/performance-analyzer-integrations/) a list with all integrations:

[https://www.opvizor.com/performance-analyzer-integrations/](https://www.opvizor.com/performance-analyzer-integrations/)

_To evaluate please register here: [Performance Analyzer 4.2](http://try.opvizor.com/perfanalyzer/)_

[![Performance Analyzer 4.2](/images/blog/button_download-performance-analyzer.png)](http://try.opvizor.com/perfanalyzer)

Existing customers can download the **patch** here: [Performance Analyzer 3.5.x -> 4.2](https://storage.googleapis.com/opvizor/pa_patch/patch_353_354_420.bin)
