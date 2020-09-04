---
title: "What the ASUS Software Updates Hijack Teaches Us About the Risks of Software Supply Chains"
date: "2019-04-17"
---

## What is ASUS ShadowHammer supply chain attack?

On March 25th, [Motherboard](https://motherboard.vice.com/en_us/article/pan9wn/hackers-hijacked-asus-software-updates-to-install-backdoors-on-thousands-of-computers) reported that hackers managed to hijack ASUS, the [5th-largest  PC manufacturer](https://en.wikipedia.org/wiki/Market_share_of_personal_computer_vendors) by unit sales, software supply chain and inject a security backdoor that was installed on [over a million computers](https://securelist.com/operation-shadowhammer/89992/) (according to Kaspersky).

 

\[caption id="attachment\_2067" align="alignnone" width="825"\]![ShadowHammer](/images/blog/operation-shadowhammer.png) ShadowHammer victims per country\[/caption\]

 

As the **[attack](https://techcrunch.com/2017/09/18/avast-reckons-ccleaner-malware-infected-2-27m-users/)** on Avast CCleaner’s installer did in 2017, the ASUS's hijack spotlights the tech community’s risk associated with distributed software development.

 

Distributed software development is extremely resource efficient. Having software developed by multiple suppliers around the world, though, exposes companies to a number of supply chain risks. These risks can and must be hedged against.

 

Software supply chain attacks are not new to the industry, but when the malware injected in the Avast supply chain infected 2.3 million customers, the problem started to get proper attention. While much has been said of the problem since the CCleaner attack, the ASUS security breach proves that not enough has been done to prevent the issue from happening again.

 

Furthermore, companies like ASUS with their sprawling supply chains and their “trusted” networks of software producing coders from around the world, only increases the number of attack vectors hackers have to exploit. This is just one more giant reason companies need to secure their supply chains with more diligence and resolve.

 

Let’s take a look at how the ASUS attack was carried out. Hackers injected the ASUS update code with malware and signed it with one of ASUS's own digital certificates. Because the certificate was valid, the injected code was then pushed to ASUS's software distribution servers. As a result, more than a million ASUS customers unwittingly downloaded and installed the malicious update on their computers.

 

In this case, the backdoor sat on ASUS update servers for months before the company was able to identify the issue. And yet even after the exploit was recognized, the signing certificate used in the attack was not revoked, leaving customers to continuously suffer the effects of being comprised by the injected malware.

## Lessons learned from the ASUS attack

 

After two attacks of such magnitude and the repeated methodology used by hackers, it’s time to humbly recognize the lessons learned from software supply chain attacks, and to take necessary corrective actions:

 

1. Software supply chain attacks represent an effective and inexpensive way hackers can infect millions of computers with malware
2. Trusting a coder doesn’t mean that you can trust his security practices, especially when he’s working remotely where your company’s security policies cannot be enforced
3. Code signing and digital certificates, the de-facto _claimed_ solution for software integrity verification, have repeatedly proven to be unable to guarantee software trust
4. The certificate revocation process is almost never enforced, leaving users to continuous exposure to malicious software even after issues are identified

 

In order to solve these problems, software development processes must take a page out of the industrial manufacturing’s playbook. Manufacturing companies, in fact, vet and monitor each supplier and material before and after they become part of the supply chain. Here’s a simple checklist that companies should keep in mind when implementing a distributed software supply chain:

 

1. Be capable of inhibiting coders from accessing their supply chain process when they cannot trust a coder anymore
2. Enforce integrity verification at every step of the development workflow
3. Verify trust from development to production and create a Trusted Software Bill of Materials (SBOM)
4. Instantly recall any software produced by a non-trusted party
5. Notify users of the issue so that they can install the correct patch

## How CodeNotary can prevent software supply chain attacks

CodeNotary provides the capabilities needed to bring trust to the software supply chain. With CodeNotary, developers sign their code with their unique identity, so that it can be verified for integrity and origin. This can happen at every stage of the software lifecycle from development to production to distribution. 

 

Here is how CodeNotary brings trust to the software supply chain:

 

1. Developers sign, with a single command, the hashes of code they produce using their unique identity. Having a one command process makes signing extremely easy and eliminates any overhead
2. The signed code is verified for integrity and authenticity as it moves along the supply chain, from IDE to source control, to build, to deployment and finally production and distribution. CodeNotary makes code integrity verification part of the build and deployment for a fully automated and secure process
3. Only the code that passes the integrity verification is allowed to move into the next stage. This continuous integrity creates a trusted supply chain pipeline that software vendors can rely on
4. In case of a rogue coder, CodeNotary can immediately revoke his signature and untrust his code 
5. The final product contains only trusted code, tracked in the product SBOM
6. Software vendors can instantly recall any buggy or untrusted software after releasing it to production. This triggers automatic alerts to customers, who can then update the application before hackers exploit the vector

 

\[caption id="attachment\_2068" align="aligncenter" width="3670"\]![Trusted software supply chain](/images/blog/CodeNotary-trusted-supplychain.png) CodeNotary trusted software supply chain process\[/caption\]

 

**[vChain](http://vchain.us)** developed CodeNotary to allow companies to build a trusted software supply chain inexpensively and without any overhead. With CodeNotary software vendors and publishers have no reason for becoming victims of supply chain attacks ever again.

 

Start your CodeNotary trial and see how easy it is to secure your software supply chain.

 

 

[Get Started Now](https://dashboard.codenotary.io/auth/signup)
