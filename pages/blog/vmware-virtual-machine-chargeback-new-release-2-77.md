---
title: "VMware Virtual Machine Chargeback - new release 2.77"
tags: ["Ops", "opvizor"]
date: "2015-09-14"
---

We´re excited to announce the release 2.77 of Health Analyzer that includes a new feature - **Virtual Machine Chargeback**

Over the last months we received so much feedback from our customers to include a feature to include billing of configured VM resources to the usage report. Here we go.

The new features of the 2.77 release:

- Chargeback feature in the Used Resources Report
- Option to hide some columns in Used Resources Report
- Option to see values in GB instead of MB in Used Resources Report
- Custom attributes set in VM's now availale in the Used Resources Report
- NIC type of the Virtual Machine now present in the Inventory Report (virtual machine section)
- Express installation procedure in Opvizor Service

To use the VM chargeback functionality you just need to configure the Usage Report with the gear icon top right. Btw. most customers further process the report content using the CSV files instead of HTML or PDF format.

[![Configure Virtual Machine chargeback](/images/blog/wpid-usage_report_csv.png)](http://try.opvizor.com/health-analyzer/)

Within the configuration of the Usage Report, you can start selecting the time range you want to show or chargeback.

[![VM chargeback timerange](/images/blog/wpid-usage_timerange.png)](http://try.opvizor.com/health-analyzer/)

You can chose between 1 week, 4 weeks or 3 months.

[![vSphere chargeback cost setting](/images/blog/wpid-usage_chargeback.png)](http://try.opvizor.com/health-analyzer/)

Then you can select if you want to organize the report structure by VM folders (i. e. departments as folder structure) and to omit average usage to simplify the structure.

The most important part is the chargeback section itself where the Costs need to be set for CPU count, Memory amount and disk space.

If you don´t use VM folder to provide a department or cost center structure, you can also use Custom Attributes of your virtual machines and filter them.

[![VM chargeback by resource configuration](/images/blog/wpid-usage_report.png)](http://try.opvizor.com/health-analyzer/)

Clicking on Generate Report or setting the automatic scheduler to send the report every week creates a easy to read report based on your settings and filter. 

This nice new feature can get you some money back or at least show your heavy consumer the real costs involved.

All active cloud customers get that feature automatically since last Friday. The on-premise user will be informed by our support how to upgrade.

If you´re not a Health Analyzer user already you can run our software in minutes - just register here:

Register for [vSphere Health Analyzer](http://try.opvizor.com/health-analyzer/ "vSphere Health Analyzer")
