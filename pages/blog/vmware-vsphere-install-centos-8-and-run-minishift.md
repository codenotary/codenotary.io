---
title: "VMware vSphere - install Centos 8 and run minishift"
image: /images/blog/selectos.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-10-29"
---

## VMware vSphere - install Centos 8 and run minishift

Many companies are running OpenShift on top of VMware vSphere to deploy, run and manage their container lifecycle. OpenShift uses the container orchestration platform Kubernetes to do so.

Especially when developing applications for OpenShift or if you just want to run a local test environment to play around, you should definitely check out [minishift](https://github.com/minishift/minishift).

This blog posts covers the creation of a virtual machine and the installation of the Centos 8 operating system as well as the first steps installing minishift.

## Creation of the virtual machine

You can pretty much create a completely standardized VM and select Centos 8 (x64) as the operating system. As we want to run it based on KVM in that VM, you need to export the hardware virtualization feature.

![Centos 8 os](/images/blog/selectos.png)

![enable hardware virtualization](/images/blog/hwvirt.png)

## Installation of Centos 8

We don't dig into the installation of Centos 8 itself, as its pretty straightforward. You can simply download the dvd image here, connect it and run the installer:

[http://isoredirect.centos.org/centos/8/isos/x86\_64/CentOS-8-x86\_64-1905-dvd1.iso](http://isoredirect.centos.org/centos/8/isos/x86_64/CentOS-8-x86_64-1905-dvd1.iso)

## First start Centos 8

The real interesting part starts with the first configuration steps of your fresh installed operating system. Especially if you're not used to RedHat OS or used to older versions, there are some changes in the command line.

**Setup your network**

\# set your hostname
nmtui-hostname# configure your network
nmtui-edit# connect your network
nmtui-connect

**Update packages**

dnf check-update
dnf update
dnf clean all# install some basic tools
dnf install nano vim wget curl net-tools lsof bash-completion

**Create a new user account with sudo permissions**

useradd user
passwd user
usermod -aG wheel user

## Install kvm

Start by configuring a bridge network

\# create and edit the following file
vi /etc/sysconfig/network-scripts/ifcfg-br0# file content
DEVICE=br0
TYPE=Bridge
IPADDR=192.168.10.100
NETMASK=255.255.255.0
GATEWAY=192.168.10.1
DNS=192.168.10.1
ONBOOT=yes
BOOTPROTO=static
DELAY=0

and the default network adapter

\# create or change the interface config (check the interface name, i. e. ens192)
/etc/sysconfig/network-scripts/ifcfg-ens192# file content
DEVICE=eth0
TYPE=Ethernet
BOOTPROTO=none
BRIDGE=br0
NAME=ens192
DEVICE=ens192
ONBOOT=yes

Reboot the system and it should come up with a bridge network and the configured ip address.

\# install required packages
dnf install qemu-kvm qemu-img libvirt virt-install libvirt-client# check the kvm module
lsmod | grep kvm# start and enable the libvirtd
systemctl start libvirtd
systemctl enable libvirtd

That's it, KVM is installed and should be up and running.

## Preparation

As virtualbox is used by default, we need to install the minishift KVM driver first:

sudo usermod -a -G libvirtd $(whoami)
newgrp libvirt
curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-centos7 -o docker-machine-driver-kvm
sudo mv docker-machine-driver-kvm /usr/local/bin/docker-machine-driver-kvm
sudo chmod +x /usr/local/bin/docker-machine-driver-kvm

Then start the default network

sudo virsh net-start default
sudo virsh net-autostart default

## Installation

Check the latest release and change the release number accordingly: 

[https://github.com/minishift/minishift/releases/latest](https://github.com/minishift/minishift/releases/latest)

export VER="1.34.1"
curl -L https://github.com/minishift/minishift/releases/download/v$VER/minishift-$VER-linux-amd64.tgz -o minishift-$VER-linux-amd64.tgz
tar xvf minishift-$VER-linux-amd64.tgz# copy the executable to /usr/local/bin
sudo mv minishift-$VER-linux-amd64/minishift /usr/local/bin # check the version
minishift version

### First start

\# start minishift
minishift start# get minishift console url
minishift console --url# stop minishift
minishift stop

![minishift start](/images/blog/start.png)

The last message should show the console url that can be opened using a browser

Server Information ...
OpenShift server started.The server is accessible via web console at:
    https://192.168.42.144:8443/console

## Install cli (oc)

To control and manage Openshift using the command line, you should install the oc command as well. The oc command is already integrated and you can simply copy it into your default path, like /usr/local/bin

sudo cp ~/.minishift/cache/oc/v3.11.0/linux/oc /usr/local/bin

### oc commands

check if oc is working: _**oc version**_

login as administrator: _**oc login -u system:admin**_

check your running configuration: **_oc config view_**

## Next steps

You should now have a running installation and the oc command should give you meaningful responses. Within a next blog post we're going to cover steps like kubectl installation, addon installation and running your first application.
