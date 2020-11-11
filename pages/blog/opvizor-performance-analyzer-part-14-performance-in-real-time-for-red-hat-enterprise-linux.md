---
title: "Opvizor Performance Analyzer: Part 14 – Performance in real time for Red Hat Enterprise Linux"
image: /images/blog/1-2.png
tags: ["Ops", "opvizor"]
date: "2016-10-18"
---

There is a performance tuning guide available for Red Hat Enterprise Linux 7.Please find the complete white paper [here](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/7/pdf/Performance_Tuning_Guide/Red_Hat_Enterprise_Linux-7-Performance_Tuning_Guide-en-US.pdf).

**Abstract**

The _Performance Tuning Guide_ describes how to optimize the performance of a system running Red Hat Enterprise Linux 6. It also documents performance-related upgrades in Red Hat Enterprise Linux 6.

While this guide contains procedures that are field-tested and proven, Red Hat recommends that you properly test all planned configurations in a testing environment before applying it to a production environment. You should also back up all your data and pre-tuning configurations.

There is also a Youtube Video available from the Red Hat Summit, please find [here](https://www.youtube.com/watch?v=8C1X1ppOpho).

## [Performance analysis and tuning of Red Hat Enterprise Linux](https://rh2016.smarteventscloud.com/connect/sessionDetail.ww?SESSION_ID=44506)

by Larry Woodman, Red Hat and D. John Shakshober, Red Hat

> In this 2-hour session, we'll share how to configure and tune Red Hat Enterprise Linux versions 6 & 7 for optimal performance while running a variety of common applications. You’ll also learn how to evaluate and analyze the performance of heavily loaded systems and how to tune them to maximize performance on bare-metal x86 systems, and how it applies to tuning both Linux containers and clouds virtualized with KVM. Part 1: We'll share the internals of Linux virtual memory and how to tune for NonUniform memory (Numa). We'll share tools like "numastat" and techniques that are used to identify and resolve performance issues in a number of combinations of systems and applications including database servers, Internet servers, various financial applications on bare metal and using Linux containers. Part 2: We'll extend the performance discussion to disk and network IO. We'll take a deep dive into some examples to illustrate the latest performance analysis tools and techniques, like perf, tuna, and performance copilot, to identify performance bottlenecks impacting system and application performance.

## IBM also created a white paper

by Barry Arndt, Linux Technology Center, IBM 

Here is the overview:

> Every time you display an internet website in a web browser, a web server is used. A web server is the hardware and software combination that delivers web content, typically a website and associated data, over the internet to the requesting client browser. Websites served by web servers can be simple static pages, such as images or instruction manuals. They can also be complex dynamic pages requiring back end processing, such as retail product pages complete with current pricing, reviews, and social media approvals. The explosion of internet use and the incredible amount of content available by way of the internet have caused a corresponding explosion in the number of web servers required to deliver that content. If the web servers are poorly configured and perform sluggishly, the lag time for displaying the page in the browser increases. Lag times that are too great can lead to fewer returns to the website, and for online retailers, revenue loss. Thus, properly configured, high performing web servers are critical for successful online experiences and transactions. Few companies today have the luxury of owning, housing, and maintaining an excess of equipment. Having many underutilized servers creates unnecessary expense. Server consolidation through virtualization provides a means for eliminating unneeded servers and their associated costs. This paper examines best practices for configuring and tuning a web server on a virtualized system to achieve sufficient performance for successful transactions while providing the opportunity to cut costs.

The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze Red Hat Enterprise Linux (RHEL) configuration and performance metrics. Correlate events and metrics from applications and OS inside the guest with our RHEL OS metrics. If running virtual, combine them with VMware vSphere or OpenStack metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![Red Hat Enterprise Linux](/images/blog/1-2.png)

Some of our RHEL OS integration features are:

- Get System overall status (across multiple systems)
- Find Disk I/O bottlenecks
- Full insights into Disk Latency and VM Disk IOps
- See Memory Issues and Network Issues (Packet Loss) instantly
- Get all networking details
- Combine with applications running on top of the OS

![Red Hat Enterprise Linux](/images/blog/2-2.png)

### [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
