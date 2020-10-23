---
title: "VMware – vShere Basics – Re-packing an ova"
tags: ["Ops", "opvizor"]
date: "2018-05-10"
---

A quick and easy tip from [Dan](http://twitter.com/penguinpunk) from [PENGUINPUNK.NET](https://www.penguinpunk.net/).

Please see his blog post [here](https://www.penguinpunk.net/blog/vmware-vsphere-basics-re-package-an-ova/) or scroll down.

This is a quick and easy one. I came across a virtual appliance the other day that had an expired certificate.

![ova](/images/blog/1.png)

Photo courtesy of [Dan](https://www.penguinpunk.net/blog/vmware-vsphere-basics-re-package-an-ova/)

When you click Next you’ll get an error saying the package is signed with an invalid certificate.

![ova](/images/blog/2-1.png)

Photo courtesy of [Dan](https://www.penguinpunk.net/blog/vmware-vsphere-basics-re-package-an-ova/)

It’s a relatively easy fix (or at least workaround) and I followed [Stephen Wagner](https://www.stephenwagner.com/)‘s guidance [here](https://www.stephenwagner.com/2017/10/27/invalid-certificate-when-deploying-vsphere-data-protection-6-1-5-ova-file/). In short, grab a copy of the VMware OVF Tool from [here](https://code.vmware.com/tool/ovf/4.1.0). You then run the following command:

![ova](/images/blog/3-1.jpg)

Photo courtesy of [Dan](https://www.penguinpunk.net/blog/vmware-vsphere-basics-re-package-an-ova/)

You’ll then be able to deploy the appliance without it barfing. Remember, though, that this is a bit of a rough workaround, and you should really contact the appliance vendor in the first instance as they’ll likely be keen to fix the issue. In my case I was able to continue with my testing while the vendor went ahead and fixed things on their side.

Thanks [Dan](https://www.penguinpunk.net/blog/author/admin/) for this quick guide!
