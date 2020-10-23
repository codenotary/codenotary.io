---
title: "Potentially poor vSphere NFS Read I/O performance with 10GbE vmnics"
tags: ["Ops", "opvizor"]
date: "2015-08-24"
---

VMware released a knowledge base article about a real performance issue when using NFS with certain 10GbE network adapters in the VMware ESXi host.

> In vSphere 6.0, NFS Read I/O performance (in IO/s) for large I/O sizes (of 64KB and above) with an NFS datastore may exhibit significant variations. This issue is observed when certain 10 Gigabit Ethernet (GbE) controllers are used. The performance variability reported in this KB is specific to ESXi's NFS client and does not pertain to NFS clients in a virtual machine.

## Symptoms

If you think you´re vSphere NFS performance is affected the following symptoms:

- Varying performance (IOPS) with read workloads.
- Physical NIC shows increasing packet error counts:ethtool -S vmnicX | grep rx\_errors

You should check KB article [Potentially poor NFS Read I/O performance with 10GbE vmnics (2120163)](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2120163 "Potentially poor NFS Read I/O performance with 10GbE vmnics (2120163)")

## Solution

You need to open a command line session to your vSphere ESXi Host:

- List the NICs: _esxcli network nic list_
- Check the receive ring speed (**current hardware settings** - "**RX**", default 496): ethtool -g vmnic# (# - NIC number, i. e. vmnic2)
- Set the receive ring speed to 4096: ethtool -G vmnic# rx 4096 (# - NIC number, i. e. vmnic2)

![Warp Speed for vSphere NFS](/images/blog/19776471439_0542ab0257.jpg)

Photo courtesy of [dolbinator1000](https://www.flickr.com/photos/126654539@N08/19776471439/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))
