---
title: "Ask OpBot - Part 1: What is the IP of my VM?"
tags: ["Ops", "opvizor"]
date: "2017-03-07"
---

Based on exciting feedback our OpBot product received, we decided to start a blog series that covers existing OpBot commands & hints and will get into more advanced PowerShell scripts and commands over that course.

All Blog posts will find their way into our [online manual](https://opvizor.atlassian.net/wiki/display/OPBOT), so you can always check them out as a whole.

Part 1 starts with the commands to get the IP addresses of one or multiple VMs

## Store the VM in the OpBot brain for the next command

vm <vmname>

![Get Virtual Machine Slack](/images/blog/vmcache.png)

## Get the IP of the VM in the brain

ip

![vmip](/images/blog/vmip.png)

## Combine the commands

vm <vmname> ip

![combined](/images/blog/vmipcmd.png)

## Use wildcards to get the IPs of multiple VMs

vm <vm\*> ip

![wildcard vm ip](/images/blog/allips.png)

As you can see one virtual machine has no ip - let's check out the power status:

![VM powerstate](/images/blog/poweredoff.png)

Make sense, that a powered off VM has no ip address.

[![Download OpBot](/images/blog/button_download-opbot.png)](http://try.opvizor.com/opbot)
