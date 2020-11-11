---
title: "KB VMware: VM vMotion fails because of multiple VM registration"
image: /images/blog/3769283867_01c3214399.jpg
tags: ["Ops", "opvizor"]
date: "2015-06-22"
---

A pretty old Knowledge Base article has been updated by VMware as the issue is still existing when running vSphere 6.

## 

![vMotion fails](/images/blog/3769283867_01c3214399.jpg)

Photo courtesy of [griffithchris](https://www.flickr.com/photos/15749303@N02/3769283867/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))

## Symptoms

Looking at the symptoms mentioned in [VMware KB 1005051](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1005051 "VMware KB 1005051"):

- Virtual machine appears to be running or registered on multiple ESX/ESXi hosts:
- This issue occurs when:
    - A vMotion fails to complete correctly or times out in VirtualCenter.
    - A DRS issue where virtual machines are migrated by vMotion automatically in quick succession.
    - When a machine is powered on during VMware HA failover.
    - The Service Console on an ESX/ESXi host is low on memory starving the vpxa process.
- In vCenter Server, you see the virtual machine as appearing on one ESX/ESXi host for a few seconds, then it seems to be on the other.
- The virtual machine may appear to jump back and forth among different ESX/ESXi hosts.

## Cause

Guess what? The virtual machine does not just appear to be registered multiple times on different hosts, it really is. Therefore you need to find the VM on the ESXi host you really want to run it and go from there.

That can also happen when a vMotion process was done while the vCenter crashed. vMotion continues to run and finish the migration but vCenter will remember the VM on the old host and detect another on the destination host. In that case you should do a host disconnect, reconnect or a management process restart on the old (origin) ESXi host first.

## Detection using Health Analyzer

Using Health Analyzer you can easily detect that issue as we raise a yellow flag for a duplicate VM registration.

Check your environment here in a free and fast manor: [Sign Up for Health Analyzer](https://www.opvizor.com/register "Sign Up for Health Analyzer")

## Resolution

Basically you need to find out what VM is causing it and unregister it. The complete step by step guide can be found in the KB article itself:

[http://kb.vmware.com/selfservice/microsites/search.do?language=en\_US&cmd=displayKC&externalId=1005051](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1005051 "http://kb.vmware.com/kb/1005051")
