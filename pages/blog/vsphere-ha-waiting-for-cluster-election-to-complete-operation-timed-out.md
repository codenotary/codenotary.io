---
title: "vSphere HA Waiting for cluster election to complete Operation timed out"
image: /images/blog/reconfigha.jpg
tags: ["Ops", "opvizor"]
date: "2016-02-25"
---

Sometimes when you add a host to a VMware vCenter HA Cluster the operation fails with a timeout for cluster election. That is still happening when running VMware vCenter 6.0 and adding 5.5 hosts to it.

The normal way is to start a **Reconfigure for vSphere HA** on the troubled ESXi Host within the cluster.

![vSphere HA](/images/blog/reconfigha.jpg)

If you experience that the error message continues to pop up and the ESXi host is not getting a green status within the cluster you can always try to re-add the host. Unfortunately most of the time that doesn´t solve the issue and getting the host out of a cluster is always painful (maintenance mode).

## Solution

The quick and dirty way solving that issue is to disable the HA cluster and enable it again!

![Re-enable vSphere HA](/images/blog/hareenable.jpg)

In most cases we experienced so far, this helps resolving the issue real quick and painless.
