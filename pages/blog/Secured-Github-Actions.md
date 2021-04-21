---
title: "Secure your CI/CD Pipeline with Your Own CodeNotary GitHub Action - From Scratch Using Docker"
date: "2021-04-21"
image: "/images/blog/vcn-github-actions.png"
tags: ["GitHub Action", "Secure CI/CD", "CodeNotary", "GitOps"]
---

In this blog post, you will learn everything you need to secure your CI/CD pipeline by notarizing all of your artifacts with a GitHub Action that uses CodeNotary.


When your users, clients, or customers download an asset from you, they may want to validate that the file has not been tampered with. With CodeNotary, you can notarize all your assets so that their exact signatures can be compared with the artifacts produced by your CI/CD process. 

<img style="float: right;" src="/images/blog/vcn-github-actions.png" width="550">

While you can use `vcn` to manually notarize your assets after creation, GitHub Actions let you encapsulate and reuse certain logic automatically. Creating a GitHub Action allows you to automate running the VCN command-line tool against your build artifact or Dockerfile.

You can also find a great tutorial video here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/cz79rtrz9ZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Understanding GitHub Actions


### Core concepts


GitHub Actions are composed of a few core concepts:


- An **event** is a specific activity, like pushing a commit to a repository, or creating a pull request.
- A **workflow** is an automatic procedure triggered by an event. 
- A **job** is a set of steps to be executed as part of a workflow.
- A **step** is an individual task that can run commands.
- An **action** is a standalone command. Actions can be combined into steps to create a job. 


In other words, an event triggers a workflow of jobs, with steps performing different actions.


### Configuring workflows


Workflows are defined in `.github/workflows` by a YAML file. To understand the syntax of workflows, let’s look at a sample workflow provided by GitHub in [Introduction to GitHub Actions](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions):


```
name: learn-github-actions
on: [push]
jobs:
  check-bats-version:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v1
      - run: npm install -g bats
      - run: bats -v
```


A full list of available syntax is available at [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions), but here we have enough to understand the basics of a workflow.


- **name:** is the name of the workflow. Adding a name is optional, but the name will be displayed on the Actions tab, so it is recommended to set one.
- **on:** is where you define the events that will automatically trigger the workflow file. This example workflow will run when you `push` to any branch. You can set more advanced parameters here as well.
- **jobs:** is where you define the jobs that will be triggered by the `on:` event. Multiple jobs can be defined, but this example only defines one job, which has been named `check-bats-version`. The job `runs-on:` the latest Ubuntu image.
- **steps:** is where you define the actions that will be executed by the job. Note that this example `uses:` two different predefined Actions and `run:`s two commands directly. 
  - The first step `uses:` the action hosted at the `actions/checkout` repo on the `v2` branch or tag. This action checks out the repository so that further actions can work with your code.
  - The second step `uses:` the action hosted at the `actions/setup-node` repo on the `v1` branch or tag. This action installs and sets up Node.js on the working image.
  - The third step is to `run:` a command that will install bats, and the fourth step will `run:` a command that checks the version of bats.


You can also set up a workflow graphically by using an available template. Navigate to the Actions tab of your repository and pick a template you would like to use. Click **set up this workflow**. You can search for actions from the marketplace while defining your workflow.


### Developing and distributing actions


