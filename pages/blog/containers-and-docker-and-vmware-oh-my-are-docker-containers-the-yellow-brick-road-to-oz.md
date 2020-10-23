---
title: "Containers and Docker and VMware, Oh My! Are Docker Containers the Yellow Brick Road to Oz?"
tags: ["Ops", "opvizor"]
date: "2015-10-20"
---

Containers aren't new. In fact, that technology has been around for years in the form of Linux containers, which Google and other big-name tech companies got on board with and pushed heartily. But containers were a quiet, in the background kind of thing until [Docker hit the scene](http://www.thevirtualist.org/c2v-my-thoughts-on-docker-container-to-vm-conversion/ "Docker hit the scene") a few years ago. Now the big buzz is whether or not containers will replace virtualization or whether virtualization will squeeze out containers. As it happens, there is room for both. In fact, there is a need for both, and the two can actually support each other.

## Are Docker and VMware compatible?

![Docker and VMware - compatible?](/images/blog/wpid-bigstock-Engineer-Repair-Server-80393855.jpg)

I guess the better question is, are Container and virtual machines compatible. Both technologies are evolving rapidly. It's impossible to tell which one will surpass the other, or if there will remain a big place for both.

According to [Kit Colbert, VMware's vice president and CTO of Cloud-Native Apps](http://thenewstack.io/amid-container-vs-vm-hype-vmware-draws-docker-closer/ "Kit Colbert, VMware's vice president and CTO of Cloud-Native Apps"), "Docker has made significant inroads on reducing complexity and offered greater simplicity and agility for developers. A lot of people in the industry are excited by that, and we're all trying to figure out how to take what's happening here and make sure it really works in practice for customers." At a recent VMworld, [VMware announced a partnership](http://ir.vmware.com/releasedetail.cfm?releaseid=867568 "VMware announced a partnership") with Docker, Google, and Pivotal.

[Docker isn't actually a container technology](http://www.zdnet.com/article/vmware-goes-container-crazy-with-vsphere-integrated-containers/ "Docker isn't actually a container technology") [](https://blogs.vmware.com/cto/vmware-containers-containers-without-compromise/ " ") alone, at least not for now. Right now, Docker is really just a container packaging technology that developers can leverage much like [VMware vSphere](http://www.zdnet.com/article/vmware-goes-container-crazy-with-vsphere-integrated-containers/ "VMware vSphere"). That means that Docker isn't a threat for now, but if it develops into a consolidation product (which it will), it will become a direct competitor to virtual machines.

However, Docker isn't in the clear completely. VM can tout the VMware monitoring capabilities, its maturity, and superior security. Docker is no stranger to criticism about its security, or rather, its lack of. In fact, Docker doesn't even market itself as a stand alone solution, preferring the adage, "better together".

## Where VM's Efforts are Concentrated

![Happy customers need both right now.](/images/blog/wpid-bigstock-Thumbs-Up-for-Happy-Customers-76813754.jpg)

Containers aren't yet well understood in the general marketplace. That could be why so many people are sticking with hypervisor technology until Docker and others prove their worth, stability, and ability to provide enterprise-grade security. Until then, VM is just focusing on happy customers.

VM is simply working towards offering its customers the best possible experience, both with hypervisor and with container technology. According to Colbert, "What we're focused on is providing the best infrastructure. Compute virtualization, network virtualization, storage technology ... What Docker represents is the best way of managing those applications, the provisioning of them. The reality is you still need an infrastructure to provision those applications on. Software doesn't run on software." Inevitably, containers plus the hypervisor will lead to a greater level of automation.

Of course, both containers and hypervisors are evolving technologies. While VM boasts a strong following, a mature structure, and a more stable, secure environment for applications, containers are young and it's difficult to say what the future might hold.
