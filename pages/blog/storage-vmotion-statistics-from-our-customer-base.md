---
title: "Storage vMotion Statistics from our customer base"
tags: ["Ops", "opvizor"]
date: "2015-09-02"
---

> It would be cool to get an idea what an average customer transfers each day using svMotion - we check that and give you some insights within one of the future blog posts.

Well, we checked the storage vMotion statistics over the last 30 days and came up with some interesting numbers.

- about 100  infrastructures out of more than 2000 had active storage vMotion migrations during these 30 days
- about 60% were triggered by Storage DRS
- 5855 svMotion events in total
- 179 GB data transfer on average per svMotion
- most of the DRS migrations were triggered during the night (most probably during backup windows and the backup data transfer)
- most svMotion transfers were completed within an hour

![Statistics](/images/blog/11442225495_9d9cc1cbc4.jpg)

Photo courtesy of [LendingMemo](https://www.flickr.com/photos/92802060@N06/11442225495/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

> More than a year ago the first customer ran into a major issue using Storage vMotion. Honestly in the beginning he didn't know that svMotion triggered by Storage DRS was the reason. He found out thanks to our vMotion and svMotion report and was surprised how much data was transferred each day and especially each night.  

> That resulted into a massively slowed down backup of his virtual machines as the storage system and the hosts were mainly utilized by the relocation activities. Checking the daily relocation data transfer made it very clear within minutes that Storage DRS was configured far to aggressive. A small change reducing the automation level solved all the issues and reduced the backup performance several hours.

We mentioned that issue in the last blog entry about storage vMotion troubleshooting and the statistics confirm that most storage DRS activities happen during the backup time. 

![Storage vMotion statistics - svMotion Report](/images/blog/wpid7593-wpid-svmotion.png)

You should check your own environment with the vMotion/Storage vMotion report of Health Analyzer that shows you the exact information about all vMotion or in this case Storage vMotion activities and there impact of network and storage due to the data migration.

Let opvizor automatically create and send out this Storage vMotion report and many others in minutes without any scripting.

**[Sign Up for opvizor!](https://www.opvizor.com/register "Sign Up for opvizor!")**
