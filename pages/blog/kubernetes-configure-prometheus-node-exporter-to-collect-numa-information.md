---
title: "Kubernetes - Configure Prometheus Node Exporter to collect NUMA information"
tags: ["Ops", "opvizor"]
date: "2019-04-25"
---

Every reader of our blog knows in the meantime that we care about NUMA architecture and optimization. Despite the fact that the architecture itself is quite easy to understand, the daily operations struggle to optimize NUMA balancement.

It's already hard to track the current NUMA node balancement in a pure VMware vSphere environment, but monitoring it with the additional Kubernetes/Container layer on top makes it even harder.

We're going to cover much more NUMA and other critical resource monitoring and optimization facts in the future, but let's start with the simplest part. How to get the NUMA details of your Kubernetes Node using the popular [Prometheus Node exporter](https://github.com/helm/charts/tree/master/stable/prometheus-node-exporter).

We assume that you already have [Prometheus](https://prometheus.io) Node Exporter running in your [Kubernetes](https://kubernetes.io/) environment. If not there are plenty of great blog posts already and some nice Helm charts as well.

Here is one of the posts:

[https://medium.com/devopslinks/trying-prometheus-operator-with-helm-minikube-b617a2dccfa3](https://medium.com/devopslinks/trying-prometheus-operator-with-helm-minikube-b617a2dccfa3)

## Helm and Daemonset

The typical helm charts creates a daemonset that is deploying Node exporter Pods on every Kubernetes Node. That way you don't need to think about deploying a Node exporter pod each time you add a new node to your cluster. The good think, every exporter pod has labels set, so Prometheus is automatically scraping the metrics once the pod is up and running.

## Check Prometheus

You can easily check your Prometheus server if the node is being scraped already:

![Prometheus target](/images/blog/prometheus.png)

Simply access the prometheus server and check if Kubernetes-nodes are listed as targets.

## Check Node Exporter metrics

To check the gathered metrics, simply type node\_ and select a metric.

![Kubernetes Prometheus node exporter](/images/blog/checkmetrics.png)

But when you start searching for NUMA metrics, this list will remain empty (unless you already made the change this blog post is about).

## Enable NUMA collector

When you read through the official documentation, you'll notice that some metrics are not collected by default. That is also true for all NUMA related metrics that can the typically found under /proc/meminfo\_numa.

![meminfo_numa](/images/blog/numa_node_exporter.png)

To enable the NUMA collection you would need set some arguments for the Node Exporter pods within the daemonset. To get that information, lets first search for the daemonset.

kubectl get daemonset

Next step is to edit the daemonset you want to change.

kubectl edit daemonset.apps/prometheus-node-exporter

Here you should find a spec section for the containers including the args - add **\- --collector.meminfo\_numa** and save the file.

spec:
      containers:
      - args:
        - --path.procfs=/host/proc
        - --path.sysfs=/host/sys
        - --collector.meminfo\_numa

When saving the daemonset all related Pods will automatically be terminated, deleted and created with the new parameterset.

Wait some minutes and search for NUMA again within the Prometheus database and you should see some metrics coming in.

node\_memory\_numa\_interleave\_hit\_total is one example. 

![numa metrics in Prometheus](/images/blog/numa.png)

Perfect - now we can add some meaningful charts to our dashboards. You can either use your own Grafana instance or our Performance Analyzer product that has all build in (Kubernetes integration is still beta, but the final release only some days away). Just contact us, if you want to give it a try.

![kubernetes node numa metrics](/images/blog/metrics_numa.png)

![numa details](/images/blog/metrics_numa-1.png)

1. NUMA Nodes
2. NUMA Interleave hit
3. NUMA Hit (Number/Byte)
4. NUMA Home Miss
5. NUMA Foreign
6. NUMA local
7. NUMA other

are just some of the metrics you can monitor and align with the NUMA metrics of VMware vSphere. Just to make sure: The NUMA metrics for vSphere VMs are part of Performance Analyzer and not of the node exporter.

You can also find some more details about Linux NUMA counters here:

- numa\_hit: Number of pages allocated from the node the process wanted.
- numa\_miss: Number of pages allocated from this node, but the process preferred another node.
- numa\_foreign: Number of pages allocated another node, but the process preferred this node.
- local\_node: Number of pages allocated from this node while the process was running locally.
- other\_node: Number of pages allocated from this node while the process was running remotely (on another node).
- interleave\_hit: Number of pages allocated successfully with the interleave strategy.

[https://blog.tsunanet.net/2011/06/clarifications-on-linuxs-numa-stats.html](https://blog.tsunanet.net/2011/06/clarifications-on-linuxs-numa-stats.html)
