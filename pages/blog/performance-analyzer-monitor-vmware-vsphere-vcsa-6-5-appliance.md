---
title: "Performance Analyzer: Monitor VMware vSphere VCSA 6.5 Appliance"
image: /images/blog/vcsa.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-10-05"
---

Your VMware vCenter Server Appliance or VCSA (or appliances) is the key management component for your VMware environment. You always want be on top of the performance and the disk space utilization of this appliance, as you don't want to lose the vCenter capabilities due to a filled up partition. Here comes VMware VCSA monitoring into play.

Therefore, we released our VCSA 6.5 integration for [Performance Analyzer](http://try.opvizor.com/perfanalyzer) that allows you to monitor all resources as well as the running services of the vCenter appliance at a glance. Our dashboards comes already preconfigured, so there is no need to manually design a dashboard, add widgets or walk through SNMP MIB files.

[![VMware VCSA Monitoring](/images/blog/vcsa.png)](http://try.opvizor.com/perfanalyzer)

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer.png)](http://try.opvizor.com/perfanalyzer)

Performance Analyzer is installed and up and running in minutes - just let us know if you want to test the VCSA 6.5 integration.

As we gather plenty of information from the VCSA 6.5 but don't want to hammer it with requests, we use a lightweight data collector that runs on the VCSA.

In our Overview section we focus on the most important metrics, so you see the number of processes, the cpu and memory usage as well as the utilization of the root file system. Of course you can chose different VCSA appliances, limit your view to check for certain mountpoints and go back in time for days, weeks or months.

![Monitor VMware vSphere VCSA](/images/blog/vcsa_new_header.png)

Check you disk partitions based on the mount point and if the VCSA partition fills up:

![VCSA disk space](/images/blog/diskspace.png)

You can also check if the services are running:

![VCSA service monitoring](/images/blog/services.png)

Of course its possible to send alarms via email, chat or webhook in case a service is failing.

The dashboard as a whole looks like that and contains all information you need to keep an eye on your VCSA!

![Full VCSA dashboard](/images/blog/vcsa_new_bg-sm.png)
