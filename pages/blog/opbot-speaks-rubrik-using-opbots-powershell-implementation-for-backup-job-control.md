---
title: "OpBot speaks Rubrik - Using OpBot´s PowerShell implementation for Backup job control"
tags: ["Ops", "opvizor"]
date: "2017-02-21"
---

As hundreds of active OpBot user already know, how simple and secure your VMware vSphere environment can be accessed from any device even your mobile.

Some of our customers approached us to simplify one of their most important that was missing till now: **Backup job control**. 

It didn´t took us long to achieve that goal and [OpBot](http://try.opvizor.com/opbot) was live supporting [Rubrik](http://www.rubrik.com)´s backup solution at our customer Galliker Transport (Headquarter: Switzerland).

[![Get Rubrik Backup Status](/images/blog/rubrik_Backupstatus.png)](http://try.opvizor.com/opbot)

OpBot has a complete PowerShell Core implementation and can be simply enhanced by custom PowerShell scripts. As [Rubrik published a PowerShell Module](https://github.com/rubrikinc/PowerShell-Module), it was straightforward to train OpBot to speak to Rubrik´s API.

Thanks to [Chris Wahl](https://twitter.com/@ChrisWahl) to drive the Rubrik PowerShell module and [Chris Gurley](https://twitter.com/cmgurley) for the support.

Of course it´s possible to implement much more functionality that is accessible using OpBot, but we started with the most important part, to show all succeeded, failed and running backup jobs of the since 24 hours.

Rubrik is just a starting point and we can implement any powershell module that is available from the backup vendor or connect to accessible API´s in a very fast manor.

[![Galliker Transport AG](/images/blog/Galliker_Transport_Logistik_BottomPicture_002-l.jpg)](https://www.galliker.com)

[](https://www.galliker.com)

[Photo courtesy of](https://www.galliker.com) [Galliker Transport AG](https://www.galliker.com/enUS/about-galliker/company.htm)

**André Dousse,** who makes sure that all **[Galliker Transport](https://www.galliker.com)** IT systems are running smooth made a nice statement after using the implementation for 2 days:

> OpBot is a highly innovative product that optimizes the way we access infrastructure runtime information. The ability to check our Rubrik Backup Jobs in seconds from any device from anywhere is just one of many examples OpBot make our IT admin life easier on a daily basis.

If you like to use OpBot to control your VMware vSphere and your backup solution please don´t hesitate to contact us.

## If you want to benefit from our OpBot Chat2Infrastructure product, start your trial here: [OpBot Download](http://try.opvizor.com/opbot)
