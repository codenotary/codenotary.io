---
title: "Enhance OpBot using the built-in PowerShell Web editor"
image: /images/blog/editoron.png
tags: ["Ops", "opvizor"]
date: "2017-04-13"
---

While building the OpBot ChatOps for VMware vSphere Bot, we always kept in mind that it should be simple to reuse existing PowerShell & PowerCLI scripts and commands.

Most of the time you want to use a PowerShell module or use your own functions and alias commands.

Therefore, we integrated a browser based PowerShell editor you can use to change, add or remove functions and modules in the most simple way.

When you type **editor on** , OpBot opens the PowerShell web editor for 30 minutes (you can stop it anytime using **editor off**) and presents a one time url within the chat for security reasons.

[![PowerShell Web Editor](/images/blog/editoron.png)](http://try.opvizor.com/opbot)

Within the PowerShell Web Editor you can navigate and edit the existing files. 

- Profile.ps1 is loaded every time OpBot initializes a PowerShell session. 
- Custom folder contains the functions.ps1 that is also loaded with every PowerShell session and is meant for individual functions OpBot can execute.
- Modules is the psm1 module folder where you can upload and change PowerShell core modules.

![Open PowerShell Web editor](/images/blog/rfm1-1.png)

The PowerShell web editor has syntax highlighting integrated for PowerShell scripts to make it easy to work with.

![Edit the PowerShell Profile.ps1](/images/blog/rfm2.png)

[![Download OpBot](/images/blog/button_download-opbot-1.png)](http://try.opvizor.com/opbot)
