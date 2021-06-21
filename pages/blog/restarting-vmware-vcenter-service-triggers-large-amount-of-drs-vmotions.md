---
title: "Restarting VMware vCenter service triggers large Amount of DRS vMotions"
image: /images/blog/vmotionreport-300x300.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-03-27"
---

 

A customer of us was affected by a large number of DRS vMotions and could find that using our vMotion/Storage vMotion report. That report tracks all vMotion and Storage vMotion activities and can be a great help to find large amounts of VM migrations and large vmdk data transfers. ![vMotion and Storage vMotion report restarting VMware vCenter](/images/blog/vmotionreport-300x300.png)

He noticed that all the vMotion tasks were triggered by the system (DRS) and at a certain time. Actually some minutes after **restarting VMware vCenter**.

Our support could help and we pointed the customer to the following [VMware KB article 2107950](http://kb.vmware.com/kb/2107950)

To check your vMotion/Storage vMotion activities try our report yourself: [Sign Up to opvizor Free Healthcheck](https://www.opvizor.com/register/ "Register – Sign up for the #1 VMware Health analyzer")
