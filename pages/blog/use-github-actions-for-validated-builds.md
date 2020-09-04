---
title: "Use GitHub Actions for validated builds"
date: "2019-11-25"
---

[GitHub Actions](https://github.com/features/actions) provide a very simple way for GitOps pipelines as you don't need an additional CI/CD tool. You could simply create or use an existing GitHub actions and configure it to run whenever a specific branch is updated.

You can make sure, that every build (i. e. a container image) can be validated in the most secure way, CodeNotary notarization is mandatory.

Let's walk through the simple steps to integrate CodeNotary:

## Create GitHub secrets

You can start by adding GitHub secrets for Dockerhub and CodeNotary in your repository.

![](/images/blog/secrets-1024x696.png)

If you have no free CodeNotary account yet to setup the notarization process, start with that:

[**CodeNotary Sign Up**](https://dashboard.codenotary.io/auth/signup)

## Create your workflow

GitHub Actions are defined using workflows that can either be created as files in your repository under .github/workflows or using the UI and the Actions menu.

![](/images/blog/newwf.png)

## The workflow

The following workflow will be triggered whenever a new commit in the master branch is detected, builds a container image, notarizes the image and pushes it to [Dockerhub.com](https://hub.docker.com/).

Please make sure to replace the Container Image Path with your account repository.

![GitHub Actions yml](/images/blog/action.yml_-1024x539.png)

```
# Define when the Actions should be triggered
on:
  push:
    branches:
      - master
    tags:
      - "**"
# Name of the Workflow
name: "Continuous Deployment"

# Different Jobs
jobs:
  build:
    name: "Build and deploy"
    runs-on: ubuntu-latest # Define the build docker image

    env:
      DOCKER_IMAGE: dzlabsch/build-notarize-docker-action # define Docker Repo

    steps:
# Checkout the Git repo
      - name: "Checkout"
        uses: actions/checkout@v1.0.0  

# Build the container image as latest
      - name: "Build Docker image"
        run: $(which docker) build --tag ${DOCKER_IMAGE}:latest .

# Download and verify CodeNotary vcn
      - name: "Download vcn"
        run: |
             curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.7.3/vcn-v0.7.3-linux-amd64-static
             CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
             echo $CHECKSUM
             curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
             chmod +x /tmp/vcn
     
# Notarize the container image using your GitHub secrets
      - name: "Notarize Docker Image"
        run: |
             VCN_USER=${{ secrets.CODENOTARY_USER }}  VCN_PASSWORD=${{ secrets.CODENOTARY_PASS }} /tmp/vcn login
             VCN_NOTARIZATION_PASSWORD=${{ secrets.CODENOTARY_PASS }} /tmp/vcn n -p --attr GitHub="${GITHUB_SHA:0:7}" docker://${DOCKER_IMAGE}:latest 

# Log into Dockerhub or your container registry
      - name: "Docker Login"
        if: "'refs/heads/master' == github.ref || startsWith(github.ref, 'refs/tags/')"
        run: echo ${{ secrets.DOCKER_PASSWORD }} | $(which docker) login --password-stdin --username ${{ secrets.DOCKER_USERNAME }}

# Push the container image to the container repository
      - name: "Push Docker image (latest)"
        if: "'refs/heads/master' == github.ref || startsWith(github.ref, 'refs/tags/')"
        run: $(which docker) push ${DOCKER_IMAGE}:latest

# Logout Docker registry
      - name: "Docker Logout"
        if: "'refs/heads/master' == github.ref || startsWith(github.ref, 'refs/tags/')"
        run: $(which docker) logout
```

## Check the Workflow

When you commit the next changes to the master branch the GitHub action workflow should automatically be triggered.

![](/images/blog/checkwf-1024x315.png)

successful GitHub Action workflow

When you click the title of the workflow, you can also check the details of the different steps.

![GitHub Action job overview](/images/blog/fullstat.png)

and you can open each job individual to check the details:

![CodeNotary Notary action](/images/blog/detailsstt.png)

## Authenticate the container image

Everyone downloading and using that notarized container image can check the authenticity of it using [CodeNotary vcn](https://github.com/vchain-us/vcn) (_**vcn authenticate docker://image**_).

It could also be easily integrated in your deployment process as well.
