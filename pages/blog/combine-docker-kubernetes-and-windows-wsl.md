---
title: "Combine Docker, Kubernetes and Windows WSL"
tags: ["Ops", "opvizor"]
date: "2019-07-09"
---

When running Windows 10 on your laptop, there are a couple of new options you can explore that simplify your life when it comes to Linux integration and also Docker and even Kubernetes.

This blog post is briefly covering the installation of the Windows WSL (Windows subsystem for Linux), the configuration of Docker to enable Kubernetes. Finally we make sure that Linux docker and kubernetes management commands are able to connect from the WSL Linux to the Windows Docker and Kubernetes.

# Windows WSL (Windows Subsystem for Linux) installation

The WSL is really an amazing step to combine the best of Microsoft Windows and the best of Linux (Ubuntu in our example) with only a few limitations.

Please make sure to have the latest patch level of Windows 10 installed, so the WSL is no technical preview anymore.

To get the WSL feature enabled, just open an PowerShell console and run as Administrator and type:

Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux

If asked, please restart your computer before continuing.

Search for Linux in the Windows Store and install your preferred linux distribution. We go for Ubuntu 18.04 in this blog post.

![Windows WSL Windows Store](/images/blog/wsl-linux.png)

Restart your system again, when requested and you have Linux installed inside the Windows WSL.

# Install Docker for Windows

Next application to be installed is Docker. Docker uses the Hyper-V functionality of Windows, so please be aware, that a hypervisor is installed on your system including new network devices like a virtual switch. 

**IMPORTANT**: That new virtual switch can mess your system up as sometimes the name resolution gets broken. 

If you run into that issue, that makes opening new websites unbelievable slow, you should consider the following workaround.

![Windows change network adapter settings](/images/blog/changeadapter.png)

Select change adapter options.

![Microsoft Hyper-v vSwitch](/images/blog/vswitch.png)

Select vEthernet (Default Switch) and Properties

![add DNS server to the vSwitch](/images/blog/dns.png)

add DNS server manually to your IP v4 and IP v6 settings.

IP v4 DNS examples:

Google DNS: 8.8.8.8

Quad9 DNS: 9.9.9.9

IP v6 DNS examples:

Google DNS: 2001:4860:4860::8888

Quad9 DNS: 2620:fe::fe, 2620:fe::9

Despite that nasty Hyper-V vSwitch issue Docker installation itself is extremely straightforward and you can find the download links and quickguide here: [https://docs.docker.com/docker-for-windows/install/](https://docs.docker.com/docker-for-windows/install/)

## Enable Kubernetes on Docker for Windows

Now you can get really excited because Kubernetes is part of the Docker for Windows installation in the meantime and only needs to be activated.

To do so, enter the Docker settings:

![Docker Settings](/images/blog/docker-settings.png)

and enable Kubernetes:

![Kubernetes Docker for Windows](/images/blog/enablekubernetes.png)

That's it! The moment you see the little green icon at the bottom left, your Kubernetes is up and running and ready to manage your docker setup.

# Install Docker inside the Windows WSL

Our goal is to control Docker and Kubernetes from within the Windows WSL, therefore we need to install the Docker and Kubernetes commands.

Lets start with Docker

sudo apt-get install apt-transport-https ca-certificates curl software-properties-commoncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -sudo add-apt-repository "deb \[arch=amd64\] https://download.docker.com/linux/ubuntu $(lsb\_release -cs) stable"sudo apt-get update && sudo apt-get install docker-ce-cli

Now we need to combine the Linux installation with the Windows runtime:

echo "export DOCKER\_HOST=tcp://localhost:2375" >> ~/.bashrc && source ~/.bashrc

As Docker likes to access the filesystem the same way, we also need to change the default WSL mountpoints for the Windows drive letters. Therefore we create a wsl.conf file that changes the mountpoints to c, d aso instead of /mnt/c aso.

Please create the file /etc/wsl.conf (sudo touch /etc/wsl.conf) and add the following content.

\[automount\] 
root = / 
options = "metadata"

We also need to configure Docker to expose the communication port on Port 2375:

![Docker Port expose](/images/blog/expose.png)

To make sure all works, please restart your computer now.

# Install Kubernetes Kubectl

The last step after the restart is the installation of the kubectl command. Open the Windows WSL (you can just type bash in the program search) and run the following commands:

curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add - 
echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update && sudo apt-get install -y kubectl

Only one step left - linking the configs to the right location: Please make sure to change {Username} to your corresponding user homedirectory.

ln -s /c/Users/{Username}/.kube/config ~/.kube/config

Please test your new configured setup:

**docker images**

**kubectl get all**

Sometimes I realized after a reboot or sleep mode resume, that Kubernetes is not starting automatically. The easiest way to force a restart is to change the docker dns and click apply:

![WSL Docker DNS](/images/blog/dockerdns.png)
