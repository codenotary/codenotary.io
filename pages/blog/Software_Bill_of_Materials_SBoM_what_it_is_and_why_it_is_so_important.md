---
title: "Software Bill of Materials (SBOM), What It Is and Why It Is So Important"
date: "2021-09-15"
image: "/images/blog/sbom1_image1.png"
tags: ["CodenotaryCloud", "SBOM", "Cybersecurity", "SPDX","CycloneDX"]
---

# Software Bill of Materials (SBOM), What It Is and Why It Is So Important

Over time, having a reliable Software Bill of Materials (SBOM) has
become a fundamental part of the security strategy of DevSecOps teams.
Why? That's the topic we are going to address in this article.

## What is an SBOM

Let\'s start by defining what an SBOM is. **In simple terms, a Software
Bill of Materials (SBOM) is a structured list that includes all the components, libraries, and modules used to compile an application**.
Moreover, the SBOM should also include the supply chain relationships between those components, whether open-source or proprietary, free or paid.

Although the definition SBOM seems simple, in practice, it's used in a much broader context.

Today, it has become a priority that SBOMs can be shared frictionlessly between teams and organizations as a fundamental part of software management transparency. This transparency is not only supported by the ISO through its [OpenChain Specification](https://www.openchainproject.org/), but it's
also part of an effort to improve security in the digital industry, as evidenced by the 2021 [Cyber Security Executive Order](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) signed by President Biden.

You may be wondering, why all the fuss over something like a list of components? This is exactly the point we will discuss below.

## Why is an SBOM so important?

Beyond complying with the recent Executive Order related to cybersecurity, actively using an auditable SBOM that uses zero-trust technologies is in the best interests of the software supply chain.

![](/images/blog/sbom1_image1.jpeg)

Today, developers and organizations are reusing an increasing number of both open-source and proprietary components in their applications. This complexity has been a cause for alarm for some time now since
identifying each software component is crucial to understand if there may be a vulnerability in it. This is because "one bad apple can spoil the bunch", as evidenced by the high-profile hacking of SolarWinds.
In this sense, SBOMs are an invaluable tool, as they allow an audit of licenses, libraries, modules, applied patches, and other components for weaknesses. However, for such an audit to reliably trace the components used to build the software, the SBOM must have certain attributes.

-   Unique identities for each software component

-   Separate identities (independent of those used internally in the
    organization) to identify each machine and user involved in the
    development process

-   Timestamps to facilitate traceability of each change or component
    incorporation

Additionally, from a security point of view, a key element for the reliability of the SBOM is to prevent \"unauthorized changes\" on it. And the most effective way to do this is by using an immutable ledger that records a history of when each change was made. **Once the
reliability of SBOM is assured, DevSecOps teams can use it as part of their threat scanning toolbox and therefore improve software security.**

## SBOM open Standards (SPDX, CycloneDX)

Having established the importance of SBOMs, it remains to discuss how to implement them. A decade ago, developers did not have the infrastructure to facilitate the analysis of software components or the collaboration tools that we have today. This led to the creation of specifications,
the two most outstanding being the [Software Package Data Exchange](https://spdx.dev/) (SPDX) backed by the Linux Foundation and the [CycloneDX specification](https://github.com/CycloneDX/specification) managed by the CycloneDX Core working group, which has its origins in the [Open Web
Application Security Project](https://owasp.org/) (OWASP) community.

### SPDX Standard

The SPDX provides a standard language that can be used to communicate key components such as licenses, copyrights, and security information
related to the various software components. Moreover, thanks to this specification, developers and organizations can associate SPDX documents
to a specific software component or group of components. For this, they can use different formats or even a code snippet.

The enormous flexibility of the SPDX specification for sharing critical software component information recently earned it the [status of an internationally recognized standard for SBOM](https://www.prnewswire.com/news-releases/spdx-becomes-internationally-recognized-standard-for-software-bill-of-materials-301372282.html), which
demonstrates its undeniable relevance.

### CycloneDX Specification

The CycloneDX specification defines itself as \"*a lightweight softwarebill of materials (SBOM) standard designed for use in application security contexts and supply chain component analysis*\".

In this sense, while the SPDX standard provides a format that facilitates the communication of third-party and open-source software components, CycloneDX provides the tools to analyze the SBOM for potential vulnerabilities. In other words, the CycloneDX specification
addresses the safety aspect of SBOM components - undoubtedly crucial for DevSecOps teams.

## How to create an SBOM of an existing project

Manually creating a Software Bill of Materials is a daunting task.
Fortunately, there is both open-source and proprietary tooling that can help you generate an SBOM conveniently.

This is possible since most of the open-source (and proprietary) components used in today\'s cloud-native applications have metadata files that use the SPDX format. 
This makes it possible to automate actions that generate or update the SBOM as you can do with the Codenotary Cloud CLI (vcn bom).

Another alternative is to use state-of-the-art solutions to protect your software development pipeline from supply chain attacks like the one offered by CodeNotary, which is 100% compatible with CycloneDX and SPDX.
Furthermore, CodeNotary has integrations for Go and Java that allow it to collect dependencies from existing software binaries to recreate a BOM making it even easier to generate a reliable SBOM for your project.

## What to keep in mind with new projects

Throughout this article, the importance of SBOMs for software security has been emphasized. To this end, it is essential to bear in mind some key aspects when starting new projects:

-   Understandably, the pressure to deliver frequent releases justifies reusing software components in your project. However, initiatives such as those undertaken by the government make it more important than ever to reuse components that meet accepted specifications,
    such as SPDX and CycloneDX.

-   It is in the best interest of your organization to adopt a holistic approach to SBOMs, as they have gone from being a legal formality to avoid licensing issues to a key component in detecting software vulnerabilities.

-   When choosing tools to implement SBOM in your organization properly, keep in mind that solutions like CodeNotary **not only provide you with a tamper-proof SBOM to secure your software supply chain but also allow you to immutably track all changes in your software pipeline and even add important evidence files (i. e. vulnerability scanner results) thanks to its tamperproof immutable ledger**.

### [Start a free trial](https://www.codenotary.com/) and start protecting your DevOps process to:

1.  Massively reduce time (from days to minutes) to find and elimate unwanted code, dependencies, or container images

2.  Comply with the Cybersecurity Executive Order

3.  Instantly answer the question where a certain artifact has been used or is currently being used.
