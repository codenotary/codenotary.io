---
title: "Opvizor Performance Analyzer: Part 7 – Performance in real time for Debian Linux"
image: /images/blog/Capture.png
tags: ["Ops", "opvizor"]
date: "2016-09-23"
---

"Linux tuning information is scattered among many hundreds of sites, each with a little bit of knowledge. Virtual machine tuning information is equally scattered about. This is my attempt at indexing all of it," said Bob Plankers in his Blog.

You can find his complete guide [here](https://lonesysadmin.net/tag/linux-vm-performance-tuning/).

"In a default distro install, system logging is often configured fully, suitable for a server or multi-user system. However, on a single-user system the constant writing of many system log files will result in reduced interactive system performance, and reducing logging activity will be beneficial for performance as well as the lifetime of the flash memory.

In a Debian Wheezy installation, the default system logger is rsyslog, and it configuration file is /etc/rsyslog.conf. In the rules section, the following logs are often enabled by default:

![Debian Linux](/images/blog/Capture.png)

There may also be rules for -/var/log/debug and -/var/log/messages, and |/dev/xconsole.

Note that kernel messages are logged in both kern.log and syslog, in addition to being available from the dmesg command from kernel memory. In a single user system, it is possible to disable most or all of these logs by placing a '#' character at the start of the corresponding lines. Logs can be re-enabled if it is necessary to debug a system problem."

You can find the complete page here: http://linux-sunxi.org/Optimizing\_system\_performance

You can find a discussion regarding Linux servers [here](http://serverfault.com/questions/598834/best-practice-on-linux-servers-and-cpu-power-throttling).

## The New Way

If you’re looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze Debian Linux configuration and performance metrics. Correlate events and metrics from applications and OS inside the guest with our Debian OS metrics. If running virtual, combine them with VMware vSphere or OpenStack metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![Debian Linux](/images/blog/debian_1.png)

Some of our Debian OS integration features are:

- Get System overall status (across multiple systems)
- Find Disk I/O bottlenecks
- Full insights into Disk Latency and VM Disk IOps
- See Memory Issues and Network Issues (Packet Loss) instantly
- Get all networking details
- Combine with applications running on top of the OS

![Debian Linux](/images/blog/debian_2.png)

### [Sign Up for Performance Analyzer](http://try.opvizor.com/perfanalyzer/) today!
