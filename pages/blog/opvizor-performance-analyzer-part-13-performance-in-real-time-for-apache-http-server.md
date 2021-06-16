---
title: "CNIL Metrics and Logs: Part 13 – Performance in real time for Apache HTTP Server"
image: /images/blog/1-1.png
tags: ["Ops", "opvizor"]
date: "2016-10-13"
---

[Here](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=7&cad=rja&uact=8&ved=0ahUKEwi62eSwr8HPAhVKRSYKHXNtCk4QFghTMAY&url=http%3A%2F%2Fwww.apachecon.com%2Feu2007%2Fmaterials%2FPerformance_Up.ppt&usg=AFQjCNE6U21ulRLaMrHdjXhtQTU9eBoy0g&sig2=XHuZBJzlczcDCYYJw-reGA&bvm=bv.134495766,d.eWE) is a complete power point for your Apache performance tuning.

## Top 6 best practices for fine-tuning your Apache performance

by [Ralph Eck](http://www.monitis.com/blog/author/ralph/)

- Keep your Apache updated with the latest releases and patches
- Disable Directory Listing
- Disable unnecessary modules & services
- Ensure that Apache server-info is disabled
- Disable Trace HTTP Request
- Leverage Monitis Apache Tomcat Monitoring

find [here](http://www.monitis.com/blog/top-6-best-practices-for-fine-tuning-your-apache-performance/) the complete article.

## 5 Tips to Boost the Performance of Your Apache Web Server

by [Gabriel Cánepa](http://www.tecmint.com/author/gacanepa/)

According to a recent report by Netcraft (a well-known Internet company that provides among other services web browser usage statistics), Apache continues to be the most widely used web server among sites and Internet-facing computers.

Additionally, Apache keeps experiencing the largest growth among the top web servers, followed by Nginx andIIS. Thus, if you are a system administrator in charge of managing Apache installations, you need to know how to make sure your web server performs at the best of its capacity according to your (or you client’s) needs.

In this article we will discuss a few tips that will help you ensure that Apache will run smoothly and be able to handle the number of requests you are expecting from remote clients.

However, please keep in mind that Apache was not designed with the objective of setting benchmark records – but, even so, it is still capable of providing high performance in almost any usage case you can possibly think of.

​TIP #1: Always keep Apache updated to its latest version

TIP #2: If you are using a Kernel older than 2.4, consider upgrading now

TIP #3: Choose the Multi-Processing Module (MPM) that works best for your case

TIP #4: Allocate RAM wisely for Apache

TIP #5: Know your applications

please find the complete article [here](http://www.tecmint.com/apache-performance-tuning/).

## Web server performance comparison

by [DreamHost.com](https://help.dreamhost.com/hc/en-us/articles/215945987-Web-server-performance-comparison)

Over the years, a myriad of web servers have been written.

Apache, being one of the oldest, is [the most widely used today](http://news.netcraft.com/archives/2015/01/15/january-2015-web-server-survey.html). However, it was implemented with a scaling mechanism that can be relatively inefficient in some ways. Some newer web servers have come out in the last few years that attempt to address some of the shortcomings of Apache. The most prominent of these are [Lighttpd](https://help.dreamhost.com/hc/en-us/articles/218079257-Lighttpd) and [Nginx](https://help.dreamhost.com/hc/en-us/articles/216431827-Nginx-overview).

This article examines the relative performance of each web server to see how they compare head-to-head. Keep in mind that this is not meant to be an exhaustive be-all end-all performance comparison. The hope is to simply give a relative performance comparison under common conditions.

Testing method

- The method to test these web servers uses [ApacheBench](http://httpd.apache.org/docs/2.0/programs/ab.html) (an HTTP server benchmarking tool).

- In each test, 25,000 requests are made for a [5k PNG file](https://objects-us-west-1.dream.io/kbimages/images/Dreamhost_logo.png) locally from a VPS to remove potentially variable network conditions from the equation.

- Before each test the web server in question was restarted to clear out any potential caching or other issues that may interfere with results.

- Each test was run with different numbers of concurrent requests to gauge performance at different levels of usage. (Consider that it's very common for browsers to allow up to 6 concurrent connections per single user you have browsing a site. Therefore 10 users browsing your site at the same time would amount to approximately 60 concurrent connections).

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer](http://try.opvizor.com/perfanalyzer/) a try. 

Monitor and Analyze Apache HTTP webserver performance metrics. Correlate events and metrics from applications and its operating system metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![Apache HTTP Server](/images/blog/1-1.png)

Some of our Apache HTTP integration features are:

- Get System overall status (across multiple systems)
- Check Webserver and OS performance and utilization
- See Memory Issues and Network Issues (Packet Loss) instantly
- Get all networking details
- Combine with Database or OS metrics

![Apache HTTP Server](/images/blog/2-1.png)

### [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
