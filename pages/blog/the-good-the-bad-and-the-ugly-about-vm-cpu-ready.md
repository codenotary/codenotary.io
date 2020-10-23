---
title: "The good, the bad and the ugly about VM CPU ready"
tags: ["Ops", "opvizor"]
date: "2015-05-07"
---

Let's go step by step into the title of this post and what is to say about VMware vSphere and VMs having CPU ready numbers.

## What means VM CPU ready?

Of course the most obvious start is to explain what VM CPU ready means at all. Long story short, a virtual machine having high ready percentage is never a good thing. Ready could suppose the Virtual Machine is ready to go and all is well. In reality some VM processes are ready to go, but they can't as no physical CPU resources are available. The virtual machine and the applications inside need to wait for a physical CPU to get free resources and process the data.

Nobody likes to wait, so doesn't a VM and the database running inside.

The result is a virtual machine that has been slowed down either by a lack of resources or a misconfiguration.

You can read more about - 

a [deeper explanation from Anthony](http://anthonyrhook.com/vsphere-cpu-ready-time/ "deeper explanation from Anthony")

how to detect ready values and make it visible using ESXtop at yellow-bricks.com [here](http://www.yellow-bricks.com/esxtop/ "here at yellow-bricks").

and how it can [affect your MS SQL](https://www.sqlskills.com/blogs/jonathan/cpu-ready-time-in-vmware-and-how-to-interpret-its-real-meaning/ "affect your MS SQL")

## The good...

Honestly I don't think there is anything good to say about it except the percentages are close to 0%. Otherwise you'll have some performance affect, althought it might not be very bad. You should always watch for CPU ready within your VMware vSphere environment and check if there are easy ways to fix them. 

**CPU ready** values that can be assumed OK are **below 5% per vCPU**. Important - per vCPU. That means 10% total ready on a 4 vCPU virtual machine is about 2,5% per vCPU. 

[![VM CPU Ready using Performance Analyzer](/images/blog/pacpuready.png)](http://try.opvizor.com/perfanalyzer)

## The bad...

Ready values of **5% or more** per vCPU should already be seen as a warning and you can already measure performance degradation, especially running high performance applications within the guest.

 An Oracle or Microsoft SQL database is going to hate the System administrator responsible for that situation. Actually the application vendor support is also going to hate the poor guy calling, as these situations are hard to pin down, when not seeing the full picture.

[![Performance SQL server virtual machine](/images/blog/pasql.png)](http://try.opvizor.com/perfanalyzer)

You always need to take into account, that the guest OS has no idea about the situation, just the triggered process is slow.

A misconfiguration can be extremly easy to fix, as most of the time you have some systems using too many vCPUs (very often by mistake or without better knowledge) or there is a vCPU limitation hurting the VM performance.

When there is no misconfiguration at all, you can find yourself in a 10% or more CPU ready situation due to extremly large VMs running on a few physical cores or a similar misproportion of vCPU vs. pCPU. That should be checked using ESXtop to get details in realtime.

## The ugly...

Ready values of **10% or more** per vCPU should already be seen as an error and the performance situation can get really nasty. Very high Ready times for the vCPU can even trigger application errors and crashes. Again, very hard to find when just looking inside of the VM guest. It's very important to watch the outside VMkernel metrics either using ESXtop or tools like Opvizor Performance Analyzer.

\[optin title="Get more informations like that post!" text="VMware Hints and more" buttontext="Sign Up for news" successMessage="Message has been submitted successfully." errorMessage="Failed to send your message. Please try later." invalidEmailMessage="Your email address does not appear valid." border="false" collectfirstname="false" collectlastname="false" collectphone="false" collectcompany="false"\]

## Surveilling and fixing VM CPU ready using Opvizor Performance Analyzer

# 

Our Performance Analyzer solution gets you insights into your VMware vSphere environment within minutes and these insights include of course CPU related performance issues. Of course not just CPU related, but any performance related issue you can imagine. All information within seconds.

[![VM CPU ready issue found in Performance Analyzer](/images/blog/pacpureadytophigh.png)](http://try.opvizor.com/perfanalyzer)

CPU ready is definitely one of these you can either find as a found issue or look it up based on the last hours data.

[![Watching CPU Ready is important](/images/blog/pacpureadytop-2.png)](http://try.opvizor.com/perfanalyzer)

[Register Today and check your environment within a couple of minutes](http://try.opvizor.com/perfanalyzer "Register Today and check your environment within a couple of minutes")
