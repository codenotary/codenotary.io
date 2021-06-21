---
title: "Why opvizor Is The Best VMware Performance Tool"
image: /images/blog/foundation_performance-1024x570.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-03-04"
---

## Introduction

### Virtual infrastructures are becoming increasingly complex

Virtualization is an indispensable part of a modern data center. Frequently, the degree of virtualization is 90 percent or more. What formerly operated on a number of servers today runs on a few hosts. With the high rate of virtualization and the resulting increase in complexity, problems are more difficult to locate. It is therefore necessary to consider how the infrastructure can be monitored accurately and how potential problem situations can be found to avoid costly errors. Unfortunately, under certain circumstances, even minor problems can significantly negatively impact the entire infrastructure.

### A Wide range of virtualization solutions and infrastructure components

Virtualization solutions are many: the selection ranges from suppliers such as KVM and Citrix to Microsoft Hyper-V and the market-leading provider VMware, with its vSphere solution. The variety of combinations with other components of the infrastructure is limitless. Reduced to its basic functionality, each of these solutions operates almost the same way. They mainly enable resource partitioning for optimal and cost-effective use of physical hardware. In addition, completely new methods of high-availability designs are possible.

### Keeping systems reliable through monitoring

What about the reliability of the virtualized machines (VMs)? Are the smooth operation of VMs and the applications running on your systems guaranteed? Keeping track of this complex infrastructure can be guaranteed only by employing various tools, with at least one monitoring solution serving as the base. The aim is to be promptly notified if system loads are exceeded or failures occur. In many organizations, failure prevention tools offer up to 99.99% reliability. Such statistics are not possible without the appropriate software and automation.

### Operating Monitoring solutions

Monitoring tools are widespread, such as Nagios or Icinga, Microsoft SCOM or proprietary and application-specific monitoring tools (e.g. integrated in VMware vCenter). They offer real-time insight on whether certain thresholds are exceeded or if a failure has occurred. If this is the case, then the software alerts the administrator through email or an SMS alarm sounds.

## Setting the right threshold

The biggest challenge is correctly setting the threshold value, since this threshold determines whether an action should be performed or not. For example, sensitive thresholds lead to many alerts and alarms, flooding administrators with harmless or false messages. This causes really important messages to sometimes be overlooked in the crowd. But what is the correct threshold for an administrator? This must be decided based on the unique infrastructure. This is where recommendations and best practices come into play, providing valuable guidance.

## Depth **analysis?**

![Why opvizor is the best VMware performance tool](/images/blog/foundation_performance-1024x570.png)

### Removing ambiguity

An analysis is by definition a systematic study which consists of two processes, data collection and evaluation. In particular, we consider this relationship and its effects and interactions between the elements.

### The difference between in-depth analysis and monitoring

An in-depth analysis of the infrastructure is usually tested in accordance with rules, security and best practices. It's less about the actual state of the load, but rather the HOW, i.e. how something is configured. For example, a message such as "100% CPU utilization" appearing without more information would not be very helpful. Here you can already see a clear distinction between pure monitoring and analysis. You want to know why the reported problem occurred and how it can be fixed. Therefore, automatic recognition after troubleshooting and recording would be ideal.

A typical example which comes into play at each virtualization manufacturer involves the topics vCPU (virtual CPU) and vMemory (memory which is assigned to a virtual machine). Surely every administrator has received a request to create a virtual machine with x number of vCPUs and y GB of RAM. But how will the administrator take notice if the resources fulfill the requirements of the virtual machine or if sizing is totally overprovisioned? This is where a deep analysis comes into play. It can be analyzed using various values, where the corresponding information for resource optimization is then displayed. For example, unnecessary vCPUs can cause a performance problem on the respective host system, too. Additionally, we must always bear in mind that a virtual machine is rarely alone – it has as many systems that can be deployed on the physical host without interfering with each other. Thus although it may not be directly relevant, an optimally configured resource impacts the overall infrastructure.

The added value of automated analysis is to screen information on system configuration and measure the results against predefined rules. The administrator can, of course, check such items manually against best practice recommendations. However, this can be daunting due to the size and complexity of some infrastructures and is also quite error-prone. According to best practices, more components are evaluated and recommendations are made depending on the current version. In the virtual environment, attention should be paid to how storage and network components work together. Additionally, it’s important to evaluate if clusters are uniformly configured.

Through a deep analysis, the administrator wants to be preventively informed. This also enables the ability to respond before an error to avoid breakdowns and lags in productivity. Once you imagine that up to 512 virtual machines are supported per physical host (of course a very symbolic number), the need to operate optimally becomes clear.

In the meantime, applications that are always running, such as SAP, Microsoft Exchange, SQL, SharePoint, Tomcat, etc., are critical to the business. But often the request is only for a virtual machine, without the knowledge of what might be running. In this situation, how can a virtual machine be configured optimally for the request? Usually not with the default values, which are at times just clicks through a wizard. Often it's the little things that matter, like the right selection of a virtual network card or the correct SCSI controllers in the virtual machine.

### How to respond when problems arise

The administrator receives information that an event has occurred through the monitoring system, which must then be routed to troubleshooting. Given the large number of complex components that are used in a virtual infrastructure, troubleshooting is often quite difficult. Is it just storage latency problems or even misconfigured MTU sizes on the switches? There are several tools to support the administrator in the VMware environment. Esxtop is one popular tool. However, using it effectively requires some know-how, especially when interpreting thresholds. The site administrator therefore usually relies on their own initiative. What’s more, an immediate or timely solution is needed.

In-depth analysis differs from monitoring in the treatment of problems encountered. For example, with monitoring, a CPU utilization problem of a virtual machine at 100% is displayed and reported, but the administrator doesn’t have the information on why this CPU problem has occurred. In many cases, CPU limits are set in the VM configuration temporarily, and then removing the limit is forgotten. Thus, in-depth analysis combines a monitoring system with an appropriate expert system, providing the key information needed to act on the issue.

A new approach for in-depth analysis includes tools such as opvizor.

As Andreas Peetz, vExpert and blog author ([http://www.v-front.de](http://www.v-front.de)) said:

"opvizor lets you run health checks and predictive analyses in a fully automated way.

These are derived from up-to-date rules that are centrally provided by notable virtualization experts. Based on these "cloud rules," you can e.g. create weekly reports that are available anytime, anywhere. This way the virtualization admin is enabled to act preventively, but without burdening himself with maintaining complex software, because that is implemented as a real cloud service. Only one small local agent is needed in your environment. In a nutshell, opvizor helps to avoid many issues and outages and makes the administrator's job easier and much more efficient. This software is definitely worth an investment!"

### all a question of the correct analysis?

It is not always easy to find the right solution for excellence for a given infrastructure. However, you have to consider how individual software products work together best in the area of in-depth analysis and monitoring and also what provides the administrator with security.

Thanks to Big Data, sufficient meta-data is usually available from the virtual infrastructure. However, this data needs to be properly evaluated and that‘s where in-depth analysis enters.

A deep analysis is the guarantee of a high-performance, secure, and error-free infrastructure. It reduces errors and warnings and relieves the administrator of the troubleshooting burden, allowing time for higher-value projects.

Therefore we say, opvizor is not the best VMware performance tool, opvizor is the **best VMware performance tool available**

# Try yourself what the best VMware performance tool can detect within minutes

##### [**Sign Up for opvizor!**](/register)
