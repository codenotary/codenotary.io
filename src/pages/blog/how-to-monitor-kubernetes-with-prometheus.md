---
title: "How To Monitor Kubernetes With Prometheus"
tags: ["Ops", "opvizor"]
date: "2020-03-12"
---

![](https://lh5.googleusercontent.com/C-f4PeAccx0cqOrcJTOmT9PvGmx1tWHHllKrOW1B6vwjxQj6XZw0QwwdmUGQ9CcObjCexkMCuDh9_hNa0T02BTJhQDQ48puDCk0-kkizNt5xOu2k657B2sfzsZVN6w4rCyA-C-gB)

[Image Source](https://pixabay.com/photos/stock-trading-monitor-business-1863880/)  

Monitoring ensures the availability of an application and verifies that it meets the service level agreement in any DevOps project. Monitoring starts with provisioning and exposing information from the relevant application. Then you need to continuously overview the state of the application and gather metrics of the underlying infrastructure.  

Prometheus is an open source monitoring system. Prometheus is well suited for complex workloads, thanks to its ability to process large amounts of data every second. One of the main benefits of Prometheus is the simple text-based metrics format.   

Another advantage of Prometheus is an extensive list of supported products, including Kubernetes, databases, server applications, and Java Virtual Machines (JVM). In this article, you will learn how to monitor Kubernetes with Promoetheus, which is the default monitoring option in Kubernetes.

## Why Prometheus Is the Right Tool for Kubernetes Monitoring

Kubernetes and container-based infrastructures utilize a huge number of services, virtual network addresses, and metrics. These tasks generate a  lot of data, which can be overwhelming for traditional monitoring tools. Prometheus benefits include:

- **Data model**—Prometheus and Kubernetes have a similar model for storing data. Prometheus stores data as [time series](https://en.wikipedia.org/wiki/Time_series). The data is stored as streams of timestamped values belonging to the same metric. Kubernetes organizes infrastructure metadata in a similar way. This similarity enables you to get more flexible and accurate data.
- **Accessible format and protocols**—metrics in Prometheus are in a self-explanatory and human readable format. You can check that the metrics are correctly exposed by using a web browser since they are published in standard HTTP.
- **Service discovery**—the Prometheus server automatically pulls metrics from monitored applications and services. The auto-discovery model is a good fit for ephemeral Kubernetes workloads because the targets are periodically scraped by the server.

## How Prometheus Monitoring Works in Kubernetes

Prometheus pulls data from Kubernetes services by sending an HTTP request called scrape. The response to scrape is stored in a custom database on the Prometheus server along with the metrics for the scrape itself. 

Prometheus then needs to access the stored data and collect different Kubernetes metrics:

- **Machine-level metrics**—Prometheus can access machine-level metrics like CPU, memory, and networks by using [node exporters](https://github.com/prometheus/node_exporter). Exporters ensure that the metrics are in a supported format, and expose the requested data to the Prometheus server.
- **Cluster metrics**—Prometheus collects cluster metrics like pod, deployments, resource, and reservation by using [Kube-state-metrics](https://github.com/kubernetes/kube-state-metrics).
- **Internal metrics**—internal Kubernetes components like etcd, kubelet, scheduler, and dns are responsible for exposing internal system metrics

Developers can access the collected data by using the PromQL query language. These metrics are visualized on graphical interfaces like Grafana, or use it to send alerts with the Alertmanager.

## Installing Prometheus on Kubernetes

You can configure [Prometheus monitoring](https://platform9.com/blog/kubernetes-monitoring-at-scale-with-prometheus-and-cortex/) by using YAML (Yet Another Markup Language) files. YAML files contain permissions, configurations, and services. Prometheus uses these files to access resources and pull information by scraping Kubernetes cluster elements. YAML files are available on [GitHub](https://github.com/prometheus/prometheus/blob/master/docs/getting_started.md).

After configuration is done, you can install Prometheus as a Docker container in a Kubernetes cluster. These Docker containers can have different orchestration options like StatefulSets, Kubernetes operators, Docker containers, Helm package manager, and Kubernetes operators. 

To deploy the Prometheus server inside a container use the following command in the Prometheus user interface

```
docker run -p 9090:9090 -v /tmp/configuration.yml:/etc/prometheus/configuration.yml  prom/prometheus
```

Another option is to change the Docker container into a Kubernetes deployment object. This deployment object will mount the configuration from a ConfigMap.

```
kubectl create configmap prometheus-example-cm --from-file configuration.yml
```

## Monitoring Kubernetes Services with Prometheus

Services like [Istio](https://istio.io/), and [Traefik](https://containo.us/traefik/) web proxy can collect Prometheus metrics by default. You need to use an exporter to monitor other services. 

**Monitoring the Traefik service**

Traefik is a reverse proxy that integrates with containers and microservices. You can use Traefik as an Entrypoint or an Ingress controller. Traefik is the connection point between the microservices inside a cluster and the external network.

Deploy Traefik with Prometheus using the following command:

```
kubectl create -f https://raw.githubusercontent.com/mateobur/prometheus-monitoring-guide/master/traefik-prom.yaml
```

Add the new monitoring target to the YAML configuration file

```
 - job_name: 'prometheus'

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
    - targets: ['localhost:9090']
```

**Monitor Kubernetes services using Prometheus exporters** 

A Prometheus exporter is a kind of adapter that converts main service metric formats to Prometheus metrics format.

Deploy a pod that contains the Prometheus sidecar and the Redis server using the following command:

```
kubectl create -f prometheus-monitoring/prometheus_redis_exporter.yaml
```

Update the Prometheus YAML configuration file and reload

```
 - job_name: 'redis'
    static_configs:
      - targets: ['redis:9121']
```

**Monitoring of a Kubernetes cluster**

The Kubernetes cluster internal monitoring process consists of the following components:

- **cAdvisor**—an open source agent that aggregates, processes, and exports information on container performance and resource usage. cAdvisor is a part of the Kubelet binary in Kubernetes.
- **Kube-state-metrics**—a service that monitors the Kubernetes API server and produces metrics about the object state, deployments, pods and nodes.
- **Metrics-server**—aggregates resource usage data across the entire cluster. Metrics-server is focused on implementing resource metrics like CPU, memory, file descriptors and more.

To monitor kube-state-metrics with Prometheus you have to scrape the service port in the Prometheus configuration file:

```
- job_name: 'kube-state-metrics'
    static_configs:
    - targets: ['kube-state-metrics.kube-system.svc.cluster.local:8080']
```

Another option is to use Helm charts. To install the chart use the following code snippet for Helm 2:

```
helm init --service-account tiller
helm install --name node-exporter stable/prometheus-node-exporter
```

After you have installed and configured the scrape file, you can collect and display the node metrics.

**Using Prometheus to monitor Kubernetes internal components**

Some Kubernetes components like kube-scheduler, etcd, or kube-controller can expose Kubernetes’s internal performance metrics when using Prometheus.

You can monitor internal components in the same way you monitor any other Prometheus endpoint. There are just two exceptions to this option:

- **Network interfaces for listening**—your deployment method and configuration templates depend on the http scheme and security services like RBAC. These services are difficult to reach from the Prometheus pods because they are only listening at localhost in the hosting node.
- **Kubernetes service pointing to the pods**—some Kubernetes components may not have a service pointing to the pods.

## Conclusion

This tutorial explains how to collect and monitor metrics with Prometheus on Kubernetes. Monitoring enables you to achieve more transparency and get insight on your Kubernetes application. In addition, monitoring ensures the health, performance, and behavior of your system. Proactive monitoring should be an integral part of your application development process.

Products like Opvizor Performance Analyzer provide all these monitoring capabilities out of the box. If you run Kubernetes on top of VMware vSphere, you get a 360 degree view. And stay tuned for the pure Kubernetes edition.

\--------------------

Guest Author Bio  

![](https://lh4.googleusercontent.com/u0jDrpEIXrvMaefcR1ERd6SW1HyMUBYZrWjc7V6hsMGG5b4oVbqeBras57QH3e1J_-R91OwZ3URu82XRalAX-nnhZxXzeFdc1iIndGKmhBz0FT7VwZGFcI5PlGNCfeF3yKsxsNn_)

[Image source](https://drive.google.com/file/d/1--uUhyKZrH4XAm3fm88yQivTdfVwhQTP/view?usp=sharing)  

Gilad David Maayan is a technology writer who has worked with over 150 technology companies including SAP, Samsung NEXT, NetApp and Imperva, producing technical and thought leadership content that elucidates technical solutions for developers and IT leadership.

LinkedIn: [https://www.linkedin.com/in/giladdavidmaayan/](https://www.linkedin.com/in/giladdavidmaayan/)
