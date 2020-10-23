---
title: "VMware Tools for Nested ESXi"
tags: ["Ops", "opvizor"]
date: "2015-09-16"
---

If you´re owning a lab or development environment at home or at work, running the VMware ESXi hosts within a virtual machine itself (Nested ESXi), makes a lot of sense.

Not only it gives you a lot of flexibility, you also save a fair amount of money compared to a physical box.

We use Nested ESXi systems heavily at opvizor to do testing and product development.

But there was a negative impact to it, as no VMware tools were available within the ESXi installation itself to run optimized and using best practices. Our [Health Analyzer](http://try.opvizor.com/health-analyzer/ "Health Analyzer") is detecting old and missing VMware Tools and informs you directly about its disadvantages. 

[![Nested ESXi](/images/blog/11372361034_72c276d26e.jpg)](https://labs.vmware.com/flings/vmware-tools-for-nested-esxi)

[](https://labs.vmware.com/flings/vmware-tools-for-nested-esxi)

[Photo courtesy of](https://labs.vmware.com/flings/vmware-tools-for-nested-esxi) [caro.bello](https://www.flickr.com/photos/62876665@N08/11372361034/)([CC No Derivatives](http://creativecommons.org/licenses/by-nd/3.0/))

Luckily there is a solution as a Jim Mattson (VMware Engineer) released a Fling just for the VMware Tools in a  nested ESXi environment. At least for ESXi 5.x for now. You can find his Fling here and please give kudos to him for the great job: 

[VMware Tools for Nested ESXi - VMware Labs](https://labs.vmware.com/flings/vmware-tools-for-nested-esxi "VMware Tools for Nested ESXi - VMware Labs")

Based on the description, the following capabilities are exposed through VMware Tools:

- Provides guest OS information of the nested ESXi Hypervisor (eg. IP address, configured hostname, etc.).
- Allows the nested ESXi VM to be cleanly shut down or restarted when performing power operations with the vSphere Web/C# Client or vSphere APIs.
- Executes scripts that help automate ESXi guest OS operations when the guest’s power state changes.
- Supports the Guest Operations API (formally known as the VIX API).

To install the bundle, it comes as a VIB file and you can use 2 ways to install it:

**Option 1** - Download VIB and upload to an ESXi datastore:

Download [the VIB file](http://download3.vmware.com/software/vmw-tools/esxi_tools_for_guests/esx-tools-for-esxi-9.7.2-0.0.5911061.i386.vib "Tools for Nested ESXi") and upload to an ESXi datastore

_esxcli software vib install -v /vmfs/volumes/\[DATASTORE\]/esx-tools-for-esxi-9.7.2-0.0.5911061.i386.vib_

**Option 2** - Install directly from VMware.com (requires internet access from ESXi host):

_esxcli software vib install -v [http://download3.vmware.com/software/vmw-tools/esxi\_tools\_for\_guests/esx-tools-for-esxi-9.7.2-0.0.5911061.i386.vib](http://download3.vmware.com/software/vmw-tools/esxi_tools_for_guests/esx-tools-for-esxi-9.7.2-0.0.5911061.i386.vib "http://download3.vmware.com/software/vmw-tools/esxi_tools_for_guests/esx-tools-for-esxi-9.7.1-0.0.00000.i386.vib")_

To **uninstall** the VIB:

_esxcli software vib remove -n esx-tools-for-esxi_

We have more blog posts for further reading covering the Nested Installation of vSphere vCenter as well as ESXi.

[https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-preconfiguration/](https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-preconfiguration/ "https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-preconfiguration/")

[https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-install-2/](https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-install-2/ "https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-install-2/")

[https://www.opvizor.com/blog/configuration-of-a-nested-vsphere-6-0-esxi-host/](https://www.opvizor.com/blog/configuration-of-a-nested-vsphere-6-0-esxi-host/ "https://www.opvizor.com/blog/configuration-of-a-nested-vsphere-6-0-esxi-host/")
