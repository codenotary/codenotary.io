---
title: "The 7 Most Important Things You Should Know About vCSA"
tags: ["Ops", "opvizor"]
date: "2016-04-12"
---

While many VMware products can share the sandbox and some toys with Windows, overall VMware has no interest in developing applications to run on the Windows OS. Hence, VMware has gradually made marked improvements to their vCenter server appliance, or [vCSA](http://www.vmwarearena.com/vsphere-6-0-whats-new-in-vcenter-server-appliancevcsa-6-0/), which is an Linux appliance, and includes its own built-in database, server, and security features. 

vCSA is currently in version 6, which comes with a number of enhancements over version 5, as well as some much-needed bug fixes.But before you get started with vCenter server appliance v6, there are [a few things](http://searchvmware.techtarget.com/tip/Top-10-things-to-know-about-vCenter-Server-Appliance) you need to know. 

## **1\. How vCSA Differs From vCenter for Windows**

![VCSA vs vCenter for Windows](/images/blog/bigstock-Business-User-Touching-Server--120625976.jpg)

_currently in version 6, but a number of users are still using versions 5 and 5.5. The latest version features a number of bug fixes, as well as some improvements and enhancements. If you're used to using it with Linux, there are some differences to make note of when using the "for Windows" version._

By definition, software appliances are self-contained virtual machines that are created and packaged to be downloaded, imported into the virtual environment, and then switched on. 

This prepackaged appliance comes with the OS, apps, database, preset configurations, and everything it needs to run from the moment it is deployed. vCenter for Windows allows you to use a VM template with a prepackaged Windows OS tucked neatly inside, but it does require you to install vCenter and the vCenter database. 

Compared with the Linux VMs, there are many more patches associated with running the Windows OS, so be prepared for that delay when it's time to deploy. 

## **2\. What Works with vCSA** 

The latest version(s) 5.5 and higher are a lot more scalable than earlier versions, which makes it ideally suited to all size business infrastructures, including small biz and enterprise-size environments. Up to 100 hosts can be supported, as well as up to 3,000 virtual machines, all on a single appliance. If your needs exceed these limits, you have the option to utilize an external Oracle database for even greater scalability. Despite some limitations (Update Manager), vCSA is ideal for many vSphere installation. 

## **3\. What Not to Try With vCSA**

![VMware vCSA](/images/blog/shield-98378_640.jpg)

_Nothing is complete these days without a "don't try this at home" warning. So, here is your "don't try this at home" warning for vCSA. You're welcome._

Some of the VMware services you might be used to working with aren't compatible with or included in vCSA. 

For example: 

- vCSA does not include support for IPv6. 
- vCSA does not include support for vCenter linked mode. (Microsoft Active Directory Application Mode handles these activities in the for Windows version). 
- vCSA does not support SQL as an option for external database. Instead, it uses the embedded vPostgres database or an external Oracle database. 
- Using VMware Update Manager is not an option with vCSA. Rather, it is necessary to create a Windows virtual machine, and then install Update Manager and connect that to vCSA. Alternately, you can use the vSphere Web Client plug-in to take advantage of status reports in Update Manager. 
- vCSA does not support vCenter Linked mode. 
- vCSA does not support vCenter Server Heartbeat. 
- To use VMware Site Recovery Manager, it needs to be installed on a separate Windows server. 
- To use VMware View Composer, it also needs to be installed on a separate Windows server. 

## **4\. vSphere Update Manger (VUM) in vCSA**

![vCSA Update Manager](/images/blog/bigstock-Software-Update-Key-On-Keyboar-94261373.jpg)

_Using the vSphere Update Manager is a little trickier in vCSA, but it is possible to do so if you take the right steps._

With vCSA version 6, it is now possible to access all of the capabilities of vSphere Update Manager (also called VUM) inside the vSphere Web Client. It is still necessary to use a separate Windows system for VUM, but it will fully integrate with the Windows virtual client and with the vCSA. 

## **5\. Deployment of vCSA** 

vCSA does not require the installation of an operating system, application, or a database, which makes it extremely fast to get up and running. This also saves money on the cost of a Windows OS. The vPostgres database also makes deployment faster, since the installation of vCenter for Windows would require waiting for SQL express (embedded) to install. Plus, vPostgres is a lot more scalable than SQL Express, and vSphere Web Client is already installed on vCSA. 

## **6\. Resources to Help You Make the Most out of vCSA**

![vCSA resources](/images/blog/bigstock-Man-Hand-writing-Resource-with-107073794.jpg)

_As always, VMware doesn't expect users to go it alone. There are tons of helpful resources you can make use of, in addition to subscribing to the regular newsletter offered by Opvizor, your source for easy VMware monitoring and optimization._

VMware has published a number of resources to help users get started with and make the most out of vCSA. You can find those here:

• [VMware vCenter Server Installation Best Practices](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2052334)

• [VMware vCenter 6 Documentation](http://pubs.vmware.com/vsphere-60/index.jsp)

• [vCenter vSphere 6 Release Notes](https://www.vmware.com/support/vsphere6/doc/vsphere-esxi-vcenter-server-60-release-notes.html)

• [How to Upgrade to vCSA 6](http://blog.vmpros.nl/2015/12/18/vmware-updating-vcenter-server-appliance-6-0-to-update-1/)

VMware tips and tricks guru [William Lam](https://twitter.com/lamw) has also compiled an impressive list of vCSA resources to help you out at [http://www.virtuallyghetto.com/vcsa/](http://www.virtuallyghetto.com/vcsa/).

Or check out our own documentation:

- [Installing vSphere 6 – vCSA (vCenter Server Appliance)](https://www.opvizor.com/blog/installing-vsphere-6-vcsa-vcenter-server-appliance/)[](https://www.opvizor.com/blog/installing-vsphere-6-vcsa-vcenter-server-appliance/)
- [First Login vSphere 6 – vCSA (vCenter Server Appliance)](https://www.opvizor.com/blog/first-login-vsphere-6-vcsa-vcenter-server-appliance/)
- [VMware vSphere 6 – Adding the ESXi host to the vCenter](https://www.opvizor.com/blog/vmware-vsphere-6-adding-the-esxi-host-to-the-vcenter/)
- [VMware vCenter Server Appliance VCSA filesystem is damaged](https://www.opvizor.com/blog/vmware-vcenter-server-appliance-vcsa-filesystem-is-damaged/)
- [Installing vSphere 6.0 ESXi Hosts nested – preconfiguration](https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-preconfiguration/)

## **7\. Where to Get Your vCSA Download**

All vSphere evaluations, as well as the vCenter Server download, come with vCSA. In essence, it's just an alternative variation of vCenter. You can get the single OVS file or the OVF file, which comes with the system disk file as well as the data disk file. The minimum system requirements for vCSA are listed [here](https://kb.vmware.com/selfservice/documentLinkInt.do?micrositeID=&popup=true&languageId=&externalID=2005086). The download and instructions for vCSA deployment are available [here](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2007619).

One of the most challenging things in taking on VMware is the incredible number of products and all the changes that new updates and editions of the products brings. You can keep up with all things VMware when you [sign up for our newsletter](https://mediashower.com/ce2/39435/6/177).
