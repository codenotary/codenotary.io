---
title: "What Docker Notary Doesn’t Do"
date: "2019-06-12"
---

 

![Global Verification Blockchain Based Code Signing](/images/blog/Global-Verification-Blockchain-Based-Code-Signing-300x232.png)

 

If you pull from say Docker Hub, modify an image and then upload the new image to a different hosting service, say your company’s personal, non-Docker affiliated repo, how will you know if the original image was authentically safe and verifiably untampered? In the DevOps process, various teams (dev, test, stage, prod) or even subsets of these teams will pull from different hosting services like Docker Hub, code and artifact hosts, and 3rd party libraries. Moving files and /images/blog around from one registry to another can create weak links in the integrity chain. Until recently, there has been no solution that enables global verification of digital assets that is host service agnostic like CodeNotary.

 

In this blog, we will discuss the difference between a traditional notarization service using Docker Notary as an example and compare it to CodeNotary’s capabilities.

 

## **What is Docker Notary**

Docker Notary is an open source service tool that allows publishers to digitally sign their collections of files, /images/blog, containers, etc. while enabling users of those assets to verify the provenance and integrity of the content they pull.

 

In order for you to be able to sign an image, which is not a prerequisite for visibility, you must have a Notary server attached to a Docker Registry. As an illustration, Docker Trusted Registry (DTR) and Docker Hub are two examples of a Docker Registry.

 

## **How Docker Notary Works**

Prior to a publisher pushing an image to a registry, the image needs to be signed by Docker Engine locally using the publisher’s private key. The signing process generates a hash of the image on the user’s machine and attaches it to the identity that created it.

 

Later, when a user pulls the image, the image hash is verified using the publisher’s public key. The verification lets the user know exactly what he is about to run in his environment as well as ensures that the image is the latest version from the repo and has not been tampered with.

 

Some popular registries for hosting Docker Container /images/blog include:

 

- DockerHub
- Azure Container Registry
- Google Container Registry
- Quay Container Registry
- Amazon Elastic Container Registry
- GitLab Container Registry

 

## **Docker Notary Hashing**

The issue here is that if the user’s machine is compromised, then changes could be made and/or malicious code could be injected into an image (container, file, code, etc.) just before the hash is calculated, corrupting the file’s integrity. This would be done without the user even knowing, thus giving the user the illusion of safety.

 

Further exacerbating the issue, the user would then upload the injected image under his account name, thereby testifying to its authenticity, and making it available to spread to more machines.

## **Criticisms of Docker**

With the recent discovery of the container bug, CVE-2019-5736, that demonstrated how a container infection could escape and attack a host system, it is paramount that containers, /images/blog, and files have their integrity verified. Because containers don’t exist in a vacuum and are not entirely isolated, users need to be 100% sure that the containers they are running are safe in the first place.

 

The detection of CVE-2019-5736 prompted one Docker user to note on SlashDot:

 

_Docker is a mess because it was originally developed in a way that served the interests of Docker Inc. \[e.g.\] the single local name space of /images/blog, the poor default implement of a remote registry, \[and\] the ability to only search /images/blog in dockerhub. It wasn't designed to support secure isolation. That was bolted on later and needs continual patching._

 

The once thought of safe containers that were given access to secrets and user credentials in order to fulfill their functions, now compound the exploitation issue. Containers are so pervasive, that the finding of the 5736 container bug has ushered in a nightmarish-eske scenario where the security gates have been found to be open the whole time even though everyone thought they were closed.

 

What this means for the Docker community is that container security and integrity are called into question. What is needed is a full audit of all existing containers and their trust boundaries, which is only a slightly sizeable order. After which, secure containers will need to be marked as trusted so the integrity question doesn’t linger and the danger doesn’t continue to manifest.

 

## **Docker and its Shaky Certificate Authority Scaffolding**

Docker has an enterprise level image storage solution called Docker Trust Registry (DTR) that can be set up locally by users. In order to set up a local DTR connected registry, you need to first get a digital certificate (DC). Docker lists 3 ways to generate a certificate for a new registry:

 

1. The enterprise can utilize its own PKI infrastructure
2. Buy a certificate from a public certificate authority
3. Use a DTR generated self signed registry certificate

 

