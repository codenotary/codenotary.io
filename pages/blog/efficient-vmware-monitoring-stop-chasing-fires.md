---
title: "Efficient VMware Monitoring: Stop Chasing Fires"
tags: ["Ops", "opvizor"]
date: "2015-09-25"
---

Spending too much time chasing and stomping fires in your VMware environment, and not enough time cashing checks and playing video ga -- um, conducting really important business? As it happens, the bulk of problems with VMware vSphere can be boiled down into one of just a handful of causes. Fortunately, there are VMware monitoring tools available to help you track and correct these issues and get back to that really important business (MARIO KART!).

**Are the VM Tools Old or AWOL?**

![VMware monitoring - old VMware Tools](/images/blog/wpid-bigstock-Many-working-tools-in-the-box-85469660.jpg)

_A new vSphere always means a new collection of tools. You just have to remember to go get them._The VMware tools are designed to improve the performance of guest operating systems, but the tools are updated each time a new version of vSphere is released. Unfortunately, the tools do not update automatically. Hence, each time you get a new version of VMware, you discover that those tools are outdated or missing. The symptom is usually a message that reads, 'VMware Tools is out of date on this virtual machine', or many of the features simply stop working. You can [manually update those tools](https://www.opvizor.com/blog/vmware-tools-are-outdated-or-not-installed-part-1/) each time you get a new version of VMware vSphere.**Are the VM Network Devices Old?**If performance is seriously hindered, old VM devices might be the cause. Opvizor recommends a 4-step process for updating the network devices (just to be on the safe site - after the VM has been either backed up or a snapshot has been created):1. Upgrade the virtual machine hardware by:

- Update the VMware Tools to the latest version and restart the virtual machine
- Shutting down the virtual machine
- Right-clicking on the virtual machine
- Going to 'All vCenter Actions', to 'Compatibility', and then clicking on 'Upgrade VM Compatibility'
- Select the new VM compatibility mode to the latest compatibility mode which, as of today, is ESXi 5.5 and later, then click OK

2\. Add a new virtual network adapter by:

- Clicking 'edit settings' for the virtual machine
- Clicking on 'Select' next to New Device
- Clicking on 'Network'
- Clicking 'Add' then setting the new virtual network device's network to match the current network of the out of date virtual network adapter
- Expanding the virtual network device
- Setting the adapter type to the latest version (which at this time is VMXNET 3)

3\. Remove the old virtual network adapter (which is still in settings) by clicking on the X next to the old adapter, then clicking OK

4\. Power On the virtual machine and, once booted, reconfigure the new virtual network adapter with the IP configuration of the old virtual network adapter.

Opvizor can help you 

[quickly identify and remedy](https://www.opvizor.com/blog/old-virtual-machine-network-devices-part-2/)

 outdated network devices.

**Other Frequently Seen Problems**

![vSphere monitoring - old network device](/images/blog/wpid-bigstock-Virus-Alert-83571878.jpg)

_VMware does not come with antivirus or antimalware software. You have to acquire and install that separately, but it is essential for maintaining safe, well-functioning systems. You should definitely look into VMware vSphere API based Antivirus solutions._

There are some other common issues that lead to problems with your VMware environment, as well, such as:

• Inadequate 

[memory limits](https://www.opvizor.com/blog/virtual-machine-memory-limits-can-cause-vm-memory-swapping-issues/)

• Issues with 

[VM Snapshots](http://try.opvizor.com/snapwatcher/)

• Problems with 

[VM logging](https://www.opvizor.com/virtual-machine-logging-is-disabled/)

• A 

[virus on the Host or a Guest](http://kb.vmware.com/selfservice/microsites/search.do?cmd=displayKC&docType=kc&externalId=1004008&sliceId=1&docTypeID=DT_KB_1_1&dialogID=701176017&stateId=1%200%20701106296)

Fortunately, a good VMware monitoring tool can help you stay on top of these issues. Visit Opvizor to 

[get a better grasp on your VMware environment](http://try.opvizor.com/health-analyzer/)

 today, and get back to doing what you enjoy doing most -- not micromanaging your VMware.

![](http://mediashower.com/content?Action=tp&cid=30374)
