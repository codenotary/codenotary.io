---
title: "Detect Cryptocurrency Miner using Performance Analyzer"
image: /images/blog/starter_view.jpg
tags: ["Ops", "opvizor"]
date: "2018-01-18"
---

Did you ever wonder about misuse of your VMware environment for the purpose of mining crypt currencies? As there is real money to be made mining Bitcoin, Ethereum, Monero and co. especially when using energy one doesn´t need to pay for – some users might be tempted.

Exactly that happened to a customer of us when he first setup the [Performance Analyzer trial](http://try.opvizor.com/perfanalyzer), with the new Starter Dashboard that can be [downloaded here](https://opvizor.atlassian.net/wiki/download/attachments/82057456/Starter_%20VMware%20Virtual%20Machines-1516117446459.json), and noticed some extremely high figures for CPU Ready and especially Co-Stopping.

[![Cryptocurrency Miner VM](/images/blog/starter_view.jpg)](http://try.opvizor.com/perfanalyzer)

![Check CPU Usage](/images/blog/starter_view_lg1.jpg)

![Check CPU Ready, CPU Co-Stopping](/images/blog/starter_view_lg2.jpg)

That was the moment for our client to dig deeper why these VMs were having these load patterns: CPU Usage, CPU Ready, CPU Co-Stopping. 

While many people think that mining crypto coins is only feasible having powerful specialized hardware using many GPUs and ASIC, there is a pretty simple way to switch miner from utilizing CPUs instead of GPUs. The mining software just needs to be compiled in a different way or the miner configuration needs to be changed.

It´s definitely correct, that most coins using proof of work (mining based on calculation and solving mathematical challenges) can´t be mined in an efficient way using CPUs and virtual machines. But that scenario changes when mining is cheaper than the coin price (just to mention [Monero](https://www.cryptocompare.com/mining/guides/how-to-mine-monero/)) or you don´t have to pay for the energy. Even if you detect a Monero miner on your system, you can´t really prove who the recipient is. Some software is even hidden in Javascript and runs when your browser has a certain website open. 

If you don´t track who installed the software, started it or opened the website, its hard to trace the guy that activated it. Furthermore, when more websites are using the Javascript mining, its becoming harder to proof if somebody was using that software on purpose or wasn´t aware of it.

![Miner CPU utilization](/images/blog/miner_cpu.jpg)

The first case our customer found in that example was pretty straight forward as a VM was configured with 50 vCPUs and was pretty busy using them.

You might ask, why does nobody notice a VM configured to use 50 vCPUs? There should be a guideline. In that case the environment was fairly big and some departments were allowed to create and deploy their own virtual machines. The charge back was done by the amount of CPU Cores and not based on utilization. As the machine was idle most of the time, somebody had the idea to use it for a "better" cause and started to mine coins. 

In fact, using a system you don´t have to pay for energy can be very profitable when running a cryptocurrency miner during idle times. While the provider or you as a company providing the virtual hardware don´t like that idea too much, you still need to be aware of the fact to counter act.

Using [Performance Analyzer](http://try.opvizor.com/perfanalyzer) is a great and simple start as you can deploy the virtual appliance in a matter of minutes, add the VMware vCenter and check the dashboard.

The charts in Performance Analyzer automatically check for normal figures and use yellow and red coloring to point out resource utilization that exceeds thresholds based on best practices. That makes it very easy to spot potential noisy neighbors and of course potential misuse of your virtual environment. As we collect data over time, you can compare your most recent performance data with these some days, weeks or even months ago. Checking for anomalies or confirming normal usage has never been easier.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-1.png)](http://try.opvizor.com/perfanalyzer)

Start your free Performance Analyzer trial today and check out if your virtual environment is used the way you like it. And you will be surprised what else you can detect when Performance Analyzer is part of your daily routine using our powerful dashboards and precise data collection - despite unwanted software like the blog-covered cryptocurrency miner.
