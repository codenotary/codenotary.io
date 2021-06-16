---
title: "CNIL Metrics and Logs Review: Simple, Elegant, Efficient Monitoring for Your Virtual Environment"
image: /images/blog/fig5.jpeg
tags: ["Ops", "opvizor"]
date: "2018-03-20"
---

[David Davis](https://www.twitter.com/davidmdavis) wrote an article about our Performance Analyzer with nice screenshots and many information.

We would like to thank David and share his blog post and the key information.

Please find [here](http://www.virtualizationsoftware.com/opvizor-performance-analyzer-review-simple-elegant-efficient-monitoring-virtual-environment/) David's complete article and scroll down for some more.

Opvizor’s Performance Analyzer is a performance monitoring and optimization product for virtual environments, with a specialization in VMware vSphere. Performance Analyzer presents a dashboard that is simultaneously comprehensive and easy to understand and use, but also extremely customizable. Let’s take a closer look at what it can do.

Performance Analyzer is most useful in an environment with at least 100 virtual machines (VMs). These types of settings often suffer from performance issues, including CPU and disk I/O bottlenecks. As virtual environments grow, the hosts and supporting resources start to become constrained as more and more virtual machines contend for resources.

Worse, through valiant attempts to correct apparent performance challenges, well-meaning virtualization administrators often address symptoms rather than the root cause. For example, if a virtual machine (VM) is running slower than expected, a virtualization admin might decide to add more vCPUs to that VM. Unfortunately, this very action can make the problem even worse, rather than improving the situation.

Properly identifying the source of performance problems is a critical first step in understanding how to fix things. Fortunately, Performance Analyzer makes this much easier through the product’s intuitive dashboard.

Performance Analyzer gathers and visualizes performance data from _all_ your datacenter components, including hypervisors, storage, operating systems, containers and cloud providers. More information equates to faster identification and resolution of trouble spots. Without the ability to go beyond the hypervisor, a performance management tool simply can’t be effective.

Please see the installation and setup part in David's article, we directly want to jump into the next part.

## Full Customization

Of course, if you do want to customize the product, that’s easy to do, and you can tweak it to your heart’s desire. You can change dashboards, and a create full-stack view or service-oriented view, for example, for more advanced monitoring needs.

You can easily drill down to get specific performance metrics, too. For instance, if you want to know which VMs are using the most resources, it’s just a matter of setting the right categories in the dashboard; you can instantly see the five (in this case) VMs using the most CPU, memory, read IOPS, write IOPS, etc. See **Figure 5**. This is incredibly handy when you need to find the big performance culprits with minimal effort.

![Performance Analyzer](/images/blog/fig5.jpeg)

_Figure 5. Performance Analyzer showing the “Top 5” VMs in terms of usage._

Let’s take things a step further. What if the source of the problem you’re trying to track down is located in a SQL Server database? Simply open up the “SQL Server Monitoring” dashboard and have a look, as shown in Figure 6.

![Performance Analyzer](/images/blog/fig6.jpeg)

_Figure 6. The “SQL Server Monitoring” dashboard within Performance Analyzer._

Similar to the main UI, at the top is a clear, well-thought-out interface with an overall report (in this case, it’s showing that the SQL databases are “HEALTHY,” with other pertinent information.) In the lower right-hand corner of each box is a little triangle icon which can be enlarged, if you want to take a more in-depth look at a particular metric.

Toward the bottom of the screen is a graphical representation of the database counters, as **Figure 7** shows.

![Performance Analyzer](/images/blog/fig7.jpeg)

_Figure 7. The SQL dashboard, with a popup showing information like logins and logouts, user connections and more._

Hovering a mouse over any of the graphs triggers a popup that provides more data about the various database activities, without ever leaving the main interface. This is the definition of a “single pane of glass” monitoring solution.

You can create as many dashboards as you want for your datacenter. There’s a kind of “dashboard of dashboards” at the top, which allows you to search for a particular dashboard; it also displays a full list of the available dashboards, as shown in **Figure 8**. Just click on the one you want, and it appears in moments.

![Performance Analyzer](/images/blog/fig8.jpeg)

_Figure 8. A dropdown showing all the available dashboards._

## New Functionality

Very recently, Opvizor has updated Performance Analyzer to provide more out-of-the-box usefulness. The [4.8 release](https://www.opvizor.com/release-opvizor-performance-analyzer-version-4-8/) includes three new dashboards, which are highlighted in red in **Figure 9**:

- Spectre & Meltdown
- Starter: ESXi Host Troubleshooting
- Starter: VMware Virtual Machines

![Performance Analyzer](/images/blog/fig9.png)

_Figure 9. The updated Performance Analyzer dashboard, with the new monitors outlined in red._

Spectre & Meltdown is especially interesting. It monitors your environment’s performance after installing the patch for that very serious [Intel chip flaw](https://www.actualtech.io/researchers-warn-huge-security-flaw-affecting-computers-built-last-20-years/), and can compare it to pre-patch performance. Since the patch is notorious for slowing down CPU and IOPS, it’s important to know its impact on your datacenter.

The “Starter: VMware Virtual Machines” dashboard (see **Figure 10**) checks the NUMA Home mode, a metric typically available only with the VMware command-line tool esxtop. This can tell you if NUMA locality is causing a system slowdown. As with the other metrics, it provides graphical clues as to where a performance problem may be lurking.

![Performance Analyzer](/images/blog/fig10.png)

_Figure 10. The “Starter: VMware Virtual Machines” dashboard._

## Other Infrastructure

Opvizor does a fantastic job monitoring your servers, storage, virtual environment, and applications. It will monitor virtual networking and switches inside your virtual environment. However, it does not go beyond the confines of the application environment to perform full physical network monitoring. If you need a single solution that can do everything, including monitoring of physical networking hardware, Opvizor may not be what you’re looking for.

In such a case, though, you may want to consider rethinking your approach to monitoring. There are all-in-one monitoring solutions out there that can monitoring everything, but they’re often incredibly complex and incredibly expensive. The complexity alone can make these products non-starters. Stories abound about companies attempting to implement complex end-to-end monitoring, only to give up or to settle because the product is overly complicated or too noisy.

You may be better served by getting a tool like Opvizor, which excels at helping you support your workload environment, and a different tool that has laser focused on helping you support your network infrastructure.

## Highly Recommended

Overall, Opvizor’s Performance Analyzer is a solid answer to one of the more growing problems in modern datacenters. As VMs proliferate, and storage, CPU and networking become more and more virtualized, keeping track of it all can be an admin’s worst nightmare.

Performance Analyzer can act as your aspirin. It’s a turnkey solution that understands the importance of simplicity and ease of use. It’s very true that the more complicated a monitoring solution is, the less likely it is to be used. Huge learning curves are something today’s admins don’t have time for, especially when solutions like Performance Analyzer are available.

Opvizor has a demo environment running on their website, so you can see how it all works: point your browser to [pademo.opvizor.com](http://pademo.opvizor.com/). Once you’ve seen it, they’re confident you’ll want to get the free, 30-day trial, and then buy the product (pricing is not set, but rather done on a case-by-case basis. Their website indicates, though, that pricing starts at about $650 per year).

We give Opvizor high marks for Performance Analyzer and highly recommend that you put it through its paces for yourself.

Many thanks David for this detailed article and your recommendation! 

Please see David's article [here](http://www.virtualizationsoftware.com/opvizor-performance-analyzer-review-simple-elegant-efficient-monitoring-virtual-environment/) incl comments and we also highly appreciate your comments here on our site.

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-1.png)](http://try.opvizor.com/opvizor-perfanalyzer-product-page/)
