---
title: "VMware Backup using Changed Block Tracking failed after upgrading to VMware ESXi 6.0"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-22"
---

# VMware Backup using Changed Block Tracking failed after upgrading to VMware ESXi 6.0

VMware published a fix for the CBT issue causing VMware backups to fail when using VMware ESXi 6.0 as the hypervisor. So far the workaround was to disable Changed Block Tracking that caused long backup windows.

All customers that were using CBT to backup their VMs after installing or upgrading the ESXi version to 6.0 were affected when taking one of the following actions:

- Backing up a virtual machine with Change Block Tracking (CBT) enabled fails after upgrading to VMware ESXi 6.0.x on host
- Backing up a virtual machine with Change Block Tracking (CBT) enabled fails after installing VMware ESXi 6.0.x on host
- Powering on the virtual machines fails.
- Expanding the size of a virtual disk fails.
- Taking virtual machine quiesced snapshots fails.
- The vSphere Client displays the error similar to:

An error occurred while taking a snapshot: msg.snapshot.error-QUIESCINGERROR

**Note: This error may or may not be present**

- In the /var/log/vmkernel.log file located on the ESXi host where the affected virtual machine is running, you see the error similar to:

_<YYYY-MM-DD>T<TIME>.623Z cpu5:809536)WARNING: CBT: 191: No memory available! Called from 0x4180219af50e_

_<YYYY-MM-DD>T<TIME>.637Z cpu5:809536)WARNING: CBT: 191: No memory available! Called from 0x4180219af50e_

_<YYYY-MM-DD>T<TIME>.648Z cpu5:809536)WARNING: CBT: 191: No memory available! Called from 0x4180219af50e_

- In the vmware.log file of the affected virtual machine, you see an entry similar to:

_vcpu-0| I120: DISKLIB-CBT : Creating cbt node 92b78c-cbt failed with error Cannot allocate memory (0xbad0014, Out of memory)_

_You can read all about it here - [VMware KB article 2114076](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2114076 "VMware KB article 2114076")_

The issue has been resolved with the following patch: 

[VMware ESXi 6.0, Patch Release ESXi600-201505001 (2116125)](http://kb.vmware.com/kb/2116125 "VMware ESXi 6.0, Patch Release ESXi600-201505001 (2116125)")

\[optin title="Sign Up for News" text="Get regular news about Virtualization" buttontext="Sign Up" successMessage="Message has been submitted successfully." errorMessage="Failed to send your message. Please try later." invalidEmailMessage="Your email address does not appear valid." border="false" collectfirstname="false" collectlastname="false" collectphone="false" collectcompany="false"\]
