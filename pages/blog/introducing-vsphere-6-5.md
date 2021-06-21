---
title: "Introducing vSphere 6.5"
image: /images/blog/VCSA-highlights.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-10-18"
---

There is a new release of VMware vSphere 6.5, the latest version of its industry-leading virtualization platform. This new release of vSphere features a dramatically simplified experience, comprehensive built-in security, and a universal app platform for running any app.vSphere 6.5 accelerates the customer transition to digital transformation and cloud computing by addressing key challenges:

1.     Environments growing increasingly complex,

2.     Growing IT security threats, and

3.     The need to support both existing and new apps and services.

Let’s take a look at some of the key capabilities.

Here is a repost from the article [VMware posted today](https://blogs.vmware.com/vsphere/2016/10/introducing-vsphere-6-5.html) from [Charu Chaubal](https://blogs.vmware.com/vsphere/author/charu_chaubal).

## Dramatically Simplified Experience

vSphere 6.5 elevates the customer experience to an entirely new level. It provides exceptional management simplicity, operational efficiency, and faster time to market

vSphere 6.5 makes the **vCenter Server Appliance** the fundamental building block of a vSphere environment. The core vSphere architecture is built around this easy to deploy and manage approach that reduces operational complexity by embedding key functionality into a single location. Capabilities such as vSphere host management (with a **fully integrated vSphere Update Manager**), **file-based backup and recovery**, **native VCSA high availability**, and much more are now embedded in this new one-stop appliance model. Users can now be more efficient as there is no longer a need to interface with multiple components.  Additionally, because everything is centralized, vCenter Server Appliance generates a tremendous amount of optimization and innovation, including an **over 2x increase in scale and 3x in performance**.  Upgrading to this building block will be easier than ever before as users can now convert from their traditional Windows deployment into the new appliance model using the new **vCenter Server Appliance Migration tool**.

![vSphere 6.5](/images/blog/VCSA-highlights.png)

Photo courtesy of VMware vSphere Blog

_vCenter Server Appliance: The fundamental building block of a vSphere environment_

In this release, vSphere 6.5 also takes an API-first approach to foster a more business-centric and highly agile environment. In a world where infrastructure as code is becoming a requirement rather than just nice to have, a programmable infrastructure layer is now essential. vSphere 6.5 introduces new **REST-based APIs for VM Management** that vastly improve both the user and partner experience by enabling finer control of virtual infrastructure for apps. You can now do much more with less lines of code with these new simple APIs.

The final component that allows vSphere 6.5 to deliver a simplified experience is the graphical user interface itself. The highly anticipated new **HTML5-based vSphere Client** provides a modern user interface experience that is both responsive and easy to use.   Many customers have already experienced this vSphere Client as part of a Fling on VMware Labs, and thus far the response has been overwhelming positive.

![vSphere 6.5](/images/blog/H5.png)

Photo courtesy of VMware vSphere Blog

_HTML5-based vSphere Client: GUI that enables fast performance and cross-platform compatibility_

## Comprehensive Built-in Security

With increased threats, comprehensive built-in security becomes more critical than ever before. vSphere 6.5 natively provides secure data, infrastructure, and access at scale via its operationally simple, policy-driven model. Protecting all three areas is essential for digital transformation and the evolution of any given business.

To secure data, vSphere 6.5 offers a new **VM-level disk encryption** capability designed to protect against unauthorized data access. VMware’s approach is both universal and scalable, with the ability to encrypt any VM disk regardless of guest OS, and the ability to manage encryption at scale using the familiar vSphere storage policy framework. Combined with the new **encrypted vMotion** capability, vSphere can safeguard both data at-rest and data in-motion.

To assure the security of the underlying infrastructure, vSphere 6.5 also adds a **secure boot model** to protect both the hypervisor and the guest operating system. It helps prevent images from being tampered with and prevents the loading of unauthorized components.

vSphere 6.5 also delivers enhanced **audit-quality logging** capabilities that provide more forensic information about user actions. IT can now better understand who did what, when, and where if an investigation into anomalies or security threats requires it.

vSphere 6.5 is the core of a secure SDDC and works seamlessly with other SDDC products to provide a complete security model for infrastructure.

![vSphere 6.5](/images/blog/security.png)

Photo courtesy of VMware vSphere Blog

_Comprehensive Built-in Security: Secure Data, Secure Infrastructure, and Secure Access_

## Universal App Platform

vSphere is a universal app platform that supports both traditional and next-generation apps. While these two worlds are vastly different, both require infrastructure with the scale, performance, and availability to meet key business objectives.

vSphere has always been pushing the limits on what apps it can support.  Initially it was all about test/dev but then quickly expanded coverage business critical apps as well.  Later, it included Desktop Virtualization and 3D graphics.  Now we are seeing more modern apps being virtualized including Hadoop, Spark, Machine Learning, HPC and cloud native apps.

To run any app, vSphere 6.5 expands its workload coverage model by focusing on both scale-up and scale-out next-gen apps that are increasingly built using evolving technology building blocks, such as containers.   In this release, VMware delivers **vSphere Integrated Containers**, the easiest way for vSphere users to bring containers into an existing vSphere environment. vSphere Integrated Containers delivers an enterprise container infrastructure that provides the best of both worlds for the developers and vSphere operations teams. Containers are now just as easy to enable and manage as virtual machines. No process or tool changes are required.

VMware vSphere Integrated Containers helps customers to transform their businesses with containers without re-architecting their existing infrastructure. It is comprised of three components – the Engine which provides the core container run-time, Harbor which is an enterprise registry for container images, and Admiral which is a portal for container management by dev teams. vSphere Integrated Containers enables IT operations teams to provide a Docker compatible interface to their app teams, running on their existing vSphere infrastructure and features tight integration with VMware NSX and VMware Virtual SAN to support best-in-class network automation and scale out, high performance persistent storage, respectively.

![vSphere 6.5](/images/blog/VIC.png)

Photo courtesy of VMware vSphere Blog

_vSphere Integrated Containers: Delivering the best of both worlds for IT and Developers_

vSphere 6.5 also lets you run apps from any cloud, including your data center or in public cloud environments. vSphere 6.5 is not only the heart of the Software-Defined Data Center, it’s also the foundation of VMware’s cloud strategy. vSphere 6.5 is available in both the private cloud and as a service through a public cloud. The newly announced VMware Cloud Foundation and VMware Cloud on AWS are both built on vSphere 6.5.

As the ideal platform for apps, cloud, and business, vSphere 6.5 reinforces the customer’s investment in VMware. vSphere 6.5 is one of the core components of VMware’s SDDC and a fundamental building block for VMware’s cloud strategy. With vSphere 6.5, customers can now run, manage, connect, and secure their applications in a common operating environment, across clouds and devices.

Article is from [Charu Chaubal](https://blogs.vmware.com/vsphere/author/charu_chaubal)

### [Sign up for our newsletter](https://mediashower.com/ce2/43911/6/177) today!
