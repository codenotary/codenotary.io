---
title: "4 Best Practices for Software Testing With VMware"
image: /images/blog/wpid-bigstock-Stethoscope-On-Laptop-Keyboard-79833199.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-11-17"
---

When it comes time to test your software in VMware, what are the best practices? As it turns out, there is probably already a solution for any issue you might be having. If you happen to stumble across an unusual problem, you can always turn to the vast resources of the VMware community. Here are some of the [best practices](http://www.slideshare.net/EuroSTARConference/martin-klaus-best-practices-for-testing-in-virtual-environments "best practices") when it comes time to test your software.

## 1\. Tracking Down Issues You Can't Recreate

![Software Testing](/images/blog/wpid-bigstock-Stethoscope-On-Laptop-Keyboard-79833199.jpg)

_When it comes time to diagnose an issue, it can often be hard to recreate the problem so that you can see what's going on and get it fixed._

One of the most frustrating parts of [testing a new software system](https://blogs.vmware.com/vcloud/2015/06/leaders-share-best-practices-development-testing-running-applications-cloud.html "testing a new software system") is when you encounter an error but you can't reproduce the problem. In many cases, the bug causes a complete crash, but there is no way to get vital information on what led up to the crash so you can track down and fix the problem. Often, there are multiple bugs that lead to what looks like a single issue, further complicating the matter.

The solution to optimize Software testing is using Record and Replay using VMware Snapshots. This allows you to go back and view the entire VM execution that leads up to an error or crash. You can see all of the threads and processes to find out what triggered the issue. The recorded session is saved in a file for easy access and viewing, even if the error was fatal.

## 2\. Solving Resource Collisions During Testing

When you can't run [different kinds of tests](https://communities.vmware.com/welcome "different kinds of tests") in the same environment due to problems with resourcing, you can solve the problem using cloning and network fencing. You can deploy multiple identical environments at the same time, using one for user acceptance testing, another for regression and integration testing, and still another for installation and upgrade testing.

## 3\. Getting Control When the Test Matrix is Becoming Hard to Manage

When you start having to make tough trade-offs among your test matrix, the schedule for software release, and the quality of software you're going to put out there, it's time to get control of the situation. You can do this by creating templates. For example, you can establish Level One as the operating system, Level Two as the operating system plus patches, and Level Three as the operating system plus patches plus apps. Run your tests at Level Three.

## 4\. Use Smart VMware Monitoring

![VMware monitoring](/images/blog/wpid-bigstock-Newborn-Baby-And-Puppy-83626697.jpg)

_VMware environments are a lot like pets and babies. They're supposed to be okay in there, but you still monitor them at all times, anyway._

Once you deploy your new software, you'll need to continue to keep an eye on the environment. This means a good VMware monitoring solution. The right monitoring solution can mean the difference in spending all your time babysitting your current applications or actually being able to delve into new developments you've been putting off. Opvizor is the ideal solution for [monitoring your VMware environment](http://try.opvizor.com/health-analyzer/ "monitoring your VMware environment")  without having to be so hands-on all the time.

Snapwatcher is a great way to capture VMware snapshots and stay on top of your VMware environment. You can sign up for [Snapwatcher](http://try.opvizor.com/snapwatcher/ "Snapwatcher ") here today.
