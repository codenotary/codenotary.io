---
title: "Sunburst SolarWinds Hack, why traditional code signing is the latest victim of 2020"
date: "2020-12-21"
image: "/images/blog/secfiling.jpg"
tags: ["Sunburst", "Trusted CI/CD", "vcn", "CodeNotary"]
---

# Sunburst SolarWinds Hack, why traditional code signing is the latest victim of 2020

This year will change many things forever. 

The sunburst SolarWinds hack shows that traditional code signing with certificates is no match for the security threats of today. The attackers were able to hide malicious code in a software product of SolarWinds, affecting up to 18000 customers. The company described the attack as a “highly-sophisticated, targeted, and manual supply chain attack by a nation-state.”

The signing server was breached and used to sign the malicious code as well, turning it into a legitimized part of the next update. This is showing the obvious shortcomings of code signing with cumbersome and expensive digital certificates. 

![SEC filing](/images/blog/secfiling.jpg)

The SEC filing states:

> **The vulnerability was not evident in the Orion Platform products’ source code but appears to have been inserted during the Orion software build process.**

[Full SEC report](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001739942/6dd04fe2-7d10-4632-89f1-eb8f932f6e94.pdf)

An attack like Sunburst could hit any software manufacturer that is just relying on SSO and digital certificates. Additional protection and cryptographic verification is required to ensure the integrity of their supply chain with a fully trusted CI/CD process. 

Sounds like a lot of work? Actually, it is surprisingly easy with CodeNotary.

## Trusted CI/CD with CodeNotary

