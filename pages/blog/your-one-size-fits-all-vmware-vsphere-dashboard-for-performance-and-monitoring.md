---
title: "Your one size fits all VMware vSphere Dashboard for Performance and Monitoring"
image: /images/blog/esxihost.png
tags: ["Ops", "opvizor"]
date: "2016-09-14"
---

# VMware vSphere Dashboard

If you’re looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze VMware vSphere configuration and performance metrics with our VMware vSphere Dashboard that is the visual part of Performance Analyzer for VMware vSphere. Correlate events and metrics in guest applications and infrastructure with vSphere metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![VMware vSphere Dashboard VMware ESXi Host information](/images/blog/esxihost.png)

Within a a few minutes the Performance Analyzer virtual appliance is deployed in your environment and ready to go. Configuring the network and adding your VMware vCenter systems are the next steps and the data crawler is directly starting his new job in supporting you on your daily routine fighting for the best possible performance.

We deliver out of the box over a dozen VMware related dashboards that can be completely customized to your needs. And it doesn´t matter if your run 100 or 10000 VMs, the appliance just needs some tweaking (more memory) and all is fine.

**Out of the box is the key! You can change the look and feel, but you don´t need to. The whole product is working without any changes and some customers could find bottlenecks within 15 minutes after deployment.** 

We continuously add important improvements to our data collectors as well as the dashboards, that you can access at any time you want.

## Performance Data

Our product starts collecting data within a couple of minutes and stores all information over time, independent of the VMware vCenter settings. Even if your vCenter database would crash, you could still access our system and go back in time as long as the system was alive (up to 5 years). Our VMware vSphere Dashboard makes sure, that you don´t miss a beat in your environment. Not today, not tomorrow and we don´t let you down, when you need to check for historic performance data.

![Virtual Machine performance](/images/blog/vmperformane.png)

Definitely the focus is clearly on performance data, but we also do statistics and monitoring of uptime or availability. You can find information about your vCenter, DataCenter, Datastore, Cluster, ESXi Host or VM performance using our dashboards and entity selections. No matter if you want to get a general overview or you need troubleshooting.

All metrics are pre-configured with thresholds that show potential performance issues using different colors and signs. You don´t miss a warning or error.

## VMware Snapshots

As the leader in VMware snapshot monitoring and management with more than 3500 active [Snapwatcher](http://try.opvizor.com/snapwatcher) user, we understood the pain of Zombie Snapshots, the wasted storage space for Snapshots and the lag of a complete overview what Snapshots are really active across hundreds and thousands of virtual machines. 

![VMware Snapshots](/images/blog/vmsnap.png)

Keeping an eye on Virtual Machine Snapshots in real time, how fast they grow and how much space has been wasted over the last 6 month using them, is a great asset.

## Capacity Planning

Planning ahead and knowing the trend of system growth is important. But many systems out there make it extremely complex and cumbersome to get an idea of how many more VMs can be deployed without the loss of redundancy or adding hardware. 

![Simple VMware capacity planning](/images/blog/capacity.png)

Speaking with hundreds of customers, we understood, that capacity planning should not be a science! It should be simple and straightforward. 

That is exactly what we offer, a very simple way using simple metrics to adjust redundancy as well as expected load to get the estimates needed for 80/20 planning. 80 percent of the necessary numbers, 20 percent of the complexity of other tools.

## VMware vCSA

When VMware released the vCenter Server Appliance a couple of years ago, it lacked so much functionality that people only used it for demo and PoC environments. In the meantime most functionality is available in the appliance as well and we see a steady growth regarding the adoption rate.

![VMware vCSA vCenter Server Appliance](/images/blog/vcsa.png)

Nevertheless, the vCSA feels a bit like an alien in your environment as you cannot install monitoring agents well and the metrics to be watched are pretty specific. That was the reason why we came up with a simple way to add your vCSA systems into your Performance Analyzer Dashboard. 

Some information we gather:

**System Load**

- loadavg\_1min
- loadavg\_5min
- loadavg\_15min

**Memory**

- total
- free
- active
- buffers
- cached
- dirty
- inactive

**Kernel**

- kernelstack
- pagetables
- swapcached
- swapfree
- swaptotal

**Disk**

- capacity
- free
- IOps
- block operations

## What happens inside the Guest OS

Nobody wants to miss the VMware data, but in the end the service runs within a virtual machine or a container or a container within a virtual machine. Things can become pretty complex and hard to see through. That´s exactly why we didn´t stop with VMware performance data. Our appliance can collect data out of the virtual machines operating system as well as applications.

![Guest OS Service uptime](/images/blog/guestos.png)

No matter if the ESXi host runs on an error, the guest os performance is horrible or the database query takes too long, you can see all of it in one solution. Plain and simple, without weeks of configuration and trial and error.

![Guest OS Optimization](/images/blog/osio.png)

## Application

While we support a ton of applications running on top of Linux, we support Windows based applications as well. Starting with simple visualization like the load of a specific Windows service, we can collect data using Perfmon, PowerShell and WMI. Futhermore, we have an integration into Microsoft SQL Server, that can support very well to find slow queries or other database related performance issues. Not to mention, that correlating VM metrics with application metrics can be very enlightening.

![Microsoft SQL Server on top of VMware vSphere](/images/blog/sql.png)

## Storage

When moving up the stack, looking down the stack is as important as the application itself. Having a complete view makes the environment understandable. Some of our integrations in the storage world are DataCore SANsymphony as well as NetApp 7-mode and Cluster mode.

![NetApp Performance Tuning](/images/blog/ntap.png)

## Multi Tenant

The whole appliance is made to be multi-tenant. That means you can create different user with their own datasources and dashboards or you could even different organizations. If you´re running a VMware vSphere environment in a service provider environment or you just want to separate dashboards and information for different use cases or responsibilities. 

Just let us know and we´re more than happy to help you configuring it.

# [AND NOW, JUST GET YOUR TRIAL STARTED](http://try.opvizor.com/perfanalyzer)

[](http://try.opvizor.com/perfanalyzer)
