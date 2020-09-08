---
title: "Avoid the Digital and Code Signing Certificates' Journey of Pain"
date: "2019-02-27"
---

Moshe and Dennis co-founded [vChain](https://www.vchain.us/company/?utm_source=codenotary&utm_medium=blog&utm_campaign=avoid.the.digital.certificates.journey.of.pain), the company that created [CodeNotary </>](https://codenotary.io/), out of their frustration with digital and code signing certificates.  As most people reading this blog post will surely agree, digital certificates are a constant source of pain and hassle.

### Why do we need to sign our code with a digital certificate?

![Stress](/images/blog/bigstock-Portrait-of-an-upset-businessm-138045524.jpg)

The process of getting a digital certificate for [code signing](https://en.wikipedia.org/wiki/Code_signing) is better described as:

- extremely cumbersome and time-intensive. [Certificates authorities](https://en.wikipedia.org/wiki/Certificate_authority) customer onboarding process is frustrating, annoying and time-consuming
- impossible for customers to estimate how long the process will take. Certificate authorities dictate the venues for validating who you are. They keep adding more roadblocks after you started the process
- impossible to get the signing certificate without involving the support team of the certificate authority. Often you can only chat to a bot or an inexperienced person who's just repeating what’s already on the website and clearly doesn’t’ work
- at no point in time, you feel treated professionally nor that your satisfaction is important to the authority

Did we mention that you can’t offload the procedure to some 3rd party or simply your office assistant?

During this whole process, you often pause and ask yourself again why you're actually going thru all this. In those moments, you remember why you started this procedure in the first place. Windows verifies the signing certificate and try to prevent the installation of unsigned software.

Therefore, Windows and code signing certificates should protect you from installing "bad" software. But do they? The bad guys, in fact, can’t get a signing certificate on your name.  Actually, valid certificates sign malicious code too! You won't find Oracle, Microsoft, Apple or other big names on the certificate, but sound-alike names. So even those who check the signing certificate details (less than one per mil), won't probably be able to notice the difference.

### Our hands-on experience with digital and code signing certificates

- After we finished our first release of CodeNotary </> for Linux, MacOS, and Windows, we realized that we had to sign our code to go through Windows
- We looked on the web for a reliable and affordable Certificate Authority for code signing certificates
- We found several alternatives with huge price differences and different offerings. Comparing them was difficult, at best
- We registered with a popular CA for a code signing certificate and bought a one year certificate
- We received an email that the verification process had started and that it should finish within a few minutes

### So far, so good, but...

As you have probably already guessed it, all hell broke loose at this point:

- An email came in from the CA, asking us to send a proof of address for the validation through the support portal
- We tried to access the portal and got an NGINX error (!)
- So we opened a support chat on the CA website. At first, we spoke with their sales department but, as soon as they realized that we were already a paying customer, they switched us to technical support
- After 10 minutes on hold, the support told us that our account was under validation (as we didn't already know) and to upload the requested document as soon as the website was back online
- As the support portal came back online and we uploaded a bank statement
- Next day, our mailing address was validated. Someone would reach out to us at 512########, which was different from the phone number we entered during the registration
- We called the support to understand the problem. They found on Google a similarly named company based in Austin (we’re in Houston, TX) and decided to use that phone number instead of the one we provided
- We asked to change the number: not possible. For that, we needed to register with a 3rd party like [DNB.com](http://www,dnb.com), which takes up to 30 days to get validated
- We couldn't wait 30 days so we asked for an alternative solution. They suggested confirmation of the phone number by a lawyer or a CPA
- We choose the CPA option, paid another $200 for the letter and sent it to the CA
- Support came back: they needed to call the CPA to confirm that he signed the letter

### Is the singing certificate pain over?

This saga for issuing a signing certificate is "to be continued" as we are now waiting for the CA to confirm our phone number. We can check back in about a week. So, in no less than a week we will know when we will be able to sign and release our product to the market.

### What is the good news?

So, code signing is not only unable to ensure software trust but also a cause of delay in your time-to-market. Luckily the signing certificate for which we are enduring such a battle will sign [CodeNotary](https://www.codenotary.io/). CodeNotary </> allows software vendors and publishers to sign their code in 1 simple step.

 

[Start My Free Trial](https://dashboard.codenotary.io/auth/signup)

 

If you liked this blog, you should see the second one in the three-part series that covers the signing of a Microsoft Windows Go executable with a code signing certificate. Read part 2 [here](https://www.codenotary.io/the-code-signing-certificates-journey-of-pain-the-saga-continues/)
