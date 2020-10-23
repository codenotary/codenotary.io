---
title: "VCSA 6.5 reset root password"
tags: ["Ops", "opvizor"]
date: "2017-10-12"
---

It's always a very annoying situation when you can't login into a system anymore because you either don't know the root password anymore or the system is not able to log you in. The latter can happen if the root mountpoint of the VCSA 6.5 appliance filled up.

As VCSA ([vCenter Server Appliance](https://my.vmware.com/web/vmware/details?productId=614&downloadGroup=VC650)) 6.5 is build on top of Photon OS, you can't use the same standard procedure you know from Debian, Ubuntu or RedHat. But relax, it's very simple to reset the root password or clean up a filled up root partition.

First thing to do is to restart your vCenter appliance and wait for the Photon OS Splash screen during boot. 

![VCSA Splash Screen reset root password](/images/blog/splash.png)

Hit the letter **e** to enter the boot menu.

Then change to the GNU GRUB boot menu editor and hit enter.

![VCSA Grub menu](/images/blog/vcsa-grub.png)

Next is to add the following string behind the line that starts with **linux**: **rw init=/bin/bash**

![boot line to vcsa root reset password](/images/blog/vcsa-grub2.png)

Hit the **F10** function key to boot the changed entry.

## Clean up the root partition

In many cases you should check the root partition usage, using the **df -h** command. Very often the log files grew large and filled up your partition. One well known guy is the audit.log in /var/log/audit. So type **ls -sh /var/log/audit** to check the file size and **rm /var/log/audit/\*.lo**g to clean it up.

## Reset the root password

If you're sure that you have to reset the root password, please follow these steps:

**passwd** 

then enter a strong password twice and remember it.

**umount /**

**reboot -f**

It is important to add the -f behind the reboot.
