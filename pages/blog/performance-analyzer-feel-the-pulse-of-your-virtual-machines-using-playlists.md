---
title: "Performance Analyzer - feel the pulse of your virtual machines using playlists"
image: /images/blog/button_download-performance-analyzer-2.png
tags: ["Ops", "opvizor"]
date: "2017-06-20"
---

"We receive all key indicators at a glance and no longer have to gather the information in various systems" states one of our customer's after using Performance Analyzer for more than a year to monitor his VMware environment.

As Performance Analyzer comes packed with dozens of dashboards for different purposes and can be enhanced to hundreds of different dashboards, it is important to classify these.

- **Status** dashboards: Show my up and running VMs and Services. Are some down?
- **Statistical** dashboards: How many systems have been deployed lately? What pCPU/vCPU ratio do we have?
- **Planning** dashboards: When to purchase new hardware, deploy new VMs? How many VMs can still be deployed without risking performance bottlenecks?
- **Redundancy** dashboards: Are my systems utilized in an optimal way, but I can still lose 50% of the hosts?
- **Performance** dashboards: What is the current utilization of my systems? Any bottleneck visible based on real-time data?

All of these can visualize different components in your datacenter, starting from the physical hardware to the actual service within the guest OS.

Depending on the type of dashboard and the type of data, you may want to group and rotate between them. 

Maybe you want to put them on a big screen in your support department?

Btw. you can test the software without any risk. 30 day free trial:

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-2.png)](http://try.opvizor.com/perfanalyzer)

Think about a multi-tenant setup of Performance Analyzer and you want to rotate between different customers (tenants) and their environments.

![pulse of your virtual machines](/images/blog/heartbeat-163709_1280.jpg)

**In any case, we got you covered.** 

We chose the fantastic Open Source project [Grafana](http://www.grafana.org) for the visualization of our collected metrics. That choice has many positive benefits for you as a customer:

1. very powerful visualization and high level of customization
2. you learn to customize and use Grafana, you can also use Performance Analyzer in a heartbeat
3. last but not least, there is a cost benefit we share with you!

No worries, as Performance Analyzer comes as a virtual appliance, we handle all in one. So you don't need to code, install or update anything. We deliver a product that comes with

- a highly efficient data collector
- dashboards to see your most important metrics, preset with best practice thresholds
- features for capacity planning, bottleneck detection, reporting and correlating events with performance
- a nice admin interface to configure VMware vCenter, NetApp aso.
- full multi-tenant capability
- infrastructure aware time series database

Coming back to Grafana and the original topic of this blog post. There is a feature called [Playlist](http://docs.grafana.org/reference/playlist/) that is of great use to create a collection of existing dashboards and automatically rotate them. That feature is great to cover a certain task, like troubleshooting or VM performance, as well as showing status dashboard on a big screen.

## Creating a Playlist in Performance Analyzer

To create a playlist, you should first think about the task you want to cover. Let's assume its about the MS SQL databases in your virtual environment. In the end you want to keep your finger on the pulse of your virtual machines.

![Create a Playlist](/images/blog/playlist.png)

That means you typically want to get an overall overview of your environment and if something looks weird or slow.

The following dashboards a good mix in my case as I want to see the common vital signs of my hosts and vms as well as the application itself:

- Highlights: Virtual Machines

![pulse of your virtual machines](/images/blog/nevermissaheartbeat.png)

- VMware vSphere Health Status
- VMware Performance: VM Cluster
- SQL Server Monitoring

![MS SQL Virtual Machine Performance](/images/blog/playlist2.png)

The dashboards should rotate every minute, therefore we set the interval to 1m.

![Playlist Link](/images/blog/playlist3-1.png)

After saving the playlist, you can either use the **Start url** or the **Play** button to start the rotation through the selected dashboards. Don't forget to bookmark the link!

![Playlist controls](/images/blog/sql-server-1.png)

While the playlist is active, you can see the control buttons next to the dashboard name. Go Back, Skip the current dashboard or pause the dashboard rotation.

You can watch the video below to see how to create the playlist step by step. 

Don't miss to run Performance Analyzer in your own environment if you haven't done so yet. I promise you'll like it!

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-3.png)](http://try.opvizor.com/perfanalyzer)

## Video - how to create a daily routing playlist using Performance Analyzer

<iframe src="https://player.vimeo.com/video/221810085" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen="" allowfullscreen=""></iframe>

[Opvizor Performance Analyzer - Use Playlists to optimize your daily routine](https://vimeo.com/221810085) from [opvizor](https://vimeo.com/opvizor) on [Vimeo](https://vimeo.com).