Secure your sensitive data by creating immutable ledger proofs of existence notarizations and seals either inside (on-premise) your Enterprise with [CodeNotary Ledger Compliance](https://codenotary.com/products/ledger-compliance) and/or with worldwide availability and distribution using the CodeNotary service leveraging the [Zero Trust Consortium Blockchain](https://codenotary.com/technologies/ztc). 

CodeNotary integrates easily the most popular CI, CI/CD, and DevOps tools, and you can new ones quickly without API and command-line tools. Instead of hacking into a single signing server, a potential attacker would have to get the credentials from every stakeholder in the processes. CodeNotary is an advanced substitute for existing digital certificate solutions build on immutable data storage. 

![trustedcicd](/images/blog/trustedcicd.jpg)

CodeNotary can cover the whole supply chain. Instead of just signing the final binary, the file is being notarized or authenticated by every step of the workflow. Multiple persons or machines with different logins are involved and all of them are constantly aware of the status of an object in the supply chain. With CodeNotary it would be almost impossible to tamper software products as seen in the Sunburst attack.

![trustedcicd](/images/blog/oneclick.jpg"trusted CI/CD")

## Get started!

Try out now and sign up for [CodeNotary](https://codenotary.com/technologies/ci-cd). Download the vcn CLI app for  Linux, MacOS or Windows. Follow the installation instructions.

-Start vcn and login. Use the E-mail address that you registered and your password.

```
vcn login
Email address: <example@emailaddress.com>
Login password:.
Login successful.
```
-Notarize your first file, directory, docker container, podman, git repository or hash.  Your assets will not be uploaded. They will be processed locally.

```
vcn notarize <path-to-file>
vcn notarize dir://<directory>
vcn notarize docker://<imageId>
vcn notarize podman://<imageId>
vcn notarize git://<path_to_git_repo>
vcn notarize --hash <hash>
```

-Authenticate the asset on [CodeNotary](https://authenticate.codenotary.io/) or by CLI:
```
vcn authenticate <file>
vcn authenticate dir://<directory>
vcn authenticate docker://<imageId>
vcn authenticate podman://<imageId>
vcn authenticate git://<path_to_git_repo>
vcn authenticate --hash <hash>
...
Looking for blockchain entry matching
```
Redirect the output results to json or yaml formats:
```
vcn authenticate --output=json <asset>
vcn authenticate --output=yaml <asset>
```

## Secure CI/CD

Using vcn is intuitive and fast forward, it can be easily integrated into existing CI/CD Tools.  Let's take a look again at the workflow in the figure above. Starting with the developer, who is notarizing Git commits and repositories. The developer can sign his/her work locally using vcn. Verification can be added to .git/workflows making sure that the [commits](https://docs.codenotary.io/integrations/verify-commit-action.html#inputs) are coming from a trusted source. 
```
vcn notarize git://<path_to_git_repo>
```

In the next step, the authentic source code is being provided to CI/CD Tools to be built. One of the most popular tools is Jenkins. Instructions for the Jenkins integration for vcn can be found in our[ docs](https://docs.codenotary.io/integrations/vcn-jenkins.html#step-1-system-level-configuration). Another well-known tool to test and deploy is Travis. Let's assume the developer is working on CodeNotary's latest technology[ immudb](https://codenotary.com/technologies/immudb/). He committed his latest notarized updates. Travis is now used to build the project but before that, it will check if it is using a verified vcn client.

**Code Snippet - CI/CD authenticate before continuing (check vcn binary origin!)**:

```yaml
before_script:
  - curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.8.3/vcn-v0.8.3-linux-amd64-static
  - CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
  - echo $CHECKSUM
  - curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
  - chmod +x /tmp/vcn
```

Travis is able to perform security scans like [gosec](https://github.com/securego/gosec) and notarizes after the successful scan. These notarizations are proofing a clean security scan.

**Code Snippet - CI/CD notarize after security scan:**

```yaml
- stage: Scan
      script:
        - curl -sfL https://raw.githubusercontent.com/securego/gosec/master/install.sh | sudo sh -s -- -b $GOPATH/bin latest
        - gosec -fmt=json -out=results-${TRAVIS_BUILD_NUMBER}.json -no-fail ./...
        - VCN_USER=$gosec_user VCN_PASSWORD=$gosec_pass /tmp/vcn login
        - VCN_NOTARIZATION_PASSWORD=$gosec_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --attr  --silent results-${TRAVIS_BUILD_NUMBER}.json
        - /tmp/vcn logout
        - sleep $[ ( $RANDOM % 10 ) + 1 ]s
        - VCN_USER=$trv_user VCN_PASSWORD=$trv_pass /tmp/vcn login
        - VCN_NOTARIZATION_PASSWORD=$trv_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent results-${TRAVIS_BUILD_NUMBER}.json
        - /tmp/vcn logout
```

Following the security test, it is time to build and notarize the binaries. In this case immudb, immuadmin and immuclient, each will be notarized.

**Code Snippet - CI/CD build and notarize binaries:**

```
    - stage: Binaries
      os: linux
      arch:
        - amd64
      script:
        - GOOS=linux GOARCH=amd64 make immudb-static immuadmin-static immuclient-static
        - VCN_USER=$trv_user VCN_PASSWORD=$trv_pass VCN_OTP_EMPTY=true /tmp/vcn login
        - VCN_NOTARIZATION_PASSWORD=$trv_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent immudb
        - VCN_NOTARIZATION_PASSWORD=$trv_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent immuadmin
        - VCN_NOTARIZATION_PASSWORD=$trv_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent immuclient
        - /tmp/vcn logout
```

After having build immudb, immuclient and immuadmin, they are added to a docker container. Before that Travis will authenticate them to ensure they are trusted. Finally, the docker container will be build and notarized.

**Code Snippet - CI/CD build and notarize docker-container:**

```
   - stage: Image
      env:
        - DOCKER_IMAGE="codenotary/immudb"
      services:
        - docker
      workspaces:
        use:
          - bins
      script:
        - /tmp/vcn authenticate immudb immuadmin immuclient
        - VCN_USER=$immudb_user VCN_PASSWORD=$immudb_pass VCN_OTP_EMPTY=true /tmp/vcn login
        - docker build --tag "${DOCKER_IMAGE}:latest" -f Dockerfile .
        - VCN_NOTARIZATION_PASSWORD=$immudb_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent docker://$DOCKER_IMAGE
        - /tmp/vcn logout
        - VCN_USER=$trv_user VCN_PASSWORD=$trv_pass VCN_OTP_EMPTY=true /tmp/vcn login
        - VCN_NOTARIZATION_PASSWORD=$trv_pass /tmp/vcn n -p --attr TravisJobName=${TRAVIS_JOB_NAME} --attr TravisJobNo=${TRAVIS_JOB_NUMBER} --silent docker://$DOCKER_IMAGE
        - /tmp/vcn logout
```

The docker container can now be deployed and verified even during runtime with vcn[ Docker Sidecar Integration](https://docs.codenotary.io/integrations/vcn-docker.html#docker-sidecar-integration). When using Kubernetes, a Kubernetes watchdog for verifying image trust with CodeNotary is keeping everything safe. Once[ kube-notary](https://docs.codenotary.io/integrations/kube-notary.html) is installed within your cluster, all pods are checked repeatedly.

We haven't looked at the Auditor yet. The Auditor has it's own credentials as well and is able to change the status of the asset. Functions like "unsupport" and "untrust" are immediately stopping untrusted assets from getting further and tampering the supply-chain.

```
vcn unsupport <asset>
vcn untrust <asset>
```

# New possibilities by technology

CodeNotary is not just able to secure supply chains. It also enables whole new possibilities. A customer could now accept packages from multiple manufacturers because they can notarize assets next to each other, contrary to certificates that are replacing every previous signing. This would enable a revolutionary trusted way of collaboration in software development. 

Securing CI/CD Pipelines with CodeNotary is opening up new opportunities and helps to react flexible overcoming future frontiers. These are great side effects given the necessity for action facing attacks like Sunburst. Integrating CodeNotary is no obstacle and a smart choice to protect customers and businesses from well orchestrated attacks.
