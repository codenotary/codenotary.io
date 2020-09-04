---
title: "The Problem with Using a Download Link"
date: "2019-05-28"
---

 

![Download Links](/images/blog/Download-Links-3-236x300.png)

 

There is a common misconception that HTTPS is protecting files on websites. As HTTPS is only encrypting communication and makes sure the server name (FQDN) is the same as covered by the given SSL certificate, it can only protect against MIM (Man-in-the-Middle) attacks. Such being the case, how do users confidently ensure the integrity of files when they use a download link? Read on to learn what the current established best practices are for ensuring file integrity when downloading as well as the potential dangers that exist around them.

 

## **What Happens if you Click a Download Link on a Website?**

You typically download a file using a link that points directly to a download location, which is the most transparent case. Alternatively, sites will use a script to create an individual download link. The used browser is aware of a download request and starts using a built in mechanism i.e. a download manager to ensure the integrity of the data stream. Alternatively, it will rely on a lower-level protocol like TCP to provide this.

 

One can assume this is a reliable precaution against accidental corruption of files in transfer.

 

Doing this means you can assume the download is only marked complete when the file integrity check has been successful.

 

Of course, if you prefer, you can install an additional download manager to take care of the download action. Some common download managers include [Free Download Manager](https://www.freedownloadmanager.org/) and [Persepolis](https://persepolisdm.github.io/).

 

**However, in either case, using a download manager doesn’t mean the file you downloaded was actually the file you intended to download.**

 

## **Ways to Corrupt a File Intentionally**

When it comes to intentional corruption of files by a Man-in-the-Middle, any attacker who can modify the data-stream of the download can very likely also modify the data-stream which is used to transfer the checksum. As such, checksum verification is not an efficient security precaution. You might say, “But that’s covered by TLS and HTTPS communication.” Yes, that is true, but only if both the website and the download location are protected by HTTPS.

 

**If someone gains access to the website where the download link as well as checksum are part of the same page or website, there is no protection left. The attacker can simply replace both the download link and checksum.**

 

Therefore, the mentioned checksum (MD5, SHA1, and SHA256 are typically used) is only of value when the file advertising website and the file hosting website are under the control of different entities. A good example of this is when you outsource your downloadable files to a 3rd party file hoster.

 

## **The Truth about Checksums**

A cryptographic hash (sometimes called a ‘digest’) is a kind of ‘signature’ or ‘fingerprint’ for a text or a data file.

 

A hash is not ‘encryption’. It cannot be decrypted back to the original text. It is a ‘one-way’ cryptographic function that is a fixed size for any size of source text. Thus, hashes are suitable for password validation, challenge authentication, anti-tampering, and digital signatures.

 

Let’s get into the different checksum algorithms first:

 

MD5: It’s the most popular checksum algorithm but it is completely broken from a security perspective. The probability of an accidental collision is still vanishingly small, but exists.

 

SHA1: Secure Hash Algorithm generates an almost-unique 160-bit (20-byte) signature for any given text. However, SHA-1 is no longer recommended for cryptographic purposes. Google has now achieved a collision attack on SHA-1. While it might still be safe to use SHA-1 most of the time, the message is clear – switch to SHA-256 or SHA-3. There is a good description on [Wikipedia](http://en.wikipedia.org/wiki/SHA-1) if you’d like to learn more.

 

SHA-256 or SHA-3: SHA-256 algorithm generates an almost-unique, fixed size 256-bit (32-byte) hash. SHA-256 is one of the successor hash functions to SHA-1, and is one of the strongest hash functions available.

 

Truth is, while the checksum algorithm used might be pretty safe, the checksum calculation and comparison process is mostly manual. Even worse, it's not easy to understand!

 

The manual nature of the process also means that a website owner has to provide checksums to his users as a type of visual safety net. Unfortunately, now it's up to the downloading user to create a checksum of the downloaded file on his end in order to compare it with the website listed checksum.

 

**That means it’s manual, error-prone, and optional AKA unsafe!**

 

## **Final Thoughts**

As you can see, it’s easy to understand why many users might think their downloads are safe despite how illusory and thinly veiled that safety can actually be. In fact, clicking a download link may deliver an altered version and not the original file that was intended. The best practice of verifying the checksum of your downloaded copy and matching it to the publisher’s listed checksum is an unsafe manual and error-prone process.

 

In our next blog in this series, we will explore ways to use checksums and how to verify their correctness.

 

In the meantime, if you liked this blog and think code-signing and digital certificates are a good way to verify the integrity of a downloaded file, you’ll want to think again. Check out our blog ‘Avoid the Digital and Code Signing Certificates’ Journey of Pain’.

 

 

[Please, Take Me to the Blog](https://www.codenotary.io/avoid-the-digital-and-code-signing-certificates-journey-of-pain/)
