---
title: "Fully trusted GitLab Pipeline"
image: /images/blog/vars-1024x969.png
date: "2019-11-13"
---

As you noticed already, our goal is to make the CodeNotary integration as easy as possible for you. That's the reason why our blog post series continues with [GitLab](http://www.gitlab.com/). So far we covered [Jenkins](https://www.codenotary.io/blog/securing-your-azure-devops-ecosystem-jenkins-and-kubernetes-aks-using-codenotary-part-1/) and [CircleCI](https://www.codenotary.io/blog/validated-builds-using-circleci-ci-cd/) if you want to read them as well. For this blog post we use a GitLab CE installation.

This time we go one step further than the former posts and integrate a Git repository check as well.

The checks are going to look as follows:

- Authenticate the Git repository
- Build the container image based on the repository, if authentic
- Notarize the container image before publishing
- Publish the container image to your registry

Let's get started!

## Check our requirements first

As we only want to use notarized Git commits, we need a CodeNotary account and vcn locally installed next to git.

1. [CodeNotary Account (completely free)](https://dashboard.codenotary.io/auth/signup)
2. [Download vcn](https://github.com/vchain-us/vcn/releases/latest) & vcn login
3. Setup the variables in your project for DockerHub and CodeNotary

![environment variables for the pipeline](/images/blog/vars-1024x969.png)

- codenotary\_user
- codenotary\_pass
- dockerhub (type _docker info_, in our case: https://index.docker.io/v1/)
- dockerhub\_user
- dockerhub\_pass

## Setup the .gitlab-ci.yml

Like most CI/CD pipelines we start with the basic setup. Make sure to create the .gitlab-ci.yml file in your repository:

```
image: docker:18

stages:
  - authgit
  - build
  - notarize
  - push

variables:
    CONTAINER_IMAGE: "<dockerhub_repository_name>"


before_script:
  - echo -n $dockerhub_pass | docker login -u $dockerhub_user --password-stdin $dockerhub
```

Here we set the Container\_image to the Dockerhub registry we want to use (i. e. user/image) and login to Dockerhub.com

## Authenticate the sources

The next step is about authenticating the sources to make sure only notarized git commits are used during the build. In that post we use the vcn version 0.7.3, but you can use the latest of course.

Be aware, as we're using an Alpine OS based image to use the static linked version of vcn.

Most importantly, we want to make sure, that nobody tampered with the vcn executable we downloaded, therefore we do an independent check using the CodeNotary.io API with curl.

```
# Authenticate Git source
Authenticate Git:
  stage: authgit
  script:
    - apk add --no-cache curl
    - curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.7.3/vcn-v0.7.3-linux-amd64-static
    - CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
    - echo $CHECKSUM
    - curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
    - chmod +x /tmp/vcn
    - /tmp/vcn a git://$CI_PROJECT_DIR
```

vcn a git://$CI\_PROJECT\_DIR is used to authenticate the repository we use in that project pipeline.

For the pipeline to run later on, you always need to make sure to notarize the latest git commits.

**Therefore, we need to pull the latest changes and notarize them, if we approve them:**

- git pull
- vcn n git://repository-folder

![Full Trust Gitlab repo notarization](/images/blog/vcn-notarize.png)

Important: You should only use anonymous authentication when testing or working with private repositories. It's highly recommended to use authenticate only with org or signer flags.

**vcn a help**:

```
  -I, --org string         accept only authentications matching the passed organisation's ID,
                           if set no SignerID can be used
                           (overrides VCN_ORG env var, if any)
  -s, --signerID strings   accept only authentications matching the passed SignerID(s)
                           (overrides VCN_SIGNERID env var, if any)
```

## Build the image

We're going to build the container image and push it just with the hash, but no additional tagging. That's going to happen in a later step.

```
Build:
  stage: build
  script:
    - >
      docker build
      --pull
      --build-arg VCS_REF=$CI_COMMIT_SHA
      --build-arg VCS_URL=$CI_PROJECT_URL
      --tag $CONTAINER_IMAGE:$CI_COMMIT_SHA
      .
    - docker push $CONTAINER_IMAGE:$CI_COMMIT_SHA
```

## Notarize the container image

That's is mainly a copy of the authentication steps from the other build steps before. The reason is, that you can't know if its just one or different GitLab Runner that pick up the tasks - so we make sure, they always are at the same stage:

```
# notarize container
Notarize:
  stage: notarize
  script:
    - apk add --no-cache curl
    - curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.7.3/vcn-v0.7.3-linux-amd64-static
    - CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
    - echo $CHECKSUM
    - curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
    - chmod +x /tmp/vcn
    - VCN_USER=$codenotary_user VCN_PASSWORD=$codenotary_pass /tmp/vcn login
    - VCN_NOTARIZATION_PASSWORD=$codenotary_pass /tmp/vcn n --attr GitLab="$CI_COMMIT_SHA" docker://$CONTAINER_IMAGE:latest 
```

## Push the image

The last steps are about pushing the newly build container image with different tags, the checksum (reference to the GitLab job) and latest.

```
# Here, the goal is to tag the "master" branch as "latest"
Push latest:
  variables:
    GIT_STRATEGY: none
  stage: push
  only:
    # Only "master" should be tagged "latest"
    - master
  script:
    # no guarantee that this job will be picked up by the same runner 
    # that built the image in the previous step, pull it again locally
    - docker pull $CONTAINER_IMAGE:$CI_COMMIT_SHA
    # Then we tag it "latest"
    - docker tag $CONTAINER_IMAGE:$CI_COMMIT_SHA $CONTAINER_IMAGE:latest
    # push it.
    - docker push $CONTAINER_IMAGE:latest

Push tag:
  variables:
    GIT_STRATEGY: none
  stage: push
  only:
    # run on tags only.
    - tags
  script:
    - docker pull $CONTAINER_IMAGE:$CI_COMMIT_SHA
    - docker tag $CONTAINER_IMAGE:$CI_COMMIT_SHA $CONTAINER_IMAGE:$CI_COMMIT_REF_NAME
    - docker push $CONTAINER_IMAGE:$CI_COMMIT_REF_NAME
```

## Result

Make sure to notarize the repository commits, when changing the .gitlab-ci.yml file, as that change will also stop the container image from being build - Security first!

If all went well, you should be able to get nice green checks for every single pipeline step.

![Trusted GitLab CI/CD](/images/blog/result-1024x542.png)

In another blog post we'll also cover how you can auto-deploy into Kubernetes and use the [Kube-Notary](https://github.com/vchain-us/kube-notary) integration to make the 360 degree security cycle complete.
