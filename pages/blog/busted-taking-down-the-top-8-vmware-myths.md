---
title: "Busted! Taking Down the Top 8 VMware Myths"
tags: ["Ops", "opvizor"]
date: "2015-10-29"
---

![VMware Myths](/images/blog/wpid-bigstock-business-people-cloud-comput-79684360-1.jpg)

_Cloud-based systems make working easier._

You've decided that using a single physical machine that runs multiple virtual machines is a way for your business to save space, energy, and money. This goal includes the use of virtual machines using different operating systems and running multiple apps run on a single physical computer by interfacing with VMware. This happens by expanding the hardware with virtual servers. Admins are freed from resolving problems on multiple machines as issues arise, allowing them to work on other projects. In addition, it decreases the quantity of servers needed, thereby decreasing expenses for hardware and the energy it takes to operate.

[VMware](http://www.forbes.com/sites/janakirammsv/2015/09/24/five-strategic-acquisitions-that-reshaped-vmware/ "VMware") virtualizes CPU and memory and emulates virtual hardware by loading a hypervisor on the physical machine's hardware. As configuration takes place, drivers from different devices are loaded. Different operating systems work with the VMware layer. In this way, changing hardware is easy since the VMware is merely reconfigured. As with any other technology, myths have grown up around the use of VMware, virtualization, and the cloud. But be aware of some VMware Myths.

**Myth: Application Performance Is Not Affected by Virtualization**

**Truth**: Some virtualization suppliers are saying that the technology they offer has no influence on the performance of applications. Putting more software in place adds another layer that could stunt performance. VM technology allows a number of applications with different operating systems to be placed on a single machine. This increases the number of apps that can be run on a single machine but does not necessarily maintain the same performance level. So, the reality is that performance may be affected, it might just be very little.

**Myth: It Is Unnecessary to Plan When Using Virtualization Software**

**Truth**: Using a virtual machine takes planning. There are issues that may surface with licensing of software and managing hybrid networks and storage systems. Taking the time to institute a plan at the start makes using virtualization easier.

![Virtualization decreases the number of servers needed.](/images/blog/wpid-bigstock-Network-Computer-Server-6256347.jpg)

_Virtualization decreases the number of servers needed. Yes, but only physically._

**Myth: Complexity Is Reduced With Virtualization**

**Truth**: Running multiple apps with different operating systems on a single unit takes special knowledge. It is more complex than running a single unit and expertise is needed. Operating multiple virtual systems may benefit from management software or a VM analysis service such as Opvizor.

**Myth: The Cloud Always Saves Money**

**Truth**: While this may be true in part, it is not necessarily true all the time, particularly at the start. In fact, only 14 percent of reasons given for using the cloud involve cost savings. The reality is that just because it is in the cloud does not mean you will save money. However, over 58 percent of businesses say their increased use of the cloud is expected to help [revenues grow](http://www.forbes.com/sites/thesba/2015/07/08/the-future-of-the-cloud/ "revenues grow ") within three years.

**Myth: Everything That Is Good Is In the Cloud**

**Truth**: This myth is becoming pervasive. The belief is that unless data is cloud-washed it does not have merit. The reality is some programs run better if they are not cloud-washed.

**Myth: The Cloud Is not Secure**

**Truth**: Currently, very few instances of data security breaches have been reported involving the cloud. It is important to check security with cloud providers as with any other provider. However, the reality is that assuming security is lacking because it is outside a company's physical environment is false.

**Myth: Changing the Memory of a Virtual Machine Does Not Involve Using Limits**

**Truth**: The memory of a virtual machine may be configured during the configuration process or VMware will automatically configure it based on Guest OS recommendations. Limiting memory may be a good idea since certain servers will try to use as much memory as they can. So, the reality is that memory limits may be used. But don´t mix [memory configuration limi](https://www.opvizor.com/vm-memory-limit/ "memory configuration limi")t (the amount of configured memory) and memory resource limit (% or amount of configured memory can be used). You can run into lots of issues if the memory resource limits are set lower than the configured memory that is seen by the Guest OS. The limitation is handled by the VMkernel and invisible for the Guest OS, leading to some very strange application behaviour.  

**VMware Myth: It Is Important to Start Out With as Many CPUs as Possible**

**Truth**: Using more virtual CPUs than you need at the start may result in a performance problem. Scheduling unneeded cores can be cumbersome, and using the CPU scheduler in VMware vSphere® is essential for performance. The CPU scheduler handles this effectively.

While many VMware myths exist, the truth is that VMware is an effective way to handle computing needs for a business. However, with every innovation comes the need to follow best practices to ensure proper function. Opvizor provides VMware vSphere monitoring to detect and identify problems and automatically offers solutions. In addition, the system is cloud-based and allows feedback within the VMware community to engage members in providing solutions to contributed problems. 

[Sign up for our newsletter](http://opvizor.us6.list-manage.com/subscribe?u=5e67b89e18341af0e8844b002&id=1e918cd24e "Sign up for our newsletter") to learn more about this online VMware optimization system.
