---
title: "vSphere Performance in multi-tenant environments"
image: /images/blog/button_download-performance-analyzer-7.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-06-27"
---

Some of our Performance Analyzer customers either run environments for their tenants or build their own internal multi-tenant environments.

One of the biggest issues typically is the performance customer notice vs. the real performance. Who doesn't know the words "it was a lot faster before we moved the services", or "the last update made everything slow". 

I even remember that people complained about slow systems just because they were aware that there was an migration from physical to virtual systems. They stopped complaining the moment somebody told them, "no, you're running physical again". Then everything was great again - nobody told them, that nothing changed - systems were virtual before and after. But the rumor and the assumption that virtual systems are slower, made users complain.

So, if the customer could check the real performance of their own systems in an individual dashboard that would already be a big help. As the responsible system administrator, you typically want to all details, while the customer should see the most important data - to not raise more questions than answered.

Of course, today everything is better ;-) But, at least you have performance monitoring tools that leave no question, right? If not, you should check out [Performance Analyzer](http://try.opvizor.com/perfanalyzer).

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-7.png)](http://try.opvizor.com/perfanalyzer)

Coming back to the multi-tenant setup. Performance Analyzer supports different architectures to monitor and separate multi-tenant environments. Let's dive into it...

## Dashboards for your tenants

[![Tenant View - one month](/images/blog/monthsview.png)](http://try.opvizor.com/perfanalyzer)

Imagine your customer could see his very own environment and get a feeling about the real performance of his services, while you can see the data from all of your tenants in one single pane of glass.

## Typical multi-tenant setups

Depending on the goals you want to achieve, there are different kinds of multi-tenant setups. Sometimes the customer owns the whole environment including his own VMware vCenter but outsourced the management, sometimes the vCenter is centralized and all tenants just use their part of the resources. Another important factor is the isolation of data and what data should be seen in what environments and by whom.

### many tenants, each tenant owns a VMware vCenter

In case, each tenant runs a complete environment, including a VMware vCenter, the setup can look as follows.

![Multi-tenant environments - all vCenter](/images/blog/multi-tenant.png)

**Performance Analyzer Appliance 1 - Central Location**

In the central location the largest Performance Analyzer appliance will be deployed. All data of the central location as well as tenant1 and tenant2 location will be collected here.

This appliance is only configured to collect data from the central vCenter system. There is also a receiver listening for the data coming from the tenant appliances.

The dashboards accessible in the central location can be used to view all locations at once or separate, depending on the selection.

![vCenter selection](/images/blog/vcenter_selection.png)

**Performance Analyzer Appliance 2 - Tenant1 Location**

This appliance is configured to collect data of the local tenants VMware vCenter system, but sends the data to the local receiver as well as the central Performance Appliance receiver. Only one tcp port is used for communication and can be configured to the network needs.

**Performance Analyzer Appliance 2 - Tenant2 Location**

Similar setup as Tenant2. If there are different storage systems at the different locations or different applications running, the appliance configuration can differ. I. e. tenant2 should also gather NetApp filer data as well as MS SQL data.

### many tenants, one VMware vCenter manages all tenant environments

One very common setup is, to have only central VMware vCenter server that manage the environments of different tenants and locations. The separation is done either by vCloud Director or simply by using roles and permissions.

![multi-tenant environment with one vCenter](/images/blog/multi-tenant_singlevcenter.png)

In that case our Performance Analyzer appliance can be configured in 3 different ways.

1) Use different Performance Analyzer appliances for each tenant using the same permissions as the tenant itself. That is the simplest possible setup and it makes sure, that the tenant user only sees its own data. The downside is, to run multiple Performance Analyzer appliances. This setup makes also sense, when no merged data should be accessible by the master operator.

2) Performance Analyzer as a multi-tenant appliance. Multiple data collectors are configured to collect data using different credentials (permissions) and send the data into different time series databases. Every tenant has its own user and organization. That makes sure that the data is separated but can also be merged if needed (master operator).

3) Data is completely collected by one data collector, but the dashboards are configured to show separate data by tenant or user. This setup is pretty straightforward, but the data separation is only protected by the dashboards configuration and not by the time series database.

## Different Performance Analyzer Components

Before we dig into details, it's important to know that Performance Analyzer consists of different services (components) that can be completely separated, based on the architecture. All components can be separated to run on different appliances. That enables us to scale as well as to build efficient multi-tenant scenarios. We currently focus on time series data, but we can handle unstructured and configuration data as well. Just ask us, if you´re interested in learning more.

The **data collector** connects to the data source, i. e. VMware vCenter API, NetApp API or MS SQL Systemdb, to gather all performance and statistical data in the configured crawling interval.

The **data receiver** listens to data and decides where to write the data

The **Time Series Database** gets feeded by the data receiver and handles the data retention as well as the possible queries on the data itself.

The **Query Engine** allows to query the time series data using simple and complex functions (math, transform, aso.)

The **Graphical front-end**, in our case [Grafana](https://grafana.com), allows us to visualize the data based on the query engine that sits on top of the data. 

![Architecture](/images/blog/architecture_opvizor_1.png)

All components need to work hand in hand and know about the data stream, metrics format and collected interval to make the visualization as great as you´ll like it.

## Build your own multi-tenant environments

Start building your own multi-tenant environments and choose from the options mentioned in this article. Your customers and clients can benefit a lot by not getting kept in the dark. The moment they can see how their own systems are performing, if all services are up and running, the built trust goes a long way. 

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6.png)](http://try.opvizor.com/perfanalyzer)

You can download Performance Analyzer yourself and start a free 30 day trial. Please use our chat or our contact page to get a better idea about what multi-tenant environment option works best for you and how you can achieve the best results possible.

As we're not limited by VMware vSphere, you can add your own applications or check out our [integrations](https://www.opvizor.com/integration/) page.
