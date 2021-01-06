---
title: "The trusted CI/CD pipeline and what to learn from the SolarWind Hack"
date: "2021-01-06"
image: "/images/blog/trustedcicd.jpg"
tags: ["CodeNotary", "Trusted CI/CD", "immutability", "SolarWinds"]

---

The [SolarWinds](https://apnews.com/article/technology-hacking-coronavirus-pandemic-russia-350ae2fb2e513772a4dc4b7360b8175c) hack continues to make news and every day some more details reach the surface. Fortune 500 companies, large U.S. federal government agencies, Security vendors and Operating system vendors are affected and its putting the spotlight on how fragile and sensitive the software development cycle is. Using best practices and digital certificates make you check some boxes on your checklist, but this hack shows clearly the need of additional protection. The bottom line is - if your CI/CD pipeline and your code release is unsafe, the door is wide open and invited people with bad intentions. Furthermore, all the money and effort you put into automation, vulnerability scanning and DevOps training is wasted.

This blog post covers the hack as well as the trusted CI/CD pipeline on a high level. If you're interested in the technical details please check our [other blog post](https://codenotary.com/blog/solarwinds-sunburst) as well. 

## What exactly happened here?

SolarWinds, a popular IT monitoring and management vendor, made clear that hackers breached its systems and inserted malware into the software build process of its [Orion platform](https://www.solarwinds.com/securityadvisory). As this was undetected for a long time, product updates shipped with the vulnerability for several months. That malware introduced a backdoor to access running [Orion](https://www.solarwinds.com/solutions/orion) servers on customers infrastructures. 

As many customers are using the Orion platform and do their job in having the software always updated, it's estimated that roughly 18000 customers installed the backdoor and many got [breached](https://www.bankinfosecurity.com/fireeye-solarwinds-hack-genuinely-impacted-50-victims-a-15637). 

Those affected include [Microsoft](https://blogs.microsoft.com/on-the-issues/2020/12/17/cyberattacks-cybersecurity-solarwinds-fireeye/), the U.S. Department of Homeland Security (DHS), and FireEye, a cyber security vendor which first [detected](https://www.fireeye.com/blog/threat-research/2020/12/evasive-attacker-leverages-solarwinds-supply-chain-compromises-with-sunburst-backdoor.html) the attack this month after the hackers stole [proprietary security tools](https://www.fireeye.com/blog/threat-research/2020/12/unauthorized-access-of-fireeye-red-team-tools.html) it offers to its clients.

## The legitimate malware

The real problem of this hack is its scope. 

The attacker found a way to **legitimize the malware** by injecting it into the build pipeline. That build pipeline started to produce digitally signed and trusted software for over 18000 customers worldwide. Currently its not know, how many customers really installed the malware, but none of them would have questioned software signed and introduced by SolarWinds. And that's the real problem, the build pipeline produces builds and they are digitally signed with the SolarWinds certificate trusted by the Certificate authorities in Microsoft Windows, macOS and your browser. Revoking the digital certificate revokes the good and the bad software, as you can't differentiate between these.

**This given trust in digital certificates and company brand is the real issue**



## What were the immediate actions taken by SolarWinds?

Let's make it clear! SolarWinds didn't run a security lacking, lousy maintained development lifecycle - they already did a lot to secure the build process and delivery by having architectural reviews, static and dynamic code analysis, open-source analysis, vulnerability checking and more.  After the hack was realized they even added more security related steps:

* Further restricting access rights to its build environment
* Using a new code-signing certificate for new builds
* Reviewing the build environment’s architecture, the privileged and non-privileged users with access to it, and the network surrounding it

## How to avoid these attacks in the future?

It wasn't a big open hole, the attackers used - it was a very sophisticated attack. Not entirely true, as there were some [FTP credentials](https://threatpost.com/solarwinds-default-password-access-sales/162327/) in a public Git repository. Nevertheless, its unclear if that FTP account was even part of that attack.

Of course, the big question to answer is, what can be done to avoid these widespread hacks in the future? Every vendor and security expert has its own favorite answer to it, but it all comes down to: There is a need for a comprehensive, holistic **DevSecOps** strategy, that aims to provide full observability:

* what is being used (Bill of material)
* when are certain components or open-source projects used
* what is currently running in my build process
* what is currently running in my production environment
* who did introduce what component
* who did approve what artifacts before being used/deployed
* what is effected if the component will be updated or **removed**

## The trusted CI/CD Pipeline

There is no doubt that highly sophisticated hackers can use the tiniest flaw to get into systems and won't stop to be very innovative. But that's not a reason to give up, only to make it harder for them every single day.

A trusted CI/CD pipeline where every used open source project, artifact or module (hopefully) is known and compatibility tested before being integrated into a release that is going to be shipped or deployed is the most important start. 

Therefore, our customers use CodeNotary to notarize every step and artifact within the pipeline by people (Developers, QA) or systems (vulnerability checker, compatibility testing software aso.).

![trustedcicd](/images/blog/trustedcicd.jpg)

You can think of having the unique identity of every single artifact and the bill of material of your build cryptographically verifiably stored on an immutable ledger. Using CodeNotary Ledger Compliance you can choose to use a fast (up to 60.000 TX/min) worldwide distributed consortium blockchain (CodeNotary Ledger Compliance CI/CD) or an ultra-fast (up to 10.000.000 TX/sec) on-premise deployment (CodeNotary Ledger Compliance) or both.

When integrating the CodeNotary solution into your CI/CD pipeline, you gain **4 main benefits**:

* Tamperproof history of all digital artifacts (single artifact and bill of material of the build)
* Machines and People can notarize and authenticate every individual artifact inside or outside of your premises
* Notarization can be done for every individual artifact using different states (Trusted, Untrusted, Unsupported)
* Authentication can be done publicly by anyone with internet access (i. e. to check the current state of the Download or Build)

The CI/CD protection can **uniquely identify**:

* git repositories (source code)
* CI/CD Pipeline ([Jenkins](https://www.jenkins.io/), [CircleCI](https://circleci.com/), [GitLab](https://about.gitlab.com/), [TravisCI](https://travis-ci.com/), [GitHub Actions](https://github.com/features/actions) and many more)
* Container images
* files and folders (i. e. configuration files, build files, CI/CD recipes, installer binaries and many more)

One benefit that should not be underestimated is the possibility to change the Trust level of any digital object at any time and everybody that should have access to that information can verify it. The digital certificate that can only be revoked as a whole for everything, using CodeNotary you can precisely change the status of a certain release or artifact. 

**Unlike the digital certificate approach using CodeNotary you can untrust your release the moment you realize there is a malware or even an non-approved component in it without giving up your whole trust chain.**

That allows fine grained observability of your build and release lifecycle as well as fine grained revocation of artifacts that gone bad.

The combination of Machine and User identity (separated from your SSO or inhouse user management), unique digital artifact identities and trust level (**including a timestamp**) is already powerful but worthless if stored in a normal database.

**Key is to store that information in an immutable ledger, that is always accessible and maintains the full history of changes.**

That is exactly what CodeNotary provides - tamperproof Trust at every stage of your pipeline from source to deployment and beyond.

## Secure physical access

Last but not least , we need to cover the physical access (SSH, Console, KVM) to the systems that run and distribute your code and builds.

Therefore, we're always looking to integrate security technology that allows protecting physical access as well. Crypto cards to secure the cryptographic root signing by the server or integrating Intel SGX and its protected enclave mechanism are just some examples how we make sure, that even a local physical access to manipulate artifacts can be observed and alerted on or of course protected against.

<img align="left" src="/images/blog/intel-sgx.png">