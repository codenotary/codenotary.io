---
title: "Slick top 5 VM performance improvements"
tags: ["Ops", "opvizor"]
date: "2015-08-10"
---

After looking through our Storage vMotion statistics last time we thought about continuing with more interesting statistics. This time we checked for the TOP 5 VMware Virtual Machine related issues that have a high impact on the VM performance and changing them gets you massive performance improvements.

So we started and checked for the highest performance increase we saw by solving some of the more common VM related misconfigurations or better non-optimal configurations.

We took about 100000 virtual machines into account running on top of a couple of hundred VMware vSphere infrastructures as we just wanted to select very recent data.

**Actually nothing can match real-life data!**

Honestly the first 2 issue we're not really surprising as we see them so often. CPU limits are set all over the place, mainly historically but sometimes because of moving VMs in and out of resource pools. Same is true for Memory limits, but we see them far more often and most customers are not aware of these and when/why these have been set.

![VM performance improvements](/images/blog/wpid-top5-perfinc1.png)

It's easy for you to check your environment with [Health Analyzer](http://try.opvizor.com/health-analyzer/ "Health Analyzer") and if there are simple possibilities to improve the **VM performance** just by tweaking some configurations. Sometimes a single setting can make a your end users happy, as the application runs so much faster.

You can find the full top 5 article here: [http://try.opvizor.com/top5-performance-increase/](http://try.opvizor.com/top5-performance-increase/ "http://try.opvizor.com/top5-performance-increase/")
