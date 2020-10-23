---
title: "VMware Storage vMotion tracking and troubleshooting"
tags: ["Ops", "opvizor"]
date: "2015-08-07"
---

Everybody loves [VMware's Storage vMotion](https://www.vmware.com/products/vsphere/features/storage-vmotion "VMware's Storage vMotion") as it's a awesome functionality that is probably used thousand times each second throughout all VMware environments. It would be cool to get an idea what an average customer transfers each day using svMotion - we check that and give you some insights within one of the future blog posts.

![Tight Squeeze](/images/blog/8025009172_10f2f672c5.jpg)

Photo courtesy of [SidPix](https://www.flickr.com/photos/22357152@N02/8025009172/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

More than a year ago the first customer ran into a major issue using Storage vMotion. Honestly in the beginning he didn't know that svMotion triggered by Storage DRS was the reason. He found out thanks to our vMotion and svMotion report and was surprised how much data was transferred each day and especially each night.  

That resulted into a massively slowed down backup of his virtual machines as the storage system and the hosts were mainly utilized by the relocation activities. Checking the daily relocation data transfer made it very clear within minutes that Storage DRS was configured far to aggressive. A small change reducing the automation level solved all the issues and reduced the backup performance several hours.

[![storage vMotion tracking - report](/images/blog/wpid-svmotion.png)](https://www.opvizor.com/register)

As you can see in the sample report, opvizor Health Analyzer shows you the exact information about all vMotion or in this case Storage vMotion activities and there impact of network and storage due to the data migration.

Let opvizor automatically create this Storage vMotion report and many others in minutes without scripting

**[Sign Up for opvizor!](https://www.opvizor.com/register "Sign Up for opvizor!")**
