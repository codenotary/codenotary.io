---
title: "Guarantee Trust of Your Company's Deployed DevOps Assets with Blockchain"
image: /images/blog/Blockchain-Based-Code-Authentication-300x232.png
date: "2019-07-10"
---

 

![CodeNotary - Blockchain-Based Code Authentication](/images/blog/Blockchain-Based-Code-Authentication-300x232.png)

 

In DevOps, where teams can constantly be rearranged and sorted for different purposes, the ability to form groups or change their member status is important. Up until recently, CodeNotary strictly offered the easy visualization and verification of containers and all other existing code/digital assets signed by an individual. Now, enterprises can guarantee the trust of all of their DevOps assets, deployed or in development, with the immutability of the blockchain.

 

### **What is an Organization in CodeNotary?**

An organization is actually an alias of a group of public keys belonging to its authorized members. Each member has their own unique pubkey that is then connected to the organization.

 

Just as individual code signers have to go through a KYC (Know Your Customer) authentication process, organizations have to go through a similar certification in order to prove they are who they say they are. 

 

### **How Organizations Work in CodeNotary**

Organization names are created based on the email domain of the registered user who sets up the organization. (Within the command line, an organization name is known as an ‘organization ID’). Once created, the blockchain then stores the new organization’s ID and enables 100% verification transparency of all signed digital assets associated with the ID from that point forward. 

Any enterprise user (i.e. a user with an enterprise license) can create an organization for their company. Once the organization is created, any user a part of the new organization can start signing assets under the organization’s name. By becoming the designated organizational admin and can add new users directly from their dashboard as shown below:

 

![CodeNotary Organizational Dashboard View](/images/blog/My-Org-Dashboard-View-300x195.png)

 

### **Verifying a Digital Asset Against an Organization**

Verification of a digital asset’s signature against a specific organization’s name extends globally. From within the registered organization to beyond its walls, `vcn` users anywhere can verify a digital asset’s signature against a specific organization’s name. This way, when a digital asset indicates it was signed by, for example, Oracle, users outside of Oracle can know with confidence that Oracle indeed signed the digital asset they want to use.

 

Let’s look at an example.

 

Say user@org.com is member of [org.com](http://org.com) and user@org.com uses his pubkey, that has been associated with the organization, to sign an asset. 

A user can verify an asset against an organization by using the command: 

 

vcn verify <file> --org=<organization name>

 

People can also verify the asset’s integrity by using the pubkey of user@org.com with the command `vcn verify --key`. Alternatively, by users can verify an asset simply by using the organization’s name, i.e. its domain name, [org.com](http://org.com) with the command:

 

vcn verify <file> --org=<organization name>

 

The benefits here of grouping public keys together and connecting them to a domain are huge. For instance, would you rather remember a long alpha-numeric string of random characters like the following: 

 

0xc002195f0df2d6ce62eb17a2189b6e2e46db6a19

 

...or something much simpler like [vchain.us](http://vchain.us/)?

 

### **Verifying Against a Group of Signers (Keys)**

Organizations and users are also able to internally verify against groups of signers or organizations such as several vendors like [opvizor.com](http://opvizor.com), [redhat.com](http://redhat.com), and [amazon.com](http://amazon.com). This is particularly helpful when several contractors need to sign off on an asset before it is allowed to be used internally within the hiring organization or before passing the asset off to another contractor. (In the future, admins will be able to invite new users by email to join their organizations.)

 

Get a free trial account and try out CodeNotary for yourself.

 

 

[Start Free Trial](https://dashboard.codenotary.io/auth/signup)
