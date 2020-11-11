---
title: "Ask OpBot - Part 2: Check the VM console screens remotely?"
image: /images/blog/screenshot.png
tags: ["Ops", "opvizor"]
date: "2017-03-09"
---

When trouble shooting virtual machines or most systems in general, you want to check what is visible on the console. Getting this information remotely is not just great, it can be essential to save time and recover a system as quick as possible.

That is the moment where OpBot comes in handy and you can access your VMware vSphere from anywhere you like using [Slack](http://www.slack.com) chat (or Rocket.Chat, if you prefer on-premise). [OpBot](http://try.opvizor.com/opbot) is up and running in minutes!

The VMware vSphere API offers the possibility of saving a console screenshot to a image file. OpBot uses that feature to create and upload the image to your chat window. Doesn´t matter if its your desktop, tablet or smartphone.

Just search for the VM you need more information from using the **vm** command and add screenshot to it:

**vm <vm name> screenshot**

OpBot responds in seconds and you know exactly if the system is still starting or hangs (Kernel panic, Bluescreen).

![VM console screen](/images/blog/screenshot.png)

Just make sure to grant the OpBot user in VMware vSphere a little bit more permissions, to access the vm console and make a screenshot.

[![OpBot VM Screenshot Permissions](/images/blog/scperm.png)](http://try.opvizor.com/opbot)

Virtual Machine -> Interaction -> Console interaction, Create screenshot

**Worth mentioning:** if you capture black screens most of the time, please disable display power saving settings are disabled!

![Power Settings Screen](/images/blog/powerscreen.png)

[![OpBot Download](/images/blog/button_download-opbot.png)](http://try.opvizor.com/opbot)
