---
title: "VM Gets Unresponsive When Removing A Snapshot - Snapshot Consolidation"
tags: ["Ops", "opvizor"]
date: "2015-03-11"
---

A customer of us informed us about the following situation he ran into. Some of his VMware vSphere VMs became unresponsive for about an our (based on VMware KB article it can be 30 minutes or much longer) when he removed a VM snapshot.

## Issue cause

As written in [VMware KB article 2039754](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2039754) the issue occurs if the virtual machine generates data faster than the consolidate rate.

That means if the VM is running a write intensive application, i. e. a database system, it can happen that the data amount written to the disk is exceeding the data amount transferred by consolidating the snapshot. As Snapshot consolidation is an asynchronous job that is trying to transfer data from the snapshots to the base disks, VMware is using a stun technology to get a chance of deleting the snapshots faster than the new generated data by the Guest application comes in.

If the VM snapshot consolidation doesn't work well as the incoming data rate is too high, VMware is increasing the asynchronous consolidation run cycle from 5 to 10, 20, 30 and so on until the 9th iterations. Then it goes to 60 minutes per **Snapshot consolidation** cycle. When the maximum of iterations if reached, the VM is stunned and a synchronous consolidation is forced.

As the customer noticed, the Snapshot consolidation can take a while and the VM becomes unresponsive. The time it takes varies by the overall system performance.

Learn more about a typical snapshot related issues, opvizor automatically finds in minutes:

##### [**Sign Up for opvizor!**](/register)

## Detection

During the Snapshot consolidation you can see entries in the vmware.log similar to (extract [VMware KB article 2039754](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2039754)):

`vmx| Checkpoint_Unstun: vm stopped for 3711025 us vmx| Checkpoint_Unstun: vm stopped for 574655 us vmx| Checkpoint_Unstun: vm stopped for 2191061 us Create snapshot smvi_2a175570-ed2f-.... Operation completed Consolidate starts Intermediate snapshot taken, took 1.8s VM runs for 2 seconds, while consolidate of scsi0:0 is in progress Move to next disk, no more interations for scsi0:0 are necessary, stunned for 0.6s Consolidate of scsi0:1 finished, another iteration is needed. Intermediate snapshot is deleted, and another is created. VM stunned for 2.7s.`

## Resolution

You can patch your system:

- ESXi 4.x Patch 07
- ESXi 5.0 Patch 09
- ESXi 5.1 Update 2

There is also a workaround:

Shut down the virtual machine and change the VM configuration parameter

- snapshot.maxIterations = 20 (or higher)
- snapshot.maxConsolidateTime = 60 seconds
- snapshot.maxIterations = 0

or use this powershell script:

\[ps\] $snapiter = New-Object VMware.Vim.optionvalue $snapiter.Key="snapshot.maxIterations" $snapiter.Value="20" # set to 0 to avoid asynchronous iterations and directly stun the VM $snapmaxcon = New-Object VMware.Vim.optionvalue $snapmaxcon.Key="snapshot.maxConsolidateTime" $snapmaxcon.Value="60"

$vmConfigSpec = New-Object VMware.Vim.VirtualMachineConfigSpec $vmConfigSpec.extraconfig = $snapiter $vmConfigSpec.extraconfig = $snapmaxcon foreach($vm in (get-view -viewtype virtualmachine)){$vm.ReconfigVM($vmConfigSpec)} \[/ps\]

**Try Snapwatcher to manage typical snapshot related issues:**

[![opvizor Snapwatcher - Say Goodbye to inconsistent VM Snapshots](/images/blog/snapwatcher_2.png)](https://www.opvizor.com/wp-content/uploads/2015/02/snapwatcher_2.png)

This is the first automated solution that constantly monitors all snapshots in the entire VMware vCenter systems to catch and repair old, broken or inconsistent VM snapshots. Our powerful grid allows you to manage actions on hundreds of snapshots in one simple dashboard view. Snapwatcher does the hard work to protect your disk space from broken snapshots so you don’t have to.

You can download and try Snapwatcher here by clicking “[Try Snapwatcher by opvizor!](http://try.opvizor.com/snapwatcher)”
