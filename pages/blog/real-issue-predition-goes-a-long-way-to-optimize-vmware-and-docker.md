---
title: "Real issue prediction goes a long way toward optimizing VMware and Docker"
image: /images/blog/wpid-Ruxit.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-07-29"
---

[Ruxit](http://www.ruxit.com/), a rising star in the APM space that started last year as a privately funded startup under the [Dynatrace](http://www.dynatrace.com/) umbrella, caught our attention some time ago and we decided to integrate it into the monitoring suite we use internally to run our Opvizor cloud services. 

Ruxit is definitely different from most products I’ve seen so far and it offers a glimpse of how application performance monitoring in a fluid datacenter will look in the future. It has great architecture and is focused on delivering ideal customer service experience. One sentence from Bernd Greifeneder, CTO of Ruxit, gives you an idea of their plans. He wants to create a MDP – the maximum disrupting product – you can read more about that here:

[Beyond the IPO Hype – Why we decided to become a private company again](https://blog.ruxit.com/beyond-ipo-hype-decided-become-private-company/ "Beyond the IPO Hype – Why we decided to become a private company again")

![How we use ruxit for VMware and Docker](/images/blog/wpid-Ruxit.png)

Support for Amazon Web Services, VMware and Docker as well as the databases we use was a key factor in our decision to use Ruxit not only for our server monitoring but also for application performance management.

Ruxit is special because it takes the end-to-end view very seriously, integrating an infrastructure-level view with the application level, including user response times. That caught our interest as we’re running our environment on top of VMware vSphere, having virtual machines running applications but also VMs using Docker containers, running applications inside of the container. Probably a lot of today’s companies that speak about DevOps are operating like this.

![Ruxit Datacenter Overview](/images/blog/wpid-ruxit_overall.png)

### VMware Virtualization

Most people already know virtualization technology but there is still some misunderstanding between containers and virtual machines. In our opinion one cannot replace the other, but they work well together. While Docker gives us more flexibility and mobility of our services, VMware gives us these features on the infrastructure level.

Running more than 50 virtual machines using mixed operating systems (Linux & Windows) on top of a physical server is only possible using virtualization. If you only run Linux you may be able to get by with container technology only.

Furthermore, virtualization technology makes you hardware independent, which simplifies online migration (vMotion, Storage vMotion), improves availability, and facilitates disaster recovery – just to name some of the benefits.

VMware runs fine without Docker, and Docker runs fine without VMware – but the combination of VMware and Docker, or better VMware as a platform for providing virtual machines running Docker, makes the most sense.

Ruxit learns about your VMware environment after the Ruxit security gateway is installed and the vCenter connection is configured. Some minutes later the VMware monitoring of virtual machines and ESXi hosts begins with the typical server uptime monitoring and the most common performance data. Installing agents into within each VM makes sense because it allows for server performance monitoring (as well as application monitoring) from inside the virtual machines.

Having opvizor [Health Analyzer](http://try.opvizor.com/health-analyzer "Health Analyzer") additionally makes perfect sense, as virtual machine misconfiguration is one of the main causes of slow performance and instability. Following the [Health Analyzer](http://try.opvizor.com/health-analyzer "Health Analyzer") recommendations and after checking for performance gains within the VMs and the applications, Ruxit gives you a 360 degrees view.

### Docker Container

Container technology such as Docker provides an ideal environment for deployment of services with regards to speed, isolation management, and lifecycle. Microservices is often mentioned together with Docker.

Docker’s popularity has soared since it was introduced, but gaining deep insights into container resource usage and the impact on application performance has been a challenge. Furthermore performance metrics from the application or database alone cannot give you the full picture. You must know about the infrastructure below.

The Ruxit Agent automatically detects Docker containers and begins monitoring of the containers as well as the applications running inside the containers!

![Ruxit - Docker overview](/images/blog/wpid-ruxit_docker.png)

## End-to end monitoring using Ruxit

Ruxit analysis capabilities solved this problem for us by connecting our VMware infrastructure, the virtual machines, and the Docker containers into a great end-to-end view, including dependencies! You can easily drill down from your datacenter overview into your vCenter, VMs, and ESXi Hosts to see consumption and performance metrics for all virtual machines.

![VMware and Docker - Ruxit VMware ESXi View](/images/blog/wpid-ruxit_host.png)

![VMware and Docker - Ruxit VMware VMs View](/images/blog/wpid-ruxit_vms.png)

Some of the features we use internally:

- Root cause analysis

- Checking for dependencies

- Possibility to compare application performance before and after deployments

- Monitor transactions to pinpoint the causes of performance bottlenecks

- Transactions are traced across tiers and services of an app to provide end-to-end visibility


Ruxit is hosted in Amazon Web Services using globally distributed clusters (for example, European customers data privacy issues are addressed via the European Amazon cloud, US-based customer issues are managed via the US-based cloud). Of course all services are multi-tenant and offer high-availability and horizontal scalability.

More information about:

[Ruxit](https://ruxit.com/product-tour/)

[Ruxit supported technologies](https://ruxit.com/supported-technologies/#supportedtechnologies)

[Ruxit for Docker containers](https://ruxit.com/docker-monitoring/)

[Ruxit for VMware vSphere](https://ruxit.com/vmware-monitoring/ "Ruxit for VMware vSphere")

## Use Cases

You can expect more use cases in this blog about Ruxit, Health Analyzer and VMware over the next weeks, so stay tuned.

## Summary

We definitely love the new technologies that are used in our datacenter but are also open to improving troubleshooting and simplifying DevOps and sysadmin responsibilities. Ruxit is pretty unique with its use of artificial intelligence to find issues through the stack over time. That’s definitely a better way of finding anomalies than just using a baseline. Therefore we would recommend using Opvizor and Ruxit instead of other anomaly detection software to get a complete 360 degree view of your vSphere environment.

To be clear, you don’t need to run VMware and Docker together in the same infrastructure to get all the product benefits of Ruxit. Ruxit is all about issue prevention, root cause analysis, and performance optimization.

We encourage you to check out  as well as our [Health Analyzer](https://www.opvizor.com/register) and [Snapwatcher](http://www.snapwatcher.com/) solutions as they allow you to use their functionality for free for a limited time. So the only thing you need to spend is a little bit of time. We do all the rest!

For users whose main concern is saving resources in their own datacenter, we offer a cloud version that is already monitored by Ruxit.
