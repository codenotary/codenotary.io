---
title: "Speed up VM - what's new in VMware vSphere 6"
image: /images/blog/15231082_c72af53490.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-08-05"
---

VMware released an official technical guide about What's New in VMware vSphere 6 also covering some performance improvements and how to speed up VMs. The good news - many performance improvements happen automatically

You can find the document here: 

[What’s New in the VMware vSphere® 6.0 Platform](https://www.vmware.com/files/pdf/vsphere/VMW-WP-vSPHR-Whats-New-6-0-PLTFRM.pdf "What’s New in the VMware vSphere®  6.0 Platform")

![Firefox at speed](/images/blog/15231082_c72af53490.jpg)

Photo courtesy of [Elsie esq.](https://www.flickr.com/photos/61132483@N00/15231082/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

## NUMA

To give you one example we see very often causing a performance problem in vSphere 5.x - NUMA, simplified the architecture shortening the communication way between CPU and memory. Unfortunately NUMA cannot only speed up VM's it can also slow down massively if the VMs are too large from a resource perspective to be served by one CPU/Memory Node. You can read some amazing articles around NUMA from [Frank Dennemann here](http://frankdenneman.nl/tag/numa/ "Frank Dennemann here").

> vNUMA Enhancements When a vNUMA virtual machine with the hot-add memory option is enabled and memory is hot-added to it, that memory is now allocated equally across all NUMA regions. In previous releases, all new memory was allocated only to region 0. This enhancement ensures that all regions benefit from the increase in RAM, enabling the virtual machine to scale without requiring any downtime.

That is one of the big news in vSphere 6 helping to maintain the NUMA performance improvement even running Monster VMs. If you're still running vSphere 5.x you should [check for NUMA improvements](https://www.opvizor.com/register "check for NUMA improvements").

## Virtual Desktops

Another major improvement to speed up VM running desktop OS comes with the [NVIDIA Grid](http://www.nvidia.com/object/vmware.html "NVIDIA Grid") support:

> Using GRID vGPU technology, the graphics commands of each virtual machine are passed directly to the GPU, without translation by the hypervisor. This enables the GPU hardware to be time sliced, to deliver the ultimate in shared virtualized graphics performance. GRID vGPU offers the most flexibility of any solution, enabling deployment of virtual machines across a wide range of users and graphics applications, including Microsoft PowerPoint slides and YouTube videos, to the most-demanding engineer using intensive 3D CAD software

[![Speed UP VM - NVIDIA Grid support](/images/blog/wpid-vdi-vgpu-nvidia-grid.png)](http://www.nvidia.com/object/vmware.html)

[](http://www.nvidia.com/object/vmware.html)

[Photo courtesy of](http://www.nvidia.com/object/vmware.html) [NVIDIA](http://images.nvidia.com/content/grid/vmware/vdi-vgpu-nvidia-grid.png)

## Virtual Hardware

Last but not least there has been again a big improvement of the supported virtual hardware. Now you can definitely create big monster VMs:

> vSphere 6.0 introduces a new virtual machine compatibility level with several new features such as support for **128 vCPUs** and **4TB of RAM**, hot-add RAM enhancements to vNUMA, WDDM 1.1 GDI acceleration, a USB 3.0 xHCI controller, and several serial and parallel port enhancements
