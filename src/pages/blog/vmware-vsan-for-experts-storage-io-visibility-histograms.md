---
title: "VMware vSAN for experts - storage IO visibility histograms"
image: /images/blog/vsan_diskgroups_stats_histogram.png
tags: ["Ops", "opvizor"]
date: "2018-08-27"
---

We just released an extension a lot of customers and VMware experts were waiting for. Storage histogram views for I/O details block sizes over time. Currently we support [VMware vSAN](https://www.vmware.com/products/vsan.html) (6.6 and higher) to get the I/O details.

Everybody working in the storage field knows, that the efficiency of caching and eventually the whole disk/raid architecture depends on matching the real IO pattern. Unfortunately, most people don´t know the IO request that are handled by the storage system at a certain point in time. Opvizor is going to change that. We just started integrating storage I/O visibility for VMware vSAN, allowing the IT admin to check for block sizes and read/write ratio over a chosen time range.

![VMware vSAN storage histogram](/images/blog/vsan_diskgroups_stats_histogram.png)

Within the Dashboard VMware vSAN: Storage Diskgroup Stats and VMware vSAN: Cache Diskgroup Stats you can find 4 new histogram widgets, showing:

- Read requests by block size
- Write requests by block size
- Read request latency
- Write request latency

![VMware vSAN cache histogram](/images/blog/vsan_diskgroups_histogram.png)

Btw. we´re currently also working on a per VM and per VMDK integration, so you can create a real storage profile of your running systems.

To get the new integration up and running, just patch your appliance with the VMware vSAN extension patch and wait a couple of hours to get a better picture about the IOs handled by your vSAN. [Download patch](https://storage.googleapis.com/opvizor/pa_patch/patch_492_vsan.bin)

If you don´t use Performance Analyzer yet, just start a free trial now and use the same patch to get the vSAN extension going.
