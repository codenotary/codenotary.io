---
title: "Veeam Backup Enterprise Manager Integration"
image: /images/blog/veeam_dashboard-sm.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-10-10"
---

We received lately more and more customer feedback to support [Veeam Backup Enterprise Manager](https://helpcenter.veeam.com/evaluation/backup/vsphere/en/em_setup.html) within our Performance Analyzer product. Today we're happy to announce support for Veeam B&R connecting to Veeam Backup Enterprise Manager.

![Veeam Backup Enterprise Manager](/images/blog/veeam_dashboard-sm.png)

The integration is agent-less and our virtual appliance connects to Enterprise Manager using the public API interface. You can find a [guideline here](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/146702337/Integration+Veeam+Backup+Enterprise+Manager) - please reach out to our sales or support team if you're interested in the feature patch or just use the chat on our website.

## Add your Veeam Backup Enterprise Manager

After applying the feature patch, you can find a new entry under Infrastructure named [Veeam](http://www.veeam.com) Backup EM.

![Veeam B&R Patch](/images/blog/veeam_admin.png)

Then you can add the Enterprise Manager and the credentials:

![Veeam B&R Grafana](/images/blog/veeam_admin2-1.png)

Make sure to test the connection after adding the Veeam Backup Enterprise Manager and to load the Veeam Backup EM Dashboard.

![Veeam B&R Grafana](/images/blog/veeam_dashboard.png)

When you are done loading the Veeam Dashboard, you can find it as Veeam B&R and select the Enterprise Manager you want to monitor. 

If you haven't done so already, download and setup Performance Analyzer in some minutes and get VMware vSphere, DataCore, NetApp, Windows, Linux, MS SQL, Veeam and much more in one superior platform.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41.png)](http://try.opvizor.com/perfanalyzer)
