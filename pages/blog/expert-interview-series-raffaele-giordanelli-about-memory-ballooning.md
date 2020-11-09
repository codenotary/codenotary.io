---
title: "Expert Interview Series: Raffaele Giordanelli About Memory Ballooning"
image: /images/blog/Raffaele.jpg
tags: ["Ops", "opvizor"]
date: "2016-01-28"
---

[![Raffaele Giordanelli About Memory Ballooning](/images/blog/Raffaele.jpg)](https://www.linkedin.com/in/giordanelli)

One of the biggest tasks facing system administrators today is finding efficient host memory reclamation techniques to support memory overcommitment, says Raffaele Giordanelli, CEO and CTO of [Eco4Cloud](http://www.eco4cloud.com/).

One way to do this is through ballooning.

"Virtual memory ballooning is a RAM memory reclamation technique used by a ESX hypervisor to allow the physical host system to retrieve unused memory from certain guest VMs and share it with others," he says.

Raffaele recently checked in with us to share more of his expert insight on managing memory and ballooning. Here's what he had to say:

## What are the most common frustrations for VMware administrators related to managing memory?

RAM memory is the bottleneck resource in a virtualized environment, mainly because of the use of overcommitment. I think the main frustration related to its management is the plenty of outright wrong requirements published by software vendors.

Wrong assignments force system administrators to assign too many resources - RAM memory above all - which leads to huge resources waste. In the case of CPU, it can also lead to performance decrease due to high latency (CPU ready time).

## How can administrators manage memory more efficiently?

At Eco4Cloud we built an extensive software suite to automate several aspects of virtualized IT administration and increase performance. For example, with Eco4cloud Smart Ballooning, based on VMware memory reclamation techniques, unused memory of certain VMs can be released to ESXi and can redistributed. With VMware Ballooning, VMs are able to release memory when physical host reaches a hard memory usage threshold (typically 94 percent). On the other hand, with Smart Ballooning, you can reclaim memory continuously, recovering up to 15 percent of RAM memory from each VM.

## What are the advantages of ballooning?

Memory ballooning allows the total amount of RAM required by guest VMs to exceed the amount of physical RAM available on the host in stressful situations. When the host system runs low on physical RAM resources, memory ballooning reclaims it from VMs no longer using it.

## What are the potential disadvantages?

Ballooning can negatively affect the performance of the guest Operating System because it is a heavily CPU-intensive process, as it monitors all the RAM memory of a host consuming too much memory. It potentially affects system stability, as ballooning can remove large amounts of memory from the guest operating system. So its usage must be well thought.

## How should VMware administrators be using ballooning?

System administrators need to know what kind of applications run in the virtual machines, and disable Memory Ballooning selectively on the virtual machines running applications that can potentially crash if the ESX host removes memory pages through ballooning.

## What do you think are the most common misconceptions among administrators about ballooning?

Ballooning without supervision can negatively affect the performance of the guest, which in a production environment is a dangerous behavior.

Connect with Raffaele on [LinkedIn](https://www.linkedin.com/in/giordanelli).

[Sign up for our newsletter.](http://opvizor.us6.list-manage.com/subscribe?u=5e67b89e18341af0e8844b002&id=1e918cd24e)

[![Raffaele Giordanelli About Memory Ballooning](/images/blog/Raffaele.jpg)](https://www.linkedin.com/in/giordanelli)
