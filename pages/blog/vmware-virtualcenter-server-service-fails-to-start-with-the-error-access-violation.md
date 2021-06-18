---
title: "VMware VirtualCenter Server service fails to start with the error: Access Violation"
image: /images/blog/3143577951_5c6a8c39bd.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-07-15"
---

We ran into this error in our own testing environment and that is a mean one. As that service failure is based on a software bug, it was pure luck to find the solution in one of the [VMware KB articles](http://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2123212 "VMware KB articles").

You recognize the issue of course immediately as you can't login into VMware vCenter anymore and looking up the windows services, you figure out, that it's not started.

It seems that only VMware vCenter 5.5 is affected with the access violation .

The KB article summarizes:

- You are unable to log in to VMware vCenter Server
- The VMware VirtualCenter Server service fails immediately after starting
- In C:ProgramDataVMwareVMware VirtualCenterLogsvpxd.log, you see the errors:2015-04-23T06:09:02.047+09:00 \[07576 info '\[SSO\]' opID=13ad18a1\] \[UserDirectorySso\] Authenticate(administrator@_domain.com_, "not shown") ...2015-04-23T06:09:02.047+09:00 \[07576 info 'Default' opID=13ad18a1\] CoreDump: Writing minidump2015-04-23T06:09:02.047+09:00 \[07576 panic 'Default' opID=13ad18a1\]  -->  --> **Panic: Win32 exception: Access Violation (0xc0000005)** -->    Read (0) at address 0000000000000008 -->    rip: 000000018014c958 rsp: 000000000752d000 rbp: 0000000000000000 -->    rax: 0000000000000001 rbx: 000000000b052a60 rcx: 0000000000000002 -->    rdx: 000000000752d2b0 rdi: 0000000000000000 rsi: 0000000000000b07 -->    r8:  0000000000000b07 r9:  000000000752d5a8 r10: 00000000000007af -->    r11: 000000018021b6f0 r12: 0000000000000002 r13: 000000000752d5a8 -->    r14: 0000000000000000 r15: 000000000a8af760 --> 

There are not too many workaround, either you restart the service in good faith it doesn't stop again or you need to upgrade to [vCenter version 6](https://my.vmware.com/group/vmware/details?downloadGroup=VC600&productId=491&rPId=8035 "vCenter version 6").

![Access Violation](/images/blog/3143577951_5c6a8c39bd.jpg)

Photo courtesy of [Mike Licht, NotionsCapital.com](https://www.flickr.com/photos/9106303@N05/3143577951/)([CC Attribution](http://creativecommons.org/licenses/by/3.0/))
