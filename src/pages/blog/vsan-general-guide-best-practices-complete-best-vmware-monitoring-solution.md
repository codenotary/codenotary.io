---
title: "VSAN General Guide & Best Practices (Complete with the Best VMware Monitoring Solution)"
image: /images/blog/destination-1285851_640.jpg
tags: ["Ops", "opvizor"]
date: "2016-05-09"
---

VMware Virtual SAN, or VSAN, is a storage platform that is hypervisor converged, software defined, and completely integrated with vSphere. It aggregates locally attached disks containing hosts that are part of a vSphere cluster in order to establish a distributed shared storage solution. It allows for super fast provisioning of storage in vCenter, as a part of creating and deploying virtual machines. 

##  **What's New in version 6.2**

![VMware VSAN General Guide](/images/blog/destination-1285851_640.jpg)

_Looking for a guide to get you up Mount VSAN 6.2? Here you go!_

VSAN is the first storage solution that is [completely policy driven](https://www.vmware.com/files/pdf/products/vsan/virtual-san-6.2-design-and-sizing-guide.pdf) and designed exclusively for working with vSphere. 

It makes storage management and provisioning simpler and more streamlined, using VM-level store policies and VMware monitoring, matching requirements with underlying storage resources automatically and dynamically. It makes delivery cheaper and more efficient by automating most of the manual store tasks. It offers two separate options for configuration: 

a hybrid option that utilizes flash devices as well as magnetic disks, or the all-flash option.The hybrid option makes use of server-based flash devices, which include a cache layer to optimize performance. The flash devices are joined by magnetic disks that offer both capacity and consistent data store. The hybrid configuration is able to achieve true enterprise-grade performance on top of a resilient, reliable, stable, and efficient storage platform. The flash-only configuration leverages flash for the cache layer plus the capacity layer. 

## **The VSAN 6.2 Compatibility Guide** 

When it comes to choosing a host model, storage controller, flash drives, and magnetic disks, there is a whole host of choices. VMware has [published a Compatibility Guide (VCG)](https://www.vmware.com/resources/compatibility/search.php?deviceCategory=vsan) that is essential when choosing your hardware components for your VSAN design. The document helps admins design and properly size a VSAN cluster, as well as answering all of the common questions that come up in regards to the number of hosts, how many flash devices, how many magnetic disks, and many configuration questions. When it comes to VMware monitoring, choose a [proven, reliable solution like Snapwatcher](https://mediashower.com/ce2/40967/3/177). 

**Health Services UI** 

VSAN 6.2 Health Services and the Health Services UI are features that provide a whole set of health tools and settings for VSAN. VSAN Health Services UI offers insight into what is causing any of the problems you may be experiencing in VSAN. It makes recommendations based on the issues that are detected, highlighting the problems and helping administrators to find the right knowledge base article in VMware to solve that type of issue or problem. You can find more information about how VSAN Health Services and the Health Services UI work in the [Virtual San Health Services Guide](http://www.vmware.com/files/pdf/products/vsan/VMW-GDL-VSAN-Health-Check.pdf). 

## **Ready Nodes** 

You can build a VSAN cluster in one of two different ways. First, you can build it yourself according to certified components. Or, you can select components from a list of VSAN Ready Nodes. Virtual SAN Ready Nodes is a validated configuration of servers within a hardware form factor that have been tested and certified for VSAN deployment. These are approved and recommended by both the OEM and VMware. Ready Nodes are perfect to use as hyper-converged building blocks within the bigger enterprise-size data centers, where it's important to automate more of the processes and a lot of custom hardware and software is in play. 

## **Best Practices & VMware Monitoring**

![VSAN](/images/blog/best-practice-1078383_640.jpg)

_What are some of the best practices when it comes to your network and using VSAN?_ 

When it comes to [best practices](https://pubs.vmware.com/vsphere-55/index.jsp?topic=%2Fcom.vmware.vsphere.storage.doc%2FGUID-8408319D-CA53-4241-A3E4-70057F70030F.html), VSAN requires that all network interfaces be configured properly, and that all of the hosts in the VSAN cluster be part of a VSAN network, as well as on the same subnet. On every host, it's necessary to configure at least one VSAN interface. You have to do this on all of the hosts within a cluster, whether the hosts are actually contributing to the storage or are not. 

Unfortunately, VSAN doesn't support IPv6.

## **There are also some other best practices you need to follow for VSAN:** 

- You must use a private network, at least 1 Gb. 10 Gb is more preferable.
- Every host must have dedicated at least a single, physical 1 Gb Ethernet NIC to VSAN. Additionally, you can provision a single other physical NIC to serve as a failover.
- You can choose to use vSphere standard switches for each of your host, or you can configure the environment with a vSphere Distributed Switch.
- For each network in which you are using VSAN, you will need to configure a VM kernel port group with the VSAN port activated correctly.
- You will need to utilize the same VSAN Network label for all of the port groups and make sure that the labels are consistent across all of your hosts.
- To achieve the best possible performance, use Jumbo Frames
- Although VSAN does support IP-hash load balancing, it does not guarantee an optimal performance for all configurations. IP-hash is beneficial when VSAN is among its various consumers. Then, IP-hash takes over the load balancing, but if VSAN is the only consumer, you might not even be able to tell any difference. This is particularly true in 1 Gb environments. Say, for instance, that you choose to use four 1 Gb physical adapters together with IP-hash for VSAN. 1 Gb might be all you are able to use.
- Unfortunately, VSAN is not able to support multiple VMkernel adapters within the same subnet for the purpose of load balancing. However, multiple VMkernel adapters on separate networks (like VLAN or another physical fabric), are supported by VSAN. 
- Be sure to connect all of the hosts that are utilizing VSAN within a single L2 network. 

The network needs to have multicast (IGMP snooping) enabled. In the event that the hosts participating in VSAN are spanned across more than one switch or across L3 boundaries, you will have to make sure that the network is properly configured in order to enable multicast connectivity. You will be able to change multicast addresses to be different than the default settings if your network demands it, or if you happen to be running more than one VSAN cluster on the same L2 network. 

To keep up with VMware monitoring news, including VSAN and more, [sign up for our newsletter](https://mediashower.com/ce2/40967/6/177) today.
