---
title: "How we use New Relic's Docker integration at Opvizor"
image: /images/blog/wpid-docker.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-26"
---

# How we use New Relic and Docker at Opvizor

[New Relic](http://www.newrelic.com/ "New Relic"), Inc, the software analytics company, announced recently an addition of features for [Docker](https://www.docker.com/ "Docker ") container monitoring, currently in open public beta. 

Docker is now widely used, or at least evaluated, in enterprise environments for its strong modularization and application distribution capabilities. Docker containers can be described as runtime environments with many of the core components of a virtual machine and isolated services of an operating system, especially designed to make packaging easy and execution of services smooth. 

## Docker Container Technology

Container technology such as Docker provides an ideal environment for deployment of services with regards to speed, isolation management, and lifecycle.

![Docker at Opvizor](/images/blog/wpid-docker.png)

Docker’s popularity has soared since it was introduced and, up until now, it has been an issue to get quality insights into the containers resource usage and its impact on application performance.

New Relic analysis capabilities promise to solve this problem, by connecting to Docker containers and providing the same feedback as it currently does for the other types of hosts. The technology includes:

- Possibility to compare application performance before and after deployments
- Monitor transactions in order to pinpoint the cause of performance bottlenecks
- Transactions are traced across tiers and services of an app to provide end-to-end visibility

Having the possibility to track these metrics within Docker containers will be another step towards widespread adoption of Docker and adaption to its features. For more information on how to enable New Relic for Docker containers, check [https://docs.newrelic.com/docs/servers/new-relic-servers-linux/getting-started/new-relic-servers-docker](https://docs.newrelic.com/docs/servers/new-relic-servers-linux/getting-started/new-relic-servers-docker "https://docs.newrelic.com/docs/servers/new-relic-servers-linux/getting-started/new-relic-servers-docker")

## Opvizor on-premise

Here at opvizor, we use Docker on our on-premise version, taking advantage of containers to provide the best multi-functional application on a single virtual machine that our customers can deploy in their datacenter. When making the decision to choose Docker, even at the very early stages of its development, we took into account how its potential could help us implement a robust, secure, easy-to-deploy application. Our expectations have been met and we have been improving it as Docker itself has been steadily releasing new features.

## Opvizor and New Relic

We also currently use New Relic to monitor our cloud platform in terms of resources and bottleneck identification. It has proven very important for our record of minimal downtime since its adoption.

![New Relic at Opvizor](/images/blog/wpid-newrelic.jpg)

With new relic’s announcement of docker support, our developers can now also have an overview on containers data. This will help opvizor’s team to optimize resources and transactions also on the on-premise edition, enhancing its performance to ensure the most efficient use of customer’s datacenter resources.

## Opvizor offering

Opvizor aims to deliver both on-premise and cloud solutions to its customers, encompassing the whole spectrum of users. The ones with constraints regarding using an application outside their datacenter have the possibility to choose our on-premise version, dockerized, and soon monitored by New Relic. For users which the main concern is to save resources on their own datacenter, we offer a cloud version already monitored by New Relic.
