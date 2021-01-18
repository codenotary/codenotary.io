---
title: "CodeNotary Product Update - July 2019"
image: /images/blog/CodeNotary-Product-Update-July-2019.v2-300x232.png
date: "2019-07-11"
---

 

## ![CodeNotary - Product Update July 2019.v2](/images/blog/CodeNotary-Product-Update-July-2019.v2-300x232.png)

 

It’s finally time for a new CodeNotary product update again. The update includes organizational management and signing features, CodeNotary for Kubernetes suite add-on - Kube-Notary: a K8s watchdog, and the JVCN for Maven plugin and JSVCN for JavaScript package. 

 

## **What’s New in CodeNotary** 

- **Organization management:** 
    - Ability to create an organization and add users to it from the dashboard
    - Ability to sign assets in the organization’s name
    - Ability to verify an asset based on an organization 
- **CodeNotary for Kubernetes:**
    - Kube-notary: a Kubernetes watchdog to continuously monitor Kubernetes cluster at runtime and notify when unknown or untrusted container /images/blog 
        - CodeNotary created Grafana dashboard
        - Verification metrics exporter for Prometheus 
- **JVCN:** the Maven plugin allows for the verification of dependency integrity during builds 
- **JSVCN:** the JavaScript package allows for the verification of a digital asset's integrity that is used in a web application

 

[Start Using CodeNotary](https://dashboard.codenotary.io/auth/signup)

 

## **Organizational Management**

Enterprise users now can sign the digital assets their organization produces by creating an organization in the dashboard (below) for their company. New organizational team members can be directly in the dashboard as seen below as well.

![CodeNotary Organizational Dashboard View](/images/blog/My-Org-Dashboard-View-300x195.png)

 

#### **Verifying a Digital Asset Against an Organization**

Verification of an organization’s digital asset can be done from anywhere globally, both from inside and outside of the organization. This allows for users outside of the signing organization to be sure that the indicated organization did, in fact, sign the digital asset they are seeking to use.

 

#### **Verifying Against a Group of Signers (Keys)**

Groups of signers or organizations such as several vendors like [microsoft.com](http://microsoft.com), [redhat.com](http://redhat.com), and [opvizor.com](http://opvizor.com) can be required to have all their signatures approved before a digital asset is okayed to be used. For example, before an asset is allowed to be used internally or passed off to another contractor, signatures from multiple responsible parties, e.g. contractors, auditors, regulators, etc., all need to sign off on an asset first.

 

More information can be found on our blog [here](https://www.codenotary.io/blog/guarantee-trust-of-your-companys-deployed-devops-assets-with-blockchain/).

 

## **CodeNotary for Kubernetes: Kube-Notary**

`kube-notary` is the first add-on of the CodeNotary for Kubernetes suite. It acts as a watchdog for users’ Kubernetes environments and continuously monitors clusters at runtime, issuing instant notifications when an unknown, untrusted, or unsupported container image is found running. After deploying the service within a cluster, all pods are continuously checked by matching the hash signature of the running image to the hash that is stored immutably on the blockchain. If the hashes match, trust is verified. Containers are checked and re-verified at regular, user-specified intervals. If any containers are found that are not ‘Trusted’, `kube-notary` alerts you instantly.

 

Additionally, `kube-notary` comes with a built-in verification [metrics](https://github.com/Sanderson462/kube-notary#Metrics) exporter, everything can be easily visualized in a Prometheus time series database using the CodeNotary created Grafana dashboard (screenshot below). 

 

![Kubernetes vcn Grafana Dashboard Visual 2](/images/blog/Kubernetes-vcn-Grafana-Dashboard-Visual-2-300x132.png)

 

More information can be found about `kube-notary` on our GitHub page [here](https://github.com/vchain-us/kube-notary) or the Grafana dashboard [here](https://github.com/vchain-us/kube-notary/tree/master/grafana).

 

## **JVCN** 

![CodeNotary & Maven Integration Graphic](/images/blog/CodeNotary-Maven-Integration-Graphic-300x232.png) 

The `jvcn-maven` plugin allows for the verification of dependency integrity during builds. Additionally, the build process can be stopped by the plugin if it encounters a non-trusted dependency.

 

More information can be found on our blog [here](https://www.codenotary.io/blog/staying-safe-when-pulling-from-maven-central-and-other-repos/ ) or GitHub repo [here](https://github.com/vchain-us/jvcn-maven-plugin).

 

## **JSVCN**

The JVSCN package is an easy to use JavaScript client for the CodeNotary platform. It allows for the verification of digital assets used in web applications by connecting directly to the CodeNotary blockchain and querying asset metadata from CodeNotary. This way developers can integrate the power of the blockchain with their web apps without having to deal with the complexity of communicating with a blockchain. The package is unit tested and well designed and is a verify-subset of our `vcn` tool functionality. It is available on NPM [here](https://www.npmjs.com/package/jsvcn).

 

More information can be found on our blog [here](https://www.codenotary.io/blog/bulletproof-your-javascript-app-integrity-for-free-with-blockchain-integration-available-on-npm/) or GitHub repo [here](https://github.com/vchain-us/jsvcn).
