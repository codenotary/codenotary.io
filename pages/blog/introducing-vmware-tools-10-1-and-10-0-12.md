---
title: "Introducing VMware Tools 10.1 and 10.0.12"
tags: ["Ops", "opvizor"]
date: "2016-11-15"
---

The next major release of VMware Tools. Please find a repost of [VMware article](http://blogs.vmware.com/vsphere/2016/10/introducing-vmware-tools-10-1-10-0-12.html?utm_content=buffer689c5&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer) from [Eric Gray](http://blogs.vmware.com/vsphere/author/eric_gray) from [VMware VSphere Blog](http://blogs.vmware.com/vsphere).

The collection of in-guest drivers and agents that optimize VM performance and increase manageability – will be delivered with VMware vSphere 6.5, and is also downloadable as of today from My VMware. As usual, this version of VMware Tools is compatible with previous vSphere releases, and several enhancements improve the overall manageability experience when used in conjunction with vSphere 6.5.

## Bundling of Tools for most popular guests only

VMware ESXi 6.5 includes VMware Tools for the most commonly used guest operating systems; Tools for other guests are available for download from My VMware. Similarly, Tools updates for those same bundled guests will be distributed through Update Manager, as they have been in the past, via the tools-light VIB.

## Bifurcation of Tools for legacy and current guests

This release of VMware Tools is comprised of two separate delivery vehicles. [VMware Tools 10.1](http://pubs.vmware.com/Release_Notes/en/vmwaretools/1010/vmware-tools-1010-release-notes.html) will be available for OEM-supported guest operating systems only. Legacy guests that have fallen out of support by their respective vendors will be covered by “frozen” [VMware Tools 10.0.12](http://pubs.vmware.com/Release_Notes/en/vmwaretools/10012/vmware-tools-10012-release-notes.html). The frozen Tools will not receive feature enhancements going forward. Note, therefore, that the logical upgrade path from 10.0.9 is not 10.0.12 for the vast majority of workloads – rather, it is 10.1.  For more information about support categorization for guest operating systems, see [KB 2015161](http://kb.vmware.com/kb/2015161).

The following table depicts the two changes described above:

![VMware Tools](/images/blog/1-7.png)

Photo courtesy of VMware vSphere Blog

## Guest OS granularity changes

With Tools 10.1 and 10.0.12 there are now two ISO images for certain families of guest operating systems in order to accommodate the bifurcation described above. Consequently, the configurable guest OS attribute for some guests in vSphere 6.5 has become more precise in order to support this change.

The most notable example of this change is CentOS: In vSphere 6.5, CentOS guest selections are available for CentOS 7, CentOS 6, and CentOS 4/5. In previous vSphere releases, these versions were all combined into a single selection: CentOS 4/5/6/7. Administrators can either edit the guest OS type or leverage the new VM configuration option tools.hint.imageName to ensure the proper ISO image is mounted to these VMs for Tools install and upgrade.

Please be aware that current Linux distributions ship with [Open VM Tools](https://blogs.vmware.com/vsphere/2016/02/understanding-the-three-types-of-vm-tools.html), so most CentOS 7 VMs are likely running OVTs and are not affected by the above scenario. However, for those customers that have chosen to run the vSphere-bundled “Tar Tools” instead, please keep this change in mind.

## Detailed display of type and version information in the Web Client

VMware Tools have always had two different designations: one is a human-readable version number, such as 10.0.7, and the other is an internal code, like 10247. With vSphere 6.5, the Web Client now displays both variations of the version number as well as the specific type of Tools installed in the guest OS, such as MSI, OSP, OVT, or TAR Tools.

![VMware Tools](/images/blog/2.gif)

Photo courtesy of VMware vSphere Blog

## Signed ISO images

VMware Tools have always been distributed as ISO images that can be mounted to individual VMs in order to install or upgrade. VMware ESXi 6.5 introduces a new layer of security by cryptographically verifying these ISO images each time they are accessed. To facilitate this verification, Tools distributions now include additional files with appropriate hashes. If manually extracting, moving, or curating a Tools repository, please ensure all of the supporting bundled files remain together.

## Future Tools upgrades for older vSphere VMs

Given the very broad backward and forward compatibility of VMware Tools, it is possible that some customers are running VMs with the Tools that shipped as part of very old vSphere releases. vSphere 5.0 and 5.1 recently reached End of Support, and the VMware Tools that were bundled with those releases are also destined for a similar fate. Therefore, this is a great time to start planning to upgrade Tools 8.x and 9.0.x to the current version. In the future, those older Tools releases will not be directly upgradable to the latest Tools; instead, a two-phase upgrade will be required at that time.

## New and more detailed documentation

One of the goals of decoupling the release of VMware Tools and vSphere was to enable more detailed information about updates through release notes. Starting with Tools 10.1, release notes will be further enhanced to include a table documenting the precise version number of each individual driver and component. Going beyond release notes, we now also offer stand-alone documentation for VMware Tools 10.1, including more information about management and functionality of the various elements.

## Concluding

We hope that the new efforts to treat VMware Tools as top-tier products are beneficial to all customers. The enhanced documentation, security, and product functionality should be welcome news to vSphere administrators everywhere. The continued bundling certain popular Tools versions for supported and legacy guests, along with updates through VUM, ought to quell some of the concerns raised last year when we first announced the separation of Tools and vSphere.

Download: [VMware Tools 10.1](https://my.vmware.com/web/vmware/details?downloadGroup=VMTOOLS1010&productId=491) and [VMware Tools 10.0.12](https://my.vmware.com/web/vmware/details?downloadGroup=VMTOOLS10012&productId=491)

### Here are some other articles and tips regarding VMware Tools:

- [How To Install VMware Tools On pfsense (FreeBSD)](https://www.howtoforge.com/how-to-install-vmware-tools-on-pfsense-freebsd): This tutorial shows how to install VMware Tools onto pfsense v1.2.3 which is operated by the FreeBSD OS. It took me days to figure out how to do it, especially with lack of a complete guide in the Internet.
- [FreeBSD 10.x VMware Tools Install](https://gist.github.com/steakknife/37bc57770e6c13f822e3)
- Short overview from [Allan Kjaer](https://twitter.com/share?status=www.virtual-allan.com/contact-me/&text=Contact%20Me): [New VMware Tools released](http://www.virtual-allan.com/new-vmware-tools-released/)

[Sign up for our newsletter](https://mediashower.com/ce2/43911/6/177) today!

### [Sign up](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) for Performance Analyzer today and start 30 days for free.
