---
title: "VMware vSphere Persistent Memory Performance – Must Have PDF Download"
image: /images/blog/persistent-memory-720x357.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-08-22"
---

# VMware vSphere Persistent Memory Performance – Must Have PDF Download

[Vladen Seget](https://www.vladan.fr/author/vladan/) posted an intersting blog about a must have PDF Download from VMware vSphere.

Please find [here](https://www.vladan.fr/vmware-vsphere-persistent-memory-performance-pdf-download/) Vladen's post with all comments. Thanks Vladen and go ahead! You can also find a lot other interesting articles from Vladen, just follow the link and scroll down to [More from ESX Virtualization](https://www.vladan.fr/vmware-vsphere-persistent-memory-performance-pdf-download/).

VMware vSphere Persistent memory (PMEM) has been announced with [vSphere 6.7](https://www.vladan.fr/vsphere-6-7/), but the feature only works with the latest hardware from selected vendors. With supported hardware modules, customers can use this very fast storage, as a new storage tier for enterprise applications. vSphere Persistent Memory Performance is the topic of today’s post.

vSphere persistent memory works only with some hardware support, but how actually the underlying piece of hardware looks like? Our longtime readers remember perhaps [Diablo Technologies](https://www.vladan.fr/ssd-storage-closer-to-cpu-thats-memory-channel-storage-by-diablo-technologies/) and our detailed write-up from TFD. They presented this technology already quite a few years back, before completely disappearing from the marketplace.

Persistent memory is an amazing technology that multiplies the storage performances of servers. It was developed as RAM module that retains its content (across reboots too) and vSphere supports Two different modes of access to those modules. As vPMEM disk (exposed to a VM as datastore) or as vPMEM (direct and uninterrupted access to the NVDIMM hardware).

To sum Persistent memory features:

- DRAM-like latency and bandwidth
- Regular load/store CPU instructions
- Paged/mapped by operating system just like DRAM
- Data is persistent across reboots

## Persistent memory and vSphere 6.7?

Here is an overview.

Quote:

> vSphere can carve out a piece of the local persistent memory in a machine and present it to a VM as a local disk. This disk will be able to provide ultra-fast local storage without any lift-n-shift of workloads. In this mode, no guest OS change or application change is required to take advantage of the fast PMEM hardware. Virtual disks of a VM can be live migrated from regular storage (e.g. SAN, vSAN, NFS) to PMEM based disk using storage vMotion.

VMware is continuously working with a broad ecosystem including hardware vendors, OEMS and ISVs to develop and support PMEM. vSphere has been enabled to manage and expose the persistent memory feature to VMs. There are different ways in which one can leverage the PMEM feature in a virtualized environment

You can also expose persistent memory directly to the VMs.

![Memory Performance](/images/blog/persistent-memory-720x357.jpg)

Photo courtesy of [Vladan Seget](https://www.vladan.fr/vmware-vsphere-persistent-memory-performance-pdf-download/)

Quote:

> vSphere can also slice a piece of the local persistent memory in a server and present it to a VM as a virtual NVDIMM. This is a new type of virtual device that exposes a byte addressable persistent memory to the VM. Virtual NVDIMM is compatible with latest Guest Operating Systems which support persistent memory such as Windows 2016, RedHat Enterprise Linux 7.4, etc. But, applications need not change and can still use legacy (block based) file interfaces like read, write, mmap.

## vSphere Persistent Memory Performance

VMware has released recently a new PDF where you’ll see the actual performance and one of the conclusions is that it’s much faster then NVMe SSD storage. vSphere Persistent Memory Performance is tightened to a hardware where the hardware has to have support for those NVDIMM modules itself.

The hardware module from Diablo Technologies looked like this:

![Memory Performance](/images/blog/diablo-technologies-590x249.png)

Photo courtesy of [Vladan Seget](https://www.vladan.fr/vmware-vsphere-persistent-memory-performance-pdf-download/)

VMware vSphere Persistent Memory Performance PDF details the setup, the lab gear, the hardware. But also the software used, the tools and the workloads which were used during the testing. It’s a definitely a must have PDF.

Quote:

> vSphere PMEM gives up to 8x throughput and improvement in micro-benchmarks and up to 35% improvement in Tier-1 workloads compared to NVMe SSD.

Here is a direct link to the whitepaper: VMware [vSphere Persistent Memory Performance PDF](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/performance/pmem-vsphere67-perf.pdf).

### Thanks [Vladen](https://www.vladan.fr/author/vladan/) and keep going!

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-8.png)](https://www.opvizor.com/)
