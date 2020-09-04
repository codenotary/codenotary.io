---
title: "immudb release candidate 0.6.0"
date: "2020-05-11"
---

Dear community. We're proud to announce the first Release Candidate of immudb!

After months of hard work, the team felt immudb is ready for the open source community. We focussed on security, performance and also ease of installation and use. With the release candidate published, we're really looking forward to get feedback.

If you want to get all details right now, please check out our Github repository (if you like it please give us a star as well): [immudb](https://github.com/codenotary/immudb)

## What is immudb?

immudb is **lightweight, high-speed immutable database** for systems and applications. With immmudb you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a the tamperproof immudb database. This allows you to keep an indelible history of, say, your debit/credit transactions.[![](/images/blog/immudb-mascot-small.png)](https://github.com/codenotary/immudb/blob/master/img/immudb-mascot-small.png)

Traditional transaction logs are hard to scale, and are not immutable. So there is no way to know for sure if your data has been compromised.

As such immudb provides **unparalleled insights** **retro-actively**, of what happened to your sensitive data, even if your perimiter was compromised. immudb provides the guarantatee of immutability by using internally a **Merkle tree structure**.

immudb gives you the same **cyrptographic verification** of the integrity of data written with **SHA-256** like classic blockhain without the cost and complexity associated with blockchains today.

immudb has 4 main benefits:

1. **immudb is immutable**. You can only add records, but **never change or delete records**.
2. data stored in immudb is **cryptographically coherent and verifiable**, like blockchains, just without all the complexity and at high speed.
3. Anyone can get **started with immudb in minutes**. Wether in node.js, Java, Python, Golang, .Net, or any other language. It's very easy to use and you can have your immutable database running in just a few minutes.
4. Finally, immudb is **Open Source**. You can run it **on premise**, or in the **cloud** and it's completely free. immudb is governed by the Apache 2.0 License.

immudb is currently runs on **Linux**, **FreeBSD**, **Windows**, and **MacOS**, along with other systems derived from them, such as **Kubernetes** and **Docker**.

## **immudb High-level**

[![immudb Highlevel](/images/blog/highlevel.png "immudb highlevel overview")](https://github.com/codenotary/immudb/blob/master/img/highlevel.png)

[![Tweet about immudb!](https://camo.githubusercontent.com/65fd47cbaab26b81c38adc03ebb86ee9dd42cb5f/68747470733a2f2f696d672e736869656c64732e696f2f747769747465722f75726c2f687474702f736869656c64732e696f2e7376673f7374796c653d736f6369616c266c6162656c3d547765657425323061626f7574253230696d6d756462)](https://twitter.com/intent/tweet?text=immudb:%20lightweight,%20high-speed%20immutable%20database!&url=https://github.com/codenotary/immudb)
