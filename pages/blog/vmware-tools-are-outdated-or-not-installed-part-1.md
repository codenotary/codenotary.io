---
title: "VMware Tools Are Outdated or Not Installed (Part 1)"
image: /images/blog/vmtoolsoutdated.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-02-06"
---

The most common issue with a vSphere virtual machine is that the VMware Tools are either not installed or are out of date. The VMware Tools are a suite of utilities intended to enhance the performance of the virtual machine’s guest operating system and improve the ability to manage the virtual machine.

With each new version of vSphere, VMware also updates VMware Tools and, with some version of vSphere, administrators must proactively update Tools in each virtual machine in order to experience the benefits of the new features provided by VMware. As shown in Figure 1, "VMware Tools is out of date on this virtual machine" is a message that is very common in VMware environments in which VMware Tools is not consistently updated.

![Figure 1, VMware Tools outdated](/images/blog/vmtoolsoutdated.png)

## Impact

Although the guest operating system can run without them, many VMware features are not available until you install VMware Tools. For example, if you do not have VMware Tools installed in your virtual machine, you cannot interact with the Guest OS to perform a graceful / clean shutdown or restart. This means you can only use the VM power options to perform a hard power off or power on of the virtual machine from the toolbar.

VMware Tools also improve the virtual machine’s storage I/O, graphics performance, and allows the virtual machine to synchronize its clock with that of the host. Virtual machine performance is boosted with VMware Tools by enabling the use of paravirtualized devices such as the VMXNET3 network and paravirtualized SCSI devices. Paravirtualized devices require specialized device drivers, which are provided by VMware Tools.

Finally, reclamation of unused memory from each virtual machine won’t be possible without the VMware Tools being installed, as memory ballooning and transparent page sharing won’t be available. Memory ballooning is a technique by which a vSphere host, when it’s running low on physical RAM, can reclaim RAM from guest virtual machines that may not be using the full complement of RAM currently assigned. Transparent page sharing is a method that allows virtual machines to share memory pages through what is essentially a memory deduplication process. The result of not being able to use such memory management techniques is that your virtual-machine-to-host consolidation ratio will be lower and your return on investment from the virtual infrastructure will be negatively impacted.

If you have the VMware Tools installed but they are out of date, you will lose some functionality depending on how out of date the VMware tools are.

## Author

[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)

[Continue to Part 2](https://www.opvizor.com/?p=4992)
