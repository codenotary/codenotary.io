---
title: "VMware vSphere Webclient in English or localized"
image: /images/blog/wpid-webclient.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-08-31"
---

Working with customers and VMware vSphere infrastructures all over the world it can be very confusing and annoying to find yourself in a localized vSphere Webclient. Or maybe the way around when you want to use a German or Japanese version instead of the English one.

When nothing is configured in the URL when opening the VMware vSphere webclient the application automatically uses the systems localization.

But it's easy to change it to your favorite language by adding a parameter to the URL.

These are the currently supported language localizations for the Webclient

- English: en\_US
- German: de\_DE
- Japanese: ja\_JP
- Simplified Chinese: zh\_CN
- French: fr\_FR
- Korean: ko\_KR

Instead of opening the URL https://vcenter-server:9443/vsphere-client, you add /?locale=en\_US or any other of the above mentioned strings, resulting in https://vcenter-server:9443/vsphere-client/?locale=en\_US

![VMware vSphere Webclient in English](/images/blog/wpid-webclient.jpg)

Just select you favorite language and change the vcenter-server string into your VMware vCenter DNS name or IP address. Of course if you work with a single ESXi host, you can use its IP or DNS.

- English: https://vcenter-server:9443/vsphere-client/?locale=en\_US
- German: https://vcenter-server:9443/vsphere-client/?locale=de\_DE
- French: https://vcenter-server:9443/vsphere-client/?locale=fr\_FR
- Japanese: https://vcenter-server:9443/vsphere-client/?locale=ja\_JP
- Korean: https://vcenter-server:9443/vsphere-client/?locale=ko\_KR
- Chinese:https://vcenter-server:9443/vsphere-client/?locale=zh\_CN

Enjoy your Webclient
