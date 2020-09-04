---
title: "Before Running a Docker Container Image, Know What’s in the Box"
date: "2019-06-06"
---

 

![Shipping Container Door](/images/blog/Container-3-287x300.jpg)

 

Modern DevOps environments have brought significant increases in time to market for applications. However, with this gain in efficiency and productivity we have lost oversight as well as a deep understanding of what exactly is running in our production environments. As clean code producing, security minded devs and managers alike, we have to know what’s in the box before running a Docker container image.

 

Also, if you’re a team lead, you have to consider if the development libraries that have been approved are really the ones being used in the applications your team is deploying into production.

 

## **Know What’s In the Box**

We, at CodeNotary, have developed a solution that allows devs and teams to rest assured in the integrity of their build code. Additionally, organizations can enforce discipline and good, solid practices in their entire DevOps process.

 

For example, let’s assume that you have a set of Maven libraries or GitHub repositories. After they have been checked for conflicts and vulnerabilities, that have been approved for use in development. Once approved, it’s simple step to sign your binaries using the single command `vcn sign <asset>` with CodeNotary’s vcn CLI tool.

 

Now, by signing these binaries you have given them a unique identity with a unique hash that is indelibly stored on our distributed ledger technology. Then, at any time during the build or deployment process, you can make sure that you and/or your team are working with only the approved libraries and not using the non-approved ones.

 

## **Verify Before Running an Image or at Download**

Verifying assets is pretty simple as well. There are actually 3 ways to check the integrity of approved assets, which you can do when you first download them locally or later just prior to executing them. You can use the:

 

 1)  **[CodeNotary vcn CLI tool](https://www.codenotary.io/how-it-works/)** using the command `vcn verify <asset>` for verification anytime.

 

![CodeNotary vcn CLI tool - Trusted](/images/blog/vcn-CLI-tool-Trusted-300x80.png)

 

     2)  **[CodeNotary - Chrome extension](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb)** for verification at download.

 

![CodeNotary Chrome Ext - Integrity Verified - Chrome](/images/blog/CodeNotary-Chrome-Ext-Intergity-Verified-Chrome-300x49.png)

 

     3)  **[CodeNotary drag and drop verification page](https://verify.codenotary.io/)** which is available whenever you need it and has the added benefit of displaying the MD5, SHA1, and SHA256 hashes for each asset.

 

![CodeNotary - Drag & Drop - Verification - Verified](/images/blog/CodeNotary-Drag-Drop-Verification-Verified-186x300.png)

 

 

With multiple different ways to verify your cleared-to-use assets, you can easily authenticate the evergreen tree of matrix binaries and environments that often stretch across geographically dispersed locations.

 

With CodeNotary, you can ensure confidence in your DevOps integrity workflow and always know what’s in the box before running a Docker container image. But you don’t have to take our word for it. Check it out for yourself and see. And if you’re an OSS contributor, it’s pretty nice cause you’re subscription is free forever.

 

 

[Yes, Sign Me Up to Test It Out](https://dashboard.codenotary.io/auth/signup)
