---
title: "CNIL Metrics and Logs: Part 1- Performance in real time for IBM AIX"
image: /images/blog/lpar1-1.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-08-30"
---

Based on the IBM blog about using nmon command as a performance measurement or monitoring tool, this link is giving you in detail information: [https://www.ibm.com/developerworks/aix/library/au-analyze\_aix/](https://www.ibm.com/developerworks/aix/library/au-analyze_aix/)

The mentioned blog entry covers:

The nmon tool is designed for AIX and Linux performance specialists to use for monitoring and analyzing performance data, including:

- CPU utilization
- Memory use
- Kernel statistics and run queue information
- Disks I/O rates, transfers, and read/write ratios
- Free space on file systems
- Disk adapters
- Network I/O rates, transfers, and read/write ratios
- Paging space and paging rates
- CPU and AIX specification
- Top processors
- IBM HTTP Web cache
- User-defined disk groups
- Machine details and resources
- Asynchronous I/O -- AIX only
- Workload Manager (WLM) -- AIX only
- IBM TotalStorage® Enterprise Storage Server® (ESS) disks -- AIX only
- Network File System (NFS)
- Dynamic LPAR (DLPAR) changes -- only pSeries p5 and OpenPower for either AIX or Linux

Next to nmon, there are a couple of AIX commands known for performance monitoring / please see here:

[https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/AIX+Performance+Commands](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/AIX+Performance+Commands)

Other performance monitoring tools are listed at this IBM website: [https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/Other+Performance+Tools](https://www.ibm.com/developerworks/community/wikis/home?lang=en#!/wiki/Power+Systems/page/Other+Performance+Tools)

## The new way

If you're looking for a very modern way to check and monitor performance, you should give [**Performance Analyzer a try**](http://try.opvizor.com/perfanalyzer/). 

This product offers the following features:

- Get System overall status (across multiple systems)
- Find Disk I/O bottlenecks
- Full insights into Disk Latency and Disk IOps
- See Memory Issues and Network Issues (Packet Loss) instantly
- Get all networking details
- No installation on AIX needed, nmon dumps are used
- View different Systems and LPARs

Monitor and Analyze IBM AIX configuration and performance metrics. Correlate events and metrics from OS and LPARs with our AIX metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

Overall Performance and System load Highlights by LPAR

![IBM AIX](/images/blog/lpar1-1.png)

IOPs view in detail

![IBM AIX](/images/blog/lpar2-1.png)

Disk view in detail

![IBM AIX](/images/blog/ibm_aix_2-1.png)

## **Sign Up for [Performance Analyze](http://try.opvizor.com/perfanalyzer/)r today**
