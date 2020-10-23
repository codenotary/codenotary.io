---
title: "OpBot – The virtual assistant for VMware vSphere"
tags: ["Ops", "opvizor"]
date: "2016-12-06"
---

We at Opvizor have used Bots for quite some time to access our different vSphere environments from anywhere in the world. While travelling, it became pretty annoying to connect to VPN, open either the VMware Web Client over a slow connection or even connect to a remote Windows desktop to open the VMware Client. All of that effort, just because we need to find out if a virtual machine has been deployed, is running or has a high CPU load. And this is happening thousands or million times a day; what a time waste! We were determined to speed up and simplify these processes! Thus, a new VMware vSphere interface is born.

## OpBot says Hi!

![OpBot](/images/blog/opBot-1.png)

Starting initially with a helpful read-only Bot, or virtual assistant, we´re working on a full featured OpBot, that can manage VMware vSphere via natural chat commands from any device and any place. Btw. you can connect our OpBot today with Performance Analyzer, which unleashes amazing new remote troubleshooting and analysis possibilities.

A very important rule for us is, to offer early releases to the community and to customers, in order to get feedback and comments about our software. This helps us to move into the right direction and get views outside of our own setup and environment.

We´re very proud to release our first OpBot to the community, absolutely free of charge, which can be used to read information with respect to your vSphere environment.

As always, a picture says more as a thousand words:

![OpBot](/images/blog/vmwintable-1.png)

How does that work?

First, you import a virtual appliance in your environment that consists of a stripped down Debian linux and includes the components for a ChatBot and a VMware vSphere API connection broker.

The ChatBot, our OpBot, connects to the Slack API and makes himself available as a Slack user waiting for commands via channels or private messages. Therefore, we recommend creating a separate Slack account just for the OpBot usage.

![OpBot](/images/blog/OpBot_Slack_vCenter_arch-1.png)

OpBot responds to predefined commands (available with the help command) using the read-only VMware vSphere account you created as a customer and publishes the output of these commands into the chat.

![OpBot - Command memory](/images/blog/command_memory-1.png)

The cool thing is that OpBot is not only listening to commands, he also remembers the last entity selection that were shown by the last command. So you can run mem, table or raw commands on these systems to see details.

### Benefits

We had our very own reason to start the OpBot development as we´re a very effective team at Opvizor and we can´t undergo the effort to run hundreds of virtual machines in several datacenters across the world wasting time on simple operations. In general, we think that IT admins and IT consultants waste time every day waiting for vSphere Web client responses. That´s already the case while sitting in the same LAN with 10Gbit connectivity. Changing the perfect LAN situation into the common situations of commuting, traveling and having low bandwidth access, results in significant wasted time and gets extremely annoying. Any Device, Any Place, Any … not really!

Why start a mobile hotspot, connect with your notebook to it, connect to VPN, open a remote desktop session (as all web clients are so slow, when connecting over low bandwidth), just to see if a virtual machine is running or the cpu usage is high?

Last but not least, you need other tools to track security and access to certain systems at certain times. That´s already done as the chat logs all in- and outputs. Btw. that is even more important if you have external consultants that need to check some environmental information. With OpBot, invite them to the slack private channel, let them do the tasks and disconnect them again. Win:Win for everyone.

In summary

- No VPN
- No RDP Session
- No Mobile Hotspot
- Any Device
- Any Place
- async commands
- Audit log in the chat
- Avoid annoying bandwidth issues using remote desktops or VMware Web client

### Register here for more information and how to get the free of charge version of OpBot:

[http://try.opvizor.com/opbot/](http://try.opvizor.com/opbot/)

and have fun with our OpBot!

### Register here for more information and how to get the latest version of Performance Analyzer:

[http://try.opvizor.com/perfanalyzer/](http://try.opvizor.com/perfanalyzer/)
