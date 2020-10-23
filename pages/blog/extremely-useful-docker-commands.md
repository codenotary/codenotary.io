---
title: "extremely useful docker commands"
tags: ["Ops", "opvizor"]
date: "2019-03-19"
---

No matter if you're just getting started with docker or you're already a professional, there are situations when you can't remember the correct command or you're just confused by the order of parameters.

Therefore we decided to create our own docker commands cheat sheet and share it with you.

## Top 16 docker commands

1. [docker ps](https://docs.docker.com/engine/reference/commandline/ps/)  list running containers. 
2. [docker ps -a](https://docs.docker.com/engine/reference/commandline/ps/) list all container including stopped container
3. [docker pull](https://docs.docker.com/engine/reference/commandline/pull/)  download a image from [Docker Hub](https://hub.docker.com/) registry. Link to the docker image is always shown on the right at dockerhub.
4. [docker build](https://docs.docker.com/engine/reference/commandline/build/)  is used to build your own container based on a Dockerfile. Common use is _**docker build .**_ to build a container based on the Dockerfile in the current directory (the dot). _**docker build -t "myimage:latest" .**_ creates a container and stores the image under the given name
5. [docker images](https://docs.docker.com/engine/reference/commandline/image/) or _**docker image ls**_ shows all local storage images
6. [docker run](https://docs.docker.com/engine/reference/run/)  Run a docker container based on an image, i. e. _**docker run myimage -it bash**_. If no local image can be found docker run automatically tries to download the image from Docker hub.
7. [docker logs](https://docs.docker.com/engine/reference/commandline/logs/) display the logs of a container, you specified. To continue showing log updates just use _**docker logs -f mycontainer**_
8. [docker volume ls](https://docs.docker.com/engine/reference/commandline/volume_ls/)  lists the [volumes](https://docs.docker.com/storage/volumes/), which are commonly used for persisting data of Docker containers.
9. [docker network ls](https://docs.docker.com/engine/reference/commandline/network/) - list all networks available for docker container
10. **_docker network connect <networkname> <container>_** adds the container to the given container network. That enables container communication by simple container name instead of IP.
11. [docker rm](https://docs.docker.com/engine/reference/commandline/rm/)   removes one or more containers. _**docker rm mycontainer**_, but make sure the container is not running
12. [docker rmi](https://docs.docker.com/engine/reference/commandline/rmi/)  removes one or more images. _**docker rmi myimage**_, but make sure no running container is based on that image
13. [docker stop](https://docs.docker.com/engine/reference/commandline/stop/)   stops one or more containers. **_docker stop mycontainer_** stops one container, while **_docker stop $(docker ps -a -q)_** stops all running containers. 
14. [docker start](https://docs.docker.com/engine/reference/commandline/start/) - starts a stopped container using the last state
15. [docker update](https://docs.docker.com/engine/reference/commandline/update/) --restart=no <container> updates container policies, that is especially helpful when your container is stuck in a crash loop
16. [docker cp](https://docs.docker.com/engine/reference/commandline/cp/) to copy files from a running container to the host or the way around. _**docker cp <container>:/etc/file .**_ to copy /etc/file to your current directory.

Some combinations that help a lot:

- kill all running containers with _**docker kill $(docker ps -q)**_
- delete all stopped containers with _**docker rm $(docker ps -a -q)**_
- delete all images with **_docker rmi $(docker images -q)_**
- update and stop a container that is in a crash-loop with _**docker update --restart=no <id> && docker stop <id>**_
- bash shell into container _**docker exec -i -t <container> /bin/bash**_ \- if bash is not available use /bin/sh
- bash shell with root if container is running in a different user context **_docker exec -i -t -u root <container> /bin/bash_**

## What about resource usage 

Get docker container including size: _**docker ps -s**_ 

_**![docker commands](/images/blog/docker-size.png)**_

Get docker container disk utilization: **_docker system df_**

**_![docker system df](/images/blog/systemdf.png)_**

## What about wasted resources?

The first command is used to remove local container images that are not used by any container and are not tagged. Its a pretty safe command to clean up your local filesystem

[docker image prune](https://docs.docker.com/config/pruning/)

If you want to clean up and delete all unused container images, just add -a

_**docker image prune -a**_

only clean up container images that have been created over 24 hours ago run

_**docker image prune -a --filter "until=24h"**_

same can be done with container, that are not running anymore

_**docker container prune**_

That's it for now - please let us know if you like to add a command you feel is extremely important. We're doing our best to add these in future blog posts are just append to the current posts. 

Btw. as we covered the [Podman](https://www.opvizor.com/installation-of-podman-to-run-docker-container-part-1) project some days ago, most of these commands work with podman instead of docker as well.
