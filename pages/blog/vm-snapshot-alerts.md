---
title: "VM Snapshot Alerts"
image: /images/blog/snapwatcher.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-06-22"
---

I can't get more popular in virtualization than virtual machine snapshots. 

No patch or update without the create snapshot functions that gave the administrator a new way of protecting the systems from broken patch installations or configuration modifications. If something goes wrong, you can simply use the **[VM snapshot](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1015180)** to return to the previous status, making the problem a thing of the past and enabling you to try again.  Nearly all backup products that specialize in the usage of VMware support use snapshots automatically.

But, snapshots have their drawbacks, as they use capacities on the datastore in addition to the basic hard drive files. A so called Delta-file can grow to be as large as the data file, meaning a 40 GB basic virtual hard drive can create a Delta file amounting to another 40 GB per snapshot. Depending on the free drive space, this may quickly lead to space shortages on the datastore if snapshots are kept for a long period of time or very extensive modifications are conducted on the data (e.g. database upgrades) during the existence of snapshots. Therefore, you should consistently monitor snapshots for size, age, and growth rate.

So it would be great to get automatic VM Snapshot Alerts and visual warnings when too many snapshots are there or they grow too big.

[![Snapwatcher](/images/blog/snapwatcher.png)](http://try.opvizor.com/snapwatcher)

[Snapwatcher](http://try.opvizor.com/snapwatcher) can definitely help with detecting and fixing snapshots and Zombie snapshots, but it's not a service and can't alert on Snapshot growth or count. That is a part Performance Analyzer can do easy (as well as tons of other things).

[![Monitor VMware Snapshots](/images/blog/pa_snapshots_alerts_sm-1.png)](http://try.opvizor.com/perfanalyzer)

First however, let us talk about the basic topics, what exactly a VM snapshot is and how it grows, in order to be prepared for error elimination later on.

## Quick Intro to a VM snapshot

When you create a snapshot on a virtual machine, a certain point in time is recorded, meaning as of the time of the snapshot, the original files of the VM remain as they are, and all modifications are recorded in new files. This may take place during ongoing operation of the virtual machines. It is also possible to merge the current data with the data of the snapshot, which also does not cause downtime. Only if you want to delete the data accumulated since the snapshot, the virtual machine is stopped, reset to the old status, and activated again.

Theoretically you can create a large number number of VM snapshots, however, this is hardly beneficial due to the lacking transparency in snapshot administration and the elaborate management.

As soon as a snapshot is created, the newly produced Delta files grow dynamically with the activity in the guest, and every modification on the hard drive thus leads to an increase of the Delta-hard drive file. This relates to every modification, from copying a file via secure formatting of the hard drive with zeros all the way to deleting files. The drive space need is never reduced. However, a Delta file can never become larger than its original file, as all memory blocks were copied 1:1. If the same block is overwritten a hundred times, this does not change the size of the Delta file. As soon as a new block is written, the Delta file grows along with it in steps of at least 15 MB.

Thus it is important to understand that after creating the snapshot, the additional memory requirement may be doubled at most, but this is applicable to every snapshot; meaning if the Delta file is 5 GB in size after the first snapshot and a second snapshot is created, the Delta files add up on the datastore. This is why you need to watch the number of snapshots as well as their size.

## Calculation of Snapshot space

By the way, snapshots are almost always used by backup products to secure active virtual machines from the outside (not via agent in the guest, but VCB). This is due to the fact that the hard drive files of a VM have exclusive read/write access through the VMkernel until a VM snapshot is created. At this point in time, the original hard drive files are readable, and the last Delta file has exclusive write/read access through the VMkernel. The table illustrates the technical process of a snapshot.

![VM snapshot growth calculation](/images/blog/snapshotcalc.png)

## How to monitor Snapshots?

If you want to see your environment instead of the following screenshots, just start your free 30 day Performance Analyzer trial.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-5.png)](http://try.opvizor.com/perfanalyzer)

Of course you can use several scripts or tools to monitor Snapshots while running them manually, but it would be much better to see the behavior over time and monitor also the snapshot growth.

[![VM Snapshot Dashboard](/images/blog/pa_snapshots_alerts_sm.png)](http://try.opvizor.com/perfanalyzer)

Performance Analyzer is capable of exactly that using the Snapshot dashboard.

Using the different charts, you can check the Snapshot size over the selected period of time (up to 5 year history, if you like using the disk space for that data :)).

![Check Snapshot size](/images/blog/snap_size.png)

That is especially helpful, if some of your customers tend to forget snapshots.

Also Snapshot file counts per virtual machine can be very interesting (btw. this is an upcoming feature of Performance Analyzer).

![VMs with most Snapshots](/images/blog/snap_count.png)

## How to get alerted on Snapshot space or Snapshot count?

Nevertheless, watching VM snapshot over time is ok, but I want to get VM Snapshot alerts when some threshold exceeds.

![VM Snapshot Alerts](/images/blog/alerts.png)

Luckily, Performance Analyzer can alert on these data in a very simple way. Just add alerting widgets to our dashboard (or we can do that for you) and you are done.

To get a notification additionally to the visual alert, just configure the notification channel:

![Notification channel](/images/blog/notification.png)

and configure the alert target:

![Notification Alert target](/images/blog/notification2.png)

That's it! If you did not start your Performance Analyzer trial yet - NOW IS A GOOD TIME

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-4.png)](http://try.opvizor.com/perfanalyzer)
