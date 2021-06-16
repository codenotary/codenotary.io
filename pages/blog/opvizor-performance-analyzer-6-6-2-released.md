---
title: "CNIL Metrics and Logs 6.6.2 released"
image: /images/blog/admin_config.png
tags: ["Ops", "opvizor"]
date: "2020-05-07"
---

After a long period of adding new features, bug fixing and testing we're excited to announce the Performance Analyzer 6.6.2 release.  
Before we get into more bugfixing and improvement details, we want to highlight some new extensions.

Dell EMC PowerMax support and VMware Log Analysis.

Especially our extension for vSphere Tasks, Events and Syslog analysis (ESXi and vCSA) that supports analysis dashboards as well as realtime full-text search has been awaited eagerly.

## Where to get the new version?

Existing customers can find the latest patch in our [customer portal](https://www.opvizor.com/activecustomer/) and everyone who likes to evaluate Performance Analyzer can simply click **Download Now** or **Start Trial** on our website and we'll share the patch with them.

## What's New

### Bugfixes

- vSphere API version 6.7 changed format of reported color states
- Reduce change\_audit consuming server side resources over time
- AD-Server recognition. Won't rely on DNS additional records to resolve AD Controller

### new Features and Extensions

- Full support for VMware vSphere 7
- ChangeAudit: monitoring Events for Console connections, API-Logins und SSP-Logins
- SSL for AD
- Powerstate of VM to Snapshot statistics
- support HardwareStatusInfo and SensorInfo
- increased metric\_batch\_size for Windows agent
- Extension: Dell Powermax
- Extension: Support for Cisco Environmental and Sensor MIBs

### Log Analyzer extension

- Log Analyzer for VMware ESXi and vCSA
- vSphere Events, Tasks and Alarms support for Log Analyzer
- Added configuration tool for ESXi syslog setup

![](/images/blog/admin_config.png)

Enable the syslog receiver and filter severity to reduce data

![](/images/blog/admin_config-change-esx-896x1024.png)

You can use our admin interface to enable Syslog on your ESXi

The moment your ESXi hosts start sending data, you can chose between Dashboard view or Realtime Analysis.

![](/images/blog/Explore-1024x984.png)

Real time analysis

There are plenty of queries that can be used to filter the search and check for Syslog, Task and Event entries.

![](/images/blog/explore-detail-1024x517.png)

Furthermore we deliver already some dashboards with the release but continue to add more and more over time. Security information and storage error dashboards are already included.

![](/images/blog/dashboard-2-1024x415.png)

Dashboard to monitor storage related issues
