---
title: "PowerShell Remoting Cheatsheet by Scott Sutherland"
tags: ["Ops", "opvizor"]
date: "2015-09-07"
---

Scott Sutherland published a great blog article covering the little hints and tricks when using PowerShell Remote Execution functionality. 

> I have become a big fan of PowerShell Remoting. I find my self using it for both penetration testing and standard management tasks. In this blog I'll share a basic PowerShell Remoting cheatsheet so you can too. 
> 
> PowerShell Remoting is essentially a native Windows remote command execution feature that’s build on top of the Windows Remote Management (WinRM) protocol.  Based on my super Google results, WinRM is supported by Windows Vista with Service Pack 1 or later, Windows 7, Windows Server 2008, and Windows Server 2012.

[![PowerShell Remoting](/images/blog/5728486437_1f69302183.jpg)](https://blog.netspi.com/powershell-remoting-cheatsheet/)

[](https://blog.netspi.com/powershell-remoting-cheatsheet/)

[Photo courtesy of](https://blog.netspi.com/powershell-remoting-cheatsheet/) [espensorvik](https://www.flickr.com/photos/28478778@N05/5728486437/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

[Scott Sutherland](http://www.twitter.com/@_nullbind "Scott Sutherland"), [PowerShell Remoting Cheatsheet](https://blog.netspi.com/powershell-remoting-cheatsheet/ "PowerShell Remoting Cheatsheet")

He covers all topics from Enabling to Executing PowerShell commands on remote computers. PowerShell offers with Remoting one of the most powerful features of the Microsoft PowerShell. 

Scott wraps up with the essential commands:

- Use "Invoke-Command" if you're only going to run one command against a system
- Use "Enter-PSSession" if you want to interact with a single system
- Use PowerShell sessions when you're going to run multiple commands on multiple systems

This is a must read for every PowerShell Fan and gives you a great guideline to start Remote control your systems with powerful PowerShell scripts. Of course you can also combine it with remote control functions for VMware virtual machine using PowerCLI  (invoke-vmscript).
