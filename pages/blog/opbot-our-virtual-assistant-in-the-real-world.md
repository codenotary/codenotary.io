---
title: "OpBot - our virtual assistant in the real world"
tags: ["Ops", "opvizor"]
date: "2016-12-08"
---

thank you [Paolo Valsecchi](https://twitter.com/nolabnoparty) for your feedback regarding our Chat OpBot.

Paolo Valsecchi is from Milan (Italy) and the author of the blog [Nolabnoparty.com](http://nolabnoparty.com/en). He has been working in the Information Technology for more than 18 years and he is currently working as System Engineer specialized in VMware, Microsoft technologies (Active Directory, DNS, DHCP, …), backup and DR solutions (Veeam, Nakivo, Altaro).

His main activity is designing and managing IT services used in companies to support their own business.

![OpBot](/images/blog/opBot-150x143-1.png)

Paolo's feedback regarding OpBot:

"OpBot is a new free tool released by Opvizor to access different vSphere environments from anywhere in the world that doesn’t require VPN to connect.

Since it doesn’t need VPN, RDP session or mobile hotspot, you can **save a lot of time** while connecting to the systems because you don’t need to wait for vSphere Web client responses.

With OpBot you can get quickly info related to the vSphere environment:

- Get VM and Host Configuration
- Get latest VM, Host performance
- Get latest VM, Host memory, disk usage

This tool can be used to **read informations** of your vSphere environment and can be also connected with [Performance Analyzer](http://nolabnoparty.com/opvizor-performance-analyzer-3-0-per-vsphere/) to obtain new remote **troubleshooting and analysis** possibilities."

### Thank you Paolo for your feedback!

Here are some FAQ's regarding OpBot:

### What about security?

When designing OpBot we always had security in mind as we are fully aware that the Bot listens to commands written into a Slack channel. Therefore, we decided to only implement read-only commands in our community edition.

1. Slack already offers security features like Teams (invite only) and private channels (invite only) – [https://slack.com/security](https://slack.com/security)
2. OpBot only listens to predefined commands (white list approach)
3. OpBot is based on a VMware vSphere API integration that has no local shell access or system calls
4. OpBot commands are not executed in a shell, but a wrapper that ignores undefined commands
5. OpBot works with a vSphere read-only account (and we encourage you to not configure an administrative account!!)
6. All chat messages are logged and Slack can be configured to deny message deletion (works like an audit log)
7. You can remove or shutdown the OpBot VM at any time and it will reconnect when powered on

If you´re interested in our upcoming enterprise edition (full functional including operations, 2-factor auth, on-premise chat option – please let us know).

### Can I manage multiple [VMware vCenter](http://www.vmware.com/products/vsphere.html) systems?

Of course, just deploy our small virtual appliance, one for each VMware vCenter, and repeat the steps for connecting to that vCenter and add another bot integration in [Slack](https://my.slack.com/services/new/bot) with the corresponding name.

### Feel free to [download](http://try.opvizor.com/opbot/) OpBot and have fun with our VMware virtual assistant!

### [Try](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) Performance Analyzer with our 30 days trial!
