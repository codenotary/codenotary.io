---
title: "VMware vCSA 6.7 upgrade issues"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-10-23"
---

Anthony Spiteri shared an vCSA 6.7 U1 upgrade issue, few customers of us also run into. Therefore, we want to share his guideline.

The issue is, that the vCSA management interface is not showing any patch to upgrade. There is also a VMware KB article that covers a similar issue: 

[vCenter Server Appliance Management Interface might not display the vCenter Server 6.7.x patch (55683)](https://kb.vmware.com/s/article/55683)

Anthony´s article covers the whole process of fixing the vCSA URL to enable the patch management again:

[QUICK FIX – VCSA 6.7.0.10000 CAN’T UPDATE VIA URL FROM MANAGEMENT INTERFACE](https://anthonyspiteri.net/quick-fix-vcsa-6-7-0-10000-cant-update-via-url-from-management-interface/)

The trick is to add the following URL as a custom repository, do a rescan and an upgrade.

> https://vapp-updates.vmware.com/vai-catalog/valm/vmw/8d167796-34d5-4899-be0a-6daade4005a3/6.7.0.20000.latest/

After the successful upgrade future patches work fine again.
