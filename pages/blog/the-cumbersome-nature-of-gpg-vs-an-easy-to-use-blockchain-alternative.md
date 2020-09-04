---
title: "The Cumbersome Nature of GPG vs an Easy to Use Blockchain Alternative"
date: "2019-08-26"
---

 

![GPG vs CodeNotary](/images/blog/GPG-vs-CodeNotary-300x126.png)

 

- In a side by side comparison of the commands that need to be entered in order to sign/notarize, verify/authenticate, and revoke trust, it’s easy to see that a blockchain-based alternative is superior in ease of use to GPG.
- GPG functionality is unnecessarily cumbersome and does not suit the needs of a wide breadth of users in the information age today.
- Notable GPG community members, including the creator of GPG, are only using, if they are at all, selected features of the GPG system due to the vulnerabilities and limitations it has.
- CodeNotary, a blockchain-based integrity platform excels where GPG does not with its ease of use, simplicity, and essential functionality for providing trust.

 

In this blog, we better illustrate the core differences between GPG and a GPG, alternative called CodeNotary. Both achieve the same basic goals of attributing trust, authenticating trust, and revoking trust. However, due to their underlying architectures, the way they each achieves those ends is very different. In this blog, we discuss many of the limitations GPG faces today, how prominent community members feel about the software, and how blockchain is being aptly applied to offer the same utility as GPG while delivering it with better user experience.

 

## **A Side by Side Command Comparison of GPG & CodeNotary**

Diving right into it, below is a side by side comparison of the commands needed to operate each software package through a command-line interface. As you can see, GPG requires 13 commands to perform the same functionality that CodeNotary achieves in just 3. 

 

**CodeNotary vcn Tool**

**GPG**

1

Notarize an asset

`vcn notarize`

1

Sign an asset

`gpg --sign`

2

Authenticate an asset

`vcn authenticate`

2

Import a sender’s public key / update senders’ keys via the keyserver

`gpg --import` / `gpg --recv-keys`

3

Revoke an asset

`vcn untrust`

3

Set trust level of imported key

`gpg --edit-key`

 

 

 

4

 

`gpg> sign`

 

 

 

5

 

`gpg> trust`

 

 

 

6

 

`gpg> save`

 

 

 

7

Verify an asset

`gpg --verify`

 

 

 

8

Revoke a key

`gpg --edit-key`

 

 

 

9

 

`gpg> revsig`

 

 

 

10

 

`gpg> save`

 

 

 

11

Upload revocation certificate to keyserver

`gpg --send-keys`

 

 

 

12

Delete private key

`gpg> delete-secret-keys`

 

 

 

13

Delete public key

`gpg> delete-key`

 

