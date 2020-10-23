---
title: "Installing vSphere 6.0 ESXi Hosts nested - install"
tags: ["Ops", "opvizor"]
date: "2015-05-12"
---

## Installing ESXi to the VM

Installing vSphere 6.0 ESXi using the .iso file that contains the **ESXi-Installation** has to be attached to the VM. To attach it the VM has to be powered on. After powering on the virtual machine you can add the .iso using the _VM Summary Tab_\->_VM Hardware_ CD/DVD drive one has to be set to the .iso file using C_onnect to CD/DVD image on a local disk_.

![Installing vSphere 6](/images/blog/wpid-vmhw_esx-300x212.jpg)

Since the system is rebooting frequently when no boot media is found it will restart till the .iso is attached successfully.

When opening the console it should already greet you with the ESXi-6.0.0 –standard Boot Menu.

![Installing vSphere 6.0 ESXi](/images/blog/wpid-esxinstallmenu-300x300.jpg)

The boot menu automatically boots the installer after 10 seconds are count down.

After the installer is started, the first step is to Agree to the EULA.

Then the installer is searching automatically for devices to bring up a window that lists all available storage devices for the installation. Since I only added a single harddisk to the VM, there is not much choice in my case.

![ESXi 6 Installation device](/images/blog/wpid-esxi6_devices.jpg)

Afterwards set the keyboard to your needs - in my case German, you might have guessed.

**Please note:** When you are using a Mac OS X to access virtual machines via the webclient console of the VM and you are having either a German, Turkish, French, Swiss or Austrian keyboard locale on your computer there is a very annoying bug. It makes it nearly impossible to handle systems via console because it is not possible to type important characters like /, ., -, ;, @, $ and many more. For me switching the locale on my Mac to en\_US  as a workaround. Please note also that this bug might transfer from your workstation when accessing the VMware webclient via RDP, i. e. a websession using Gotomeeting or WebEx!

For more information please visit the VMware KB [http://kb.vmware.com/kb/2071245](http://kb.vmware.com/kb/2071245 "http://kb.vmware.com/kb/2071245")

### Setting the root-password 

If you’re using this guide to create you own test-infrastructure, please make sure to save your passwords somewhere (maybe you got a password-safe or something similar.). As it’s unlikely to connect to every entity of this type of infrastructure daily, it’s very likely to forget passwords.

## Point of no return

Now the ESXi 6.0.0 installer is Scanning the system and starting the installation, asking to partition the disk. In my case it is brand new virtual disk and no data is on this disk - so all good. **Especially when you work on a real environment with DAS, SAN or more than the system disks attached, please act very carefully. It might happen that you format your VMFS with the running disks (locking mechanism will get formatted)**

![install ESXi on disk](/images/blog/wpid-esxi6_install.jpg)

When the progress bar hits 100% the Installations is done and the only task left for the installation is to remove the disc (aka .iso file) and agree to reboot afterwards.

![Remove Disc before reboot](/images/blog/wpid-esxi6_removedisk.jpg)

To remove the .iso file just go to the configuration and click the button next to the _CD/DVD drive 1_ and click _Disconnect_.

![Disconnect VM Disc](/images/blog/wpid-esxi6_disconnect_dvd.jpg)

Last step to finish installing vSphere 6.0 ESXi is to head back to the console and hit _Enter_ to reboot the system using the freshly installed ESXi.

[Next Task is the configuration of the ESXi 6.0](https://www.opvizor.com/blog/configuration-of-a-nested-vsphere-6-0-esxi-host/ "Next Task is the configuration of the ESXi 6.0")
