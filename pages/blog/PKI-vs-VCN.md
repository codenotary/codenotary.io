---
title: "What is a Digital Certificate and how do they work?"
date: "2021-10-11"
image: "/images/blog/pki-image10.jpg"
tags: ["CodenotaryCloud", "PKI", "Certificates", "vcn","Digital Certificate"]
---


![](/images/blog/pki-image1.jpg)

In this article we will learn how digital certificates work, how CodeNotary notarization works, and their respective strengths and
weaknesses. Let's start with the digital certificate within a public key infrastructure

## What is a Digital Certificate and how do they work?

In a nutshell, a digital certificate is just a number. A very, very big number; plus some information or (as we like to call it) metadata containing banal things like name, subject (what the certificate is about), and expiration date.

Actually, the very big numbers involved are two. For a certificate, an algorithm creates a pair of numbers, related (this is important) by a magic mathematical function.

You can use these two numbers to "sign" arbitrary data, using a specific mathematical function.

What is signed by one number, can be checked by the other -- and *only* by the other!

No other number in the mathematical universe will give the same result.
If you check any signature with one number, you can be mathematically sure that it was signed by the other number.

So, you keep one of those numbers safe, and call it private key, and give the other to the world, calling it public key.

![](/images/blog/pki-image2.png)

You send your data to your friend, signed by your private key. Providing your friend has your public key, he can check the signature and be sure that the data was sent by you.

That is fine but... what if your friend *doesn\'t* have your public key? What if the other guy is not even a friend of yours, but just a random stranger who wants to be sure that the data you published somewhere is truly yours?

The solution is simple: you give it to him along with the data.

![](/images/blog/pki-image3.png)

You don't just sign your data with your private key. You also attach a digital certificate, which is (as we said) your public key plus some data about who you are, so that the random stranger can see where the data is coming from. In this way the random guy has your public key and knows who you are.

Ok, but... how can he trust *that* information in the certificate?

That's where the public key infrastructure kicks in. The certificate, in turn, must be signed by a third party. A large, reliable third party like Digicert, Verisign, Thawte, or Geotrust. They are called certification authorities.

Since they are so huge and famous, everyone on the internet holds their public key: they are everywhere, embedded in Microsoft Windows, macOS, Linux, Android, iOS, Chrome, Firefox. Thus, everyone can verify data signed by those certification authorities.

This means if you get *your* certificate signed by them, anyone can check the validity of your certificate data: your public key, your
identity and everything is fine.

![](/images/blog/pki-image4.png)

The mechanism allows a user to check any signed data *without* having to connect to a central server: you just need to compute the signature of the data, to see if it matches the certificate, and to compute the signature of the certificate itself, to see if it's correctly signed by a certification authority that you know. All that can be done offline. No internet connection needed. Splendid.

So, everything is fine? Well, not really. As always, the devil is in the details. There are some points of friction.

First: how can I get Verisign (just to pick one) to trust me? 

Certification signing is a slow and tedious process. And it is only safe
up to a certain point.

For web certificates, Let's Encrypt is recently gaining traction because they are inexpensive, but mainly because they automated the process of creating and renewing certificates, which was way more expensive than the actual cost of the certificate.

But for other uses, such as code signing, there is no automatic process. You have to spend time going through all the steps needed for getting the certificate.

Let's look at another point: what if my key gets compromised? I lost it, or some nasty hackers managed to get their eyes on it. Now they can sign data on my name! What can be done?

There are solutions for that, but they are not very satisfactory. Let's take a look at them.

Every certificate has an expiry date, so an attacker can sign documents just for a limited time period. This helps limit the damage. Usually, a certificate lasts for one year; Let's Encrypt, leveraging their automatic renewal process, issues certificates that expire after 3 months. We can choose a shorter period of time, but since the creation and deployment of a certificate is an expensive process, we wouldn't want to go much shorter than that.

Another option that we have if our private key is compromised is to revoke the certificate. The certification authorities keep a list of revoked certificates, and we can ask them to add ours to the list, so that everyone knows that the certificate is no longer valid.

Well, at least everyone that cares enough to look at the list. Or that *can* look at the list: as you remember, the verification can be done offline, so if I'm offline, how do I get a new list? And what if the list gets bigger and bigger? Do I download it every time I get to check a certificate? For the websites, there are techniques to work around the issues, but as you can imagine, the process is not as easy as it seems.

And then there is the biggest issue of all: 

What if I signed a piece of data by mistake? Or if I change my mind and want it unsigned?

![](/images/blog/pki-image5.png)

