---
title: "k3OS - Kubernetes on Intel Compute Stick"
image: /images/blog/computestick-768x1024.jpg
tags: ["Ops", "opvizor"]
date: "2019-12-09"
---

When I cleaned up my desk this weekend I stumbled on my 3 year old [Intel Compute Stick](https://www.intel.com/content/www/us/en/products/boards-kits/compute-stick.html). My first thought: it would be quite cool to run Kubernetes on it. Luckily nice projects has been released lately to run Kubernetes on edge and IoT devices and I decided to try [k3OS](https://github.com/rancher/k3os) on the compute stick.

Spoiler: It really works!

Just in case you've never seen a Intel compute stick - here we go:

![k3os on Intel compute stick](/images/blog/computestick-768x1024.jpg)

Intel Compute Stick next to a Keyboard

This mini-Computer has a 4 CPU cores (Atom x5) and 2 GB memory as well as 32 GB internal storage.

## What is k3OS

Source: [https://github.com/rancher/k3os](https://github.com/rancher/k3os)

k3OS is a Linux distribution designed to remove as much OS maintenance as possible in a Kubernetes cluster. It is specifically designed to only have what is needed to run k3s.

Additionally the OS is designed to be managed by kubectl once a cluster is bootstrapped. Nodes only need to join a cluster and then all aspects of the OS can be managed from Kubernetes. Both k3OS and k3s upgrades are handled by the k3OS operator.

Core design goals of k3OS are

- Minimal OS for running Kubernetes by way of k3s
- Ability to upgrade and configure using kubectl
- Versatile installation to allow easy creation of OS images.

## Getting k3os ready

After downloading the ISO file of the [latest k3OS](https://github.com/rancher/k3os/releases/latest) release, I used [Rufus](https://rufus.ie/) to write that to USB stick and make it bootable.

**Hint: I had issues with the ISO mode as the compute stick didn't boot from it; the DD mode works without any issues.**

![write k3os image to USB](/images/blog/rufus.png)

Rufus use DD Image mode

## Install k3OS on the Intel Compute Stick

First thing to do is updating your Compute Stick BIOS to the latest version. You can find the BIOS files on the Intel Download portal, i. e. for the [STK1AW32SC](https://downloadcenter.intel.com/product/91065/Intel-Compute-Stick-STK1AW32SC) model.

Then boot from the newly created k3OS USB Stick and choose k3OS LiveCD & Installer.

![](/images/blog/grub.png)

Grub

Soon you get a message to login using the **rancher** user.

![](/images/blog/rancher1st.png)

When logging in with the rancher user, you have 2 options: Use the live Kubernetes system (that is already running) or install k3OS locally. We want to install it and type:

```
sudo os-config
```

![k3OS installation](/images/blog/k3OS.png)

We install to the local disk (1), don't use a cloud-init file, don't want to grant GitHub user SSH access and setup WiFi for the Intel compute stick.

Then we install the **server** and a cluster secret. An agent is only required when expanding the cluster and adding nodes (in that case you also need the cluster secret).

In my case, the installation device was named **/dev/mmcblk0**. But it might be different depending on the Compute Stick type.

When the installation is completed, the setup automatically triggers a reboot and the k3OS should be up and running on the local storage some seconds later.

## SSH and Kubectl

SSH is automatically active and you can simply login using your rancher account and play around:

```
ssh rancher@k3OS
sudo service ntpd start #(to run NTP time sync)
kubectl get nodes # show Kubernetes resources
```

To access the Kubernetes environment remotely, you can simply copy the config file /etc/rancher/k3s/k3s.yaml and replace the localhost (127.0.0.1) server address with the ip address of the k3OS system.

```
scp rancher@k3OS:/etc/rancher/k3s/k3s.yaml  ~/.kube/config # or change the target path
```

find the line server: and change 127.0.0.1 to the k3OS address.

Run a **kubectl get nodes**locally.

## Summary

You can run container, deploy helm charts aso. on that mini computer within its resource limits. I was pretty amazed to see how easy and straightforward k3OS was installed and the Kubernetes cluster was immediately up and running.

Maybe one last hint - if you want to change the Wifi configuration, you can do that here:

```
sudo cat /k3os/system/config.yaml # view file content
sudo vi /k3os/system/config.yaml
```
