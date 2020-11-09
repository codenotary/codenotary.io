---
title: "Installing vSphere 6 – vCSA (vCenter Server Appliance)"
image: /images/blog/pacpuready-2.png
tags: ["Ops", "opvizor"]
date: "2015-04-09"
---

## Introduction

During my daily work as a Systems Engineer at opvizor I’m frequently facing scenarios where customers or developers are asking for things that have to be reproduced in a vSphere environment. As I don’t want to use (and wouldn’t recommend to anyone) the productive infrastructure for testing, I needed something else. Since I cannot use unlimited resources and want to keep everything flexible to test various scenarios, the ideal solution is a virtualized VMware vSphere infrastructures. 

It offers nearly all features of a “real” infrastructure and you still gain all the advantages of using virtual machines. So it keeps you agile handling your ressources, offers the possiblity to quickly deploy and remove entities like hypervisors and VMs. Since I’ve done this already several times with the older versions of vSphere I feel it’s very handy, I thought to blog about the installation process the next time I´m doing it myself, so here we go.

## Existing Situation

At opvizor I’ve got access to an existing vSphere 5.5 cluster based on Cisco UCS, NetApp and PureStorage including a Microsoft Windows vCenter and several (physical) ESXi 5.5 Hosts. Having done that several times before, there are already nested vSphere 5.5 and vSphere 5.1 environments running. For this vSphere 6 setup I gonna install vSphere 6.0 using the vCSA (aka vCenter Server Appliance) 6.0 and up to 3 nested ESXi 6.0 Hosts. 

The whole installation will take place on the physical vSphere 5.5 environment. For the VM-storage I already prepared two NFS-shares (one for VMs the other one for templates). During the whole installation process I’m connected to our Windows vCenter 5.5 via RDP. Doing it this way I’m avoiding having to use my small bandwidth to deploy stuff to the datacenter.

Btw. be sure to monitor all your virtual machine and cluster key metrics in one simple dashboard.

