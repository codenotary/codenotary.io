---
title: "Sneak Peek: Performance Alert into Chat - Performance Analyzer meets OpBot"
image: /images/blog/alerting_opbot.png
tags: ["Ops", "opvizor"]
date: "2016-12-20"
---

We want to share an upcoming feature that enables OpBot to receive Performance Analyzer alerts and publish them into the Slack chat. 

**Performance Alert into Chat**

Alerting is always an important topic, especially when it comes to uptime and service availability. But we see more and more interest in alerting on performance data and special pattern that go far beyond the typical thresholds. Alerts that combine metrics across multiple entities or get only triggered after a certain amount of time are required.

Our upcoming Performance Analyzer release will not just include Alerting of that kind, but we also enable OpBot to publish alerts into Chat rooms.

That is especially powerful as the customer can define different levels of severity. For example sending the majority of alerts via email, while sending the most critical alerts into a Slack chat.

![Performance Alert into Chat using OpBot](/images/blog/alerting_opbot.png)

There are several good reasons to do so, instead of using email for everything:

1. a different resource that is not spammed like email
2. Chat can definitely be seen as a notification system for higher severity alerts
3. You can directly react on the alerts with actions
4. different Bots can be deployed and report on completely different environments using the same chat. If something happens in the Texas datacenter, the bot in Texas notifies me and I can run commands thru the same bot without thinking about ways to access that specific datacenter.

As you can see in the 2 screenshots, alerts are triggered in Performance Analyzer and send into the chat. The good thing is, that dashboards, graphs and alerts can be customized to the customers need and images of the triggering graph can be attached in the chat.

![Performance Analyzer Alert](/images/blog/alerting_pa.png)

You can expect a release begin of 2017 and we keep you posted about these exciting new features and ways to operate your datacenter.

further information:

[Video Channel OpBot](https://vimeo.com/album/4282477)

[Download OpBot ChatBot](http://try.opvizor.com/opbot)

[Video Channel Performance Analyzer](https://vimeo.com/album/3986998)

[Download Performance Analyzer](http://try.opvizor.com/perfanalyzer)
