---
title: "Old Virtual Machine Network Devices - Low VMware Performance (Part 2)"
image: /images/blog/vlance.png)](/wp-content/uploads/2015/02/vlance.png
tags: ["Ops", "opvizor"]
date: "2015-02-12"
---

## Benefits to Solving

By upgrading from an old virtual network device, such as a Vlance adapter, to the latest VMXNET3 paravirtualized drivers, **VMware performance for the virtual machine can be dramatically improved**.  
This is because a Vlance adapter creates many more unnecessary IRQ requests compared to a VMXNET3 and a Vlance is not able to use any of the physical NIC features to offload and optimize network packets.  
Therefore older network virtual network devices can cause slow VMware performance for the VM they are attached to as well as negatively affect all other VMs due to the noisy neighbor syndrome.

## Ease of Solving

The easiest way to solve this issue is to use the following four-step process. (Note that the virtual machine must be rebooted to update the virtual network adapter type.)  

1. Upgrade the virtual machine hardware by:

1. Shutting down the virtual machine
2. Right-clicking on the virtual machine
3. Going to "All vCenter Actions", to "Compatibility", and then clicking on "Upgrade VM Compatibility"
4. Select the new VM compatibility mode to the latest compatibility mode which, as of today, is ESXi 5.5 and later, then click OK

3. Add a new virtual network adapter by:

1. Clicking "edit settings" for the virtual machine
2. Clicking on "Select" next to New Device
3. Clicking on "Network"
4. Clicking "Add" then setting the new virtual network device’s network to match the current network of the out of date virtual network adapter
5. Expanding the virtual network device
6. Setting the adapter type to the latest version (which at this time is VMXNET 3)

5. Remove the old virtual network adapter (which is still in settings) by clicking on the X next to the old adapter, then clicking OK
6. Power On the virtual machine and, once booted, reconfigure the new virtual network adapter with the IP configuration of the old virtual network adapter.

  

## How opvizor helps

In order to prevent poor VMware performance slowing down the application as a result of outdated network adapters, opvizor is able to quickly identify the virtual machines that run such virtual network adapters (Figure 1). With this information, you’ll be able to update the virtual machines that are out of date and prevent application performance issues before they impact users. [![old VMware NIC causing bad VMware performance - opvizor](/images/blog/vlance.png)](/wp-content/uploads/2015/02/vlance.png)  
Additionally, you’ll be able to eliminate the finger pointing that all too commonly occurs when there is poor network performance in the virtual infrastructure.  
[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)  
  
[CHECK Part 1](https://www.opvizor.com/?p=5012)