[![monitor crucial virtual machine metrics](/images/blog/pacpuready-2.png)](http://try.opvizor.com/perfanalyzer)

## Requirements

If you want to build your own nested vSphere, here you go with my requirements. Please note that this requirements were sized for my testing infrastructure, hosting 3-5 Hosts and up to 50 VMs. If you are planning to exceed this numbers, please change the sizing. Using the Knowledge Base from VMware is always a good idea.

- Windows-system with a browser compatible with VMware Client Integration Plugin 6.0 (in my case Firefox worked very well)
- An existing vSphere to deploy your machines
- Resources for the vCSA: 2vCPUs, 8GB, 120GB HDD (See Minmum requirements for the vCSA 6.x Appliance [http://kb.vmware.com/kb/2106572](http://kb.vmware.com/kb/2106572))
- Resources for each ESXi Host: 2 vCPUs, 6GB (4Minimum) Memory, 15GB (4GB Minimum) storage)

## First Steps

Before starting any installation you have to mount the vCSA 6.0 .iso to the system that you want to use for the installation process. I’m using virtual CloneDrive to mount it to my system (burning a DVD and sending it by mail to our datacenter is a bit too old fashioned and slow, I think).

##### [**Heal Your vSphere**](/register)

# Installing the VMware Client Integration Plugin

As the vCSA 6.0, **vCenter Server Appliance**, is no longer available as an .ovf I had no other choice than downloading the .iso and use the VMware Client Integration Plug-In for the deployment process.

**Good news**

The VMware Client Integration Plug-In contains the vCSA-Install Media, so no need to search and download additional software. It’s a simple MS Windows installation process. Please note that I had trouble using Chrome as a browser when trying to use the Plug-In so I switched to firefox for this installation (personally, I don’t like IE, so switching to firefox was obvious for me). The installation of the VMware Client Integration Plugin is pretty easy. It is located in the Folder “vcsa” on the .iso and in my case it’s called VMware-ClientIntegrationPlugin-6.0.0.exe.

![vCenter Server Appliance Installation media](/images/blog/1_explorer.jpg)

Once started it is a typical windows installer procedure, accepting the EULA and deciding were to install the plugin.

![VMware Client Integration Plugin](/images/blog/2_folder.jpg)

## Installing the vCSA 6.0

To start the installation just change to the root directory of the .iso content and open the vcsa-setup.html with the browser of your choice (in my case it’s Firefox as Chrome didn’t work).Please make sure that the plugin is allowed to run (most browsers will ask you, but it’s also be possible that you have to allow it in the settings of your browser), typicall the page refreshes after some seconds. If you weren’t quick enough (as me, because I made all those nice screenshots for you guys), just refresh manually and the plugin welcomes you with the decision of either install from scratch or upgrade an existing installation.In my case I chose the initial installation.

![VMware vCSA 3_initial_setup](/images/blog/3_initial_setup.jpg)

## Connect to target server

Since the vCSA is deployed directly to an ESX-host, we have to connect to one and enter the credentials. I was running into an error “Cannot authenticate to the target server.” using the FQDN I had to replace it using the IP address of the host. The cause is a reverse lookup made by the installation routine. As we don´t need that in our demo environment the installer didn’t like that and I had to use the IP address.

![Connect to vSphere Host](/images/blog/4_connectserver.jpg)

## Set up virtual machine

Now it’s about giving the vCSA virtual machine a name and set the root-password. For the name in my case it’s just vcsa6 (I like to keep it simple and it’s easy to remember/assign it while already having 5.1 and 5.5 in place). You need to keep the requirements in mind when setting the password. Please note that you will be able to login to the appliance using the root account with the vSphere Webclient as all permissions are needed! Later on the main purpose of that account is administrative access to the vCSA (via console/SSH/…) as you should create another user for the vCenter access later on.

![VMware password requirements](/images/blog/5_password.jpg)

### Select deployment type

In vSphere 6, VMware introduced the “Platform Services Controller” (short: PSC). It offers shared services such as Single Sign-On, Licensing and Certificate Management. Please note that it is mandatory to have at least one PSC! It´s also possible to deploy one or more external PSCs. In my case (remember: Keep it simple) I creat just one embedded PSC.

![Install vCSA as Platform Services Controller](/images/blog/6_EPSC.jpg)

### Set up Single Sign on

Now it’s all about setting up an administrative account and a SSO domain + site. As everything is brand new, I don’t have an exisiting domain that I want to use. I just went for a new SSO Domain and call it vsphere6.local. For the SSO Site name it will be Default-First-Site. Please note that for now this user is the one with administrative privileges within your vSphere domain.

### Select appliance size

In my case it’s very unlikely that it will host either more than 10 hosts or 100VMs, “Tiny” is totally fine for appliance size.

![VMware vCSA appliance right sizing](/images/blog/8_sizeapp.jpg)

### Select datastore

Selecting the datastore at your choice. The most important thing for me is to activate thin provision mode. When not using thin mode, the whole storage space assigned will be consumed instead of only consuming the storage which is really in use.

![VMware vCSA datastore](/images/blog/9_datastore.jpg)

### Configure database

For the databasekeep I’m using the embedded vPostgres DB. Running an external oracle database would just make it more complex and creates more stuff I need to take care for.

![VMware vCSA database](/images/blog/10_database.jpg)

### Network Settings

I already have an existing portgroup in my lab for the testing the infrastructure and reserved an ip address for the vCSA and the ESXi hosts. Additionally to the default network settings in the vCSA I activated SSH. This is not recommended for production use, but always nice to have when playing for testing purpose. When using an IP over a FQDN, the system shows a warning as this setup is not recommended. That’s fine for me. Again not recommended for production.

![VCSA Appliance network settings](/images/blog/11_network.jpg)

### Ready to complete

The configuration is ready to go. A quick summary is shown with the request to proceed. I’m ok with all the settings and deploy.   

\[optin title="VMware vSphere and more" text="Get more information about VMware topics" buttontext="Sign Up!" successMessage="Message has been submitted successfully." errorMessage="Failed to send your message. Please try later." invalidEmailMessage="Your email address does not appear valid." border="false" collectfirstname="false" collectlastname="false" collectphone="false" collectcompany="false"\]

## Installation Complete

The deploy process of the vCenter Server Appliance took me about 15 minutes. Don’t worry if the installation process takes more time. Please remember I downloaded the appliance directly to our datacenter and I’ve been working via Remote connection. No slow landline- or desktop-connection in between my computer an the datacenter during the installation process.

![vCSA Installation complete](/images/blog/12_complete.jpg)

**Remember** to monitor and analyse vCSA on your vSphere environment, when the vCenter Server Appliance is up and running. [S](http://try.opvizor.com/perfanalyzer "Sign Up for Health Analyzer")[ign Up for Performance Analyzer](http://try.opvizor.com/perfanalyzer)

<iframe src="https://player.vimeo.com/video/185392648" width="640" height="360" frameborder="0" allowfullscreen="allowfullscreen"></iframe>

Start installing the [first VM for a nested vSphere ESXi 6.0](/blog/installing-vsphere-6-0-esxi-hosts-nested-preconfiguration/)

<script>setInterval(function(){_gaq.push(['_trackEvent', 'blog post', 'read 15 seconds', ''])}, 15000);</script>