GitHub Actions give you the tools to automate all your software workflows, like building, testing, or deploying your code. Many predefined actions exist for you to find and use in your custom workflows. You can read more about actions at [About actions](https://docs.github.com/en/actions/creating-actions/about-actions).


You can use Docker to build a custom image that can be used to run your workflow. See [Dockerfile support for GitHub Actions](https://docs.github.com/en/actions/creating-actions/dockerfile-support-for-github-actions) for more information. 


GitHub Actions require an `action.yml` file to define the inputs, outputs, and main entrypoint for your action. See [Metadata syntax for GitHub Actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions) for more information.


Let’s try making one of our own GitHub Actions right now!


Note: Before you continue, you will need a CodeNotary account. You can make one at <https://dashboard.codenotary.io/auth/signup> for free.
## Create your own Github Action


### Create a new GitHub repository


GitHub Actions are defined as a repository containing specific files, so let’s create a repository to host our GitHub Action.


### Create a Dockerfile


Now that we have a repository for our GitHub Action, the first step is to create a Dockerfile. This will define a container image that will provide us with a clean workspace to run scripts against, as the usual way to distribute pre-made actions. To do so, we use the latest Alpine Linux image, adding bash and curl for later use in the script. We create a work directory and copy our repository to it. Finally, we call the entrypoint script, which will notarize our assets.


Place the following file at `/Dockerfile`:


```
FROM alpine:latest


RUN apk update && apk add bash
RUN apk add --update \
    curl \
    && rm -rf /var/cache/apk/*


WORKDIR /workspace


COPY . /workspace


ENTRYPOINT [ “/workspace/entrypoint.sh” ]
```


### Create the entrypoint script
**Note**: Before you continue, you will need a CodeNotary account. You can make one at <https://dashboard.codenotary.io/auth/signup> for free.

This script will obtain the CodeNotary CLI tool and then notarize your file. 

Earlier, we created a Dockerfile for an image with bash and curl. We will now write this Bash script. GitHub Actions can be written in any language, but using bash and curl provides us with all we need for this simple script. 

For more advanced information on workflow commands, visit [Workflow commands for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-commands-for-github-actions).


The Bash script below first sets some flags that will improve error handling:


- The `-e` flag will exit immediately if there is an error.
- The `-u` flag will treat unset variables as an error during substitution.
- The `-x` flag will print commands and their arguments as they are executed.
- The `-o pipefail` flag will return any error codes from piped commands.


The `setup` subroutine will download v0.9.4 of the VCN command line tool, which is currently the latest version. It will then verify the checksum to ensure that it has downloaded correctly, and then it will mark the binary as executable.


The `main` subroutine will login to CodeNotary using environment variables, then publicly notarize the file passed to it.


Place the following file at `/entrypoint.sh`:


```
#!/bin/bash


set -euxo pipefail


setup() {
    curl -L -o /tmp/vcn https://github.com/codenotary/vcn/releases/download/v0.9.4/vcn-v0.9.4-linux-amd64-static
    CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
    curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=codenotary.com | grep -q :0
    chmod +x /tmp/vcn
}


main() { 
    echo | /tmp/vcn login
    /tmp/vcn n -p $1
}


if [ $# -eq 0 ];
then
    exit 0
fi


setup
main $1
```


Make sure that you mark this script as executable, so that it can be executed by the Docker image instead of giving an error:


```bash
chmod +x entrypoint.sh
```


### Create an action.yml file

When creating the entrypoint script, we mentioned that VCN will login using environment variables. 

The GitHub Action .yml file we define will allow us to declare those environment variables, as well as the inputs to be used with the script that will be run in the Docker image we defined above and the outputs we wish to have. 

Essentially, the action.yml is like our API that will be exposed to anyone using the action. The syntax available to us is documented at [Metadata syntax for GitHub Actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions).


There are three inputs we will need:


- **file** is the file to be notarized
- **vcn_username** is the username for your CodeNotary account
- **vcn_password** is the password for your CodeNotary account

This action will output a signed hash generated by the VCN notarization process. It will run using Docker, and specifically with the Dockerfile we created. 

The appropriate environment variables will be set by the inputs we will provide. Some optional branding is added to display a blue checkmark when viewing the results of the GitHub Action.


Place the following file at `/action.yml`:


```
name: ‘VCN Notarization’
description: ‘An action that allows you to notarize build artifacts using CodeNotary VCN’


inputs:
  file:
    description: ‘The file we wish to notarize’
    required: true
  vcn_username:
    description: ‘The username for your account’
    required: true
  vcn_password:
    description: ‘The password for your account’
   required: true


outputs:
  signed-hash:
    description: ‘The VCN signed hash generated from the file’


runs:
  using: docker
 image: ‘Dockerfile’
  env:
    VCN_USER: ${{ inputs.vcn_username }}
    VCN_PASSWORD: ${{ inputs.vcn_password }}
    VCN_NOTARIZATION_PASSWORD: ${{ inputs.vcn_password }}
  args:
* ${{ inputs.file }}


branding: 
  icon: ‘check’
  color: blue
```


### Create a sample GitHub Workflow to test everything


We are now ready to create a GitHub Workflow that will test our GitHub Action. When a commit is pushed to the specified branch, a test file will be created and notarized using the username and password provided in your repository secrets.


Place the following file at `.github/workflows/test.yml`, making sure to edit the branch name and the `uses:` repository as appropriate (i.e., with the identifier of the repository you created for this action, and the branch you would like to use for triggering the test workflow):


```
name: test


on:
  push:
    branches:
      - testing


jobs:
  test-usage:
    runs-on: ubuntu-latest
    steps:
      - name: Create a test file
        run: |
          echo "Hello world" > temp.txt


      - name: Notarize file
        uses: username/repository@testing
        with:
          vcn_username: ${{ secrets.VCN_USERNAME }}
          vcn_password: ${{ secrets.VCN_PASS }}
          file: temp.txt    


```


As defined, this “test” workflow will trigger when you push to the `testing` branch. It will run the “test-usage” job on the latest Ubuntu image, which contains two steps: the first step will create a temporary text file, and the second step will notarize it using the GitHub Action we just created.


### Define your username and password as secrets


On GitHub, navigate to the main page of the repository and click Settings. In the left sidebar, click Secrets. You will need to add two new repository secrets:


- **VCN_USERNAME** should have the value of your CodeNotary username.
- **VCN_PASS** should have the value of your CodeNotary password.


### Last steps


You are now ready to see your very own GitHub Action in action! Just make a commit to the specified branch, and then check the Workflows tab of your repository. You should see the results of your GitHub Action there. Congratulations!

Little reminder, you can also find a great tutorial video here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/cz79rtrz9ZQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Summary

By following this article, we have learned about GitHub Actions, including their core concepts, how workflows are configured, and how actions can be written. We have also created our own GitHub Action which can be used to notarize a file. 

If you want to check a major Open Source project [Home Assistant](https://github.com/home-assistant)  making use of GitHub actions and CodeNotary, check this [PR](https://github.com/home-assistant/core/pull/48318)

In summary, this process involved writing a Dockerfile to generate a clean working environment which calls an entrypoint script. Our action.yml file defined the inputs and outputs as well as the environment variables to be passed to our Docker image, and our sample Github Workflow utilizes all of this to create a test file and notarize it using the action we wrote.

You can get started in minutes with your [CodeNotary Cloud account](https://dashboard.codenotary.io/auth/signup)
