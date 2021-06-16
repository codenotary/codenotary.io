---
title: "CNIL Metrics and Logs: Part 16 – Performance in real time for VMware Virtual SAN"
image: /images/blog/1-4.png
tags: ["Ops", "opvizor"]
date: "2016-10-26"
---

Hyper-converged Virtual SAN. A high-performance, cost-effective solution. Many information about Virtual SAN in general, not limited to [DataCore solution on their Homepage](http://info.datacore.com/Hyper-converged-Virtual-SAN?gclid=CjwKEAjw7ZHABRCTr_DV4_ejvgQSJACr-YcwrvVvealBeWrCzMGkVEWS22Ssb5nEuqvIQlg9AtdwghoCi3Dw_wcB). But back to VMware vSAN...

- Versatility - Works with any hypervisor, any application, any server hardware
- Performance - Accelerate performance for latency-sensitive applications using server RAM for high-speed cache
- Scalability - Integrates with external SAN to scale out additional capacity
- Efficiency - Reduce cost and complexity with only 2 servers needed in a highly-available cluster

A huge amount of very useful information and blog links you can find on [Duncan Epping's Page](http://www.yellow-bricks.com/virtual-san/).

[Here](https://www.vmware.com/files/pdf/techpaper/vmware-virtual-san-6.2-performance-with-online-transaction-processing-workloads.pdf) is a performance study from VMware as white paper.

A part of the [latest blog](http://www.yellow-bricks.com/2016/06/01/vsan-everywhere/) on Yellow-Bricks:

> This week I had the pleasure to have a chat with Marc Huppert (VCDX181). Marc works for Computacenter in Germany as a Senior Consultant and Category Leader VMware Solutions. He primarily focuses on datacenter technology. I noticed a tweet from Marc that he was working on a project where they will be implementing a 60 site ROBO deployment. It is one of those use cases that I don’t get to see too often in Europe so I figured I would drop him a note. We had a conversation of about an hour and below is the story around this project, and some of the other projects Marc has worked on. Marc mentioned that he has been involved with VSAN for about 1.5 years now. They at first did intensive testing internally to see what VSAN could do for their customers and looked at the various use cases for their customer base. Quickly they discovered that when combining VSAN with Fusion-IO they ended up with a very powerful combination. Not only extremely reliable (Marc mentioned he has never seen a Fusion-IO card fail), but also an extremely well performing solution. They did comparisons between Fusion-IO and regular SATA connected SSDs and performance literally doubled, not just for reads but also writes was a big difference. One of the other reasons for considering PCIe based flash is to have the maximum number of disk slots available for the capacity tier. It all makes sense to me. Right now for current projects, NVMe based flash by Intel is being explored, and I am very curious to see what Marc’s experience is going to be like in terms of performance, reliability and the operational aspects compared to Fusion-IO.

## Another VMware partner, [Rackspace](https://www.rackspace.com/managed-hosting/vmware?gclid=CjwKEAjw7ZHABRCTr_DV4_ejvgQSJACr-Ycwu8qwRxb2SHOZPpPb8MM-KQ6cqB_DcKIWvdHz6XfU8RoCXAbw_wcB&utm_medium=ppc-gen&utm_source=google-en&utm_campaign=US_DED-FA_G_US_Dedicated_VMware_Private_Cloud_NonBrand_Phrase&utm_term=virtual_san&ef_id=V3UnwwAAAQT0L4qE:20161017153320:s) also have a lot of information regarding VSAN.

> Get the benefits of the cloud without the risk. Your core business isn’t managing infrastructure. Yet so many of your resources go toward purchasing, maintaining and refreshing hardware. You also have to run your on-premises VMware® environment, while maintaining the control and security your business requires. Now you can do it all. You can satisfy the increasing demand for speed and agility from within your business while maintaining the control and security central IT requires.

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze VMware virtual SAN (VMware vSAN) performance metrics. Correlate events and metrics in guest applications and infrastructure with vSphere metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![VMware Virtual SAN](/images/blog/1-4.png)

Some of our VMware virtual SAN integration features are:

- Find Disk I/O bottlenecks
- Report Used Capacity over time and plan future capacity
- Full insights into Datastore Latency and VM Disk IOps
- Get a complete usage and performance overview across multiple vSAN systems
- Correlate vSAN and vSphere Host/VM metrics

![VMware Virtual SAN](/images/blog/2-4.png)

## [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
