---
title: "New Starter Dashboard for VMware vSphere Troubleshooting"
image: /images/blog/Starter_VM_TroubleshootingDashboard_mini-1.png
tags: ["Ops", "opvizor"]
date: "2018-01-23"
---

The issue with troubleshooting is, that it is simply not preventive. You can only search for issues and fix them, when you are aware of them. Of  course there is a lot of hype around predictive analysis, but we are not there yet, that you can really predict bad performance problems. It is more about filling up partitions or patterns that didn´t happen for some time range (anomalies). Keeping up with best practices and knowledge base articles also has its limits. No doubt, you lower the changes of having trouble because of simple misconfigurations. 

But you don´t know what´s going on inside of the virtual machines, the applications or of course if it happens in a lower layer like (hardware or software failures in your network or storage network. 

So you need to watch your environment consistently. That´s part of being predictive. Issue is, the larger the environment, the harder to monitor it. And when something is ringing an alert, you need to dig deeper, go back in time and compare situations, change a configuration and compare performance metrics, and so on. That´s the troubleshooting part.

That´s one of many reasons why we created Performance Analyzer - to collect and correlate data for monitoring, analytics and troubleshooting into dashboards that are easy to understand.

[![VMware VM troubleshooting](/images/blog/Starter_VM_TroubleshootingDashboard_mini-1.png)](http://try.opvizor.com/perfanalyzer)

Now we went a step further and created 2 starter dashboards, one for ESXi hosts and one for virtual machines, that display all important metrics to monitor.

[![VMware ESX troubleshooting](/images/blog/Starter_ESX_TroubleshootingDashboard_mini.png)](http://try.opvizor.com/perfanalyzer)

Lets go into more details...

## Starter Virtual Machines Troubleshooting Dashboard

[![VMware vSphere Troubleshooting Virtual Machines](/images/blog/Starter_VM_TroubleshootingDashboard.png)](http://try.opvizor.com/perfanalyzer)

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-3.png)](http://try.opvizor.com/perfanalyzer)

The dashboard can be downloaded here: [Download Starter Virtual Machine Troubleshooting Dashboard](https://opvizor.atlassian.net/wiki/download/attachments/82057456/Starter_%20VMware%20Virtual%20Machines-1516117446459.json)

What virtual machine metrics are covered in the dashboard:

- CPU Usage
- CPU Ready %
- CPU Co-Stopping
- Memory Usage
- Memory Ballooning
- Memory Swapping
- Disk Read Latency
- Disk Write Latency
- Network dropped incoming (RX) packets
- Network dropped outgoing (TX) packets
- VM Storage Read Throughput
- VM Storage Write Throughput
- Read IOps
- Write IOps
- Network vNIC throughput incoming (RX)
- Network vNIC throughput outgoing (RX)
- current, average and maximum values for the chosen timeframe
- go back up to months, years (depends on configuration)

The metrics and charts are combined in sections (rows) for better and easier visibility. Sections are based on typical slowdown indicators for cpu, memory, network and disk access. 

All patches and new dashboards can always be found in our online manual, Change Log, Patch - [manual.opvizor.com](http://manual.opvizor.com)

If you don´t know where to import the dashboard in Performance Analyzer (btw. we proudly use [Grafana](http://www.grafana.org)!):

![Import Dashboard](/images/blog/import_dashboard.png)

## Starter ESXi Host Troubleshooting Dashboard

[![VMware vSphere Troubleshooting - VMware ESXi](/images/blog/Starter_ESX_TroubleshootingDashboard.jpg)](http://try.opvizor.com/perfanalyzer)

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-4.png)](http://try.opvizor.com/perfanalyzer)

The dashboard can be downloaded here: [Download Starter ESXi Host Troubleshooting Dashboard](https://opvizor.atlassian.net/wiki/download/attachments/82057456/Starter_%20ESXi%20Host%20Troubleshooting-1516117411707.json)[](https://opvizor.atlassian.net/wiki/download/attachments/82057456/Starter_%20VMware%20Virtual%20Machines-1516117446459.json)

What VMware ESXi host metrics are covered in the dashboard:

- VMs powered on
- CPU usage
- VM CPU usage on Host
- VM CPU ready on Host
- VM CPU co-stopping on Host
- Memory Usage
- Memory Swap Usage
- Memory Ballooning Usage
- VM memory usage on Host
- VM memory swapping on Host
- VM memory ballooning on Host
- Network throughput incoming (RX)
- Network throughput outgoing (TX)
- Network packets incoming (RX)
- Network packets outgoing (TX)
- Network packets incoming dropped (RX)
- Network packets outgoing dropped (TX)
- VM network throughput incoming (RX) on Host
- VM network throughput outgoing (TX) on Host
- VM network packets incoming (RX) on Host
- VM network packets outgoing (TX) on Host
- VM network packets incoming dropped (RX) on Host
- VM network packets outgoing dropped (TX) on Host
- ESXi VMHBA read latency
- ESXi VMHBA write latency
- ESXi device latency
- ESXi queue latency
- ESXi kernel latency
- Total VM read latency on Host
- Total VM write latency on Host
- current, average and maximum metrics for the chosen timeframe
- go back up to months, years depending on configuration

The end to end visibility inside the cluster between ESXi host and the running virtual machines provides a great way to pinpoint and troubleshoot storage or network performance issues. Of course cpu and memory congestions are much better to notice and to alert on.

VMware vSphere troubleshooting should be simple. But don´t take just our word - test Performance Analyzer yourself.

All patches and new dashboards can always be found in our online manual, Change Log, Patch - [manual.opvizor.com](http://manual.opvizor.com/)

If you don´t know where to import the dashboard in Performance Analyzer (btw. we proudly use [Grafana](http://www.grafana.org/)!):

![Import Dashboard](/images/blog/import_dashboard.png)
