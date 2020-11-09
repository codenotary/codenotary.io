---
title: "VMware Tanzu projects: Octant - Kubernetes runtime overview"
image: /images/blog/octant.png
tags: ["Ops", "opvizor"]
date: "2019-10-15"
---

Heptio started a bunch of open source projects designed to help [Kubernetes](https://kubernetes.io) developers and operators to run and maintain their Kubernetes Cluster in the best possible way. VMware acquired [Heptio](https://heptio.cloud.vmware.com/) end of last year and released many of the Heption projects under the new VMware Tanzu umbrella. 

There are already a couple of projects to help with container backups and more. But this posts covers a very cool project called Octant, that gives you a Kubernetes runtime overview.

You can filter namespaces, search for certain tags or just browse through your K8s runtime.

The Octant description shows: a web-based, highly extensible platform for developers to better understand the complexity of Kubernetes clusters. I would describe it as a Kubernetes runtime overview, that supports 3rd party plugins as well. It's only a question of time, before the first plugins will be created by the community.

# What is Octant

The project page: [https://github.com/vmware-tanzu/octant](https://github.com/vmware-tanzu/octant)

Octant is a tool for developers to understand how applications run on a Kubernetes cluster. It aims to be part of the developer's toolkit for gaining insight and approaching complexity found in Kubernetes. 

Octant offers a combination of introspective tooling, cluster navigation, and object management along with a plugin system to further extend its capabilities.

## Features

- **Resource Viewer**
    
    Graphically visualizate relationships between objects in a Kubernetes cluster. The status of individual objects are represented by color to show workload performance.
    
- **Summary View**
    
    Consolidated status and configuration information in a single page aggregated from output typically found using multiple kubectl commands.
    
- **Port Forward**
    
    Forward a local port to a running pod with a single button for debugging applications and even port forward multiple pods across namespaces.
    
- **Log Stream**
    
    View log streams of pod and container activity for troubleshooting or monitoring without holding multiple terminals open.
    
- **Label Filter**
    
    Organize workloads with label filtering for inspecting clusters with a high volume of objects in a namespace.
    
- **Cluster Navigation**
    
    Easily change between namespaces or contexts across different clusters. Multiple kubeconfig files are also supported.
    
- **Plugin System**
    
    Highly extensible plugin system for users to provide additional functionality through gRPC. Plugin authors can add components on top of existing views.
    

## Deployment

The deployment of Octant is quite cool and somewhat surprising as its not a kubernetes service or helm chart to be deployed. It's an executable that leverages the Kubernetes API using your kubectl configuration.

Simply download or install the release.

wget https://github.com/vmware-tanzu/octant/releases/download/v0.7.0/octant\_0.7.0\_Linux-64bit.deb
sudo dpkg -i octant\_0.7.0\_Linux-64bit.deb

Before starting Octant, make sure you have access to your kubernetes cluster. Best is to test that using the [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) cluster-info command.

Start the Octant web server:

**octant**

Octant tries to launch the default web browser on 127.0.0.1:7777. As I'm connected to a remote console, I start Octant on all interfaces and a available port.

For configuring Octant, setting up a development environment, or running tests, refer to the documentation [here](https://github.com/vmware-tanzu/octant/blob/master/docs/getting-started.md).

kubectl cluster-info #continue if succeed
OCTANT\_LISTENER\_ADDR=0.0.0.0:8090 octant #any interface, Port 8090

![kubernetes runtime overview](/images/blog/octant.png)

There are also deployment options for MacOS and Windows, just in case you run a different operating system. The main setup and configuration works the same.

## Dashboard

Simply access the octant dashboard using your browser and the configured network address and port (in this case http://ipaddress:8090). You could potentially put a reverse proxy in front of your Octant in case you want to run it permanently and have some protection (i. e. basic auth).

![octant Kubernetes runtime overview](/images/blog/octant-db.png)

The dashboard shows you an overview of your current workloads, configurations files, RBAC security settings or events that go on in your Kubernetes namespace. You can change the namespace at any time using the drop down menu at the top.

Last but not least, you can write and integrate your own plugins. I'm really curious and excited what solutions will come up and will be integrated here.
