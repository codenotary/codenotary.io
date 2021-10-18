---
title: "VMware vSphere VM Disk Issues Can Hit Your VMware Performance"
date: "2021-09-21"
image: "/images/blog/disk1-image5.png"
tags: ["Opvizor", "Metrics&Logs", "vSphere", "Performance", "Disk"]
---

**VMware vSphere VM Disk Issues Can Hit Your VM Performance**

In this modern era, workloads and applications are mainly running on a VMware-based virtualization environment, and VMware administrators are
often asked about slow [Virtual Machine(VM)](https://www.dnsstuff.com/what-is-vm-virtual-machine) performance.
To optimize and speed up VM performance, it's quite challenging for VMware admins due to the involvement of several factors including compute, storage, networks, and management within a VMware-based virtualized environment.

It's a prime responsibility of a VMware admin to monitor not only the hardware and physical infrastructure, but also CPU, memory, disk
allocation, network and storage I/O, and virtual networks of the VMs. 

In this blog, we'll discuss disk metrics that can affect VM disk performance and show monitoring tools that help in remediation of VM performance issues, and if VM(s) are underperforming,
they could be optimized easily and quickly with the right VM performance monitoring and management solution.

We will cover some important virtual machien disk metrics that can hit the performance, health, and capacity of your VMware vSphere-based virtual infrastructure.

**Disk Metrics**

In VMware virtual environment, VMs use large disk files called virtual disks. These files are also known as Virtual Machine Disk Files (VMDK) that are used to store virtual machine data. All VMs are by default started with a single virtual disk, but can be configured to use more virtual disks.  

These virtual disks are located in a storage space called datastores, and these datastores (can be either [local datastores](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.storage.doc/GUID-5F08F7A7-6D8E-45A6-B408-278B3A4C7D4C.html) (directly attached with ESXi hosts) or shared datastores ([networked storage](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.storage.doc/GUID-E3B77DE4-7525-47D3-B2D7-BC71CCD7992D.html), [Storage Area Networks (SANs)](https://www.vmware.com/topics/glossary/content/storage-area-network-san), and [Logical Unit Number](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.storage.doc/GUID-2C8FAE1F-98F7-4E0B-AEA0-83A4FF16A252.html) (LUN) storage devices).

If the storage is performing poorly, then your VMs will also perform poor. Storage latency and throughput play a very critical part in VM performance in your virtual environment.

In VMware vSphere, disk I/O and capacity metrics are reported at different levels including VMs, datastores (either local or shared), and ESXi hosts,  because we know that multiple ESXi hosts and VMs can share datastores, and monitoring at the datastore level offers an aggregated view of disk performance in a virtualized environment. However, monitoring the performance of both your virtual disks (at guest OS level) and physical disks (at ESXi  host level) are very important, and tracking disk metrics at both levels can also support monitoring of cluster health and troubleshooting where the  issues are actually occurring.

VMs in a virtual environment normally use [storage controllers](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.vm_admin.doc/GUID-5872D173-A076-42FE-8D0B-9DB0EB0E7362.html?hWord=N4IghgNiBcIM4GM4EsQF8g) to access the virtual disks in a datastore, and these storage controllers allow VMs to send commands to the ESXi hosts, and then these commands are redirected to the appropriate virtual disks. As VMs access datastores through ESXi hosts, monitoring disk metrics such as throughput and latency can help you to ensure that the physical storage is being accessed by ESXi hosts and VMs  effectively and without interruption.

The following are some important VM disk metrics that every VMware admin should consider while monitoring the VMware-based virtual environment:

**Disk Latency**

Monitoring disk latency in a virtual environment is to ensures that the VMs are efficiently communicating with their virtual disks without any delay. 

Disk latencies are measured in milliseconds, where an ESXi host processes a request from a VM to a datastore, and it helps you to determine whether vSphere is operating as per agreed performance or not.

Latency spikes indicate that there are some issues in your virtual environment due to several reasons, including resource-starvation or application issues.

You can monitor the virtual disk usage of VMs with [Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/) in your VMware vSphere environment.

![](/images/blog/disk1-image1.png)

![](/images/blog/disk1-image2.png)

If there is an issue with a total latency, the average latency of read/write operations can be checked and verified. Similarly, it can be broken down into read and write latencies at the ESXi host, VM, and datastore level to determine what inventory objects are causing total latency.

High disk latency can also be correlated with other resource usage metrics to determine if the root cause is in lacking available memory or CPU resources, and can be identified which VMs on the ESXi host or cluster are consuming more resources and if VMs needed to allocate more resources or move them to other ESXi hosts or datastores with greater available resources. 

[Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/) provide a complete picture of Disk I/O of VMs in the VMware vSphere environment.

![](/images/blog/disk1-image3.png)

![](/images/blog/disk1-image4.png)

**Disk Throughput**

Another important virtual disk metric is disk throughput which ensures that your datastores, ESXi hosts, and VMs are performing read/write operations without any interruption. Monitoring disk throughput at multiple levels in virtual infrastructure and correlating it with other metrics can highlight bottlenecks in the environment. If a spike appears in VM read/write in total latency, it indicates that the ESXi host is struggling to process the flood of read/write operations.

This can be mitigated by provisioning more memory to the installed VMs and allow VMs to cache more data and less relying on swapping.

![](/images/blog/disk1-image5.png)

**Conclusion**

To improve VM performance in a virtual environment, VMware admins should track the latency and throughput of the virtual disk on each VM on the
ESXi hosts, and the usage of virtual and physical disks be monitored so that both the ESXi hosts and VMs could be right-sized with the right
disk allocation.

[Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/) is a software that runs within minutes in your VMware-based virtual environment and immediately starts monitoring the virtual disk metrics that can affect the VM performance. 

**You can start your Free Trial now, deploy the virtual appliance in minutes and get results in under 15 minutes.**

