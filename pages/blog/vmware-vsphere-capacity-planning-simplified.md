---
title: "VMware vSphere Capacity Planning simplified"
image: /images/blog/headline.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-09-27"
---

No matter how well a infrastructure is designed and a certain buffer is planned, you always need to keep the procurement time to get new hardware in mind. It´s extremely important to start planning ahead when new virtual machines are going to be deployed soon. 

![Capacity Planning](/images/blog/headline.png)

We support capacity planning by selecting template VMs in your running infrastructure and multiplying their real load to predict potential future usage. While all features are preconfigured (as always to make it as simple as it gets for our customers) you can tweak pretty much everything to fit your needs.

The first thing you see after loading our dashboard is the help - wait a minute! Just to make sure you know where to get all that:

[Download the Dashboard here](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch)

Import it like that:

![Import the dashboard](/images/blog/import_db.png)

### availability rate

### scale up rate

### number of vm 1

### sample vm 1

### number of vm 2

### sample vm 2

How many must be up and running

rate

working hosts

0.5

1 out of 2 working

0.67

2 out of 3 working

0.75

3 out of 4 working

0.8

4 out of 5 working

0.9

9 out of 10 working

1

all Hosts working

Calculate with bigger infrastructure

rate

Infrastructure size

1

current size

1.25

add 25% additional resources to infrastructure

1.6

add 60% additional resources to infrastructure

2

double the infrastructure

2.5

add 150% additional resources to infrastructure

select the number of sample vm 1 for the calculation

select the vm 1 used for calculation

select the number of sample vm 2 for the calculation

select the vm 2 used for calculation

The assessment is based on a 85% limit for Memory and CPU Usage. It can be changed by editing the threshold values and value mappings within the panels.

The help explains how to use the navigation to chose the different VM templates including the number of future systems and the expected load for calculation (Percentile of the selected historic timerange).

![Capacity Planning Navigation](/images/blog/navigation-3.png)

The result is a overall view of your infrastructure and if the new virtual machines still fit into it. If they don´t fit you see the a capacity planning information, what percentage (CPU or Memory) the new systems exceed the available infrastructure.

![Exceeds or not](/images/blog/headline-1.png)

Of course you can use the availability rate to take redundancy into account and the scale up rate to plan additional ESXi host resources.

![VMware vSphere Capacity Planning results](/images/blog/capacity_planning_dashboard2.png)

The rows below the overall view show the used template VMs and the required virtual hardware as well as the utilization according to real historic data.

You can give Performance Analyzer a free run by downloading here and import the dashboard.
