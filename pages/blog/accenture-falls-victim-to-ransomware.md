---
title: "Accenture - Another recent victim of ransomware"
image: /images/blog/codenotary-cloud-ransomware.png
tags: ["CNIL", "ransomware", "cybersecurity"]
date: "2021-08-13"
---
# Accenture falls victim to ransomware
Accenture; one of the biggest IT Consultancies in the world has recently been hit by a ransomware attack carried out by Lockbit 2.0 operators. This was publicly disclosed on Lockbit's leaks site where they were demanding a staggering ** $50,000,000**

Accenture is known to work with a multitude of clients across a wide array of industries as outlined on their [Case Studies & Stories section](https://www.accenture.com/us-en/about/company-index) and as such, it employs over half a million people in as many as 50 different countries; This shows the potential reach for a cyberattack such as this, potentially endangering sensitive data from all parties involved (Company, employees and clients alike)

“These people are beyond privacy and security. I really hope that their services are better than what I saw as an insider. If you’re interested in buying some databases reach us” is posted on their leak site as a message below their counter for publishing all the leaked files

![A screenshot of Lockbit's leak site advertising the possible leak/demanding payment](/images/blog/accenture_ransom.png)

## More on the attack

According to the [Cyble research team](https://twitter.com/AuCyble/status/1425422006690881541)  and [Hudson Rock](https://twitter.com/HRock/status/1425447533598453760?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1425447533598453760%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fwww.bleepingcomputer.com%2Fnews%2Fsecurity%2Faccenture-confirms-hack-after-lockbit-ransomware-data-leak-threats%2F) **as much as 6 TB of files and as many as 2,500 computer systems including employees and partners have been compromised**

Although the main goal of a ransomware attack is usually to encrypt files in exchange for money, Accenture stated that they were able to quickly recover the affected system ["*We fully restored our affected systems from backup, and there was no impact on Accenture's operations, or on our clients' systems*."](https://www.nasdaq.com/articles/accenture-restores-affected-systems-after-reported-ransomware-attack-2021-08-11) but at this point, **the damage was already done, the attackers had already extracted the files from the affected systems**.

## On CodeNotary Cloud
At CodeNotary we understand how important it is to secure your systems to prevent this and many other similar incidents but more importantly, we detected the need for a robust solution that didn't [depend on digital dertificates](https://www.codenotary.com/blog/when-digital-certificates-fail) because of how cumbersome things can be once a certificate is revoked (For more information on digital certificates, read our [blog post on them](https://www.codenotary.com/blog/when-digital-certificates-fail)). 
With our [CodeNotary Cloud](https://www.codenotary.com/products/ci-cd) and its multiple integrations you can prevent this and many other types of cyberattacks **by only introducing or releasing software that you can not only trust but also cryptographically verify to prevent unauthorized or tampered versions from ever reaching those systems**.

To learn more about how you can implement end-to-end zero-trust protection for your CI pipelines and deployments visit CodeNotary and [signup for the Cloud version](https://www.codenotary.com/products/ci-cd).