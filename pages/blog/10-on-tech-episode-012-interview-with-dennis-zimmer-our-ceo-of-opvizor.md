---
title: "10 ON TECH Episode 012: Interview with Dennis Zimmer, our CEO of Opvizor"
image: /images/blog/Version-3.5-1.png
tags: ["Ops", "opvizor"]
date: "2016-11-08"
---

# [10 on Tech](http://www.actualtech.io/) Episode 012: Interview with Dennis Zimmer, our CEO of Opvizor

On this episode, James Green talked with Dennis Zimmer – friend of the IT community and CEO of Opvizor. In his current capacity, Dennis talks to a lot of IT professionals about the monitoring and troubleshooting issues they have, particularly in vSphere environments. James and Dennis talked about some common misconfigurations or issues that many users experience, as well as how Opvizor is helping users identify and rectify those issues.

Please find [here](http://www.actualtech.io/podcast/012-vsphere-performance-with-dennis-zimmer/) the complete interview and comments.

### Here is the transcript:

**James:** Hello and welcome to another episode of 10 on Tech. This week, I’ve got with me, Dennis Zimmer who is the CEO at Opvizor and we’re going to talk today about vSphere performance. At Opvizor, they offer a couple of solutions and the one we’re going to talk about today specifically helps users with identifying and rectifying performance problems in their vSphere environments. Dennis, thanks for being on the show.

**Dennis:** Yeah, James. Thanks for inviting me.

**James:** If you want to get ahold of Dennis, you can reach him on Twitter. He’s [@vmachine\_de](https://twitter.com/search?q=%40vmachine_de&src=typd&lang=en) on Twitter, so you can send him a message. Dennis, I know that since you guys launched last year, you have been talking to a lot of customers about what sort of performance problems they’re encountering whether that’s bottle necks or difficulty identifying issues. Could you just tell me and the listeners a little bit about what are some of the most common issues that your customers are running into and how you help them find those?

**Dennis:** Yeah. Absolutely. When we started a couple of years ago, we had a product or we still have the product called Health Analyzer. What we saw there was typical misconfigurations. These misconfigurations led to performance impairs but we haven’t had to chance to see it real time so therefore, by end of last year, with Performance Analyzer, we also are capable of seeing everything in real time and that was pretty stunning because some the misconfigurations of course caused the performance bottle neck, but when you see it also real time, we saw a pretty interesting part how bad for example, ballooning or swapping, is really in your environment. Having a misconfiguration for example, you limit the memory. That means you configure 16GB of memory for your database, but it started with 8, so your limitation is still set to 8. Whenever the VM corner tries to get into the 12 or 14GB, it automatically pushes it down to 8, means your guest has no clue what is going on. It just tries to reach the 16. The application has no clue what is going on, just tries to get stuff in to memory, but VM corner is completely making a bottle neck of it. That is pretty hard to see if you’re just looking to the performance metrics, but when you have configuration additionally to the performance metrics, it makes a lot of sense.

Very common is ballooning and swapping because of either VM tools are not installed, they are old, or most importantly, you have limits set that is lower than the actual configuration. That goes hand in hand into issues because of resource pools. We still see a lot of people that haven’t really understood the way research pools should be used and still a lot of customers are using it as a coping hierarchy, but in reality, it’s really a subset of resources and whenever your virtual machine is in a coop that has not enough resources, you may end up with a huge bottleneck and you have no clue that this bottle neck is caused by a resource pool.

What we always recommend is checking for the limits, best is to remove them and there to true for memory as well as for CPU and the other thing is really checking first, do you really need a resource pool? If yes, then please dig deeper into it if you for example, have virtual machines that have a huge amount of memory or a huge need of CPU resources that are outside of the resource pool and forcing all the virtual machines inside of the resource pools to limit themselves. It’s kind of tricky sometimes to understand how resource pools really work, but you should really spend some time and of course our products also help in understanding what resources the virtual machine and application really gets and how to optimize it.

**James:** I’m actually kind of surprised that by this point in time VMware hasn’t changed the default view of the vCenter interface to put you in the folders view because I was a consultant for a number of years and I can anecdotally agree that I don’t know, 9 out of 10 customers that I worked with were using resource pools as an organization construct rather than what their meant to be used for.

**Dennis:** Absolutely.

**James:** I have an interesting story from one of those that I think is relevant to our conversation. I had a customer one time who had seen a number of other professional services organizations trying to solve their problem and they were having serious performance problems with their vCenter server, so they’d get in there to figure out what was going on in their environment at large and VCenter was so slow that they couldn’t do any of their reporting or figure out what the issue actually was and they were just totally stuck. Well, I observed a couple of things and just because of experience, I had an idea of what was going on is they had a misconfigured resource pool and actually had a limit set on the virtual machine. The vCenter server had 4GB of memory allocated and a limit set there, so even though they had it configured with 16 or something, it was only ever getting 4 and it just couldn’t process through everything they were trying to do. That is similar to what you were just describing, but that also brings up another interesting issue which is trying to monitor vCenter with vCenter which can be a challenge. I think that’s somewhere that a tool like the one we’re talking about can come in handy.

**Dennis:** Yeah. Absolutely because what we just started to discuss is of course happening to the recent appliance. If you run VCenter either as a virtual machine on Windows or as an appliance, you can still put it onto under resource pool. We see the same of course for VCenter itself, so you configure it including a database for example and you configure it with a bunch of memory, but limit it still lower and then you have no idea why you are website client is so slow. You have no idea why the structure of VCenter is created so slow or when you work with the operations and deploying a virtual machine, it can take forever to process really starting.

That is something that we have figured out how can you really get into the core of the recent appliance for example, so you can either deploy our services, so data collection service on top of Windows where the database is running or where a recent server is running, but you can also deploy our data collection on the recent appliance itself. Then we get of course, all the information about what is CPU usage? What is memory usage? More important, what is database doing? Is there still a process that is running like crazy or when you have a slow web client, it might not be the web client itself. It might be the web client service that is running on the VCenter appliance and the combination of course of a memory limitation, on top or your recent service is kind of a death threat.

**James:** Yeah. Another one that I was just thinking about was storage. If you had say, a multi-pathing misconfiguration, that could pretty easily turn into a pretty bad performance situation and it’s not necessarily readily identifiable unless you have a tool that’s looking for that kind of thing. Is that something that the Performance Analyzer tool would discover as well? Maybe the Health Analyzer tool?

**Dennis:** Actually with Health Analyzer, we detect if there’s a misconfiguration on the passes. For example, you have configured instead of Round Robin, you actually go for MRU and you do it the wrong way or even fixed pathing and your fixed path is going down or it’s degraded. With Health Analyzer we don’t see the actual impact. We just see the SMS configuration and it’s very likely that it happens to be a bad thing. With Performance Analyzer, we really see okay, your latency is bad. Your high ups are not what they should be and we see it through the full stack. From the storage, we can even go into a net app into a data core to your hypervisor level to your virtual machine level into the guest, into the application. That gives you a really complete overview about where the high ups and where’s the latency issue and you can really pinpoint it.

**James:** That’s the hard part right? We know there’s a problem somewhere. Once we figure out where the problem is exactly in the stack, then identifying the misconfiguration isn’t so challenging, if we know that the problem is between the host and the storage somewhere, we can know to take a good look at the pathing and see how that’s set up and that’s easier. Cool. If people who are listening want to check this out, I know that you guys at Opvizor offer a free trial. I’ve actually deployed it myself just a little bit ago and it was super easy to get out there and I’ve been having fun looking around. How can they get ahold of that and what features are included in that free trial?

**Dennis:** The free trial is meant mainly for VMware environments, but if you happen to have a non-VMware environment, we can also support you, but a direct download would be on our website, Performance Analyzer, and you can directly start 30 day trial. It’s just a virtual appliance to be downloaded. It’s just imported, configure the network, configure the VCenter and you’re ready to go.

**James:** Awesome. If you want to give it a shot which I would definitely recommend, head over to opvizor.com and you can either download the trial or you can start a little chat there on the website and that’ll connect you with somebody that can help you or always reach out to Dennis on Twitter @vmachine\_de and I’m sure he’d be happy to chat with you about it. Dennis, thank you for being on. Go ahead.

**Dennis:** You can also use [@opvizor](https://twitter.com/opvizor?lang=en), that’s sometimes easier.

**James:** There you go. Tweet [@opvizor](https://twitter.com/opvizor?lang=en), maybe there’s a few more people watching that and you’ll get a faster response.

**Dennis:** Exactly.

**James:** Thank you Dennis. I appreciate you being on the show and it’s was enjoyable talking about how you can people solve their performance problems.

**Dennis:** Perfect. Thank you very much and I’m looking really forward to getting your audience trying the product.

**James:** Awesome.

JAMES GREEN: James is a Partner at ActualTech Media and writes, speaks, and consults on Enterprise IT. He has worked in the IT industry as an administrator, architect, and consultant, and has also published numerous articles, whitepapers, and books. James is a 2014 - 2016 vExpert and VCAP-DCD/DCA. [Follow James on Twitter](http://www.actualtech.io/10-tech-episode-012-vsphere-troubleshooting-dennis-zimmer/)

[![Interview James and Dennis](/images/blog/Version-3.5-1.png)](http://try.opvizor.com/opvizor-perfanalyzer-product-page/)

_Performance Analyzer 3.5_

### [Sign up](http://try.opvizor.com/opvizor-perfanalyzer-product-page/) for Performance Analyzer today and start 30 days for free.
