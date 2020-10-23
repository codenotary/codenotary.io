---
title: "Install and use Docker Swarm"
tags: ["Ops", "opvizor"]
date: "2019-08-13"
---

This post describes the installation of [Docker swarm](https://docs.docker.com/engine/swarm/) using Ubuntu 18.04 server virtual machines running on top of VMware vSphere.

After the installation and spinning up some container for ESXi, Ubuntu Linux and Docker Swarm.

This step is the preparation for a future post that covers monitoring of Docker Swarm and all components.

## Setup

The setup consists of 3 virtual machines running Ubuntu 18.04 LTS on vSphere 6.7.

As its a test environment the VMs have been configured with 4 vCPUs, 8 GB RAM and 32 GB disk. Please make sure to adjust your environment to fit your needs.

VMs are named swarm1, swarm2 and swarm3.

## Install Docker CE

After the common sudo apt update & sudo apt upgrade, we install Docker CE.

sudo apt install apt-transport-https ca-certificates curl software-properties-commoncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -sudo add-apt-repository "deb \[arch=amd64\] https://download.docker.com/linux/ubuntu bionic stable"sudo apt updatesudo apt install docker-cesudo systemctl status dockersudo usermod -aG docker ${USER}apt-cache policy docker-cesudo systemctl start docker
sudo systemctl enable docker

## Install Docker swarm

Swarm is automatically part of the Docker CE installation, but we need to make some preparations.

1 Node should be the manager, while the other nodes become worker nodes. Let's reflect that within the hosts file (of course dns is preferable, but doesn't matter so much in a test environment).

\# sudo vi /etc/hosts
192.168.0.12 swarm1 manager1
192.168.0.14 swarm2 worker1
192.168.0.15 swarm3 worker2

## Initialize Docker swarm

You might notice that we named 192.168.0.12 manager1 - please run the following command only on the manager node

docker swarm init --advertise-addr 192.168.0.12

![docker swarm init master](/images/blog/init_master.png)

Run the following command on the 2 worker nodes, based on the output of the docker swarm init command.

docker swarm join --token SWMTKN-1-54hsijoskp3urbgeni9fqzz35yjzg527lvxxkg5qdg4ce7dqyz-bf1sladxf3t5v5wtl9droybdc 192.168.0.12:2377

You should receive a message like:

This node joined a swarm as a worker.

## Setup Docker swarm UI

sudo apt install unzip
wget https://github.com/dockersamples/docker-swarm-visualizer/archive/master.zip
unzip master.zip
mv docker-swarm-visualizer-master dockersamples
docker run -it -d -p 5000:8080 -v /var/run/docker.sock:/var/run/docker.sock dockersamples/visualizer

![docker swam ui](/images/blog/swarm-visual.png)

## Check Docker Swarm status

You can always check your Docker Swarm cluster and how many nodes are available using **docker node ls**

![Docker Swarm status](/images/blog/docker-node-ls.png)

Use docker service ls to check the running services: **docker service ls**

Or more details of a specific service: **docker service ps redis**

## Deploy first service

As Docker is now managing a host cluster for container services and not a single host engine, you need to deploy container (services) in a different way. Lets deploy a redis database as a service with 2 replicas.

A replica is a kind of an instance. The benefit of multiple replicas is, that there are always more container running to takeover a service. If a container or container host would go down, Docker Swarm would restart the container of that service, but its not instant (can take some seconds). Having multiple replicas means an instant takeover to the remaining replicas without any restart.

docker service create --name redis --replicas 2 --publish 6379:6379 redis

**\--publish**

When Docker publishes a port for a service, it does so by **listening on that port across all nodes within the Swarm Cluster**. When traffic arrives on that port, that traffic is then routed to a container running for that service. While this concept is pretty standard when all nodes are running a service’s container, this concept gets interesting when we have more nodes than we do replicas. Despite not running replicas on all Swarm nodes, the published service will be available on all nodes.

![Docker service deploy](/images/blog/publish_service.png)

You can also create a service first and scale up later - lets deploy nginx

\# start with one service
docker service create --name nginx-web --publish 8080:80 nginx# scale out to 3 replicas
docker service scale nginx-web=3

![Docker Swarm multiple services](/images/blog/swam-vis2.png)

user@swarm1:~$ docker service ls
ID                  NAME                MODE                REPLICAS            IMAGE               PORTS
8a0wumpvlm7u        nginx-web           replicated          3/3                 nginx:latest        \*:8080->80/tcp
hya01a0hl6k0        redis               replicated          2/2                 redis:latest        \*:6379->6379/tcp

You can now simply check if Redis is responding on all nodes, despite the fact its only running on swarm1 and swarm2.

redis-cli -h 192.168.0.12 -p 6379
redis-cli -h 192.168.0.14 -p 6379
redis-cli -h 192.168.0.15 -p 6379

## multiple container - Wordpress + Database

This setup consists of multiple components: secrets, network, MariaDB Database service and Wordpress service.

**Secrets**

Lets create the passwords for the root database and the wordpress database first and store them as a secret available on every Swarm node.

openssl rand -base64 20 | docker secret create root\_db\_password -
openssl rand -base64 20 | docker secret create wp\_db\_password -

**docker secret ls** to show all secrets

### Network

Now we need a network connectivity across the cluster.

docker network create -d overlay wordpress-net

### Create MariaDB service

docker service create 
    --name mariadb 
    --replicas 1 
    --constraint=node.role==manager 
    --network wordpress-net 
    --secret source=root\_db\_password,target=root\_db\_password 
    --secret source=wp\_db\_password,target=wp\_db\_password 
    -e MYSQL\_ROOT\_PASSWORD\_FILE=/run/secrets/root\_db\_password 
    -e MYSQL\_PASSWORD\_FILE=/run/secrets/wp\_db\_password 
    -e MYSQL\_USER=wp 
    -e MYSQL\_DATABASE=wp 
    mariadb:10.1

### Create Wordpress service

docker service create 
    --name wp 
    --constraint=node.role==worker 
    --replicas 1 
    --network wordpress-net 
    --publish 80:80 
    --secret source=wp\_db\_password,target=wp\_db\_password,mode=0400 
    -e WORDPRESS\_DB\_USER=wp 
    -e WORDPRESS\_DB\_PASSWORD\_FILE=/run/secrets/wp\_db\_password 
    -e WORDPRESS\_DB\_HOST=mariadb 
    -e WORDPRESS\_DB\_NAME=wp 
    wordpress:4.7

If you visit any Docker Swarm node on Port 80 you should see the Wordpress installer.
