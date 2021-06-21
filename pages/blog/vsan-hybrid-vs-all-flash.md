---
title: "vSAN: Hybrid vs. All Flash"
image: /images/blog/1-4.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-07-12"
---

# vSAN: Hybrid vs. All Flash

We would like to continue our vSAN series with [Mayur Parmar's](https://twitter.com/MasteringVmware) very helpful blog posts. Please find the complete article from Mayur [here](http://masteringvmware.com/vsan-hybrid-vs-all-flash/) and scroll down for some more information.

[VMware vSAN](https://www.vmware.com/products/vsan.html) is a software defined storage solution from VMware to eliminate the need of the additional storage boxes using the local server storage. In simple words - vSAN abstracts the local storage of ESXi hosts and makes a pool of it to be used as a shared storage which is very much optimized. So as you are using the local storage you will not need additional storage boxes for the storing files which also helps in lowering the Total Cost of Ownership (TCO).

vSan uses the local server's disk to create a data store. Disk in the server can be of multiple types such as SAS, NL-SAS, SATA, SSD, NVMe etc.

In vSAN you can use 2 different configurations based on your requirements which is Hybrid or All Flash. vSAN uses the Cache Tier and the Capacity Tier. Cache Tier is used for read cache performance while Capacity Tier makes the capacity for storing the data.

![vSAN](/images/blog/1-4.jpg)

Photo courtesy of [tsmith.co](http://masteringvmware.com/vsan-hybrid-vs-all-flash/)

## vSAN Hybrid

As the name suggests it is a Hybrid configuration of disks. vSAN Hybrid consists of 1 SSD for caching and 1 or more HDDs for the Capacity. SSD will be used for the caching which consists of the Read Cache and Write buffer. So 70% of the SSD Drive will be used as a Read Cache for reading the data which will increase the performance while accessing the data and 30% of the SSD Drive will be userd as a Whrite Cache.

This is a quick abstract from Mayur's article, please find [here](http://masteringvmware.com/vsan-hybrid-vs-all-flash/) more.

## vSAN All Flash

As the name suggests it is an All Flash configuration of disks where all the SSDs will be used for the Cache and the Capacity Tier. There will be NO HDDs in this configuration. vSAN All Flash consists of the 1 SSD for the Cache Tier and 1 or more SSDs for the Caoacity Tier. There is no Read Cache available in All Flash configuration as data is directely read from the Capacity Tier which are already SSD so you will get the performance boost.

Cache Disk in All Flash will act as an write buffer only so data is written directly to the Cache Tier and then it will be destraged onto the Capacity Tier. Capacity Tier will consist of all the SSDs available in the ESXi hosts.

This is a quick abstract from Mayur's article, please find [here](http://masteringvmware.com/vsan-hybrid-vs-all-flash/) more.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-2.png)](https://www.opvizor.com/)
