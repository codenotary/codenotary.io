---
title: "The Failure of the Certificate Revocation List (CRL)"
image: /images/blog/Screenshot-2019-04-23-19.06.51-300x152.png
date: "2019-04-24"
---

# SHAttered: Cracks in Certificate Revocation List Protocols and How to Move Beyond Their Limitations

## **Overview**

When cybercriminals mask themselves in a cloak of trust utilizing stolen, legitimate credentials in order to infect entities, programs, and code, the world has more often than not turned to utilize a certificate revocation list (CRL). The CRLs cross-reference known legitimate trusted digital certificates with compromised ones. What are CRLs? As you might guess, they are simply a list of certificates that have been invalidated.

 

Digital certificates are widely used to facilitate safe and untampered communications across the technology world as well as to sign code and digital assets so that people can verify their integrity and authenticity. However, when this effective passport of sorts is jeopardized by bad actors, tragedy strikes.

 

Furthermore, when the certifying document that was originally put into place to protect the greater good is left certified and not revoked, the public is left wondering why we are putting our faith in such an ineffective and inattentive system in the first place. The very sight of a compromised certificate with a Certificate Authority (CA) doing nothing to intervene only goes to encourage malevolent forces to do more of the same. How are all those who rely on a well-kept CRL supposed to protect themselves and know which certificates are legitimate and which have been revoked? When things go wrong, and Murphy rears his ugly head, how do they stay safe?

 

As it stands for most everyone, its a real problem. Until now. There is a better way. But first, a little background.

## **What is the revocation process?**

We have established that compromised credentials certifying that programs or code is safe to download, is a current problem with a holey and imperfect solution.

 

Effectively there are 3 steps to the revocation process:

 

1. Promptly discovering compromised certificates
2. Revoking the compromised certificates in an effective and timely fashion
3. Disseminating the revocation information quickly

 

When a compromise takes place, the Certifying Authority (CA) is contacted with a request to invalidate the digital certificate. However, the CA is at least savvy enough to know that they need to verify that the request to revoke is coming from the actual owner of the certificate. Then once that happens, the certificate will be revoked. This one to one communication is the easy part of the equation.

 

The next step is a bit more tricky and requires getting the message to ‘oh’ just the entire relevant digital world to let them know that the certificate is no longer valid. Of course, typical user groups can be of various sizes, but still, thorough communication effort is significantly more challenging because bad things happen when the fly doesn’t see the spider’s web. Over the long haul, CRLs have been used to facilitate this messaging process and make it known that no user should accept the compromised credentials, ideally thwarting the prevalence of an attacker’s abuse.

### What happens when revocation is delayed and how long does it take to revoke a certificate?

If the messaging or communication is delayed, damage can pile up, whether they are the freezing of critical infrastructure for a nation-state or the draining of your customer’s bank account. We all want timely visibility. It’s about more than just knowing if a code or program can or cannot be trusted. It’s also about being kept apprised of when trust was lost.

 

