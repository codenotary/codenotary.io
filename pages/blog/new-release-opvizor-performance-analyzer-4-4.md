---
title: "New release - CNIL Metrics and Logs 4.4"
image: /images/blog/pa4.4_admin.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-09-13"
---

Opvizor released version 4.4 of its Performance Analyzer product for VMware vSphere environments, NetApp and DataCore storage and Guest OS as well as applications today, which is a major step towards even better ease of use and simplicity. 

We're proud that Performance Analyzer is considered the most easy to use monitoring and analysis solution for VMware vSphere. Customer feedback is overwhelming and we want to thank our customers again for choosing our solution and switching over from well know operations manager products. The main reason remains **simplicity**. That starts with the easiest possible deployment and integration and is followed by laser-focussed dashboards. Btw. there is no need to spend days and weeks on consultancy before you get valuable data out of the dashboards - that work has been done by us already!!

Our new release continues that **vision** of **reduce to the maximum** and **keep it simple, stupid**. KISS is not our idea, but it is as true as ever.

> KISS is an acronym for "Keep it simple, stupid" as a design principle noted by the U.S. Navy in 1960. The KISS principle states that most systems work best if they are kept simple rather than made complicated; therefore simplicity should be a key goal in design and unnecessary complexity should be avoided.

Having that in mind, we completely reworked our admin interface to allow a graphical integration and configuration of Microsoft SQL, Microsoft Windows and Linux guest systems. Furthermore, we added a visual interface to configure the data retention. Now you can easily decide and change how often the data should be collected and how long the data should be stored.

Of course, many changes and improvements can be found in our dashboards. New virtual machine and storage metrics are collected and you can pinpoint storage bottlenecks and noisy neighbors easier than ever.

Our existing customers experienced already our seamless update procedure over the past releases. Nothing changed here - this upgrade will also be smooth and simple.

![Performance Analyzer 4.4 new admin interface](/images/blog/pa4.4_admin.png)

**New Features, version 4.4**

Data Crawling

- built-in support for Microsoft SQL Server, Linux, Microsoft Windows
- crawling speed has been improved
- new metrics added (more storage and network metrics)
- always up2date VM / Datastore relation (Storage vMotion aware)

Dashboard

- updated VMware Navigation dashboard including License View
- VMware Performance: Datastore vs. Virtual Machines
- enhanced VMware VM snapshot dashboard incl. alerting
- Built-in Microsoft SQL Server, Linux, Microsoft Windows Dashboards (depending on license)
- small visualization bugs fixed

Other

- new Admin interface (easy add Microsoft SQL, Linux, Microsoft Windows; graphical data history settings)
- new Reporting v2 Beta (reports based on existing dashboards to simplify customization)
- Dashboard history and change management
- new Grafana 4.4 engine
- minor bugfixes and improvements

## Microsoft SQL Dashboard (section subset)

![Microsoft MS SQL](/images/blog/mssql4.4.png)

## VMware VM snapshot view including alerts

![VMware VM snapshot view](/images/blog/pa4.4_snapshots.png)

We already support many integrations out of the box or consulting-based and offer attractive customizing and project support packages:

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

_To evaluate please register here: [](http://try.opvizor.com/perfanalyzer/)[Performance Analyzer 4.4](http://try.opvizor.com/perfanalyzer)_

[![Download Perf Analyzer](/images/blog/button_download-performance-analyzer.png)](http://try.opvizor.com/perfanalyzer)

Existing customers can download the patch here, depending on the running version: [Changelog](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)
