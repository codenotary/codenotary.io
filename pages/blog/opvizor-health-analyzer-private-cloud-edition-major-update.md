---
title: "Opvizor Health Analyzer private cloud edition - major update"
tags: ["Ops", "opvizor"]
date: "2015-06-30"
---

## We're proud and excited about our new version of the opvizor private cloud edition, that runs on premise!

## Introduction

Apart from the Cloud and SaaS hype, there are still companies out there that are not allowed to use any public cloud services. Therefore customers kept asking to release an offline edition which is still easy to install and to maintain - that's what we did! As one of the system engineers at opvizor I’m one of the first people who is able to have a look at the installation and it’s a pleasure to share it with you! 

As same as the cloud service, this version is able to work with almost every vSphere version, up to VMware vSphere 6.0 and it’s up and running to present you all the findings, solutions and reports within 20minuntes!

It’s pretty simple – just head to ENTER WEBPAGE HERE, register using your firstname, surname and your e-mail. You will receive an e-mail with the download-link and a trial license-file.

## Requirements

To be able to install and use the appliance you need at least a VMware vSphere infrastructure (vSphere 4.x-now) which has at least one  vCenter Server (this is the point where the data is centrally collected).

The appliance has the following hardware requirements:

- 8 vCPU
- 16GB RAM
- 300GB disk-space
- 1 fix IP and DNS-address

Make sure that you reserved the IP-address and there is a working DNS-entry (this makes accessing the service way more comfortable as almost everything of the appliance is handled via browser).

## Installation

### Download & Deploy

After you received the mail containing the links, just download the .zip and .md5. Use the md5-checksum to proof if the file is still ok after it’s travel through the internet. If you don’t know how to check file-integrity using md5 for windows systems just head to this mircosoft KB https://support.microsoft.com/en-us/kb/889768 .

When everything is fine, just go to your vSphere (either with the fat-client or the webclient) and deploy the .ovf which is located in the folder of the extracted files.

### Basic network configuration

Once the opvizor private cloud edition appliance is deployed just power it on and connect to the console.

![First start opvizor Health analyzer - private cloud edition](/images/blog/wpid-011.png)

When asked for a user and password enter _configuration_ / _configuration_.

![Private Cloud edition - network configuration](/images/blog/wpid-021.png)

For the network configuration you can either use dhcp or static. In my case it’s static so I’m answering the “Use DHCP (y/n)?” with _n_.

Using a static configuration, you have to set the well known parameters:

- IP
- Netmask
- Gateway
- DNS 1 and DNS 2
- DNS search domain

![Health analyzer vApp network configuration](/images/blog/wpid-03.png)

When everything is set the appliance will start to reconfigure the settings in the background. Approximately 5 minutes later you should be able to reach the appliance via ping and using the browser.

![Network configuration of vMware vApp finished](/images/blog/wpid-04.png)

### Detailed configuration

Now everything console-wise is setup and ready to use. You can start to using your browser to setup the detailed configuration and license (please see the next step).

Accessing the appliance using http port 8080, so for me it’s [http://192.168.99.168:8080](http://192.168.99.168:8080/). It will show you all possible settings for the baseline configuration of the appliance, like network, timezone, mail (for service mails about the health-state, error messages, …), you’re able to add your own certificates for the webservice, set the internal network range, download log-files, add updates and upload your license file.

![Health analyzer private cloud edition - appliance configuration](/images/blog/wpid-05.png)

Since this is only a test-installation I’ll just add the hostname for my installation. Adding a mail-configuration at this point gives you the possibility to receive mails on the health-status and be aware if something went wrong in the framework of the opvizor private-cloud.

After making changes it’s important to head to the bottom of the page, save and apply the configuration. The “Apply Configuration” is very important as it pushes the saved configuration to the services in the backend. Please note, that this may take several minutes.

![virtual appliance configuration](/images/blog/wpid-06.png)

### Add a license

Once the Appliance is installed and configured the last thing before adding vCenters is to add a license. You should get yours via email and to add it to the appliance you just have to go to the _License Management_ (you can find it at the top on the configuration).

![License Management opvizor Health analyzer](/images/blog/wpid-07.png)

Just click “Choose File” and select you license file. Once the file is shown click “Upload License”. That’s it!

### Service configuration

The final step before heading to the dashboard with all the findings and reports is to configure the service for the data crawling. It is reachable via https on port 7777.

The first time it will show an error that it is unable to connect to the backend platform.

![data crawler first configuration](/images/blog/wpid-08.png)

Don’t worry, this is only because there’s no user/password configured. Once you set this in the “Edit” it will disappear.

Select “Edit” and make sure to enter your **private cloud edition** _Platform Username_ and _Platform Password_ in the empty fields. For the _Platform Server_ please do not change the entry “appliance”.

![configure platform user name](/images/blog/wpid-09.png)

**Save the configuration.**

The settings are showing your username and the “Current Edition”

![first upload and using Health analyzer on premise](/images/blog/wpid-10.png)

Just remove the checkbox “Anonymize” at the bottom of the page as it’s not necessary to anonymize your data in your own private cloud.

You’re now able to configure your vCenters using the “Configure vCenters” dialogue!

As simple as that!

If you want to trial our private cloud edition in your own environment please [**contact us.**](http://try.opvizor.com/onpremise/ " contact us.")
