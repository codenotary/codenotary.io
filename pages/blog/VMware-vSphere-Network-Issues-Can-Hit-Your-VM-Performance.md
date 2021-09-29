---
title: "VMware vSphere Networking Issues Can Hit Your VMware Performance"
date: "2021-09-28"
image: "/images/blog/net1-image4.png"
tags: ["Opvizor", "Metrics&Logs", "vSphere", "Performance","Network"]
---

**VMware vSphere Networking Issues Can Hit Your VM Performance**

VMware vSphere is one of the emerging technologies for the last 2 decades and is widely used by fortune 500 companies of the world. Due to the heavy use of this server virtualization platform, some basic to advanced level issues are also faced by the VMware admins in their daily
job routines and often asked about the slow performance of a Virtual Machine (VM). It's quite challenging for VMware admins to optimize and speed up VM performance as well as a complete virtual infrastructure.

When a user complains about the slowness or inaccessibility of a VM, it doesn't mean that the VM is facing internal resource contention or powered-off. It could be due to the momentary or prolonged break-down in
the network or a covert network connection to the VM. 

Therefore, monitoring the [CPU](https://www.codenotary.com/blog/VMware_vSphere_VM_CPU_Issues_Can_Hit_Your_VM_Performance/), [memory](https://www.codenotary.com/blog/VMwarevSphere-VMMemoryIssues_Can_Hit_Your_VM_Performance/), and
[disk](https://www.codenotary.com/blog/VMwarevSphere-VM-Disk-Issues_Can_Hit_Your_VM_Performance/)
of the VM alone is not sufficient, it is also important for VMware admins to monitor the internal and external network connectivity to each VM in your virtual environment. And, it is more suitable when the users
access your VMware-based virtual infrastructure from different geographical locations of the world. It is also helpful to track the performance and status of virtual ports and virtual switches in a
virtual environment while troubleshooting network connectivity issues effectively.

**Network Metrics**

A VMware vSphere environment consists of physically connected ESXi hosts, and logically connected VMs installed on those ESXi hosts. A VMware admin can collect error and usage metrics from both the physical
and virtual networks across your entire virtual environment to ensure the smooth functioning of workloads and network connectivity. If any network connectivity issues arise in your network, it can prevent you to
perform key vSphere tasks such as virtual infrastructure management including VM provisioning, migration, high availability, shared storage, and other important tasks that require network communication.

Monitoring the network throughput of VMs and ESXi hosts of your virtual environment will help you to identify the bottlenecks and other issues of the network that can slow down the performance of applications, VMs,
and ESXi hosts. The following are some important network metrics that every VMware admin should consider while monitoring the network performance VMware-based virtual environment:

**The Network Received and Network Transmitted Metrics**

The network received and network transmitted metrics track the throughput of the network in kilobytes per second of the observed object either it is a VM or ESXi host. These two metrics along with the total
network usage metric provide a baseline of network traffic between installed VMs and ESXi hosts in a virtual environment, and if you have determined a baseline for network behavior.

Furthermore, it allows you to detect anomalies in the network usage as well as so-called noisy neighbors, that use most of your ESXi bandwidth.

![](/images/blog/net1-image1.png)

![](/images/blog/net1-image2.png)

It makes sense to setup alerts to notify the VMware administrator about any deviations such as spikes or drops that point any potential issues in the underlying hardware such as a loss of ESXi host connection or a
misconfiguration in installed VM. 

Especially when it comes to dropped packets, you should start investigating why that happens. Incoming dropped packets can be caused by driver issues in the Guest OS or driver misconfigurations.

A good example is the following VMware KB article: [Large packet loss in the guest OS using VMXNET3 in ESXi](https://kb.vmware.com/s/article/2039495)

Also outgoing dropped packets can be caused by switch overload or misconfigurations that can be fixed by buffer adjustments or QoS activation.

You can monitor the network received and network transmitted metric of VMs with [CNIL Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/) in your VMware vSphere environment.

![](/images/blog/net1-image3.png)

![](/images/blog/net1-image4.png)

These metrics help in measuring network traffic and usage at the VM level similar to the information captured in disk throughput, but disk throughput ensures traffic going from the datastore to ESXi host, and
these metrics provide insights regarding the usage of iSCSI or NFS storage in the virtual environment as the communication between the datastore hardware is captured in network traffic.

**Conclusion**

As we all pretty well know that the physical resources are shared in a virtualized environment, and it's a challenging task to ensure that
every VM has the resources it needs to run the guest operating system and the application running on it. Monitoring vSphere metrics including
network metrics helps you to ensure high performance in your virtual infrastructure. It also helps in identifying bottlenecks in both
physical and virtual networks that compromise the overall performance of the infrastructure. With [CNIL Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/), you can
monitor all the key metrics including network received and transmitted or dropped packets in real-time that warn you at the earliest about the emerging issues in your virtual infrastructure and keep your VMs at high
performance.

[CNIL Metrics and Logs](https://www.codenotary.com/products/metrics-and-logs/) is a software that runs within minutes in your VMware-based virtual environment and immediately starts monitoring the network metrics that
can affect the VM performance due to any bottleneck in your virtual network.

You can start your Free Trial now, deploy the virtual appliance in minutes and get results in under 15 minutes.
