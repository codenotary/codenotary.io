---
title: "OpBot v2 - next generation user interface for VMware vSphere and PowerCLI Core"
image: /images/blog/opBot-1.png
tags: ["Ops", "opvizor"]
date: "2017-01-03"
---

More than a month ago we released the first version of OpBot, the virtual assistant for VMware vSphere. 

That incredibly helpful ChatOps Bot allows to manage and control your [VMware vSphere](http://www.vmware.com) environment out of a [Slack](http://www.slack.com) chat. As your virtual assistant that works from anywhere, at any time with any device, OpBot waits for your natural commands in a highly efficient manner.

The response was overwhelming and we worked very hard to improve our product and make it even more stable and powerful.

![OpBot](/images/blog/opBot-1.png)

**Thanks** to the great support of two very famous guys in the virtual automation space [Luc Dekens](https://twitter.com/LucD22) and [Alan Renouf](https://twitter.com/alanrenouf) (and his amazing PowerCLI team) we successfully troubleshot and tested our latest addition that makes [OpBot](http://try.opvizor.com/opbot) v2 so extremly powerful: [PowerCLI Core](https://labs.vmware.com/flings/powercli-core)

[Alan Renouf](http://www.virtu-al.net/), VMware Senior Product Line Manager

> OpBot combines the best communication platform (slack) with the glue of the data center (PowerShell) to give developers and operations teams instant access to information about the infrastructure when they need it the most and provide resolution to issues faster than ever before.

[Luc Dekens](http://www.lucd.info/) statement also makes it pretty clear:

> If you were looking for use cases for PowerShell and PowerCLI Core, here’s one!The Opvizor OpBot is a beautiful example of how you can put the Core versions to good use in an appliance.Add to that the integration with Slack, and you have a modern way of interfacing with your SDDC. Love it!

[![user interface for VMware vSphere](/images/blog/powercli_core.png)](http://try.opvizor.com/opbot)

We´re so excited to release such an innovative product and can´t wait to get feedback. As always community feedback defines our product and feature roadmap.

## How to get your new interface for VMware vSphere?

You only need to import a virtual appliance in your VMware vSphere environment that consists of a stripped-down Linux and includes the components for a ChatBot and a VMware vSphere API connection broker.

The OpBot connects to the Slack API and makes itself available as a Slack user waiting for commands via channels or private messages.

OpBot responds to predefined commands (available with the help command) using the read-only VMware vSphere account you created as a customer and publishes the output of these commands into the chat.

Register here for more information and how to get the your very own OpBot:

**Quick Download:** 

[http://try.opvizor.com/opbot](http://try.opvizor.com/opbot)

**Complete User Manual**:

[https://opvizor.atlassian.net/wiki/display/OPBOT](https://opvizor.atlassian.net/wiki/display/OPBOT)

## Change Log Version 2

But let's start with the change log, compared to OpBot Version 1:

Microsoft PowerShell integration

- read-only command support
- non-interactive read-write command 

VMware PowerCLI Integration

- read-only command support
- non-interactive read-write command 

embedded vSphere Commands enhancements

- top x command (i. e. vm win\* top 5 memusage)
- output improved (raw and table views)
- table builder improved (tablebuilder command to adjust output for mobile)

known limitations

- no support for core Microsoft system PowerShell commands yet (i. e. WMI)
- no support for interactive PowerShell commands, like
    - read-host
    - get-credential
    - start-vm, stop-vm aso. without -confirm:$false argument to avoid interaction
- no support for visual commands, like write-progress

## embedded vSphere commands

Before we dive into the PowerCLI Core integration, you need to know, that we want to make your life as easy as possible working with your virtual datacenter. Therefore, we continue to enhance our own simple embedded commands, that are completely sufficient for quick requests.

Show powered on VMs starting with win\* as a name:

_vm win\* power on_

![](/images/blog/poweronvms.png)

show events of the given VM:

_vm winad events_

![Virtual Machine Events](/images/blog/events.png)

There is also a new way of showing the most resource hungry VMs using the top command: 

vm \[VM\_NAME\] top XX (cpu|mem|cpuusage|memusage|uncommitted|committed|unshared)

_vm win\* top 3 memusage_

![Memory Usage VM](/images/blog/top3mem.png)

[You can find a complete list of these commands here](https://opvizor.atlassian.net/wiki/display/OPBOT/VMware+vSphere+Commands)

## PowerCLI Core integration

You can access nearly all of the 315 PowerCLI Core CmdLets (VMware PowerCLI portion out of 2000+ available [Microsoft](https://github.com/PowerShell/PowerShell) PowerShell cmdlets in total).

![PowerShell Core and PowerCLI Core](/images/blog/powershell_core_cmds.png)

**Important:** Just remember it's a chat and not an interactive shell session! Therefore, don't use commands that ask back, like get-credential or read-host. Whenever you run commands like _start-vm_ or _stop-vm_ remember to add _\-confirm:$false_

Just use the same principles as you would run non-interactive scripts.

Hint: as some PowerShell commands you know from Microsoft Windows have corresponding commands in Linux, please always use the full command, i. e. sort-object (not just sort), where-object (not just where), ....

### Some Use Cases

Get your datastore free space:

_posh get-datastore_

![Get Datastore Free Space](/images/blog/datastore_powercli.png)

How many VMs are running on each cluster:

_posh Get-VMHost | Select @{N=“Cluster“;E={Get-Cluster -VMHost $\_}}, Name, @{N=“NumVM“;E={($\_ | Get-VM).Count}} | Sort-Object Cluster, Name_

![VMs running on each cluster](/images/blog/vmcount.png)

### More complex use cases

Get the last 2 VMs removed from your VI use the following:

_posh Get-VIEvent -maxsamples 10000 | where-object {$\_.Gettype().Name -eq "VmRemovedEvent"} | Sort-object CreatedTime -Descending | Select-object CreatedTime, UserName, FullformattedMessage -First 2_

![last removed VMs](/images/blog/last_removed_vms.png)

For the real experts of you, we also support pretty complex commands like the following to get performance information:

_posh Get-VM win\* | Where {$\_.PowerState -eq "PoweredOn"} | Select Name, Host, NumCpu, MemoryMB, @{N="CPU Usage (Average), Mhz" ; E={\[Math\]::Round((($\_ | Get-Stat -Stat cpu.usagemhz.average -Start (Get-Date).AddDays(-1) -IntervalMins 5 | Measure-Object Value -Average).Average),2)}}, @{N="Memory Usage (Average), %" ; E={\[Math\]::Round((($\_ | Get-Stat -Stat mem.usage.average -Start (Get-Date).AddDays(-1) -IntervalMins 5 | Measure-Object Value -Average).Average),2)}} , @{N="Network Usage (Average), KBps" ; E={\[Math\]::Round((($\_ | Get-Stat -Stat net.usage.average -Start (Get-Date).AddDays(-1) -IntervalMins 5 | Measure-Object Value -Average).Average),2)}} , @{N="Disk Usage (Average), KBps" ; E={\[Math\]::Round((($\_ | Get-Stat -Stat disk.usage.average -Start (Get-Date).AddDays(-1) -IntervalMins 5 | Measure-Object Value -Average).Average),2)}}_

![VM Performance Data](/images/blog/perfvmdata.png)

Especially in larger environments with several hundred systems and more, you should consider limiting the amount of information requested to not fill the chat window. Get-VM vmname instead of Get-VM \* is a good start.

This list should give you a decent jumpstart, if you're searching for more ideas: [PowerCLI Script list](http://www.virtu-al.net/script-list/)

## Up and running within minutes, start your day with OpBot as your very own assistant and experience a new interface for VMware vSphere! **Download here**

[](http://try.opvizor.com/opbot)
