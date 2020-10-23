---
title: "VMware vSphere 6 API Limitation when querying performance Data Introduction"
tags: ["Ops", "opvizor"]
date: "2015-05-15"
---

While running opvizor Health Analyzer, that is a software that connects to the VMware vSphere API, to collect configuration, performance and log data at a customer site, we noticed a change in vSphere 6 regarding the number of concurrent connections that was limited our crawling activities. 

It took us some time to notice that limitation as most of our VMware vSphere 6 customers till then didn't ran into any issues. 

But when using Health Analyzer in a larger vSphere infrastructures it can likely happen that we're affected by that new (and default) vSphere 6 API limitation and stop crawling performance data. Actually every action or application which requesting performance data via the vCenter might run into this little “trap” when the limit is reached. 

You can guess the limitation as vCenter is throwing an error “Request processing is restricted by administrator.” (or for the german vCenter localization “Dieser Vorgang wird vom Administrator eingeschräkt - Wenden Sie sich an Ihren Systemadministrator.”). That doesn't make too much sense if a full permission administrative account is used.

The error message itself is not very helpful but this [VMware KB article](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2107096 "VMware KB article") is.

In this article I will explain what this new setting is about and how to change it threshold.

## What is this all about?!

It’s all about a new “Feature” in VMwares new vSphere 6.0. To be more specific it’s located in the vCenter and it’s a setting that limits the maximum performance metric database queries to a threshold of 64. Which is fairly low when you are planning to collect performance data for your whole vSphere. As VMware says on their knowledgebase this features should protect your vCenter from getting spammed by those requests, because that kind of spam could slow/shut down the performance of the vCenter.

As for using opvizor (and a lot of other use-cases) it makes totally sense to raise or disable this threshold. opvizor itself is having a way to adjust the load that it’s causing when collecting data. As a result of this adjustment it’s not an issue to request a lot of performance-data, which is enabling our software to provide all those nice and nifty features and reports, as predictive analytics & issue prevention (still love to say this. ;) ) and a lot of stuff that can save you hell of your time while working as an administrator.

## How to detect if I’m affected by this?!

It’s pretty easy. Either while sending a request using the API or when attempting to view a performance chart for some objects you get an error-message telling you that the “Request processing is restricted by administrator.”. If you want to check if this might have happened in your vSphere, just check your vCenters vpxd.log for entries that have the following scheme:

_The query size of **N** metrics exceeded the config.vpxd.stats.MaxQueryMetrics limit of 64 metrics. Dropping._

The amount of 64 is the default value, so it should be always the same as long as you didn’t change it.

You can find the vpx.log either in _%ALLUSERSPROFILE%VMWarevCenterServerlogsvmware-vpxvpxd.log_ on your windows based vCenter Server or in _/var/log/vmware/vmware-vpx/vpxd.log_ on your vCenter Server Appliance.

## How to change this!?

This “Feature” is controlled via two settings on the VMware vCenter (Appliance).

![VMware vSphere 6 API Limitation](/images/blog/wpid-01.png)

The needed changes to the vSphere 6 API limitation can be found within the advanced configuration setting called _config.vpxd.stats.MaxQueryMetrics_ to change this setting follow this steps:

- Login to your vCenter Server using the the Webclient
- Go to the Advanced Settings of the vCenter (vCenter Inventory Lists -> vCenter Servers ->  Select the vCenter -> Manage Tab ->  Settings -> Advanced Settings)

![config.vpxd.stats.MaxQueryMetrics ](/images/blog/wpid-02.png)

- Make sure that the key _config.vpxd.stats.MaxQueryMetrics_ doesn’t exist (per default this key it not there and that means it is hidden set to 64 by default)

![Edit the settings vSphere 6](/images/blog/wpid-03.png)

- Click “Edit…” to add the new Key

![vSphere 6 config.vpxd.stats.MaxQueryMetrics](/images/blog/wpid-03_5.png)

- Add the key _config.vpxd.stats.MaxQueryMetrics_ with the value of your choice. For me it’s -1 to simply delete the limit
- Click ok to reconfigure the vCenter
- Check if the key is shown

![vSphere 6 advanced setting](/images/blog/wpid-04.png)

To change the second parameter you have to edit the web.xml file. You can find it on the windows based vCenter Server at _C__:ProgramDataVMwarevCenterServerdataperfchartstc-instancewebappsstatsreportWEB-INFweb.xml_

or for the vCenter Server Appliance at _/usr/lib/vmware-perfcharts/tc-instance/webapps/statsreport/WEB-INF/web.xml_ .

As I’m using the vCenter Appliance here you go with the description (changing the windows web.xml sould be pretty self explaining).

- Open a remote session to your vCenter. Either use ssh (if it’s enabled), or just open straight a console session to it. As mine is virtualized I’m opening the VMware console to it. To login just press + F1 and enter your root-credentials (this is not the Administrator-account you use to administrate your vSphere, it’s really root!)
- Enable BASH-acceess by typing: shell.set –enabled True
- Launch BASH by typing: shell
- Head to the directory using: cd /usr/lib/vmware-perfcharts/tc-instance/webapps/statsreport/WEB-INF/
- Open the file using vi: vi ./web.xml
- Search for “maxQuery” by typing: /maxQuery
- Head to the <param-value>64</param-value>
- Hit i to edit, change to value to the value of your choice or 0 for unlimited

![vpxd vi](/images/blog/wpid-05.png)

- Press esc-key and :wq to write and quit.
- It should show “… written”

![Bash vCenter Appliance](/images/blog/wpid-06.png)

- Logout and head to the Webclient to restart the performance chart service

![vSphere 6 webclient](/images/blog/wpid-07.png)

- In the WebClient go to the System Configuration

![VMware Performance Charts Service ](/images/blog/wpid-08.png)

- Click the services, locate the VMware Performance Charts Service and right click + Restart the service

Here we go - Your vSphere is now capable to provide you with as much performance metrics database requests as you might need!