According to a paper from the 27th USENIX Security Symposium, ‘**[The Broken Shield: Measuring Revocation Effectiveness in the Windows Code-Signing PK](https://www.symantec.com/content/dam/symantec/docs/research-papers/the-broken-shield-measuring-revocation-effectiveness-in-the-windows-codes-signing-pki-en.pdf)**’, “CAs take on average 5.6 (as seen below) months to revoke the compromised certificates after the certificate was used to sign a known malicious binary.” In the meantime, users are potentially being exposed to further harm from signed malware attacks due to CAs’ mismanagement of CRLs.

 

![](/images/blog/Screenshot-2019-04-23-19.06.51-300x152.png)

 

The above table shows the lifecycle of the abusive certificates. (The red-filled circle, empty circle, green bar, and orange diamond indicate malware, benign sample, expiration date, and revocation date, respectively.) _Source: **[Certified Malware: Measuring Breaches of Trust in the Windows Code-Signing PKI](http://users.umiacs.umd.edu/~tdumitra/papers/CCS-2017.pdf)**_

## **Why revoking signatures from software is important**

 

The delay in reporting and revoking compromised certificates are an example of a major impact of the current mechanism for revocation and leaves high potential wakes of abuse to not only end-users but any entity that questionable software touches with its executables. This was the case with the ASUS ShadowHammer supply chain attack last month that we wrote about [here](https://www.codenotary.io/what-the-asus-software-updates-hijack-teach-us-about-software-supply-chain-risks/).

 

Unfortunately, to the detriment of the users, the certificate revocation process is almost never enforced. Sometimes this is due to the fact that CA’s main priority is to properly manage and enforce the certificate policy, including revocations. However, prematurely or mistakenly revoking a certificate can cause substantial complications for which a CA would be financially liable for.

 

On the other hand, the inaction can cause damages of its own making. Regardless of whether its due to genuine concern or fear of getting it wrong, CAs delivering anything less than instantaneous and accurate results will always be below the bar as users can end up languishing in the in-between time with potential loss and damages to their finances and reputation.

## **Why revocation has so many problems and is basically never done (correctly)**

According to the same USENIX Security Symposium paper quoted above,

>  
> 
> _There are many cases that we have seen where clients are unable to check certificate revocation status due to:_
> 
>  
> 
> 1. _Missing CRLs points_
> 2. Unreachable CRLs points
> 3. CRLs that are no longer updated 
> 4. Revoked certificates that are mistakenly removed from a CRL
> 5. Inconsistent responses from CRL
> 
>  
> 
> _These discoveries highlight various properties of the code signing PKI and its revocation process that should be monitored more actively_ _due to the security implications that they create__._

 

In addition, **CA’s are limited by what’s known as coarse granularity**. This means that they are significantly restricted in their ability to dive deep into their Customer Relationship Management (CRM) program and turn off, down to the individual customer or itemized product level, the validating certificate. Often times, CRL lists e.g. CRLsets only focus on high-value intermediate CA certificates or above.

 

I personally know of a $3.4 billion technology corporation that tightrope walks on the scaffolding of only three digital certificates for everything that their organization produces. It’s just slightly ludicrous. Imagine if one of their certificates was invalidated. Their gigantic centralized point of failure would echo through stakeholder minds to the tune of hundreds of millions of dollars if not more.

## **How CodeNotary simplifies the revocation process**

 

Many in the industry say the truth is that there is no reliable way to fix the problem, revocation is broken, that there is no dependable checking mechanism to facilitate the process properly.

 

As mentioned previously, coarse granularity only goes to exacerbate the problem of CAs. The funny thing is, a better way now exists. CA’s continuing to do business the way they have always done is really just a symptom of a larger complacency issue. The fact of the matter for the rest of us is that today we have a choice. CodeNotary utilizes **Distributed Ledger Technology** to give the owner of digitally certificated code the **ability to revoke a single certificate** any time of day or night.

 

For developers, product managers, security professionals, etc. the ability to **fine-tune the state of their digital certificate library** is immensely useful and powerful. Not to mention the fact that recall and revocation of their binaries can be done in a single, sweeping step.

 

The code snippets below are two examples of how CodeNotary allows for code revocation and the updating of your certificate and signature library.

 

![](/images/blog/Screenshot-2019-04-23-20.42.05-300x88.png)

## **Conclusion**

Developers no longer need to depend on a third party, ironically even if it’s their job, to manage their certificates efficiently and effectively. Today, **in a matter of seconds, not weeks, code can have its trust removed when needed**. Individual software, or even build components, can be invalidated, while all remaining code under management listed on your account remains authenticated.

 

CodeNotary is a turnkey technology that’s ready-to-go and a 100% working and reliable solution for refusing malicious code connections. It does so with its request-response mechanism that can **revoke certificates in near real time**.

 

We always recommend following security best practices whenever one wants to rely on a certificate, but in case Murphy’s Law proves out, the thoroughness and instantaneousness of Distributed Ledger Technology, which CodeNotary is based on, can help save you from the effects of rainy day compromises.

 

 

[Start CodeNotary for Free Today](https://dashboard.codenotary.io/auth/signup)

### **References**

 

- [https://www.symantec.com/content/dam/symantec/docs/research-papers/the-broken-shield-measuring-revocation-effectiveness-in-the-windows-codes-signing-pki-en.pdf](https://www.symantec.com/content/dam/symantec/docs/research-papers/the-broken-shield-measuring-revocation-effectiveness-in-the-windows-codes-signing-pki-en.pdf)
- [http://users.umiacs.umd.edu/~tdumitra/papers/CCS-2017.pdf](http://users.umiacs.umd.edu/~tdumitra/papers/CCS-2017.pdf)
- [https://en.wikipedia.org/wiki/Certificate\_revocation\_list](https://en.wikipedia.org/wiki/Certificate_revocation_list)
- [https://medium.com/@alexeysamoshkin/how-ssl-certificate-revocation-is-broken-in-practice-af3b63b9cb3](https://medium.com/@alexeysamoshkin/how-ssl-certificate-revocation-is-broken-in-practice-af3b63b9cb3)
- [https://scotthelme.co.uk/alexa-top-1-million-analysis-february-2019/](https://scotthelme.co.uk/alexa-top-1-million-analysis-february-2019/)
- [https://www.maikel.pro/blog/current-state-certificate-revocation-crls-ocsp/](https://www.maikel.pro/blog/current-state-certificate-revocation-crls-ocsp/)
