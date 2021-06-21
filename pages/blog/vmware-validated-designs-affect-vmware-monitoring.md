---
title: "What are VMware Validated Designs and How Do These Affect Your VMware Monitoring"
image: /images/blog/bigstock-Servers-room-6295149_600x.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-07-19"
---

August 2015, VMware announced Validate Designs. Though not brand new anymore, there have been some questions within the community about exactly [what Validated Designs actually is](https://cto.vmware.com/introducing-vmware-validated-designs/), what it does, why it's needed, and how it affects VMware monitoring tools and activities. Validated Designs are actually architectures that were developed and validated by VMware gurus. 

The designs encompass the whole product stack that is utilized in VMware's SDDC (software-defined data center). Validated Designs offers architectures for every deployment scenario and use case that are both standardized and streamlined. The designs are offered to enhance the interoperability, testing, and product support, but also to streamline and facilitate deployments of the SDDC. What we now have is a comprehensive collection of documentation that specifically targets the various SDDC deployment situations and architectures. 

So, if VMware users already have reference architectures, white papers, etc. for all of VMware's product releases, why is it necessary to spend the time and effort to deliver Validated Designs? The answer is because, while those alternatives work fine for resource purposes, those are useful only for that specific version of that specific product. VMware Validated Designs takes into consideration the entirety of the SDDC stack and makes sure to cover things like product version compatibility, continuing testing that involves new product releases, and testing and validating upgrades to make sure that what you deploy now will be able to be upgraded in the subsequent version(s). 

Some of the [reasons for and benefits of VMware Validated Designs](https://www.vmware.com/software-defined-datacenter/validated-designs) (as well as how it affects VMware monitoring) include: 

## **Validated Designs Means a Faster Time to Value**

![VMware Validated Designs](/images/blog/bigstock-Servers-room-6295149_600x.jpg)

_Validated Designs helps you move from a traditional data center setup to the software defined data center using proven architectures developed by experts in the field. It eliminates the guesswork._ 

One of the drawbacks to migrating from a traditional data center infrastructure to the SDDC is that it takes some time after deployment to begin delivering a return on all those investments. With Validated Designs, that time between migration to an SDDC and the time that it begins delivering a return to the business on its investment is much quicker. You can get even more performance when you couple Validated Designs with an established VMware monitoring tool, like Opvizor's Snapwatcher solution. 

## **Building Confidence in the SDDC** 

Another issue when you opt for SDDC over a traditional data center is that users (and frequently, upper management, as well) are often a bit skeptical. Validated Designs gives you the power to build the SDDC using a tried and true architecture. It comes with recommended ongoing operations for Day Zero, Day One, Day Two, etc, and lowers the chances of errors when it comes to deployment. 

## **Leverage Expert Designs for Your Own Data Center** 

Maybe you aren't an expert when it comes to designing the data center. That doesn't mean you don't get to leverage an expert design. With Validated Designs, every design for any given deployment scenario has been developed by a team of VMware experts. Since the design you choose has already been optimized, based on real feedback from real customers in real-world situations, you and your team don't have to go through a laborious trial and error process. 

## **The Design is Comprehensive** 

All of the Validated Designs come with everything you need to set up and implement a fully functional SDDC for a variety of use cases. Still, the designs are always agnostic in terms of the hardware used in the data center. Validated Designs establish reference architectures, walkthroughs of the data center deployment, guides for deployment, guides for operations, and much more. 

## **The Validation of the Designs is Continuous** 

Every design in Validated Designs is validated continuously by the VMware team. This is done by automated testing, to make sure that after a design has been validated it remains valid. Each new build of any specific component of the design falls into an automated deployment of the design. 

## **Reference Architecture Documents & Deployment Walkthroughs** 

According to VMware's site, "These documents describe the implementation of a Software-Defined Data Center (SDDC) that leverages the latest VMware products and technologies. In particular, they detail out two designs - Foundation and Single Region IT Automation Cloud."The Foundation design describes a scalable, resilient, best-practice configuration for either single region or dual region, on which all additional functionality is layered. 

The Foundation configuration uses industry-standard servers, IP-based and VMware Virtual SAN storage, and software-defined networking to support a scalable and redundant architecture. Single Region IT Automation Cloud is an automation cloud based on VMware technology which enables an IT operations team to automate the provisioning of common repeatable requests and to respond to business needs with agility and predictability." 

## **Operations Walkthroughs**

![VMware Validated Designs](/images/blog/bigstock-shot-of-network-cables-and-ser-26789738_600x.jpg)

_Validated Designs walks you through some of the most common architectures, as well as the problems VMware users frequently have, offering tried and true solutions for getting the SDDC set up and running optimally and securely. You'll still need a good VMware monitoring tool, though._ 

The Operations Walkthroughs documents offer actionable demonstrations of common operations and management activities (in other words, those Day Two operations) that are done inside the SDDC. 

There are currently only a few sections in the Operations Walkthroughs: Object Management, Content and Storage Management, Capacity Management and Data Confidentiality and Integrity.

The Object Management section teaches users how to organize and secure the objects that are inside the vSphere environment. Topics included in the Operations Management section include how to use the tagging function and how to protect the environment with solid backups.The Content and Storage Management section includes how to configure and make use of the content library, and how to manage and consume the content. 

This section also offers examples of using vSphere Storage Policy Based Management, as well as how to use Virtual SAN to deal with storage related issues.The Capacity Management section teaches users how to foresee and plan for capacity needs, as well as how to respond to particular needs by setting up new clusters or expanding the existing clusters.The Data Confidentiality and Integrity section gives users a bit of a how-to for VMware monitoring, as well as how to manage security certificates within vSphere and vRealize Operations Manager.

[![VSAN Performance Monitoring](/images/blog/vsan.png)](http://try.opvizor.com/perfanalyzer/)

VMware Validated Designs is good, and when coupled with a revolutionary VMware monitoring tool that includes VSAN, it's even better. [](http://try.opvizor.com/perfanalyzer/)[Sign up for Performance Analyzer today and start 30 days for free](http://try.opvizor.com/perfanalyzer/).
