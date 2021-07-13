---
title: "Install and monitor Photon OS, Kubernetes on vSphere"
image: /images/blog/photon_image.png
tags: ["Ops", "opvizor"]
date: "2018-04-17"
---

Running container on top of VMware vSphere is a hot topic in a modern development environment. Kubernetes to manage the container cluster and the container applications is highly popular and effective. 

The following blog post covers the installation and monitoring of Photon OS, Kubernetes on vSphere (using Kubernetes Anywhere) to manage Container and applications in a straightforward way.

While a stable and agile platform is crucial for a successful project, monitoring the uptime and the performance really makes it amazing!

# Install Photon OS

You can install Photon OS from scratch, giving you all choices to customize the setup or you can simply download a pre-installed Photon OS OVA.

[All Download links can be found here](https://github.com/vmware/photon/wiki/Downloading-Photon-OS)

![Download Photon OS](/images/blog/photon_image.png)

**ISO Image:**

Contains everything needed to install either the minimal or full installation of Photon OS. The bootable ISO has a manual installer or can be used with PXE/kickstart environments for automated installations.

**OVA Image:**

Pre-installed minimal environment, customized for VMware hypervisor environments. These customizations include a highly sanitized and optimized kernel to give improved boot and runtime performance for containers and Linux applications. Since an OVA is a complete virtual machine definition, we've made available a Photon OS OVA that has virtual hardware version 11; this will allow for compatibility with several versions of VMware platforms or allow for the latest and greatest virtual hardware enhancements.

In this guide, I´m going to download the OVA Image and import it to vSphere and make that VM my management system to deploy the future Kubernetes cluster.

![Deploy Photon OS on vSphere](/images/blog/deploy_photon_vapp.png)

After booting the imported Photon OS VM you can access the configuration wizard using the VMware console. 

**To simplify the system identification in this blog post - I named this VM Photon01**

The default credentials are username **_root_** and password **_changeme_**

When logging in for the first time you´ll be asked to change the password.

## Changing the network configuration

Although you configure the network settings during the OVA import there are situations you need to change the network configuration. 

The responsible systemd-networkd daemon is checking the configuration files in _**/etc/systemd/network**_.

These are named 10 or 99...dhcp.network or static.network depending on your configuration.

To change the configuration from dhcp to static you need to remove the dhcp file and create the .network file accordingly.

_**cd /etc/systemd/network**_

_**mv 99-dhcp-en.network 10-static-en.network**_

Then change the content of the file.

There is a great blog post describing that: [https://virtualnomadblog.com/2017/03/30/configuring-photonos-network-settings/](https://virtualnomadblog.com/2017/03/30/configuring-photonos-network-settings/)

```

[Match]Name=e*

[Network]

DHCP=no

Address=192.168.1.101/24

Gateway=192.168.1.1

DNS=192.168.1.21 192.168.1.1

Domains=testorg.local
```

Just reboot the appliance and the change network configuration should come up. Alternatively type 

```

systemctl stop systemd-networkd

systemctl start systemd-networkd
```

## Updating the Photon OS system

I always update the OS before adding any applications to make sure everything is up2date including security patches.

```

tdnf update
```

![Update Photon OS](/images/blog/tdnfupdate.png)

_**tdnf upgrade**_ to upgrade the distribution if available

# Kubernetes Preparation

The first step before getting into the Kubernetes on vSphere installation itself, we need to get the Photon OS Image we want to use for Kubernetes.

Check out that description (please note, that the container image is Photon v1)

[https://github.com/kubernetes/kubernetes-anywhere/blob/master/phase1/vsphere/README.md#deployment](https://github.com/kubernetes/kubernetes-anywhere/blob/master/phase1/vsphere/README.md#deployment)

Copy the Download URL or Download the virtual appliance and import it to your vSphere environment. Please don't power it on - just leave it there and remember the name of the virtual machine for later.

[https://storage.googleapis.com/kubernetes-anywhere-for-vsphere-cna-storage/KubernetesAnywhereTemplatePhotonOS.ova](https://storage.googleapis.com/kubernetes-anywhere-for-vsphere-cna-storage/KubernetesAnywhereTemplatePhotonOS.ova)

![Deploy Photon OS Image for Kubernetes Anywhere](/images/blog/deploy_kubanywhere_photon.png)

## Setup the admin system to deploy Kubernetes Anywhere

Log into the running Photon OS VM name Photon01 that we already deployed and configured and install git:

_**tdnf install git**_

Then clone the git repository of [Kubernetes Anywhere](https://github.com/kubernetes/kubernetes-anywhere)

```



git clone https://github.com/kubernetes/kubernetes-anywhere

cd kubernetes-anywhere

# enable docker

systemctl enable docker

reboot

# download the kubernetes-anywhere deployment container

docker pull cnastorage/kubernetes-anywhere
```

_**

![Docker Pull Kubernetes Anywhere Image](/images/blog/dockerpull.png)

**_

\# start the container

 **```

docker run -it -v /tmp:/tmp --rm --env="PS1=[container]:w> " --net=host cnastorage/kubernetes-anywhere:latest /bin/bash
```** 

## Creating the Kubernetes Cluster config

The docker run command starts the container and starts the remote bash session within the container. At the prompt you can directly start to create the Kubernetes Cluster configuration for later deployment.

_**make config**_

![Kubernetes cluster configuration](/images/blog/kubernetes_conf1.png)

command starts the configuration setup and I use mostly the defaults to deploy 4 cluster nodes on vSphere.

Just make sure to use a vCenter user account that has sufficient permissions to create and run virtual machines and to configure the correct datacenter, cluster and storage names as they are defined in vCenter.

Also make sure to use the correct image for the deployment!

![Deployment Image](/images/blog/image.png)

In this case I used the default:

**KubernetesAnywhereTemplatePhotonOS**

If you don't want to bother yourself with any details you can leave the defaults:

![Image Deploy Photon OS](/images/blog/image2.png)

Make sure to run the addons like proxy, dashboard and heapster as they simplify management and monitoring a lot. You can ignore weave-net and choose N.

# Deploy Kubernetes Cluster

After setting up the config, we can move on and deploy the Kubernetes on vSphere cluster consisting of a master VM and 4 nodes using the make deploy command:

**make deploy**

![make deploy Kubernetes on vSphere](/images/blog/makedeploy.png)

When the script went through, you can find 5 virtual machines in your vCenter management.

![Kubernetes on vSphere VMs](/images/blog/deployed.png)

# Accessing the Kubernetes Management Dashboard

Kubernetes Anywhere is automatically deploying the dashboard extension and we only need to find out what port that dashboard service is using on the kubernetes-master VM. So first get the ip of the Kubernetes-Master VM and connect using SSH. 

The default credentials are **root** and **kubernetes**

To find out the port use the following command:

 **```

kubectl describe service kubernetes-dashboard --namespace=kube-system| grep -i NodePort
```** 

You get a output similar to the one below and use that to connect to the kubernetes-master VM: http://kubernetes-master-ip:**31673**

```

Type:                   NodePort

NodePort:               <unset> 31673/TCP

```

Please note that this setup uses no SSL, therefore its not really secure, but a nice jumpstart.

![Kubernetes on vSphere - Master Dashboard](/images/blog/kubernetes-dashboard.png)

# Monitoring the Kubernetes environment using Performance Analyzer

You installed a service called heapster when deploying Kubernetes anywhere that allows to collect and forward performance metrics. It also allows to send metrics directly to our Performance Analyzer appliance.

To forward the metrics, make sure to change to the Workloads-Deployments View:

![Heapster Configuration Influxdb](/images/blog/heapster_conf1.png)

Click on the 3 button icon to the right and select View/edit YAML.

![Kubernetes Heapster Sink](/images/blog/edit_heapster.png)

Search for the spec section (1), then command section (2), then click the button on the left to Append an Auto entry (3) and add the following text:

 **```

--sink=influxdb:http://performance_analyzer_appliance_dns_or_ip:8086
```** 

Then click update and the existing heapster container will be destroyed and a new one with the updated configuration created.

Within Performance Analyzer you can import the Kubernetes dashboards to monitor the Kubernetes PODs as well as the Node statistics.

[![Kubernetes Performance Analyzer - Monitor](/images/blog/kubernetes_perfanalyzer.png)](https://try.opvizor.com/perfanalyzer)

![Performance Analyzer Kubernetes](/images/blog/pa_vms.png)

If you want to start monitoring VMware vSphere, Photon OS as well as Kubernetes, start your Performance Analyzer trial and contact us for special details.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer.png)](https://www.opvizor.com)
