---
title: "SBOMs for Real-World Assets"
date: "2021-09-30"
image: "/images/blog/sbom-rl1.jpg"
tags: ["CodenotaryCloud", "SBOM", "Cybersecurity", "Java","Docker"]
---

# SBOMs for Real-World Assets

![SBOMs for Real-World-Assets](/images/blog/sbom-rl1.jpg)

The benefits of adopting SBOMs in the development pipeline are becoming increasingly evident. In addition to complying with current regulations, SBOMs offer the possibility of mitigating vulnerabilities, managing licenses more quickly, and even lowering operating costs by avoiding downtime due to attacks. However, you may be asking yourself, how much effort is required to adopt SBOMs in your workflow? That is a valid question, which is the subject of this article.

## Creating SBOMs for real-world assets

When creating a Software Bill of Materials, you have several alternatives. Among them, the most widely accepted are the open standards [SPDX](https://spdx.dev/) and [CycloneDX](https://cyclonedx.org/). 

The SPDX standard gives you the possibility to create files in formats as varied as .xls, .spdx, .rdf, .json, .yml, and .xml while CycloneDX outputs can be in .json and .xml.

Beyond the output format of the SBOMs, the most relevant aspect of the SPDX and CycloneDX standards is their flexibility to integrate with popular programming languages and environments. In the following sections, we present some examples of how you can use Codenotary Cloud's powerful [vcn CLI tool](https://github.com/codenotary/vcn) to give any digital asset a unique, immutable, verifiable, and traceable identity either locally or from the cloud.

### SBOM for Docker

The versatility of Docker is hard to beat. Developers can conveniently use Docker on their local machines for testing, or it can be used on on-premises servers, virtual machines, or in the cloud. Creating an SBOM in Docker comes down to one command. 

Here is an example of a WordPress Docker container SBOM output in SPDX standard, for which you just need to use the following command:

    vcn bom docker://wordpress:latest --bom-spdx wordpress.spdx

For your reference, the output would be something like the following.

![SPDX output using Docker](/images/blog/sbom-rl2.png)

Note that all information is easily accessible using the vcn cli.

![Detailed Docker output](/images/blog/sbom-rl3.png)

### SBOM for Java, Python, and Go

Integrating Codenotary Cloud vcn into your source code as part of your pipeline is just as simple as in Docker. To notarize a Java, Python, or Go artifact using the SPDX standard all you need is one line of code.

    vcn notarize --bom jenkins.war --bom-spdx jenkins.spdx

The output would be something similar to the following.

![SPDX output Java](/images/blog/sbom-rl4.png)

To obtain a notarized (cryptographically verifiable and timestamped) report in the CycloneDX standard, you can do so using the following code.

    vcn authenticate --bom jenkins.war --bom-cyclonedx-json jenkins.bom.json

The output would be similar to the following.

![CycloneDX output Java](/images/blog/sbom-rl5.png)

Finally, to authenticate (verify) the output, you only need to use the command.

    vcn a --bom jenkins.war --bom-cyclonedx-json jenkins.bom.json

As you can see, generating outputs in SPDX or CycloneDX format is straightforward using Codenotary vcn. **However, getting the SBOM is only part of the solution to protect your software!**


## Why Storing SBOMs in an Immutable and Timestamped Ledger Is Important

Implementing a Software Bill of Materials in your pipeline is an essential step in the right direction. On the other hand, using accepted standards such as SPDX and CycloneDX makes sharing information with the supply chain’s shareholders more accessible. 

However, additional measures are still needed to ensure that *SBOM does not become another target for threats*.

**Therefore, to increase the transparency of the software supply chain without compromising its security, the most efficient solution is to store the SBOM in an immutable ledger, which also has a timestamp of every interaction with it that allows tracking every change chronologically**. 

By notarizing every step and every artifact in this way, the pipeline can be made genuinely secure from end to end. The reason is simple. Attacks such as the high-profile SolarWinds case have shown that cryptographically verifying objects is not enough; another layer of security is needed. And that layer is given by the tamperproof trust given by the immutability of the ledger where the changes are stored. 

That kind of solution is exactly what Codenotary Cloud provides, an immutable ledger where to store changes always accessible with a tamperproof history of changes. 

Furthermore, Codenotary Cloud allows you to integrate with any CI, CI/CD, or DevOps tool through its robust API and command-line tools, which are fully compliant with SPDX and CycloneDX outputs. 
