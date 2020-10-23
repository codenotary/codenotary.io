---
title: "Opvizor Performance Analyzer for vSAN"
tags: ["Ops", "opvizor"]
date: "2018-07-19"
---

# Opvizor Performance Analyzer for vSAN

We are very proud to share some of our communities opinions about our Performance Analyzer. Please scroll down for [Duncan Epping's](http://twitter.com/duncanyb) blog post as well as [Brandon Lee's](https://www.virtualizationhowto.com/) blog post and their opinion about Performance Analyzer and vSAN.

Both articles are filled with screenshots, please scroll down for a taste of it!

We also wanted to thank Duncan and Brandon for these interesting articles and their thorough testing! 

## [Here](http://www.yellow-bricks.com/2018/07/10/opvizor-performance-analyzer/) is what Duncan wrote

At a VMUG a couple of months ago I bumped into my old friend Dennis Zimmer. Dennis told me that he was working on something cool for vSAN but couldn’t reveal what it was just yet. Last week I had a call with Dennis about what that thing was. Dennis is the CEO for [Opvizor](https://www.opvizor.com/), and some of you may recall the different tooling that Opvizor has produced over the years, of which the Health Analyzer was probably the most famous one back then. I’ve used it in the past on various occasions and I had various customers using it. During the briefing, Dennis explained to me that Opvizor started focussing on performance monitoring and analytics a while ago as the health analyzer market was overly crowded and had the issue that is was a one-off business (checks once in a while instead of daily use). On top of that, many products now come with some form of health analysis included. (See vSAN for instance.) I have to agree with Dennis, so this pivot towards Performance Monitoring makes much sense to me.

Dennis explained to me how they are seeing more and more customer demand for vSAN performance monitoring especially combined with VMware ESXi, VM and App data. Although vCenter has various metrics, and there’s VROps, he told me that Opvizor has many customers who need more than vCenter or vROPS standard has to offer today and don’t own VROps advanced. This is where Opvizor Performance Analyzer comes in to play and that is why [today Opvizor announced they are including vSAN specific dashboards](https://www.opvizor.com/new-vmware-vsan-monitoring-and-performance-troubleshooting-extension). Now, this isn’t just for vSAN of course. Opvizor Performance Analyzer includes not just vSAN but also vSphere and various other parts of the stack. When talking with Dennis one thing became clear, Opvizor is taking a different approach than most other solutions. Where most focus on simplifying, hiding, and aggregating, the focus for Opvizor is on providing as much relevant detail as possible to fulfill the needs of beginner and professional.

So how does it work? Opvizor provides a virtual appliance. You simply deploy it in your environment and connect it to vCenter and you are ready to go. The appliance collects data every 5 minutes (but 20 seconds intervals of these 5 minutes) and has a retention of up to 5 years. As I said, the focus is on infrastructure statistics and performance analytics and as such Opvizor delivers all the data you ever need.

![Performance Analyzer - vSAN](/images/blog/1-5.jpg)

It doesn’t just provide you with all the info you will ever need. It will also allow you to overlay different metrics, which makes performance troubleshooting a lot easier, and will allow you to correlate and pinpoint particular problems. Opvizor comes with dashboards for various aspects, here are the ones included in the upcoming release for vSAN:

- Capacity and Balance
- Storage Diskgroup Stats
- VM View
- Physical disk latency breakdown
- Cache Diskgroup stats
- vSAN Monitor

Now I said this is the expert´s troubleshooting tool, but Opvizor Performance Analyzer also provided in-depth information about what each metric is / means and provides starter dashboards for beginners. You can simply click on the “i” in the top left corner of the widget and you get all the info about that particular widget.

![vSAN with Performance Analyzer](/images/blog/2-4.jpg)

When you do know what you are looking for you can click, hover, and zoom when needed. Hover over the specific section in the graph and the point in time values of the metrics will pop up. In the case below I was drilling down on a VM in the vSAN cluster and looking at write latency in specific. As you can see we have 3 objects and in particular 2 disks and a “vm name space”.

![vSAN and Performance Analyzer](/images/blog/3-4.jpg)

And this is just a random example, there are many metrics to look at and many different widgets and overviews. Just to give you an idea, here are some of the metrics you can find in the UI:

- Latency (for all different components of the stack)
- IOPs (for all different components of the stack)
- Bandwidth (for all different components of the stack)
- Congestion (for all different components of the stack)
- Outstanding I/O (for all different components of the stack)
- Read Cache Hit rate (for all different components of the stack)
- ESXi vSAN host disk usage
- ESXi vSAN host cpu usage
- Number of Components
- Disk Usage
- Cache Usage

And there is much more, too many to list in this blog. And again, not just vSAN, but there are many dashboards to chose from. If you don’t have a performance monitoring solution yet and you are evaluating solutions like SolarWinds, Turbunomics and others make sure to add Opvizor to that list. One thing I have to say, I spotted a couple of things that I liked to see changed, and I think within 24hrs the Opvizor guys managed to incorporate the feedback. That was a crazy fast turnaround, good to see how receptive they are.

![Performance Analyzer - vSAN](/images/blog/4-3.jpg)

Oh, one more thing I found in the interface, it is these dashboards that deal with things like NUMA. But also things like the Top 10 VMs in terms of IOPS. Both very useful, especially when doing deep performance troubleshooting and optimizing.

![Performance Analyzer - vSAN](/images/blog/5-3.jpg)

![Performance Analyzer - vSAN](/images/blog/6-2.jpg)

### Thanks Duncan! Awesome article!

## Here is what Brandon wrote

With the latest patch rollup, version 4.9.2, Opvizor now has new and improved statistics and performance analysis of VMware vSAN, including the latest version, VMware vSAN 6.7!

### Applying the Opvizor 4.9.2 Update

Applying the update if you already are running Opvizor is very simple.  Under the **Admin** interface, you simply upload the patch and apply the update.  Opvizor recommends creating a virtual machine snapshot of the appliance before applying the update.

![Performance Analyzer - vSAN](/images/blog/1-3.png)

_Create a VMware snapshot of the Opvizor appliance before applying the 4.9.2 update_

![vSAN and Performance Analyzer](/images/blog/2-3.png)

_Upload the Opvizor 4.9.2 update to the Opvizor appliance_

_![vSAN - Performance Analyzer](/images/blog/3-3.png)_

_Apply the 4.9.2 update and reboot the Opvizor appliance_

### Opvizor 4.9.2 New vSAN 6.7 Performance Dashboards

After the update is applied and the appliance reboots, you will quickly see new dashboards that have been added for vSAN 6.7 and legacy vSAN performance monitoring.  These include:

- VMware vSAN Capacity and Balance
- VMware vSAN Physical Disk Latency Breakdown
- VMware vSAN: Storage Diskgroup Stats
- VMware vSAN: Cache Diskgroup Stats
- VMware vSAN VM View
- VMware vSAN Monitor

Below is a look at some of the new [VMware vSAN 6.7](https://www.virtualizationhowto.com/2018/07/replace-or-change-vmware-vsan-witness-host-with-vsphere-6-7-appliance/) dashboards including the very detailed performance statistics that are shown by Opvizor 4.9.2.

![Performance Analyzer and vSAN](/images/blog/4.png)

Brandon has included so many screenshots, they are really awesome! Please see them [here](https://www.virtualizationhowto.com/2018/07/opvizor-performance-analyzer-new-vsan-6-7-performance-analysis/)!

The VMware vSAN 6.7 monitor screen shows all the pertinent vSAN information for all of your hosts.  Anything you can imagine can be found in the dashboard.  It helps to easily identify a problem point in your vSAN performance across hosts.

![Performance Analyzer - vSAN](/images/blog/5-1.png)

### Takeaways

Opvizor Performance Analyzer is one of the easiest and most powerful performance analysis tools that you will find on the market today.  It is one of those tools that from deployment to real value is literally minutes.  With the starter dashboards and the built in dashboards already available, you already have a powerful analysis of any [VMware vSphere](https://www.virtualizationhowto.com/2018/07/vmware-vsphere-6-7-new-performance-improvements/) environment readily available.  The new VMware vSAN 6.7 compatible dashboards are a great way to identify problems with any vSAN environment, including [VMware vSAN 6.7](https://www.virtualizationhowto.com/2018/04/configuring-vmware-esxi-6-7-quick-boot-and-html5-vsphere-update-manager-vum/).  You can see just about any statistic you want to see in the components and architecture behind vSAN running on any host.  Be sure to check out Opvizor Performance Analyzer as they offer a free 30-day trial to try out the product.  You can [download it here](https://www.opvizor.com/).

### A big thank you Brandon! Great blog post and screenshots! 

Please feel free to download Performance Analyzer for a trial

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-4.png)](https://www.opvizor.com/)
