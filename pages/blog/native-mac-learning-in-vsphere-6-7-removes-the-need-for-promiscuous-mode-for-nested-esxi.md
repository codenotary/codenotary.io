---
title: "Native MAC Learning in vSphere 6.7 removes the need for Promiscuous mode for Nested ESXi"
image: /images/blog/1.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-05-08"
---

A new and again very helpful blog post from [William Lam](https://twitter.com/lamw). Please find [here](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html) William's complete article with all comments.

Always a pleasure to read William's great posts!

Over the years, several solutions have been developed [here](https://www.virtuallyghetto.com/2014/08/new-vmware-fling-to-improve-networkcpu-performance-when-using-promiscuous-mode-for-nested-esxi.html) and [here](https://www.virtuallyghetto.com/2017/04/esxi-learnswitch-enhancement-to-the-esxi-mac-learn-dvfilter.html) to help reduce the [impact of promiscuous mode](https://www.virtuallyghetto.com/2014/08/new-vmware-fling-to-improve-networkcpu-performance-when-using-promiscuous-mode-for-nested-esxi.html), which is a requirement for running Nested ESXi as a workload. Although these solutions worked extremely well, it however did require users to install additional software to enable this functionality. The most recent solution was a new [Learnswitch VMkernel modul](https://www.virtuallyghetto.com/2017/04/esxi-learnswitch-enhancement-to-the-esxi-mac-learn-dvfilter.html)e (released as a VMware Fling) that enables MAC learning capabilities on ESXi.

Today, I am pleased to announce that with the release of vSphere 6.7, the MAC Learning functionality is now available as a native feature of the VMware Distributed Virtual Switch (VDS) and as some of you may have guessed from the title, promiscuous mode is also no longer a requirement for running Nested ESXi! I wanted to take a moment and thank Subin, Jobin, Sriram, Rajeev & Samuel from our Network and Security Business Unit (NSBU) at VMware who worked tirelessly to get this integrated and productized into ESXi. Not only will this benefit Nested ESXi workloads but also other solutions and use cases that have historically required the use of promiscuous mode. For customers who are still running ESXi 6.0 or 6.5, you should continue to use the Learnswitch Fling until you fully upgrade to vSphere 6.7.

To use the new MAC Learning functionality, you will of course need to upgrade to vSphere 6.7 (both vCenter and ESXi) but also upgrade to the latest VDS version which is 6.6. MAC Learning can be enabled on a per Distributed Virtual Portgroup bases and today, it is only available when using the vSphere API. For those that have used the VDS API to manage their VDS, you will simply use the existing [ReconfigureDVPortgroup\_Task()](https://vdc-repo.vmware.com/vmwb-repository/dcr-public/fe08899f-1eec-4d8d-b3bc-a6664c168c2c/7fdf97a1-4c0d-4be0-9d43-2ceebbc174d9/doc/vim.DistributedVirtualSwitch.html#reconfigurePort) method and in 6.7, there now a new [**macManagementPolicy**](https://vdc-repo.vmware.com/vmwb-repository/dcr-public/fe08899f-1eec-4d8d-b3bc-a6664c168c2c/7fdf97a1-4c0d-4be0-9d43-2ceebbc174d9/doc/vim.dvs.VmwareDistributedVirtualSwitch.MacManagementPolicy.html) property which allows you to enable and define your MAC Learning settings. This new MAC Management Policy will also be the new preferred method for managing security policies going forward for a DV Portgroup and the previous security policy settings should no longer be used.

**Disclaimer:** Nested ESXi is still not officially supported by VMware. Please use at your own risk. 

To demonstrate the new MAC Learning APIs, I have created two small PowerCLI functions called **Get-MacLearn** and **Set-MacLearn** which you can download from [here](https://github.com/lamw/vghetto-scripts/blob/master/powershell/MacLearn.ps1). You will need to make sure to download the latest [PowerCLI 10.1.0](https://code.vmware.com/web/dp/tool/vmware-powercli/10.1.0)release which adds support for vSphere 6.7

The Get-MacLearn function can be used to retrieve the current MAC Learning configuration for a given DV Portgroup, simple run the following command which can accept a one or more DV Portgroup names:

![MAC Learning](/images/blog/1.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

As we can see from the output, I currently do not have MAC Learning enabled on this DV Portgroup. We can also see new properties such the limit which defines maximum number of MAC Addresses that can be learned (4096 max) and limitPolicy which defines the switching policy (drop or accept) when exceeding the learned MAC Address limit. As mentioned earlier, the new Mac Management interface should be used to manage security policies and as part of the output, I have also include both the new and legacy security policy settings.

The Set-MacLearn function can be used to enable MAC Learning as well as specifying the security policies for a given DV Portgroup. For Nested ESXi usage, you will want to set the following:

- **MAC Learning:** true
- **Promiscuous mode:** False
- **Forged Transmit:** True
- **MAC Changes:** False
- **Limit:** 4096 (optional, default is provided in the function)
- **Limit Policy:** Drop (optional, default is provided in function)

![MAC Learning](/images/blog/2.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

Once the reconfiguration has completed, we can re-run the Get-MacLearn function to confirm our changes as shown in the screenshot below:

![MAC Learning](/images/blog/3.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

At this point, you are now ready to start deploying your Nested ESXi workloads to this DV Portgroup or if you performed this operation on one of your existing DVPortgroup, you have now disabled the need for promiscuous mode!

Lastly, I wanted to share one additional tool that can be useful get more information about the current learned MAC Addresses which is only available directly on the ESXi Shell. The utility is called netdebg and below are a few examples on how to use it.

**Note:** Please note, this tool is meant for debugging purposes and there are no guarantees this will continue to work the same way in future releases.

To list all switches both VSS and VDS, run the following command:

![MAC Learning](/images/blog/4.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

To check whether a given powered on VM's DV Port has MAC Learning enabled, you can run the following and specify the DVPortID as well as the name of your VDS (which you need to use _sxcfg-vswitch -l_ or _sxcli network vswitch dvs vmware_ _list_ to retrieve):

![MAC Learning](/images/blog/5.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

To retrieve all learned MAC Addresses on a given DV Port,you can run the following and specify the DVPortID as well as the name of your VDS (which you need to use _esxcfg-vswitch -l_ or _esxcli network vswitch dvs vmware list_ to retrieve):

![MAC Learning](/images/blog/6.jpg)

Photo courtesy of [William Lam](https://www.virtuallyghetto.com/2018/04/native-mac-learning-in-vsphere-6-7-removes-the-need-for-promiscuous-mode-for-nested-esxi.html)

In the screenshot above, the first address (d5:d6) is actually a VM running on top of my Nested ESXi VM and the second address (5c:98) is my Nested ESXi VM's vmnic0. MAC Address entries will age out automatically between 10-20 minutes and no additional steps are required to clear out old learned entries.

Thanks again [William](https://twitter.com/lamw) for this great article, always very helpful!
