---
title: "vSAN: What is VMware vSAN?"
image: /images/blog/1-3.jpg
tags: ["Ops", "opvizor"]
date: "2018-07-03"
---

Welcome to our vSAN series! 

[Mayur Parmar](https://twitter.com/MasteringVmware) posted interesting articles about VMware vSAN and we would like to share some of the information.

Please scroll down for the first article and find [here](http://masteringvmware.com/vsan-what-is-vmware-vsan/) the original and complete article from [Mayur](https://twitter.com/MasteringVmware).

## What is vSAN?

VMware vSAN is a software defined storage solution from VMware to eliminate the need of the additional storage boxes using the local server storage. In simple words - vSAN abstracts the local storage of ESXi hosts and makes a pool of it to be used as a shared storage which is very much optimized. So as you are using the local storage you will not need an additional storage box for the storing files which also helps in lowering the Total Cost of Ownership (TCO).

vSAN is a very easy to use solution. With a few clicks you can create and configure the storage pool. vSAN also provides the policies referred to as SPBM (Storage Policy Based Management) which can be applied to a single VM or a single sidk based on the requirements.

There are many server vendors which provides the vSAN ready nodes optimized and VMware certified. So you can easily chosse from your preferred vendor which solution you like to use.

## vSAN architecture

![vSAN Architecture](/images/blog/1-3.jpg)

Photo courtesy of [VMware](https://www.vmware.com/products/vsan.html)

As you can see in the above image of vSAN Architecture you will easily understand what is vSAN and how it works.

## Key Features of vSAN

- Software defined
- Integrated with vSphere
- Simple
- Flexible
- Storage policies
- Deduplication & Compression
- Encryption
- Erasure coding
- All Flash or Hybrid

## System Requirements

**Hardware Host**

- 1 GB NIC; 10 GB NIC recommended
- SATA/SAS HBA or RAID controller
- At least one flash caching device and one persistent storage disk (flash or HDD) for each capacity-contributing node

**Cluster Size**

- Min. 2 hosts - Max. 64 hosts

**Software**

- VMware vSphere 6.5 EP02 (any edition)
- VMware vSphere with Operations Management 6.1 (any edition)
- VMware vCloud Suite 6.0 (any edition updated with 6.5)
- VMware vCenter Server 6.5

Please find [here](http://masteringvmware.com/vsan-what-is-vmware-vsan/) [Mayur's](https://twitter.com/MasteringVmware) complete article for more information about vSAN.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-1.png)](https://www.opvizor.com/)
