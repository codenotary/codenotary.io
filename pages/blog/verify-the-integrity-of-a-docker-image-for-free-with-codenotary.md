---
title: "Verify the Integrity of a Docker Image for Free with CodeNotary"
date: "2019-05-09"
---

With CodeNotary you can finally verify that your **Docker** /images/blog are **safe, untampered, and authentic.** Thanks to **blockchain technology and smart contracts, CodeNotary** allows you to immutably sign your /images/blog so that you can always **verify their integrity** easily, instantly and for free. 

If you haven’t registered on CodeNotary.io yet, please do so at [https://dashboard.codenotary.io/auth/signup](https://dashboard.codenotary.io/auth/signup).

After creating your account, you can download the CodeNotary CLI  and with the following 4 simple steps you can be sure your /images/blog are always authentic and untampered:

 

### **1)  Sign Your Docker Images**

Login first:

**vcn login**

After login, you can sign one or all of your Docker /images/blog using:

**vcn sign docker://<imageID>**

All assets are signed as private by default, which means that only you will be able to see your name as the signer. Of course, if you decide to make the details of your signature visible to other developers, you can add the --public switch:

**vcn sign --public docker://<imageID>** 

### **2)  Verify Your Docker Images**

To verify a docker image, use the command:

**vcn verify docker://<imageID>**

Anyone can verify an image with CodeNotary CLI. Signing a file as private or public will change the information returned by the command.

If the asset was signed as private (default settings), the verify command returns:

user@opa50:~$ vcn v docker://zerotrust/parity
Asset:   docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff 
Hash:    7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
Date:    2019-05-01 14:00:35 +0000 UTC
Key:     0x2a4d3071a9d12e3886d43890d0dbaa8be60febec 
Name:    docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
Size:    270 MB
Level:   2 - SOCIAL\_VERIFIED
Status:  "TRUSTED"

If the asset was signed as public, the information about the signer is also displayed, as in the example below: 

user@opa50:~$ vcn v docker://zerotrust/parity
Asset:   docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
Hash:    7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
Date:    2019-05-01 14:00:35 +0000 UTC
Key:     0x2a4d3071a9d12e3886d43890d0dbaa8be60febec
Name:    docker://7d2d42157acdabf4ae46a4815af9037179c871a3b20df628c997af5d452bd7ff
Size:    270 MB
Company: vChain, Inc.
Website: [https://www.vchain.us](https://www.vchain.us/)
Level:   2 - SOCIAL\_VERIFIED
Status:  "TRUSTED"

If verification fails, i.e. the image you are verifying was not signed, then a non-zero status error code will appear:

**Error: unable to verify hash: no matching asset for hash 
1d14d4efd0a2b2dbbb3ee08c2e370c8a0eafe74b226643880b9f6d418f1224b1** 

### **3)  Verify Your Container Image Before Running**

Once you signed your container /images/blog, you can make image integrity a pre-requisite to your "docker run" command with 1 step:

**\# run a Docker image only when it can be successfully verified** 

**vcn verify docker://hello-world && docker run hello-world**

### **4)  Verify the Integrity of Running Docker Images**

Additionally, CodeNotary allows you to verify the /images/blog of your containers during runtime. Here’s how to do that:

**docker ps --format {{.Image}} | xargs printf -- 'docker://%s ' | xargs vcn verify**

 

## **Conclusion**

That's how easy it is to sign and verify your Docker /images/blog and make sure only untampered and authentic /images/blog run in your environments. If you haven’t done so yet, get a **free** [CodeNotary.io](https://www.codenotary.io/) account and try it out yourself.

Thanks to the innovative use of **blockchain and smart contract technology**, you now can iterate faster, more securely and at lower costs while **guaranteeing the safety of your committed assets**. Docker and the rest of the compromised communities would have saved themselves and their users a lot in remediation costs and headaches if they had simply been using the CodeNotary vcn tool.

 

See how you can protect your Docker /images/blog with CodeNotary by clicking below to start your free trial. And bonus, it's free for OSS and non-commercial users.

 

[Sign Me Up!](https://dashboard.codenotary.io/auth/signup)
