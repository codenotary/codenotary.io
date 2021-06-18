---
title: "Solving VMware Tools Outdated or Not Installed"
image: /images/blog/wpid-6f6a837a4509b60dbb7df3f3fff63bae.jpeg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-04-27"
---

Virtualizationsoftware.com about VMware Tools outdated or not installed

David Davis at [http://www.virtualizationsoftware.com/](http://www.virtualizationsoftware.com/solving-vmware-tools-outdated-installed/ "http://www.virtualizationsoftware.com/") published another article about the bad situation of having VMware Tools outdated or not installed at all.

![David Davis](/images/blog/wpid-6f6a837a4509b60dbb7df3f3fff63bae.jpeg)

Photo courtesy of [VMware Tools outdated article by David Davis](http://0.gravatar.com/avatar/6f6a837a4509b60dbb7df3f3fff63bae?s=64&d=http%3A%2F%2F0.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D64&r=G)

Every VMware administrator should be well aware of the negative impact to virtual machines when living with that situation. 

David covers one of the most common issues we also find in many customer environments that we analyze - here is an excerption.

...

VMware tools are installed inside any guest running inside a VMware type 1 or type 2 hypervisor, such as vSphere and Workstation/Fusion.

The most obvious answer to this problem is “well, just update or install the tools then”. If you just had a single virtual machine, you would think that answer is perfect and would work every time. Most of the time, it works fine however, it’s not always that easy. In some cases you might not know how to install the tools (perhaps you have a Linux VM and are more familiar with Windows) or perhaps you have a virtual appliance and you don’t have access to install the tools.

As with many scenarios, updating the VMware tools on a single VM might be simple but in the real world, most companies have hundreds or even thousands of virtual machines – making the solution not as simple. In some cases, even gathering a list of all the virtual machines that have outdated tools or whose tools are not installed can takes considerable time. One more thing – what about a reboot? Some versions of VMware tools require a reboot where others don’t. Reboots = downtime and that will require you to wait to install the tools or advise the affected end users and application owners. So – what’s an admin to do?

## Out of Date VMware Tools – What’s the Impact?

The first question to answer is, what is the impact if you have **VMware tools outdated**? Is there any real impact? Why can’t you just leave the tools out of date? Or why even install the tools at all?

Although the guest operating system can run without them, many VMware features are not available until you install VMware Tools. For example, if you do not have VMware Tools installed in your virtual machine, you cannot interact with the Guest OS to perform a graceful / clean shutdown or restart. This means you can only use the VM power options to perform a hard power off or power on of the virtual machine from the toolbar.

VMware Tools also improve the virtual machine’s storage I/O, graphics performance, and allows the virtual machine to synchronize its clock with that of the host. Virtual machine performance is boosted with VMware Tools by enabling the use of paravirtualized devices such as the VMXNET3 network and paravirtualized SCSI devices. Paravirtualized devices require specialized device drivers, which are provided by VMware Tools.

Finally, reclamation of unused memory from each virtual machine won’t be possible without the VMware Tools being installed, as memory ballooning and transparent page sharing won’t be available. Memory ballooning is a technique by which a vSphere host, when it’s running low on physical RAM, can reclaim RAM from guest virtual machines that may not be using the full complement of RAM currently assigned. Transparent page sharing is a method that allows virtual machines to share memory pages through what is essentially a memory deduplication process. The result of not being able to use such memory management techniques is that your virtual-machine-to-host consolidation ratio will be lower and your return on investment from the virtual infrastructure will be negatively impacted.

If you have the VMware Tools installed but they are out of date, you may lose some functionality depending on how out of date the VMware tools are. In this VMware blog – [Is a VMware Tools Upgrade Required When Upgrading vSphere?](http://www.virtualizationsoftware.com/solving-vmware-tools-outdated-installed/Is%20a%20VMware%20Tools%20Upgrade%20Required%20When%20Upgrading%20vSphere?) – they state that the upgrading of VMware tools for every release of vSphere is -somewhat- optional. However that doesn’t mean that you never need to upgrade your VMware tools.

## How Opvizor Can Help

Recently, Opvizor announced a free edition which can do a [free vSphere health check in minutes.](https://www.opvizor.com/register/) They are calling it the Opvizor “Healthcheck as a Service”, or HaaS.

[![opvizor Dashboard helps to find VMware Tools outdated issues](/images/blog/wpid-opvizor-dashboard.jpg)](http://www.opvizor/com/register)

[](http://www.opvizor/com/register)

[Photo courtesy of](http://www.opvizor/com/register) [opvizor Inc](http://www.virtualizationsoftware.com/wp-content/uploads/2015/04/opvizor-dashboard-300x218@2x.jpg)

Additionally, Opvizor just announced a new tool called [SnapWatcher](http://www.snapwatcher.com/) that allows you to monitor your vSphere snapshots and remove unneeded snapshots. You can try it free and buy it for just $199 thought the [Opvizor Spring promotion](/blog/snapwatcher-enterprise-edition-spring-promo/).
