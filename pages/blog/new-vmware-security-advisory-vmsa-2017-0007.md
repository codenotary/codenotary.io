---
title: "New VMware Security Advisory VMSA-2017-0007"
tags: ["Ops", "opvizor"]
date: "2017-05-31"
---

An important posting from VMware Security & Compliance [Blog](https://blogs.vmware.com/security).

Please scroll down for further information or find the [link here](https://blogs.vmware.com/security/2017/04/new-vmware-security-advisory-vmsa-2017-0007.html)!

## Here is the posting from VMware Security & Compliance [Blog](https://blogs.vmware.com/security).

On Tuesday, 4th of April 2017 a remote code-execution issue in the BlazeDS library ([CVE-2017-5641](http://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5641)) was disclosed in a US-CERT security advisory. We have reviewed the issue and determined that VMware vCenter Server 6.5 and 6.0 are affected due to the use of BlazeDS to process AMF3 messages. VMware vCenter Server 5.5 is not affected.

We have released the following new security advisory which documents the fixes for VMware vCenter Server 6.5 and 6.0 along with the workarounds:

[VMSA-2017-0007](https://www.vmware.com/security/advisories/VMSA-2017-0007.html)– VMware vCenter Server update resolves a remote code execution vulnerability via BlazeDS

Successful exploitation of this issue may allow an attacker to execute arbitrary code when deserializing an untrusted Java object. The issue is present in the Customer Experience Improvement Program (CEIP) opt-in UI. The vulnerability will still be present even if a customer has opted out of CEIP. Resolution of this vulnerability requires applying the fixes or the workarounds. We have also investigated this issue against the other VMware products. VMware products which are not listed in the security advisory are not affected.

We would like to thank Markus Wulftange of Code White GmbH for reporting this issue to us.

Please sign up to the [Security-Announce mailing lis](http://lists.vmware.com/cgi-bin/mailman/listinfo/security-announce)t to receive new and updated VMware Security Advisories.

This entry was posted in [VMware Security Response Center](https://blogs.vmware.com/security/vmware-security-response-center) and tagged [BlazeDS](https://blogs.vmware.com/security/tag/blazeds), [VMSA](https://blogs.vmware.com/security/tag/vmsa) on [April 13, 2017](https://blogs.vmware.com/security/2017/04/new-vmware-security-advisory-vmsa-2017-0007.html "8:28 pm") by [Praveen Singh](https://blogs.vmware.com/security/author/praveen_singh "View all posts by Praveen Singh").

![Security Advisory](/images/blog/vmworld.jpg)

### [Sign up](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) for Performance Analyzer today and start 30 days for free.
