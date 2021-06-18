---
title: "VMware vSphere 6.5 Update 1"
image: /images/blog/65U1_Upgrade-768x257.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-09-14"
---

[Adam Eckerle](https://blogs.vmware.com/vsphere/author/aeckerle) posted about the latest update from VMware vSphere 6.5 on [VMware vSphere Blog](https://blogs.vmware.com/vsphere).

Find [here](https://blogs.vmware.com/vsphere/2017/07/vsphere-6-5-update-1-hood.html) his complete post and all comments to his article.

We would like to share the most important information, please scroll down for a short repost.

General Updates and Enhancements

First and foremost, **vSphere 6.5 Update 1 allows customers who are currently on vSphere 6.0 Update 3 to upgrade to vSphere 6.5 Update 1**. All of the security and bug fixes that were part of 6.0 U3 are now included in 6.5 U1 whereas before, upgrading from 6.0 U3 to 6.5 prior to U1 would have put customers in a more risky position due to the timing of the releases. That concern is a thing of the past now, though, and we anticipate even more customers will begin their upgrade journeys.

![vSphere 6.5](/images/blog/65U1_Upgrade-768x257.png)

Photo courtesy of [VMware vSphere Blog](https://blogs.vmware.com/vsphere/2017/07/vsphere-6-5-update-1-hood.html)

Speaking of upgrades, **it is important to note that customers who are still on vSphere 5.5 will need to be on at least vSphere 5.5 U3b in order to upgrade to vSphere 6.5 U1**. This may mean a two-step process for some customers to get to vSphere 6.5 U1 but this is necessary in order to ensure the best possible outcome for the upgrade.

Another item that has been signaled for quite some time is the removal of 3rd party switch support. This means that **after vSphere 6.5 Update 1**, customers using 3rd party virtual switches such as the IBM DVS 5000v, HPE 5900v, and Cisco Nexus 1000v will need to migrate off of those switches **prior to upgrading** to any future release. For more information on this you can visit [https://kb.vmware.com/kb/2149722](https://kb.vmware.com/kb/2149722).

Many customers and home lab users like to use Mac hardware in order to virtualize macOS in an officially supported manner. I’m happy to announce that vSphere 6.5 Update 1 adds full support for ESXi on MacPro 6,1 hardware! So, if virtualizing macOS is your thing you can now do it on the latest hardware and without [workarounds](http://www.virtuallyghetto.com/2017/01/esxi-6-5-support-for-apple-mac-pro-61.html).

## vCenter Server

There are some exciting enhancements to vCenter Server in this release as well. First, lets talk about scale numbers as that has been a frequent ask and challenge for some customers. In vSphere 6.5 Update 1 we’re increasing some of the maximums related to vSphere Domains (also known as SSO Domains). In this release we have a new maximums guide that can be found here: [http://vmw.re/65u1max](http://vmw.re/65u1max). Note that these maximums are specific to vSphere 6.5 Update 1 and are \_not\_ retroactive. vSphere 6.5 releases prior to Update 1 are still bound by the maximums published here: [http://vmw.re/65max](http://vmw.re/65max).

Here are some of the increased vSphere 6.5 Update 1 numbers:

- Maximum vCenter Servers per vSphere Domain: 15 (increased from 10)
- Maximum ESXi Hosts per vSphere Domain: 5000 (increased from 4000)
- Maximum Powered On VMs per vSphere Domain: 50,000 (increased from 30,000)
- Maximum Registered VMs per vSphere Domain: 70,000 (increased from 50,000)

Hopefully these new scale numbers are welcome improvements!

Another exciting improvement is full support for the vCenter Server Appliance installer on macOS Sierra (10.12). Due to the timing of the release of Sierra and vSphere 6.5, changes to Sierra’s security model were causing problems with the installer. I’m happy to say that the installer now works great on Sierra so no more workarounds required.

## vSphere Client

The vSphere Client also sees a big leap forward in this release. We’ve added too much functionality to list, but we have focused more on host-centric operations. So Virtual Distributed Switch (VDS) management, datastore management, and host configuration are areas that have seen a big increase in functionality. This means that the vSphere Client now has about 90% of general workflows completed. We’re pushing hard towards 100%!

As a reminder, the vSphere Client can be accessed via [https://<vcenterfqdn>/ui](https://%3Cvcenterfqdn%3E/ui) and it is completely built on HTML5, requires no plugins, and it lightning fast. If you’ve been following along with the Fling version, the version in vSphere 6.5 Update 1 is roughly equivalent (actually a bit newer) than the bits in v3.15 of the Fling. You can view the items that we’re still working on getting into the vSphere Client [here](https://docs.vmware.com/en/VMware-vSphere/6.5/rn/vsphere-client-65-html5-functionality-support.html). Dennis Lu, the Product Manager for the vSphere Client also has a [blog with a few more details](http://blogs.vmware.com/vsphere/2017/07/second-vsphere-client-html5-update-in-vsphere-6-5u1.html).

## vSAN

vSAN 6.6.1 is also here and adds some exciting new capabilities involving vSAN and vSphere Update Manager (VUM). This new integration helps streamline and simplify vSphere upgrades on vSAN-enabled clusters by consulting several sources and recommending updates including firmware, drivers, and vSphere software. You can learn more about this new functionality in [Pete Flecha’s blog](https://blogs.vmware.com/virtualblocks/2017/07/28/vsan-6-6-1-vum-integration/) over on the [Virtual Blocks blog](http://blogs.vmware.com/virtualblocks).

Getting Started with vSphere 6.5

vSphere 6.5 Update 1 includes some great new enhancements to an already solid release. Along with the enhancements above there are numerous bug fixes that should make your experience even better. If you’ve been waiting to upgrade to vSphere 6.5 then [wait no longer](https://www.vmware.com/promotions/2016-vSphere-vSOM-upgrade.html?src=so_59791f2b99cac&cid=70134000001CZ9g)! Please review the [full release notes](https://docs.vmware.com/en/VMware-vSphere/6.5/rn/vsphere-vcenter-server-651-release-notes.html) and I’d also recommend Emad’s [blog series on upgrading to vSphere 6.5](https://blogs.vmware.com/vsphere/2017/05/vsphere-6-5-upgrade-considerations-part-1.html) if you need help getting started.

Thanks Adam for the news!

### [Sign up](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) for Performance Analyzer today and start 30 days for free.
