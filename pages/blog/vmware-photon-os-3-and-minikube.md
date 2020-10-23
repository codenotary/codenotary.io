---
title: "VMware Photon OS 3 and Minikube"
tags: ["Ops", "opvizor"]
date: "2019-01-08"
---

Whenever you need a nice and small Kubernetes demo and test environment, Minikube is the way to go. There are plenty of different ways to setup a small Kubernetes test cluster, but [Minikube](https://github.com/kubernetes/minikube#installation) is by far the fastest and easiest way.

Many people run it on Workstation software like Virtualbox or VMware Fusion, but also on Hyper-V and KVM.

As Minikube runs on Linux without any big requirements, we chose [Photon OS 3](https://github.com/vmware/photon/wiki/Downloading-Photon-OS) on top of VMware vSphere, to setup our demo environments.

The following guideline was the result of our efforts.

After installing the [Photon OS 3 VM](https://www.opvizor.com/photon-os-3-0-release-candidate-guideline) and configuring it with 4 vCPUs and 8 GB of memory (feel free to adjust), we can start installing Minikube.

Just use the following command to install the latest version.

## Minikube Installation

_**c**__**url -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && sudo install minikube-linux-amd64 /usr/local/bin/minikube**_

and run _**minikube version**_ to check the installed version.

![minikube](/images/blog/minikubeversion.png)

### Install Kubectl

_**curl -Lo kubectl https://storage.googleapis.com/kubernetes-release/release/v1.12.4/bin/linux/amd64/kubectl && chmod +x kubectl && sudo cp kubectl /usr/local/bin/ && rm kubectl**_

## Start Minikube

First make sure that docker is configured and started: **_systemctl start docker.service_**

Just run 

_**minikube start --vm-driver=none**_ 

and the process will download all required installation files. The parameter --vm-driver=none is important to let Minikube know, that it shouldn't use any local virtualization engine, like Virtualbox.

![Minikube start](/images/blog/minikube-start.png)

If all went well, you should see the following text:

WARNING: IT IS RECOMMENDED NOT TO RUN THE NONE DRIVER ON PERSONAL WORKSTATIONS

        The 'none' driver will run an insecure kubernetes apiserver as root that may leave the host vulnerable to CSRF attacks

When using the none driver, the kubectl config and credentials generated will be root owned and will appear in the root home directory.

You will need to move the files to the appropriate location and then set the correct permissions.  An example of this is below:

        
sudo mv /root/.kube $HOME/.kube # this will write over any previous configuration
sudo chown -R $USER $HOME/.kube
sudo chgrp -R $USER $HOME/.kube
sudo mv /root/.minikube $HOME/.minikube # this will write over any previous configuration
sudo chown -R $USER $HOME/.minikube
sudo chgrp -R $USER $HOME/.minikube

This can also be done automatically by setting the env var CHANGE\_MINIKUBE\_NONE\_USER=true

Loading cached images from config file.

Everything looks great. Please enjoy minikube!

Run your first container on the Minikube Kubernetes Setup

Let´s run the first container

**_kubectl run hello-minikube --image=k8s.gcr.io/echoserver:1.4 --port=8080_**

Expose the port

**_kubectl expose deployment hello-minikube --type=NodePort_**

Check if the container is running

_**kubectl get pod**_

Test the service

_**curl $(minikube service hello-minikube --url)**_

![kubectl](/images/blog/kubectl.png)

To remove the whole test run the following commands:

_**kubectl delete service hello-minikube**_

_**kubectl delete deployment hello-minikube**_

_**minikube stop**_

The next posts will be around testing management tools and monitoring using Minikube.
