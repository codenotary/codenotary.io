---
title: "Pure Storage Multipathing and Best Practices"
tags: ["Ops", "opvizor"]
date: "2015-05-14"
---

As we´re also using Pure Storage in our own production environment, we wanted to check for best practices using it. As we´re eating our own dog food, first thing was of course analyzing our own environment with our [Health Analyzer](https://www.opvizor.com/register/ "Register – Sign up for the #1 VMware Health analyzer"). Ouch that hurts - lots of issues in our own environment... wrong or non-optimized multipathing set for some datastores. Looking deeper into it, we found out that we were using out of the box MRU (most recently used). This is the VMware vSphere default, when connecting the Pure Storage as Storage Array Type Plugin (SATP) VMW\_SATP\_ALUA is chosen automatically.

[![Pure Storage  default multipathing](/images/blog/pure_1.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/pure_1.jpg)

As we just started using Pure Storage for some weeks, we didn´t optimize the environment in the beginning. But now was the right time.

[![Pure Storage Round Robin multipathing](/images/blog/pure_2.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/pure_2.jpg)

Therefore we made the simplest and most important change for stability and performance - Pure Storage Multipathing policy should be Round Robin. Important to know, if you don´t change the default setting in the VMware ESXi configuration you need to change this setting for each datastore on all hosts.

[![Pure Storage Multipathing - all pathes used](/images/blog/pure_3-300x202.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/pure_3.jpg)

After setting all ESXi Hosts and datastores correctly the performance is even better and all pathes are used! Of course you can further tune these settings changing the I/O treshold.

A very nice guide about Pure Storage multipathing and more best practices from Cody Hosterman including all PowerCLI scripts for people don´t want to do all things manually (like us) can be found here: [VMware PowerCLI and Pure Storage](http://codyhosterman.com/2014/06/03/vmware-powercli-and-pure-storage/)

The complete best practice guide can be found here: [Pure Storage and VMware vSphere Best Practices Guide](http://info.purestorage.com/WP-PureStorageandVMwarevSphereBestPracticesGuide_Request.html)

Of course after doing all the changes and uploading our data to Health Analyzer again all issues were detected as resolved! Basic **Pure Storage multipathing** complete!

[Start checking your vSphere storage configuration!](https://www.opvizor.com/register/ "Register – Sign up for the #1 VMware Health analyzer")
