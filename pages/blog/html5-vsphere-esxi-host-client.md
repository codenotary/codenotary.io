---
title: "HTML5 vSphere ESXi Host client"
image: /images/blog/wpid-ESXiHostClientFlingScreenShotNew.png
tags: ["Ops", "opvizor"]
date: "2015-08-19"
---

When I read the first post about the newly released vSphere ESXi Embedded Host Client at [virtuallyGhetto](http://www.virtuallyghetto.com/2015/08/new-html5-embedded-host-client-for-esxi.html "virtuallyGhetto"), I was excited. Finally a step into the right direction moving away from Adobe Flash.

Unfortunately it's a VMware Fling you need to install into any ESXi host and not an official client that is already integrated but it's a start. 

Thanks to the engineers Etienne Le Sueur and George Estebe there is hope to get more fast HTML5 based management tools at hand in the future. Start dreaming about a full features vSphere webclient based on HTML5, that is stable, fast and not so old fashioned. HTML5 vSphere Management :)

If you can't await to get your hands on this FLING and you are running ESXi 6.0 or 5.5 U3 (when released), click here: [ESXi Embedded Host Client](https://labs.vmware.com/flings/esxi-embedded-host-client "ESXi Embedded Host Client")

[![HTML5 vSphere Host client](/images/blog/wpid-ESXiHostClientFlingScreenShotNew.png)](https://labs.vmware.com/flings/esxi-embedded-host-client)

[](https://labs.vmware.com/flings/esxi-embedded-host-client)

[Photo courtesy of](https://labs.vmware.com/flings/esxi-embedded-host-client) [VMware Fling](http://labs.vmware.com/wp-content/uploads/2015/06/ESXiHostClientFlingScreenShotLargest.png)

Here is a short summary of it:

> This version of the ESXi Embedded Host Client is written purely in HTML and JavaScript, and is served directly from your ESXi host and should perform much better than any of the existing solutions. Currently, the client is in its development phase, but we are releasing this Fling to illicit early feedback from our users to help guide the development and user experience that we are creating. As such, the client is not fully featured and only implements a hand full of the most important features. 

Some of these include:

- VM operations (Power on, off, reset, suspend, etc).
- Creating a new VM, from scratch or from OVF/OVA (limited OVA support)
- Configuring NTP on a host
- Displaying summaries, events, tasks and notifications/alerts
- Providing a console to VMs
- Configuring host networking
- Configuring host advanced settings
- Configuring host services

That Fling is still early stage, therefore please let the engineers know if you run into any issues. But even more important report back what you think about performance, look & feel aso. - here in the [community forum](https://communities.vmware.com/community/vmtn/vsphere/hostclient/ "community forum")

For more information please also check out William Lam's post: 

[New HTML5 Embedded Host Client for ESXi](http://www.virtuallyghetto.com/2015/08/new-html5-embedded-host-client-for-esxi.html "New HTML5 Embedded Host Client for ESXi")
