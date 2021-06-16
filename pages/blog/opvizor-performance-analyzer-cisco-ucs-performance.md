---
title: "CNIL Metrics and Logs - Cisco UCS Performance"
image: /images/blog/admin_infra.png
tags: ["Ops", "opvizor"]
date: "2018-05-22"
---

We´ve been very excited to announce the Cisco UCS Performance metrics integration last week. Many customers that are running their [VMware](https://www.vmware.com/products/vsphere.html) vSphere environment on top of [Cisco UCS](https://en.wikipedia.org/wiki/Cisco_Unified_Computing_System) were asking for a deeper integration of core Cisco UCS performance data additional to the vSphere metrics.

We listened and integrated a simple way to add [Cisco UCS management](https://www.cisco.com/c/en/us/products/servers-unified-computing/index.html), blade and rack servers in our infrastructure admin interface and added 3 Cisco UCS dashboards.

As always the each dashboard has a certain focus and can be merged or combined with any other data we´re collecting.

The integration of Cisco UCS is plain and simple, using our admin interface:

![Cisco UCS Integration](/images/blog/admin_infra.png)

There are 3 dashboards that come with our Cisco UCS Integration.

![Cisco UCS Dashboard](/images/blog/navigation.png)

## Cisco UCS Environmental Stats

Starting with the environmental information about power consumption, efficiency and fan speed, you get all information required to make sure that everything is working fine from an temperature and power point of view. 

![Cisco UCS Temperature](/images/blog/environmental.png)

## Cisco UCS Network Port Channels

The network port channel dashboard gives you an overview of the utilization of each port channel as well as the number of packet errors, pause and loss. That gives you an instant view if packet errors accumulate or packet loss starts.

![Cisco UCS Network Port Utilization](/images/blog/network_port.png)

## Cisco UCS Server Ports

Check all Backend- and Frontend port utilization, the jumbo package traffic as well as occurring errors. That can be easily combined with VMware ESXi information and metrics to get a full picture.

![Cisco UCS Server Ports - Cisco UCS Performance](/images/blog/ucs_serverports.png)

You haven´t checked out Performance Analyzer yet? Actually there is no excuse for that, as you can test it 30 days free of charge.

Download the appliance here and have all set up in a couple of minutes, to gain full insight into your VMware vSphere Performance and your UCS Performance.
