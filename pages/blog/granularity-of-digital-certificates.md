---
title: "The granularity of Digital Certificates"
date: "2019-03-25"
---

We all know how painful, cumbersome and complex a process it is to obtain a digital certificate to sign your code (both binaries and source code). The Certificate Authorities have had over 20 years to create a customer-friendly process to obtain and manage certificates, but they didn’t. Most software publishers, therefore, obtain one or two certificates and sign all their products, across all geographic reasons, across all platforms (64bit, 32bit, ARM, AMD64, etc.). The result is less than a handful of certificates for dozens, if not hundreds, of digital assets, protected. We at CodeNotary call it coarse certificate signing.

What happens if you need to revoke a digital certificate? It will revoke the trust from the signed product, and all other products, platforms, regions you also signed with the same certificate. This happens because of a lack of fine granularity of asset signing.

\[caption id="attachment\_1996" align="aligncenter" width="678"\]![CodeNotary dashboard of singed assets](/images/blog/codenotary-dashboard.png) CodeNotary Dashboard\[/caption\]

Facebook went thru this exact scenario when they revoked their coarse granular certificate for their teenage tracking app and, as a result, all their apps for their employees also stopped working (https://techcrunch.com/2019/01/30/apple-bans-facebook-vpn/).

We at CodeNotary propose a different approach. Using our blockchain-based platform, you can sign and manage hundreds or thousands of signed assets easily on our online dashboard. Imagine giving each one of your customers their own signed binary. Imagine signing your software at the most granular level: per region, or per platform. You can then very effectively and easily revoke a signature by vertical or horizontal, or even by a customer (if the customer is not paying their dues, for instance).

In Codenotary, the issuer and the owner of a certificate are one and the same person: you. No need to go to an expensive, slow and cumbersome Certificate Authority.

Give our dashboard a try and get 3 free certificates by registering today.

[Sign Up Here](https://dashboard.codenotary.io/auth/signup)
