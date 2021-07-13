---
title: "Can GPG Secure the Software Industry?"
image: /images/blog/digital-lock-unlocked-1024x649.jpg
date: "2019-04-29"
---

 

![digital lock unlocked](/images/blog/digital-lock-unlocked-1024x649.jpg)

 

Code signing is important for proving the integrity and authenticity of software but can GPG secure the Software Industry?

Digital certificates issued by certificate authorities are generally used to perform this task, but as we know and mentioned in a few blogs, [here](https://www.codenotary.io/blog/the-distributed-ledger-technology-at-the-center-of-the-code-signing-disruption/) and [here](https://www.codenotary.io/blog/with-codenotary-you-never-have-to-pay-for-code-signing-certificates-again/), they have strong limitations, such as:

 

- They can be stolen
- They have coarse granularity
- Identities can be faked with look-alike companies
- The issuing process is long and time-consuming
- Owners can’t track what’s been signed with them
- They are extremely expensive, both to get and to maintain e.g. renewals, etc.

 

Several software publishers, especially in the open source community, have adopted GPG as the only alternative to digital certificates for signing application binaries. (See the [recent decision by Notepad++ to give up on digital certificates in favour of GPG.](https://www.bleepingcomputer.com/news/software/notepad-adds-gpg-signature-to-verify-authenticity/))

 

The main advantages of GPG are its accessibility (you don’t need a CA to verify who you are in order to get a signing key) and the fact that it’s free.

## **The Holes in GPG**

Is GPG the solution to secure the software industry? Unfortunately, the answer is no. Here's why:

 

- **It's too technical** - Setting up GPG, whether on Mac, Linux or Windows, requires in-depth technical knowledge.
- **It's too cumbersome** - In order to verify someone’s code, you need to:
    1. Import his/her key to your key ring and sign it.
    2. Do numerous checks to confirm the key corresponds to the person who declared said key. (And by the way, you can’t rely on the Keyserver for that.)
    3. Import the code signature (if it’s been created and detached from the code).
    4. Check if the binary was actually signed by the person who is claiming to be the signer.
- **Its granularity is too coarse** - Similar to digital certificates, GPG is also used only to sign releases for main products or repositories, though they are not for any and all types of software assets. Their sphere of authenticity is limiting.
- **It doesn't fit in with current engineering best practices (CICD and DevOps)** - GPG is generally used for signing developers’ code. Gits support GPG signatures for that reason. However, at the same time, because GPG verification requires multiple steps, you cannot streamline the verification process within a single, easy to use build script.
- **The Web of Trust is impractical** \- It’s a nice concept but it doesn’t work. (Check out this scathing post [**here**](https://arstechnica.com/information-technology/2016/12/op-ed-im-giving-up-on-pgp/) by Filippo Valtora on the subject.)
- **Identities are not certified** \- Even well known Richard Stallman says in his personal blog **[here](https://stallman.org/)** to not to trust the keys under his name on any keyserver.

## **GPG at the End of the Day**

As I mentioned before, you need to triangulate information, which takes time and it’s still not 100% secure.

 

In the end, GPG does not really improve questionable situations any better than digital certificates do. The only advantage of GPG compared to digital certificates is that it’s free, but that’s only when you’re calculating the direct costs. If you count in the indirect costs of installing malicious code signed with GPG thinking it was secure, then the price goes up significantly.

 

Honestly, what are we to expect given that GPG, as well as digital certificates, were not made to sign code? Digital certificates were actually developed by Netscape to verify a domain and encrypt the information exchanged between clients and websites. Similarly, GPG was born to encrypt and sign email communication. Unfortunately for the rest of us, the industry just decided to put a square peg technology into a problematic round hole.

## **Solving the GPG Problem**

To secure the software industry, a solution is needed that is designed specifically to address this problem. This is why vChain decided to develop CodeNotary, a one-step solution that guarantees your code is exactly how you left it.

 

CodeNotary's blockchain-based application gives you the ability to maintain a high-level view of all your code from the main release level on down to the fine, granular level of components, scripts, and beyond. Not only is CodeNotary a proactive DevSecOps best practice, but the savings that mount from preventing scaled problems happening further down the production pipeline is one of those rare moments to breathe easy.

 

Sound too good to be true? Don’t take our word for it. Grab a free trial and check it out for yourself. 

 

 

[Sign Up Here](https://dashboard.codenotary.io/auth/signup)

 

You can also learn more about how CodeNotary works [here](https://www.codenotary.io/how-it-works/).

 

#### **References**

- [https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/](https://www.bleepingcomputer.com/news/software/notepad-no-longer-code-signed-dev-wont-support-overpriced-cert-industry/)
- [https://www.bleepingcomputer.com/news/software/notepad-adds-gpg-signature-to-verify-authenticity/](https://www.bleepingcomputer.com/news/software/notepad-adds-gpg-signature-to-verify-authenticity/)
- [https://arstechnica.com/information-technology/2016/12/op-ed-im-giving-up-on-pgp/](https://arstechnica.com/information-technology/2016/12/op-ed-im-giving-up-on-pgp/)
- [https://stallman.org/](https://stallman.org/)
