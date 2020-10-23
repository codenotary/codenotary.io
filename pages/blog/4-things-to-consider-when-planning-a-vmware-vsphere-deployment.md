---
title: "4 Things to Consider When Planning a VMware vSphere Deployment"
tags: ["Ops", "opvizor"]
date: "2015-09-21"
---

VMware vSphere is one of the most stable, reliable platforms available for building cloud infrastructures. Are you ready to get started? Great! Just take a few minutes first to consider some important deployment factors. First and foremost is hardware. No, really, you have to get the right hardware.

## **1\. Get the Right Hardware**

**![VMware vSphere Deployment - right hardware](/images/blog/wpid-bigstock-network-engineer-working-in-se-65646097.jpg)**

_Don't assume that just any server, CPU, or other hardware component is compatible with vSphere, because only a few are. Incompatible hardware means some or all of the features won't work, such as Fault Tolerance and Direct Path I/O._

Without the right hardware, vSphere just won't work. At best, there will be a whole lot of really important features that don't work. There is an extremely narrow set of hardware components that are certified to work with vSphere. You have to be sure you have one of the certified:

- Servers
- CPU
- Storage adapters
- Network adapters
- Storage

Bear in mind that the latest VMware vSphere versions are only compatible with 64-bit hardware, so customers still using 32-bit hardware are out of luck. Though the approved hardware components are manufactured by popular makers like Intel and AMD, you can't assume that all Intel and AMD products are certified, because they aren't. 

[Check the Compatibility Guide](http://www.vmware.com/resources/compatibility/search.php?rls=com.microsoft:en-us&ie=UTF-8&oe=UTF-8&startIndex=&startPage=1) before buying or prepare to get your feelings hurt.

## **2\. Get the Right Software Licenses**

Software vendors have started cracking down on software licensing infringements with a vengeance in recent years. Some of [the most aggressive](http://betanews.com/2013/12/17/compliance-audits-increase-as-software-publishers-crack-down-on-licensing/) are the big guys like Microsoft, Oracle, and SAP. IBM and AutoDesk are also getting a bad rep for knocking on doors and demanding software audits. Don't let this simple oversight cost you (and it will: potentially tens of thousands of dollars). Get the software licenses you need and set up [some kind of SAM](https://en.wikipedia.org/wiki/Software_asset_management) to keep yourself out of hot water in the future.

## **3\. Size the Host Correctly**

Each host has to be set up for the appropriate size in order to properly mange the apps that are installed and operated in that environment. You don't have to guess at it, because there are tools to help you determine what size to set up the host in a given scenario for optimal performance (and profits). Use [one of the available tools](http://www.infoworld.com/article/2619497/virtualization/free-vmware-fling-provides-capacity-planning-and-community-benchmarking.html) to determine the right host size in your environment(s).

## **4\. Monitor Your Clients More Than a Few Hours or Days**

_![VMware vSphere Deployment - monitor your clients](/images/blog/wpid-bigstock-Web-Site-Codes-On-Computer-Mon-82795094.jpg)_

_You won't be able to get a good read on each client's metrics during the first day or first few days. Monitor your customers over the course of a whole month to get a clear picture of the average and peak workloads you're dealing with._

Another common deployment mistake is to monitor clients for just a day or less to determine their needs. Average and peak usage can't really be measured unless you [monitor the situation for a full month](http://searchitchannel.techtarget.com/feature/VSphere-requirements-for-hardware-and-deployment). By then, you should have collected adequate metrics to properly address the average and peak workloads of each customer.

A little planning now can save you a lot of trouble, expense, and frustration in the long run. For a near-time monitoring solution to improve your VMware performance and free up as much as 60% of your time, [visit Opvizor today](https://www.opvizor.com/).
