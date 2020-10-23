---
title: "Optimize vSphere Web client"
tags: ["Ops", "opvizor"]
date: "2015-07-22"
---

VMware puts more and more functionality only in the Web client, therefore everybody is 'forced' to use it. I mention 'forced' because many people don't really like the behavior, speed and usability too much - not to mention Flash.

Anyway the web client is getting better and the new functionality convince even the last Windows vSphere client fan. 

VMware released a helpful KB article to optimize the Web client performance:

[Increase Adobe Flash Player storage to optimize Web Client (2109770)](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2109770#sf37023630 "Increase Adobe Flash Player storage to optimize vSphere Web Client (2109770)")

> Use the Adobe Flash Player Website Storage Settings to grant Adobe Flash Player access to unlimited disk space for the vSphere Web Client instances.

1. In a Web browser, go to the Adobe Flash Player Website Storage Settings panel at [http://www.macromedia.com/support/documentation/en/flashplayer/help/settings\_manager07.html](http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html "http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html").
2. Select the URL for the Web Client from the Visited Websites list.
3. Use the slider to set the Flash Player storage setting to **Unlimited**.

You can also right click on the website, select settings:

![Optimize vSphere Web client](/images/blog/wpid-flash_storage.jpg)
