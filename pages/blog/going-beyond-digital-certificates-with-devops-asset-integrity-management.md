---
title: "Going Beyond Digital Certificates with DevOps Asset Integrity Management"
image: /images/blog/truth-puzzle-2-300x94.jpg
date: "2019-06-13"
---

 

 

![truth puzzle 2](/images/blog/truth-puzzle-2-300x94.jpg)

 

## **Intro**

Go beyond digital certificates and get continuous integrity for your entire DevOps process. Developers no longer need to depend on 3rd parties to manage their certificates effectively and efficiently. Now, in a matter of seconds, not weeks, code and digital assets can be assigned trust and have their trust verified or even removed when necessary. In this blog, we’ll cover assets and asset integrity management using the CodeNotary dashboard.

 

## **What is an asset?**

In CodeNotary terms, an asset is anything digital that is made up of 1’s and 0’s. Of course, the binary level is as base as it gets and there are scaled degrees of larger digital scaffolding of all sizes including snippets, /images/blog, containers, programs, apps, backups, etc. All assets can have their digital integrity authenticated anytime, anywhere. And CodeNotary’s dashboard makes it easy to manage all your assets in the same place.

 

## **Asset Integrity Management and the CodeNotary Dashboard**

Authenticating integrity is where it all starts. But the power of CodeNotary is just getting started. Once an asset has been signed by you (or your organization), it will appear in your dashboard where you can maintain an overview of your entire asset portfolio. (In fact, if you are using CodeNotary’s vcn tool for Kubernetes you can get a specialized dashboard by using Grafana, which you can see an example of [here](https://twitter.com/CodeNotary/status/1139176271718563840).)

 

![CodeNotary Dashboard 2](/images/blog/CodeNotary-Dashboard-2-300x92.png)

 

In it you will be able to see your top assets, the number of verifications they have had, when they were signed, their public visibility, and more as shown in the screenshot below.

 

This is great for when you need to quickly check assets stats as well as an itemized list of all of your assets, their trust statuses, and the number of asset signatures you have revoked due to bugs, obsolescence, or depreciation. (For more on revocation, check our our blog [here](https://www.codenotary.io/the-failure-of-the-certificate-revocation-list-crl/).)

 

You can get extremely granular with the assets you sign. This means that not only are you able to sign a deployed product, but you can sign each component and the components of a component to the _nth_ degree. For DevOps, it doesn’t get any better than being able to verify the integrity of assets on an infinitely granular level.

## **Asset Version Grouping**

With CodeNotary, you have always had the ability to see in your dashboard every asset you’ve ever signed. Now you are able to easily visualize your asset versions by turning on the ‘Group by Asset' feature for a cleaner dashboard experience. This will group all versions of the same asset together by matching their hashes together. The latest signed version will always be presented first. Clicking the down arrow icon to the left of the asset’s name will cause the asset timeline to display and open up an accordion view of the asset history as shown below.

 

![CodeNotary - Dashboard - Asset Grouping](/images/blog/4-300x188.png)

 

## **How to Turn On Asset Grouping**

You can sign the same asset, for example putty.exe, or whatever you choose, multiple times. On the Dashboard under the ‘My Assets’ screen, you can choose to see the different versions of your asset grouped or ungrouped by toggling between the two choices.

 

![CodeNotary - Group by Asset - Toggle](/images/blog/Group-by-Asset-Toggle-300x189.png)

 

When a user clicks on the little ‘i’ icon to the far right in the row of a specific asset, a detail page will pop up with all the asset's details, including metadata and custom attributes.

 

![CodeNotary - Dashboard - Asset Details Pop Up](/images/blog/Asset-Details-Pop-Up-300x196.png)

 

## **Conclusion**

These new features present a great way to oversee your trusted assets easily. CodeNotary is a ready-to-go reliable solution for asset integrity management. We always recommend following security best practices whenever you want to rely on a certificate, but in case you want to take your development process to the next level, the thoroughness and near instantaneousness of blockchain technology, which CodeNotary is based on, can help you achieve robust integrity in your organization’s DevOps process.
