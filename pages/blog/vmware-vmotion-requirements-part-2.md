---
title: "VMware vMotion requirements - Part 2"
tags: ["Ops", "opvizor"]
date: "2015-07-08"
---

As we see a lot of vMotion and Storage vMotion related issues we continue our series about VMware vMotion requirements in this part. If you want to read about the vMotion Technology itself, check out this blog post: 

[VMware vMotion, how it works - Part 1 Introduction](https://www.opvizor.com/blog/vmware-vmotion-how-it-works-part-1-introduction/ "VMware vMotion, how it works - Part 1 Introduction")

## **Requirements**

Since vMotion is intervening in an active virtual machine without that virtual machine’s knowledge, certain conditions must be fulfilled so that the process can run without problems or failures:

▪       CPU compatibility

▪       vMotion interface (minimum 1 Gb adapter)

▪       shared central mass storage

▪       same naming for virtual port groups

▪       sufficient resources on the target host

▪       at least one vSphere Essentials Plus license on the corresponding ESX host

The only point which can sometimes present significant problems is CPU compatibility. In many firms the server infrastructure developed organically and not every server is built on the same hardware components. It is easy to determine if a virtual machine can be migrated between two ESX servers because in the case of an incompatibility vCenter will issue a warning before the actual migration process begins.

## **_CPU Compatibility_**

The CPU compatibility problem is easy to explain. Imagine that a virtual machine is started on an ESX host with an AMD CPU and SSE3 functionality. Since VMware ESX is a virtualizer, the guest operating system sees all of the standard CPU functionality and can be adapted to the hardware with extra drivers to more effectively utilize multimedia functions. 

If this virtual machine is simply transferred to another host with a CPU that only supports SSE2, the guest operating system will still want to use the SSE3 functionality. This can cause problems or even a system crash. While these problems can sometimes be managed by so-called “CPU masking”, very large differences between CPUs remain unresolvable. Examples of large differences include switching from an AMD to an Intel CPU, or from a 64-bit to a 32-bit CPU.

Since the ESX server cannot predict which CPU instructions the virtual machine (or rather the guest operating system) will use, the user must pay attention to either use identical CPUs or to configure a proper masking.

The VMware’s _CPU Identification Utility_ allows the user to determine which functionality the installed CPU has, including vMotion compatibility, EVC, and 64-bit support. This tool can be found at _[http://www.vmware.com/support/shared\_utilities](http://www.vmware.com/support/shared_utilities "http://www.vmware.com/support/shared_utilities")_.

The VMware Knowledge Base articles 1991 (Intel) and 1992 (AMD) explain which CPUs are compatible with which others:

▪       Intel: _[http://kb.vmware.com/kb/1991](http://kb.vmware.com/kb/1991 "http://kb.vmware.com/kb/1991")_

▪       AMD: _[http://kb.vmware.com/kb/1992](http://kb.vmware.com/kb/1992 "http://kb.vmware.com/kb/1992")_

The upgrade from VI3.x to vSphere unfortunately introduces a very serious issue regarding CPU masking, which was often set automatically in VI3.x in the configuration of the virtual machine. After the upgrade certain virtual machines no longer support migration via vMotion and return an error message. 

This problem has not yet been reported when upgrading from vSphere 4 to vSphere 5.x. The solution is very simple: CPU masking must be set to default by choosing Reset all values to default in the CPU identification mask settings of the virtual machine. The only irritating thing is that the VM must be shut down in order for these settings to go into effect. The corresponding Knowledge Base article can be accessed at _ [http://kb.vmware.com/kb/1011294](http://kb.vmware.com/kb/1011294 "http://kb.vmware.com/kb/1011294")_.

### **_CPU Masking and EVC_**

In the settings for a virtual machine the option CPU-ID -Mask can be activated to hide _disabled_ VM CPU functionality. By hiding certain CPU features, vMotion compatibility between ESX hosts with different CPU generations can be improved . 

_![VMware vMotion requirements - CPU advanced settings](/images/blog/wpid-vmotion-cpusetting.png)_

_You can configure CPU masking in the settings of the virtual machine._

The standard option is the hiding of non-execution bits, which is only supported by newer CPUs (NX/XD flag). If this is activated a virtual machine can be migrated between ESX servers where it doesn’t matter if the processors provide NX functionality or not, unless there are other CPU instructions which are different and cannot be hidden. 

If the non-execution bit is not sufficient it is also possible to configure CPU-manufacturer-specific settings. This means it is possible to adjust the registers in general or for Intel and AMD processors specifically. For example if you are using an AMD processor and want to hide the SSE3 functionality, the option looks as follows:

Level 1 – row **ecx** : ---- ---- ---- ---- ---- ---- ---0 -0-0

A very good VMware Knowledge Base article about the different masks and corresponding processors can be found here:

_[http://kb.vmware.com/kb/1993](http://kb.vmware.com/kb/1993 "http://kb.vmware.com/kb/1993")_

If you want to revert your changes to a specific entry this is done by clicking revert to default values when the row is selected. Or you can set all values to default by selecting revert all values to default values.

### **Convenience or Speed**

When regulating CPU mask settings you should keep in mind that hiding certain functionality can slow down the guest operating system. Effectively you must decide between convenience and speed, depending on the guest operating system.

### **_EVC (Enhanced vMotion Compatibility)_**

For users that don’t want to define the CPU masking for every virtual machine, EVC-cluster is capable of adjusting CPU functionality globally. This means that a user can define in the cluster options which CPU generations can be seen from the virtual machines within the cluster. This can be configured with the least common denominator of all host CPUs in the cluster.

_![Cluster EVC settings - VMware vMotion requirements](/images/blog/wpid-evc_cluster.png)_

_In the cluster settings the CPU generation can be set globally for the entire cluster._

Since vSphere, EVC has supported the incrementation of processor generation during the operation of the virtual machine, for example from CPU generation 1 to 2. However a downgrade of CPU generation is not possible with this method. If the CPU generation is increased, active virtual machines will receive the new settings at the next power down or reset.

Within the EVC cluster, the EVC function guarantees that no CPU incompatibilities due to differing CPU generations will result from vMotion procedures. This does not suppress, however, other factors that may hinder the use of vMotion, for example the use of local hard disks.

## VMware vMotion requirements

Making sure you meet all VMware vMotion requirements should be you highest priorization.

Btw. if you want to get a good feeling about your daily vMotion tasks and how long they take, check out our 

[VMotion/svMotion Report](https://www.opvizor.com/register "VMotion/svMotion Report")
