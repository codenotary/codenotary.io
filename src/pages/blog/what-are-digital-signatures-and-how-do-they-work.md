---
title: "What are Digital Signatures and How do They Work?"
image: /images/blog/Digital-Sig-300x161.png
date: "2019-08-15"
---

 

![Digital Sig](/images/blog/Digital-Sig-300x161.png)

 

In cyberspace, where vast amounts of information are flying around at the speed of light and where authors can publish seemingly authoritative content completely anonymously, integrity becomes a strongly sought after commodity. Knowing what you received is authentic, untampered, and from a trusted party is imperative to making informed decisions. To answer these questions of trust, the internet turned to cryptography to provide solutions. Traditional cryptographic methods of providing such trust have come by the use of digital signatures, digital certificates, and GPG. But what exactly are these tools and how do they work? 

 

In this multi-part series, we explore various methods used to ensure integrity in the digital world and the cybersphere.

 

## **History of Digital Signatures** 

The use of digital signatures has been around for decades, dating back to 1976. Below is a brief history of digital signatures:

 

**1976**: A theory of a digital signature scheme was first described by Whitfield Diffie and Martin Hellman. However, Diffie and Hellman never put their scheme into practice.

**1977**: The RSA algorithm was invented by Ronald Rivest, Adi Shamir and Len Adlem and could be used to create a sort of primitive digital signature.

**1988**: The RSA algorithm was used in the Lotus Development Corporation’s product, Lotus Notes 1.0. The product became the first widely marketed software package to offer digital signatures. 

**1999**: Adobe adds the option to embed digital signatures into their Portable Document Format (PDF) 2000. Additionally, the United States makes digital signatures legally binding under certain conditions in the ESIGN Act of 2000. 

**2008**: The International Organization for Standardization (ISO) adopts the PDF file format as an open standard in its ISO 32000 specifications, which includes digital signatures.”

 

## **Digital Signatures, the Basics**

Put simply, a digital signature, also sometimes referred to as an electronic signature, is a string of numbers and letters used to validate the identity of a person. Its purpose is to ensure the original content sent is unchanged. Regardless of whether a digital signature is encrypted or sent in the clear (i.e. in plaintext so anyone can read it), they provide the three following features: 

 

1. **Authentication** \- Digital signatures are bound to a specific user via their private key. Thus they identify the owner of the private key used to sign the source data/message (e.g. document, email, or file). 
2. **Integrity** - Digital signatures use a hashing algorithm to ensure that a message received is untampered. (More about hashing below.) 
3. **Non-Repudiation** - Due to the two previous features, digital signatures ensure a sender who has signed the source data cannot deny having signed it at a later time.

 

### **Hashes and Digital Signatures**

A hash is the output of a hashing algorithm. Each source file, when input into a hashing algorithm produces a unique hash. When a source file is modified in any kind of way, even if only a blank space is added or a single letter is changed, the hash is changed as well. In fact, for every change in the input source file, the output hash, also known as a digest, drastically changes. This characteristic is known as the avalanche effect and is demonstrated by the below graphic. Notice how significantly different each digest is from the previous, with only a minor change in the input.

 

![Hash_Function-375px](/images/blog/Hash_Function-375px-300x218.png)

 

An additional characteristic of the hashing family of mathematics is that it is impossible to reconstruct the original source file from a produced hash. It is one of the fundamental properties that make a hashing algorithm ideal for security.

 

## **Overview of How Digital Signatures Work** 

Digital signatures use two large, asymmetrical mathematically related numbers (actually letters and numbers) known as public and private keys. These keys together form a key pair. In the same way, physical keys are used for locking and unlocking, cryptographic key pairs are used for encrypting (locking) and decrypting (unlocking) source data so it is intelligible. Private keys are stored safely and kept confidential, as if anyone ever knew the private key of another person, they could then sign source data as that other person. In contrast, public keys are meant to be shared with everyone. It is only by using the public key that the data encrypted by the private key can be decrypted so the original data can be known.

 

In short, to digitally sign something, a sender uses their private key. In order for the receiver to authenticate the digital signature, they need to use the sender’ public key. 

 

Let’s break it down step by step.

 

## **The Digital Signing Process**

Here’s how the signing process works.

1. The sender calculates the hash of the source content they want to send using a hashing algorithm.
2. The sender encrypts the calculated hash with their private key in order to produce a digital signature. 
3. The digital signature is then associated with the content and bundled into a transmission. (In the case of the diagram below, the transmission is the signed message.) 
4. The sender sends the transmission.
5. The receiver receives the transmission.
6. The receiver opens the transmission and removes the sender’s digital signature.
7. The receiver uses the sender’s publicly available public key to decrypt the sender’s encrypted digital signature. (If successful, the identity of the owner of the private key used to encrypt the file (typically the sender) is verified.)(This step is denoted as ‘Sender’s Public Key’ in the diagram.)
8. Then the receiver removes the original content from the transmission and calculates a new hash for it. 
9. If the receiver’s calculated hash matches the sender’s calculated hash the content is verified to be identical to what the content the sender sent. Otherwise, if the hashes don’t match then the content has been altered and should not be trusted.

 