Ironically, even with all the problems continually surrounding DCs, Docker still uses them as the root of trust for setting up a new DTR linked registry. We have written many times, including [here](https://www.codenotary.io/the-distributed-ledger-technology-at-the-center-of-the-code-signing-disruption/) and [here](https://www.codenotary.io/code-signing-certificates-journey-of-pain-3-when-even-signing-isnt-enough/), about the folly of trusting digital certificates completely.

 

Docker further notes in its documentation that if none of the above methods are workable solutions, then you have the option to configure your environment to run in what’s known as “insecure” mode. Docker does suggest to only do this for pre-production builds and to be sure you know who you are connecting to. However, just because something should happen doesn’t mean it will happen, and oftentimes doesn’t happen.

 

In fact, we found a justification on GitLab Docs that suggested using an insecure Registry in order to speed up the communication traffic between Docker clients and servers. With the furiously busy schedules of devs today, security is often left on the sidelines so production can push on. It happens. And you can bet money it will happen again. If only all devs produced clean, bug free, functional code, the world would be a better place. That said, many devs do, but those that don’t - no one wants to be that guy.

 

## **What is CodeNotary**

CodeNotary is an application for verifying continuous trust throughout the entire DevOps process. It allows for global integrity verification of digital assets including code, /images/blog, containers, backups, etc. and goes beyond the limitations of digital certificates. CodeNotary's software also enables visibility into asset related metrics such as the number of times an image is verified and number of assets signed by your and your team. It also allows for instant asset revocation in case an image is should no longer be trusted due to deprecation or compromise.

## **How CodeNotary Works**

Using CodeNotary is simple with 1 step to sign and 1 step to verify.

 

You can sign your source code, libraries, builds, and containers using the command syntax `vcn sign` in your CLI. The command immutably stores your signatures on the blockchain.

 

Use the command `vcn verify` in order to verify the integrity of the digital assets you use. This also enables anyone to verify the authenticity of your /images/blog, containers, and code against the distributed ledger where their hashes are stored.

 

## **DockerNotary vs CodeNotary**

In contrast to Docker Notary, CodeNotary calculates the hash of a file non-locally on the blockchain. This offers 2 distinct advantages:

 

1. The hash calculation cannot be attacked unless the entire network succumbs to a 51% attack (an extremely difficult feat to pull off due to the very high, fault tolerant data replication of the decentralized system)
2. The identity of the signer is immutably and non-locally stored on the blockchain right along with the container’s hash.

 

CodeNotary’s use of the blockchain also offers another very unique property. It allows for teams in the various stages of DevOps to pull unrestrictedly from different hosting services such as Docker Hub, code and artifact hosting, and 3rd party libraries, amongst others. Its global integrity verification of digital assets is host service agnostic. Regardless if an image is pulled from a non-Docker affiliated hosting service, the trust status of an asset will always be verifiable against the blockchain. In contrast, Docker Notary is limited to only verifying /images/blog that utilize the DTR network and are simultaneously underpinned by the flawed practice of using digital certificates.

 

Additionally, CodeNotary has the benefit of being able to verify the integrity of any digital asset in the DevOps process and not being limited to only Dockerfiles, /images/blog, or containers. As such, it enables more overview of your DevOps environment.

 

If you like, click below and you can try out for yourself CodeNotary’s Verification tool. And if you are an open source developer, there’s a bonus because it's free for you to use forever.

 

 

[Yes, I Want to Test Out CodeNotary](https://dashboard.codenotary.io/auth/signup)

 

 

**References**

 

[https://it.slashdot.org/comments.pl?sid=13387094&cid=58108000](https://it.slashdot.org/comments.pl?sid=13387094&cid=58108000)

[https://techbeacon.com/security/hackers-love-docker-container-catastrophe-3-2-1](https://techbeacon.com/security/hackers-love-docker-container-catastrophe-3-2-1)

[https://docs.gitlab.com/ee/user/project/container\_registry.html](https://docs.gitlab.com/ee/user/project/container_registry.html)

[https://docs.docker.com/v17.09/datacenter/dtr/2.0/configure/config-security/](https://docs.docker.com/v17.09/datacenter/dtr/2.0/configure/config-security/)

[https://success.docker.com/article/introduction-to-docker-content-trust](https://success.docker.com/article/introduction-to-docker-content-trust)

[https://developers.redhat.com/blog/2016/02/24/10-things-to-avoid-in-docker-containers/](https://developers.redhat.com/blog/2016/02/24/10-things-to-avoid-in-docker-containers/)

https://docs.docker.com/notary/getting\_started/
