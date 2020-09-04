---
title: "How CodeNotary Can Protect You From Using Compromised Container Images"
date: "2019-05-29"
---

<script id="asciicast-245394" src="https://asciinema.org/a/245394.js" async></script>

 

The above video to use CodeNotary to sign a Docker container image. Be sure to note how the video ends with all but one container verification failing, which is exactly as it should be since only one container was signed in the demo.

Risk surrounds everyone everyday. For coders, risk is especially important to pay attention to as the fallout from a compromise can cause huge damage blows to a well crafted and hard won reputation. Hacks, especially ones that could have been prevented in the first place by employing simple security measures, have a particularly nasty sting to them. This blog will take you through some of the differences and similarities between Docker and Kubernetes and how these container management tools can be maliciously altered. It will also demonstrate how you can protect yourself from using potentially compromised /images/blog and save yourself and your company a lot of time and money by avoiding the otherwise inevitable aftermath cleanup.

 

## **When Would You Use Docker or Kubernetes**

 

Containers are a way of packaging software so applications can be isolated from the rest of the system. Using them makes runs and reruns predictable and repeatable. Though both Docker and Kubernetes utilize containers, they are not the same. They can both run independently and without having to leverage the benefits of the other. However, together the are greater than the sum of their parts and much more powerful.

 

Specifically, Docker is a containerization software that can stand alone or work with other applications. It can work on any computer, anywhere and is used to run, create and manage containers on a single operating system.

 

It’s when you want to level up your applications to run multiple containers across numerous systems that Kubernetes comes in. Kubernetes (K8s) helps by managing the symphonic orchestration of containers so you don’t have to manually mess around with nailing start times, storage requirements, synchronizing communications, or dealing with component failures. In short, it reduces the operational headache of juggling a multitude of responsibilities through automation.

 

## **How a Container Image Can Be Compromised**

 

With so much complexity happening under the hood, it’s easy to understand how security concerns can mount. As the old adage goes in engineering, “The more moving parts you have, the more chances you have for something to go wrong.” At extremely high levels with some of the most complex systems out there today, think AI, it’s not even possible to check the entire system for errors until after a problem event has happened. However, it is not a recommended best practice when the choice between proactive and reactive is available.

 

But back to the topic. Regardless of the amount of security checks that are in place, if a dev is pulling code without any trust, integrity, or authenticity scheme in place, they are essentially inviting an attack to happen.

 

## **Examples of Compromised Container Images**

 

As they say, history has a tendency to repeat itself. It’s no different with repositories. Just within the last 2 years, there were several Python and npm compromises that were discovered in addition to several at DockerHub. Incredibly, some vulnerabilities remained live for up to and beyond a full year _after_ their discovery.

 

In fact, some affected servers may still be compromised as hackers could have obtained persistence by creating new backdoors during the compromised period to give themselves unknown system entry in the future. Pulling and using unvetted container /images/blog is basically like swimming with chum in shark infested waters where the sharks can come back for seconds anytime.

 

## **How CodeNotary Can Protect You From Using Compromised Images**

 

![190530 - How CodeNotary Can Protect You From Using Compromised Container Images](/images/blog/190530-How-CodeNotary-Can-Protect-You-From-Using-Compromised-Container-Images-300x181.png)

 

To protect your reputation for developing clean code, one of the things you’ll want to do is use a tool to verify the integrity of you builds and their components. CodeNotary's blockchain based tool not only has the ability to sign and verify code instantly, but it can do so across hosting services. So regardless, if you are pulling /images/blog from DockerHub, 3rd party libraries, or any other service, CodeNotary can verify them all with the same immutable integrity.

 

Additionally, there are even multiple ways to verify when first downloading an image including using the:

- Drag and drop on the CodeNotary verification page [here](https://verify.codenotary.io) , or
- Command line interface (which you can get from GitHub [here](https://github.com/vchain-us)), or
- Google Chrome Extension that auto-verify any image or file you download (which you can get [here](https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb?hl=en)).

 

For ongoing continuous verification, there are several integrations (including Docker, Kubernetes, Maven, and Jenkins, with more on the way) we have created for users which you can see [here](https://www.codenotary.io/integrations/).

 

## **How to Sign a Docker Container Image - Demo Video**

 

The below demonstration video shows all the steps for the specific use case of signing a local Docker container image so vcn, the CodeNotary CLI tool, can verify the image’s integrity. Steps shown include:

 

1. Login using vcn login
2. Check the local Docker container image
3. Sign the container image with the CodeNotary account using vcn sign
4. Verify the container image using vcn verify
5. Check the vcn pod (Kubernetes DaemonSet) log if the verification works

 

Be sure to note how the video ends with all but one container verification failing, which is exactly as it should be since only one container was signed in the demo. You can see the demo on ‘How to Sign a Docker Container Image’ [here](https://asciinema.org/a/BEHSBE7gS8Q4zB43lEKpMd47J).

 

## **Conclusion**

 

In the end, there are always risks in using software and containers, but having the right mindset, the right security practices, and the right tools from the start of the dev lifecycle can mitigate your risk exposure levels significantly.

 

If you like, you can try out CodeNotary’s Verification tool for yourself by clicking below. And if you are an open source developer, there’s a bonus, because it's free for all OSS devs to use forever.

 

 

[Yes, I Want to Test Out CodeNotary](https://dashboard.codenotary.io/auth/signup)

 

**REFERENCES**

[https://blog.containership.io/k8svsdocker/](https://blog.containership.io/k8svsdocker/)

[https://containerjournal.com/2019/01/14/kubernetes-vs-docker-a-primer/](https://containerjournal.com/2019/01/14/kubernetes-vs-docker-a-primer/)

[https://resources.whitesourcesoftware.com/blog-whitesource/docker-image-security-scanning](https://resources.whitesourcesoftware.com/blog-whitesource/docker-image-security-scanning)

[https://www.bleepingcomputer.com/news/security/17-backdoored-docker-/images/blog-removed-from-docker-hub/](https://www.bleepingcomputer.com/news/security/17-backdoored-docker-/images/blog-removed-from-docker-hub/)
