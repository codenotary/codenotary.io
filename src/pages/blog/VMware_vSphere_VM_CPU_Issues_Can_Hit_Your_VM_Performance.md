---
title: "VMware vSphere VM CPU Issues Can Hit Your VMware Performance"
date: "2021-09-13"
image: "/images/blog/vmcpu1-image4.png"
tags: ["Opvizor", "Metrics&Logs", "vSphere", "Performance","CPU"]
---

**VMware vSphere VM CPU Issues Can Hit Your VMware Performance**

[VMware vSphere](https://www.vmware.com/products/vsphere.html) is one of
the world's most known  virtualization platforms that allows users to virtualize their servers to provision and manage multiple Virtual Machines (VMs) on a single physical server instead of using a single machine for each application that runs on it. 

VMware vSphere offers several modern features including VM cluster management such as High Availability (HA) and [Distributed Resource Scheduler (DRS)](https://docs.vmware.com/en/VMware-vSphere/7.0/com.vmware.vsphere.resmgmt.doc/GUID-8ACF3502-5314-469F-8CC9-4A9BD5925BC2.html) to efficiently manage resources across different hosts, and [vMotion](https://www.vmware.com/products/vsphere/vmotion.html) to migrate among different ESXi  costs without any downtime. In cases of downtime for a particular host such as maintenance or any other reason, vMotion helps VMware admins to migrate VMs to other servers easily.

If VMware vSphere is being used to run critical applications, it is necessary to pay very close attention to your VMware-based virtual environment's overall performance and capacity at different layers of the infrastructure, including the workload running in the VMs and the underlying physical servers. It ensures the available resources meet the actual demands of  he services and applications running on virtual infrastructure. While there is some optimization by default, the performance of your applications can take a hit without a proper monitoring and optimized configuration.

In a virtual infrastructure, capacity management and performance go hand-in-hand as if workloads and applications face any bottleneck, it can lead to degrading the performance or even downtime. Monitoring of available resources and virtual infrastructure helps VMware
administrators to right-size VMs for optimal distribution of resources among VMs.

This post will cover some key metrics of CPU of VMs that allow monitoring performance,  health, and capacity of your VMware vSphere-based virtual infrastructure.

**CPU Metrics**

CPU metrics are one of the important metrics to monitor your vSphere-based virtual infrastructure, and collecting CPU metrics from physical as well as virtual layers is pretty important. 
It allows VMware admins to know how many physical CPUs are available on installed hosts and how much your VMs in the virtual environment are using. It will not only help VMware admins to determine if the virtual infrastructure is running smoothly or need to scale it up or down by configuring shares or setting reservations and limits for VMs.
CPU metrics are not limited to simple usage as there are many VMware-specific KPIs to watch and we cover them in this post.

Every configured VM sees its vCPU as its physical CPU and any workloads on that VM run on the physical CPU of the underlying host. VM workloads are scheduled by default on ESXi hosts across all available physical CPUs to share resources among all configured VMs on that particular host are sharing processor time. The following are some important metrics that every VMware administrator needs to consider while monitoring the VMware-based virtual environment:

**CPU Usage**

CPU usage acts as a percentage during the CPU usage interval and it will be the CPU usage of the ESXi host, not the guest operating system installed in a VM, and it is the average CPU utilization of overall available virtual CPUs in the VM.

![](/images/blog/vmcpu1-image1.png)

[**CNIL Metrics and Logs**](https://www.codenotary.com/products/metrics-and-logs/) offers to monitor the CPU usage of ESXi hosts in the VMware vSphere environment.

![](/images/blog/vmcpu1-image2.png)

[**CNIL Metrics and Logs**](https://www.codenotary.com/products/metrics-and-logs/) also helps you to monitor the following metrics effectively and without any hassle:

**VM CPU Ready (Total Across All vCPUs)**

It is a high CPU ready percentage of a VM that is a clear indicator of a potential performance issue, and the rate in percentage of a virtual CPU (VMkernel) or vCPU is waiting for a physical CPU to become available to run its workload. If you have more than 15% per every vCPU, you'll receive a warning, and on more than 25% generates an error. 
If this situation happens, a VMware admin should instantly start a deeper analysis to find the reason for the CPU-ready values.

**How Does VM CPU Ready Work?**

Sometimes, reducing the vCPUs in a VM works perfectly fine. For example, if you have a VM with 4 vCPUs and the guest OS needs just one processor, the VM waits for getting to be scheduled on all 4 cores before being able to work. So, reducing the number of vCPUs will work for you. 
To remove the complications with other configured VMs on the same host, it is better to isolate the VM on one host to analyze the high ready values, and if high CPU ready values go down after reducing the number vCPUs on the VM, then the issue is based on CPU ratio either physical or virtual, and you need to reduce the VMs or the number of vCPUs on top of
the ESXi host.

![](/images/blog/vmcpu1-image3.png)

If the high percentage still exists, you need to check the configuration of virtual CPU cores.

![](/images/blog/vmcpu1-image4.png)

[**CNIL Metrics and Logs**](https://www.codenotary.com/products/metrics-and-logs/) is one of the best VMware vSphere monitoring solutions that run in minutes in your virtual environment and immediately start monitoring the VM vCPU and other important metrics.

**VM CPU Ready (Average Across vCPUs)**

It is a high CPU ready percentage of a VM that is a clear indicator of a potential performance issue. The rate in percent a vCPU (VMkernel) is waiting for a physical CPU to become available to run its workload. If you have more than 15% per every vCPU, you\'ll receive a warning, and
more than 25%, generates an error. If this happens in your virtual environment, you should start a deeper analysis of the reason for the CPU-ready values.

**How Does It Work?**

Sometimes less is more and you should consider reducing the number of vCPUs. In case you have a VM with 4 vCPUs and the guest needs just one processor for one process the VM waits for getting scheduled on all 4 cores before being able to work. So, try to reduce the number of vCPUs.

![](/images/blog/vmcpu1-image5.png)

To exclude a complication with other running VMs, it is the best choice to isolate the VM on one host to analyze the high ready values. If the high CPU ready values go down then the issue is based on the physical or virtual CPU ratio and you should reduce the number of VMs or the number of vCPUs running on top of an ESXi host.

![](/images/blog/vmcpu1-image6.png)


**VM CPU ready**

It is a high CPU ready percentage of a VM that is a clear indicator of a potential performance issue. The rate in percent a vCPU (VMkernel) is waiting for a physical CPU to become available to run its workload. If you have more than 15% per every vCPU, you\'ll receive a warning, more than 25%, generates an error. If it happens, you should start a deeper analysis of the reason for the CPU-ready values.

![](/images/blog/vmcpu1-image7.png)

![](/images/blog/vmcpu1-image8.png)

**Conclusion**

To improve VM performance in a virtual environment, VMware admins should track the number of vCPUs on each VM and physical CPUs on the ESXi hosts, and the usage of CPUs and vCPUs can also be monitored so that both the physical host and VMs are right-sized with the right CPU resources.

[**CNIL Metrics and Logs**](https://www.codenotary.com/products/metrics-and-logs/) is a software that runs within minutes in your VMware-based virtual
environment and immediately starts monitoring the VM CPU slowdown
indicators and tracks these metrics over time.