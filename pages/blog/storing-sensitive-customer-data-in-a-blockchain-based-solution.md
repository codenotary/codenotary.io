---
title: "Storing Sensitive Customer Data in a Blockchain-based Solution"
date: "2019-06-26"
---

 

![blockchain-data-records](/images/blog/blockchain-data-records-300x200.jpg)

 

## **Intro**

Once data is on the blockchain, it's there forever. Blockchains are permanent, immutable storage with no way to revert, delete, or undo the data that has been written to them. Due to the fundamental nature of a blockchain and every node replicating the ledger at a regular clip, the surface size hackers have to attack compared to a traditional database is much larger. So blockchain sounds like a bad idea? Not really....if you use the right data strategy. The following blog is about the logic path we went down to arrive at our blockchain-based solution for storing sensitive customer data.

 

## **Sensitive Data and the Blockchain**

There are numerous reasons sensitive data cannot go on a blockchain such as internal compliance policies, industry regulations, and privacy (e.g. the recent GDPR legislation in Europe), and many more.

 

In addition, blockchain operations are potentially slow and expensive. Smart contract development is also tricky. Compared to "conventional" data-stores smart contracts are hard to write, debug, migrate, secure, and perform searches on.

 

## **Benefits of Blockchain**

Still, even with all the extra complexities, we love blockchain. It enables tons of use cases and gives us immediate benefits that are extremely hard to achieve in conventional systems like:

 

- Proving ownership
- Proving data integrity 
- Streamlining business processes across multiple entities
- Auditable and irrefutable chain of custody
- Transparent, real-time insight
- Tracking component life-cycles
- Improved inventory management
- Lowered administrative costs
- Increased security and reduced risk

 

## **Privacy and Regulatory Shortcomings of Blockchains**

Despite the previously mentioned difficulties and because blockchain offers so many benefits, we thought through several approaches to dealing with the privacy and regulatory shortcomings of storing sensitive data on blockchains. 

 

### **Option #1 -  Forget About It**

First, we should just acknowledge that blockchains offer a unique set of properties and are not a miracle solution for everything that ails us. So it’s worth mentioning that just running a blockchain and doing nothing to protect your sensitive data is always an option but extremely dangerous. Just because blockchain uses cryptography does not mean the data that is stored on it is automatically encrypted or made private.

 

**Option #2 -  Encryption**

Encrypting the data prior to putting it on the blockchain is an option. However, dealing with keys, especially manually which is prone to human error, is a cumbersome task and also dangerous. For instance, what happens if a key gets compromised? All your information is there forever on the immutable blockchain. How are you going to explain that kind of slip to your corporate customer who now has his financial history laid out there for all to see?

 

**Option #3 -  Hashing**

Another option is to hash the sensitive data but it comes with a limitation. Storing hashed data is useful if you are okay with being able to only lookup a specific hash. After 7 hashes or however many, are you going to remember which customer is represented by the by the alpha-numeric string 4ac81733639e962ef72ea160d6bdbc0f5cedd3a2fb1d74ce909f0504032c15c2? Good luck.

 

**Option #4 -  Anonymizing**

Of course, there’s the option to simply anonymize data. However, that is only partially useful as it does not make sense to display anonymized data to the customer. Furthermore, scrubbing data so it’s not personally identifiable can be done to various degrees. So that leaves you with a choice (or analysis) on how far and to what degree of anonymization you should use? Higher levels cost more in resource time, labor, and expense. Lower levels offer less privacy.

 

**Option #5 -  Splitting the Data**

Splitting the data model and only storing the minimum amount of information on the blockchain is also an alternative. Repercussions here lead to introductions of additional components into the architecture, which means you have another database to manage. It also means you have to deal with the compliance constraint of only storing the core data on the blockchain that is not in conflict with company policy mandates. 

 

## **Best of Both Worlds**

That said, splitting the data delivers the benefits of both the blockchain system for proving data was not tampered with and the custom datastore system for keeping sensitive data private. The trick is to get the synchronization right. To do that, you have to determine what’s the primary source of truth and then figure out what's the identifier you can use to "join" the records of the local database and the blockchain. Get that right and you’re on your way. Of course, you will have to deal with conflicts, but that is a classical problem in distributed systems and is well explored. 

 

## **Conclusion**

Our passion led us to figure out the right combination of blockchain and custom database was in order to provide the DevOps world with a new, never before seen solution for storing sensitive customer data. CodeNotary is an application for verifying continuous trust throughout the entire software development process. It allows for global integrity and identity verification of digital assets including /images/blog, containers, dependencies, libraries, tools, and the entire DevOps code universe.

 

In the end, we take privacy seriously. We acknowledge that blockchain is not the perfect solution for everything. Like anything, it has trade-offs. We just like to figure out how to get the best of both worlds. 

 

Check out how we use a private permissioned blockchain to get the best of both worlds for CodeNotary’s one-stop-shop solution for immutable digital asset verification.

 

[Test Out CodeNotary Free for Yourself](https://dashboard.codenotary.io/auth/signup)

or

[See How It Works](https://www.codenotary.io/how-it-works/)
