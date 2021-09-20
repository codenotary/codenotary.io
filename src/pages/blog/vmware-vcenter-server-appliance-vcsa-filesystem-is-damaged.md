---
title: "VMware vCenter Server Appliance VCSA filesystem is damaged"
image: /images/blog/wpid-vcsa_grub.png
tags: ["Ops", "opvizor"]
date: "2015-10-05"
top: true
---

Although you´ve done as much as you can do (or afford) to avoid a virtual machine crash, it can always happen. Sometimes you´re storage system goes down, sometime your HBA breaks or the fabric in between. Many misconfigurations lead to a non-redundant situation you find out about when it goes down. Therefore you should run an [vSphere Health Analyzer](http://try.opvizor.com/health-analyzer/ "vSphere Health Analyzer") Test to make sure.

If your VMware vCenter Server Appliance crashes and the VCSA filesystem is affected (especially VCSA 6, VMware vSphere 6) , it might happen that the system is not recovering anymore. You end up with a nice console message telling you that the filesystem is corrupt and you can try to recover it manually. You need to know that VCSA 6 is using a LVM (logical volume manager), so for most system administrators with little linux experience it can be pretty hard to troubleshoot.

You can get a better understanding when reading [Cormac Hogan's Post about fsck on VCSA 6.0 and the lvm partitions](http://cormachogan.com/2015/06/03/fsck-of-vcenter-server-appliance-6-0-partitions/ "Cormac Hogan's Post about fsck on VCSA 6.0 and the lvm partitions").

**fsck failed.  Please repair manually and reboot.  The root****file system is currently mounted read-only.  To remount it** **read-write do:**

 bash# mount -n -o remount,rw 

Actually that is not so simple when using VCSA as the shell (bash) is not enabled by default and you don't have a chance to do so without changing the grub boot entry.

![VCSA Grub Entry](/images/blog/wpid-vcsa_grub.png)

Within the grub boot menu you need to press **p** to get into the boot options, using **vmware** as the default password or your own password configured for the root account.

![VCSA grub password](/images/blog/wpid-grub_pw.png)

Select VMware vCenter Server Appliance and hit **e** to edit the grub entry.

![VCSA grub bootmenu](/images/blog/wpid-grub_bootmenu.png)

Select the second entry that starts with kernel and hit **e** again to edit that.

![VCSA Bootmenu edit kernel entry](/images/blog/wpid-grub_bootmenu_edit.png)

Change the line and append **init=/bin/bash** and hit **enter** to enable the bash shell after the OS start.

![VCSA grub boot bash](/images/blog/wpid-grub_enable_bash.png)

Press **b** to boot the changed grub entry

![bash prompt to fix VCSA filesystem](/images/blog/wpid-shell-vcsa.png)

You should see a command prompt to enter 

**mount -n -o remount,rw**

**fsck -f -c -y**

That starts fixing all filesystem errors. After a while you should get some messages about VCSA filesystem issues you need to confirm to fix them. Therefore it always makes sense to create a VM snapshot before starting the filesystem fix.

When all is done, the command **reboot** is all you need and VCSA should start without any issues.

You can read more about VMware vCenter Server Appliance (VCSA) filesystem issues here:

[vCenter Appliance fsck failed](http://www.virtualizationteam.com/server-virtualization/vcenter-appliance-fsck-failed.html "vCenter Appliance fsck failed ") 

[fsck of vCenter Server Appliance 6.0 partitions](http://cormachogan.com/2015/06/03/fsck-of-vcenter-server-appliance-6-0-partitions/ "fsck of vCenter Server Appliance 6.0 partitions")
