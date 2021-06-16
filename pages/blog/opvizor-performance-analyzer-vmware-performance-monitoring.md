---
title: "CNIL Metrics and Logs VMware Performance Monitoring"
image: /images/blog/1-2.png
tags: ["Ops", "opvizor"]
date: "2018-01-02"
---

We are very pleased to share [Brandon Lee's](http://twitter.com/vspinmaster) blog post about CNIL Metrics and Logs. Please find Brandon's article [here](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/) and many other very helpful tips and information from Brandon on [https://www.virtualizationhowto.com/](https://www.virtualizationhowto.com/).

Here is Brandon's blog post.

Monitoring your vSphere environment at the cluster, host, or virtual machine level is key in understanding where performance bottlenecks may exist and why production workloads may not be performing adequately. In addition, monitoring certain vSphere metrics can also help to identify hotspots in the environment before potential performance bottlenecks present themselves. We have covered various tools and utilities that can be used to monitor and troubleshoot performance in a vSphere environment. Today we take a closer look at one of those tools – CNIL Metrics and Logs. It is an impressive tool to be able to quickly have all the important information at your fingertips. Opvizor comes with a wide range of prebuilt dashboards that display much of the information that vSphere administrators want to see. However, you have the ability as well to create additional dashboards. In this post we will take a look at CNIL Metrics and Logs VMware Performance Monitoring.

## CNIL Metrics and Logs VMware Performance Monitoring

CNIL Metrics and Logs is a great product that allows vSphere administrators to quickly get up and running with intelligent VMware Performance Monitoring of important metrics in the vSphere environment. The thing I really like about Opvizor is the prebuilt dashboards.  Other vSphere performance monitors and analyzers may include a good number of performance monitoring capabilities, however, by default, YOU have to build all the alerts, dashboards, etc.  It is great that right out of the box, this is a powerful preconfigured analyzer and tool for monitoring performance and capacity.  The result is that from the first boot of the appliance, it is a value add to any vSphere environment.  Additionally, it is built on top of [Grafana](https://grafana.com/) so the dashboards are beautiful.

Performance Analyzer is deployed via a [small OVF appliance](https://www.virtualizationhowto.com/2017/09/reinstall-vmware-tools-vmware-vcsa-appliance/).  We won’t highlight the deployment process as it is a standard OVA/OVF deploy with no surprises.  For the purposes of this post, we are using the **CNIL Metrics and Logs 4.6** appliance.

Features of CNIL Metrics and Logs include:

- Easy OVF appliance deployment
- Prebuilt Dashboards highlighting performance and capacity views
- Ability to build your own dashboards
- Playlists to rotate through configured dashboards
- Reporting
- Alerting
- Important [NUMA metrics](https://www.virtualizationhowto.com/2017/11/create-high-performance-vmware-vms-checklist/), VMkernel Queue, ESXi HBA adapter, and Network compass added in version 4.6
- Tons of integrations, including MS SQL, MySQL, PostgreSQL, InfluxDB, CloudWatch, Azure, Hyper-V, Docker, and others

![Performance Monitoring](/images/blog/1-2.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor Integrations with available Plugins_

Already included with the 4.6 appliance is the MS SQL integration.  You simply add the SQL Server to the appliance with appropriate permissions and Load the MS SQL dashboards.  This allows viewing your VM at both the application performance level and the VM performance level.

![Performance Monitoring](/images/blog/2-3.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor MS SQL Server integration configuration_

As mentioned, there are a wide variety of prebuilt dashboards covering most of the performance metrics that ones will want to monitor in their environments.  Below, the screenshot is only capturing a subset of the default prebuilt dashboards.

![Performance Monitoring](/images/blog/3-3.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor Prebuilt Dashboards for VMware Performance Monitoring_

Below is a quick look at just one of the windows in the VMware Capacity – VM Snapshots dashboard.  This is a great dashboard to quickly see snapshots in the environment and information concerning those snapshots.

![Performance Monitoring](/images/blog/4-2.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor VM Snapshot Monitoring_

There are a number of **capacity planning** dashboards as well that help to plan available capacity and areas where resources may be limited.

![Performance Monitoring](/images/blog/5-2.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor Capacity Planning_

The **Highlights: Virtual Machines** dashboard is a great resource for a high level view of all VMs in the environment and any hotspots that may be developing.  The color changes for each category displayed if the metrics fall outside of performance best practices (CPU usage, CPU Ready, Memory, etc).  These views can also be configured to update at specified intervals all the way down to every 5 seconds.

![Performance Monitoring](/images/blog/6-1.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor VM KPI Highlights VMware Performance Monitoring_

Another great dashboard for monitoring performance, the **VMware Performance: VM** dashboard.  This dashboard allows you to key in on a single VM or a selected number of VMs.  By default the dashboard displays crucial performance metrics for a virtual machine, including CPU usage, CPU Ready, CPU co-stop, Memory Usage, Memory Ballooning, Disk Read, Disk Write, vDisk I/O Latency.

![Performance Monitoring](/images/blog/7-1.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Single VM VMware Performance Monitoring_

A really cool feature of Opvizor is the ability to create **Playlists**. Playlists allow cycling through chosen dashboards at specific intervals.  You an use this to view a continuously cycling list of dashboards for performance monitoring or to simply show off your environment. Once the playlist is created, you simply hit the **Play** button to start cycling through the dashboards at specified intervals.

![Performance Monitoring](/images/blog/8-1.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Creating an Opvizor Playlist for VMware Performance Monitoring_

Opvizor alerts allow notifications of certain thresholds once they are reached at specific values and/or seen for a certain amount of time.

![Performance Monitoring](/images/blog/9-1.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor VMware Performance Monitoring alerts_

Opvizor also has prebuilt reports that allow email reports to be generated and sent for certain environment health metrics.  You can also add new reports as well.

![Performance Monitoring](/images/blog/10-1.png)

Photo courtesy of [Brandon Lee](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/)

_Opvizor VMware Performance Monitoring reports_

## Thoughts

**CNIL Metrics and Logs** is one of the best monitoring tools you can spin up and quickly get valuable metrics from your vSphere environment.  With CNIL Metrics and Logs VMware Performance Monitoring, the prebuilt dashboards provide valuable information, displayed intelligently and beautifully in such a way that is extremely intuitive.  Opvizor is a pay for product, but does have a **30 day demo appliance**[](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) you can spin up and take for a test drive.  Additionally, there is an online demo environment you can log into and explore without provisioning your own appliance.  I give CNIL Metrics and Logs two thumbs up!  Great product, easy to use, and quickly adds value.

**THANK YOU** so much Brandon for your great [blog post](https://www.virtualizationhowto.com/2017/12/opvizor-performance-analyzer-vmware-performance-monitoring/). We really appreciate your opinion and feedback!

### Please feel free to download Performance Analyzer and we are curious about comments and feedback.

[![Performance Monitoring](/images/blog/button_download-performance-analyzer-6-360x41-2.png)](http://try.opvizor.com/opvizor-perfanalyzer-product-page/)
