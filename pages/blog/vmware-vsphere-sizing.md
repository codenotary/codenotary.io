---
title: "VMware vSphere sizing"
image: /images/blog/1_Recommend-Sizing_v1.2.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2017-01-24"
---

[Markus Kraus](https://twitter.com/vMarkus_K) wrote a Power CLI script in order to make it easier for him and his colleagues the recurring task of the data collection in order to make a VMware vSphere Sizing. This collects some information in an existing VMware vSphere environment as a basis for a new hardware sizing.

If you can read German, please check the complete article [here](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)

The focus of the collected data is the server sizing. The current version also contains some storage data.

Of course, these data alone are not sufficient to create sizing. For Markus a qualified sizing means a holistic view of the requirements and processes of the customer.

![vSphere sizing](/images/blog/1_Recommend-Sizing_v1.2.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)

## _Complete output of the current version 1.2_

## _Want that information on your mobile..._

and just without the hazzle of connecting to a system with a running PowerShell, PowerShell and the script installed. We're more than happy to let you know that we added that great script module from Markus to [OpBot](http://try.opvizor.com/opbot)!

You can use it a bit different, as we changed the command name as well as the command parameters, but it's as simple to use as it can get.

Tell [OpBot](http://try.opvizor.com/opbot) _**posh cluster-summary <clustername>**_ and that's it:

_![posh vsphere sizing](/images/blog/cluster-summary.png)_

To list all the clusters just use _**list clusters**_ command.

[Download OpBot and simplify your IT life today](http://try.opvizor.com/opbot)

## _More information on the native PowerCLI command_

![vSphere sizing](/images/blog/2_Recommend-Sizing_noStats_v1.2.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)

_Output without stats_

_![vSphere sizing](/images/blog/3_Recommend-Sizing_Debug_v1.2.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)



_

_Also a detailed output of the recording is possible_

## Calling the VMware vSphere sizing script

Markus created the script as a PowerShell module with the aim of easy handling.

![vSphere sizing](/images/blog/4_.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)

For further processing the data can of course be exported:

![vSphere sizing](/images/blog/5_.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)

For a large number of vSphere clusters, the call may also look like this:

![vSphere sizing](/images/blog/6_.png)

Photo courtesy of [Markus Kraus](http://mycloudrevolution.com/2016/12/05/script-vmware-vsphere-sizing/)
