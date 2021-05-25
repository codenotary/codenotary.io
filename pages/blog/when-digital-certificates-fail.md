---
title: "When Digital Certificates Fail"
author: "Duncan Mac-Vicar P."
date: "2021-05-25"
image: "/images/blog/codenotary_mascot_final-oicljfj7ltjgxnmn3023a3ip293np0m2c1rvwo1yu2.png"
tags: ["devops", "ci", "cd", "certificates", "sunburst"]
---

# Digital Certificates

Digital certifications are a center-piece in modern secure Internet communications. They are meant to establish trust and support verifying integrity.

They for example ensure that  we are talking to the legitimate bank website, or that our computers are downloading unmodified updates from the vendor infrastructure and not from somewhere else.

The use of Digital Certificates and Certificate Authorities as a medium of trust was designed for a much smaller, simpler, and static world.

In 2011, a reseller of the certificate authority Comodo was attacked, and the certificate authority DigiNotar was compromised. Attackers could issue certificates for malicious websites, and users would see those websites as trusted.

To remedy the situation, every browser on earth needed to be updated in order to remove the compromised Certificate Authority as trusted, and every website using that compromised Authority needed to issue a new certificate.

The Comodo incident was one of the first signals indicating that the model was obsolete. In a complex world, static trust could create more problems than it solves, by adding a false sense of trust and cumbersome management.

The situation with Digital Authorities hindered the adoption of encryption on the web. Solutions like Let’s Encrypt are mainly designed to enable encrypted communication on the web and not to ensure the correct ownership and identity of the website provider (only the domain management). There is also no way to use Let’s Encrypt certificates to digitally sign documents or software.

Another approach to secure the signer integrity and identity was the PGP based “web of trust”, where parties would sign each other's keys in cumbersome “Key signing parties”. Due to usability, it has never become popular outside circles of technical literates.
In order to broadcast signatures and revocations, PGP allowed anyone to send keys to a network of keyservers. This network was successfully attacked and vandalized in 2019. [Its replacements](https://keys.openpgp.org/about/faq) now rely on simple email identities.

# Digital Certificates in the Software Supply Chain

In December 2020, [news broke that the US Treasury Department has been compromised](https://www.sans.org/blog/what-you-need-to-know-about-the-solarwinds-supply-chain-attack/
) by a sophisticated adversary. The attackers compromised a popular network management tool developed by SolarWinds, used by 300,000 customers.

They did not breach every SolarWind customer. Instead, they changed the code inside SolarWinds Supply Chain. Every customer got an update signed by SolarWinds digital certificate. Which means, SolarWinds added its own stamp to compromised software.

One may think: It is just a matter of revoking those certificates. Like in the previous example, revoking the certificate means invalidating the signature of everything signed with it. Thousands of deployments had valid software signed with the same certificate.

Here we can see digital certificates first adding a sense of trust to a compromised piece of software, and then ruining the trust chain for legitimate assets.

The problem with Digital Certificates is that they are only able to express that a piece of software is coming from a certain party, unmodified. Trust is static and never to change, never to be revised.

# Trust Agility

Moxie Marlinspike is an American entrepreneur, cryptographer, and computer security researcher. You may know him as the creator of Signal, one of the most secure messaging programs. Its encryption protocol is used by Signal, Whatsapp, Facebook Messenger,and Skype.

In 2011, Moxie was busy trying to solve the problem of centralized Certificate Authorities and developed several projects in this area like Convergence and TACK. In his [talk "SSL And The Future Of Authenticity"](https://www.youtube.com/watch?v=vBPF71iYmVY) he coined the term "Trust Agility" as one of the problems arising from the model of Digital Certificates and Certificate Authorities.

He defined "Trust Agility"" as the ability to revise a trust decision at any time. Instead of permanently trusting authorities, he introduced the concept of notaries, which would allow you to revoke trust in certificates in real-time. The user could choose his notaries from whoever he trusted.

# Trust Agility in the Software Supply Chain

CodeNotary introduces Moxie's concept of "Trust Agility" in the CI/CD process.

With CodeNotary you can have multiple parties expressing trust on specific assets at any time. There are no digital certificates to manage or deploy.

Trust can be revised, but previous trust assertions can't be changed retroactively. The whole system is built on [immudb](https://www.codenotary.com/technologies/immudb/), a tamper-proof database which secures the whole model. The entire immutable history of trust transactions is cryptographically protected. Revocation is granular: an identity revokes the trust on single artifacts without affecting what was previously trusted.

* Pipelines can assert the trust of developers on the code
* Security Scanners can trust and distrust assets at any time
* QA teams can approve newly tested releases
* Legal can approve or forbid the usage of libraries
* Product Managers can EOL artifacts

And the most important: agents can assert the trust of the deployed software at runtime. This is what [HomeAssistant](https://www.home-assistant.io/blog/2021/05/05/release-20215/), the most popular home automation software, does to validate the software running on user's homes.

# Conclusion

Digital Certificates were designed for a small and static world. They are cumbersome to manage, provide a false sense of trust and revoking them is an expensive and destructive operation.

Notarization of individual assets provides a more fine grained and agile trust model for CI/CD environments. Trust is tied to identities, individual assets, and can be revised at any time. The immutable history of trust allows a compromised pipeline to reconstruct the picture and take actions.

Start notarizing today.

## About Codenotary

To learn more how you can implement end-to-end tamper-proof protection for your CI pipeline, visit [CodeNotary](https://www.codenotary.com) and [signup for the Cloud version](https://www.codenotary.com/products/ci-cd) or [download the Self-Hosted edition](https://www.codenotary.com/products/ledger-compliance).



