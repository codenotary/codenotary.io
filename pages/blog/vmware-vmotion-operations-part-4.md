---
title: "VMware vMotion Operations - Part 4"
image: /images/blog/wpid-vmotionop1.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-08-28"
---

Operating vMotion is very intuitive and trivial, since an active virtual machine can be moved to another ESX host just by drag and drop. Since the virtual machine is active, the vMotion process starts automatically with the first dialog.

![start vMotion Migration of VM](/images/blog/wpid-vmotionop1.jpg)

_Figure 1: Starting a migration process from the context menu of the virtual machine_

Another variation is performed by choosing migrate from the context menu of a virtual machine (see Figure 1).

![VMware vMotion Operations - Start](/images/blog/wpid-vmotionop2.jpg)

_Figure 2: Wizard when starting a vMotion process from the context menu of the virtual machine_

The difference between these two methods of opening the wizard is that in the latter method can also be used for Storage vMotion. Actually wizard even allows you to select the migration type, vMotion, Storage vMotion or cold migration (Figure 2).

If you decided for the drag and drop method, the resulting dialog is significantly shorter and you only have to choose the VMware vMotion priority. Incidentally, it is also possible to mark multiple virtual machines and migrate them all via drag and drop or context menu.

The context menu wizard asks you to select the target system and the resource pool (Figure 3).  

![VMware vMotion - Select Target](/images/blog/wpid-vmotionop3.jpg)

_Figure 3: Select the target Host, Cluster or Resource Pool for the VM_

## _Change network_

_Since VMware vSphere 6 vMotion allows you to change the virtual machine network, making it possible to perform a migration between systems having different portgroups configured. That makes it very convenient if you migrate across datacenter (Figure 4)._

![vSphere 6 vMotion - select the Network](/images/blog/wpid-vmotionop4.jpg)

_Figure 4: Select the target portgroup (network) for the VM_

The VMware vMotion priority should in most cases be configured to reserve cpu for optimal vMotion performance so that sufficient resources can be guaranteed on the target system and the vMotion process can complete as quickly as possible. Otherwise the vMotion process will be immediately broken off as soon as the required resources on the target system are not available or massively slowed down.

![Dialog for configuring vMotion priority](/images/blog/wpid-vmotionop51.jpg)

Figure 5: Dialog for configuring vMotion priority

Choosing continue with available CPU resources can noticeably slow down the vMotion process since the process will wait for resources instead of directly reserving them. Therefore the migration will also always be performed, even in problematic cases, with an overly high main memory usage. The virtual machine can thus even be temporarily unavailable in case the resources on the target system are not accessible in time.

## Schedule vMotion

![vSphere 6 - schedule vMotion](/images/blog/wpid-vmotionop6.jpg)

Figure 6: Schedule vMotion

vSphere 6 added another great feature to vMotion: scheduling! Now you can chose to either run the migration process by clicking OK or schedule it to be triggered by a certain event or time. You just need to select Change next to the configured Scheduler row.

As soon as the vMotion process is started you can follow the steps of the process by monitoring the events on the host systems and virtual machines. This also allows you to check the complete time that was taken by the process upon completion. During the process it is not possible to monitor the remaining time required to finish.

In the standard configuration only four (1 Gbit network) or eight (10 Gbit network) simultaneous vMotion migrations are allowed per host and 128 vMotion migrations are allowed per VMFS datastore.

You can find more information about the [VMware vSphere configuration maximums here](https://www.vmware.com/pdf/vsphere6/r60/vsphere-60-configuration-maximums.pdf "VMware vSphere configuration maximums here")

## Security

The vMotion data transfer uses plain text. Therefore it is advisable for both performance and security reasons to use a dedicated network for vMotion traffic. vMotion traffic should never be mixed with network traffic from the virtual machine, meaning they should never be transmitted over the same network adapter or at the very least a VLAN separation should be configured.

## VMware vMotion monitoring

The knowledge about these VMware vMotion Special Features as well as the knowledge how to use them go hand in hand.

To get a good feeling about your daily vMotion tasks and how long they take, check out our 

[VMotion/svMotion Report](https://www.opvizor.com/register "VMotion/svMotion Report")
