---
title: "VMware KB VM Snapshot Size (GB) alarm incorrectly triggers on virtual machines"
image: /images/blog/wpid-toomanysnaps-s.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-19"
---

As you know as a reader of our blog posts, we cover also Knowledge Base articles that describe what we continously see in customers' environments.

After releasing many blog articles and product features as well as products covering VMware VM snapshots we received a lot of feedback regarding Snapshot related issues from the community.

One of the funniest things was a triggered VM Snapshot size alarm on a virtual machine that didn't had any existing snapshots.

Of course we investigated that environment as the customer expected an inconsistent snapshot or broken snapshot and [Snapwatcher](http://www.snapwatcher.com "Snapwatcher ") didn't detected any.

The result was a VMware bug, that is covered in [VMware KB article 2037464](http://kb.vmware.com/selfservice/microsites/microsite.do?cmd=displayKC&docType=kc&externalId=2037464&sliceId=1&docTypeID=DT_KB_1_1 "VMware KB article 2037464"):

> In VMware vCenter Server 5.1:
>
> - You configured a vCenter Server alarm to send alarms when virtual machines are running from snapshots
>
> - The alarm is falsely triggered even when the virtual machine does not have snapshots
>
> - You created the VM Snapshot Size (GB) alarm in vCenter Server
>
> - You see false alarms for multiple virtual machines in the inventory
>
> - Snapshot Alarms get triggered regardless of Alarm Definition Threshold setting

The workaround is plain simple, but not really satisfying - **disable the alarm**

Alternatively upgrade VMware vCenter Server to [version 5.1 Update 1](https://my.vmware.com/web/vmware/info/slug/datacenter_cloud_infrastructure/vmware_vsphere_with_operations_management/5_1 "version 5.1 Update 1") and the issue is solved.

It seems that only VMware vCenter Server 5.1 is affected, triggering alarms for VM Snapshot size without any Snapshots for that virtual machine.

Please also be aware that no alarm till today even with the most recent VMware version 6.0 can detect inconsistent Snapshots. These hidden guys or broken VM snapshots can only be detected by checking the datastore and the VM configuration. 

![VM snapshot size](/images/blog/wpid-toomanysnaps-s.png)

User [Opvizor Health Analyzer](https://www.opvizor.com/register "Opvizor Health Analyzer") and [Snapwatcher](http://www.snapwatcher.com "Snapwatcher ") to avoid these things from crashing your vSphere!
