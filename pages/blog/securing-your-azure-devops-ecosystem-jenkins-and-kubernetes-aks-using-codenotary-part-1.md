---
title: "Securing your Azure DevOps Ecosystem, Jenkins and Kubernetes (AKS) using CodeNotary - Part 1"
date: "2019-10-11"
---

Jenkins is one of the most popular CI/CD components in the DevOps world. It's very easy to deploy and configure and there is a great amount of plugins for all kinds of integration. When using the Azure DevOps ecosystem, Jenkins in combination with Kubernetes (AKS) is such a powerful team. We at CodeNotary want to make your life very easy and the integration of CodeNotary into your Jenkins pipeline even more so. This blog post gives you a complete guideline.

If you want to learn more about Notarization and Authentication, please check this blog post first: [https://hackernoon.com/the-day-we-started-to-protect-devops-with-blockchain-a9g6y33gt](https://hackernoon.com/the-day-we-started-to-protect-devops-with-blockchain-a9g6y33gt)

But let's start step by step.

## Jenkins

Jenkins is an open source automation server written in Java. It is used to continuously build and test software projects, enabling developers to set up a CI/CD environment.

![](https://wiki.jenkins.io/download/attachments/2916393/logo.png?version=1&modificationDate=1302753947000&api=v2)

Everyone in the DevOps world knows the Jenkins logo

There is a very nice guideline that describes a complete Azure deployment for Jenkins, Grafana and AKS. I can only recommend to read it: [https://medium.com/@adilsonbna/building-my-own-azure-devops-ecosystem-ef92b8db9da5](https://medium.com/@adilsonbna/building-my-own-azure-devops-ecosystem-ef92b8db9da5)

This blog post is taking the deployed Hello World docker image as an example how you can use CodeNotary to notarize every docker container image build before it gets deployed.

## Login as Admin

As a first step you need to login to Jenkins with an admin account or an account that can change an existing project.

![](/images/blog/jenkins_output_azure-1024x630.png)

Jenkins URL and SSH access in your Azure Portal

As you cannot login as Admin using the JenkinsURL, you need to run az login within your terminal and then the JenkinsSSH command from the Outputs page of Azure. You can access Jenkins using the url http://localhost:8080 afterwards and use the admin account.

![](/images/blog/jenkins_changepipeline-1024x390.png)

Configure your Pipeline

Click Configure of your pipeline to change the script.

![](/images/blog/jenkins_pipeline-1024x630.png)

Pipeline Script

```
node {
 def built_img = ''
 def taggedImageName = ''
 
 
 stage('Checkout git repo') {
   git branch: 'master', url: params.GIT_REPO
 }
 stage('Build Docker image') {
   built_img = docker.build(params.DOCKER_REPOSITORY + ":${env.BUILD_NUMBER}", './jenkins-cicd-container')
 }
 stage('Push Docker image to Azure Container Registry') {
   docker.withRegistry(params.REGISTRY_URL, params.REGISTRY_CREDENTIALS_ID ) {
   taggedImageName = built_img.tag("${env.BUILD_NUMBER}")
 }
docker.image('codenotary/vcn:0.7.1-docker').inside('-v "/var/run/docker.sock:/var/run/docker.sock:ro" --entrypoint ""') { c ->
   sh 'VCN_USER="user" VCN_PASSWORD="password" vcn login'
   sh 'VCN_NOTARIZATION_PASSWORD="password" vcn n --attr jenkins=' + env.BUILD_NUMBER + ' docker://' + taggedImageName
 }
 
 built_img.push("${env.BUILD_NUMBER}");
 }
 }
 stage('Deploy configurations to Azure Container Service (AKS)') {
 withEnv(['TAGGED_IMAGE_NAME=' + taggedImageName]) {
 acsDeploy azureCredentialsId: params.AZURE_SERVICE_PRINCIPAL_ID, configFilePaths: 'jenkins-cicd-container/kubernetes/*.yaml', containerService: params.AKS_CLUSTER_NAME + ' | AKS', dcosDockerCredentialsPath: '', enableConfigSubstitution: true, resourceGroupName: params.AKS_RESOURCE_GROUP_NAME, secretName: '', sshCredentialsId: ''
 }
 }
```

The important part to change:

```
docker.image('codenotary/vcn:0.7.1-docker').inside('-v "/var/run/docker.sock:/var/run/docker.sock:ro" --entrypoint ""') { c ->
    sh 'VCN_USER="user" VCN_PASSWORD="password" vcn login'
    sh 'VCN_NOTARIZATION_PASSWORD="password" vcn n --attr jenkins=' + env.BUILD_NUMBER + ' docker://' + taggedImageName
  }
```

1. we use the [docker image of CodeNotary](https://hub.docker.com/r/codenotary/vcn) that contains the [vcn](https://github.com/vchain-us/vcn) command line tool
2. make sure the docker container starts with a mapped docker.sock
3. run a vcn login using your username and password (we recommend creating a service account for your jenkins at [CodeNotary.io](https://www.codenotary.io)). That way you can always differentiate between automatic notarization and manual.
4. run the notarization process for the newly generated docker image (during the Jenkins process)

## Check the notarization

You can check the pipeline output for the successful notarization of your Jenkins build docker image.

![](/images/blog/screencapture-cniojenkins-eastus-cloudapp-azure-job-hello-world-72-console-2019-10-11-18_10_57-1024x826.png)

That's it - all of your future Jenkins built docker /images/blog, will be automatically notarized and you can authenticate them from everywhere in the world.
