---
title: "Connecting VMware vCSA with Active Directory"
image: /images/blog/advcsa.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-02-07"
---

Most of the enterprises running VMware vCenter connect that to Microsoft Active Directly to give more granular permissions to already existing AD user accounts.

The process of connecting VMware vCSA with Active Directory is quite straight forward, yet can be cumbersome.

Unfortunately a very annoying thing can be the misleading error message, like "Error while extracting local SSO users".  In this Blog post you will read more about issues like that and how to solve them.

# How to integrate VMware vCSA into Microsoft AD

That should be a simple step, especially since VMware integrated all settings within the vSphere Web Client. You can find the integration within the navigation / Administration / System Configuration.

![VMware vCSA with Active Directory](/images/blog/advcsa.png)

Then select the vCenter Node under Nodes on the left and select Manage / Active Directory in the main screen.

![Join VCSA AD](/images/blog/advcsajoin.png)

Click on Join and fill in the blanks.

![AD join VCSA](/images/blog/advcsajoin2.png)

**Important**: Username needs to be in User Principal Name (UPN) format, for example, Administrator@mydomain.com

When all went well, the popup disappears without any errors and you need to restart the vCSA appliance. 99% of the time, you can expect the vCSA to come up again as a member of the AD domain.

If you receive an error, you need to fix that as no reboot will help.

There are many very obvious errors like wrong credentials or that the domain could not be resolved based on a wrong dns server. But you can also encounter very mean error messages like the following: 

**Error while extracting local SSO users**

We could fix that one, by adding the missing PTR entry in the DNS server! Pretty clear given the error message, huh?

Be aware, the PTR entry of the AD domain controller not the vCSA itself.

To add the PTR entry for reverse lookups please check the following Help page: 

[https://technet.microsoft.com/en-us/library/cc844045(v=ws.10).aspx](https://technet.microsoft.com/en-us/library/cc844045(v=ws.10).aspx)

After the vCSA is back up, you still need to add the Active Directory as an identity source.

![VCSA Identity source](/images/blog/identity.png)

Administration / Single Sign-on / Configuration / Identity Source and then click the plus icon.

If that has been done successful, you can configure permissions to allow AD user to access the vCenter service as you do with local user.
