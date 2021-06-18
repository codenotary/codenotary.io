---
title: "VMware Tools Are Outdated or Not Installed (Part 2)"
image: /images/blog/vmtoolsversion.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-02-07"
---

## Ease of Detecting

Identifying that you have virtual machine with Tools that are out of date or not installed at all is easy to do. The virtual machine Summary tab in vCenter will show the status of the VMware Tools on that specific virtual machine.
To find out of the status of the VMware Tools across the entire vSphere infrastructure, go to the vCenter Inventory level, click on Related Objects, and then go to the Virtual Machine inventory. Here you will likely need to add the “VMware Tools Version Status” column to the report. To do this, right-click on the storage report column headers and click Show/Hide Columns, as shown in Figure 2.
![Figure 2: VMware Tools Version](/images/blog/vmtoolsversion.png)
Next, click on the VMware Tools Version Status option to add it to the view, as shown in Figure 2. From there, you can sort and group all the VMware tools versions that are similar by clicking on the column header entitled VMware Tools Version Status, as shown in Figure 3.
![Figure 3: VMware Tools Detection](/images/blog/vmtoolsdetection.png)
Additionally, you can run a PowerCLI script — which you can find at this link — to output the overall VMware Tools status.

## Benefits to Solving

The benefits to installing (or at least upgrading) the VMware Tools include:

- Gaining the ability to shut down or restart the guest OS from the vSphere client

- Improving guest OS performance
- Reducing resource utilization and improving VM to host consolidation ratio, which improves the ROI for the virtual infrastructure environment

## Ease of Solving

Installing or updating the VMware Tools is quickly accomplished through the vSphere Web Client. This installation or update may not even require a reboot of the virtual machine guest OS. If VMware Tools need to be upgraded, you’ll be prompted on the Summary tab of the virtual machine, as shown in Figure 4.
![Figure 4: VMware Tools update](/images/blog/vmtoolsupdate.png)
Alternatively, you can right-click on the virtual machine go into All vCenter Actions, Guest OS, and click on Upgrade VMware Tools (shown in Figure 5), then follow the prompts inside the guest OS. If you prefer to use the command line to accomplish your goal, the PowerCLI cmdlet is available via Update-Tools. ![Figure 5: VMware Tools Update 2](/images/blog/vmtoolsupdate2.png)

## How opvizor Helps

Rather than remembering to periodically search for virtual machines with older versions of VMware Tools, or on virtual machines that don’t have any VMware Tools installed, opvizor continuously scans the environment for virtual machines that need their VMware Tools updated or installed (Figure 6). Not only does this save analysis time, it also ensures that you remain continuously aware of the status of your virtual machines, and that you can ensure that your virtual machines are always performing optimally.
![Figure 6: VMware Tools opvizor](/images/blog/vmtools-1024x302.png)

## Author

[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)

[CHECK Part 1](https://www.opvizor.com/?p=4989)
