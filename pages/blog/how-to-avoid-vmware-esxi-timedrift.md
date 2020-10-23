---
title: "How to avoid VMware ESXi timedrift"
tags: ["Ops", "opvizor"]
date: "2019-04-11"
---

No matter what best practice guide you check, there will be a important recommendation to make sure the time synchronisation of your VMware vCenter and the VMware ESXi are configured and working correctly. If you ignore that and your VMware ESXi timedrift starts, it can become a very nasty situation.

Using our latest version of Performance Analyzer, we have a dashboard and alerts that help you to control your vCenter and ESXi timedrift to take counteractions.

The dashboard mentioned is called VMware Config: Clocks and Timedrift and does exactly that - showing all of your ESXi hosts and you vCenter time and timedrift. That timedrift is compared to the Performance Analyzer appliance and also your VMware vCSA.

![Performance Analyzer VMware ESXi timedrift](/images/blog/timeshift.png)

# Disadvantages having timedrift

You might think, having a couple of seconds timedrift can't be such a big issue. Actually, it does. It affects backup, redo logs, active directory synchronisation, Kerberos authentification, cookie duration and all kinds of database actions or query results. Therefore, you should always make sure to have the correct time set as precise as possible.

The higher the VMware ESXi timedrift compared to the time of the other peers the worse are the effects. We learned about situations where AD users couldn't logon anymore or AD computer dropped out of the active directory, because the timedrift was more than 5 minutes, so Kerberos went crazy.

We also noticed that when customers complained to not see the dashboards being populated with data. Or having a gap in the charts of several hours. In any of these cases, the VMware ESXi timedrift was way off on the host the Performance Analyzer virtual machine was running on. Once the ESXi time was corrected, all went well. As we encountered these situations pretty frequently we decided to check against any time source we can find in the customers environment and try to triangulate what time is best.

# Make sure to have correct time

There are plenty of ways how to make sure the time is always correct, just make sure to  chose and stick to your choice and don't mix it.

## VMware vCSA

You can configure the time synchronization on your VMware vCSA pretty straightforward by login into the admin page: https://vcsa:5480, select time and edit the time synchronisation.

![vcenter vcsa ntp](/images/blog/timentp.png)

Best is to use **three NTP Server** for the synchronisation (ignore our demo screenshot setting :-)).

ESXi NTP

The ESXi hosts should also synch the time with three NTP server and you can either use [host profiles](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.esxi.install.doc/GUID-77D10F4D-50FE-4BA6-B164-42D20D673F4F.html), [powercli scripts](https://vtechdummies.wordpress.com/2017/10/22/powercli-scripts-to-check-and-configure-ntp-configuration-of-esxi-hosts/) or manually configure that.

![VMware ESXi time synchronisation](/images/blog/esxintp.png)

Make sure that the service is started and the time is correct. If the timedrift is already to high, you might need to manually set the time first before the synchronisation picks up.

## VMware Tools

In many if not most cases the time synchronisation of the virtual machines (VMware tools) is active and syncs with the time of the ESXi host. More precise - the VM syncs with the time of the ESXi host its running on. 

Think of a cluster of 10 ESXi hosts and 9 have the correct time, but one has the wrong time (let's say 30 minutes). Your virtual machine runs fine on all 9 ESXi hosts, but the moment DRS or manual vMotion moves the VM to the ESXi host with high timedrift, your VM is happily taking that time.

Of course that doesn't happen if you have NTP or AD timesync in your virtual machine configured and don't use the VMware tools time synchronisation feature.

Therefore, make sure to either use NTP/AD timesync or VMware tools timesync and have all ESXi hosts sync the time with a NTP servers.

There are a couple of KB articles you should read if you're not certain on the configuration:

[https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/Timekeeping-In-VirtualMachines.pdf](https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/techpaper/Timekeeping-In-VirtualMachines.pdf)

[https://kb.vmware.com/s/article/1006072](https://kb.vmware.com/s/article/1006072)

[https://kb.vmware.com/s/article/1318](https://kb.vmware.com/s/article/1318)
