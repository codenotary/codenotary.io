---
title: "Opvizor using CodeNotary integrity for Snapwatcher latest release"
date: "2019-04-10"
---

Just last week **[Opvizor](https://www.opvizor.com/)** released the latest version of **[Snapwatcher](https://www.opvizor.com/snapwatcherent)**. Instead of signing it with a digital certificate, Opvizor decided to use **[CodeNotary](http://www.codenotary.io)** for integrity verification.

![Opvizor Snapwatcher signed with CodeNotary](/images/blog/snapwatcher.png)

Like other software vendors, Opvizor grew tired of paying $500 for a digital certificate to sign a low price range product. Just a few days before, in an [**interview**](https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/) with BleepingComputer, Don Ho, the creator of well know editor Notepad++, complained that the whole issuing process for attaining a digital certificate was cumbersome, overpriced and, in effect, useless. As an alternative to a code signing certificate, he decided to use GnuPG (GPG) to sign the latest version of his product [https://notepad-plus-plus.org/news/notepad-7.6.4-released.html](https://notepad-plus-plus.org/news/notepad-7.6.4-released.html).

### **GPG and its Limitations in Code Signing**

GPG is a free signing tool that hashes the code and signs it with a private key that the software developer self-generates. However, up until the point when a private key is added to the [**Web Of Trust**](https://en.wikipedia.org/wiki/Web_of_trust) (WoT) by an existing member, the key's owner identity remains unverified. And due to the cumbersome identity verification process, very few keys are actually ever added to the WoT. This results in GPG being used as a hashing tool, used more to prove the integrity of software rather than its authenticity. Therefore, GPG is not a true alternative to code signing certificates.

For this reason, [**vChain**](http://www.vchain.us) decided to develop an easy-to-use alternative to digital certificates. The goal was to develop a flexible, self-signing tool like GPG, but also one that provides for the strong, verifiable identity of the signer. The result was **[CodeNotary](http://www.codenotary.io)**.

 

### **CodeNotary and Code Signing**

CodeNotary is a leading edge technology for the verification of trust and integrity. Software signatures are created, registered, and immutably stored on the blockchain of the **[Zero-Trust Consortium](https://zerotrustconsortium.org/).** Once stored, signatures are tamperproof. Moreover, the whole signing process has been made so simple (just 1 step) that software developers can easily sign any type of software asset while maintaining a high level of production. Additionally, CodeNotary allows for infinite granularity in the signing process, which means that all code of any size and language can be signed throughout the development process as well as a final release. The signing can be automated within CICD scripts, as we do here at **[vChain](http://www.vchain.us)**, to guarantee a fully trusted software development workflow.

With CodeNotary, software publishers have an easy-to-use alternative to expensive and cumbersome code-signing digital certificates.

[**Start now**](https://dashboard.codenotary.io/) your free trial of CodeNotary and see how easy it is to sign code and applications with infinite granularity.

 

 

[Yes, I Want to Test Out CodeNotary](https://dashboard.codenotary.io)
