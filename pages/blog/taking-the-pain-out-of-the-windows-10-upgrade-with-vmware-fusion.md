---
title: "Taking the Pain Out of the Windows 10 Upgrade With VMware Fusion"
image: /images/blog/bigstock-Hand-holds-Windows--logotype-103334195.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-03-17"
---

It's becoming more and more popular to install and [run Windows on the Mac](http://www.imore.com/how-avoid-windows-10-upgrade-problems-vmware-fusion), and VMware Fusion makes this fantastically simple. One of the best parts is that you can install Windows 10 onto the Mac (VMware Fusion Windows 10), but hide it and continue to use OS X while accessing and utilizing all of the great Windows-based apps. 

**Users Running Hypervisors May Have Issues Downloading Windows 10**

![VMware Fusion Windows 10](/images/blog/bigstock-Hand-holds-Windows--logotype-103334195.jpg)

_Users running hypervisors are reporting more issues than those that aren't using hypervisors. Luckily, there is a quick and easy workaround for allowing VMware Fusion, version 7 or 8, to handle the migration process for you._ 

 Some users have had no problem installing and running Windows 10, while others have [reported significant snags](https://blogs.vmware.com/teamfusion/2015/07/windows-10-svga-upgrade-issue.html). Recent updates have done a lot to alleviate some of the most common user gripes where version 10 is concerned, and Mac users tend to like version 10 better than any previous Windows version. 

VMware [Fusion 7 and 8](http://www.engadget.com/2015/08/25/vmware-fusion-8/) provide a reliable, predictable means for running Windows 10 safely on the Mac within a virtualized environment that is easy to migrate into and out of, and to suspend when you aren't using it. However, some Fusion 7 users have hit a snag during the Windows 10 upgrade process. 

Fortunately, there is a [fast and easy work-around](http://www.mikeroysoft.com/windows-10-and-vmware-fusion/) for the issue. 

**Microsoft Provides an .ISO to Manage the Upgrade Process**

![VMware Fusion](/images/blog/bigstock-coffee-break-25335509.jpg)

_For a relatively new Mac with a reasonably fast Internet connection, the whole process should only take about 10 minutes. Starting the download requires answering a few questions, but once it begins, it's a pretty hands-off process._

_Take a break and it should be ready when you get back._Instead of using the upgrade method inside the virtual machine, download the .ISO and allow Fusion 7 to handle the upgrade. 

You can download the Windows 10 .ISO file and burn it to disk or simply use it as a virtual machine. Unfortunately, there isn't one specific link to get the right download. You have to go through Microsoft's little process to end up with the right version, but the process seems to work pretty well for those who've already done it. 

 Before beginning the process, you need to take a Snapshot, so that you can revert back in case there are any snags along the way. Also, if you start using Windows 10 and find yourself among the ranks of folks who just don't like it, you can use your Snapshot to go back to pre-version 10 blissfulness. 

The installation process isn't one that has to be babysat, and it only takes about 10 minutes, so if you start it right before break, it should be ready for you when you return. You'll also need your Windows key handy, because Microsoft will ask for this before allowing you to proceed with the download. 

 It's also a good idea to make sure to [turn off the setting that allows Microsoft to monitor all your activities](http://www.zdnet.com/article/how-to-stop-windows-10-spying-on-you/). Most users don't care for this feature at all. After downloading Windows 10 via VMware Fusion 7, you can reuse that same .ISO file for other machines or as a clone feature in Fusion Pro. 

 One more thing ... it's also helpful to have VMware Tools installed before you begin the .ISO download.
