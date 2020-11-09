---
title: "So .... Containers are the Future ... or Not?"
image: /images/blog/wpid-bigstock-Whale-tale-73547695.jpg
tags: ["Ops", "opvizor"]
date: "2015-11-03"
---

A lively debate has broken out among app developers. Is virtualization going to die out, leaving containers to carry the load on bare metal? Or, are containers lacking critical features that would make them viable to replace what we know as the cloud today?

No one questions the viability of today's cloud. It's been finally accepted by even some of the industries most resistant to change, such as finance. The question is whether the cloud will live on as Docker containers or if it will continue to thrive as the [virtualized cloud](http://www.businessnewsdaily.com/5791-virtualization-vs-cloud-computing.html "virtualized cloud"), with hypervisors and all.

Part of the determining factor will be political. There are schools of thought on both sides of the issue, and there really is no point in debating what may or may not play out in businesses and industries across the globe. The other determining factor, of course, will be technical.

## Containers Can't Easily Be Debugged

![Docker container deep dive](/images/blog/wpid-bigstock-Whale-tale-73547695.jpg)

_Docker does a whale of a job with some things, but there are some obvious gaps keeping it from overtaking the virtualized cloud._

One issue is the [difficulty of debugging containers](http://pothibo.com/2015/7/how-to-debug-a-docker-container "difficulty of debugging containers"). The school of thought now is, if one container goes bad, kill them all and start over. However, this is not a good long-term solution for replacing virtualization. The virtualized cloud can be debugged and preserved, making it a far better option than Docker containers at present. Unless containers [can be better debugged](https://blog.ruxit.com/how-to-monitor-docker-containers/ "can be better debugged"), they won't become a suitable replacement for the virtualized environment.

## Containers Can't Be Migrated Among Environments While Live

Additionally, Docker containers need to be able to be migrated, that is, moved about better on premises, in the cloud, and among cloud environments. Containers just aren't that mobile when up and running in their current condition. However, there are changes on the horizon that could improve this issue dramatically. Developers of the Docker service Flocker are working on a service designed to [tackle the issue of Docker container portability](http://thenewstack.io/flocker-a-nascent-docker-service-for-making-containers-portable-data-and-all/ "tackle the issue of Docker container portability"). 

No word just yet on exactly when that service might be available. 

## Containers Can't Provide Adequate Security

![Container Security](/images/blog/wpid-bigstock-Computer-security-81309437.jpg)

In an age where security is paramount, Docker containers are inherently insecure. This will prevent it from being useful in most organisations.

Lastly, containers are [not secure enough](http://thenewstack.io/the-new-stack-analysts-show-9-dockers-inherent-lack-of-security-the-black-hat-view/ "not secure enough") to take on the workloads now trusted to the virtualized cloud. Most cloud vendors build security into their systems from the ground up. Docker containers depend on the operating system for their security, which is to say, the containers themselves are inherently insecure.

At present, it's up to the developers to build in security to Docker containers. Unfortunately, developers just aren't security experts. There are a few tools available to put a little security into a container infrastructure, but it's inadequate. In addition to securing the containers, there needs to be a means to protect containers against data loss, as well as a way to encrypt the data held in containers.

Need a better way to keep up with all things VMware? Visit Opvizor and [register](https://www.opvizor.com/register/ "register") for the Health Analyzer today.
