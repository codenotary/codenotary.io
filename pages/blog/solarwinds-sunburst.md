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

> The vulnerability was not evident in the Orion Platform products’ source code but appears to have been inserted during the Orion software build process.

[Full SEC report](https://d18rn0p25nwr6d.cloudfront.net/CIK-0001739942/6dd04fe2-7d10-4632-89f1-eb8f932f6e94.pdf)

An attack like Sunburst could hit any software manufacturer that is just relying on SSO and digital certificates. Additional protection and cryptographic verification is required to ensure the integrity of their supply chain with a fully trusted CI/CD process. 

Sounds like a lot of work? Actually, it is surprisingly easy with CodeNotary.

## Trusted CI/CD with CodeNotary

Secure your sensitive data by creating immutable ledger proofs of existence notarizations and seals either inside (on-premise) your Enterprise with [CodeNotary Ledger Compliance](https://codenotary.com/products/ledger-compliance) and/or with worldwide availability and distribution using the CodeNotary service leveraging the [Zero Trust Consortium Blockchain](https://codenotary.com/technologies/ztc). 

CodeNotary integrates easily the most popular CI, CI/CD, and DevOps tools, and you can new ones quickly without API and command-line tools. Instead of hacking into a single signing server, a potential attacker would have to get the credentials from every stakeholder in the processes. CodeNotary is an advanced substitute for existing digital certificate solutions build on immutable data storage. 

![trustedcicd](/images/blog/trustedcicd.jpg)

CodeNotary can cover the whole supply chain. Instead of just signing the final binary, the file is being notarized or authenticated by every step of the workflow. Multiple persons or machines with different logins are involved and all of them are constantly aware of the status of an object in the supply chain. With CodeNotary it would be almost impossible to tamper software products as seen in the Sunburst attack.

![trustedcicd](/images/blog/oneclick.jpg)

## Get started!

Try out now and sign up for [CodeNotary](https://codenotary.com/technologies/ci-cd). Download the vcn CLI app for  Linux, MacOS or Windows. Follow the installation instructions.

-Start vcn and login. Use the E-mail address that you registered and your password.
```
vcn login
Email address: <example@emailaddress.com>
Login password:.
Login successful.
```
-Notarize your first file. Your assets will not be uploaded. They will be processed locally.

```
vcn notarize <path-to-file>
```
-Authenticate the asset on [CodeNotary](https://authenticate.codenotary.io/) or by CLI:
```
vcn authenticate <path-to-file>
...
Looking for blockchain entry matching
```
Using vcn is intuitive and fast forward, it can be easily integrated into existing CI/CD Tools. One example of that using Travis can be found [here](https://github.com/codenotary/immudb/blob/v0.7.1/.travis.yml). 


Code Snippet - CI/CD authenticate before continuing (check vcn binary origin!):

```yaml
before_script:
  - curl -L -o /tmp/vcn https://github.com/vchain-us/vcn/releases/download/v0.8.3/vcn-v0.8.3-linux-amd64-static
  - CHECKSUM=$(sha256sum /tmp/vcn | cut -d " " -f 1)
  - echo $CHECKSUM
  - curl -s https://api.codenotary.io/authenticate/$CHECKSUM?org=vchain.us | grep -q :0
  - chmod +x /tmp/vcn
```


Code Snippet - CI/CD notarize after security scan:

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


# New possibilities by technology
CodeNotary is not just able to secure supply chains. It also enables whole new possibilities. A customer could now accept packages from multiple manufacturers because they can notarize assets next to each other, contrary to certificates that are replacing every previous signing. This would enable a revolutionary trusted way of collaboration in software development. 

Securing CI/CD Pipelines with CodeNotary is opening up new opportunities and helps to react flexible overcoming future frontiers. These are great side effects given the necessity for action facing attacks like Sunburst. Integrating CodeNotary is no obstacle and a smart choice to protect customers and businesses from well orchestrated attacks.