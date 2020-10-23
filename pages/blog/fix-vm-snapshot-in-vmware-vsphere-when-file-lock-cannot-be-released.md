---
title: "Fix VM snapshot in VMware vSphere when file lock cannot be released"
tags: ["Ops", "opvizor"]
date: "2015-03-18"
---

\[row narrowcontent="true" padding="both" paddingtype="small" animation="fadeInUp"\]

# Fix VM snapshot in VMware vSphere when file lock cannot be released

  

Finding VMware snapshots can already be a nasty and difficult task as some of these hidden or just hard to find as the vSphere environment is pretty large. Therefore it's important to have scripts, reports and tools like [Snapwatcher](http://try.opvizor.com/snapwatcher) or [opvizor Health Analyzer](https://www.opvizor.com/register) to get an idea about the current situation in your environment.

That is actually the first step - know about your situation!

But the next step is to delete the Snapshots and one of the meanest situations are locked files that stop you from doing so.#

There are many different kinds of locking mechanism VMware vSphere uses and I want to start our **fix VM snapshot** series with a real tough one.

## Given VM Snapshot situation

  

In this case it doesn´t matter if the VM snapshot is inconsistent or not, the message you receive when running either Snapshot remove or Snapshot consolidate is a short and simple file is locked.

Unfortunately the VM can be "powered on", "powered off" and no locked file can be found. Actually when the customer approached us with that situation we thought of a Snapwatcher bug during beta. But the story will end with a VMware bug, that is absolutely weird but luckily easy to fix. But the investigation is before the fix, so let´s start with that first.

[![fix VMware snapshot - fix VM snapshot](/images/blog/snapwatcher-locked-file.png)](http://try.opvizor.com/snapwatcher)

Like mentioned before the VM is powered off and the file lock message pops up when trying to delete the snapshots. When checking the VM and creating new snapshots, all works well. Strange enough, also a power on works fine. Normally you would expect a locked file message also when starting the VM.

[![VM snapshot consolidation](/images/blog/snapshot-consolidation-300x206.gif "snapshot-consolidation")](https://opvizor.com/wp-content/uploads/snapshot-consolidation.gif "snapshot-consolidation")

When checking the virtual machine log file vmware.log in the home directory of the VM, the following entry can be found:

`2015-03-05T20:08:25.112Z| vcpu-0| I120: AIOGNRC: Failed to open '/vmfs/volumes/0025909bfda0/WinVM/WinVM-flat.vmdk' : Failed to lock the file (40003) (0x2013). 2015-03-05T20:08:25.112Z| vcpu-0| I120: AIOMGR: AIOMgr_OpenWithRetry: Descriptor file '/vmfs/volumes/0025909bfda0/WinVM/WinVM-flat.vmdk' locked (try 0)`

  

When checking the Snapwatcher log that automatically initiates Snapshot deletion and Snapshot Consolidate the following message is found showing that is was not succesful to fix VM snapshot:

`2015-03-05 12:11:59,598 [1] INFO VMSnapshot [(null)] - Attempt to consolidate VM disks... 2015-03-05 12:12:04,057 [1] INFO VMSnapshot [(null)] - Unable to access file since it is locked`

Looking at the typical patterns within the datastore all -flat.vmdk files of the base disks are there and a dozen of -delta.vmdk files showing the different snapshots made. As a backup software was running there are a couple of snapshot files there but not all show up as the base disk is pretending to be locked so many broken or inconsistent snapshot are the result.

## Removal of Snapshots - fix VM snapshot

Given the situation that the VM can be powered on without issues, new snapshots can be created but not deleted, something strange is going on with this virtual machine. Screening the vmware.log doesn´t help either and gives no information why the VM snapshot can´t be fixed. But bugs come typically with weird situations. Weird situations need to be treated with actions that doesn´t make too much sense.

In that case the solution is damn simple, migrate the virtual machine using either cold migration to another datastore or Storage vMotion. Hopefully it´s not your largest virtual machine and let´s keep the fingers crossed you have enough free space on another datastore to move all VMs data. Theoretically it might be enough just to move one of the vmdk files of the virtual machine, but we didn´t checked that so far.

After the successful datastore relocation the snapshots can be easily consilidated and the VM snapshot has just been fixed.

## Conclusion

Definitely a VMware vSphere bug that can end up nasty when you don´t have any space left on a datastore to move the VM to get the file unlocked and fix a VM snapshot.

  
[![opvizor Snapwatcher - Say Goodbye to Broken Snapshots](/images/blog/snapwatcher_2.png)](https://www.opvizor.com/wp-content/uploads/2015/02/snapwatcher_2.png)  
opvizor provides a solution called Snapwatcher that can be downloaded on the opvizor website [here at http://try.opvizor.com/snapwatcher/](http://try.opvizor.com/snapwatcher/)  

**opvizor owns ten different rules for detecting different VM snapshot-related errors and problems.**

## 

[**Sign Up for opvizor**](/register)
