---
title: "Protect your docker environment using Performance Analyzer and CodeNotary"
tags: ["Ops", "opvizor"]
date: "2019-05-08"
---

Countless IT infrastructures run docker container for testing, production or research. Most docker container are based on images that are downloaded from Docker Hub. That decision involved a big portion of trust, that the image on Docker Hub is a good one. That suddenly changes with the [dockerhub.com breach](https://www.theinquirer.net/inquirer/news/3074793/docker-hub-breach) about a week ago. Despite the fact that compared to the total user base only a few accounts (percentage-wise) were affected, it left a bad feeling about what is running in your own data center.

As we wanted to protect our own development environment as well as the environment of some of our customers (Zero Trust Consortium as an example), we found a decent solution to solve that issue once and for all.

That blog post will cover the following to protect your docker environment:

- Tag your docker images in an immutable way
- check your running docker container if they are based on your supported container images (or not)
- track and monitor the container using Performance Analyzer

## Background

Our customer [Zero Trust Consortium](https://www.zerotrustconsortium.org), who runs a consortium block chain for the software industry, is based on Parity Ethereum. The last thing you want to happen to a block chain is, that you have nodes running, that are based on a manipulated version of the software. Just imagine, you lose majority because of changed docker container images, and all of the block content is gone as it becomes untrusted.

The parity team was very aware of that and removed the Docker Hub images when they learned about the dockerhub.com breach.

![protect your docker environment](/images/blog/dockerhub-parity.png)

Parity is just an example for that use case. In reality there are countless container running wild and you want to protect your docker environment.

[https://github.com/paritytech/parity-ethereum/issues/10627](https://github.com/paritytech/parity-ethereum/issues/10627)

So we, at Opvizor, decided to create a solution to protect the ZTC nodes. We're very proud of the result and the best thing is, that the solution can be used in a universal way.

What was needed:

1. bulletproof way to tag and verify docker images that the customer allows to run (kind of a whitelist)
2. continuously monitoring and verification of running containers
3. data forwarder for the results
4. visualization that includes alerting

Let's start step by step.

## Bulletproof way to tag and verify docker images that the customer allows to run (kind of a whitelist)

[CodeNotary](https://www.codenotary.io), a software company that provides code and file integrity and identity verification, that runs on top of the ZTC block chain, released a [docker container support](https://github.com/vchain-us/vcn/blob/master/docs/DOCKERINTEGRATION.md) some weeks ago.

That way we can make sure, that all the images we want to use are in really in use. One of the big issues with docker are there own version tags. While extremely convenient (especially latest or stable) during deployment, it makes it very hard to pinpoint if all containers are really running with the same version in the whole environment.

In the case of ZTC, the nodes are distributed around the globe and maintained by complete independent companies. Although the version is used as a tag, they absolutely needed to make sure, the docker image integrity is there. Best solution would continuously check while integrated in a seamless way.

As ZTC already had a CodeNotary account, they signed all docker container images, they were certain to be real and good.

That happens with the vcn command (everyone can [download or build](https://github.com/vchain-us/vcn) they command):

**vcn sign docker://parity/parity:ztc**

While the command looks simple, what happens is that a unique checksum of the container image is calculated, and written to the block chain including the signer information.

**That way, nobody can just change the checksum by hacking into a page like dockerhub.com**.

Of course, you can directly verify the container image afterwards:

**vcn verify docker://parity/parity:ztc**

If you want to read more about the process, please check the following diagram:

[![codenotary process](/images/blog/vcn_hiwy.png)](https://github.com/vchain-us/vcn/blob/master/docs/vcn_hiwb.png)

Let's continue to add the monitoring and verification part.

## Continuously monitoring and verification of running containers

To be able to continuously monitor the running docker container and the docker container image they are built of, we need a sidecar container with read access to the docker host.

The CodeNotary developer team were a great help, as they maintain a new Github project to build and run a vcn watchdog in a container: [vcn-watchdog](https://github.com/vchain-us/vcn-watchdog)

## Data forwarder for the results

The build is straightforward:

1. Clone the Repo
2. Build the container
3. Change the verify script to your needs
4. Run the container

git clone https://github.com/vchain-us/vcn-watchdog.git
docker-compose build
docker-compose up -d

We used a slightly modified build, that will be released in a few days that produces --json output. If you already want to use it today, please use the unstable build.

Otherwise you need to slightly change the verify script or limit yourself to the err function.

We changed the verify script to forward the results to our InfluxDB:

#!/bin/bash
export CHECK\_INTERVAL="60"
node=$(echo "${NODENAME}")function ok() {
    name=$(jq -r ".artifact.name" <<< ${2})
    level=$(jq -r ".verification.level" <<< ${2})
    status=$(jq -r ".verification.status" <<< ${2})
    publisher=$(jq -r ".artifact.publisher" <<< ${2})
    echo "Container ${1} (${name}) check successful (publisher: ${publisher}, level: ${level}, status: ${status})"
    curl -i -XPOST 'http://influx:8086/write?db=mydb'  
	--data-binary "vcn\_verification,hostname=$node,container\_name=${3},container\_id=${1},status=${status},level=${level} failed=0,status=${status},level=${level}" 
	> /dev/null 2>&1
   } function err() {
    echo "Container ${1} (${2}) verification failed" >&2
    curl -i -XPOST 'http://influx:8086/write?db=mydb' --data-binary 
	"vcn\_verification,hostname=$node,container\_name=${2},container\_id=${1} failed=1" 
	> /dev/null 2>&1
   }while true; do
    docker ps -q | grep -v ${HOSTNAME} | while read id; do
        image=$(docker inspect "${id}" | jq '.\[0\].Config.Image' | sed 's/"//g')
        json=$(vcn v -o=json "docker://${image}" 2> /dev/null)
        if \[ $? -eq 0 \] ; then
            ok "${id}" "${json}" "${image}"
        else
            err "${id}" "${image}"
        fi
    done
    sleep "${CHECK\_INTERVAL}"
done

As soon as the container starts it verifies all running container using vcn verify and sends the results to the InfluxDB TimeSeries database, so we can visualize or alert on it.

## Visualization that includes alerting

The ZTC operations dashboard contains several panels to pinpoint issues and in our case verification failures. That way no ZTC member could accidentally pull the wrong image without the operations team knowing.

This image shows the widget during our testing phase. 

![Docker image verification](/images/blog/docker-vcn-results.png)

To create the metrics view if you don't want to use Performance Analyzer, you can just configure the panel that points to the InfluxDB as follows:

![Influx Query view](/images/blog/influx.png)

If you want to alert on the metrics, please make sure to use a chart, as Grafana only allows alerts there:

![docker vcn alerts](/images/blog/alert.png)

## Next Steps

After reading this blog post we're sure you want to protect your docker environment as well.

As a Performance Analyzer customer, you can just register at [CodeNotary](https://www.codenotary.io) and use our reporting script for the vcn sidecar container.

If you're not yet a Performance Analyzer customer, now its a good time to start the free trial to cover container performance and integrity!

You can also expect a Kubernetes-ready version soon.
