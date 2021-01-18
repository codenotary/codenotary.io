---
title: "Zombie Infestation, Software Developer Tools, & the MS Visual Studio Attack"
image: /images/blog/zombie-code-300x141.jpeg
date: "2019-05-31"
---

 

![zombie code](/images/blog/zombie-code-300x141.jpeg)

 

In what can be seen as an ironic twist of fate, digital security firms Kaspersky and ESET reported recently how a Zombie-themed video game called ‘Infestation’ by Electronic Extreme delivered malware directly to its players. This was due to an supply chain attack on the video game developer application Microsoft Visual Studio. Electronic Extreme was one of 3 companies targeted in what is being described by security researchers as a landmark event in the cyberattack community. The notability of the MS Visual Studio hack event is less in the hundreds of thousands of likely infected victims and more in the way the hack was carried out to target upstream software developer tools.

 

## **Overview of What Happened**

Both Kaspersky and ESET discovered clues that connect the Microsoft Visual Studio event to the ASUS attack, which we wrote about previously [here](https://www.codenotary.io/blog/what-the-asus-software-updates-hijack-teach-us-about-software-supply-chain-risks/)**.** However, the execution tactics are escalating into a huge area of vulnerability for the software industry. Namely these attacks are targeting more and more upstream in the software supply chain and are taking aim at the developer tools themselves.

 

The compromised Microsoft development tools were digitally signed and valid. As such, they led to the sealed approval and digital signing of the games the affected companies produced. The distributed games compromised 92,000 systems though the number is likely far higher and potentially in the amount of hundreds of thousands.

 

## **How It the Attack Happened**

Despite the large ramifications the attack had, investigations into the hack uncovered a tiny, malicious “linker”. The injected linker caused the MS Visual Studio platform used by the game developers to be redirected to pull from a malicious library instead of the company intended, benign, preset one.

 

The level of sophistication was taken up a notch, as researchers into the event observed the attackers were employing a series of attack waves in their strategy. The attack played out in multiple stages of 1) developing intelligence through reconnaissance using a trojan before 2) injecting the malware. The information the attackers learned during their ‘recon’ phase allowed them to be much more sniper like with their targeting implementation during phase 2.

 

## **The Role of Compromised Digital Signatures**

Somehow (it is still unknown) the attackers were able to attain and use two valid digital certificates in order to keep their malware flying under the radar. Digital certificates are one level of security but due to their limitations, which we have written about several times including [here](https://www.codenotary.io/blog/the-distributed-ledger-technology-at-the-center-of-the-code-signing-disruption/) and [here](https://www.codenotary.io/blog/code-signing-certificates-journey-of-pain-3-when-even-signing-isnt-enough/), are not enough to ensure integrity throughout the entire software lifecycle.

 

Digital certificates only address the final product and not the incremental steps and components that compile along the way to create the final product. In short, due to their drawbacks, digital certificates are not designed to be used to achieve fine tuned granularity that can ensure integrity at the component level and on down.

 

Furthermore, due to the previously mentioned fact, digital certificates become a huge centralized point of failure and a glaring liability, especially if they have been used to sign large amounts of shipped software. In such cases, revocation for publishers, which you can read more about in our blog [here](https://www.codenotary.io/blog/the-failure-of-the-certificate-revocation-list-crl/), becomes a nightmare to think about.

 

In the case of the MS Visual Studio hack, the two compromised digital certificates used by the attackers have been used previously to sign over 3000 legitimate ASUS files. Thus, it is no surprise that a month after the compromised certificates were reported to ASUS, the certificates are still being used. Not only that, but the same compromised certificates are being used to sign newly produced software. The practice is completely nonsensical.

 

## **Future Implications for Software Industry**

The aftershocks of the attack are reverberating throughout the digital security world with implications for the future of the software community. The attack itself has provided glimpses of what’s to come. Attackers are becoming more targeted and systematic in their approaches and zero’ing in the weak points of the industry. The looming blind spot of lax security in the software supply chain is bound to invite more attacks. As Vitaly Kamluk, Kaspersky's director of Asia-focused research, was quoted as saying, “...it’s just the tip of the iceberg.”

 

## **Security Recommendations from the Experts**

The attack is a critical wake up call. Especially now that attackers are honing in on exploiting the weaknesses in the upstream software development supply chain, producers need to be even more vigilant. They should be asking themselves questions like:

 

- What is the origin of my software development tools?
- Are my tools verifiably official and un-tampered?
- When’s the last time our compiler integrity was checked?

 

Security research expert, Kamluk, noted that probably no one is asking and/or answering these questions, which is why the problem is and will continue to escalate into including larger and larger numbers of victims.

 

## **How to Protect Yourself and Your Company**

With the weak links of digital certificates, you might wonder if they should stop being used or being relied upon completely. With the amount of infrastructure that currently relies on digital certificates, pulling the rug out from under the industry is not advisable. Digital certificates have their place in the security world and do still serve a purpose, though limited in scope they might be.

 

It’s simply that with the current holes in their application and the inherent short-comings they house, the software universe needs an additional security layer to compliment digital certificates and fill the gaps they leave. **As Kaspersky noted, “Software vendors should introduce another line in their software building conveyor that additionally checks their software for potential malware injections even after the code is digitally signed.”**

 

Fortunately, the technology now exists that makes it not only possible but also financially feasible to verify the integrity of all the elements in produced, ready to ship software. (Can you imagine how much it would cost to buy a $250 digital certificate for every component and snippet included in a final build? Hence, why nobody does it.)

 

## **CodeNotary for Verifiable Integrity at the Atomic Level**

With CodeNotary’s blockchain based simple 1-step integrity verification process, devs and admins alike can be sure they are only including 100% verified, untampered code into their pipeline. Code integrity no longer has to be a guessing game that includes a hope and pray strategy chaser. At every stage of the build process now, integrity can be verified quickly, easily, and automatically.

 

CodeNotary’s potent, multi-layered, security solution integrates seamlessly into devops processes today. It prevents problems from arising and scaling in size later on down the pipeline (/nod to the MS Visual Studio attack) creating significant savings in terms of potential patch costs, injured reputations, customer attrition, and other associated damages.

 

If you like, you can take CodeNotary for a test spin and see for yourself. Click [**here**](https://dashboard.codenotary.io/auth/signup) to start your free trial.

 

[Yes, I Want to Test Out CodeNotary](https://dashboard.codenotary.io/auth/signup)

 

## **Conclusion**

Backdooring developer tools undermines the established trust they are used to carrying. In this turn of the page in the ongoing war between white hats and black hats, it is clear a new dawn is steadily emerging where even established software producers are vulnerable to having their good names dragged through the mud. Cybercriminals, as with most criminals, target their marks based on a combination of ease and potential gain. As such, with the current state of the upstream software supply chain not being aptly ready, the future is poised to see  more of these types of attacks where maliciously injected code is passed off as legitimate digitally signed binaries.

 

**REFERENCES:**

[https://www.wired.com/story/supply-chain-hackers-videogames-asus-ccleaner/](https://www.wired.com/story/supply-chain-hackers-videogames-asus-ccleaner/)

[https://securelist.com/operation-shadowhammer-a-high-profile-supply-chain-attack/90380/](https://securelist.com/operation-shadowhammer-a-high-profile-supply-chain-attack/90380/)

[https://www.welivesecurity.com/2019/03/11/gaming-industry-scope-attackers-asia/](https://www.welivesecurity.com/2019/03/11/gaming-industry-scope-attackers-asia/)
