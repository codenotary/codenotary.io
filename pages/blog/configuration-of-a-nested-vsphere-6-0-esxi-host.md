---
title: "Configuration of a nested vSphere 6.0 ESXi Host"
tags: ["Ops", "opvizor"]
date: "2015-05-13"
---

# Configuration of  a nested vSphere 6.0 ESXi Host

## Configuring the ESXi

The ESXi is installed. Next steps are to configure the ESXi and add it to the vCenter.

When booting the host it will try to fetch an IP-address using DHCP. Since I don’t want to use (and wouldn’t recommend) DHCP for hypervisors I'll reconfigure the host. It's also possible to setup a network-redundancy within this configuration.

![vSphere 6.0 ESXi Host](/images/blog/wpid-esxi6_splash.jpg)

To enter the DCUI just access the console and hit F2.

The console will ask for the root password to grant you access.

After entering your password the configuration menu will show up. This menu contains all you need to initially set up several configurations (mostly network, but also keyboard configuration), test the network, do some troubleshooting, view the systems logs and reset the system.

![vSphere ESXi 6.0 setup pw](/images/blog/wpid-esxi6_pwset.jpg)

First things first, so lets head to the network configuration using _Configure Management Network_.

Since there is only one network adapter and the vlan is already set only level “higher”, I only have to configure the _IPv4 Configuration_ and _DNS Configuration_.

![vSphere ESXi 6 Network](/images/blog/wpid-esxi6_network.jpg)

As you can see it already fetched some IP configuration from the DHCP. But that’s not what I want to use. So changing it to _Set static IPv4 address and network configuration_ by selecting it with the arrow down and mark it and hit space for the configuration I will use my already reserved _IPv4 Address_ 192.168.99.154 with _Subnet Mask_ 255.255.255.0 and _Default Gateway_ 192.168.99.1. Saving the settings using _Enter_.

![ESXi 6.0 Network Setup](/images/blog/wpid-esxi6_network_setup.jpg)

Next step is the _DNS Configuration_.

By default it’s already changed to _Use the following DNS server addresses and hostname_ because of turning of DHCP in the IPv4 configuration.

Checking the existing _Primary DNS Server_ and _Alternate DNS Server_ which the ESXi host set automatically from the DHCP lease. And setting the _Hostname_ to the correct Server name _esxqa6-1_ (underscore in Hostnames are not accepted). Saving using _Enter_ again.

![vSphere ESXi 6.0 dns](/images/blog/wpid-esxi6_network_dns.jpg)

If you are having a domain in you infrastructure you might add it to the _Custom DNS Suffixes_. Doing so it is possible to use short, unqualified names.

When the network configuration is complete hit the _Esc_\-Key to exit the _Configure Management Network_ dialog.

The configuration will ask if you really want to _Apply changes and restart management network?_ – answering _Y_ for yes saves the changes and restarts the management network. Totally fine in this case as nothing is running on the hosts and it isn’t connected to a monitoring or management system.

Finally testing the network using the _Test Management Network_.

![ESXi 6.0 Testing management network](/images/blog/wpid-esx6i_network_test.jpg)

By default it will try to ping the gateway, the primary DNS, the alternative DNS and it will try to resolve the hostname of itself.

All test passed except resolving the hostname (which is totally fine because it’s not added to the DNS by now).

At this point the configuration is complete. Now logging out using _Esc_ and adding the host to the vCenter is next.

You can [add the vSphere 6.0 ESXi Host now to the vCenter](https://www.opvizor.com/blog/vmware-vsphere-6-adding-the-esxi-host-to-the-vcenter/ "add the vSphere 6.0 ESXi Host now to the vCenter")
