---
title: "Protect Yourself with Blockchain from Canonical-like GitHub Attacks"
date: "2019-07-15"
---

 

![Hacked](/images/blog/Hacked-300x200.jpg)

 

On Saturday, July 6, 2019, the GitHub account of a Linux Ubuntu distributor, Canonical Ltd, was hacked. Canonical confirmed that there is no indication of data alteration or deletion, though it is still investigating. Despite numerous previous attacks, GitHub and its user accounts continue to remain vulnerable. This blog discusses the recent Canonical incident, previous GitHub incidents, and how one company is intelligently responding to the shifting security landscape by utilizing blockchain to protect against potential security breach fallout. 

 

## **What Happened**

Over the Fourth of July weekend, a hacker gained access to Canonical’s GitHub account. Acting blatantly obvious, they created 10 repos in Canonical’s account with the naming convention CAN\_GOT\_HAXXD\_# as seen below:

 

![GitHub Attack - Canonical Repo](/images/blog/Screenshot-2019-07-12-10.26.39-300x292.png)

 

Ubuntu Security immediately launched an investigation to get their arms around the full extent of the breach as well as removed the compromised account. They also disconnected Launchpad infrastructure, where the Ubuntu distribution is built and maintained, from their organization and are implementing remediations as necessary. 

 

Ubuntu Security confirmed in a statement that there was no indication any source code or PII (Personally Identifiable Information) was impacted.

![Ubuntu Security Tweet - Canonical Hack](/images/blog/Screenshot-2019-07-12-10.47.40-294x300.png)

 

At the end of their investigation, the security team will publish a publicly available update of the Linux distribution. 

 

## **The Regular Occurrence of GitHub Attacks**

Attacks have become a regular occurrence for GitHub. Perhaps, this most recent attack was actually a white hat test in response to the regular attacks, though this remains to be seen. 

 

That said, last month, the official Ubuntu forum was hacked were approximately 2 million usernames and passwords were stolen. Then in May 2019, hackers were breaking into private code repos on GitHub, copying their data locally, deleting the data on the repo, and ransoming the copies to the project owners. And in June 2018, the Gentoo Linux distributor was hacked by an attacker who gained access due to a weak password and was able to maliciously inject a backdoor into some GitHub downloads for a specific OS version. 

 

Maintaining operational excellence is a big deal. In the security industry, the understanding of account compromise has veered away from a hope that it doesn’t happen to an understanding that it does happen and to everyone. As such, trust has shifted from an implicit assumption to a process of explicit verification.

 

## **Protecting File Integrity from the Effects of Compromise**

Everything can be hacked, so protection is key. Here is what one company, Virtuozzo, is doing to protect against hacks like the GitHub example. Virtuozzo (https://www.virtuozzo.com), a hyper-converged infrastructure software vendor, is utilizing CodeNotary (see the next section for more information about CodeNotary) to incorporate the powerful security mechanisms of blockchain into their offerings. This way no matter what security leak might be exploited, the source code is immutable and protected due to the blockchain-based service.

 

The way it works is that each file stored by Virtuozzo has it’s fingerprint (aka its hash) taken and then stored immutably on the CodeNotary’s blockchain. Then from that point on, every file can be verified as 100% authentic and untampered at any point in time, from anywhere in the world. By doing so, Virtuozzo gives its customers peace of mind anytime they open and use any Virtuozzo stored file as it is protected by the immutable CodeNotary blockchain.

 

## **About CodeNotary**

CodeNotary brings trust and integrity to DevOps and the software industry. It allows development teams to strongly identify and track their digital assets and artifacts, such as libraries, builds, source code, containers, and dependencies throughout the DevOps process. This way organizations can always guarantee the veracity and integrity of their digital assets to themselves as a team and to others outside the team. By using digital ledger technology, it creates an immutable chain of trust which for the first time enables zero trust to be infused into application development and operation.

 

Test out CodeNotary for free and see for yourself.

 

 

**[Start Your Free Trial](https://dashboard.codenotary.io/auth/signup)**

 

 

**REFERENCES:**

[https://www.linuxtoday.com/security/canonical-github-account-hacked-ubuntu-source-code-safe.html](https://www.linuxtoday.com/security/canonical-github-account-hacked-ubuntu-source-code-safe.html)

[https://web.archive.org/web/20190706144600/github.com/canonicalltd](https://web.archive.org/web/20190706144600/github.com/canonicalltd)

[https://www.vice.com/en\_us/article/vb9v33/github-bitbucket-repositories-ransomware](https://www.vice.com/en_us/article/vb9v33/github-bitbucket-repositories-ransomware)

[http://www.linuxandubuntu.com/home/ubuntu-forums-hacked-here-is-what-hacker-stole](http://www.linuxandubuntu.com/home/ubuntu-forums-hacked-here-is-what-hacker-stole)

[https://www.securityweek.com/canonical-github-account-hijacked](https://www.securityweek.com/canonical-github-account-hijacked)

[https://www.securityweek.com/gentoo-publishes-incident-report-after-github-hack](https://www.securityweek.com/gentoo-publishes-incident-report-after-github-hack)

[https://wiki.gentoo.org/wiki/Project:Infrastructure/Incident\_Reports/2018-06-28\_Github](https://wiki.gentoo.org/wiki/Project:Infrastructure/Incident_Reports/2018-06-28_Github)

[https://twitter.com/ubuntu\_sec/status/1147675201632473088](https://twitter.com/ubuntu_sec/status/1147675201632473088)
