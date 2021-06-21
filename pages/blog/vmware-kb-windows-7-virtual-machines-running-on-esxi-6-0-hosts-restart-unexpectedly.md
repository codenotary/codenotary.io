---
title: "VMware KB: Windows 7 virtual machines running on ESXi 6.0 hosts restart unexpectedly"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-28"
---

# Microsoft Windows 7 virtual machines running on ESXi 6.0 hosts restart unexpectedly

There has been a new bug reported by VMware that is currently unsolved and causes MS Windows 7 VMs to restart without any warning on an ESXi 6.0 host.

If you can find entries like the following within the vmkwarning.log files then you're affected.

<YYYY-MM-DD>T<TIME> cpu3:255920)WARNING: World: vm 255903: 12276: vmm0:VDI-STD-005:vmk:

vcpu-0:p2m update buffer full<YYYY-MM-DD>T<TIME> cpu3:255920)WARNING: VmMemPf: vm 255903: 652: COW copy failed: pgNum=0x3d108, mpn=0x3fffffffff<YYYY-MM-DD>T<TIME> cpu3:255920)WARNING: VmMemPf: vm 255903: 2626: PhysPageFault failed Failure: pgNum=0x3d108, mpn=0x3fffffffff<YYYY-MM-DD>T<TIME> cpu3:255920)WARNING: UserMem: 10592: PF failed to handle a fault on mmInfo at va 0x60ee6000: Failure. Terminating..

.

<YYYY-MM-DD>T<TIME> cpu3:255920)WARNING: World: vm 255896: 3973: VMMWorld group leader = 255903, members = 1<YYYY-MM-DD>T<TIME> cpu7:255896)WARNING: World: vm 255896: 3973: VMMWorld group leader = 255903, members = 1<YYYY-MM-DD>T<TIME> cpu0:32859)WARNING: World: vm 255903: 9604:

Panic'd VMM world being reaped, but no core dumped.

You can read more in KB article [2117244](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2117244 "2117244")

## Workaround

It seems that the crash is caused by high resolution settings or multiple monitor support. Therefore the workaround is to either reduce the display resolution and limit the VM to one monitor.
