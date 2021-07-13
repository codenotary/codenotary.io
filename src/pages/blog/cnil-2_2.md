---
title: "CodeNotary Immutable Ledger 2.2 Released"
author: "Duncan Mac-Vicar P."
date: "2021-05-18"
image: "/images/blog/trustedcicd.jpg"
tags: ["GitHub Action", "Secure CI/CD", "CodeNotary", "GitOps", "DevOps"]
---

HOUSTON, May 17th, 2021 -- CodeNotary ( [www.codenotary.com](https://www.codenotary.com) ), the immutability specialist that provides end-to-end tamper proof protection for software development and workloads, has released version 2.2 of its flagship product CodeNotary Immutable Ledger (CNIL). CNIL is available cloud based or self-hosted to deploy and run anywhere.

This release is an important step for our customers and anyone who wants to protect from supply chain attacks and requires a modern and fine-grained artifact and software signature solution with powerful revocation capabilities. In the light of the latest supply chain attacks that affected SolarWinds, Codecov, Rapid7, HashiCorp and many others, we’re absolutely thrilled to provide powerful DevSecOps products.

CodeNotary Immutable Ledger 2.2 incorporates new features targeted at protecting CI/CD pipelines:

* VCN command line tool integrates with CI/CD pipelines, including an automatic collection of the whole pipeline environment for better artifact search
* Arbitrary files, eg. security scanner reports, can be attached (immutable) to the notarized artifact
* GitHub actions for notarization and authentication are available for automatic artifact and Git repository processing based on PRs or releases
* Identities (API keys) can be rotated and revoked programmatically
* VCN takes into account revoked keys when authenticating assets 
* User interface improvements, especially in the CI/CD pipeline and artifact query view
* Multi-ledger query API keys to find artifacts across separated teams

The [cloud version](https://dashboard.codenotary.io/auth/signup) can be accessed immediately and a self-hosted trial can be downloaded from [CodeNotary website](https://www.codenotary.com).

An example GitHub action to integrate CodeNotary Immutable Ledger into a Github project can be found [here](https://github.com/codenotary/notarize-and-verify-pr).


