---
title: "3 Things You Always Wanted to Know about Docker container but Were Afraid to Ask"
image: /images/blog/wpid-510d0a85af1e4f0ab914d0c7baf42fae.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-10-15"
---

Docker has gotten a lot of attention recently. In fact, some claim that Docker containers will eventually take over hypervisor virtualization. While that remains to be seen and really isn't the scope of this discussion, it is important to be aware of Docker containers because the technology is gaining in popularity and is a determining factor in the future of VMware. Here are all the questions you always wanted to ask about Docker but were afraid to.

### 1\. What Are Docker Containers?

![Docker containers](/images/blog/wpid-510d0a85af1e4f0ab914d0c7baf42fae.jpg)

You can use Docker with Linux, Mac, or Windows, on virtually any device that you use for application development. This flexibility makes it incredibly popular with developers..

You can use Docker with Linux, Mac, or Windows, on virtually any device that you use for application development. This flexibility makes it incredibly popular with developers.

Containers are often referred to as '[lightweight virtualization](http://www.how2vm.com/docker-questions-answered/ "lightweight virtualization")'. However, that's not a good description. Docker containers are a technology that gives the user the ability to run an application in a totally isolated environment, called a container. If you are familiar with \*NIX, containers are very similar to the concept of chroot-ed applications.

Though Docker is a relative newcomer, [first released in March of 2013](https://en.wikipedia.org/wiki/Docker_(software) "first released in March of 2013"), the concept of running applications in a container environment is not new. Other examples include Solaris Zones and FreeBSD Jails (\*NIX), OpenVZ (Linux), etc. That means a container is an OS resource partition and not a hardware partition like Virtualization.

## 2\. What's the Difference in Docker and Other Container Technologies?

Docker, unlike some other similar technologies, was developed after the cloud became what it is. That means that it was developed from the ground up as a cloud-era solution, instead of cloud being an afterthought. Another benefit of being new to the game of containers is that the development team is still excited about it, meaning new versions are coming out quickly and improvements between versions are significant.

Other ways in which Docker containers are different from other container technologies are:

- Docker is able to run on [any infrastructure](https://www.docker.com/ "any infrastructure"), including Linux, Max, Windows and on any machine, including desktops, laptops, the mainframe, or in the cloud.
- Docker includes a Container HUB, which is essentially a repository of pre-built containers that are ready for users to download and make use of. These containers can also be shared with any applications you create.
- Docker comes with much better documentation that most of the alternatives.

## 3\. How Are Docker Containers Different from vSphere?

Docker does not require to bundle the OS layer (container) that is necessary for a Virtual Machine based on virtual hardware (VMware vSphere), which is another thing that makes it popular with developers. The time and trouble saved with these steps makes deployment of Docker containers faster and easier.

Running an application in a virtualized environment like VMware vSphere requires that you first create a VM, then install the operating system, and finally deploy the application. Docker is so much lighter. In Docker, you just deploy the application within the dockerized container. You don't have to set up an OS layer. The application deploys with all of its associated libraries, kernel, etc., which the Docker engine provides.

This low footprint and ease are some of the reasons that VMware partnered with Docker. It's one of the evolving technologies that is making the entire platform more powerful, flexible, simple, and useful.

You should also check out other posts about Docker and especially how to monitor container using different tools.

[Full-Stack Docker performance monitoring](https://blog.ruxit.com/full-stack-docker-performance-monitoring-containers-and-applications/ "Full-Stack Docker performance monitoring")

Looking for a better way to keep up with VMware vSphere, virtual containers and other things related to VM? [Sign up for our newsletter today!](http://opvizor.us6.list-manage.com/subscribe?u=5e67b89e18341af0e8844b002&id=1e918cd24e "Sign up for our newsletter today!")
