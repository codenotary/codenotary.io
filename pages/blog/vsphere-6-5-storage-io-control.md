---
title: "vSphere 6.5 - Storage IO Control"
tags: ["Ops", "opvizor"]
date: "2016-11-29"
---

Setting IO limits in Storage Policy Based Management (SPBM) and apply the policy to the VMs.

There are many enhancements in vSphere 6.5, an overhaul of Storage IO Control is one of them. In vSphere 6.5 Storage IO Control has been reimplemented by leveraging the VAIO framework. This is basically a framework that allows you to filter (storage) IO and do things with it. So far we have seen caching and replication filters from 3rd party vendors, and now a Quality of Service filter from VMware.

## [vSphere 6.5 what’s new – Storage IO Control](http://www.yellow-bricks.com/2016/10/26/vsphere-6-5-whats-new-storage-io-control/)

by [Duncan Epping](http://www.yellow-bricks.com/)

> Storage IO Control has been around for a while and hasn’t really changed that much since its inception. It is one of those features that people take for granted and you actually don’t know you have turned on in most cases. Why? Well Storage IO Control (SIOC) only comes in to play when there is contention. When it does come in to play it ensure that every VM gets its fair share of storage resources.Why the change in SIOC design/implementation? Well fairly simple, the VAIO framework enabled policy based management. This goes for caching, replication and indeed also QoS. Instead of configuring disks or VMs individually, you will now have the ability to specify configuration details in a VM Storage Policy and assign that policy to a VM or VMDK. But before you do, make sure you enable SIOC first on a datastore level and set the appropriate latency threshold.

## Troubleshooting Storage I/O Control (1022091)

[See here](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1022091) for the complete article from VMware. An excerpt:

You experience one or more of these issues:

- Storage I/O Control (SIOC) is not performing as expected.
- I/O from virtual machines does not get prioritized under congestion circumstances, or it gets prioritized when there is no real congestion.
- SIOC rules are intermittently applied to virtual machines on the same host.

### Resolution

Storage I/O Control (SIOC) is used to control the I/O usage of a virtual machine and to gradually enforce the predefined I/O share levels. SIOC is supported on Fibre Channel and iSCSI connected storage in ESX/ESXi 4.1 and 5.0. With ESXi 5.0 support for NFS with SIOC was also added. Datastores with multiple extents or Raw Device Mapping (RDM) are currently not supported. For more/related information, see the _Managing Storage I/O Resources_ section in the [vSphere 4.1 Resource Management Guide](http://www.vmware.com/pdf/vsphere4/r41/vsp_41_resource_mgmt.pdf) or [vSphere 5.0 Resource Management Guide](http://pubs.vmware.com/vsphere-50/topic/com.vmware.ICbase/PDF/vsphere-esxi-vcenter-server-501-resource-management-guide.pdf). Notes:

- Before using SIOC on datastores that are backed by arrays with automated storage tiering capabilities, check the [VMware Storage/SAN Compatibility Guide](http://partnerweb.vmware.com/comp_guide2/search.php?deviceCategory=san) to ensure that your automated tiered storage array is certified to be compatible with SIOC.
- Before enabling SIOC, ensure that datastores are managed by a single vCenter Server.

Note: Storage I/O Control (SIOC) requires Enterprise Plus licensing. Without this license, the option to enable SIOC is grayed out.For more information, see Compare vSphere Editions.

### Enabling Storage I/O Control

To enable SIOC: 

1. Select a datastore in the vSphere Client inventory and click the **Configuration** tab.
2. Click **Properties**.
3. Under Storage I/O Control, select **Enabled**.
4. Click **Close**.

**Note**: This setting is specific to the datastore and not to the host.If you experience problems with SIOC or if the number of hosts connected to the datastore has changed since enabling SIOC:

1. Disable SIOC and save the changes by clicking **OK**.
2. Enable SIOC and save the changes.

### Determining if the threshold value has been modified

To determine if the threshold value has been modified:

1. Select a datastore in the vSphere Client inventory and click the **Configuration** tab.
2. Click **Properties**.
3. Under Storage I/O Control, click **Advanced**.
4. Check if the value is 30ms. If it is not 30, reset it to the default value of 30.

### Ensuring virtual machines have disk shares assigned according to their importance

By default, all virtual machines have the same number of shares and IOPS limit. IOPS are the number of I/O operations per second. By default, IOPS are unlimited. If these defaults are not changed, then I/O control does not prioritize virtual machines.

To see the shares of all the virtual machines on the cluster, choose the cluster, click **Resource Allocation**, then click **Storage**.

To change the vDisk shares and limit:

1. Choose a virtual machine in the vSphere Client inventory.
2. Click the **Summary** tab and click **Edit Settings**.
3. Click the **Resources** tab and click **Disk**.
    - Choose a virtual hard disk from the list and click the **Share column** to select the relative amount of shares to allocate to the virtual machine (Low, Normal, or High).
    - You can also click **Custom** and enter a user-defined share value.
4. Click the **Limit - IOPS** column and enter the upper limit of storage resources to allocate to the virtual machine.
5. Click **OK**.

Using Performance Analyzer you can check for VM and ESXi Host IOps and Latency in real time. Storage IO Control is fully leveraged to track Storage Latency in detail.

![Check for VM and ESXi Latency with Storage IO Control](/images/blog/e3680d32-vmperformance_0h707l0h707l000000-2.png)

### [Sign up](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) for Performance Analyzer today and start 30 days for free.
