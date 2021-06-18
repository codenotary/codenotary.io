---
title: "Old Virtual Machine Network Devices - low VMware performance - Part 1"
image: /images/blog/oldnic1.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-02-10"
---

Network performance in many vSphere virtual machines is typically less than what it otherwise could be as, in most cases, virtual network devices are not kept up-to-date as they should be. For example, if your virtual machine was created with a vSphere flexible NIC and you later upgrade the virtual machine hardware as new versions of vSphere are released, you could unknowingly end up with that virtual machine being subjected to using a virtual NIC that operates at a measly 10Mbps.

No matter your situation, your network performance — which ultimately impacts application performance — could be greatly improved by using a new virtual network device and driver.

## Impact

By unknowingly using outdated virtual network devices, you could experience unexpected and unexplained poor application performance. This **poor VMware performance for network traffic** is caused by inefficiencies in the virtual network adapter in use causing a higher number of IRQ requests than needed. This is especially problematic for virtual machines with applications that create high network load and packet generation such as virtual file servers, firewalls, and transaction processing servers. Not only will end users complain about poor application performance (due to poor VMware performance) and the inability to do their job, administrators may be confounded as to why the problem exists at all. ![old VMware NIC - vmxnet2 - can cause bad VMware performance](/images/blog/oldnic1.png)

## Ease of Detecting

To detect old virtual network devices, you can manually verify the virtual network adapter configuration on each virtual machine by clicking on the virtual machine settings and then expanding the virtual network adapter to verify the version (see Figure 8). VMware recommends the VMXNET3 virtual network adapter type for optimal VMware performance. If you have a large number of virtual machines this can become unwieldy. Instead, an automated tool that can detect these types of issues is needed in medium and large virtual environments.

## Author

[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)
