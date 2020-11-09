---
title: "Nutanix Prism Central and Prism Element support"
image: /images/blog/host-highlights-2.png
tags: ["Ops", "opvizor"]
date: "2019-04-09"
---

We're more than thrilled to announce our Nutanix Prism Central and Prism Element integration. After weeks of development to integrate all combinations (Nutanix Prism Central, Prism Element, AHV, VMware ESXi) the current version of Performance Analyzer supports Nutanix out of the box, given the correct license is used.

Mixing our integrations to achieve an end to end view from application to the underlying hypervisor and hardware was always a key fact of Performance Analyzer and we proudly support nearly all popular combination by adding Nutanix as well.

As a Nutanix Elevate partner, we currently work on the Nutanix Ready validation, so stay tuned.

You can now monitor and analyze Nutanix HCI environments and check important configuration data and performance metrics. Get most our of Performance Analyzer by correlating events and metrics from hardware, hypervisor (Nutanix Acropolis, VMware ESXi), applications, Guest OS and container. Simply combining the Nutanix integration with our Linux, Windows and Docker metrics. Kubernetes is also around the corner and will be ready soon.

## Nutanix Only environment

We currently ship as a VMware vApp, but the vmdk can easily be imported using Nutanix Prism Central if you don't run VMware at all.

You can find a guideline here: [Importing OVF/OVA into Nutanix Prism Central](https://www.virtualdennis.com/importing-an-ovf-ova-into-nutanix-ahv-using-prism/)

Configure the virtual machine as a Linux (Debian/Ubuntu) system with at least 4 vCPUs and 12 GB of memory.

All steps to configure Performance Analyzer are still the same: [Online Manual](http://manual.opvizor.com)

## Use Performance Analyzer

Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

We support:

- Nutanix Prism Central
- Nutanix Prism Elements
- AHV Acropolis Hypervisor
- VMware ESXi

**Nutanix Host Highlights View**

**![Nutanix Prism Host Highlights](/images/blog/host-highlights-2.png)**

**Nutanix VM Highlights View**

**![Nutanix VM Highlights](/images/blog/vm-highlights-2.png)**

**Nutanix Host Detail View**

**![Nutanix Prism Host View](/images/blog/host-2.png)**

**Nutanix VM Detail View**

![Nutanix VM View](/images/blog/vm-2.png)

Some of our Nutanix integration features are:

- Get System overall status (across multiple systems)
- Check Host and VM performance and utilization
- Full insights into Disk Latency and VM Disk IOps
- See Memory Issues and Network Issues (Packet Loss) instantly
- Get NUMA information (currently VMware ESXi only)
- Combine with applications running inside the container
