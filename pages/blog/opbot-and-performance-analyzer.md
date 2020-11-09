---
title: "OpBot and Performance Analyzer"
image: /images/blog/opBot-150x143.png
tags: ["Ops", "opvizor"]
date: "2016-12-13"
---

OpBot is the great new user interface to operate with VMware vSphere from any place and any device! It helps you to check on simple things like the power state or the memory configuration, but also to troubleshoot remotely. Especially the combination of our Performance Analyzer product and the OpBot product makes it extremely versatile and powerful.

First let's check out how that works:

1. You import OpBot and Performance Analyzer in your environment as virtual appliances
2. Configure Performance Analyzer to connect to VMware vSphere to gather data and use the preconfigured dashboards to check for VM, Datastore, ESXi or other misconfiguration, performance issues or storage bottlenecks
3. Configure OpBot to connect to VMware vSphere to get read only access to common VM or Host information like resource consumption, snapshots or events
4. Configure OpBot to connect to Performance Analyzer to receive the existing charts in your chat. We help you to set it up within minutes
5. Use OpBot from anywhere to check for bottlenecks, performance issues or just statistical information

In this blog post, we want to present some very typical routine tasks and how our products can support you to become highly efficient. 

Our products are the result of several decades of combined VMware vSphere design and operation experience. Dennis Zimmer, the CEO of Opvizor is a renowned VMware expert, 8 times VMware vExpert and has written 10 books and countless articles around virtualization. Our day to day contact and communication with our customers how to make their lives easier are the driving force to develop and publish products like OpBot.

## OpBot says Hi!

![OpBot](/images/blog/opBot-150x143.png)

## Let's start with a normal situation running VMware

- Call from End user: Hey Admin, I had some trouble to connect to my Photon Container over the last days. Any idea what's going on?
- Admin: Sure thing, You know the name of the system?
- End User: Something with Photon in the name and we typically use an underscore. And, currently the system is reachable.
- Admin: OK, let me get back to you / I need to look into it

As the admin is currently not in his office, opening a vSphere Web client would take some time. So let's use the always on OpBot!

### Check for the Photon virtual machine

**I need to find the VM that start with Photon\_ and is active**

_vm Photon\* power on_

![Get Photon VM](/images/blog/photon.jpg)

Let's go for the most obvious things 

**How much memory is configured on the VM I just searched for?**

_mem_

![Photon memory](/images/blog/photonmem.jpg)

**How much memory is consumed - maybe it's just out of memory?**

_memusage_

![VM memory usage](/images/blog/Photon_memusage.jpg)

**Not much memory used at all...**

**Any snapshots on that virtual machine?**

_snapshots_

![Snapshots Photon VM](/images/blog/photon_snapshots.jpg)

**Any noticeable events?**

_events_

![Photon VM events](/images/blog/photon_events.jpg)

That gives me already an idea as the system was powered off and on several times. Admin needs to call the End user.

- Admin calls End User: Hey, I checked for it and it seems the system was restarted several times. Any idea why?
- End User: I didn't do anything. But wait a second, there was a maintenance message from the developer about updating some stuff.
- Admin: Here we go, it was just normal maintenance from the developer.
- End User: Good to know, thanks for checking it!

**As you can see, it just took a couple of commands to get an idea what is going on in your environment. No need to open a vSphere Client or Web Client or even starting your computer. Your mobile works totally fine.**

# Want to start using [OpBot - Download it here](http://try.opvizor.com/opbot)

## Performance Analyzer Integration

Let's move on and connect OpBot to Performance Analyzer to get even more information about the system health. There are hundreds or thousands of possibilities what data to get out of Performance Analyzer, but we start with simple things first.

If you´re a Performance Analyzer customer, please contact us as we also support the OpBot connection to Performance Analyzer, so you can get any performance and statistical information you like into your chat window. You can use our chat bottom right of this page or contact [support@opvizor.com](http://mailto:support@opvizor.com).

Here are some examples what information you can get combining the OpBot and the Performance Analyzer product.

## Memory Ballooning

Get me the virtual machines with the highest memory ballooning values over the last hour, day, week

![OpBot - VM Memory Ballooning](/images/blog/opbot_pa-1.png)

## CPU Ready

What are the VMs having the highest CPU Ready values?

![OpBot Get CPU Ready](/images/blog/pa_bot_cpuready.jpg)

## IO Response time

In the last hour what was the longest I/O response time in my environment:

![Longest Storage IO Response time](/images/blog/pa_bot_longio.jpg)

## Storage Total IOps

I want to see my current total IOps in my environment over the last hour (my default setting).

![Total IOps ChatBot](/images/blog/pa_bot_totaliops.jpg)

What are my total IOps over the last week? 

![Storage Total IOps](/images/blog/pa_bot_totaliops_7days.jpg)

As you notice, it's very simple to extent the same commands that gather the default 1 hour view to use different time slots. In this example adding the start time now-8d (8 days before today) and the stop time of now-1d (yesterday) shows the Total IOps over for the last week excluding today.

## Summary

Our solutions support you to access and analyze your VMware vSphere environment from anywhere, using any device. As you could see in the given examples, you just need to think of your daily routine and typical use cases to save big time. You can try all products for free and check the functionality.

### [Try OpBot for free!](http://try.opvizor.com/opbot/)

## [Evaluate Performance Analyzer for 30 days!](http://try.opvizor.com/perfanalyzer)

## FAQ

### What about security?

When designing OpBot we always had security in mind as we are fully aware that the Bot listens to commands written into a Slack channel. Therefore, we decided to only implement read-only commands in our community edition.

1. Slack already offers security features like Teams (invite only) and private channels (invite only) – [https://slack.com/security](https://slack.com/security)
2. OpBot only listens to predefined commands (white list approach)
3. OpBot is based on a VMware vSphere API integration that has no local shell access or system calls
4. OpBot commands are not executed in a shell, but a wrapper that ignores undefined commands
5. OpBot works with a vSphere read-only account (and we encourage you to not configure an administrative account!!)
6. All chat messages are logged and Slack can be configured to deny message deletion (works like an audit log)
7. You can remove or shutdown the OpBot VM at any time and it will reconnect when powered on

If you´re interested in our upcoming enterprise edition (full functional including operations, 2-factor auth, on-premise chat option – please let us know).

### Can I manage multiple VMware vCenter systems

Of course, just deploy our small virtual appliance, one for each VMware vCenter, and repeat the steps for connecting to that vCenter and add another bot integration in [Slack](https://my.slack.com/services/new/bot) with the corresponding name.
