---
title: "LUNs attached to VMware vSphere 6.0 may remain in APD Timeout state"
image: /images/blog/220645446_74e12cd2c3.jpg
tags: ["Ops", "opvizor"]
date: "2015-08-03"
---

[Magnus Andersson](http://vcdx56.com/2015/07/30/heads-up-luns-attached-to-vmware-vsphere-6-0-hosts-may-remain-in-apd-timeout-state/ "Magnus Andersson") mentioned in his blog a pretty important VMware bug including the corresponding [KB article](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2126021 "KB article").

> When an APD event occurs, LUNs connected to ESXi may remain inaccessible after paths to the LUNs recover. The 140-second APD timeout expires even though paths to storage have recovered. You see the following events in sequence in the /var/log/vmkernel.log:

1. Device enters APD.
2. Device exits APD.
3. Heartbeat recovery and filesystem operations on the device fail due to "timeout" or "not found" or "busy".
4. The APD timeout expires despite the fact that the device exited APD previously.

This is of course a real issue in production environments as the LUN doesn't recover after being gone for some seconds, no matter if the LUN is back online within the 140-seconds timeout.

As the LUN is not accessible anymore all of your virtual machines are affected (down) and some hosts might not come back to be managed in vCenter. Of course the hosts will continue to operate but it happens quite often that they get disconnected in vCenter.

To resolve the issue, you need to kill the outstanding I/O to the LUN and reboot the ESXi Host!

Kill the outstanding I/O: [http://kb.vmware.com/kb/2014155](http://kb.vmware.com/kb/2014155 "http://kb.vmware.com/kb/2014155")

![LUN colllapse APD Timeout](/images/blog/220645446_74e12cd2c3.jpg)

Photo courtesy of [sanbeiji](https://www.flickr.com/photos/50514859@N00/220645446/)([CC ShareALike](http://creativecommons.org/licenses/by-sa/3.0/))
