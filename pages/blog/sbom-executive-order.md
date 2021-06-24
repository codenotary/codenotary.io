---
title: "President Biden’s Executive Order shows that every company needs an immutable Software Bill of Material (SBOM)"
date: "2021-06-24"
image: "/images/blog/bom-headline.jpg"
tags: ["Zero-Trust", "Trusted CI/CD", "BOM", "SBOM", CodeNotary"]
---

# President Biden’s Executive Order shows that every company needs an immutable Software Bill of Material (SBOM) 

**Zero-Trust infrastructures and SBOM are important to comply with the 2021 Cyber Security Executive Order!**

We believe that every company producing software needs to track the bill of material of its software (Software Bill of Material - [SBOM](https://www.linuxfoundation.org/blog/what-is-an-sbom/) or BOM). But it shouldn't just be tracked somewhere and stored in an archive system, it should be actively used. To make that possible, you need a solution that stores your BOM including its full history for every build immutably and tamper-proof - so it can become your single source of trust.

With the 2021 Cyber Security [Presidential Executive Order that has just been signed](https://www.whitehouse.gov/briefing-room/statements-releases/2021/05/12/fact-sheet-president-signs-executive-order-charting-new-course-to-improve-the-nations-cybersecurity-and-protect-federal-government-networks/), it becomes very clear that companies need to enhance the software supply chain security as one of the efforts to eventually improve the nation’s cybersecurity. That requires an auditable software bill of material using zero-trust technologies.

Not just the [SolarWinds](https://www.codenotary.com/blog/the-trusted-CICD-pipeline) hack made clear that a vulnerable software pipeline quickly becomes a threat to every user of that software.

The massive increase of software packages being built, distributed, and used must be tracked and it needs to be transparent what packages are used in running workloads. Many packages come with many vulnerabilities and third-party binaries, and open-source projects are pulled from potentially untrusted sources.

It is important to mention that there is an obligation to disclose data and software breaches when companies become aware of it. The more information has been collected - and that includes a complete bill of material, recorded pipeline jobs, and the software approval process -, the better it is for further investigation and to get back to a normal business as fast as possible.

At [CodeNotary](https://www.codenotary.com/products/ci-cd) we provide the platform and the integration required to record a fully searchable and comprehensive catalog or inventory of all your software components including its dependencies and vulnerability check results for internally developed, third-party, and open-source code.

### What is a Bill of Material / Software Bill of Material or BOM/SBOM?

You can think of **bill of materials** (BOM) as a complete list of all software artifacts that have been used in the build process to produce a software product. That includes the name, version and ideally the unique checksum for all of your internal components, third-party, and open-source code.

The bill of material should be combined with vulnerability or dependency scanner results that were produced within your software pipeline. Storing all of that data tamper-proof including an immutable history makes your BOM easy to use and trustworthy without the fear of having an attacker changing your BOM as well.

You need to keep in mind that many projects in the open-source world exist because of developers that solved a specific problem and shared the software with the community. You cannot expect that every project maintainer spends his spare time in making the code secure and bulletproof. 

Therefore, when using these projects, all the quality and security issues are inherited and will be part of the software that you produce and distribute based on these. That puts a risk to your software and everyone who is using your software, i. e. your customers or internal departments. In the SolarWinds case, over 18,000 customers were affected, and some have no idea that they still use malicious code.

You can't really blame the software developers themselves as they might be unaware of the vulnerabilities in dependencies within the code they reuse.

An immutable SBOM is not just a list of software artifacts stored in the company archive. It’s a process that continuously gathers all used software with its dependencies, including versions and known vulnerabilities. CodeNotary provides command line tools to integrate into CI/CD pipelines (GitHub, GitLab, Jenkins, CircleCI, TravisCI and many more) and GitHub actions to automate the process of collecting the software build dependencies that ultimately leads to a BOM. CodeNotary Immutable Ledger also stores that information as transactions in an immutable and cryptographically verifiable ledger. These transactions include as well artifact metadata, vulnerability scanner reports, and the involved parties (CI/CD tool, QA engineer, vulnerability server aso.). 

Next to a code to binary integration, CodeNotary also provides a binary to dependency integration for Go and Java applications.

It's the only tamper-proof and auditable solution on the market that provides a full immutable history of everything that has happened.

That way you know who did what when and where it is currently used - and you can prove it!

### Software Supply Chain Attacks

Every software delivery relies on a supply chain, like any other industry, to make sure that all components are used in the right way, at the right time and in the correct version. The supply chain also covers everything that can affect your delivery of the software. 

Therefore, the software supply chain is everything that goes into your code or affects it, from development, the CI/CD pipeline, until it's ready to be used or deployed into production. If you run your own workloads in production, then the software supply chain doesn't stop with the runtime but goes beyond to cover patches and rolling updates as well.

A good supply chain provides reports and information about code, binaries, other components, where they come from and what version or license has been used. Don't forget the security related part and the software component review for security issues, vulnerabilities, compatibilities, approved versions, and compliance. 

Who, when, where for everything that made up your software.

The software bill of material is not the only but a very important part of your software supply chain.

#### The attack surface

Most of the software supply chain is automated in today's software development process and is mainly protected using reviews, approval processes, vulnerability scanners, and [digital certificates](https://www.codenotary.com/blog/when-digital-certificates-fail/).

That automation of the CI/CD pipeline is one of the most exploited attack surfaces and was also used in the SolarWinds hack.

If the attacker (internal, external, intentionally or by accident) adds software components or changes the process that leads to a malicious software release, the damage is done. Using digital certificates only protects the software integrity, but not the authenticity or the level of security.

The moment that software is distributed into the runtime or to other customers, the damage spreads like wildfire.

#### How can a SBOM help?

A SBOM can help in 3 ways:

* complete understanding of what's built into your software
* act on security, license, or compliance changes of any of your used software
* present and past view

If someone actively embeds malicious components in your software, having a complete and tamper-proof catalog of your whole build process including all components used, still enables you to detect the bad code delayed or for forensic purposes.

But many vulnerabilities are simply part of approved and good software components that are detected way after you started using them. In these cases it's crucial that a software component that suddenly is marked critical by your vulnerability scanner can be detected everywhere it has been used before.

**Having a reliable and trustable (ideally using a Zero-Trust technology) bill of material, puts you in the position to trace back everything that has been used in the past, in the current build process, or is already running as a workload. Suddenly a newly detected vulnerability can be the basis for revoking software components close to real-time.**

When reading all the news about recent software supply chain attacks, one big question remains: 

**Where to start?**

#### Quick introduction CodeNotary Immutable Ledger 2.2

CodeNotary Immutable Ledger is the only solution that combines a complete immutable and cryptographically-verifiable data ledger with an integration to protect the full software lifecycle, software supply chain and application workload. Every timestamped notarization transaction consists of an user or machine identity, the unique digital artifact identity, the trust level (trusted, untrusted, unsupported) and metadata. As every historic transaction is an immutable version the platform is fully auditable.

The integration with any CI, CI/CD, and DevOps tools is easy using our API's and/or command-line tools. 

![trustedcicd](/images/blog/trustedcicd.jpg)

CodeNotary can cover the whole supply chain and instead of signing the final binary, the file is being notarized or authenticated by every step of the workflow. Multiple persons or machines with different logins are involved and all of them are constantly aware of the status of an object in the supply chain. With CodeNotary it would be almost impossible to tamper software products as seen in the Sunburst attack.

![trustedcicd](/images/blog/oneclick.jpg "trusted CI/CD")


When integrating the CodeNotary solution into your CI/CD pipeline, you gain **4 main benefits**:

1. Tamperproof history of all digital artifacts (single artifact and bill of material of the build)
2. Machines and people can notarize and authenticate every individual artifact inside or outside of your premises
3. Notarization can be done for every individual artifact using different states (Trusted, Untrusted, Unsupported)
4. Authentication can be done publicly by anyone with internet access (i. e. to check the current state of the download or build)

The CI/CD protection can **uniquely identify**:

- git repositories (source code)
- CI/CD pipeline ([Jenkins](https://www.jenkins.io/), [CircleCI](https://circleci.com/), [GitLab](https://about.gitlab.com/), [TravisCI](https://travis-ci.com/), [GitHub Actions](https://github.com/features/actions) and many more)
- Container images
- Files and folders (i. e. configuration files, build files, CI/CD recipes, installer binaries and many more)

CodeNotary Immutable Ledger 2.2 incorporates new features targeted at protecting CI/CD pipelines:


- VCN command line tool integrates with CI/CD pipelines, including an automatic collection of the whole pipeline environment for better artifact search
- Arbitrary files, eg. security scanner reports, can be attached (immutable) to the notarized artifact
- GitHub actions for notarization and authentication are available for automatic artifact and Git repository processing based on PRs or releases
- Identities (API keys) can be rotated and revoked programmatically
- VCN takes into account revoked keys when authenticating assets
- User interface improvements, especially in the CI/CD pipeline and artifact query view
- Multi-ledger query API keys to find artifacts across separated teams

### Integrating CodeNotary in your software pipeline to get a BOM

The most straightforward way of integration is the software build pipeline itself.

We at CodeNotary recommend a strategy where every step verifies the input and notarizes its output. In combination with a proper identity management, you can secure your pipeline in a way that unapproved software cannot be introduced into a build process.

In the build process itself, all used dependencies and requirements are notarized by the build process identity and the produced software build is notarized including all used requirements as well. That way you automatically create a BOM without any additional effort. 

Adding your vulnerability checker results to this notarization as well in our immutable ledger based platform ([uses immudb in its core](https://github.com/codenotary/immudb)) provides you with a fully auditable SBOM including an immutable history of past vulnerability or dependency checker results.

![Python-BOM-Source](/images/blog/python-bom-verify.png "Python Build Bill of Material")

You can read more about it here: https://www.codenotary.com/blog/the-trusted-CICD-pipeline

### Generating a bill of material from binary code using CodeNotary

Many of your software is already built, so you only have the binary code, but not the sources from the date of the build. As dependencies can be updated quite often, even builds between Monday and Tuesday can already differ when it comes to the bill of material.

Therefore, having access to the source code or the build protocol doesn't help - you need to extract the dependencies out of existing binary code.

At CodeNotary, we already have working integrations for Go and Java to gather dependencies including their unique fingerprint by checking existing software binaries to recreate a BOM.

That allows customers to find all used dependencies (name, version, checksum) by simply running our command line tool with the --bom flag and the binary and immediately notarizing them in one step. Alternatively, all used dependencies can be authenticated, to find out if any of them should not be used anymore.

![GO-BOM-Binary](/images/blog/bom-binary.png "Go extract Bill of Material from binary")

### Summary

Independently of the new Executive Order and government regulations at the state and federal level that are moving towards more due diligence in the software supply chain, it's in the interest of every single company to know the 3 W's (Who, When, Where) when it comes to application development, deployment, distribution, or runtime. 

CodeNotary is not simply providing a SBOM for your software supply chain, it also securely and immutably tracks every single step in your software pipeline. It's crucial to have an immutable and absolutely tamper-proof ledger to record every build, the SBOM, and the trust level for every single artifact over time.

That way, you can prove and query the present and the past whenever you need to know if and how you're affected by new vulnerabilities or supply chain attacks.

We have an online trial that you can use to start protecting your software supply chain:  [CodeNotary CNIL Online](https://www.codenotary.com/products/ci-cd)


