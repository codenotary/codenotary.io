---
title: "Access VMware vRealize Operations (vROPs) information from your mobile"
tags: ["Ops", "opvizor"]
date: "2017-05-02"
---

When you run [VMware vRealize Operations Manager](http://www.vmware.com/products/vrealize-operations.html) in your environment to detect issues and anomalies, it is a pain to only have access to that information when running a vSphere Web client (with the integration) or using the web management of vROPs itself. Of course that means you need access to your local network either directly of using VPN. Some use the PowerShell to connect to vROPs, but you still need a installed PowerShell on your system and access to your local network.

What if you could use your smartphone to access that information and react on it using PowerShell or simpler VMware commands? What if you don´t need to install any VMware App on your mobile - although such an app doesn´t exist to date. 

We got something for you and you only need chat :-)

[![OpBot VMware vRealize Operations Manager](/images/blog/vrops1.png)](http://try.opvizor.com/opbot)

We started a poll what application integration you would like the most for [OpBot](https://opvizor.atlassian.net/wiki/display/OPBOT/QuickStart), our ChatOps Bot for VMware, and the clear winner was vRealize Operations Manager. Of course we listened and integrated a vROPs connector for OpBot.

[OpBot](http://try.opvizor.com/opbot) can receive information for a single virtual machine or an host as well as the whole environment.

_**vrops** alerts NAME\* (health|risk|efficiency) (capacity|availability|performance|compliance|configuration) (info|warning|immediate|critical)_ 

All you need is an enterprise license for OpBot and you can access vROPs. So please contact us, if you like to give it a shot.

[![OpBot vROPs iphone mobile](/images/blog/vrops2.png)](http://try.opvizor.com/opbot)

[![Download OpBot](/images/blog/button_download-opbot.png)](http://try.opvizor.com/opbot)
