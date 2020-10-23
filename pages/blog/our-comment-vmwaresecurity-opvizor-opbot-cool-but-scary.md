---
title: "Our Comment VMware/Security: Opvizor OpBot cool but scary?"
tags: ["Ops", "opvizor"]
date: "2017-07-20"
---

[Chris Nakagaki](http://www.twitter.com/Zsoldier) posted about our OpBot and raised some fears about security. Please find the complete article from Chris [here](http://tech.zsoldier.com/2017/07/vmwaresecurity-opvizor-opbot-cool-but.html).

Comment by Dennis Zimmer, CEO of Opvizor

> We totally agree as there is no 100% protection for misconfiguration or staff that goes rogue. Therefore, it's important to keep the management platforms audited and segmented.

> We build our products with all security in mind. OpBot allows to use on-premise chat as well, blacklist commands or disable certain modules. Furthermore, we have integrations for 2 key factor authentication if needed. So if you want to use OpBot for read-only actions only, never configure a vCenter user with more permissions. To leverage full functionality, just let us know and we can support you to reduce permissions to the required minimum.

> Nevertheless, as Chris mentioned there are more and more tools that are build and released to simplify DevOps and Ops and allow remote access using your mobile. You can ignore it for some time, but it will be the requirements of the future workspace. Check out the products mentioned, like HyTrust Cloud Contol, NSX aso. to make sure your environment is ready for the future.  

Thank you very much for this post Chris and please find here some additional information.

[You can find more information about OpBot here](https://opvizor.atlassian.net/wiki/display/OPBOT/QuickStart)

## Here is Chris' consideration about OpBot and security:

First off, [OpBot](http://try.opvizor.com/opbot/) from Opvizor makes it very clear that you should only grant it's integration account read-only access.  You can do 'destructive' [PowerCLI](https://www.vmware.com/support/developer/PowerCLI/?src=vmw_so_vex_cnaka_471) commands by passing login info via slack, but also not recommended.  As much as they have created an immensely useful tool, it also is somewhat of a pandora's box.  It's brought to light a security hole that can be difficult to secure at scale.  Currently Opvizor is the only one that I know of that makes this type of appliance, but that doesn't stop the many possible clones of this type of tech.

Basically what's happened is that it's a method in which a malicious VMware admin could deploy said appliance, give it an elevated service account (AD or otherwise) and no one would be any the wiser.  Now to be clear, a VMware admin should never be deploying things into a datacenter w/o a proper change/audit control process.  In the very least, anything deployed should be well documented and known.

NSX helps in this aspect w/ micro-segmentation.  Everything placed into service receives a specific policy and can communicate w/ only what is needed.  However, it'll only help as far as the security is implemented.  If complete outbound internet is open as a 'standard', then you've effectively enabled OpBot or things like it unfettered access. First knee-jerk reaction is likely blocking Slack connectivity unless specifically enabled for said purpose.  However, this only guarantees to a "Slack", this does not protect from slack clones or the like.

![OpBot Security](/images/blog/SlackBot-Security-New-Page.png)

Photo courtesy of [Chris Nakagaki](http://tech.zsoldier.com/2017/07/vmwaresecurity-opvizor-opbot-cool-but.html)

## Chris also took a lot of energy in a solution for this issue:

It's not super simple, but here are some thoughts (for VMware solutions specifically):

1. Audit/Change Control over Identity Management System (Active Directory) and whatnot.

1. Any new service/shared account created should be immensely scrutinized.
2. [Change Auditor](https://www.quest.com/change-auditor/) is a pretty good tool for this.

3. Audit/Change Control to "Roles" in vCenter ([Log Insight](http://www.vmware.com/products/vrealize-log-insight?src=vmw_so_vex_cnaka_471) can help somewhat in this aspect, [Hytrust CloudControl](https://www.hytrust.com/products/cloudcontrol/) would give you a workflow engine in addition to audit capabilities.)

1. Basically any account granted an 'admin-type' role should be alerted upon w/o an a peer-reviewed change control system.
2. Any new role implemented should also be scrutinized for scope and alerting/monitoring put in place for 'high-risk' type roles.
3. Any change to role permissions scrutinized as well.

5. Audit/Change Control over passwords for 'service/shared' accounts. ([Hytrust Cloud Control](https://www.hytrust.com/products/cloudcontrol/) includes password vaulting for ESXi hosts)

1. Password Repo such as [LastPass](http://lastpass.com/)/[1Password](https://1password.com/)/[OneIdentity](https://www.oneidentity.com/products/password-manager/), etc.
2. No single or group of people should actually EVER know by memory service/shared account passwords.
3. Passwords should be changed based upon audit of password repo access when an employee leaves the company.

- This would hopefully mitigate a time-consuming process of changing all passwords that said employee may or may not have used.

5. Password Repo should have complete audit trail as well as alerts for specific types of access.

1. More advanced, you could use the password repo system to change passwords automatically after a 'manual' checkout scenario.
2. [HyTrust](https://www.hytrust.com/products/cloudcontrol/) does this for ESXi root passwords automatically.

7. Network Security/Audit/Change Control (Palo Alto App ID Security)

1. Subscribe to the mantra of trust nothing in or out.
2. Peer Review all changes.
3. Access to vCenter via [NSX](https://www.vmware.com/products/nsx.html?src=vmw_so_vex_cnaka_471) security policies audit/change workflow.

1. Anything allowed access to vCenter should be audited.

5. [Palo Alto Firewalls](https://www.paloaltonetworks.com/products/secure-the-network/virtualized-next-generation-firewall/vm-series) can add an extra layer of heuristics type security to block anything not defined as allowable outside of just ports using something like app id.
