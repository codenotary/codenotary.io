---
title: "CodeNotary Product Update – October 2019"
image: /images/blog/codenotary_mascot_final-oicljfj7ltjgxnmn3023a3ip293np0m2c1rvwo1yu2.png
date: "2019-10-25"
---

We're absolutely thrilled to announce our new release of CodeNotary that went online today.

The update includes a ton of smaller and larger changes and improvements of the look and feel. It's much better structured, on-boarding is even easier as before and you can use all features for free.

We worked very hard to cover most of the amazing community and users feedback we received over the last couple of months.

Before we share **what's new**, we also want to present our new **Mascot**, that guides your through our Open Source projects:

![codenotary_mascot_final](/images/blog/codenotary_mascot_final-oicljfj7ltjgxnmn3023a3ip293np0m2c1rvwo1yu2.png "codenotary_mascot_final")

## What’s New in CodeNotary

- Updated Dashboard design
- New documentation page: [https://docs.codenotary.io](https://docs.codenotary.io)
- New notarization key capabilities, to simplify key management processes
- New organization's Asset page with all the assets notarized by org members
- New organization's dedicated page on [https://authenticate.codenotary.io](https://authenticate.codenotary.io)
- New REST API for authentication
- Redesigned https://authenticate.codenotary.io
- Updated the CodeNotary Chrome extension
- Improved notarization of git repos, directories, podman /images/blog, docker /images/blog
- New GitHub action for CodeNotary: [https://github.com/vchain-us/verify-action](https://github.com/vchain-us/verify-action)
- Full transparency - Check the notarization transaction on the [ZTC](https://www.zerotrustconsortium.org) blockchain
- all kinds of updates for our GitHub repositories
    - VCN: [https://github.com/vchain-us/vcn](https://github.com/vchain-us/vcn)
    - JVCN: [https://github.com/vchain-us/jvcn](https://github.com/vchain-us/jvcn)
    - Kube-Notary: [https://github.com/vchain-us/kube-notary](https://github.com/vchain-us/kube-notary)
- and updates to our docker container /images/blog
    - VCN: [https://hub.docker.com/r/codenotary/vcn](https://hub.docker.com/r/codenotary/vcn)
    - Kube-Notary: [https://hub.docker.com/r/codenotary/kube-notary](https://hub.docker.com/r/codenotary/kube-notary)

[Sign Up for CodeNotary](https://dashboard.codenotary.io/auth/signup)

While you can find most information required during on-boarding or on our new documentation page https://docs.codenotary.io we want to share you some new dashboard screenshots, to get you a better idea about our new design.

## Dashboard

Start your journey your Top Assets and your activity timeline. That way you can always follow through the digital assets you or your pipeline service (i. e. Jenkins) notarized or authenticated.

![CodeNotary My Assets](/images/blog/intro-1024x660.png)

## Assets

This view helps you in checking asset details based on your notarization. Unlike digital certificate signing, you can notarize digital objects without changing them, but all information is notarized in an immutable way including details.

![Asset details](/images/blog/asset-1024x396.png)

You can remove Trust from any digital asset at any point in time. That feature is amazingly powerful, in case you don't want to use these assets anymore. In combination with our docker watchdog or Kube-Notary, you can track any running untrusted container image within seconds.

Check out our latest blog posts that cover Microsoft Azure DevOps, but can be adopted to any Jenkins and/or Kubernetes environment:

[Securing your Azure DevOps Ecosystem, Jenkins and Kubernetes (AKS) using CodeNotary – Part 1](https://www.codenotary.io/securing-your-azure-devops-ecosystem-jenkins-and-kubernetes-aks-using-codenotary-part-1/)

[Securing your Azure DevOps Ecosystem – Part 2](https://www.codenotary.io/securing-your-azure-devops-ecosystem-jenkins-and-kubernetes-aks/)

## Digital Asset Details

Let's take the highly popular cloud native edge router Traefik, that our friends at Containous are developing and maintaining [https://traefik.io/](https://traefik.io/)

![Traefik notarize CodeNotary](/images/blog/traefik-1024x492.png)

You can simply Trust the latest version of Traefik and Unsupport all older versions you don't want to use anymore. If you use [Kube-Notary](https://docs.codenotary.io/integrations/kube-notary.html), you'll can check your runtime in realtime immediately like in this example here of our demo environment:

![Kube-Notary status dashboard](/images/blog/kube-notary-status-1-1024x562.png)

Of course we would love to get your feedback and would be thrilled if you show us your support on GitHub or Dockerhub! Highly appreciated!
