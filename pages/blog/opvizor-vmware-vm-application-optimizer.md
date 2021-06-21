---
title: "opvizor VMware VM Application optimizer"
image: /images/blog/application-optimizer-button.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-03-31"
---

Some month ago we started a very successful project with our VM Application Optimizer. Our goal was not to optimize only the virtual hardware, the VMware host and infrastructure configuration. We wanted to get our customers some ideas how to optimize the virtual machine outside and inside the guest operating system to run specific applications in the best performing way.

All functionality is accessible as-a-Service and on-premise. Please either [register](https://www.opvizor.com/register) for SaaS or contact us for [on-premise](http://try.opvizor.com/onpremise)

Application Optimizer is a tool that allows Administrators to execute role-based Compliance Check against Virtual Machines provisioned in customer’s vSphere infrastructure.

VM Guests provisioned in the virtualization infrastructure may run with different guest OS's and operate with different applications running inside the VM, therefore you need to select the VM and the application profile. The auto detection has not been integrated yet as we want to minimize the amount of credentials and network communication needed by our data crawling service. Please let us know, if you would prefer auto-detection.

Hence, it is obvious that VM configuration should depend on SW running inside the Guest. The main goal of Application Optimizer is to help Virtualization Administrator to ensure that VM configuration (including configuration of related entities such as hosts, SAN) is in accordance to predefined list of Checks and generate Compliance Report. In addition, the same Report contains some instructions regarding Manual Checks and actions performed to achieve optimal performance of the VM.

You can access the solution by clicking the VM Application Optimizer icon: ![VM Application optimizer Icon](/images/blog/application-optimizer-button.png)

To use Application Optimizer:

- Select one or few VMs for Compliance Check
- Select the Application planned to be used in the VMs selected
- Start analysis and generate the Report by clicking Analyze button

At this time you can chose between the following different application profiles:

- Optimize Latency
- Oracle DB
- vPostGreSQL DB
- MS SQL

Of course we're working hard on improving the profiles and even to make them customizable.

As a **VM application optimizer** result you get informations about our checks made and how you can speed up and optimize your virtual machine for the running application.

![opvizor VM application optimizer](/images/blog/application-optimizer-result.jpg)
We've seen VM performance and application performance improvements of 60% and more, especially when old network and storage controller were used. Therefore we can recommend to take it serious what virtual hardware you use.
