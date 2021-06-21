---
title: "Getting Cranked Up with vSphere HTML5 Web Client Fling"
image: /images/blog/bigstock-Features-Blue-Square-Grunge-St-103266527.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-04-21"
---

It's been on the agenda to do away with the Flash-based vSphere Web client (due to some significant security issues with Adobe Flash) for some time, but VMware has finally produced a version compatible with HTML5, and it is now up for grabs at [the Fling website](https://labs.vmware.com/flings/vsphere-html5-web-client). 

According to the blog by Vishwa Srikannth, one of VMware's technical staff members, "The decision to go with Flash was made years ago, before HTML5 and developer tools were ready. The situation has changed, and we've been working very hard on removing the dependency on Flash to improve performance, stability, and security." 

## **vSphere HTML5 Web Client Fling: Features**

![vSphere html5 web client features](/images/blog/bigstock-Features-Blue-Square-Grunge-St-103266527.jpg)

_Lots of neat new features. It'll be huge._

It's finally here. Well, mostly. It's here, but it's not fully complete. 

Developed to be compatible with preexisting vSphere 6.0 environments, it is capable of managing vCenter and was coded using HTML5 as well as JavaScript. 

It [boasts a lot of nifty features](https://labs.vmware.com/flings/vsphere-html5-web-client), including: 

- VM Power Operations (common cases)
- VM Edit Settings (simple CPU, Memory, Disk changes)
- VM Console
- VM and Host Summary pages
- VM Migration (only to a Host)
- Clone to Template/VM
- Create VM on a Host (limited)
- Additional VMware monitoring views (Performance charts, Tasks, Events)
- Global Views (Recent tasks, Alarms - view only) 

It's not all roses (when is it ever?), and the Fling website also [lists lots of issues](https://labs.vmware.com/flings/vsphere-html5-web-client) that are currently being worked out. These problems include some browser compatibility issues and a few other bugs and glitches, but none of the problems seem to be complete deal breakers. VMware Chief Technologist Duncan Epping blogged that it is a, "work in progress," and that, " VMware focused on the key workflows first and will expand over time." 

##  **vSphere HTML5 Web Client Fling: What's It Like?**

![vSphere Web client fling](/images/blog/rose-695215_640.jpg)

_It's got the roses. But it also has some thorns. Be sure to report your thorny troubles to VMware so they can continue to improve the product for everyone._ 

The new Fling Web client is not at all unlike [another recent VMware innovation](http://blogs.vmware.com/vsphere/2016/03/vsphere-html5-web-client-fling-getting-started.html), VMware Host Client, except that VMware must be installed to use HTML5 Web Client Fling and that it serves as an interface to vCenter.Though VMware is, for now, touting Fling as an experimental type thing, it's highly probable that it will eventually replace the Flash client entirely. 

It is expected to be included with the next big release of vSphere. At this stage, the installation instructions are command line based, but VMware is working on the slick and sweet GUI installation and expect to have that released as an update in the not-so-far-off future. 

VMware is actively seeking feedback on the product to make it better in a series of updates they have planned. Ideally, users will share their thoughts about Fling and any VMware monitoring solution issues. 

## **vSphere HTML5 Web Client Fling: Known Issues & a VMware Monitoring Solution** 

According to VMware, the current known issues include:

- For now, Chrome, Firefox, Safari, and Edge and IE11 are most compatible with Fling. Any other browsers are questionable at this point. However, in Safari, the recent tasks don't always work. The bug comes and goes. Usually, logging out and back in again fixes the problem.
- Users may occasionally get an error popup that reads, " An error occurred ... ... See more details in the browser's javascript console". This is part of the debugging process. They request that you use the Feedback tool to send all of the info pertinent to the error, including the operating environment, object, and a detailed description of what actions caused the error.
- Upon login, Linux users will receive a warning that the OS isn't supported, but after the login process, Fling should work just fine with your Linux environment. You might also get this warning when using Safari, and there could be some minor problems with the layout, but nothing that should keep you from using it.
- When working with unpatched versions of IE, Fling might fail to login and take you to the URL "vmware-csd://csd". This is a known bug within vCenter 6.0, but it cannot be fixed via a patch with that appliance. You can access the KB and the fix at this link: [https://kb.vmware.com/selfservice/microsites/search.do?language=en\_US&cmd=displayKC&externalId=2109554](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2109554)
- There's another bug in Editing VMware autostart configuration on a ESXi 5.5. The host doesn't save the settings.
- At this point, Simple Search can only deliver about 50 objects of a single type. If you try a search that would deliver more objects, it will return a 0 and give you the dreaded Bad Request error. You can access Simple Search by going to Home->New Search or Quick Search->All Results.
- For now, hosts that are in a VSAN cluster are not able to provide additional options (such as VSAN data migration selector) when being placed in Maintenance mode.
- For now, URLs entered before logging into Fling are not passed on after logging in. For example, if you click on a bookmark for a VM and log in, it should take you to the VM page you bookmarked, but right now this would take you to the homepage instead. There is a workaround, however. After you log in, enter the URL a second time.
- When you visit a VM that happens to be in the process of being deployed, you may receive some JavaScript errors, such as: "Cannot read property 'device' of null'". This won't happen after the VM is fully created, however.
- When you visit a client's page before the server has completely started up, it might not load the strings and you could get a message such as, "summaryView.guestFullName" within the views or action menus. Often, refreshing the page will correct the problem, but you can get a certain fix by restarting the appliance server with, "/etc/init.d/vsphere-client restart". 

 The visual theme used in Fling is named "Clarity", and this is still in the development phase, as well. Also, some minor bugs in the UI and some tweaks to the "look and feel" of the product are on the way soon. 

Additionally, the appliance requirements are set to the recommended levels. Though it should work if you change these to lower settings, it could affect the performance. 

The root password is 'demova' (not including the quotation marks), but if you key in an incorrect password too many times in a row, you will get locked out. The simplest fix for this is to redeploy the appliance from the OVA. 

Are you looking for more VMware news and information (of course additionally to the vSphere HTML5 development), or perhaps a better VMware monitoring solution? [Sign up for our newsletter](https://mediashower.com/ce2/40966/6/177) today.
