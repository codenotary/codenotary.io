---
title: "GPG Certificates Maybe Permanently Poisoned but Blockchain Offers a Strong Alternative"
image: /images/blog/lock-unlocked-with-fingerprint.jpeg
date: "2019-08-20"
---

![lock unlocked with fingerprint](/images/blog/lock-unlocked-with-fingerprint.jpeg)

 

- GPG has been running with a well-known security flaw for a decade, never got around to fixing the problem, and continued to act as a solution for trust and security
- Recently, an attack took place that resulted in the indefinite, possibly permanent, corruption of the GPG public network. 
- Due to the attack on its infrastructure, the integrity of all keyserver stored public keys is now called into question as any certificate may be poisoned.
- GPG is unable to facilitate public key discovery for users who do not know each other.
- There is no time frame for when a 100% fix will be available and the best mitigation at present is to stop using the SKS keyserver network.
- Blockchain technology is an effective and superior alternative to GPG and all of its limitations.

## **What Happened**

In late June 2019, bad actors launched a certificate spamming attack and exploited a vulnerability that has existed for over 10 years in the OpenPGP protocol. The net effect is that the SKS Keyserver, which is central to the discovery and large scale propagation of public keys has been compromised indefinitely and quite possibly even permanently. GPG.org noted that the attack cannot be mitigated by the SKS keyserver network in any reasonable time period and the best thing is to immediately stop retrieving data from the SKS keyserver network.

 

## **What is a Keyserver**

A keyserver basically is like a phone book or directory of public keys. It facilitates users being able to find other users’ public keys. 

 

## **Keyserver Vulnerabilities**

The code for the server is written in a very obscure and complex, which makes it very difficult to update as the expertise needed to do so is sparse. In fact, no-one in the PGP/GPG community feels qualified to do a complete overhaul of the outdated system as noted by longtime GPG community member and victim of the attack, Robert J. Hansen. Subsequently, even though it was originally discovered over a decade ago, the long-standing Certificate Flooding vulnerability was never fixed. 

 

## **Effects of the Attack**

Due to the keyserver’s architecture and its append-only nature, certificates that have been poisoned cannot be deleted. These poisoned certificates will inevitably continue to propagate throughout the system as long as users allow updates from the keyserver network. 

 

The attack also partly affects solutions like Docker Notary. Since users can add public keys they have personally determined as trustworthy, they could potentially end up adding a tampered keys even if a system does not utilize GPG keyserver in its core functions.

 

## **GPG Response**

Since the attack, GPG has published new software, version 2.2.17, that attempts to mitigate the Keyserver vulnerability by ignoring signatures received from keyservers. 

 

The update also emphasizes the use of the Web Key Directory in place of keyservers. 

 

## **What is a Web Key Directory?** 

The Wed Key Directory is a lookup scheme that utilizes HTTPS and individual web pages to facilitate key discovery. It is a distributed system similar in nature to the way email is a distributed system. However, like email, it requires users to know one another. Thus it is limited to peer-to-peer communication/discovery. It does not allow for the scaled discovery of public keys across networks by users who do not know each other. In GPG’s words, “This is unacceptable,” and is why they implemented keyserver technology in the first place. ([Reference](https://www.gnupg.org/gph/en/manual/x457.html)). 

 

Additionally, for the Web Key Directory to have some kind of success, each user has to individually upgrade and implement the mitigation themselves. This very likely means that adoption of the Web Key Directory workaround will be piecemeal within the GPG user network. 

 

## **Summary of the Attack**

Overall, the impact of that attack is that you can’t trust the result of a public key request anymore as it might be tampered. Furthermore, the distribution of GPG public keys is limited to email and individual websites. Ultimately, if you don’t know the public key of someone, there is no reliable way to discover it! 

 

And it seems there are no real alternatives. The Certificate Spamming Attack has marked the beginning of the end for GPG and its Web of Trust, which was limited even prior to the attack, is now being buried.

 

That said, blockchain offers a strong alternative to GPG and improves upon its limitations, which we wrote about [here](https://www.codenotary.io/blog/can-gpg-secure-the-software-industry/). It is really the only way to have both global discoverability for users who are unknown to each other and immutably stored proof of content integrity. 

 

## **CodeNotary, Blockchain-based Integrity as a Service**

CodeNotary works on the same simple premise GPG does of matching hashes to prove integrity, though CodeNotary is much more user-friendly. However, because it utilizes blockchain technology, CodeNotary is able to offer strong user identification as well as asset authentication, providing twice the amount of assurance in content integrity. Also, because the blockchain is decentralized in its architecture, it is not vulnerable like a centralized keyserver is to a ‘certificate replacement’/‘public key replacement’ attack. A blockchain-based alternative to GPG like CodeNotary is simply an easier, better way to prove trust in content at scale. 

 

Try CodeNotary out for yourself for free by clicking the link below. And bonus if you’re an OSS contributor as it is free forever for you.

 

[Start Free Trial](https://dashboard.codenotary.io/auth/signup)

 

**REFERENCES**

[https://gist.github.com/rjhansen/67ab921ffb4084c865b3618d6955275f](https://gist.github.com/rjhansen/67ab921ffb4084c865b3618d6955275f)

[https://www.gnupg.org/gph/en/manual/x457.html](https://www.gnupg.org/gph/en/manual/x457.html)

[https://lists.gnu.org/archive/html/info-gnu/2019-07/msg00004.html](https://lists.gnu.org/archive/html/info-gnu/2019-07/msg00004.html)
