---
title: "VMware introduces vSphere 7: Essential Services for the Modern Hybrid Cloud"
tags: ["Ops", "opvizor"]
date: "2020-03-10"
---

We will follow up with some blog posts about our own hands on experience, but wanted to share the official blog post of VMware:

[https://blogs.vmware.com/vsphere/2020/03/vsphere-7.html](https://blogs.vmware.com/vsphere/2020/03/vsphere-7.html)

[VMware introduced](https://www.vmware.com/app-modernization.html) the most comprehensive software stack for modern applications – the VMware Tanzu portfolio, VMware Cloud Foundation 4 and [vSphere 7](https://www.vmware.com/products/vsphere.html). These offerings provide a new way for organizations to think about their application modernization initiatives.

This is incredibly important to customers as they are continually grappling with the challenge to better meet the needs of their customers. To do that they are increasingly called to deliver applications more quickly and reduce the time to market.

[![VMware vSphere Icon](/images/blog/vSphere-Icon-Color-2020.png)](http://blogs.vmware.com/vsphere/files/2020/03/vSphere-Icon-Color-2020.png)

Our customers who are most successful in meeting the changing needs of their customers simultaneously work on two initiatives: modernize their approach to applications, and modernize the infrastructure that those applications run on, to meet the needs of their developers _and_ IT teams.

As part of these initiatives, customers want to gain the benefits of a cloud operating model, which means having rapid, self-service access to infrastructure, simple lifecycle management, security, performance, and scalability.

This is exactly what vSphere now provides. vSphere 7 is the biggest release of vSphere in over a decade and delivers these innovations and the rearchitecting of vSphere with native Kubernetes that we introduced at VMworld 2019 as [Project Pacific](https://blogs.vmware.com/vsphere/2019/08/introducing-project-pacific.html).

The headline news is that vSphere now has native support for Kubernetes, so you can run containers and virtual machines on the same platform, with a simple upgrade of the system that you’ve currently standardized on and adopting VMware Cloud Foundation. In addition, this release is chock-full of new capabilities focused on significantly improving developer and operator productivity, regardless of whether you are running containers.

vSphere 7 powers VMware Cloud Foundation, which enables customers to deliver apps to any cloud while ensuring security, performance, and resiliency. Using vSphere 7 and VMware Cloud Foundation, you can improve the security, performance, and resiliency of your infrastructure as you accelerate your digital transformation journey without incurring big disruptions to your people, process and technology investments.

Now, let us look at some of the key capabilities in vSphere 7.

## Simplified Lifecycle Management

As our customers start providing infrastructure services with a cloud consumption model, it is critical to have a solution that allows you to fully automate and simplify the lifecycle management of the infrastructure software and hardware firmware. With vSphere 7, we are introducing the next generation of the vSphere Lifecycle Manager and Update Planner. It allows you to seamlessly manage the lifecycle of the infrastructure using a desired state paradigm.  In addition, we have added vCenter Server profiles to provided desired state configuration management for vCenter Server instances.

## Intrinsic Security and Control

Security is always important, regardless of whether you are running in your datacenter or in a cloud. With vSphere 7, you now can better secure infrastructure, data, and access with a simple, comprehensive, and policy-driven model. vSphere 7 introduces remote attestation for sensitive workloads using the new vSphere Trust Authority. Moreover, it can provide secure vCenter Server authentication using external Identity Federation. vSphere 7 also supports Intel Software Guard Extensions to allow SGX extensions to user applications.

## Performance and Resiliency for Application Acceleration

vSphere has always been terrific at running large, business critical workloads – perhaps better than some cloud deployments, and with vSphere 7, we continue to innovate in this area. You can now host large workloads with an improved Distributed Resource Scheduler (DRS) that takes a workload-centric approach by using the VM DRS score for hosts as the metric to decide placements and keep VMs happy, instead of only focusing on cluster-level balancing. vSphere 7 also delivers enhanced application performance on supported hardware with vSphere Persistent Memory, providing applications access to ultra-fast storage at a lower cost. Moreover, we have also updated vMotion to improve performance, and as a result now support live vMotion for your databases and mission critical workloads. With vSphere 7, you can also benefit from cost efficient AI/ML hardware pools of resources, using supported hardware such as NVIDIA GPUs. It also delivers predictable quality of service for time-critical applications with the Precision Time Protocol (PTP).

The following breakthrough capabilities are available for customers using containers and Kubernetes. Note that the Kubernetes capabilities of vSphere 7 are available only as part of VMware Cloud Foundation 4 with Tanzu.

## Common Platform for Running both Kubernetes/Containerized Workloads and VMs

You no longer need to have multiple separate systems for your virtual machines and containers. We believe this release will have a transformative impact because we are removing a key barrier to the adoption of Kubernetes in enterprises: multiple, silo technology stacks. In the past, we have seen customers set up separate environments for Kubernetes with specialized teams and processes. By building Kubernetes into vSphere natively, customers can now consolidate their modern and traditional application environments into a single stack and immediately leverage existing technology and processes. This also addresses another key constraint of Kubernetes success: the skills gap. With minimal additional training, your vSphere administrators are now able to support Kubernetes and the modern applications run in containers.

## Streamlined Development of Kubernetes Applications

vSphere 7 enables the DevOps model with infrastructure access for developers through Kubernetes APIs. It includes the Tanzu Kubernetes Grid Service, which is VMware’s compliant and conformant Kubernetes implementation for building modern containerized applications. In addition, customers who are not looking for full Kubernetes compliance for their container instances are able to use the new vSphere Pod Service, which provides improved performance and security and is built into the hypervisor with VM-like isolation.

## Agile Operations for Kubernetes Applications

Finally, we are introducing a lot of value in vSphere with Kubernetes for the VI admin. We deliver a new way to manage infrastructure, called ‘application-focused management’ for containerized applications. This enables admins to apply policies to an entire group of objects and organize multiple objects into a logical group and then apply policies to the entire group. For example, an administrator can apply security policies and storage limits to a group of containers and Kubernetes clusters that represent an application, rather than to each of the objects individually. This helps improve productivity and reduce errors that can be costly to identify and correct.

vSphere with Kubernetes is available through VMware Cloud Foundation 4 with Tanzu. One key innovation available only in VMware Cloud Foundation is a set of developer-facing services and a Kubernetes API surface that IT can provision, called VMware Cloud Foundation Services.

## VMware Cloud Foundation Services

Powered by innovations in vSphere 7 with Kubernetes, VMware Cloud Foundation Services is a new, integrated Kubernetes and REST API surface that enables you to control the infrastructure through API access to all core services.

[![](/images/blog/VCF-with-Tanzu-Marketecture.png)](http://blogs.vmware.com/vsphere/files/2020/03/VCF-with-Tanzu-Marketecture.png)

It consists of two families of services: Tanzu Runtime Services and Hybrid Infrastructure Services.

- **Tanzu Runtime Services** – deliver core Kubernetes development services, including an up-to-date distribution of:
    - **Tanzu Kubernetes Grid** **Service**– which allows developers to manage consistent, compliant, and conformant Kubernetes clusters to build their modern applications.
- **Hybrid Infrastructure Services** – include full Kubernetes and REST API access that spans creating and manipulating virtual machines, containers, storage, networking, and other core capabilities. It includes the following services today:
    - _vSphere Pod Service_ – extends Kubernetes with the ability to run pods directly on the hypervisor. When developers deploy containers using the vSphere Pod Service, they get the same level of security isolation, performance guarantees and management capabilities that VMs enjoy, although it is not fully Kubernetes conformant.
    - _Storage service_ – allows developers to manage persistent disks for use with containers, Kubernetes, and virtual machines.
    - _Network service_ – allows developers to manage Virtual Routers, Load Balancers and Firewall Rules.
    - _Registry service_ – allows developers to store, manage and better secure Docker and OCI images using Harbor.

We encourage you to review the resources below for additional information, and to come back to the vSphere blog frequently. We will be publishing additional technical information in deep dive blogs over the coming weeks.

We are extremely excited to work with you to help modernize your applications and your infrastructure using vSphere 7, and we hope we are a part of your solution as you deploy your hybrid cloud to meet the requirements of your internal and external customers. Thank you for the ongoing cooperation and collaboration, and please continue to share your feedback to us on how vSphere can better meet your needs.

## Additional Information:

- Online launch event and web portal – [App Modernization in a Multi-Cloud World](https://www.vmware.com/app-modernization.html)
- [vSphere 7 website](https://www.vmware.com/products/vsphere.html)
- [Modern Apps Press Release](http://www.vmware.com/go/modern-apps-march-2020)
- [VMware Cloud Foundation 4 overview blog](http://blogs.vmware.com/cloud-foundation/2020/03/10/delivering-kubernetes-at-cloud-scale-with-vmware-cloud-foundation-4)
- [VMware Cloud Foundation 4 technical deep dive blog](http://blogs.vmware.com/cloud-foundation/2020/03/10/whats-new-in-vmware-cloud-foundation-4)
- [VMware Tanzu announcement blog](http://blogs.vmware.com/cloudnative/2020/03/10/become-a-modern-software-organization-with-vmware-tanzu)

* * *

_We are excited about vSphere 7 and what it means for our customers and the future. Join us Monday through Thursdays into May 2020 for [posts highlighting the new features, capabilities, and improvements in vSphere 7 and vSphere with Kubernetes](http://blogs.vmware.com/vsphere/tag/vsphere-7). It’s easy to stay informed, please follow us directly using the [RSS feed](https://blogs.vmware.com/vsphere/feed), on [Facebook](https://www.facebook.com/vmwarevsphere), and on [Twitter](http://twitter.com/VMwarevSphere)._
