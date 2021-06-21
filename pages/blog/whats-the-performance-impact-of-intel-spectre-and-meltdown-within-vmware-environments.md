---
title: "What´s the performance impact of Intel Spectre and Meltdown within VMware environments"
image: /images/blog/spectre_teaser.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-03-13"
---

# Two massive security flaws: Intel Spectre and Meltdown with VMware environments

We want to share this summary very important topic and show some interesting links regarding these two massive security flaws. There are many blog posts and tips going around, here is an abstract.

[![Intel Spectre and Meltdown](/images/blog/spectre_teaser.png)](https://try.opvizor.com/perfanalyzer)

Please scroll down for this important issue and learn how to check your environment and track your remediation!

First of all, [here](https://kb.vmware.com/s/article/52337) is VMware's article regarding this issue:

## Purpose

VMware is aware of the CPU vulnerabilities that may result in side-channel analysis due to speculative execution, which impacts, amongst other products, VMware vSphere ESXi. Ensuring customer security is our top priority.

VMware has released updates and patches which mitigate known variants of the speculative execution vulnerabilities identified by CVE-2017-5753, CVE-2017-5715 (Spectre), and CVE-2017-5754 (Meltdown). As is our practice, VMware will continue to assess any further security risks, and will continue to provide updates and patches as appropriate.

Customers have inquired if there may be a performance cost associated with either the VMware mitigations, or mitigations of the guest operating systems as released from the OS providers. This knowledge base article will be used as the centralized document for which performance data relating to the speculative execution mitigations published.

This document will focus on Performance data related to Spectre/Meltdown. Please review KB52245: VMware Response to Speculative Execution security issues, CVE-2017-5753, CVE-2017-5715, CVE-2017-5754 (aka Spectre and Meltdown) for a holistic view on VMware’s response to these issues.

## Resolution

VMware is currently evaluating the performance costs of the Meltdown/Spectre mitigations for VMware products. We plan to test with a wide variety of workloads using both unpatched and patched guest operating systems to provide a comprehensive view of relevant performance characteristics. We will be updating this KB with our data as results become available.

[![Spectre and Meltdown](/images/blog/Meltdown-Specte.png)](https://vinfrastructure.it/2018/01/meltdown-spectre-vmware-patches/)

[](https://vinfrastructure.it/2018/01/meltdown-spectre-vmware-patches/)

[Photo courtesy of](https://vinfrastructure.it/2018/01/meltdown-spectre-vmware-patches/) [Andrea Mauro](https://vinfrastructure.it/2018/01/meltdown-spectre-vmware-patches/)

## [Rafia Shaikh](https://twitter.com/shaikhrafia) wrote on [Wccf (Where Consumers Come First) tech](https://wccftech.com/):

VMware has started to reissue patches and workarounds for its affected Virtual Appliance products that are vulnerable to the [Meltdown and Spectre security flaws](https://wccftech.com/intel-affected-by-critical-kernel-bug-amd-hit/). The company said its VMware VA products, including vCloud Usage Meter (UM), Identity Manager (vIDM), vCenter Server (vCSA), vSphere Data Protection (VDP), vSphere Integrated Containers (VIC), and vRealize Automation (vRA) are affected.

Publishing its advisory, the firm said that CPU data cache timing can be abused to “leak information out of mis-speculated CPU execution, leading to (at worst) arbitrary virtual memory read vulnerabilities across local security boundaries in various contexts.” If successful, the exploitation can lead to information disclosure.

For VMware products, please check the correct advisories to learn more about the workaround until permanent fixes are made available:

- vCloud Usage Meter (UM): [KB52467](https://kb.vmware.com/s/article/52467)
- Identity Manager (vIDM) 3.x, 2.x: [KB52284](https://kb.vmware.com/s/article/52284)
- vCenter Server (vCSA) 6.0, 6.5: [KB52312](https://kb.vmware.com/s/article/52312) \[5.5 isn’t affected\]
- vSphere Data Protection (VDP): Unavailable
- vSphere Integrated Containers (VIC): [Patch available](https://my.vmware.com/group/vmware/get-download?downloadGroup=VIC131)
- vRealize Automation (vRA): 7.x [KB52377](https://kb.vmware.com/s/article/52377) | 6.x [KB52497](https://kb.vmware.com/s/article/52497)

For more details, check out this security [advisory](https://www.vmware.com/us/security/advisories/VMSA-2018-0007.html).

## [Simon Sharwood](https://www.theregister.co.uk/Author/Simon-Sharwood) wrote on [The Register](https://www.theregister.co.uk/):

Proper patches under way, but for now - to your command lines, vAdmins! Here is an abstract of [Simon's article](https://www.theregister.co.uk/2018/02/09/vmware_temp_fixes_for_meltdown_spectre_for_virtual_appliances/):

VMware has advised on how to mitigate the Meltdown and Spectre chip design flaws in several of its products.

The workarounds cover vCloud Usage Meter, Identity Manager (vIDM), vCenter Server, vSphere Data Protection, vSphere Integrated Containers and vRealize Automation (vRA). And they're important because VMware now ships several of its products as appliances: vCenter, for example, is no longer allowed to run in a Windows VM.

The knowledge base articles for all the products state that Meltdown and Spectre can create problems for virtual appliances, explain that the mitigation tactics will stop attacks but must be considered "a temporary solution only and permanent fixes will be released as soon as they are available."

## [Andrea Mauro](http://twitter.com/#!/Andrea_Mauro) posted on [vInfrastructure Blog](https://vinfrastructure.it):

Meltdown and Spectre are critical vulnerabilities existing in several modern CPU: these hardware bugs allow programs to steal data which is currently processed on the computer. Meltdown and Spectre can affect personal computers, mobile devices, server and several cloud services.

To check if you need the patches in your vSphere environment see also this post: [Meltdown and Spectre: check a vSphere environment.](https://vinfrastructure.it/2018/01/meltdown-spectre-check-vsphere-environment/)

### Solution

- VMware **vSphere 6.5**: for ESXi apply patches [ESXi650-201712101-SG](https://kb.vmware.com/s/article/2151099?src=vmw_so_vex_amaur_427) (released on Dec, 19th 2017), ESXi650-201801401-BG, ESXi650-201801402-BG; for vCenter Server (and PSC) upgrade to version 6.5 U1e
- VMware **vSphere 6.0**: for ESXi apply patches ESXi600-201711101-SG and ESXi600-201801401-BG, ESXi600-201801402-BG; for vCenter Server (and PSC) upgrade to version  6.0 U3d
- VMware **vSphere 5.5**: for ESXi apply patches ESXi550-201709101-SG (this patch has remediation against CVE-2017-5715 but not against CVE-2017-5753) and ESXi550-201801401-BG; for vCenter Server (and PSC) upgrade to version 5.5 U3g
- VMware **Workstation 14**: update to version 14.1.1
- VMware **Workstation 12.x**: update to version 12.5.9
- VMware **Fusion 10**: update to version 10.1.1
- VMware **Fusion 8**: update to version 8.5.10

The previous version of vSphere (like 5.0 or 5.1) are no more supported, so one reason more to upgrade fast your infrastructure to a supported version!

Important note from the new VMware [KB 52345](https://kb.vmware.com/s/article/52345?src=vmw_so_vex_amaur_427) in case you have installed (or you are planning to install) VMware’s initial microcode patches ESXi650-201801402-BG, ESXi600-201801402-BG, and ESXi550-201801401-BG. Check first your processor model and family!

Intel has notified VMware of recent sightings that may affect some of the initial microcode patches that provide the speculative execution control mechanism for a number of Intel Haswell and Broadwell processors. The issue can occur when the speculative execution control is actually used within a virtual machine by a patched OS. At this point, it has been recommended that VMware remove exposure of the speculative-execution mechanism to virtual machines on ESXi hosts using the affected Intel processors until Intel provides new microcode at a later date. Check the VMware [KB 52345](https://kb.vmware.com/s/article/52345?src=vmw_so_vex_amaur_427) to verify the affected CPU.

Also, ensure that your VMs are using **Hardware Version 9** or higher (this is mandatory). For best performance, Hardware Version 11 or higher is recommended. VMware Knowledge Base article 1010675 discusses Hardware Versions.

Anyway, it’s still not enough. There are other requirements, if applicable:

- Deploy the Guest OS patches for CVE-2017-5715. These patches are to be obtained from your OS vendor.
- Update the CPU microcode. Additional microcode is needed for your CPU to be able to expose the new MSRs that are used by the patched Guest OS. This microcode should be available from your hardware platform vendor.

_For all VMs you have to power off (a guest reboot or VM reset it’s not enough!) in order to activate the hypervisor assisted protection!_

Note that actually there isn’t yet a specific patch for the other several virtual appliances from VMware (like vSphere Replication or NSX Manager), potentially there is no need of specific patches… but anyway the best way is stay tuned for future comments or news. In part the new VMware [KB 52264](https://kb.vmware.com/s/article/52264?src=vmw_so_vex_amaur_427) reply to this question.

Note that all appliances affected, must be patched, that powered off (a VM reboot it’s not enough) and then powered on again.

Please read [here](https://vinfrastructure.it/2018/01/meltdown-spectre-vmware-patches/) Andrea's complete article, there is a lot more information!

## Also [Ivo Beerens](https://twitter.com/ibeerens) published a very helpful article on his blog [IVOBEERENS.nl](https://www.ivobeerens.nl/2018/01/10/know-spectre-meltdown-vmware-environments/)

Currently these security flaws can be divided into the following categories:

![Spectre and Meltdown](/images/blog/1-1.png)

Photo courtesy of [Ivo Beerens](https://www.ivobeerens.nl/2018/01/10/know-spectre-meltdown-vmware-environments/)

Operating System patches will protect against number variant 1 and 3.  With variant 2 a CPU microcode update is required.

Ivo showed some examples and many other helpful links. Please see [here](https://www.ivobeerens.nl/2018/01/10/know-spectre-meltdown-vmware-environments/) his complete article.

And also from Ivo:

## More information:

![Spectre and Meltdown](/images/blog/1-2.png)

Photo courtesy of [Ivo Beerens](https://www.ivobeerens.nl/2018/01/10/know-spectre-meltdown-vmware-environments/)

### Thanks a lot to the whole community for all the information and your great work!

We also want to do our job in supporting you as a customer and integrated Spectre/Meltdown dashboard that can be seen as a mixture between a checkup tool and a dashboard-guided check-list.

After you selected the VMware vCenter, Datacentor or Cluster to get information from, the dashboard provides you with the current status of your environment. 

1. How many ESXi Hosts have the correct microcode or not
2. How many have VMs are patched
3. How many VMs have the correct virtual hardware version

As we can already guess that there will be a negative performance impact based on the microcode and other Spectre/Meltdown patches, there is currently no real proof or statistical validation.

Therefore, it is important to compare the performance of your past reference period to Now, after you patched the systems.

**That is exactly what we do! We let you know what performance impact just happened because of the patches. A crucial information to your infrastructure planning!**

![Intel Spectre and Meltdown Check-List](/images/blog/spectre_full.png)

Check it out by yourself and test your environment using Performance Analyzer  - Free 30 day Trial!!

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41.png)](https://try.opvizor.com/perfanalyzer)
