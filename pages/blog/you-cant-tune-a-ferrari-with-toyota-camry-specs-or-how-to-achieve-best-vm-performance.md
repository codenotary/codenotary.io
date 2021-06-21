---
title: "You can't tune a Ferrari with Toyota Camry specs or how to achieve best VM Performance"
image: /images/blog/wpid-foundation_performance-1024x570.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-18"
---

Virtualization is an indispensable part of a modern data center.  Frequently, the degree of virtualization is 90 percent or more.  What formerly operated on a number of servers today runs on a few hosts.  With the high rate of virtualization and the resulting increase in complexity, problems are more difficult to locate.  It is therefore necessary to consider how the infrastructure can be monitored accurately and how potential problem situations can be found to avoid costly errors.  Unfortunately, under certain circumstances, even minor problems can significantly negatively impact the entire infrastructure.

Performance related issues are much harder to detect and to pinpoint as several layers of a highly complex physical and virtual hardware stack is involved.

## Virtual vs. Physical performance

When people started virtualizing their systems it was all about consolidating many physical boxes into a few physical servers, enabled by virtualization technologies, to run as a virtual machine on top of these.  There was no need providing high performance to the virtual machines as most of the migrated systems were underutilized anyway – sometimes less than 10% of the hardware abilities.

Over the years of gaining more and more trust in virtualization technology but also having much more powerful physical systems people started running systems that had more performance needs.

While there was a performance gap between physical servers and virtual servers of 10% and more in the early days in the meantime this gap is most of the time less than 2%.

Some of the biggest driver were modern cpu and memory architecture, better integrated network cards but most important high performing storage systems ready for the data and communication storm packed servers running hundreds of virtual machines demand.

### Mission-critical applications

As it comes to performance, most mission-critical applications, mainly databases or .email solutions, the expectation is very high to get the **best vm performance** possible as people directly feel the impact. Waiting 1 second more for every click in an application to respond adds up very fast and is a big issue when it comes to huge scale. This was the number one reason why people where hesitating running mission-critical application on virtual environments as there is some performance loss because of the virtualization layer but also important people can screw up the performance easily by deploying the systems in a wrong way. Either too many or just mixing the wrong systems on the same physical platform.

## Learning the behaviour

There are great tools out there that learn over time from the behavior of your infrastructure and support the system administrator to go after strange spikes or abnormal patterns. The issue here is, that these systems need to be trained not to detect false positives continuously but more important they need a symptom to react or recommend. When using a default SCSI controller in your virtual machine, there is really nothing wrong with it.

So the learning solutions don’t trigger an alert as there is nothing bad about it. But is there really nothing bad about it? Well, typically a paravirtualized disk controller would let you gain 5-30% more performance, but it’s not the default controller. Optimizing the virtual hardware gets you very close to the best vm performance you have seen in your environment.

![best vm performance](/images/blog/wpid-foundation_performance-1024x570.png)

This is a common problem of most solutions out there, they don’t know what application you’re using in the guest and what performance you would need and if you could get that from a different virtual hardware.

Therefore you only solve half the problem, as you get an alert about a potential strange performance behavior compared to normal, but all the recommendations are about performance related configuration and placement. You miss the opportunity of gaining full performance through the whole stack as you don’t change the disk controller.

If you get 80% of the potential physical performance into the guest, you basically tune the 80% but not the 100%!

There is a nice analogy to that. 

Think about tuning a Ferrari with Toyota Camry specs and other tools.

VMware vSphere provides you all the possibilities to run a Ferrari style VM but you need to know and configure everything in the right way and there is no built-in auto tune.

### Auto-Tuning

Speaking of auto-tuning, you can find amazing solutions to auto-tune your application within the guest or the virtual infrastructure that automatically change small misconfigurations or place the systems in a most optimal way based on the common behavior.

But you definitely don’t want to have product automatically change configurations that need a restart, downtime or can even result in a MS Windows bluescreen or linux kernel panic when not done correctly.

Therefore the optimization basically stops at the Ferrari on the potential country lane. The system administrator is responsible to tune the full stack.

It’s like diet pills vs. sport, everybody loves the idea of loosing weight just by eating some pills but without the burden of sport and physical activities. Unfortunately none of the pills work for a long time and when you don’t use them anymore you end up with more weight than ever before.

Everybody tends to like the idea of the fully automated self-healing datacenter where you just get reports and care about future architecture. Unfortunately there is more marketing than real life involved.

## Conclusion

There is no simple way of just running an application and your VM performance is going through the roof. Without changing the VM virtual hardware, optimizing the settings the load placement doesn't have the needed effect to achieve your best vm performance.

Stay tuned for the next article about the recommended performance settings for a VM. In the meantime, you can start testing parts of your vSphere environment for free:

[Sign Up for opvizor!](https://www.opvizor.com/register "Sign Up for opvizor!")
