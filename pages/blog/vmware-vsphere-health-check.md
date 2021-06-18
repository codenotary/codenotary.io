---
title: "VMware vSphere Health check"
image: /images/blog/wpid-health-service.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-06-23"
---

Why do so many companies IT strategy relies on VMware vSphere for their datacenter infrastructure? Because vSphere has proven for more than a decade that it is stable, very reliable, pretty secure and delivers the underlying hardware performance to the virtual machines with minimized overhead.

Some people even forget that VMware vSphere is still man-made software with bugs, flaws and many ways to get misconfigured. Last but not least it's extremly complex as server as well as desktop virtualization aggregates multiple hardware layer for a dense setup of virtual machine. This periphery doesn't end with the physical server, you need to take network, storage, operating systems, applications and many more things into account.

While bugs mostly needs to be fixed by the vendor itself, especially when there is no workaround, misconfigurations happen because of the complexity, daily changes of the environment and lack of knowledge.

Of course there are many real experts and knowledgeable people around with years of experience, but there is no way of being flawless or having knowledge gaps.

One major step towards a healthy environment is always a well made documentation. Having more people arguing about the optimal architecture helps a lot and you should consider doing external health checks frequently.

Why external? It's always a good idea to have somebody checking the environment that is not daily involved in the architecture or operations.

## A good health check

The most important thing of a on site health check is definitely a short introduction session about your goals as a customer and provider of the vSphere environment. If your goal is to optimize performance stick to it, if it is to find wasted resources focus on it, if you want to scale out by 500 VMs, make that the top outcome of the health check. Checking too many things at once makes the outcome chaotic and very often you end up with so many tasks for the system administrator that he's more than happy not to see the consultant too often.

Always keep in mind, a health check doesn't make your environment better, if you don't work on fixing the findings asap. If you feel that too many things need to get fixed, you can hire a consultant to support you.

### ESXi Hosts and VMs

IMHO a real good VMware vSphere health check consists of a complete check of your ESXi Hosts and Virtual Machines, keeping in mind what the task of the VM is, i. e. Oracle or MS SQL. It doesn't really help to examine 1 or 2 hosts as an example and assume that all other hosts are the same. Misconfigured VMs, resource pools used in the wrong way and unbalanced NUMA configurations need to be checked.

### HCL

A check for the [HCL](http://www.vmware.com/go/hcl "HCL ") (Hardware Compatibility List) and if all used server, storage, network hardware is really still supported and the required firmware versions in place. 

### Storage and Network

Since most of the cool virtualization features like vMotion, Storage vMotion, High Availability or DRS need a properly setup network configuration and a centralized storage there is no way of leaving these things out.

From VMware perspective LAN network speed settings, redundant uplinks, correct end-to-end Jumbo Frame configuration, Etherchannel, iSCSI configuration or correct redundant multipathing are only some of them.

Network and Storage administrators should be asked about the correct setup of Disk groups, volume settings, VLAN settings and many more.

### Backup

Is your backup running fine, what is the backup plan, is there a regularly test of a restore? If these questions are not asked during a on site health check - better doubt the competency of the 'expert'.

### DR

Same for Desaster Recovery, so many times the DR Site was not completely covering all the WAN connections for the different branches. Has there ever been a test made? how long ago?

We see that very often: money was spent for a great DR site with cool hardware and software but the details were missing. A real DR situation would end up in the survival of 80% of the environment - unfortunately the most important branch is not one of these.

## How often should I consider to health check VMware vSphere?

Honestly, the question should be, how often are changes in your vSphere environment. I would bet every day. Actually a single migration or a single large new VM can already change the health status. And of course you're working and improving the environment and the configuration - do you really wanna get a feedback once a year or every day?

From a budget perspective most companies do a health check on site every 6 or 12 month, some wait even longer. 

A continuous health check would be best for sure, so keep in mind, that you can even do an hourly VMware vSphere health check using our [Health Analyzer](https://www.opvizor.com/register "Health Analyzer") for little costs.

Adding a real on site paid Health check is still a good idea, but you can do it 1 day instead of 3 or you can have the consultant already checking your Opvizor results before getting in your environment.

## Documentation and Outcome

Very important are reports and documentation that clearly points out the various misconfigurations, the missing redundancy and the potential risk taken if not fixed.

There should be a clear catalog of tasks, their severity and how to solve these or what the next steps are.

## Typical next steps

Covering the next steps, as written earlier, you can save the money spent for a VMware vSphere health check or any other health check if you don't agree and commit to next steps in a timely fashion. Think about it as a visit to the doctor, just knowing that you need to reduce cholesterol but actually not doing it, doesn't make you feel better, right? 

Actually it would have been better not to visit the doctor as you wasted time, money and now you're in bad mood.

So define and do the next steps to get a healthier VMware and make your VMs happy ;-)

Example outcome of Opvizor Health Analyzer

At Opvizor we spent a great time in making sure Health Analyzer detects most of the autodetectable issue as misconfigurations, wasted resources and performance bottlenecks, show you the solution and track your effort. Actually it's fun getting from a little messy environment to one somebody can be proud of. :-) 

[![VMware vSphere health check - Health Service Report](/images/blog/wpid-health-service.png)](https://www.opvizor.com/register)

When you start using Opvizor, please check the Health Service report and you directly get an idea how we work and how we guide you through the optimizing process.

[![Health check VMware vSphere](/images/blog/wpid-health-service2.png)](https://www.opvizor.com/register)

Of course you can also check for inconsistent Snapshots, Wasted resources or your vSphere security level.

## Summary

There is no question in our opinion to spare regular health checks, but we also believe it's impossible to maintain a perfect VMware infrastructure without tools. No human has the always updated knowledge, finds everything without tools and tells you the solution. It's just not happening and therefore there is also no reason to be frustrated when there are many problematic findings in the beginning - you solve them over time, and we help you with that!
