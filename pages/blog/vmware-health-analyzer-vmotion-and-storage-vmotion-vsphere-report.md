---
title: "VMware Health Analyzer - vMotion and Storage vMotion vSphere report"
image: /images/blog/wpid-vmotion_report-300x289.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-06-05"
---

After some time publishing posts with a variety of things, its time to get back to our report capabilities again. Here comes the next one - the VMware vMotion report and VMware Storage vMotion Report. Actually we bundled these reports together but you can change the content within the reports settings. As you know in the meantime Opvizor Health Analyzer is not just about finding and solving issues, it is also about getting you lots of vSphere report functionality tracking the daily changes.

All functionality is accessible as-a-Service and on-premise. Please either [register for SaaS](https://www.opvizor.com/register "register for SaaS") or contact us for [on-premise](http://try.opvizor.com/onpremise "on-premise")

If you're not already aware of, we offer some [monthly pricing options](https://www.opvizor.com/editions/ "monthly pricing options")!

![vSphere Report - vMotion statistics](/images/blog/wpid-vmotion_report-300x289.jpg)

The typical vSphere Report for VM Relocation is divided into a summary and a task detail list:

- vMotionStorage vMotion Statistics
- vMotionStorage vMotion Tasks

![vSphere Report - svMotion statistics](/images/blog/wpid-svmotion_report-300x289.jpg)

\[optin title="Get more vSphere hints" text="Get more VMware vSphere hints and recommendations" buttontext="Sign Up for news" successMessage="Message has been submitted successfully." errorMessage="Failed to send your message. Please try later." invalidEmailMessage="Your email address does not appear valid." border="false" collectfirstname="false" collectlastname="false" collectphone="false" collectcompany="false"\]

Going into detail of our **vSphere Report** about vMotion and Storage vMotion (sVMotion) activities we track the following information:

- Virtual Machine
- Source
- Destination
- Task Start Time
- Task Stop Time
- Task Duration
- Triggering User
- Data Transfer for Storage vMotion

You can configure the content of the report and schedule the creation within the report settings. It will be sent to you by email and you can chose the report format.

Last but not least, although you can access and read the VM report information with real cleartext data, our software is fully aware of anonymization. Therefore even when uploading anonymized data, you get the real data in your inbox. That is possible as our local opvizor service is owning the anonymization convertion data and is deanonymizing all report content locally (in your datacenter) before sending it out via your local mail server. Your Host names, VM names, IP addresses, Portgroup names never leave your datacenter.

## Troubleshooting Storage vMotion

When it comes to troubleshooting vMotion and Storage vMotion the most important metrics are duration and amount of data transferred.

While vMotion can vary a lot based on the amount of memory used by the virtual machine and the data change rate, Storage vMotion can take forever based on the used disk space. Transferring 100GB can take a very short amount of time if a high bandwidth is available or extremly slow if there is a gateway, WAN or any other slow connection in between. Broken ports and cables can reduce the data transfer rate massively. Therefore it's important to watch the Storage vMotion process and how long the data transfer takes. 

Slow data transfer means you should not even think about automatic storage migration - Storage DRS. 

We detected so often situations at customer side, that Storage DRS was configured too aggressive and was hurting the performance massively especially during backup hours.

## vSphere Report Generation Options

All vSphere reports can be generated as HTML, PDF or CSV file there is no limitation in further processing or customizing to your needs. You can even use our RESTful API, that is also accessible via PowerShell, to create and download reports or even customize completely to your needs.

Please take a look by yourself as seeing is believing - [Register now](https://www.opvizor.com/register "Register now")
