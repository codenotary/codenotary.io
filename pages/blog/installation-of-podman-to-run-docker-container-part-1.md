---
title: "Installation of Podman to run docker container - Part 1"
tags: ["Ops", "opvizor"]
date: "2019-03-12"
---

Our lab guys at Opvizor always try to find the new and upcoming DevOps tools that our customers might use in the future - or maybe us internally.

This time we thought its time to try the installation of [Podman and Buildah](https://podman.io/releases/), a toolset for run and manage docker and kubernetes container.

We typically use Debian, Ubuntu or Photon OS as our operating system base, but this time we wanted to give [Fedora 29](https://getfedora.org/) a try.

Let's get into the details and install Fedora and Podman.

# What is Podman?

Before we dig into the installation of Podman, lets get into some details what Podman is all about.

Simply put: \`alias docker=podman\` is stated on the website and for most of the command line parameters that's exactly true. But Podman is a more secure way to run container.

Podman uses a traditional fork/exec model for the container, so the container process is an offspring of the Podman process, while Docker uses a client/server model. The **docker** command is executed by the Docker client tool, and it communicates with the Docker daemon via client/server operations. The Docker daemon creates the container and handles communications of stdin/stdout back to the Docker client tool.

The default loginuid of processes (before their loginuid is set) is 4294967295. Since the container is an offspring of the Docker daemon and the Docker daemon is a child of the init system, we see that systemd, Docker daemon, and the container processes all have the same loginuid, 4294967295, which audit refers to as the _unset_ audit UID.

Podman is a container runtime providing a very similar features as Docker. And as already hinted, it doesn’t require any daemon to run on your system, and it can also run without root privileges. 

There is a nice article covering a lot of the differences between Podman and docker.

[https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users/](https://developers.redhat.com/blog/2019/02/21/podman-and-buildah-for-docker-users/)

# Fedora 29 installation

The Fedora installation is quite straightforward, so nothing special to show. Just make sure that you either create a decent sized second disk or make sure your first disk is large enough to store some container images without filling up. I go for 32GB as a demo box starter.

## Fedora configure fix IP

Unfortunately nearly all linux distributions have a different idea of network configuration. Therefore, let's add the procedure here.

Start with a _ifconfig_ to see the used network adapter, i. e. _ens192_

`vi /etc/sysconfig/network-scripts/ifcfg-ens192TYPE=Ethernet PROXY_METHOD=none BROWSER_ONLY=no BOOTPROTO=dhcp DEFROUTE=yes IPV4_FAILURE_FATAL=no IPV6INIT=yes IPV6_AUTOCONF=yes IPV6_DEFROUTE=yes IPV6_FAILURE_FATAL=no IPV6_ADDR_GEN_MODE=stable-privacy NAME=ens192 UUID=54d4f9f9-fb85-317c-bc44-xxxxxxxxxxxx ONBOOT=yes AUTOCONNECT_PRIORITY=-999 DEVICE=ens192`

and change it to your static configuration, i. e. 192.168.0.200

`TYPE=Ethernet PROXY_METHOD=none BROWSER_ONLY=no BOOTPROTO=none DEFROUTE=yes IPV4_FAILURE_FATAL=no IPV6INIT=yes IPV6_AUTOCONF=yes IPV6_DEFROUTE=yes IPV6_FAILURE_FATAL=no IPV6_ADDR_GEN_MODE=stable-privacy NAME=ens192 UUID=54d4f9f9-fb85-317c-bc44-fxxxxxxxxxxxx ONBOOT=yes AUTOCONNECT_PRIORITY=-999 DEVICE=ens192 IPADDR=192.168.0.230 PREFIX=24 GATEWAY=192.168.0.1 DNS1=9.9.9.9`

_sudo reboot_ afterwards to get the new configuration live.

## Fedora Update and installation of Podman

First thing to do is of course the update of existing packages and the installation of new packages required to run Podman.

`sudo dnf update sudo dnf install -y podman`

![Installation of Podman](/images/blog/install.jpg)

Installation finished successfully for Fedora. When using a different distribution like Ubuntu, Debian or whatever, please check the installation [readme of Podman](https://github.com/containers/libpod/blob/master/docs/tutorials/podman_tutorial.md).

## Podman commands

When you're used to the docker command, podman is amazingly simple to learn - you can just use the same parameters.

podman ps # show all running container

podman ps -a # show all container

podman images # show all container images

The last command might make you think, if you already have docker and docker container images installed - nothing shows up. Reason is, that podman uses a different location to store the container images.

Run a simple "Hello World" with a one-time container

_podman run --rm -it fedora:28 echo "Hello world!"_

Building a new container works exactly as docker.

cat Dockerfile FROM fedora:28 RUN dnf -y install cowsaypodman build . -t hello-worldpodman run --rm -it hello-world cowsay "Hello!"

Next post we're digging into Buildah and more Podman commands.
