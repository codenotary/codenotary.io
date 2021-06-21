---
title: "Photon OS 3 Beta first steps guide"
image: /images/blog/highlights.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-12-11"
---

[Photon OS](https://vmware.github.io/photon/) is a popular choice, when running container on top of VMware vSphere. The linux operating system with a very small footprint has been tuned to run on vSphere at best performance.

Let´s see how to get it up and running - from deploying the OVF template to running docker container and monitoring the system using Performance Analyzer.

Before we start deploying, let´s take a look at the Photon OS summary:

Project Photon OS™ is an open source, minimal Linux container host that is optimized for cloud-native applications, cloud platforms, and VMware infrastructure. Photon OS 2.0 includes new security features, OS management capabilities, and updated packages. We invite partners, customers, and community members to collaborate on using Photon OS to run high-performance virtual machines and containerized applications.

- **Optimized for VMware vSphere®**: The Linux kernel is tuned for performance when Photon OS runs on vSphere.
- **Support for containers**: Photon OS includes the Docker daemon and works with container orchestration frameworks, such as Mesos and Kubernetes.
- **Efficient lifecycle management**: Photon OS is easy to manage, patch, and update.
- **Security hardened**: The kernel and other aspects of the operating system are built with an emphasis on security.

There is also a [factsheet](https://vmware.github.io/photon/assets/files/photon-os-datasheet.pdf) available

The result will be a updated, running Photon OS, ready to run container and fully monitored.

![monitor all systems](/images/blog/highlights.jpg)

# Deploy the OVA image

[![Deploy Photon OS OVF](/images/blog/deploy.jpg)](https://github.com/vmware/photon/wiki/Downloading-Photon-OS)

You can find the latest OVF Template here and add the download link into the deployment wizard: 

[https://github.com/vmware/photon/wiki/Downloading-Photon-OS](https://github.com/vmware/photon/wiki/Downloading-Photon-OS)

![Deploy from url](/images/blog/deploy2.jpg)

Finish the Deploy OVF template wizard and power on the Photon OS VM that will use a DHCP address for now.

Before you start the new virtual machine, please make sure to configure the cpu and memory resources to match your requirements. Running container inside a virtual machine is very resource intense any you should keep an eye on the resource usage. Btw. you can always monitor the Photon OS as well as the docker container using CNIL Metrics and Logs. Just start a free trial today.

# Set a manual ip address

As the VMware tools are preinstalled, you can check the current IP address and login using SSH or of course the web client console.

![Check initial IP address](/images/blog/initialip.jpg)

Use the **root** account and the initial password **changeme**

Then you need to change the root password to something harder to guess.

# IP address setup

If you want to stick with the dynamic ip address, you can skip this section. For a manual ip address, you can follow these steps:

1. best is to rename the following file /etc/systemd/network/99-dhcp-en.network **mv /etc/systemd/network/99-dhcp-en.network /etc/systemd/network/10-manual-en.network**
2. change the file content to match your network, example:

\===============

\[Match\]

Name=e\*

\[Network\]

DHCP=no

Address=192.168.0.10/24

Gateway=192.168.0.1

DNS=8.8.8.8 9.9.9.9

Domains=mydomain.local

NTP=0.pool.ntp.org 1.pool.ntp.org

\===============

If you want to change the host name, please do so in /etc/hostname

**reboot** and check the ip address, using **ip a**

# Install Photon OS patches

To update Photon OS, just connect to the system and type:

**tdnf update**

**tdnf upgrade**

That´s it.

# Activate SUDO

SUDO is not installed by default, but is highly recommended to setup.

**tdnf install sudo**

Then add a new user that will be able to use sudo.

**useradd -m -G sudo user**

(-m creates the home directory /home/user; -G adds the user to the sudoers group)

set the password for the new user

**passwd user**

That´s it. Log out and use the new user account to log in. Try an update using sudo and the user password.

**sudo tdnf update**

# Enable Docker

Docker is installed by default but not activated at boot.

To activate docker type:

**sudo systemctl enable docker**

To start docker type:

**sudo systemctl start docker**

# Install Docker-Compose

More often than not, you want to run a bunch of container using docker-compose. As its not installed by default, you need to download the [latest docker-compose release](https://docs.docker.com/compose/install/) - currently its 1.23.1

 **curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose**

Then make docker-compose executable:

**chmod +x /usr/local/bin/docker-compose**

# Monitor Photon OS

wget: 

**sudo tdnf install wget**

Performance Analyzer agent for Linux: 

**wget http://perfanalyzer\_ip\_fqdn/packages/telegraf.rpm**

**sudo rpm -i --nodeps telegraf.rpm**

replace the **telegraf.conf** under **/etc/telegraf** to fit your needs.

**sudo wget -O telegraf.conf http://perfanalyzer\_ip\_fqdn/packages/linuxconf/telegraf.conf**

Install and start the service

**sudo wget -O /etc/systemd/system/telegraf.service https://raw.githubusercontent.com/influxdata/telegraf/master/scripts/telegraf.service**

**sudo systemctl enable telegraf**

**sudo systemctl start telegraf**

**![Monitor Photon OS using Performance Analyzer](/images/blog/perfanalyzer.jpg)**

To monitor docker as well, you need to allow the telegraf user to access the docker socket:

**sudo usermod -aG docker telegraf**

and add the following section at the end of the telegraf.conf file to collect docker metrics as well:

\[\[inputs.docker\]\]

  endpoint = "unix:///var/run/docker.sock"

  container\_names = \[\]

  timeout = "5s"

  perdevice = true

  ## Whether to report for each container total blkio and network stats or not

  total = false

  ## docker labels to include and exclude as tags.  Globs accepted.

  ## Note that an empty array for both will include all labels as tags

  docker\_label\_include = \[\]

  docker\_label\_exclude = \[\]

Restart the telegraf service to load the new configuration.

**sudo systemctl restart telegraf**

That´s it - all done and fully monitored:

![Docker monitoring on Photon OS](/images/blog/docker.jpg)
