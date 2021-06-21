---
title: "Install Kubernetes on vSphere using Ubuntu juju"
image: /images/blog/startcommand.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-04-02"
---

More customers of us are using Kubernetes and want to monitor their VMware vSphere environment and the Kubernetes nodes and container that run on top of it. Performance Analyzer is going to support all these setup very soon (we're weeks away). As always we want to share how we setup our test environment to run a full Kubernetes environment on top of our vSphere 6.7 environment.

We're going to use Ubuntu 18.10, conjure-up, juju and finally the common Kubernetes admin tools.

## Conjure-Up

We're going to need conjure-up on our Ubuntu management system, that we use to deploy Kubernetes on vSphere. If you don't have conjure-up installed, start with that by running:

**sudo snap install conjure-up --classic**

The next step is the conjure Kubernetes installation wizard:

**conjure-up kubernetes**

![Conjure-Up Kubernetes](/images/blog/startcommand.png)

![Kubernetes on vSphere](/images/blog/coreinstall.png)

Of course you can choose a more comprehensive installation, but we're fine the the Kubernetes Core setup.

![Choose Kubernetes on VMware vSphere](/images/blog/vsphere.png)

You need to scroll down to the **Configure a New Cloud** section and select **vSphere**.

![VMware vSphere credentials](/images/blog/vspherecred.png)

Make sure to use credentials with administrative rights as VMs will be deployed. The API Endpoint can be either the vCenter ip or the FQDN.

![vSphere network](/images/blog/network-1.png)

Next important choice is the external network for the Kubernetes environment. While all Kubernetes pods (container) get an internal ip automatically, that is only reachable within the Kubernetes cluster, the external network will be used for the communication from the outside (typically your LAN).

![vSphere Datastore](/images/blog/datastore.png)

Then you need to select what datastore the Kubernetes nodes should be deployed on. One important note - VMware vSAN is currently not correctly supported when running the conjure deployment. Worst-case, run a NFS datastore on top of vSAN, if you just deploy a development or testing environment.

![virtual network](/images/blog/vnet.png)

You can either use flannel or calico as your network plugin. The following information should help you to find the right network technology for you. We're going to use Calico in our blog post.

### Flannel

What is [CoreOS Flannel? Definition](https://www.sdxcentral.com/containers/definitions/what-is-coreos-flannel-definition/)

Flannel is a networking technology used to connect Linux [Containers](https://www.sdxcentral.com/cloud/containers/ "Containers"). It is [distributed and maintained by CoreOS](https://coreos.com/blog/introducing-rudder/), the producer of the stripped-down CoreOS Linux operating system for containers, as well as the rkt container system that competes with Docker.

Although tailored for use with the CoreOS operating system, Flannel is also compatible with Docker. Flannel emerged as an alternative method for container networking, originating from an open-source concept originally called Rudder, which in 2014 was renamed to Flannel.  It was written in the Go [programming](https://www.sdxcentral.com/cloud/devops/definitions/programmability-network-automation-sdn-networks/ "SDN Automation, Programmability, and Programmable Networks") language.

[https://github.com/coreos/flannel](https://github.com/coreos/flannel)

### Calico

**What is Calico?**

[Calico](https://www.projectcalico.org/) is an open source networking and network security solution for containers, virtual machines, and native host-based workloads. Calico supports a broad range of platforms including Kubernetes, OpenShift, Docker EE, OpenStack, and bare metal services.

Calico combines flexible networking capabilities with run-anywhere security enforcement to provide a solution with native Linux kernel performance and true cloud-native scalability. Calico provides developers and cluster operators with a consistent experience and set of capabilities whether running in public cloud or on-prem, on a single node or across a multi-thousand node cluster.

![Kubernetes Network](/images/blog/vnet2.png)

During the installation there might be the case where a sudo command is required, so please make sure to enter the password here, if you need sudo permission.

![Conjure-Up Overview](/images/blog/default.png)

The default setup is done and you could click the Deploy button to start the setup. In that article we want to customize the the worker setup. The Kubernetes worker will be the Nodes, that run the container.

### Kubernetes Worker

A node is a worker machine in Kubernetes, previously known as a minion. A node may be a VM or physical machine, depending on the cluster. Each node contains the services necessary to run pods and is managed by the master components. The services on a node include the container runtime, kubelet and kube-proxy. See [The Kubernetes Node](https://kubernetes.io/docs/concepts/architecture/nodes/) section in the architecture design doc for more details.

We need a little bit more resources than the default worker, so let's Configure the kubernetes-worker section.

![Kubernetes Worker configuration](/images/blog/changeworker-1.png)

You could change the number of vCPU cores as well the amount of memory here. We change it to 8GB of memory.

## Deploy

We are ready to deploy the Kubernetes on vSphere setup now and let Conjure do its magic.

![Deploy Kubernetes on vSphere](/images/blog/finishconfig.png)

Depending on your setup it will take probably an hour to deploy the whole setup and you can follow the whole process in the wizard.

![Init Phase conjure-up](/images/blog/init.png)

![Deploy Conjure-up Kubernetes](/images/blog/deploy.png)

![Finish deployment](/images/blog/finishing.png)

![Kubernetes on vSphere deployed](/images/blog/complete.png)

That's is - all deployed and ready. You can either make a screenshot of all the URLs listed, to access Kubernetes management and the other deployed services or use Kubernetes (k8s) commands to get all information again. 

`kubectl cluster-info`

## First steps in your Kubernetes on vSphere environment

![kubectl get all](/images/blog/kubectlgetall.png)

conjure-up is automatically configuring your local kubectl profile, so you can start typing commands right away.

`kubectl get all`

That command lists you all resources of the default namespace. If you want to see all resources of all namespaces, please use --all-namespaces as an argument.

`kubectl get all --all-namespaces`

![juju status](/images/blog/jujustatus-1.png)

Our Kubernetes on vSphere environment was deployed using conjure-up and juju. juju is a very powerful automation tool, that makes controlling and expanding your Kubernetes setup quite easy. [juju command line reference](https://docs.jujucharms.com/2.5/en/commands)

We start by getting the status of all components.

`juju status`

Now we need to know where our Kubernetes Management is running as well as the credentials for Kubernetes.

![Get credentials Kubernetes](/images/blog/kubectlconfigview.png)

`kubectl config view`

You can find a full Ubuntu tutorial here as well, if you want to use different deployment options:

[https://tutorials.ubuntu.com/tutorial/install-kubernetes-with-conjure-up#0](https://tutorials.ubuntu.com/tutorial/install-kubernetes-with-conjure-up#0)

## SSH into the Kubernetes nodes

juju makes it also very simple to enter any Kubernetes nodes using SSH to troubleshoot or reconfigure.

juju status # to get information about the master and worker names
juju ssh kubernetes-master/0  # enter the master
sudo apt update # update package manager
sudo apt upgrade # install patches
sudo apt autoremove # remove obsolete packages
exit # get out of ssh

## Add new worker

You can add a worker that is configured with the same resources as the other running containers

**juju add-unit kubernetes-worker**

or you could change the resource settings and then add a new worker

juju set-constraints kubernetes-worker cpu-cores=8 mem=32G
juju add-unit kubernetes-worker

## little Troubleshooting guide

### DNS

You might receive a message showing a lookup error when deploying new container of you want to enter a running container. In that case its likely that the Kubernetes master and/or worker nodes have no working name server configuration.

Error: forwarding ports: error upgrading connection: error dialing backend: dial tcp: lookup juju-e1b2fa-2 on 127.0.0.53:53: server misbehaving

Best way to solve that is to enter the nodes using ssh, try to ping the master or a worker and fix the dns configuration if required. You can fix the name resolution errors the same way you would fix it in any other Ubuntu system.

## Logs

You can always run a logs command for any running resources.

kubectl get pods # show all pods (container)
kubectl logs pod/my-wordpress-mariadb-0 # or any other pod name
