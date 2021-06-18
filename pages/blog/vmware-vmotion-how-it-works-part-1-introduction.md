---
title: "VMware vMotion, how it works - Part 1 Introduction"
image: /images/blog/wpid-03_04_001.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-06-26"
---

Though vMotion and Storage vMotion each serve a different purpose, they feature a large amount of overlapping technology. Therefore these two vSphere functions fit well together in one chapter. Both technologies are proactive. This means vMotion is used to migrate virtual machines between running ESX-hosts while Storage vMotion migrates the data between fully functional data stores on the virtual machines. Both vSphere features are no longer usable when the source or the destination is offline.

[VMware vMotion](https://www.vmware.com/products/vsphere/features/vmotion "VMware vMotion") and [Storage vMotion](https://www.vmware.com/products/vsphere/features/storage-vmotion "Storage vMotion") effectively protect against downtime because they can bridge maintenance windows on the hosts and datastores without any interruption of service. However, contrary to popular speculation, they are not tools designed to increase high availability.

## **vMotion**

Readers have certainly already heard of VMware vMotion, the live migration function within VMware vSphere , so this introduction will be brief. vMotion is the tool with which active virtual systems can be migrated from one ESX-host to another without any interruption to the virtual machines themselves or to their provided services. With vSphere 5.x previous limits on simultaneous migrations of virtual machines on an ESXi-host- and datastore-basis have been lifted. This procedure was previously only possible as a cold migration process with offline VMs. 

_![vMotion process - VMware vMotion](/images/blog/wpid-03_04_001.png)_

_Figure 1: VMware vMotion or VMware Storage vMotion makes it possible to m__ove an active VM_ _on a host basis as well as on a datastore basis._

The vMotion process has become so refined that even in tests at trade shows involving hundreds of thousands of virtual machines vMotion migrations never lost a VM or distupted a VM’s services. However not every virtual machine is well suited for vMotion. This point will be further discussed later in the chapter.

## **Functionality**

Upon delving a bit deeper into vMotion one must admit that the functionality is both simple and ingenious. It ensures system reliability during a traditionally problematic time - maintenance of the host. Additionally it is easy to notice in vMotion how important it really is to separate the hardware from both the operating system and the applications. 

You can find a pretty good presentation about the vSphere 6 news and vMotion here:

<iframe src="//www.slideshare.net/slideshow/embed_code/key/zpwwqkofwiFrk5" width="425" height="355" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen></iframe>

**[VMware vSphere: What's New \[V5.5 to V6\] – защита и перенос «виртуалок»: Fault Tolerance и vMotion](//www.slideshare.net/muk_ua/vswn6-m08-avalabilityenhancements "VMware vSphere: What's New [V5.5 to V6] – защита и перенос «виртуалок»: Fault Tolerance и vMotion")** from **[MUK](//www.slideshare.net/muk_ua)**

Looking at the details of the vMotion process from the point of view of a virtual machine.

_Figure 3: The vMotion procedure from the point of view of the virtual machine_

1. The first step is to ensure that the source VM can be operated on the chosen destination server.
2. Then a second VM process is started on the target system and the resources are reserved.
3. Next a system memory checkpoint is created. This means all changes to the source VM are written to an extra memory area.
4. The contents of the system memory recorded at the checkpoint are transferred to the target VM.
5. The checkpoint/checkpoint-restore process is repeated until only the smallest changesets remain in the target VM’s memory.
6. The CPU of the source VM is stopped.
7. The last modifications to the main memory are transferred to the target VM in milliseconds.
8. The vMotion process is ended and a reverse ARP packet is sent to the physical switch (important: Notify Switches must be activated in the properties of the virtual switch). Hard disk access is taken over by the target ESX.
9. The source VM is shut down. This means the VM process on the source ESX is deleted.

One additional comment about what the vMotion checkpoints record:

- all devices and their status
- CPU registers
- main memory contents
- a serialization of the status for transmission over the network

As you can see vMotion is concerned mostly with the transfer of the main memory contents from one ESX server to another, with a final notification telling the physical network about the new interface over which the VM  is reachable sent once the process is finished. The guest system of course does not notice anything.

The following table shows an example how the memory transfer can be computed.

**Pre-Copy Iteration**

**Main memory to be transferred**

**Time needed for the transfer**

**Change in memory during the transfer**

1

2.048 MB

16 seconds

512 MB

2

512 MB

4 seconds

128 MB

3

128 MB

1 second

32 MB

4

32 MB

0,25 seconds

8 MB

5

8 MB

vMotion cutoff, since the residual transmission takes only ~0.06 seconds

_Table: Main memory copy during vMotion_

As you can see in Table 1.1, the copying of the main memory is performed successively in multiple steps until a CPU stop is possible that doesn’t lead to a system crash.

vMotion is made up of many components, which are responsible for managing various parts of the process. _vCenter_ performs the first configuration check and starts the process over the _vpxa-_ and _hostd-_components in which a pseudo-VM is started as a container on the target host (see Figure 2). The _vMotion_ module starts the actual vMotion process and controls the data transfer.

_![VMkernel Setting for VMware vMotion](/images/blog/wpid-vmotion_vsphere6.png)_

_Figure 2: Components of VMware vMotion - VMkernel adapter for vMotion_

vCenter validates and starts the process, but it is not involved in the actual data transfer. Therefore an active vMotion process must always be allowed to run to completion even in the case that vCenter crashes. In the case of a crash it can happen that vCenter still has the source VM in its database and doesn’t yet know about the target VM in the new location. If this happens it helps to restart the management agent or to perform a disconnect/reconnect of the ESX host in vCenter.

The vMotion user interface must be configured by an administrator and is installed on the VMkernel port. This means the vMotion data transfer must be enabled in the settings of the VMkernel port.

### VMware VMotion Reports

Btw. if you want to get a good feeling about your daily vMotion tasks and how long they take, check out our [VMotion/svMotion Report](https://www.opvizor.com/register "VMotion/svMotion Report")
