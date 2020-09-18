---
title: "Stop paying for code signing certificates again with CodeNotary"
image: /images/blog/dashboard_vchain-1024x226.png
date: "2019-03-27"
---

Quite a bold statement you might wonder. But that is our goal for all non-commercial projects. The whole certificate authority industry likes to make money on the back of non-commercial projects. They typically lure you into a free code signing certificate for 1 to 3 years and then there comes payday.

If you don't go for it your certificate won't get extended and expires (and with it your signed assets).

The only way for some little protection is either an annually paid digital certificate (especially if you provide Microsoft Windows executable), or use MD5/SHA-1/SHA-256 or [GPG](https://www.gnupg.org/), that needs to be manually checked. One certificate to sign all of your releases just to avoid nasty built-in warnings in Microsoft Windows. That is just not enough for the price. In the end, you provide free tools and software but you need to pay for a user to be able to use them without any warnings.

An amazing open-source and non-commercial community is providing great software, tools, and documents saving billions of hours for others. You, as part of that community, shouldn't pay for any protection or management of their assets (files, documents, releases).

The voices of annoyance are hard to ignore - be sure to check the blog post about [community reactions on digital certificates](http://www.vchain.us/developers-unite-against-the-expensive-and-cumbersome-digital-code-signing-certificates/).

## What does CodeNotary do for non-commercial and open source developers?

Dennis Zimmer, CTO, and co-founder of vChain, the creator of CodeNotary stated: _"We at vChain, created CodeNotary to protect your hard work, increase user confidence and trust without spending a fortune. If you provide non-commercial software we provide a life-long free subscription of CodeNotary."_

Leveraging the blockchain technology makes it possible to avoid the enormous costs involved to build a high-secure data-center and go through all the typical market-regulating hurdles to offer alternative solutions.

CodeNotary does exactly that: automatically creating a unique hash of your digital assets and store that on an immutable blockchain. That blockchain entry does include the author information and a trust level.

The better proof of the ownership and the author's identity the higher goes the trust level of assets. That way CodeNotary allows you to store every single asset of yours in a secure and immutable way, without going through all the trouble with digital certificates to sign your code. Furthermore, instead of being limited to revoke a whole certificate with all of its signed assets, CodeNotary allows a change of the trust level for every single asset.

We invite all non-commercial project owners, developers to get their all-time free CodeNotary subscription here:

### [Non-Commercial Projects License](http://www.codenotary.io/codenotary-for-non-commercial-projects/)

## CodeNotary components

When you start using CodeNotary, you automatically get the dashboard access where you can see and manage all digital assets you ever signed. To sign files, documents, docker container and more, you need to use the vcn command line as well. But let's dig into the 2 important components.

![Start CodeNotary dashboard](/images/blog/dashboard_vchain-1024x226.png)

All is done with 2 simple components:

1. vcn command line tool, that does all the asset action ([completely open source on GitHub](https://github.com/vchain-us/vcn))
2. a beautiful [dashboard](https://dashboard.codenotary.io) that simplifies managing and monitoring your signed assets

### Chrome Browser extension

Btw. there is a 3rd one that makes verifying of download integrity extremely simple. The [CodeNotary Google Chrome extension](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb?hl=en). That extension supports direct download verification against the CodeNotary blockchain service as well as on-demand verification of files already stored on your machine.

\[caption id="attachment\_2013" align="alignnone" width="824"\]![The CodeNotary extension for Google Chrome to automatically check download integrity](/images/blog/codenotary_browser_extension.png) CodeNotary Google Chrome extension\[/caption\]

### Features

As we're just getting started there is much more to come. At that time we already support the following actions:

1. Sign any of your files, documents, docker container and much more (Trust)
2. Verify the integrity of digital assets you signed
3. Verify the integrity of digital assets based on other author sign action
4. Untrust your own digital assets
5. Unsupport your digital assets (i. e. outdated version)
6. List and manage all of your signed assets, either using vcn or the CodeNotary dashboard
7. you can also have private and public assets (visibility)

The vcn Command can be used on Linux, MacOS or Microsoft Windows:

\[caption id="attachment\_2014" align="alignnone" width="856"\]![CodeNotary vcn command line tool](/images/blog/vcnhelp.png) CodeNotary vcn command line tool provides all functionality to handle trust and support of any kind of file.\[/caption\]

Quick Tip: You need to start with **vcn login** to setup your keypair to start signing. And it might take up to 10 minutes before you can start signing, as some smart contracts need to be triggered.

In case you only want to use vcn to verify existing files, there is no need to login.

When using vcn for Windows things get even simpler based on the Windows Explorer integration. That makes it very convenient to sign or verify files while browsing within the Windows File Explorer.

![CodeNotary vcn within explorer](/images/blog/windows_explorer.png)

## How to start?

### We made it as simple as it can get. It's a few quick steps and completely free.

The best is to sign up on our landing page for non-commercial projects and then register on our CodeNotary dashboard. Please make sure to use the email address and send the project URL to your non-commercial offering.

We activate your license as fast as possible (usually within a day) and then you're good to go.

And please don't forget to leave feedback as we love to get your opinion on our products. You can always use our chat to contact us and get your questions answered.

### [Get Your Free License Here](https://www.codenotary.io/codenotary-for-non-commercial-projects/)
