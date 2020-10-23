---
title: "static routes for VMware ESXi vmkernel ports"
tags: ["Ops", "opvizor"]
date: "2016-01-21"
---

Sometimes it can be tricky to fully access the VMware ESXi server as well as all virtual machine consoles (MKS) as the ESXi has multiple VMkernel ports but can only accept one single default gateway.

This is especially the case if your ESXi servers are hosted in a provider environment and you have only a public IP address as an initial configuration. To get a better idea of the network setup, check out the following simple network diagram.

- Internet Gateway has the ip address 8.8.8.8 (don't use that example, as it's the Google dns)
- ESXi Host has two vmkernel adapter: vmk0 8.8.8.4 and vmk1 192.168.20.100
- ESXi Default Gateway is configured to use 8.8.8.8
- LAN Subnet 192.168.20.0 / 24
- LAN Gateway to access other networks 192.168.20.1
- Client Admin subnet is 192.168.40.0 / 24

![network diagram - static routes for VMware ESXi](/images/blog/network.png)

If you access the ESXi Host using 8.8.8.4, so the public ip address all works fine:

- vSphere Client access
- vCenter access
- vSphere Webclient access
- import of virtual appliances
- Console session to virtual machines

If you try to access the ESXi Host using 192.168.20.100 from a system located in 192.168.40.0 (client Admin network) likely no communication will work. 

The system within the 192.168.40.0 network knows its way to 192.168.20.100 but there is no route that helps the VMkernel port to find it's way back. The ESXi system always tries to use the vmk0 adapter and the default gateway 8.8.8.8 to reach the 192.168.40.0 network and that obviously fails.

![VMkernel network configuration](/images/blog/network_esx.png)

Depending on the routing situation, the ip connectivity or the way vCenter is accessing the ESXi hosts using the client admin system you might be able to use the vSphere client, vCenter or the Webclient to access and configure the ESXi hosts or start virtual machines but the console session or the import of virtual appliances fails due to network errors. Sometimes the console session is just black.

In that example, this can be real tricky if the VMware vCenter server is located within the 192.168.20.0/24 network and accessing all ESXi hosts in the right way and your client is connected to vCenter from 192.168.40.0/24. All seems fine until you try to open a VM console session or an import of an ova image fails while accessing the vmdk files.

What needs to be done is to add a route for the 192.168.40.0/24 network using the 192.168.20.1 router.

Let's start step by step:

1. Open a console to the ESXi or ESX host. For more information, see [Using Tech Support Mode in ESXi 4.1 and ESXi 5.x (1017910)](http://kb.vmware.com/selfservice/search.do?cmd=displayKC&docType=kc&docTypeID=DT_KB_1_1&externalId=1017910) or[Tech Support Mode for Emergency Support (1003677)](http://kb.vmware.com/selfservice/search.do?cmd=displayKC&docType=kc&docTypeID=DT_KB_1_1&externalId=1003677).
2. ESX 4.x and 5.0, run **esxcfg-route -a 192.168.40.0/24 192.168.20.1**
3. ESX 5.1 or 6.x, run **esxcli network ip route ipv4 add --gateway 192.168.20.1 --network 192.168.40.0/24**

Check out the [VMware KB article](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2001426) for more information

If all went well, you should be able to fully access your ESXi hosts using vSphere client or vCenter without any limitation. Should you run a hosted ESXi with a public IP being accessible out of the wild wild internet, now it's also possible to completely lockdown the ESXi on the vmk0 interface. Of course before you made sure that you can access all you need from within the LAN or a VPN.

To health check on your vSphere environment make sure you register for [vSphere Health Analyzer here](http://try.opvizor.com/health-analyzer/)
