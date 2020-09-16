---
title: "Free Continuous Integrity Verification of your Docker Containers"
image: /images/blog/Screenshot-2019-05-10-14.05.43-291x300.png
date: "2019-05-10"
---

 

![Docker Container Tetris](/images/blog/Screenshot-2019-05-10-14.05.43-291x300.png)

 

In our last blog ([here)](https://www.codenotary.io/verify-the-integrity-of-a-docker-image-for-free-with-codenotary/), we showed how to sign and verify your build code. With an established baseline, we’ll move on to the really cool stuff that will make your life a whole lot easier. Below are the few, simple steps you can take to get next level, free continuous integrity verification of your [Docker](https://hub.docker.com/) containers. This way as a developer anytime you execute a Docker run command for any over your numerous containers, you can be sure your code is 100% safe the way you intended it to be.

 

## **VCN Watchdog for Container Protection**

 

We developed VCN Watchdog so you can maintain continuous verification of your Docker runtime environment. Watchdog continuously monitors your environment in order to prevent unknown and/or compromised containers from being executed.

 

### **How to use VCN Watchdog**

 

One of the great things about VCN Watchdog is it can monitor any functionality you want and alert you accordingly.

 

Check out the project and edit the `verify` file by customizing your monitoring alerts to whatever you want.

 

You will need to make sure your /var/run/docker.sock is accessible.

 

Then run this on your server:

 

 

**docker-compose build && docker-compose up -d**

And you are good to go.

 

### **Design of VCN Watchdog**

 

This tool is designed as a sidecar for your existing Docker runtime environment. All running containers are continuously checked via CodeNotary vcn for integrity. If a container fails the verification check, then a customizable alert is triggered and you will be notified.

 

### **Conclusion** 

 

That’s it. Now you know how to get **free continuous integrity verification** of your Docker containers. It really is that simple.

 

Thanks to the innovative use of **blockchain and smart contract technology**, you now can iterate faster, more securely and at lower costs. Gaining immutable integrity using the CodeNotary vcn tool saves you from a lot of headaches and remediation costs. Additional ways CodeNotary benefits you include:

- Increased Customer Confidence
- Increased Productivity/Less Remediation
- Never Before Available Customer Insights

 

See how you can protect your Docker builds continuously with CodeNotary by clicking below to start your free trial. And bonus, it's free for OSS and non-commercial users.

 

[Sign Me Up!](https://dashboard.codenotary.io/auth/signup)
