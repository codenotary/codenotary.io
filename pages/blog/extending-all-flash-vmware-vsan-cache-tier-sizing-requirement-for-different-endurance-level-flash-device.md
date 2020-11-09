---
title: "Extending All Flash VMware vSAN Cache Tier Sizing Requirement for Different Endurance Level Flash Device"
image: /images/blog/1-9.png
tags: ["Ops", "opvizor"]
date: "2018-09-13"
---

# Extending All Flash vSAN Cache Tier Sizing Requirement for Different Endurance Level Flash Device

We would like to share a new blog post from [Biswapati Bhattacharjee](https://blogs.vmware.com/virtualblocks/author/biswapati_bhattacharjee/) from VMware Virtual Blocks about extending All Flash vSAN cache tier sizing requirement for different endurance level flash device.

Please find the original article from [VMware Virtual Blocks](https://blogs.vmware.com/virtualblocks) with all comments [here](https://blogs.vmware.com/virtualblocks/2018/08/23/extending-all-flash-vsan-cache-tier-sizing-requirement-for-different-endurance-level-flash-device/?src=so_5b8971ef0c241&cid=70134000001CTmC) or scroll down for some more information.

Using our VMware vSAN integration that has already been featured at [yellow-bricks.com](http://www.yellow-bricks.com) you can get great insights of the vSAN performance of one or multiple vSAN enabled cluster. Furthermore, our new histogram dashboards gives you great planning details for vSAN cache requirements.

## Introduction

The flash storage industry evolved through many key changes in the last couple of years. For example, there are now new devices with high performance and endurance with smaller capacity points. At the same time, large capacity devices with lower endurance are becoming available in the enterprise market. With these changes, it requires to provide additional details to our already published all flash cache-tier guideline blog available [here](https://blogs.vmware.com/virtualblocks/2017/01/18/designing-vsan-disk-groups-cache-ratio-revisited/).

In this blog post, I would like to expand on the already published vSAN all flash cache-tier guidelines based on these changes.

To extend the guidance beyond our current blog, I would like to focus on a couple key areas given we now have many cache-tier devices supported by vSAN ecosystem with varying endurance, performance, and capacity.

1. **vSAN All Flash cache and capacity ratio:** There is some confusion today that the 10% vSAN cache to capacity ratio needs to remain the same for an All Flash vSAN. This 10% guideline was meant for hybrid vSAN only. This 10% is a general recommendation could be too much or it may not be enough and should be based on use case, capacity and performance requirements. vSAN all flash caching does not have a % to capacity ratio requirement.
2. **vSAN All Flash cache sizing guidance:** Though there are many possibilities exist, I would like to consider two additional data points for cache-tier sizing requirements when deploying an All Flash vSAN. The data points are 3 DWPD (low endurance devices) and 30 DWPD (very high endurance devices) as caching device. Our current blog guideline is with 10 DWPD endurance point only and the following table shows the details.

![vSAN](/images/blog/1-9.png)

Photo courtesy of [VMware / Biswapati Bhattacharjee](https://blogs.vmware.com/virtualblocks/2018/08/23/extending-all-flash-vsan-cache-tier-sizing-requirement-for-different-endurance-level-flash-device/?src=so_5b8971ef0c241&cid=70134000001CTmC)

 _Fig 1: Cache Tier Sizing Guideline with 10 DWPD_

As you can see there is no capacity link associated with a cache size when designing an All Flash vSAN. The designing guidelines based on different workload write profiles.

Based on this varying endurance, following two tables extrapolate capacity requirement for 30 DWPD and 3 DWPD device endurance.

![vSAN](/images/blog/2-9.png)

Photo courtesy of [VMware / Biswapati Bhattacharjee](https://blogs.vmware.com/virtualblocks/2018/08/23/extending-all-flash-vsan-cache-tier-sizing-requirement-for-different-endurance-level-flash-device/?src=so_5b8971ef0c241&cid=70134000001CTmC)

_Fig 2: Cache Tier Sizing Guideline with 30 DWPD_

![vSAN](/images/blog/3-8.png)

Photo courtesy of [VMware / Biswapati Bhattacharjee](https://blogs.vmware.com/virtualblocks/2018/08/23/extending-all-flash-vsan-cache-tier-sizing-requirement-for-different-endurance-level-flash-device/?src=so_5b8971ef0c241&cid=70134000001CTmC)

 _Fig 3: Cache Tier Sizing Guideline with 3 DWPD_

## Conclusion

The above sizing guidelines are based on varying capacity and endurance only. However, in a customer environment, there could be other variables which may require additional considerations to accommodate specific needs. But in general, this guideline should help using devices of different capacity, endurance and performance for identified workload as a cache-tier device for All Flash vSAN.

vSAN hardware guidance provides details around device performance and endurance class.  You can read the details [here](https://www.vmware.com/resources/compatibility/vsan_profile.html?locale=en). If a device meets the guideline for cache tier device (both performance and endurance) in a certain profile (e.g. AF-4, AF-6, AF-8), you can use it with varying endurance.

Hopefully, this short blog clarifies the difference between cache ratios for Hybrid vs All Flash vSAN cache sizing based on workload and how different endurance point devices like the Intel® Optane™ SSD and others can be consumed for vSAN deployment.

![VMware vSAN histogram](/images/blog/vsan_diskgroups_histogram-1.png)

Don't forget - our histogram for VMware vSAN provide major benefits and great insights when planning Caching.