Clearly, GPG does have the same level of usability that CodeNotary’s blockchain-based integrity service application does. Furthermore, some of the above-listed commands, i.e. anything executing interaction with the keyserver, are not practical anymore due to the demise of the recent keyserver attack it suffered, which we detailed in our recent blog [**here**](https://www.codenotary.io/gpg-certificates-maybe-permanently-poisoned-but-blockchain-offers-a-strong-alternative/). 

 

## **Commands Comparison Overview**

GPG is overly complex. It’s not easy to use. In fact, to be successful with it, you have to get others to learn how to use it. Documentation is sometimes plentiful and sometimes sparse, depending on what you are looking for. It requires users to execute multi-step processes in order to verify and revoke trust, which is unnecessary, especially considering those actions can be performed by GPG alternatives each in a single step. Furthermore, GPG burdens users to maintain their own circles of trust (known as a user’s Web of Trust) and impractically passes the onerous responsibility of identity vetting to each individual user. 

 

## **Signing by the Asset vs Signing by the User**

In GPG, assets are signed with a user’s key. Due to the way in which GPG is constructed, once a signed asset is in the wild, it is extremely hard if not impossible to revoke the signature. As such the only alternative, is to revoke the key. The problem with that is then all the other assets that were signed with that key become distrusted, which was not the original intent of the revocation.

 

## **Verification/Authentication**

GPG signs a file by creating a new file and can only verify the newly created file. So if a user sends the original file and not the signed one, the receiver will have no idea of the true identity of the sender. 

 

Also, trust cannot be communicated if the recipient of the signed file does not have a copy of the signer’s public key. This requirement adds multiple steps and additional friction to the verification process.

 

Furthermore, the newly created signed file is the same size as the original file with some added code for the signature. This means for every file you want to have signed, you have to double your storage requirements. For data centers that operate on the petabyte level, this is ridiculous.

 

Then, due to the recent Certificate Spamming Attack that essentially poisoned the trust well of GPG, the discovery of trusted public keys by unknown parties is now impossible. Now verification is limited to a user’s own sphere of connections. Users who don’t know each other aren’t able to trust each other and global, network-wide auditability is no longer possible. (This is a problem that a blockchain-based system like CodeNotary doesn’t have.) 

 

Also, users who update to the latest release of GPG v2.2.17, follow the recommended setting updates and convert their keyring to the new GnuPG 2.2 format, their installation will not be compatible with older format versions that existed prior to the release of GnuPG 2.2. This means previously established trust is no longer visible and is effectively deleted for upgrading users. 

 

## **Revocation of Trust**

Revoking trust in a key or signature in GPG is performed by using revocation certificates. For revoking signed files, this is done by appending the revocation certificate to the file. However, this is only effective if it is done prior to the file’s distribution. Post distribution, revoking a signature is extremely difficult, if not impossible. 

 

In order to revoke a key, a user needs to create a revocation certificate for it and upload it to the keyserver so it can be seen by all GPG users. However, as of very recently, GPG suffered a crippling Certificate Spamming Attack in what some call the beginning of its total demise. As the only 100% mitigation, GPG recommends users immediately discontinue using the keyserver. Users are instructed to sever all connections with the GPG keyserver less they break their installation. Thus, global discoverability of revocation certificates is not possible, which means users now have no completely reliable way to know if the signatures they trust have been compromised or not. Consequently, GPG network-wide revocation is impossible and the legitimacy of the entire network is now thrown into question.

 

## **Ease of Use** 

GnuPG is a complex tool with a lot of moving parts. As the old engineering adage goes, the more moving parts you have, the more chances there are for something to not work right. In fact, GPG is known to have weird bugs spring up during its use. Furthermore, it’s difficult to learn and unfortunately for GPG, it only has utility when a second person knows how to use it. This puts a huge damper on the number of people who can effectively use the tool. In contrast, the number of people who could benefit greatly from added levels of trust in the information age is significantly larger in orders of magnitude. If only GPG were simpler to use…

 

## **Web of Trust**

GPG does not have a formalized process for verifying user identities. Instead, it employs a concept that it dubs the Web of Trust (WOT). The WOT operates by having users independently verify other users before adding them to their trusted network. While an interesting model, this system has flaws. To GPG’s credit, they do try to encourage behavior that they see as supporting the WOT model.

 

For example, GPG documentation explicitly notes that it is selfish for an individual to sign their key with just enough confidence to satisfy their own needs as others will have more stringent security needs. As GPG points out, this is because signing keys with a lower level of confidence can weaken the Web of Trust and prevent user communication.

 

However, there are a couple of problems here. First off, encouraging users to simply sign keys with higher levels of trust is not ideal as users may end up propagating a false level of security throughout their network, which will inevitably spill over into other users individual networks. Asking users to do so, if that is indeed what GPG is intending by the statement, will ironically only lead to what they are trying to prevent, i.e. a weaker Web of Trust. Though if this is not what GPG meant, and they instead meant something different, then the encouraging statement they made is another example of incomplete documentation.

 

Secondly, the act of verifying every user in your network is not practical. This request is burdensome and is increasingly less capable of being fulfilled as a user’s network grows. GPG, in fact, understands this and has made it possible for users to allow other users to rate the trust level of someone else as their proxy. Unfortunately, this ends up making trust largely a function of social connection and less of verifiable identity. Yes, GPG requests users who attend key parties and use other mechanisms to verify new users’ identities (via ID or other means). But in reality, how sure are you that every person in your Web of Trust has been vetted to such a degree?

 

## **Notable Community Members Have Issues with GPG**

It’s interesting to note that the creator of GPG, Phil Zimmerman, hasn’t used GPG in years. His given reason has been that his computer (a Mac) didn’t allow for GPG integration according to an [**interview**](https://www.vice.com/en_us/article/vvbw9a/even-the-inventor-of-pgp-doesnt-use-pgp) by Motherboard in Sept 2015. Since then, newer versions of Mac OS have allowed for the integration of GPG, though no word from Zimmerman on if he is now again using the program he built. 

 

Richard Stallman of OSS fame and the man responsible for launching the GNU Project (which GPG has taken a page from) 3.5 decades ago, posts on his [**blog**](https://stallman.org) to not trust any keys that are under his name on any keyserver.

 

Robert J. Hansen, GPG’s unofficial crisis communicator and longtime supporter of the community, recently posted an oblique sounding commentary [**here**](https://gist.github.com/rjhansen/67ab921ffb4084c865b3618d6955275f) on the recent Certificate Flooding Attack. The attack has seemingly killed GPG’s ability to allow global verification by users who are unknown to each other. 

 

## **CodeNotary, a Blockchain-based, Better Alternative**

CodeNotary is a blockchain-based alternative to GPG. It is a platform that proves digital asset integrity and excels over limitations that are inherent in GPG. CodeNotary works on the simple concept of if two hashes match (the blockchain stored hash and the local file hash), then trust is verified. Because it leverages blockchain technology, it is not encumbered with the limitations of both global discoverability and revocability in the GPG system. Instead of cumbersomely processing digital assets to ensure their integrity, CodeNotary’s `vcn` CLI integrity tool is simple and easy to use application that allows any user, anywhere, at any time to authenticate a digital asset in a single command. Similarly, CodeNotary’s `vcn` tool only requires a single command to notarize an asset as trusted or revoke an asset as untrusted. Try out the simplicity of CodeNotary for free and see the difference for yourself.

 

[Start Free Trial](https://dashboard.codenotary.io/auth/signup)

 

**REFERENCES**

[https://www.gnupg.org/gph/en/manual/c481.html](https://www.gnupg.org/gph/en/manual/c481.html)

[https://www.gnupg.org/gph/de/manual/r1023.html](https://www.gnupg.org/gph/de/manual/r1023.html)

[https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management](https://www.gnupg.org/documentation/manuals/gnupg/OpenPGP-Key-Management.html#OpenPGP-Key-Management)

[https://wiki.archlinux.org/index.php/GnuPG#Web\_Key\_Directory](https://wiki.archlinux.org/index.php/GnuPG#Web_Key_Directory)

[https://www.vice.com/en\_us/article/vvbw9a/even-the-inventor-of-pgp-doesnt-use-pgp](https://www.vice.com/en_us/article/vvbw9a/even-the-inventor-of-pgp-doesnt-use-pgp)

[https://www.vice.com/en\_us/article/d3devm/motherboard-guide-to-not-getting-hacked-online-safety-guide](https://www.vice.com/en_us/article/d3devm/motherboard-guide-to-not-getting-hacked-online-safety-guide)
