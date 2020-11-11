---
title: "Ask OpBot - Part 3: Restart VMware virtual machine using Chat?"
image: /images/blog/powervm.png
tags: ["Ops", "opvizor"]
date: "2017-03-14"
---

Do you remember the following situation? You are in a meeting and one of your important system fails. The good thing is, that the alerting works well and you receive the notification within 2 minutes after the detected downtime.

The issue is, you don´t have access to your admin station to check that system out and maybe fix it. To get to your station you need to cancel and reschedule the ongoing meeting. 

I think everybody was in a situation like that multiple times. And if you could have accessed the system information on your smartphone or tablet, the issue would have been solved quick and the meeting not rescheduled. A short coffee break would have been all you need.

Luckily, that time has come and you can access all information you need and even restart a system using your iPhone, Tablet or whatever mobile device using [Slack](http://www.slack.com)\-Chat (or [Rocket.Chat](https://rocket.chat/)).

I recorded a short video to show you the whole use case:

<iframe src="https://player.vimeo.com/video/207112110" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen="" allowfullscreen=""></iframe>

The commands used in that video inside the direct message chat with [OpBot](http://try.opvizor.com/opbot):

### Find the virtual machine the alert was for

_vm <vmname or wildcard>_

**vm W2K1201**

Power Status of the VM

_vm <vmname or wildcard> power_

**power**

I only use the power command as the VM is still in my cache because of the first command

[![VM PowerState using Chat](/images/blog/powervm.png)](http://try.opvizor.com/opbot)

Get latest VM Events 

_vm <vmname or wildcard> events_

**events**

[![VM events iPhone](/images/blog/vmevents.png)](http://try.opvizor.com/opbot)

### Screenshot of the VM console

_vm <vmname or wildcard> screenshot_

**screenshot**

[![Find VM bluescreen Tablet](/images/blog/vmbluescreen.png)](http://try.opvizor.com/opbot)

### Restart the VM using PowerCLI

Of course OpBot needs permission to perform a restart. But that can be done in a flexible way or you can have one readonly OpBot instance and one with full permissions in different Slack channels using different security settings.

_posh get-vm <vm name> | restart-vm -confirm:$false_

**posh get-vm W2K1201 | restart-vm -confirm:$false**

[![Restart VMware virtual machine](/images/blog/opbotposh-restart.png)](http://try.opvizor.com/opbot)

Get your hands on our OpBot now (simple, few steps install).

[![OpBot your VMware vSphere assistant](/images/blog/opbot_download-1.png)](http://try.opvizor.com/opbot)
