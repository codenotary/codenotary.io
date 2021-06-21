---
title: "Virtual Machine Security & VMware Monitoring: Dark Art or Actual Science?"
image: /images/blog/security-265130_640_600x.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-07-05"
---

# Virtual Machine Security & VMware Monitoring: Dark Art or Actual Science?

Virtual machine security and VMware monitoring should be all science, right? But it isn't. According to professionals at Kaspersky Lab, assuring the security and health of a virtual network is still very much a black art. One of the primary issues is that businesses and their IT departments most commonly try to use the same security measures and monitoring techniques they used for their old, physical machines and networks on their new, virtualized ones. 

This leaves the network, and the business, [wide open to a huge set of risks and potential problems](http://www.computerweekly.com/news/2240231221/Securing-virtual-machines-still-a-dark-art-says-Kaspersky-Lab).What are the most common misconceptions in Virtual Machine Security that are putting businesses and their IT environments at the greatest risk? 

**All We Need is VMware Monitoring and Security for the Endpoints**

![VMware Virtual Machine Security](/images/blog/security-265130_640_600x.jpg)

_Security for physical machines is quite different from securing virtual machines. You can't depend on the products that worked well in your physical environment, and a solution for your virtual environment may entail multiple products._ 

Many businesses, even IT professionals, mistakenly believe that the endpoint security solutions they use to protect PCs, mobile devices, and servers are also capable of protecting the virtual environment. Unfortunately, this is a myth (though a pretty common one). Most endpoint security solutions are not even aware that the virtual environment exists. 

So, while they're looking at and trying to monitor and protect the physical system, thereby hindering performance by downloading updates for all of the virtual machines on the network, those solutions are doing nothing to actually protect the virtual machines. 

**The Antivirus Software Does Nothing to Interfere With the Virtual Environment** 

Traditional antivirus, antimalware, and other endpoint security solutions utilize an agent-based model in which all of the physical and virtual machines on the network receive a copy of the software's agent. That agent then communicates with all of the various servers in the process of doing its duties. 

While this model works quite well for physical machines, it can complicate the virtual environment tremendously and needlessly. Say you have 100 virtual machines running. That means you have 100 separate instances of that security product, not including the additional 100 instances of the antivirus signature database running on the virtual host. What a waste! It indeed affects performance. 

The wasted duplicates negatively affect storage capacity, as well, and can add to the lag time between the boot-up process and when protection and monitoring of the virtual machines kicks in. This leaves a gap in security that would not even exist without the antivirus software. You need a VMware monitoring and security solution that kicks in the instant a virtual machine is called to life. 

**Virtual Machines are, by Nature, More Secure Than Physical Machines** 

The fact is that virtualization is created and designed to allow all software to act just as it would in any physical environment. That includes viruses and other malware. The hackers who develop malware are opportunists, more than willing to target weaknesses anywhere and everywhere they exist. As virtual environments grow in the marketplace, they will become an ever larger, therefore ever more attractive target.The data hackers stand to steal on virtual networks is the same stuff they are used to stealing off physical machines every day. Unfortunately, a virtual environment may actually make things easier for the hacker. 

When they have compromised a single virtual machine, it could then be possible for the hacker to [replicate the malicious code across all of the other virtual machines](https://theintercept.com/2015/09/16/getting-hacked-doesnt-bad/) that are sharing the same physical server. This could give the hacker more leverage for making off with sensitive business data. 

**The Best Way to Secure a Network is by Using Non-Persistent Virtual Machines** 

This is the one mistake theory on this list that actually [makes some sense](https://www.deepdotweb.com/2015/03/02/tutorial-high-security-virtual-machines/). But in reality, hackers have already found a way around this little benefit of the virtual environment. Since any machine that comes in contact with malware can be quickly and easily snuffed out of existence and recreated in a clean state from scratch, hackers have begun designing malware that can survive the takedown of single virtual machines by spreading itself across the network and returning to the newly created virtual machine when it is up and running. 

In environments that have policies allowing new machines to be spun up on demand, this can lead to virtual machine sprawl, a situation where virtual machines are created and then completely forgotten about. This can, in turn, lead to virtual machines that are not maintained and are running without the knowledge or control of the IT staff. How dangerous. 

Even if all of the virtual machines that are running under VMware monitoring and security tools are kept secure, one virtual machine can eavesdrop on another, leading to unnecessary gaps in security and potential privacy issues. Additionally, sensitive information like login credentials or passwords can get leaked this way. Since most virtual machines are actually persistent servers, those are not shut down even if a security situation is known to be underway. 

**All VMware Monitoring and Security Solutions are Just About the Same**

![Monitoring Virtual Machine Security - Uptime](/images/blog/heartbeat-163709_640_600x.jpg)

_When it comes to VMware monitoring, that's a cinch. Sign up for [Perf Analyzer](http://try.opvizor.com/perfanalyzer/) and get more visibility and control over your virtual environment than you ever dreamed possible._ 

The virtualized environment requires flexibility in order to provide complete protection. Most traditional endpoint solutions aren't able to provide this kind of flexibility. This might include something like a combination of agent-less and light-agent security in order to assure advanced protection for the entire spectrum of virtual environments. 

The very nature of virtual environments is that they aren't a one-size-fits-all kind of deal. It can take a unique approach to assure security for your virtual environment, which might include a combination of different products, depending on what you have that needs to be protected. For example, a server that isn't even connected to the Web will have totally different needs in terms of security from a virtual desktop or a server that is in charge of housing and processing sensitive consumer data. 

![VMware Virtual Machine Monitoring Uptime](/images/blog/vm_dashboard_perfanalyzer-1.png)

When it comes to the right VMware monitoring solution, there's no guesswork involved at all. 

## **Start using [Performance Analyzer](http://try.opvizor.com/perfanalyzer/) today.**
