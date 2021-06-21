---
title: "Get the Client Integration Plug-In running in vSphere Web Client 6.x"
image: /images/blog/firefox_uninstall.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-07-11"
top: true
---

The headline of this blog post might sound simple, but it can be extremely annoying to get the Client Integration Plug-in running to import virtual appliances.

No matter if you use IE, Chrome or Firefox you can find yourself surrounded with error messages and information that your you Client plugin needs to be installed (despite the fact, that you just installed it some minutes ago and restarted your browser).

A very common message is also "The VMware Client Integration Plugin has updated its SSL certificate in Firefox. Please Restart Firefox." 

The reason is the required NPAPI support, that most browser don´t support anymore. It even gets worse, as latest browser versions don´t allow to re-enable the NPAPI support.

Most of the errors are fixed in vSphere 6.5 but still existing in all versions before.

As many people still run vSphere 6.0 I want to guide you through the Firefox installation, to make sure the Client Integration Plug-In is working.

## Install Firefox

Unfortunately, It´s not possible anymore to enable NPAPI using a Firefox version older than 52. Therefore, we need to install Firefox 52 first and uninstall any newer Version. Please be aware that Firefox autoupdates by default, so more often than not, you need to uninstall first to install an older version.

![FireFox uninstall](/images/blog/firefox_uninstall.png)

FireFox uninstallation.

Just to make sure, you´re going to use an outdated technology. But its the only way I found that always works.

You might want to consider the Firefox Extended Support Edition that is community driven and supports NPAPI 12 month longer. https://www.mozilla.org/en-US/firefox/organizations/

Download Firefox version 52 for your OS here: https://ftp.mozilla.org/pub/firefox/releases/52.0/ and install the software. Please make sure to disable the maintenance service in the installation wizard.

![Install Firefox](/images/blog/firefox_install.png)

Select Custom during the installation and disable the "Install Maintenance Service" Box.

![Deactivate Maintenance Service](/images/blog/firefox_install2.png)

## Change Update Settings

First thing to change after the first launch is the update setting.

![Firefox change settings](/images/blog/firefox_setting1.png)

Click the icon top right and select Options.

![Disable update Firefox](/images/blog/firefox_setting2.png)

Disable the automatic update.

## Firefox setting to enable NPAPI

To change the NPAPI settings in Firefox and enable Flash, Silverlight plugins, just type about:config to open the advanced settings.

![Firefox settings](/images/blog/firefox_setting3.png)

Accept the risk and continue to the settings page. Then right click into the list and select New-Boolean

![Change NPAPI settings in Firefox](/images/blog/firefox_setting4.png)

Type in **plugin.load\_flash\_only** and select **false**.

![Firefox setting plugin.load_flash_only](/images/blog/firefox_setting5.png)

![Change to false](/images/blog/firefox_setting6.png)

Then restart Firefox.

## Install Flash

Make sure to install Flash.

![Install Adobe Flash](/images/blog/install_adobe.png)

## Install Client Integration Plugin

Visit your VMware vCenter Web Client and install the Client integration plugin (best is to start Firefox using an administrative account).

![Download Client Integration Plugin](/images/blog/install_clientintegration.png)

![Install Client Integration Plugin](/images/blog/install_clientintegration2.png)

When everything has been installed successful, you can log into your VMware vSphere Web client and use Client Integration plugin functions like Deploy OVF.

![Deploy OVF function within the vSphere Web Client](/images/blog/deployovf.png)

Just make sure to allow the Plugin to do its job, by clicking allow for the https protocol access.

![allow client access](/images/blog/allow_clientplugin-1.png)

That's it and you should have all up and running.
