---
title: "Protect Yourself from the Recent dockerhub.com Attack"
image: /images/blog/1280px-Docker_container_engine_logo.svg.png
date: "2019-05-01"
---

![](/images/blog/1280px-Docker_container_engine_logo.svg.png)

Last week's **[dockerhub.com attack](https://news.ycombinator.com/item?id=19763413)** affects hundreds of thousands of accounts and exposes their containers to malicious code. We at CodeNotary publish open source software too and wanted to make sure our containers were unaffected. 

Here’s how we did it:

## **Verify Container Authenticity and Integrity**

1. 1. 1. Create a **free** CodeNotary account
        2. Sign the local copy of your Docker container image:
            
            **vcn sign docker://hello-world**
            
        3. Download your container image from [dockerhub.com](http://dockerhub.com/):
            
            **docker pull hello-world**
            
        4. Ensure the container image you pulled from [dockerhub.com](http://dockerhub.com/) has been signed with CodeNotary:
            
            **vcn verify docker://hello-world**
            
            If the output looks like the following, you can be sure that your code has not been tampered with:
            
            user@opa50:~$ vcn v docker://zerotrust/parity
            Asset:   docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
            Hash:    7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
            Date:    2019-05-01 14:00:35 +0000 UTC
            Key:     0x2a4d3071a9d12e3886d43890d0dbaa8be60febec
            Name:    docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
            Size:    270 MB
            Company: vChain, Inc.
            Website: [https://www.vchain.us](https://www.vchain.us/)
            Level:   2 - SOCIAL\_VERIFIED
            Status:  **"TRUSTED"**
            

## **Enable Continuous Container Integrity Monitoring with the vcn-watchdog**

Moreover, to avoid the risk of leaking any malware-injected software to our users and customers, we built a continuous integrity verification monitoring tool for our containers. The sidecar vcn-watchdog, we released on GitHub as an open source project constantly protects from unwanted, infected Docker container /images/blog. 

Integrated with Docker, the watchdog continuously checks the container's integrity against its known, **CodeNotary**\-signed image. If a container fails the verification check, an alert is sent to, in our case, our Slack account.

This is how you can quickly enable continuous integrity monitoring for your containers:

1. 1. 1. Sign your locally stored container with CodeNotary:
            
             **vcn sign docker://ImageId** 
            
        2. Check out https://github.com/vchain-us/vcn-watchdog on your server. The tool continuously verifies the integrity of your containers:
            
             **git clone https://github.com/vchain-us/vcn-watchdog.git** 
            
        3. Edit the `verify` file and set the alerting/monitoring tool you are using (see the following instructions)
        4. Make sure /var/run/docker.sock is accessible
        5. Run with the following command on your server
            
             **docker-compose build && docker-compose up** 
            

To modify the `verify` file, hook up your alerting tool into the err() function. If you use Slack as we do, please do the following:

1. 1. 1. Create a Slack Bot (Slack documentation **[here](https://get.slack.help/hc/en-us/articles/115005265703-Create-a-bot-for-your-workspace)**) 
        2. Use the following code:
            
            **function err() {
                echo "Container ${1} (${2}) verification failed" >&2
                curl -q -X POST \\
                    -H 'Content-type: application/json' \\
                    --data "{\\"text\\":\\"Container ${1} (${2}) verification failed\\"}" \\
            ** **"https://hooks.slack.com/services/$TOKEN/$KEY" > /dev/null 2>&1}** 
            

Once the set up is complete, if the verification fails, you will see the below message pop up in your Slack Bot notifications:

![Slack Bot-CodeNotary-Docker Sync Alert Example](/images/blog/002_Alerting-on-Slack-example-1024x172.png)

**Your container has been verified and is safe if you do not see the alert message.**

If you prefer to complicate your life and execute 13 time-consuming, manual steps every time you suspect you have been hacked, **[Madhuakula](https://blog.madhuakula.com/some-tips-to-review-docker-hub-hack-of-190k-accounts-addcd602aade)** outlined a step-by-step guide for coders who prefer that route. However, most don't as Joona Hoikkala tweeted recently.

![Twitter Post](/images/blog/Screenshot-2019-04-29-21.02.23.png)

Start using vcn-watchdog, create your CodeNotary account today:

 

[Start Your Free Account](https://www.codenotary.io)
