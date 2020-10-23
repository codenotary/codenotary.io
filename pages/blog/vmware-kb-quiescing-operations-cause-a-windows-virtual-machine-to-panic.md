---
title: "VMware KB Quiescing operations cause a Windows virtual machine to panic"
tags: ["Ops", "opvizor"]
date: "2015-06-11"
---

VM Snapshots continue to be a extremly valuable feature but there are some bugs you can run into.

One of the more annoying bugs, if you are affected, is a Windows OS panic when quiescing the file systems due to VM snapshot creation.

The read more about this VMware bug, you can read [VMware KB article](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2115997 "VMware KB article 2115997") 2115997:

![Bug- Quiescing a VM causes Windows to panic](/images/blog/528094873_35d52b3a56.jpg)

Photo courtesy of [Zanastardust](https://www.flickr.com/photos/49503201503@N01/528094873/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

When you attempt to create a snapshot the snapshot operation can fail or the VM panics with the following error:

> A problem has been detected and Windows has been shut down to prevent damage to your computer.If this is the first time you've seen this Stop error screen restart your computer. If this screen appears again, follow these steps:Disable or uninstall any anti-virus, disk defragmentation or backup utilities. Check your hard drive configuration, and check for any updated drivers. Run CHKDSK /F to check for hard drive corruption, and then restart your computer.Technical information:\*\*\* STOP: 0x00000024 (0x00000000001904FB,0xFFFFF88006F62D08,0xFFFFF88006F62560,0xFFFFF880020B0352)\*\*\*      Ntfs.sys - Address FFFFF880020B0352 base at FFFFF88002004000, DateStamp 52e1be8aCollecting data for crash dump ...Initializing disk for crash dump ...Beginning dump of physical memory.Physical memory dump complete.Contact you system administrator or technical support group for further assistance.

This is a known issue affecting VMware vSphere ESXi 5.x and 6.0 and currently, there is no resolution.

To work around this issue perform one of the following:

- Disable snapshot quiescing within your backup solution.
- Do not select **Quiesce guest file system** when taking a snapshot of a virtual machine from the vSphere Client.
- Downgrade the VMware Tools to previous version that is not affected.
