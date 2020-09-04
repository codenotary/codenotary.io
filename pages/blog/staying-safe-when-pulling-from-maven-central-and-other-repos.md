---
title: "Staying Safe When Pulling from Maven Central and Other Repos"
date: "2019-05-22"
---

 

![CodeNotary & Maven Integration Graphic](/images/blog/CodeNotary-Maven-Integration-Graphic-300x232.png)

 

Maven works well, especially if you don’t want to rewrite a program from scratch every time you start up a project. It manages builds and versions and is a central repository for dependencies that works much better than Ant. It also makes pulling in new features pretty easy. But what if you need to add a dependency to your system and you’re not pulling from Maven Central? What if you are but you still don’t know the code source? What if you’re working with a CI server? How do you know the code you pull is not malicious? You can use CodeNotary’s JVCN plugin to enforce Maven dependencies and immutably assure their safety.

 

CodeNotary is the only decentralized, secure and blockchain based solution out there for enforcing and securing your Maven dependencies. See how it works below:

 

## **Trusting Maven Dependencies**

[CodeNotary](https://www.codenotary.io/) makes sure all your project dependencies, whether from Maven Central or other repos or servers, are trusted.

 

Getting a closer look under the hood into the pom.xml, you can see CodeNotary has a couple of things going on to help you get security for your builds:

 

1. The jvcn-maven plugin is hooked into the maven build process to automatically verify dependencies at build time.
2. The JVCN plugin is set-up to verify all dependencies against a signer with the public-key 0xC498EEEbDcBd4047b7393573dB21099cE42638be
3. The plugin is also configured to stop the build if it encounters a single non-trusted dependency.

 

And now, we can go continuous without breaking a sweat over whether or not our latest build is safe to use. Just to illustrate, let’s run an example of CodeNotary's dependency enforcement at work.

 

## **Dependency Check Example**

In this setup, for simplicity, we just have a single dependency:

 

us.vchain:jvcn:0.0.1.

 

Since, this dependency is signed with the blockchain stored, authentic hash, (below):

 

0xC498EEEbDcBd4047b7393573dB21099cE42638be

 

...the build passes.

 

## **Build Enforcement Test**

By adding a new, unknown dependency to the project, you will be able to see the build enforcement in action.

 

We start our test by adding the following snippet to our dependencies list in pom.xml:

 

<dependency\>

 <groupId\>org.postgresql</groupId\>

 <artifactId\>postgresql</artifactId\>

 <version\>42.2.5</version\>

</dependency\>

 

Because the postgresql dependency was not signed with the same trusted hash we used previously (above):

 

0xC498EEEbDcBd4047b7393573dB21099cE42638be.

 

...the dependency is prevented from being used and the build fails. Clearly, if the key isn’t there, the lock won’t open and you remain protected.

 

Stay security thirsty my friends.

 

If you liked this blog, check out more cool CodeNotary integrations [here](https://www.codenotary.io/integrations/).

 

 

[Yes! Show Me More Integrations](https://www.codenotary.io/integrations/)

 

 

**References**

[https://github.com/vchain-us/jvcn-maven-plugin/tree/master/examples/dependency-enforcement](https://github.com/vchain-us/jvcn-maven-plugin/tree/master/examples/dependency-enforcement)

[https://www.youtube.com/watch?v=KNGQ9JBQWhQ](https://www.youtube.com/watch?v=KNGQ9JBQWhQ)

[https://stackoverflow.com/questions/31740785/why-order-of-maven-dependencies-matter](https://stackoverflow.com/questions/31740785/why-order-of-maven-dependencies-matter)

[https://www.tutorialspoint.com/maven/maven\_external\_dependencies.htm](https://www.tutorialspoint.com/maven/maven_external_dependencies.htm)
