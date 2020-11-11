---
title: "Find orphaned vm files in your VMware vSphere environment using your mobile"
image: /images/blog/orphan-1-262x300.jpg
tags: ["Ops", "opvizor"]
date: "2017-01-18"
---

Luc Dekens, published an extremly helpful PowerCLI script you can use to find orphaned VM files in your vSphere environment.

Orphaned systems can become a huge disk resource waste, especially when sitting in datastores that reside on expensive storage systems.

After publishing a PowerCLI script to detect the most common orphaned files he revisited and updated the script to find all known kinds of orphaned files. All findings are listed nicely including their filesize.

![orphaned vm](/images/blog/orphan-1-262x300.jpg)

You can find and download the script here: 

[http://www.lucd.info/2016/09/13/orphaned-files-revisited](http://www.lucd.info/2016/09/13/orphaned-files-revisited/)

## OpBot, your VMware virtual assistant

To use the PowerShell or PowerCLI, you typically need to have access to a computer or at least a remote session to a Windows or Linux system.

[OpBot](http://try.opvizor.com/opbot) makes your life easier and you can access your VMware vSphere environment using simple commands or the PowerCLI Core.

As we continue to add more functionality, Luc's orphaned VM files script will definitely find its way into our script repository that we will ship in the future.

To give you a heads up what it coming:

[![OpBot orphaned vm](/images/blog/orphanedvm.png)](http://try.opvizor.com/opbot)

Stay tuned!
