---
title: "Under the Hood – vSphere 6.7 Update 1"
tags: ["Ops", "opvizor"]
date: "2018-09-04"
---

# Under the Hood – vSphere 6.7 Update 1

We want to share an important article from [Adam Eckerle](https://blogs.vmware.com/vsphere/author/adam_eckerle) from the VMware vSphere Blog team regarding update for vSphere 6.7.

Please scroll down for some more information and please find [here](https://blogs.vmware.com/vsphere/2018/08/under-the-hood-vsphere-6-7-update-1.html) Adam's article with all comments.

In conjunction with the [announcement of vSphere Platinum](http://blogs.vmware.com/vsphere/2018/08/introducing-vsphere-platinum-and-vsphere-6-7-update-1.html) we also have announced vSphere 6.7 Update 1 (note: general availability will be later this year). vSphere 6.7 U1 is an important release that not only signifies enterprise readiness but also brings in some important new features and enhancements. **It also provides an upgrade path from vSphere 6.5 U2 to vSphere 6.7 U1.**

Here are the areas we’ve focused on for this release:

![vSphere 6.7 Update](/images/blog/1-8.png)

Photo courtesy of [Adam Eckerle](https://blogs.vmware.com/vsphere/2018/08/under-the-hood-vsphere-6-7-update-1.html)

## vSphere Client

Let’s first take a look at the vSphere Client. From vSphere 6.7 U1 onward, the vSphere Client is the only client you’ll need to manage vCenter Server. As promised [here](https://blogs.vmware.com/vsphere/2018/05/fully-featured-html5-based-vsphere-client-coming-fall-2018.html), all administrative functions have now been completed for the vSphere Client. No more switching between clients to perform actions such as setting up a vCenter HA (VCHA) cluster or using vSphere Update Manager (VUM) to update VMware Tools. Many of the latest additions have not only showed up in the vSphere Client but they’ve also been improved in the process. Setting up a VCHA cluster has been greatly simplified, for example. No longer are there multiple workflows (formerly Basic and Advanced). Look for other common tasks such as deploying from a Content Library, Advanced Search, configuring scheduled tasks, and more top-N charts.

## vCenter Server Converge Tool

Next, we have one of my personal favorites and probably one of the most anticipated tools – the vCenter Server Converge Tool. This tool allows an administrator to migrate from an external Platform Services Controller (PSC) architecture into the simpler, easy-to-manage embedded PSC architecture. This means fewer VMs to manage, no more load balancers for HA, and no complex multi-site replication topologies. While we announced support for Enhanced Linked Mode (ELM) with embedded PSCs for vSphere 6.7 and vSphere 6.5 U2, many customers already had external PSC topologies. For many of those customers it just hasn’t been feasible to rebuild to take advantage of this new, simpler architecture. Until now. The vCenter Server Converge Tool works by installing an embedded PSC on the vCenter Server Appliance and establishing a replication agreement between the embedded PSC and the external PSC. Once this process has been completed for all vCenter Servers using a given external PSC, that external PSC can then be decommissioned. Then, if you need HA, VCHA handles the replication of the embedded PSC state to the passive node so it is all built-in. So, even if you do currently have one of those complex, multisite, HA topologies with a load balancer, you can use the Converge Tool to migrate to a much simpler, efficient architecture. Note that the Converge Tool only supports vSphere 6.7 U1 so you’ll have to get your upgrade completed before you can simplify your vCenter Server environment. The tool itself is launch via a CLI utility – vcsa-converge-cli – and is included on the VCSA ISO. It runs on Windows, macOS, and Linux just like the VCSA installer and uses json templates for configuration.

![vSphere Update](/images/blog/2-8.png)

Photo courtesy of [Adam Eckerle](https://blogs.vmware.com/vsphere/2018/08/under-the-hood-vsphere-6-7-update-1.html)

## The vCenter Server Converge Tool is located on the VCSA ISO

One other gap that we needed to fill that relates to the Converge Tool is the ability to move (or repoint) an vCenter Server with embedded PSC from one vSphere SSO Domain to another. A similar capability was released with vSphere 6.7 which allowed for the repoint of a vCenter Server to a different vSphere SSO Domain to another but it only worked with external PSCs. Now, you have the flexibility to combine, merge, or separate vSphere SSO Domains to get to the architecture that best suits your organization’s needs without time consuming and difficult rebuilds or migrations. Emad is planning some detailed walkthroughs and demos of both capabilities as we get closer to GA so watch for some announcements from him.

## Enhancements for HCI and vSAN

This next set of features is aimed at making it easier to setup, configure, and scale host clusters. In this release we’ve added a new workflow called Cluster Quickstart which provides one simple, efficient wizard to create a cluster, add hosts, and configure those hosts so they are all identical. This configuration includes HA & DRS, Enhanced vMotion Compatibility (EVC), a vSAN datastore, and networking including a Virtual Distributed Switch (VDS). With Cluster Quickstart you can go from zero to fully functioning cluster in a matter of minutes. And, when it is time to expand the cluster, there is a simple workflow to add new hosts and configure them using the cluster settings used during initial setup. This new workflow also includes a cluster validation that can be used to ensure all settings have been properly configured on all hosts and will report any discrepancies.

![vSphere Update](/images/blog/3.gif)

Photo courtesy of [Adam Eckerle](https://blogs.vmware.com/vsphere/2018/08/under-the-hood-vsphere-6-7-update-1.html)

One other important improvement in this area is the integration of I/O controller firmware update with VUM. Customers are now able to remediate software and firmware in one maintenance cycle under a single VUM UI. It is much faster and safer to do cluster remediation in one operation. vSAN HCL checks are built-in to ensure the host being remediated is compliant to the vSAN HCL before VUM moves to the next host. The I/O controller firmware is updated via an integration with the server vendor’s firmware update utility. VUM will detect if the appropriate utility is missing and prompt the administrator to download it as shown in the screenshot below. Then, VUM can download the appropriate I/O controller firmware from the server vendor’s repository or utilize a user-configured local repo. This firmware is then included in the system managed vSAN baselines to ensure the recommended I/O controller firmware is always being installed when remediating hosts.

![vSphere Update](/images/blog/4-5.png)

Photo courtesy of [Adam Eckerle](https://blogs.vmware.com/vsphere/2018/08/under-the-hood-vsphere-6-7-update-1.html)

## Enhanced Content Library

Content Library in vSphere 6.7 Update 1 enables the importing of OVA templates from a HTTPS endpoint and local storage, as well as syncing content from OVA templates to other vCenter Servers. As part of the import of OVA templates, Content Library handles and verifies the OVA bundle’s certificate and manifest files in adherence to security best practices. In addition, Content Library now natively supports VM templates (VMTX) and associated operations such as deploying a VM directly from Content Library. These improvements make working with Content Libraries more efficient and prevent the need to copy objects in and out of Content Library to do meaningful operations. Note that syncing of VM templates to another vCenter Server is not yet available in vSphere 6.7 Update 1.

## vMotion for NVIDIA vGPU & Support for Intel FPGA

With vSphere 6.7 Update 1, VMware and NVIDIA have collaborated to significantly enhance the operational flexibility and utilization of virtual infrastructure accelerated with NVIDIA virtual GPU (vGPU) solutions which include the Quadro virtual Data Center Workstation, GRID vPC and GRID vApps.

Following the introduction of Suspend and Resume capabilities in vSphere 6.7, VMware and NVIDIA are introducing VMware vSphere vMotion with NVIDIA vGPU powered VMs. Now, infrastructure administrators can perform maintenance operations on the underlying GPU accelerated VDI or Compute infrastructure while ensuring that end-users and their applications are  not disrupted. For example, consider an emergency patching or urgent infrastructure operation needed to be carried out on the NVIDIA vGPU accelerated VDI infrastructure of a group of industrial designers, designing CAD models of a new product. Previously, to carry out that maintenance operation, all of the VDI desktops had to be completely powered off, disrupting their work and lowering their productivity. Alternatively, the administrator had to wait until after-hours and hope they all adhered to the IT team’s request to save their work, otherwise, it would be lost. With the introduction of VMware vSphere vMotion for NVIDIA vGPU powered VMs, these complexities are a thing of the past as IT administrators can seamlessly migrate the vGPU powered VMs to another host and perform the required maintenance, eliminating productivity disruption and increasing the agility of the IT staff.

Furthermore, with vSphere 6.7 Update 1, VMware is expanding its array of supported hardware accelerators, and introducing support for the Intel® Programmable Acceleration Card with Intel Arria® 10 GX FPGA. This Programmable Acceleration Card will be leveraging VMware DirectPath I/O technology, which allows VMs to access bare metal devices in the host without hypervisor intervention and with near bare metal performance characteristics. Administrators can now make this programmable hardware accelerator available in VMware vSphere VMs and provide full access to the device through Intel’s Acceleration Stack for Intel Xeon CPU with FPGA.

## Conclusion

vSphere 6.7 Update 1 is an exciting release. Not only does it add support for vSphere Platinum but it includes a number of exciting new features. If you’ve been waiting to upgrade to vSphere 6.7 then start planning your upgrade. If you’re just waiting to finally get rid of flash or your external PSCs, have the ability to more efficiently manage your HCI environment, or vMotion your NVIDIA vGPU workloads, then start getting prepared to upgrade!

Thanks Adam for this information, please find more from Adam [here](https://blogs.vmware.com/vsphere/author/adam_eckerle).

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-9.png)](https://www.opvizor.com/)
