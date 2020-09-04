---
title: "Validated builds using CircleCI"
date: "2019-11-08"
---

As [CircleCI](https://circleci.com/) is one of the most popular CI/CD tools in the market, it was no surprise to us that we got plenty of requests lately. Users were noticing the [Jenkins](https://www.codenotary.io/securing-your-azure-devops-ecosystem-jenkins-and-kubernetes-aks-using-codenotary-part-1/) integration in our blog posts and we're wondering how the CircleCI would look like.

We listened and here comes the CircleCI integration to produce validated builds that can be verified and authenticated by anyone from everywhere.

Our blog post covers all steps required to produce a validated build:

- Fork an existing Git repository as an example
- Creation of the Circle CI config
- Define the Circle CI build steps
    - Download the latest CodeNotary vcn command line
    - Authenticate the downloaded binary (better safe than sorry)
    - Build the docker image
    - Notarize the docker image including the Circle CI build number
    - Deploy the docker image to Dockerhub
- Validate the uploaded docker image

## Setup

### Create or Fork a repository

Let's start with the setup of our git repository, that contains a fork of a simple static website project. [https://github.com/katacoda/golang-http-server](https://github.com/katacoda/golang-http-server)

For our example its important that the repo contains a valid Dockerfile to build the container image.

After we forked that project we need to add the Circle CI build configuration.

### Create Circle CI config

To do so, simply create the file config.yml within the .circleci folder in the forked repository.

![](/images/blog/repo-1024x497.png)

### Define the Circle CI steps to create a validated build

The content of that config.yml file contains all the required steps to build:

General build setup

```
version: 2
jobs:
  build:
    docker:
      - image: golang:1.13.4-stretch
    environment:
      TEST_RESULTS: /tmp/test-results
    steps:
      - checkout
      - setup_remote_docker
```

#### Prepare the remote docker client

```
# This should go into custom primary image, here's only for the sake of explanation
      - run:
          name: Install Docker client
          command: |
            set -x
            VER="17.03.0-ce"
            curl -L -o /tmp/docker-$VER.tgz https://get.docker.com/builds/Linux/x86_64/docker-$VER.tgz
            tar -xz -C /tmp -f /tmp/docker-$VER.tgz
            mv /tmp/docker/* /usr/bin
```

Download the latest CodeNotary vcn command line

```
      - run:
          name: Download CodeNotary vcn binary
          command: |
            set -x
            VER="v0.7.3"
            curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.7.3/vcn-$VER-linux-amd64
            CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
            curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
```

The important pieces of that code snippets are the download of the latest version (please make sure to change the version accordingly), an independent calculation of the file checksum to do a validation. The [CodeNotary](https://www.codenotary.io) validation makes sure, that the downloaded binary has really been notarized by [vchain.us](https://www.vchain.us) the maker of the vcn cli:

```
curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
```

The exit code is always 0 (success), when the checksum can be validated and has been notarized by a given organization.

**That way, we can validate that we're not going to use a faked or tampered vcn!** The pipeline breaks, if no validation is possible.

#### Move the vcn binary into the path and make it executable

```
      - run:
          name: move CodeNotary vcn binary
          command: |
            chmod +x /tmp/vcn
            mv /tmp/vcn /usr/local/bin/vcn
```

#### Build the docker image

```
      - run:
          name: Build Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            docker build -t codenotarydemo/demowebserver:$TAG .
```

#### Notarize the docker image including the Circle CI build number

```
      - run:
          name: Notarize Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            VCN_USER=${codenotary_user} VCN_PASSWORD=${codenotary_pass} vcn login
            VCN_NOTARIZATION_PASSWORD=${codenotary_pass} vcn n --attr CircleCI=$TAG docker://codenotarydemo/demowebserver:$TAG 
```

This job makes sure the docker image is notarized before uploaded the Dockerhub, so nobody could intervene. For additional security, we add the CircleCI build number as well to the notarization process.

Please be aware, that we use different environment variables in that step that need to be defined in Circle CI.

![validated builds - Circle CI environment variables](/images/blog/envvar-1024x542.png)

#### Deploy the docker image to Dockerhub

```
      - run:
          name: Push Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            docker login -u ${docker_user} -p ${docker_pass}
            docker push codenotarydemo/demowebserver:$TAG
```

Our last step of the pipeline makes sure the newly build docker container image is uploaded to our DockerHub.com repository using the correct tag. Please make sure to set the Circle CI environment variables for DockerHub as well.

![validated build on dockerhub](/images/blog/dockerhub-1024x603.png)

## Result

Let's put all pieces together to a complete build flow for Circle CI (.circleci/config.yml)

```
version: 2
jobs:
  build:
    docker:
      - image: golang:1.13.4-stretch
    environment:
      TEST_RESULTS: /tmp/test-results

    steps:
      - checkout
      - setup_remote_docker

      # This should go into custom primary image, here's only for the sake of explanation
      - run:
          name: Install Docker client
          command: |
            set -x
            VER="17.03.0-ce"
            curl -L -o /tmp/docker-$VER.tgz https://get.docker.com/builds/Linux/x86_64/docker-$VER.tgz
            tar -xz -C /tmp -f /tmp/docker-$VER.tgz
            mv /tmp/docker/* /usr/bin

      - run:
          name: Download CodeNotary vcn binary
          command: |
            set -x
            VER="v0.7.3"
            curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.7.3/vcn-$VER-linux-amd64
            CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
            curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0

      - run:
          name: Authenticate and move CodeNotary vcn binary
          command: |
            chmod +x /tmp/vcn
            mv /tmp/vcn /usr/local/bin/vcn

      - run:
          name: Build Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            docker build -t codenotarydemo/demowebserver:$TAG .

      - run:
          name: Notarize Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            VCN_USER=${codenotary_user} VCN_PASSWORD=${codenotary_pass} vcn login
            VCN_NOTARIZATION_PASSWORD=${codenotary_pass} vcn n --attr CircleCI=$TAG docker://codenotarydemo/demowebserver:$TAG 

      - run:
          name: Push Docker image
          command: |
            TAG="0.1.${CIRCLE_BUILD_NUM}"
            docker login -u ${docker_user} -p ${docker_pass}
            docker push codenotarydemo/demowebserver:$TAG
```

When all went well, you should see the build process starting with your config.yml change and everything running through.

![Circle CI build successful](/images/blog/pipeline-1024x721.png)

## Validate the uploaded docker image

As this run was the first to happen, let's make sure the notarization of the image went well and anyone in the world is able to validate the build.

Therefore, lets pull the uploaded image to a complete different system and use [vcn to authenticate all information](https://github.com/vchain-us/vcn).

**docker pull codenotarydemo/demowebserver:0.1.4**

**vcn authenticate docker://codenotarydemo/demowebserver:0.1.4**

![validate build using vcn](/images/blog/vcn-a.png)

All checks were successful and we're sure to not release any software, container image or other artifact that cannot be validated.

If you're serious about security, DevSecOps and build validation, there is no excuse anymore as its free:

[Sign Up for build validation](https://dashboard.codenotary.io/auth/signup)
