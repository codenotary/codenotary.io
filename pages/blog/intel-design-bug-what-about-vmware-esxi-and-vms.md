---
title: "Intel Design Bug - What about VMware ESXi and VMs?"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-01-05"
---

By now probably everyone with an internet access who read news in the last couple of days noticed the bad Intel design bug that is affecting millions or even billions of devices, server and client computer. While potential hacker might not be extremely interested spending time to bother personal computer and mobiles, the situation changes when it comes to systems hosting hundreds, thousands or millions of customer infrastructures and their data. There is not doubt that cloud computing could be a valuable target for attacks utilizing this bug.

While many reports say that VMware ESXi (VMkernel) is not affected, the guest OS, so the virtual machine is affected.

Extract from the VMware blog Post: [https://blogs.vmware.com/security/2018/01/vmsa-2018-0002.html](https://blogs.vmware.com/security/2018/01/vmsa-2018-0002.html)

VMSA-2018-0002

Update 01/04/18: OS vendors have begun issuing patches that address CVE-2017-5753, CVE-2017-5715, and CVE-2017-5754 for their operating systems. For these patches to be fully functional in a guest OS additional ESXi and vCenter Server updates will be required. These updates are being given the highest priority. Please sign up to the [Security-Announce mailing list](http://lists.vmware.com/cgi-bin/mailman/listinfo/security-announce) to be alerted when these updates are available.

Today VMware has released the following new security advisory:

[VMSA-2018-0002](https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html) – VMware ESXi, Workstation and Fusion updates address side-channel analysis due to speculative execution.

This advisory documents remediation for known variants of the Bounds-Check Bypass (CVE-2017-5753) and Branch Target Injection (CVE-2017-5715) issues due to speculative execution disclosed today by Google Project Zero. These issues may result in information disclosure from one Virtual Machine to another Virtual Machine that is running on the same host.

A third issue due to speculative execution, Rogue Data Cache Load (CVE-2017-5754), was disclosed along the other two issues. It does not affect ESXi, Workstation, and Fusion because ESXi does not run untrusted user mode code, and Workstation and Fusion rely on the protection that the underlying operating system provides.

The remediation as documented in [VMSA-2018-0002](https://www.vmware.com/us/security/advisories/VMSA-2018-0002.html), has been present in VMware Cloud on AWS since early December 2017.

Please sign up to the [Security-Announce mailing list](http://lists.vmware.com/cgi-bin/mailman/listinfo/security-announce) to receive new and updated VMware Security Advisories.

Customers should review the security advisory and direct any questions to VMware Support.

We can also highly recommend the article by Brandon Lee at [https://www.virtualizationhowto.com](https://www.virtualizationhowto.com)

[https://www.virtualizationhowto.com/2018/01/new-intel-design-flaw-vmware-affected/](https://www.virtualizationhowto.com/2018/01/new-intel-design-flaw-vmware-affected/)
