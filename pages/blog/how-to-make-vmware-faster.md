---
title: "How to make VMware faster"
tags: ["Ops", "opvizor"]
date: "2015-07-17"
---

Virtualization is an indispensable part of a modern data center.  Frequently, the degree of virtualization is 90 percent or more.  What formerly operated on a number of servers today runs on a few hosts.  With the high rate of virtualization and the resulting increase in complexity, problems are more difficult to locate.  It is therefore necessary to consider how the infrastructure can be monitored accurately and how potential problem situations can be found to avoid costly errors.  Unfortunately, under certain circumstances, even minor problems can significantly negatively impact the entire infrastructure.

Performance related issues are much harder to detect and to pinpoint as several layers of a highly complex physical and virtual hardware stack is involved.

![how to make VMware faster](/images/blog/7175577368_d2d3a0e4fb.jpg)

Photo courtesy of [Hernan Piñera](https://www.flickr.com/photos/67430875@N03/7175577368/)([CC ShareALike](http://creativecommons.org/licenses/by-sa/3.0/))

## Virtual vs. Physical performance

When people started virtualizing their systems it was all about consolidating many physical boxes into a few physical servers, enabled by virtualization technologies, to run as a virtual machine on top of these.  There was no need providing high performance to the virtual machines as most of the migrated systems were underutilized anyway – sometimes less than 10% of the hardware abilities.

Over the years of gaining more and more trust in virtualization technology but also having much more powerful physical systems people started running systems that had more performance needs.

While there was a performance gap between physical servers and virtual servers of 10% and more in the early days in the meantime this gap is most of the time less than 2%.

Some of the biggest driver were modern cpu and memory architecture, better integrated network cards but most important high performing storage systems ready for the data and communication storm packed servers running hundreds of virtual machines demand.

## Mission-critical applications

As it comes to performance, most mission-critical applications, mainly databases or .email solutions, the expectation is very high to get the **best vm performance** possible as people directly feel the impact. Waiting 1 second more for every click in an application to respond adds up very fast and is a big issue when it comes to huge scale. This was the number one reason why people where hesitating running mission-critical application on virtual environments as there is some performance loss because of the virtualization layer but also important people can screw up the performance easily by deploying the systems in a wrong way. Either too many or just mixing the wrong systems on the same physical platform.

### Learning the behaviour

There are great tools out there that learn over time from the behavior of your infrastructure and support the system administrator to go after strange spikes or abnormal patterns. The issue here is, that these systems need to be trained not to detect false positives continuously but more important they need a symptom to react or recommend. When using a default SCSI controller in your virtual machine, there is really nothing wrong with it.

So the learning solutions don’t trigger an alert as there is nothing bad about it. But is there really nothing bad about it? Well, typically a paravirtualized disk controller would let you gain 5-30% more performance, but it’s not the default controller. Optimizing the virtual hardware gets you very close to the best vm performance you have seen in your environment.

This is a common problem of most solutions out there, they don’t know what application you’re using in the guest and what performance you would need and if you could get that from a different virtual hardware.

Therefore you only solve half the problem, as you get an alert about a potential strange performance behavior compared to normal, but all the recommendations are about performance related configuration and placement. You miss the opportunity of gaining full performance through the whole stack as you don’t change the disk controller.

If you get 80% of the potential physical performance into the guest, you basically tune the 80% but not the 100%!

VMware vSphere provides you all the possibilities but you need to know and configure everything in the right way and there is no built-in auto tune.

## Some tricks how to make VMware faster

1. [keep your VMware Tools updated](https://www.opvizor.com/blog/solving-vmware-tools-outdated-or-not-installed/ "keep your VMware Tools updated")
2. Disconnect or remove all medias like Floppy Drives or CD Drives that are not needed
3. [make sure to avoid CPU and Memory limits](https://www.opvizor.com/vm-memory-limit/ "make sure to avoid CPU and Memory limits")
4. [avoid old VM hardware](https://www.opvizor.com/blog/old-virtual-machine-network-devices-part-2/ "avoid old VM hardware")
5. [watch performance metrics](https://www.opvizor.com/blog/the-good-the-bad-and-the-ugly-about-vm-cpu-ready/ "watch performance metrics")
6. [avoid VM snapshot issues](https://www.opvizor.com/blog/opvizor-handle-vmware-snapshot-issues/ "avoid VM snapshot issues")
7. think about paravirtualized SCSI driver
8. avoid Monster VMs that excess the capabilities of one CPU socket

## Conclusion

There is no simple way of just running an application and your VM performance is going through the roof. Without changing the VM virtual hardware, optimizing the settings the load placement doesn't have the needed effect to achieve your best vm performance.

Start testing some of your vSphere environment for free and learn how to make VMware faster:

[Sign Up for opvizor!](https://www.opvizor.com/register "Sign Up for opvizor!")
