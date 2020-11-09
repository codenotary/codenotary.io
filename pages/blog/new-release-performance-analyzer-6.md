---
title: "New Release: Performance Analyzer 6"
image: /images/blog/k8scontainerproc.png
tags: ["Ops", "opvizor"]
date: "2019-05-09"
---

After several months of hard work and hundreds of customer interviews to gain valuable feedback, we're absolutely thrilled to announce the general availability of Performance Analyzer 6!

This release is huge, as we pretty much changed, updated or improved every single component. The most obvious change from a visual perspective: 

we upgraded to Grafana 6 (one of the best open source projects out there) as our dashboard engine.

The changes behind the scenes are countless, as we moved to a complete new micro service architecture, that allows much more scalability and flexibility than ever before. 

One of the biggest improvements to start with: As a VMware vSphere user, that runs Kubernetes and container on top of ESXi you will gain a transparency and visibility like never before and not available anywhere else. 

But lets cover all new features of Performance Analyzer 6 step by step:

**New platform**

- new base OS (Ubuntu 18.04)
- complete micro-service infrastructure (improved scalability and maintenance)
- new Dashboard-Engine ([Grafana](https://www.grafana.com) 6)
- Prometheus Backend support

**New extensions**

- [Nutanix](http://www.nutanix.com) support (including qcow2 images)
- [Kubernetes](https://kubernetes.io/) native integration
- Kubernetes on VMware vSphere (K8s Node NUMA to VM NUMA to ESXi NUMA)
- Kubernetes Pod to Container Process mapping
- [Istio](https://istio.io/) metrics
- Docker and Kubernetes container log analysis (Beta)
- Google Stackdriver (Beta)
- Amazon AWS
- Microsoft Azure (Beta)
- Elasticsearch (Filebeat)

Kubernetes Pod to Container Process mapping, to get Context switch information of the container when drilling down from the Kubernetes node:

![Context switches Pod](/images/blog/k8scontainerproc.png)

NUMA information for Kubernetes Nodes

![Kubernetes Node NUMA information](/images/blog/k8snode_numa.png)

VMware / Kubernetes Starter Information

![Kubernetes NUMA Starter](/images/blog/starter_vmk8snuma.png)

Kubernetes Pod metrics

![Performance Analyzer 6 Pod metrics](/images/blog/kubernetes-pod.png)

**Data Crawler**

- Names in Metrics are now Case-sensitive and we have added support for certain special chars
- added support for Oracle Pluggable Databases (Container)
- Automatic Dashboard loading for Extensions
- Automatic Healthcheck for Timeseries Database API Availability
- Updated Netapp Ontap 9 latest version support

**Fixes**

- Certain Values for Numa-Metrics were silently dropped.
- Updated Oracle SDK

**New dashboards**

- for all new extensions
- VMware Licensing Overview Dashboard

Let's get started - Just download and import the virtual appliance into your VMware or Nutanix environment and 15 minutes later you'll see the dashboards getting populated with some of the most in-depth information you can find in the whole industry.

15-day free trial built-in, 30-day free trial when registering within the appliance - no excuses!

**Important information for existing customers**

As we wanted to get the release out, but couldn't spend much time on the data migration part, this release is for new installation only. 

If you're an existing Performance Analyzer customer you could either deploy the new appliance next to the version 5 and switch at some point in time, or be a bit patient, as we plan to release a upgrade patch within the next 1,5 months.
