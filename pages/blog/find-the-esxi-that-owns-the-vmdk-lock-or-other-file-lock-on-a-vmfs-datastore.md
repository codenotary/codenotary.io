---
title: "Find the ESXi that owns the VMDK lock or other file lock on a VMFS datastore"
image: /images/blog/wpid-snapwatcher1.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-07-10"
---

Unfortunately from time to time you can end up in a situation where your virtual machine is not reacting anymore on operations like vMotion, power-on or releasing a snapshot.

The cause is very often a locked VMDK file or CBT file (changed block tracking used by backup software) by a different ESXi than the one running your virtual machine and the corresponding process. That can be a leftover from purple screens, SAN connection failures or complete power outage.

Taking the example of powering on the virtual machine, the host the virtual machine is registered on tries to lock the VM files and start the VM runtime. As the locking doesn't work because the file/s are already locked by a ESXi Host (typically the ESXi host the VM used to run before) the operation throws an error.

The same happens with Backups and VM snapshots - a common cause for invalid snapshots detected by our [Health check](https://www.opvizor.com/register "Health check") solutions and even fixable by out [Snapwatcher](http://try.opvizor.com/snapwatcherent "Snapwatcher ") Tool.

[![Locked vMDK file, locked cbt file, vmdk lock owners](/images/blog/wpid-snapwatcher1.png)](http://try.opvizor.com/snapwatcherent)

If you don't use any tools, you need to work your way through the log files and some CLI commands.

## Manual steps to release the VMDK lock

1. find the IP address of the locking host - lock owner
2. find the host locking the file (by IP address)
3. find the locking process and release the file lock

## Further information to detect lock owners and release the VM file lock

There are two great VMware Knowledge Base articles that describe the step by step process, if you want to go the manual way:

[Investigating virtual machine file locks on ESXi/ESX (10051)](http://kb.vmware.com/selfservice/search.do?cmd=displayKC&docType=kc&docTypeID=DT_KB_1_1&externalId=10051 "Investigating virtual machine file locks on ESXi/ESX (10051)")

[Finding the lock owners of a VMDK or file on a VMFS datastore in VMware ESXi 5.5 P05 (2110152)](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2110152 "Finding the lock owners of a VMDK or file on a VMFS datastore in VMware ESXi 5.5 P05 (2110152)")
