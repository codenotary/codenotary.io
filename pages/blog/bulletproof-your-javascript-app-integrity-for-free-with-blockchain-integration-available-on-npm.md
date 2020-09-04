---
title: "Bulletproof Your JavaScript App Integrity for Free with Blockchain - Integration Available on NPM"
date: "2019-07-02"
---

 

 

![JS, NPM, and Blockchain](/images/blog/JS-NPM-and-Blockchain_3-300x232.png)

 

In 2019, JavaScript remains one of the top languages used on GitHub. It has the most contributors in both public and private repositories as well as from organizations of all sizes from all over the world. JavaScript is the programming language behind much of the web and is used to build interactive plugins and websites. Almost every web app which runs in your browser is based on some kind of JavaScript framework. In this blog, you’ll find out how to bulletproof your JavaScript app integrity for free with blockchain.

 

With JS being so ubiquitous, it’s also a common attack vector. As well put in [this](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5) article on Hacker Noon: 

 

_There’s no shortage of smart, nasty people out there. \[With\]_ [580,000 npm packages](http://www.modulecounts.com/) _out there, \[it\] seems to me that the odds are better than even...at least one of those packages has some malicious code in it, and that if it’s done well, you would never even know._

 

Here we realized we had a unique opportunity to make our own little contribution to the community. Thus we decided to make our JS integration publicly available for free by open sourcing the core of our verification-related applications  ([verify.codenotary.io](https://verify.codenotary.io/) and [CodeNotary - Downloads Verification Chrome Extension](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb)) as a JS package. Now, every one of the millions of JS developers out there can verify the files within their web applications and check them against the immutability of the blockchain.

## **So Why Did We Release the Package on NPM as Well?**

As you might have picked up, we enjoy helping to make the world a better place. Since we’re releasing our JS integration because it’s the most widely used coding language, it goes pretty much hand in hand that we would also release a verification version on the world’s largest software registry that hosts mainly JS software packages. And that is what we’re doing. 

 

Developers can add our `jsvcn` package into their modern JavaScript frontend application with one single npm command: 

 

npm install jsvcn

 

## **Why Should You as a Developer Use This Package?**

First off, you don’t have to do anything. But if you want a free, easy to use method for verifying the code you use and produce is safe and untampered, then you might want to check out the JS client from [CodeNotary](http://codenotary.io/). It’s a well designed and unit tested package that provides a simple interface and configuration options so you don’t have to deal with all the complexities of blockchain communication. All you do is just choose the file that needs to be checked and it returns its blockchain stored verification status as well as it’s accompanying details and metadata. 

## **CodeNotary’s JSVCN Features**

In short, what `jsvcn` provides is the verify-subset of our `vcn` tool’s functionality i.e. it verifies digital assets via the CodeNotary Blockchain and queries asset metadata from CodeNotary.

 

In order to do the same and verify your files, simply use the single call: 

 

import Jsvcn from "jsvcn"

const FILE \= new File(...);

const jsvcn \= new Jsvcn();

jsvcn.verify(FILE).then(({ status }) \=> {

 ...

})

 

Alternatively, you can also verify a file directly by using the file’s SHA256 hash in the command:  

jsvcn.verify("<SHA256 hash>");

 

## **How It Works** 

Under the hood, `jsvcn.``verify()` reads the provided file and generates a unique SHA256 hash from it, which then gets sent to the CodeNotary blockchain to be immutably stored forever. After it processes, you get back the file’s trust status with the help of the Ethereum Web3 library ([https://web3js.readthedocs.io/en/1.0/](https://web3js.readthedocs.io/en/1.0/)). 

 

In the case the asset was already signed, a second server request queries CodeNotary’s asset server and extends the blockchain response. So in the verify method’s response, you get the status of the asset and all the CodeNotary stored metadata regarding the digital asset.

 

The package is a pure ES6 library which means developers can integrate it into any web app built with modern JS frameworks (React, Vue, Angular, etc.). The only requirement is that the app should have some kind of build pipeline such as Webpack, Rollup, or others.

 

## **Important** 

The verify method DOES NOT UPLOAD the file you verify. It sends only the hash of the file to our servers. Reading and hashing the file happens 100% on the client side, in the browser environment, and in memory. To keep the browser’s memory usage low the package does this in an efficient and optimized way i.e. it reads and calculates the hash in small chunks. 

 

This means developers can develop frontend clients who are able to verify large files on the client side without any performance degradation. And thanks to our hashing-based solution, the digital asset never leaves the user’s computer. 

 

## **Extra features** 

### **Hashing Progress Complete Indicator**

Verifying (hashing) huge files, such as ones that are several GBs or more, takes time. The CodeNotary Verify method provides a progress callback as a second parameter which periodically returns the percentage value of the hashing progress. To do so use the command:

 

jsvcn.verify(FILE, (progress) \=> console.log(progress + '%'));

 

This way you can have the application display the hashing progress to your users.

 

### **Additional Checksum Calculations**

[CodeNotary.io](http://codenotary.io/) uses SHA256 algorithm to generate and compare hashes, but the package can also provide the SHA1 and MD5 checksums alongside with the SHA256 hash calculation. In this case, the Verify constructor needs some additional configuration with the name of the desired checksums as shown below:

 

const jsvcn \= new Jsvcn({checksums: \["sha1", "md5"\]});

 

### **Current Real World Use of the CodeNotary Library**

You should know that this is an actively maintained library that is making over 140,000 verifications per day. Two apps currently using the library are:

 

- [CodeNotary Drag and Drop Verification Webpage](https://verify.codenotary.io/)
- [CodeNotary Chrome Extension](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb)

 

Additionally, the CodeNotary roadmap includes plans to extend the library even further in the future. 

 

### **Demo**

To see what the raw response of the library’s verify method looks like that you can pull into your application, check out this very simple demo of CodeNotary Verify in Vue.js <[**here**](https://vchain-us.github.io/jsvcn/)\>. If you want, you can get the source code of the demo application <[**here**](https://github.com/vchain-us/jsvcn/tree/master/example)\> on GitHub page. 

 

### **What CodeNotary Is** 

CodeNotary offers decentralized verification of digital assets and lets users know who signed them as well as that they are 100% untampered regardless of what the asset is, where it is hosted or the languages, frameworks, or platforms it uses. In addition, CodeNotary’s continuous verification and enforcement features identify unknown and untrusted software components instantly and prevent them from being allowed to run without any additional work required from you. Furthermore, it facilitates the easy management, monitoring, and, when needed, revocation, of any digital asset.

 

For more information on CodeNotary and its other integrations, it offers, check out:

 

 

[CodeNotary Integrations](https://www.codenotary.io/integrations/) 

 

Or

 

[CodeNotary - GitHub Repo](https://vchain-us.github.io/jsvcn/) 

[CodeNotary - NPM Package](https://www.npmjs.com/package/jsvcn)
