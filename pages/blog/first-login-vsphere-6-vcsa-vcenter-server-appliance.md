---
title: "First Login vSphere 6 – vCSA (vCenter Server Appliance)"
tags: ["Ops", "opvizor"]
date: "2015-04-14"
---

When login in to the vSphere Webclient for the first time there is one important thing to keep in mind: make sure to use the administrator Account! In my case it’s: vsphere6.local\\administrator! If using the the root-account to login, it is possible, but you can´t be sure that you have the required priviliges. Unfortunately I ran into that issue as I intuitively logged in using root and not the administrative account - so make it better.

[![vmware vcenter single sign on login](/images/blog/1_login.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/1_login.jpg)

## Assigning licenses

When logging into **vCenter Server Appliance** for the first time you find a notification at the top of the website that tells you about licenses to expire and it offers quick access to the licensing view of the webclient. You don’t necessarily have to assign a license. If you just want to use your installation for a short period of time (no longer than 60 days), feel free to skip this step. If you’re planning to keep it for some more time then you should assign a license to the vCenter.

[![license vsphere](/images/blog/2_license.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/2_license.jpg)

60 Days of trial are a good start, but I need the vCenter Server Appliance for longer. To do so, I use the “Manage your licenses” at the top in the notification the webclient sends me to the licensing tab.

[![vCenter Server Appliance add license](/images/blog/3_addlicenses.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/3_addlicenses.jpg)

As you might have noticed I added several license keys at once. I will use them later on after adding ESXi hosts to the vCenter. For now I only assign the vCenter license at _Assets_ in the license category. And right click my new installed vCenter 192.168.99.153 and click _Assign License…_ to switch the license from the Evaluation License to the one I added before.

[![add vcenter license](/images/blog/4_addlicense_vcenter.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/4_addlicense_vcenter.jpg)

There’s a notification to let you know that some features will become unavailable when assigning my license. Of course this is only the case when changing to a license with less features.

[![license change vcenter](/images/blog/5_licensechange.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/5_licensechange.jpg)

In my case it was the license for the vSphere Storage Appliance. That’s totally fine for me as I don´t need it in this environment.

## Summary

The installation of the vCenter Server Appliance 6.0 is finished with these last steps. The next tasks is the installation and connection of VMware ESXi hosts to the vCenter.
