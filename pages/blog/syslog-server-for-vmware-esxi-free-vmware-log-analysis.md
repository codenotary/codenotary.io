---
title: "Syslog server for VMware ESXi - Free VMware Log Analysis"
tags: ["Ops", "opvizor"]
date: "2015-06-09"
---

## Introduction

When working with VMware ESXi it’s quite simple to check logs. Not really simple means: 

1. first of all you need to know what log file you need to check and where to find it
2. login via console/ssh or download the file and open it. 
3. Maybe you have to check all the rotated files because the entry you’re looking for is not in the newest one. 
4. So gunzip the old log-rotated files and check again and again…

We were looking to make that a lot simpler, especially as we don't have a team looking after log files the whole time. I doubt so many companies have actually.

So our goal was to find an affordable turnkey solution (ideally **free VMware Log analysis** solution) to make our life easier to access logs (syslog) centralized with some fancy alert graphs and filters.  

## How is ESXi handling logging per default

Most of the time I accessed log files navigating to /var/log/vmware on my ESXi hosts, but the files you see in this directory are only links, pointing to /scratch/log/. The host keeps keeps rotating the log-files 8 times at 1024 KiB of size and deletes everything after those 8 rotates. The log-rotates look like <log-name>.N.gz. So for the hostd.log for example the rotates look like hostd.0.gz, hostd.1.gz, …

To view them you have to gunzip them. So “gunzip hostd.0.gz” to unzip the first log-rotate.  Please make sure to copy the file to another folder (like /tmp/) before extracting it to avoid replacing existing log-files.

## How is this handled when using a syslog-server!?

When using a syslog most logging-information are sent to a central server, means you no longer have to grab the files manually from a single server. Checking log-files for “errors” or “warnings” for ALL your ESXi-Servers becomes then very easy. At least that's the first thought. But the biggest issue then is the amount of log data that comes in and most of the time you don't really know what the log entry could mean, as they have different structures. Depending on which syslog-server you are using, you can also have difficulties in finding a good query engine to search for certain content.

![VMware ESXi Syslog](/images/blog/wpid-syslog.png)

Handling too many data can be very expensive based on the product licensing model, especially when data amount based. Very often it makes sense to start or extent existing solutions with free VMware Log analysis tools.

The alternative solutions

As we didn't need to use a commercial solution like [VMware vRealize Log Insight](http://www.vmware.com/products/vrealize-log-insight "VMware vRealize Log Insight") or [Splunk](http://www.splunk.com "Splunk").

I did some some google research about free log analysis solutions and found a lot of ElasticSearch and logstash based solutions. All supposed to be free to use. So I took a closer look on the so called [ELK Stack](https://www.elastic.co/webinars/introduction-elk-stack "ELK Stack") - [ElasticSearch](https://www.elastic.co/ "ElasticSearch"), [LogStash](https://www.elastic.co/products/logstash "LogStash"), [Kibana](https://www.elastic.co/products/kibana "Kibana"). All open source alternatives to Splunk. If you're interested in a more enterprise grade solution with professional support you should definitely look into [Graylog](https://www.graylog.org/ "Graylog"). Btw. Graylog  also enables you to save big time in filtering log traffic before forwarding it to Splunk.

Of course using a very feature rich, VMware Log analysis solution that is free to use wasn't so bad.

For us the fastest solution as we wanted to focus on VMware ESXi and VMware vCenter was [Sexilog](http://www.sexilog.fr/quickstart/ "Sexilog ") (just switch S with e and you know where the name comes from.)

Beside the awesome name, SexiLog offers easy installation, and quick results and nice graphs and filtering.

## How to implement this?

The installation of SexiLog is really easy. Just download the .ova from the webpage ([http://www.sexilog.fr/quickstart/](http://www.sexilog.fr/quickstart/ "http://www.sexilog.fr/quickstart/")) and deploy it using the vSphere client or the webclient (please make sure that the VMware client integration plugin is running, because otherwise you want be able to deploy anything). 

After the installation just select a portgroup for the appliance to run. When powering on, it will start to search for a dhcp address. If you want to use a static/manual ip address just open the console, login using the default user: root password: Sex!Log. 

After the login it will offer a nice menu to help you doing so. Hit “5” to open the network settings dialogue and enter the values you’d like to use.

![SexiLog Configuration menu](/images/blog/wpid-sexilog-menu.png)

The appliance will reboot and listen on the configured IP address or DNS name.

If you want to check if everything went fine, just open the IP-address/fqdn in a browser of your choice and the SexiHome dashboard should show up.

To add the SexiLog syslog server now to your ESXi server just open the advanced configuration of the ESXi-server. Using the webclient, go to:

vCenter à Hosts à Select the host à Manage à Settings à Advances settings

And search for the “Syslog.global.logHost”. Set in to udp://<FQDN\_of\_SexiLog>:514

![ESXi Advanced Settings syslog](/images/blog/wpid-esxi-syslog-advsettings.png)

To make sure that the log entries are able to leave to host just make sure that the firewall entries are set. Go to the:

vCenter -> Hosts -> Select the host -> Manage -> Settings -> Security Profile -> Edit

![ESXi Firewall Settings](/images/blog/wpid-syslog-setting.png)

Search for syslog and enable it.

Repeat this step for each ESXi host. If you want to use the Powercli to make this more comfortable, just check out the guide on the SexiLog webpage.

You’re now ready to use the freshly installed syslog, using your browser just open http://<FQDN\_of\_SexiLog> and check if the data keeps coming.

![Free VMware Log](/images/blog/wpid-Sexilog-Dashboard-View.png)

You can now browse, filter, inspect all the data received.

## Preconfigured Queries

What makes SexiLog really compelling for any VMware Shop is that there are a ton of preconfigured Log Queries integrated. You can access them on the upper right.

![SexiBoard SCSI Sense Data](/images/blog/wpid-sexilog-dashboard.png)

Some of the great preset queries are Snapshots, SenseData and vMotionRate. Of course you can change these queries as well as the timerange.

To get an overall View the Kommandantur Dashboard is a very good starting point - especially for your support team on a big screen.

![Kommandantur SexiLog](/images/blog/wpid-kommandantur.png)

## Summary

If you're looking for a quick and easy solution focussing on free VMware Log Analysis, SexiLog is definitely a very good choice. The standard virtual appliance can roughly server up to 20 ESXi hosts and is also capable of receiving vCenter and Windows VM log files. 

Btw. this free VMware log solution can be combined with [Opvizor Health Analyzer](https://www.opvizor.com/register "Opvizor Health Analyzer") or [Snapwatcher](http://try.opvizor.com/snapwatcher "Snapwatcher ") in a perfect way, to predict and catch most of the bad situations that can happen in a VMware based environment. You should give it a try!
