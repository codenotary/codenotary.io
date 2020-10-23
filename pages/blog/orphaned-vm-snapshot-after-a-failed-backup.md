---
title: "Orphaned VM snapshot after a failed backup"
tags: ["Ops", "opvizor"]
date: "2015-07-13"
---

VMware updated their knowledge base article covering orphaned VM snapshots after an automatic or manual backup using a backup software failed to remove the snapshot.

The result is a virtual machine running on a snapshot that the VMware snapshot manager is not showing at all.

> Sometimes a backup application might perform a routine backup operation, by taking the snapshots of the VM. When the backup is completed the backup software automatically deletes the snapshot file. In some cases, when the backup operation fails, a stale snapshot might be created.

> This stale snapshot will not show up when we view it from the Snapshot Manger, and is only displayed when the datastore on which the VM resides is browsed.  

You can access the complete [KB article about orphaned VM snapshot here](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2114949 "KB article here")

IMHO it's not fair to blame the backup vendors for that as their software is only executing VMware API commands, so they might trigger the issue but they are not the root cause.

As this situation happens quite often and the workaround mentioned to create another snapshot manually to make a delete all afterwards only sometimes works.

- Right click the **Virtual Machine** and select **Snapshot**.
- Choose **Take Snapshot**.
- Enter the **Name** and take a regular Snapshot
- Once the snapshot is taken, right click the Virtual machine and select **Snapshot** > **Snapshot Manager**
- Select the snapshot and select **Delete All** (Consolidate)

![orphaned VM snapshot](/images/blog/4529216647_ff16dd1354.jpg)

Photo courtesy of [Paul L Dineen](https://www.flickr.com/photos/21983356@N00/4529216647/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

This workaround has two major disadvantages:

1. you need to find the VM with an orphaned snapshot before you can use the workaround
2. the workaround only works half the time

If you prefer an easier way to manage your snapshots, detect orphaned VM snapshots and fix them, our Snapwatcher is the perfect solution for you: [Get Snapwatcher](http://www.snapwatcher.com "Get Snapwatcher")
