---
title: "Use OpBot to find your resource hungry virtual machines"
tags: ["Ops", "opvizor"]
date: "2016-12-27"
---

It happens on a daily basis that you want to find your most resource hungry virtual machines when it comes to any virtual environment. In the best case you find systems that have been configured with a very high amount of memory and really use it in a good way.

But more often you don't really know why a system is reported as slow and continuously hit 100% cpu load.

Good news is, you don't need to open VMware vSphere management tools, vSphere client or run scripts just to get the current load of the virtual machine. OpBot responds in a second with the most hungry VMs, their names and the resource usage: **vm \* top 3 memusage**

[![OpBot find hungry virtual machines](/images/blog/top3memusage.png)](http://try.opvizor.com/opbot)

## [Download OpBot - your virtual assistant for VMware vSphere](http://try.opvizor.com/opbot)

As you know, OpBot is the great ChatOps Bot that connects your Slack account with your VMware vSphere environment in a couple of minutes (Import Appliance, Add Slack, Done). 

As soon as you log into Slack you can start asking OpBot about the commands he knows already by typing _**help**_

![OpBot help](/images/blog/help_topxx.png)

You can simply use the keyword vm followed by the virtual machine names and top. Let's check out some typical examples of your daily routine.

check for ...

the 3 systems with the highest cpu consumption: _**vm \* top 3 cpuusage**_

![OpBot vm top CPU usage](/images/blog/top3_cpuusage-1.png)

the system having the highest memory consumption of the virtual machines that start with win: _**vm win\* top 1 memusage**_

![OpBot Windows systems memory usage](/images/blog/topwin-1.png)

Its as simple as that and you can use all the security features that Slack has to offer. Furthermore, you got the audit log already integrated and nobody can issue commands without you noticing it.

A typical use case could be, that an end user calls IT and asks why his application is so slow. You know that the server runs SAP and all your SAP virtual machines start with sap as a display name.

_**vm sap\* top 3 memusage**_

_**vm sap\* top 3 cpuusage**_

You got the systems starting with sap using most of the CPU and memory resources. That shows you instantly if these systems are using all of their resources and it could just be high load or something totally different.

If you want to know about the VM hardware configuration, you can rely on OpBot to remember the systems that have been shown with the last command. No need to type in the entity names or the complete command. _**mem**_ shows the memory configuration, **_memusage_** the real usage from a ESXi host perspective and the actual guest view.

_**vm win\* top 3 memusage**_

**mem**

![virtual machine memory configuration](/images/blog/memusage_mem.png)

As you can see, the first command filters all top memory consumer, the second command shows the configured memory of these systems.

Start using OpBot yourselves and you will be amazed how simple, fast and secure this virtual assistant saves your day.

## [Download OpBot](http://try.opvizor.com/opbot)
