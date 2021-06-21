---
title: "VMware vSphere wasted resource detection and calculation"
image: /images/blog/starter_idle.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-10-04"
---

My application definitely needs 12 CPUs and at least 128 GB of memory - oh, and 1TB of flash storage. Otherwise it won´t work as fast as required and we need to take into account that its virtualized. So we better plan for more resources.

I bet, most or even all system administrators listened to requests like that, just the numbers differ. 

Unfortunately, more often than not, we figure that most of the resources configured are not completely used. Actually, most of the time, a big chunk of resources is not used at all.  

So we just wasted valuable memory and disk resources to not one but many virtual machines - a very costly situation. Therefore, its a must to check for VMware vSphere wasted resources on a regular basis, to find potential resource waster, that can run with much less memory, disk or cpu cores.

Performance Analyzer can support and guide to detect and delete vSphere wasted resources. 

Follow these simple steps using the different dashboards provided.

The described issue above is fueled by the rapid growth of VMware environments and eventually results in unexpected budget stretches and potential bottlenecks for rightsized VMs. 

Finding and eliminating wasted and unused resources such as snapshot waste, under/oversized VMs, rogue VMDKs, and idle VMs can save thousands of dollars and make budgeting and planning more predictable.  Performance Analyzer is the perfect solution to detect vSphere wasted resources and resource optimization.

## Finding and fixing VMware vSphere Wasted Resource and Optimization in a few steps:

### Identify Idle VMs

Identifying unused or idle VMs is time-consuming and error prone. The process involves running and analyzing reports of CPU and network utilization and manually comparing the results to sort out and identify virtual machines that are presumed idle. This process does not factor in the interactions between VMs, the variable patterns of their activity or other infrastructure resources overlooking the importance of the components or production workloads.

Performance Analyzer ease of use simplifies the identification of underused virtual machines and show the potential cost savings that may result from deleting or rightsizing them. Performance Analyzer furthermore tracks historic usage behavior of the VMs over time to get a precise understanding about the VM requirements.

Stay on top of idle VMs:

![Detect Idle VMs](/images/blog/starter_idle.png)

You can find a special starter dashboard here: [Performance Analyzer online manual](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)

### Identify Undersized/Oversized VMs

Performance Analyzer gathers all important performance metrics over time for every virtual machine and ESXi host to simplify the detection of undersized or oversized VMs. Right-Sizing these has a immediate impact on your overall performance and eventually your next budget decision.

Stay on top of your VMware VM sizing:

![vSphere wasted resource](/images/blog/wasted_savings.png)

### Do a regular housekeeping deleting costly snapshot waste and rogue snapshots

Identifying snapshot waste is similarly difficult. Snapshots provide a change log for a virtual disk and are a convenient way to restore a VM to a particular point in time when a failure or system error occurs. Backup tools often use and create snapshots for their own purposes in a way that may generate a long chain of snapshots with numerous siblings that can quickly drain CPU, slow performance, and needlessly waste storage.

Performance Analyzer provides dashboards to detect unnecessary and unused snapshots in a very simple way. Most importantly, the dashboards visualize the snapshot and disk growth over time. You need to keep in mind, that snapshots are always growing vmdk files, that can grow up to the size of the parent disk. Its not uncommon to waste several hundred GB or even TB by ignoring VM snapshot disk usage. 

Stay on top of your VMware VM snapshots:

![track VMware VM snapshot](/images/blog/pa4.4_snapshots.png)

Performance Analyzer comes as a virtual appliance and is typically up and running within a couple of minutes. Just configure the read only connection to your vCenter using https and you´re good to go.

The 15 day trial starts after deployment and you can extend the eval within the admin page of the appliance.
