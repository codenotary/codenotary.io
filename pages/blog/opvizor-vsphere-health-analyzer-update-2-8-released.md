---
title: "Opvizor vSphere Health Analyzer Update 2.8 released"
image: /images/blog/autofix.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-03-03"
---

We just released a new Opvizor vSphere Health Analyzer (2.8) update, that is automatically available for all of our cloud edition customers.

On-Premise edition update is also available for our on-premise customers. Please update manually as usual.

Next to many minor updates to our components used within the dashboard, we optimized and speed up the performance data crawling massively (avoiding the [vSphere 6 and vSphere 5.5 U2d API restriction](/blog/vmware-vsphere-6-api-limitation-when-querying-performance-data-introduction/) - [VMware KB article](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2107096)) and added/updated over 25 issue rules and recommendations.

One of our latest rules to detect [VM snapshot removal stun times](/blog/vm-gets-unresponsive-when-removing-a-snapshot-snapshot-consolidation/) is now ready to accept custom intervals.

Furthermore, we already set the foundation to our upcoming remediation platform, that can be used to automatically resolve existing issues! Stay tuned and check our news, not to miss the release of that powerful feature!

![Health Analyzer Update Automatic Issue Fixing](/images/blog/autofix.jpg)

[If you don´t use Health Analyzer already, don´t miss the opportunity to use our solution for 30 days completely free of charge.](http://try.opvizor.com/health-analyzer/)
