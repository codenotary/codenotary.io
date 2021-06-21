---
title: "opvizor Health Analyzer - VMware Datastore report"
image: /images/blog/datastore_report2-300x300.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-04"
---

# opvizor Health Analyzer - VMware Datastore report

As we started about a week ago with posts about our report capabilities, here comes the next one - the VMware datastore report. opvizor Health Analyzer is not just about finding and solving issues, it is also about reporting the vSphere environment and the daily changes.

All functionality is accessible as-a-Service and on-premise. Please either [register](https://www.opvizor.com/register) for SaaS or contact us for [on-premise](http://try.opvizor.com/onpremise)

![VMware datastore report](/images/blog/datastore_report2-300x300.jpg)

We want to continue with the **VMware Datastore report** that is typically used for two scenarions:

- Report of the datastore usage in terms of data amounts and number of virtual machine VMDK files
- Get an idea about the top datastore consumers and where they are located

You can configure the content of the report and schedule the creation within the report settings. It will be sent to you by email and you can chose the report format.

![VMware datastore report - configuration](/images/blog/datastore_report1.jpg)

Last but not least, although you can access and read the VM report information with real cleartext data, our software is fully aware of anonymization. Therefore even when uploading anonymized data, you get the real data in your inbox. That is possible as our local opvizor service is owning the anonymization convertion data and is deanonymizing all report content locally (in your datacenter) before sending it out via your local mail server. Your Host names, VM names, IP addresses, Portgroup names never leave your datacenter.

As the VMware datastore report can be generated as HTML, PDF or CSV file there is no limitation in further processing or customizing to your needs.
