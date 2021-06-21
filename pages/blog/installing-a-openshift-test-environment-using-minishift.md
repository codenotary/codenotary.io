---
title: "Installing a OpenShift test environment using Minishift"
image: /images/blog/minishift_start.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-06-11"
---

Many companies decide to user RedHat OpenShift to manage their Kubernetes platform to simplify operations and use a straightforward UI instead of the commandline.

Furthermore, OpenShift has many security features built-in.

Supporting Kubernetes and OpenShift customers the same way, we needed a development and testing platform for OpenShift as well and discovered Minishift as a easy and sufficient solution.

In that article we share our installation steps using Ubuntu 18.10 and the caveats we ran into.

**What is OpenShift?**

Red Hat® OpenShift® is a hybrid cloud, enterprise Kubernetes application platform.

**What is Minishift?**

Minishift is a tool that helps you run OpenShift locally by running a single-node OpenShift cluster inside a VM. You can try out OpenShift or develop with it, day-to-day, on your local host.

# Preparation

There are preparation steps you should be aware of before installing Minishift. These steps mainly focus on setting up the hypervisor that should be used to run the virtual machine for Minishift.

As we're using Ubuntu 18.10 the KVM hypervisor is our choice and the following installation steps are based on it.

If your running macOS or Windows, please check the installation steps for these operating systems here:

macOS

- [xhyve](https://github.com/mist64/xhyve)


Windows

- [Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)

    To use Minishift with Hyper-V ensure that, after you [install Hyper-V](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v), you also [add a Virtual Switch](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/connect-to-network) using the Hyper-V Manager and set the configuration option hyperv-virtual-switch to this virtual switch. For specific configuration steps see the [Setting Up the Hyper-V Driver](https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html#setting-up-hyper-v-driver) section.


All Platforms

- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)


## KVM

If you run a different linux than Ubuntu 18.10 or higher, you can check the following url for alternative installations:

[Setting Up Virtualization Environment Minishift](https://docs.okd.io/latest/minishift/getting-started/setting-up-virtualization-environment.html)

**Install libvirt and qemu-kvm on your system:**

sudo apt install qemu-kvm libvirt-daemon libvirt-daemon-system
sudo usermod -a -G libvirt $(whoami)  # add yourself to the libvirt group
newgrp libvirt  # apply group change to current session

**Install the KVM driver binary and make it executable as follows:**

sudo curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-ubuntu16.04 -o /usr/local/bin/docker-machine-driver-kvm # install docker-machine-driver KVMsudo chmod +x /usr/local/bin/docker-machine-driver-kvm

**Check libvirtd service**

systemctl is-active libvirtd
sudo systemctl start libvirtd # if the service is not active

## libvirt networking

Next step is checking the libvirt networking and if all is up and running.

**Check the network status**

sudo virsh net-list --all
sudo virsh net-start default # start the service if not running
sudo virsh net-autostart default # mark the service as autostart

## Minishift installation

Download Minishift software for your operating system from the [Minishift Releases](https://github.com/minishift/minishift/releases) page, extract and copy the executable into your path.

cd /tmp
wget https://github.com/minishift/minishift/releases/download/v1.34.0/minishift-1.34.0-linux-amd64.tgz
tar xzf minishift-1.34.0-linux-amd64.tgz
sudo cp minishift-1.34.0-linux-amd64/minishift /usr/local/bin
sudo chmod +x /usr/local/bin/minishift

## Minishift initial start

The first start of Minishift is downloading OpenShift binary from Github and the Minishift Centos Iso to your local system and sets up all networking, storage and everything else you need to run OpenShift.

To get started simply run **minishift start**

![OpenShift Minishift start](/images/blog/minishift_start.png)

![Minishift installation done](/images/blog/minishift_done.png)

## Developer login into Minishift

After the installation is done, you'll get all the login details in your commandline, the URL to access OpenShift and the information to login as a developer.

You can simply click the link or open it in a browser, use developer as a username and anything except an empty password as a password.

![OpenShift developer login](/images/blog/developer-login.png)

## Admin login into Minishift

Now the first issues started, as you need to run **oc login -u system:admin**

First **issue**: Can't find the oc command

**Solution**: run **eval $(minishift oc-env)**

Great, the **oc** command works now, but the admin login still fails (**be aware that sometimes the link redirects to localhost and you need to manually change it to the Minishift ip again**).

Second **issue**: no admin login possible

**Solution**: 

minishift addon apply admin-user
oc login -u admin # type in a password to use

![OpenShift Admin login](/images/blog/admin-login.png)

## Installation of a Minishift addon

There are some community addons you can use to simplify the Minishift installation. One example is [Prometheus](https://prometheus.io/).

The process to get the addons is very easy:

git clone https://github.com/minishift/minishift-addons.git # clone the addon repository
minishift addons install minishift-addons/add-ons/prometheus # point to the addon path you want to install

## Deploy Prometheus addon

minishift addons apply prometheus --addon-env namespace=kube-system

![Minishift Prometheus addon](/images/blog/minishift_promaddon-1.png)

That's it - you have a running minishift environment now and you can start playing around or developing extensions or deploying your applications on OpenShift.