Well, I can't.

I can't just unsign data. There is no way that I can say to the world: "hey, this document in your hand that I signed yesterday is no longer valid". Only thing I can do, is to revoke the whole certificate and, by doing that, revoke the trust for every single document signed by the certificate. No matter if you digitally signed 1 or 1 million assets, they will all be revoked with your digital certificate.

For the bread-and-butter use of certificates, namely websites, this is not really a problem. The certificate is used just to fetch a webpage, and I can fetch it again with a new certificate if/when the old one is revoked.

For other use cases, such as digital signatures of software, or documents, it's a disaster.

If I use digital signatures to mark reliable software and have my customers' trust based on whether a package is signed by my certificate,
I can never revoke a released and signed software.

There is no way I can say: "hey, version 1.2 is no longer signed, because we found a nasty bug and you need to use another version (which we promise will be perfect)."

Either I revoke my certificate, and then *all* software signed by me up to this point will not be trusted anymore, or the bugged version will continue to be certificated up to the expiration date of the certificate.

## CodeNotary Notarization

The model used for [Codenotary Cloud](https://www.codenotary.com/products/ci-cd) notarization is different from the digital certificate's one.

### The Immutable Database

At the foundations of the model, there is an immutable and tamperproof database, [immudb](https://www.codenotary.com/technologies/immudb).

immudb is different from traditional databases, as it is an append-only database: you can't delete old data, you can only add new records to it.

Every time new data is added, a new cryptographically secure checksum is calculated. Checksums from all records are arranged in a tree (called a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree)) of checksums; if any data in any leaf changes, the resulting checksum will be incorrect and the clients, which have a copy of the topmost checksum, can immediately detect the corruption.

![](/images/blog/pki-image6.png)

In this way, every immudb client, and hence every Codenotary Cloud client, acts as an [auditor](https://docs.immudb.io/0.9.0/how-it-works.html) ensuring that nobody can ever tamper with the database.

Note, that while the database is append-only and immutable, I can always add a new line which corrects or integrates a previous value. I can (say) write in the database that my current state is "happy" and, a couple of days later, write that my current state is "sad". It will be forever recorded, and it will be evident in the history of my state that in the first record, on the 3rd of April, I was happy and that in the second record, on the 5th, I became sad.

![](/images/blog/pki-image7.png)

Immutable database means that nobody can tamper with what is written in there. Not, that I can't change my mind. I can change my mind, but it will be recorded.

On top of this immutable database, Codenotary has built a ledger system, in which notarizations are stored.

### What Is a Notarization?

Let's say that I have developed a software, a nice application that will empower my company with new functionalities. I want to assure the operations team that the application is safe and t's coming from me.

With Codenotary Cloud, I notarize my application by calculating the hash of the binary and recording it in the immutable database, with my signed ID as metadata. A simple command line tool ([vcn](https://github.com/codenotary/vcn)) can perform that for me
in one simple step.

![](/images/blog/pki-image8.png)

If I ever discover some hideous bug in my application (impossible!), I can simply release and notarize a new one, and untrust the old version, which will be marked as such.

When someone from the operations team wants to check if the runme.exe application she got on the mail is safe, and it's the correct one, she can simply perform the dual operation: *authenticate* the binary. In other words, the checksum of the binary will be calculated, and checked if it matches something in the database, using the very same tools I used before for the notarization.

If the binary is really the correct one, the tool will show that to the user, along with the signer ID (me) and other metadata. Otherwise, danger Will Robinson!

To notarize an asset (that can be *any* kind of asset) I have to prove my identity using a secret that is issued to me by an administrator. If the secret is lost or compromised, it can be easily rotated and replaced by another one. Another user who is just authenticating assets will be blissfully unaware of the rotation. He will continue to work as usual, without having to worry about revocations.

If the nasty hacker who stole my secret had the time to notarize shady material, we can simply untrust *every* bit signed by that secret, and (re)notarize the correct artifacts. Again, an authenticating client will not be involved.

## Differences, Strengths and Weaknesses.

What I think is evident, is that the public key infrastructure with digital certificates and the Codenotary notarizations are two solutions to two very different problems.

The first one (PKI and certificates) is focusing on a specific task: distributing content to the vast public, in a quasi-static scenario.

Key revocation is hard, content revocation is (nearly) impossible.

The notarization, instead, is focused on allowing people to safely and securely know the state of a digital asset in a rapidly changing scenario. Key revocation is easy, content revocation is the norm.

![](/images/blog/pki-image9.png)