Upon successful decryption and found matching hash, the source data is authenticated as untampered and the owner of the private key is validated as the source data encryptor. 

 

![Digital-signature diagram](/images/blog/Digital-signature-300x163.png)

 

Due to the fact that the sender’s public key is publicly available, it means that anyone has the ability to decrypt the encrypted content the sender sends. Therefore, this type of encryption technique only authenticates integrity, but not confidentiality.

 

## **Anatomy of a Signed Document (Source Data)**

Here is the basic structure of a digital signed asset. Source data is combined with its hash to produce a digitally signed asset. Pretty straightforward.

 

![Digital Signature Anatomy](/images/blog/Digital-Signature-Anatomy-300x157.png)

 

## **Digital Signatures and Forgery** 

Can digital signatures be forged? No, they can’t. The mathematics behind them ensures that. However, a private key can be compromised, though that is another matter regarding key storage rather than a compromise of mathematical function uniqueness. Additionally, multiple private keys can belong to the same owner, but that is just a reproduction of intended use.

## **Revocations of Digital Signatures**

So far, so good. Digital signatures sound perfect for ensuring the integrity and validating identity. But once created, are they valid forever? What if a digital asset is found to be corrupted or needs to be deprecated? Or an employee who sided an asset, is discovered to be untrustworthy or a paid corporate saboteur? Can their digital signatures be invalidated? Unfortunately, the answer is, “No, they can’t”. Once a document is digitally signed, a signature cannot be revoked. All of their past digitally signed assets remain valid. 

 

Think of the act of digitally signing similar to a producing a signature from a physical pen. Just the same as an ink signature, a digital signature cannot be controlled remotely. Once it’s there, it’s valid forever as long as the digital signature was valid at the time of signing. 

 

However, similar to a wet (ink) signature, a document can be “un-signed” by marking through the signature before, and only before, the document is distributed. Once the signed document has been sent into the wild, removing a signature is difficult to impossible.

 

This happens to be by design. For example, imagine if you had a hard-won customer who committed to purchase services from you. Then you made a sizable and unreturnable investment in the materials you need to complete the services for the new account. And then just after you do so, your customer revokes the contract and you’re stuck with no recourse because the signature was revoked. Just like paper contracts, once a digital contract is accepted, it can’t be revoked, though it can be canceled through mutual agreement. Regardless, if the signature is wet ink or digital 1’s and 0’s, your signature counts.

### **Digital Signatures and Revocation Lists**

There are no revocation lists for digital signatures. Revocation lists are used to keep track of digital certificates that are no longer trusted. They do not apply to non-digital certificate affiliated digital signatures. 

 

## **Advantages and disadvantages of Digital Signatures**

As you can probably ascertain, digital signatures have a lot of benefits including they:

 

- Increase security and confidence as they cannot be reverse-engineered or forged.
- Offer non-repudiation of the source data encryptor.
- Ensure the integrity of sent source data.

 

However, digital signatures also have some disadvantages such as:

 

- There is no method for revoking signatures (source data trust) after they have been distributed, effectively making decisions permanent.
- The use of public keys does not allow for confidentiality. Anyone with a public key can decrypt the source data.

 

If you are looking to ensure the security, integrity, authenticity, non-repudiation, and have the ability to instantly revoke trust in your source data, try out CodeNotary by clicking below:

 

[Start Free Trial](https://dashboard.codenotary.io/auth/signup)

 

**REFERENCES**

[https://community.aiim.org/blogs/larry-kluger/2013/12/05/digital-signatures-are-forever](https://community.aiim.org/blogs/larry-kluger/2013/12/05/digital-signatures-are-forever)

[https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-kim.pdf](https://www.usenix.org/system/files/conference/usenixsecurity18/sec18-kim.pdf)

[https://daman.nic.in/downloads/2015/Guideline-for-digital-signature.pdf](https://daman.nic.in/downloads/2015/Guideline-for-digital-signature.pdf)

[https://www.ukessays.com/essays/communications/history-of-digital-signatures-communications-essay.php](https://www.ukessays.com/essays/communications/history-of-digital-signatures-communications-essay.php)

https://en.wikipedia.org/wiki/Cryptographic\_hash\_function

[https://commons.wikipedia.org](https://commons.wikimedia.org)
