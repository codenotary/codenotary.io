---
title: "VM memory limit can cause VM memory swapping issues"
tags: ["Ops", "opvizor"]
date: "2015-03-02"
---

# VM (virtual machine) memory limit can cause VM memory swapping issues

## Introduction

When a virtual machine is moved out of a resource pool that had a memory limit, the stand-alone virtual machine can, unknown to the administrator, maintain the mem limit to which it was subjected as a member of the resource pool. Additionally, some administrators configure memory limits thinking — erroneously — that a VM memory limit should be configured to ensure that one virtual machine doesn’t monopolize the RAM on a single host.

### Impact

The impact of a **VM memory limit** is such that virtual machines may not be able to access the memory they need precisely when they need it. If a guest OS cannot access the memory that it needs, any applications running inside the guest OS will perform poorly, may even become unresponsive, or completely fail. Additionally, memory ballooning and vmkernel **vm memory swapping** may occur in a virtual machine with a mem limit even though the vSphere host may have plenty of RAM available. As is the case in the physical world (when this memory to disk swapping process takes place), the system’s overall performance is negatively impacted in a serious way since disk storage is almost never as fast as RAM. In the virtual world the vmkernel starts VM memory swapping, so writing the RAM content in a .vswp file within the home directory of the VM. That means on the datastore and not the physical RAM, slowing down extreme. A good article about the performance difference can be found here: [Troubleshooting VM Performance](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2001003). [](http://blogs.msdn.com/b/calvin_hsia/archive/2012/08/10/10338652.aspx "Performance of Memory vs. Disk")

### Ease of Detection

To find a VM memory limit, you can verify the memory configuration of each virtual machine, checking for memory limits and compare this against the actual memory assigned to a virtual machine. If you have a large number of virtual machines, this can be challenging and an automated tool that can detect memory limits is needed in medium and large virtual infrastructures.[](https://www.opvizor.com/wp-content/uploads/2015/02/memorylimit.png)

[![vm memory limit lower than configuration](/images/blog/memorylimit.png)](https://www.opvizor.com/wp-content/uploads/2015/02/memorylimit.png)

## Benefits to Solving

By removing memory limits, vSphere’s built-in memory optimization techniques can more adequately perform their role and virtual machine guest operating systems can receive the memory that they need to run applications. If the virtual machine’s memory was limited when there was host RAM available, the performance of the application in the guest OS will improve as the guest is then able to access adequate RAM. You just need to select unlimited instead of setting any limit.[](https://www.opvizor.com/wp-content/uploads/2015/02/memlimit-vm1.png)

[![VM Memory Limit - vSphere client](/images/blog/memlimit-vm1.png)](https://www.opvizor.com/wp-content/uploads/2015/02/memlimit-vm1.png)

## Solution

Removing a VM memory limit is easily done by setting the limit back to zero. Unfortunately, _finding_ memory limits can be more challenging than actually removing the limit. Without the right tools, determining whether you have any memory limits configured in your virtual infrastructure, you need to manually look through each virtual machine in your inventory by going into the settings of each virtual machine and verify whether a memory limit is configured. While it’s not difficult, the process can be very time consuming, particularly if you have a great number of virtual machines. Alternatively, you can run a PowerCLI script, like this one, to identify VMs with memory limits.

## How opvizor Helps

opvizor helps to quickly and continually notify you of any virtual system that has memory limits and additionally started VM memory swapping. opvizor doesn't leave you alone with the finding, it provides you with instructions on how to remove them, either from the GUI or using a PowerCLI script.

[

![VM memory limit causes VM memory swapping](/images/blog/memlimit.png)

](https://www.opvizor.com/wp-content/uploads/2015/02/memlimit.png)

Learn more about a typical memory related issues, opvizor automatically finds in minutes:[](https://www.opvizor.com/vm-memory-limit-with-ballooning-or-swapping/ "VM Memory Limit With Ballooning Or Swapping")

##### [**Sign Up for opvizor!**](/register)

## Author

[Thanks David Davis](http://www.actualtechmedia.com/david-m-davis/)
