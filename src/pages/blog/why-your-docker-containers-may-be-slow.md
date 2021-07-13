---
title: "Why your Docker containers may be slow"
image: /images/blog/1-1.jpg
tags: ["Ops", "opvizor"]
date: "2018-04-26"
---

[Maxim Leonovich](https://hackernoon.com/@pacavaca) wrote an interesting article about a debugging story he had recently. This is a really nice and helpful blog post, thanks Maxim. You can read Maxim's article [here](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f), and there are a lot of other interesting posts from him [here](https://hackernoon.com/).

Please scroll down for more...

In my last [blog post](https://hackernoon.com/kubernetes-for-dev-infrastructure-40b9175cb8c0) I was talking about Kubernetes and how [ThoughtSpot](https://thoughtspot.com/) uses it for its dev infrastructure needs. Today I’d like to follow up on that with a rather short but interesting debugging story that happened recently. It re-iterates on the fact that containerization != virtualization and demonstrates how containerized processes can compete for resources even if all cgroup limits are set to reasonable values, and there’s plenty of computing power available on the host machine.

So, we were using our internal Kubernetes cluster to [run a bunch of CI/CD and dev-related workflows](https://hackernoon.com/kubernetes-for-dev-infrastructure-40b9175cb8c0), and everything was going great except one thing: when launching Dockerized copies of our product, we saw a much much worse performance than we expected. Each of our containers had generous CPU and memory limits of 5 CPU / 30 Gb RAM set through the Pod configuration. On a virtual machine that would be more than enough for all the queries upon our tiny (10 Kb) test dataset to fly. And on Docker & Kubernetes, we were able to launch only 3–4 copies of a product on a 72 CPU / 512 Gb RAM machine, before things were becoming too slow. Queries that used to finish in a few milliseconds were now taking a second or two, and that was causing all kinds of failures in our CI pipelines. So, we dove into debugging.

The usual suspects were, of course, configuration errors that we might have made while packaging our product in Docker. However, we couldn’t find anything, that might have caused any slowness, compared to VM or bare metal installations. Everything looked correct. As a next step, we ran all kinds of tests from a [Sysbench](https://github.com/akopytov/sysbench) package. We’ve tested CPU, disk, RAM performance — nothing looked any different from bare metal. Some services in our product save detailed traces of all activities, which can later be used for performance profiling. Usually, if we’re starving on one of the resources (CPU, RAM, disk, network), there would be significant skews in timing for some calls, and that’s how we determine where the slowness comes from. In this case, however, nothing looked wrong. All the timing proportions were the same as in a healthy configuration, except that every single call was significantly slower than on bare metal. Nothing was pointing us in the direction of the actual problem, and we were ready to give up, but then we found this:

[https://sysdig.com/blog/container-isolation-gone-wrong/](https://sysdig.com/blog/container-isolation-gone-wrong/)

In this article, the author analyzes a similarly mysterious case, where two, supposedly lightweight, processes were killing each other, when running inside Docker on the same machine, even though resource limits were set to very conservative values. Two key takeaways for us were:

The root cause of his problem ended up being in the Linux kernel. Due to a kernel dentry cache design, the behavior of one process was making _\_\_d\_lookup\_loop_ kernel call significantly slower, and this was directly affecting the performance of the other.

The author used _perf_ to track down a kernel bug — a beautiful debugging tool, which we never used before (what a shame!).

![Docker containers](/images/blog/1-1.jpg)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

So, we thought: why can’t it be something similar in our case? We run hundreds of different processes in our containers and they’re all sharing the same kernel. There must be some bottlenecks! Armed with _perf_ in both hands, we resumed our debugging and it led us to some interesting findings.

Below are _perf_ recording of a few tens of seconds of ThoughtSpot running on a healthy (fast) machine (left side) and inside a container (right side).

![Docker containers](/images/blog/2.png)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

We can immediately notice, that the top 5 calls on the right side are kernel related and the time is mostly spent in the kernel space, while on the left side, most of the time is spent by our own processes operating in the user space. More interestingly, a call that is taking all the time is a _posix\_fadvise_.

![Docker containers](/images/blog/3-1.jpg)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

It can be used in all kinds of situations, so it doesn’t directly suggest where the problem may be coming from. However, after searching our codebase, I found only one place, which had a potential of being hit by every process in the system:

![Docker containers](/images/blog/4.png)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

It’s in the third-party logging library called _glog_. We use it all over the project, and this particular line is in the _LogFileObject::Write_ — perhaps the most critical path in the whole library. It is called for every “log to file” event and multiple instances of our product might be logging very intensively. A quick look at the source code suggests that the _fadvise_ part can be disabled by setting a _\--drop\_log\_memory=false_ flag:

![Docker containers](/images/blog/5-1.jpg)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

which we immediately tried and… bingo!

![Docker containers](/images/blog/6.png)

Photo courtesy of [Maxim Leonovich](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f)

What was previously taking up to a few seconds is now down to just 8 (eight!) milliseconds. A little bit of Googling took us to [https://issues.apache.org/jira/browse/MESOS-920](https://issues.apache.org/jira/browse/MESOS-920 ) and [https://github.com/google/glog/pull/145](https://github.com/google/glog/pull/145), which further confirmed that this was indeed the root cause of the slowness. Most probably, it was affecting us even on VMs or bare metal, but because there we had only one copy of each process per machine/kernel, the rate at which they were calling _fadvise_ was several times slower, and thus not adding significant overhead. Increasing the number of logging processes by 3–4 times, while letting them all share the same kernel — that’s what caused _fadvise_ to become a real bottleneck.

## Conclusions

While it’s definitely not a new discovery, most people still don’t keep in mind that in the case of containers, “isolated” processes compete not only for CPU, RAM, disk, and network but also for all kinds of kernel resources. And, because the kernel is unbelievably complex, inefficiencies may occur in the most unexpected places (like _\_\_d\_lookup\_loop_ from Sysdig’s article). This by no means concludes that containers are worse or better than traditional virtualization — it’s an excellent tool for its purpose. We should just all be constantly aware of a kernel being a shared resource, and be prepared to debug weird collisions in the kernel space. Furthermore, those collisions are excellent opportunities for intruders to break through the “lightweight” isolation and create all kinds of covert channels between containers. Finally, _perf_ is a wonderful tool that can show you what’s all going on in your system and help you debug all kinds of performance issues. If you’re planning to run high-load applications on Docker, you definitely should invest time in learning _perf_.

### Happy debugging!

Wow! Amazing article, thanks [Maxim](https://hackernoon.com/@pacavaca?source=post_header_lockup)! Please see Maxim's article with all comments [here](https://hackernoon.com/another-reason-why-your-docker-containers-may-be-slow-d37207dec27f).

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-2.png)](https://try.opvizor.com/opvizor-perfanalyzer-product-page/)
