---
title: "Storage PDL responses may not trigger path failover in vSphere 6.0"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-02-23"
---

[Andreas Peetz](http://www.twitter.com/@VFrontDe), VMware vExpert and [blogger](http://www.v-front.de) tweeted about a major issue in VMware vSphere 6 when it comes to path failover situations.

VMware is aware of the issue that is covered in [KB article](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2144657) [2144657](http://kb.vmware.com/kb/2144657).

## Cause

An inadvertent change in PDL multipathing behavior in ESXi 6.0 results in alternative working paths for a LUN not being checked if a PDL condition/error is detected. Upon encountering a PDL condition on the active path, the ESXi host initiates a health check against the remaining paths but does not fail over if another path is responsive/healthy. The correct response would be to failover to one of the healthy working paths. The result is the host is **no longer be able to issue I/O to these LUNs until the ESXi host is rebooted**. 

## Symptoms

- ESXi 6.0 may not fail over to an alternate, available path after encountering a Permanent Device Loss (PDL) condition on the active path.
- Lack of failover to the alternate path result in aborted I/O, this can cause LUN availability issues which in turn cause virtual machine failures.
- The PDL condition may be encountered on a subset (but not all) paths during non-disruptive upgrade events on certain storage platforms.
- In the /var/log/vmkernel.log file on the ESXi host, you will see path-evaluation activity followed by I/O failures associated with SCSI sense code H:0x8:cpu6:32909)WARNING: NMP: nmp\_PathDetermineFailure:2961: Cmd (0x2a) PDL error (0x5/0x25/0x0) - path vmhba2:C0:T5:L2 device naa.514f0c5ec2000008 - triggering path evaluationcpu6:32909)WARNING: NMP: nmp\_PathDetermineFailure:2961: Cmd (0x2a) PDL error (0x5/0x25/0x0) - path vmhba2:C0:T5:L2 device naa.514f0c5ec2000008 - triggering path evaluationcpu6:32909)WARNING: NMP: nmp\_PathDetermineFailure:2961: Cmd (0x28) PDL error (0x5/0x25/0x0) - path vmhba2:C0:T5:L2 device naa.514f0c5ec2000008 - triggering path evaluationcpu6:32909)WARNING: NMP: nmp\_PathDetermineFailure:2961: Cmd (0x28) PDL error (0x5/0x25/0x0) - path vmhba2:C0:T5:L2 device naa.514f0c5ec2000008 - triggering path evaluation\[ ... \]cpu28:36724)NMP: nmp\_ThrottleLogForDevice:3286: Cmd 0x2a (0x43a61055c5c0, 36134) to dev "naa.514f0c5ec2000008" on path "vmhba1:C0:T6:L2" Failed: H:0x8 D:0x0 P:0x0 Possible sense data: 0x0 0x0 0x0. Act:EVALcpu14:36168)NMP: nmp\_ThrottleLogForDevice:3286: Cmd 0x89 (0x439e11581700, 32806) to dev "naa.514f0c5ec2000008" on path "vmhba2:C0:T7:L2" Failed: H:0x8 D:0x0 P:0x0 Possible sense data: 0x0 0x0 0x0. Act:EVAL
- The LUN and datastore do not return to availability following this event until the original path is available again or the ESXi host is rebooted.

Unfortunately, there is no workaround or resolution other than detect that situation using a log analysis tool or log search, place the host into maintenance mode and reboot.
