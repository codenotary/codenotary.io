---
title: "Tips and Tricks: Using OpBot to Monitor Virtual Machines"
tags: ["Ops", "opvizor"]
date: "2017-02-02"
---

Right after we pointed out some great OpBot blog posts, Google alerted us regarding an OpBot real life experience from Brendan Ellis Allen. 

[Brendan](https://twitter.com/newco) wrote a very nice article about our OpBot product and pointed out some very important topics. Thank you very much Brendan!

"Our system ops team has been using Slack basically to communicate via chat, with several channels to track various projects, into which we upload commonly-called-upon files. However, many apps can be integrated with Slack to do useful (or in some cases not-particularly-useful) things."

Please take a look at [NewCo Shift](https://shift.newco.co/).

Here is the article from Brendan:

"I’m always looking for ways to automate sysadmin chores. That led me to explore ways to extend Slack to help us monitor virtual machines in our company’s operations center. This one works for anyone using Slack who also administrates or monitors a VMware vSphere environment — and it works in a VMware data center or in VMware cloud settings.

There are hundreds upon hundreds of apps and bots listed on Slack’s website. After wading through the cruft (unfortunately, there’s quite a lot of junk), I found some that would help us in day to day operations. The first bot worth considering was OpBot.

[OpBot](http://try.opvizor.com/opbot) is a bot that promises to continuously check up on our virtual machines (VMs) from within Slack. OpBot’s stated goal is to let me find what’s going on inside VMware’s vSphere, whether I’m using a desktop system or on my phone, as long as I’m in a Slack client.

It appealed to our sloth, because OpBot allows us to watch our operation from within Slack, without having to load up VPN connectivity and without having to load VMware’s various monitoring apps, some of which load at a snail’s pace. You can impulsively connect Slack and vSphere and do a myriad of simple or complex tasks on your VMware Datacenter, Hosts, VMs, and most of the glue that holds them together, short circuiting all the trouble an admin usually needs to go through to do those chores.

There are two pieces to OpBox. One is a virtual appliance — an actual virtual machine — that is run inside a VMware vSphere environment. For us, that meant a quick download into our network operations center. Is it a security risk? We don’t think so, but your security policy might vary. Best to check first.

The setup takes a few steps. It’s not hard, just a bit complex:

- In vCenter, set up the virtual OpBot appliance deploying it in a read-only user role. The read-only mode prevents tampering. Twenty seconds.
- Get the Slack API token from OpVizor’s website. Ten seconds.
- Add the bot to the Slack team as a new bot user, using the name we used in VMWare; in our case, it’s opbot. Another ten seconds.
- Import the opbot virtual appliance into your vCenter environment as you would any other virtual machine. Might take a minute.

You do this once, for the entire vCenter environment, one host or a thousand, one virtual machine or ten thousand more. That’s all it takes!

To configure our environment, I entered our networking information for the appliance, the Slack API token key, the vCenter’s IP or FQDN address, and a Slackbot user to connect to vCenter (in our case opbot, the read-only user). Then I made the OpBot I configured into a live VM, now ready to connect my access to Slack with the appliance, and with it, the entire vSphere enchilada.

Finally, the moment of truth: I started the OpBot to see if everything worked. I ran it through its paces.

To issue commands to the opbot from Slack, I sent a direct message to the opbot using the syntax @opbot “some command in a Slack channel. I ran into a few “learning curve” moments, such as getting a Slack error for “incorrect user name or password” when trying the command show vm \*. Then I realized I hadn’t entered the full username [_opbot@vsphere.local_](mailto:opbot@vsphere.local), which identifies where my command was supposed to be destined. Oops. After a quick change to the settings and a reboot, everything worked.

I again tried to list all the VMs in our environment with the show vm \*command. Success!

![OpBot1](/images/blog/OpBot1.png)

Photo courtesy of [Brendan Ellis Allen](https://shift.newco.co/vmware-slack-hack-using-opbot-to-monitor-virtual-machines-fe7eb3ee03e5#.qk6v8yadm)

Now that I had the opbot up and running, there was more to discover.

OpBot’s highest value comes from remotely monitoring various resources and usage in vSphere, any time, any place — simply from Slack. I found I could also turn VMs on and off — but not with a read-only account; see the devil of the details in their documentation. Therein lies a security risk if I didn’t lockdown Slack administratively. If everyone on a Slack team has authorization to access the channel where OpBot lives, expect shenanigans; anyone with access to the channel would be able to run opBot commands.

But if your staff knows VMware, is trustworthy, and has permission to the Slack channel where OpBot lives, it’s a handy tool. You can see CPU, memory usage, and VM events (oops, I’m in trouble or changed, etc.). Currently, you can only query; you don’t receive any alerts without specifically querying.

![OpBot2](/images/blog/OpBot2.png)

Photo courtesy of [Brendan Ellis Allen](https://shift.newco.co/vmware-slack-hack-using-opbot-to-monitor-virtual-machines-fe7eb3ee03e5#.qk6v8yadm)

Anyone in that channel can also use PowerShell and PowerCLI (VMware’s version of PowerShell) commands to perform some pretty powerful controls to their vSphere infrastructure and the VMs that live there, assuming the opBot user has permissions to do so.

As an example, a simple command might start a VM in our data center:

![OpBot3](/images/blog/OpBot3.png)

Photo courtesy of [Brendan Ellis Allen](https://shift.newco.co/vmware-slack-hack-using-opbot-to-monitor-virtual-machines-fe7eb3ee03e5#.m26m84m9n)

Compare that to the way I’d have accomplished that previously, the most straightforward of which would have been to connect to the VPN; log into the web UI; find the right VM in the interface; right-click on it, and click Start VM. Instead, all we have to do is run the command.

Obviously, the full Web UI is a very powerful tool, and is still necessary for many tasks, but for a quick overview of your VMs and the ability to use Powershell triggers, opBot is quite handy.

It’s not perfect, of course, The formatting of text returned from opBot could be a bit neater (easier on the eye, so to speak). Its queries could be improved upon to provide more detailed information about VMs or to set alerts that would let you know if a condition is met (such as a VM taking more than 80% CPU).

The power of this, however, is that it’s all done without connecting to my corporate VPN or going to the vSphere web UI at all. It helps me avoid a tedious process. Indeed, I’m doing it all from my smartphone! How cool is that?"

### Well, thank you Brendon! We are thrilled about your feedback and your very nice article!

Hope a lot of people will soon be as happy with our OpBot as Brendon!

Feel free to comment this Blog and to try our OpBot [here](http://try.opvizor.com/opbot).
