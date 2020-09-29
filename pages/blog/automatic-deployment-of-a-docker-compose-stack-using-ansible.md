---
title: "Automatic deployment of a Docker Compose stack using Ansible"
date: "2020-09-29"
image: "/images/blog/ansible-flow.png"
tags: ["Ansible", "Docker", "Docker-Compose", "Deployment"]

---
# Automatic deployment of a Docker Compose stack using Ansible

The second of the twelve rules of Joel Spolsky is “can you make a build in one step?”. That is, how many steps does it take to make a shipping build from the latest source snapshot? 

Is it important to have an automatic procedure that transforms a bunch of source repositories, scripts, batch files, voodoo dolls in a final product that can be shipped and deployed.

(see more on the Joel’s 12 rules here: [https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code](https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code)).

But what if your application consists of a bunch of docker images, some on Docker Hub, some build on demand, glued together in a docker-compose stack, that has to be deployed in a VM that runs without an internet connection as well?

Luckily, there are some tools that can help us.

If we want to automate a task, we won’t find a better way than using [Ansible](https://www.ansible.com/). Ansible is easy to learn (well, depends on the definition of easy), flexible enough to cover all the corner cases and powerful enough to get the job done.

Then, we need **two** Virtual Machines (VM): one will be our builder, with a hefty internet connection, powerful CPU and fast disks. The second one will be our target.

In Ansible we’ll use for three main jobs:

*   Prepare the target VM
*   Build the Docker images on a worker VM
*   Copy and Import the Docker images on the target VM

If the target VM has no network connectivity, we can copy the images using some other ways (let’s say an usb pendrive), but the other steps remain valid.


![Ansible Docker-Compose Flow](/images/blog/ansible-flow.png "Ansible Deployment Flow")



## First: prepare the target

On the target we will need Docker (of course) and [Docker Compose](https://docs.docker.com/compose/).

Let’s prepare an Ansible playbook to install docker, docker-compose and all the other requirements:


```
- hosts: lc
  tasks:
  - name: install packets (1)
	apt:
  	name:
  	- apt-transport-https
  	- ca-certificates
  	- curl
  	- gnupg-agent
  	- software-properties-common
  	- vim
  	- haveged


  - name: fetch docker apt key
	shell: curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add -


  - name: Add docker repository
	shell: add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable"


  - name: Refresh cache
	apt:
  	update_cache: yes
  - name: Update distro
	apt:
  	name: "*"
  	state: latest
  - name: Update all packages to the latest version
	apt:
  	upgrade: dist 	 
  - name: install packets (2)
	apt:
  	name:
  	- docker-ce
  	- docker-ce-cli
  	- containerd.io
  - name: install docker compose    
	get_url:
  	url: https://github.com/docker/compose/releases/download/1.27.3/docker-compose-Linux-x86_64
  	dest: /usr/local/bin/docker-compose
  	mode: 755
```




**Let's dig into these steps in greater detail:**

First we install a bunch of packets from the standard repository ([Debian](https://www.debian.org/), in our case). 

This is the output on my machine (my target is named “lc”)


![Ansible Play output](/images/blog/ansible-output.png "Ansible output")

*The big ugly purple warning is shown because I’ve used the command “curl” in the script. Ansible has a plugin with the same functionality, so it warns us that we might do better using it. In this case, it is irrelevant.*

In case you’re wondering what `haveged` is. It's a little daemon that feeds some entropy in the kernel entropy pool.

**What is an entropy pool?**

When your software needs randomness, it spills what is needed from a virtual dice rolling machine, called an entropy pool. Docker, and Compose, use a lot of randomness. 

You can experience unresponsiveness, especially in the startup phase, when the virtual dice are spoiled. Especially on virtual machines, you can find yourself typing “docker-compose up” and be stuck for minutes. That is because the entropy pool is empty and the system is waiting for the random bits to gather themselves in the pool.

So we add a little service that provides some more randomness, and helps things run smoothly.

In case you’re interested and want to know more, [this](https://blog.cloudflare.com/ensuring-randomness-with-linuxs-random-number-generator/) is a nice blog article about the kernel random pool.

Next we fetch the Docker GPG key, and add it to the apt system, we add the Docker repository and we fetch the latest docker version. 

Docker Compose is directly downloaded into `/usr/local/bin`.


## Building the Container images

Now the target is ready and we can focus on the worker and building all the required images.

The steps are: 



1. clear all the images that are left from previous tasks
2. pull and build all the required images and export them.

To clear all images, simply use: 


```
docker images -a -q|xargs -r docker rmi -f
```


That removes all the images registered to your local Docker system.

Next, we can change into the project directory and launch a “build”:


```
  - name: prune phase
	shell:
  	  cmd: docker images -a -q|xargs -r docker rmi -f
  - name: pull phase
	shell:
  	  chdir: projectdir
  	  cmd: docker-compose pull
  - name: build phase
	shell:
  	  chdir: projectdir
    	  cmd: docker-compose build --parallel
```


Use `--parallel` if you want to test your processor fan.

Now that the images have been built, we can export them. 

**Btw. here comes another trick: some images will have a slash (“/”) in the name. So we can not use the image name as a file name. **

Encode the name in base64 and you’re good. It’s less readable, but who cares in that case?


```
  - name: save phase
	shell:
  	   cmd: docker save {{item}} | gzip > {{item|b64encode}}.tgz
	loop: "{{image_list}}"
```


Make sure to define the image_list variable with the image names.


## Importing the Container images

Once the images are copied to the target machine, the loop is pretty similar to the export:


```
  - name: docker import
	shell:
  	   cmd: docker load < {{item|b64encode}}.tgz
	loop: "{{image_list}}"
```


That will load all the images into the local Docker registry and we’re ready to go! 

**We want our Docker Compose stack to start with the system, therefore we still need a service to make all run automatically.**

Systemd is our friend


```
- hosts: target
  tasks:
  - name: Service file creation
	copy:
  	  dest: /etc/systemd/system/docker-compose.service
  	  content: |
    	[Unit]
    	Description=Docker Compose Service
    	Requires=docker.service
    	After=docker.service
    	[Service]
    	Type=oneshot
    	RemainAfterExit=true
    	WorkingDirectory=/projectdirectory
    	ExecStart=/usr/local/bin/docker-compose up -d --remove-orphans
    	ExecStop=/usr/local/bin/docker-compose down
    	[Install]
    	WantedBy=multi-user.target
  - name: Systemd service activation
	systemd:
  	name: docker-compose.service
  	enabled: yes
  	state: started
```


This playbook will install a systemd service that will start and stop our stack. 

Job done.
