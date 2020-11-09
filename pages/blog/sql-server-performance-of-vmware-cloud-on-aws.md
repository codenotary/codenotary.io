---
title: "SQL Server Performance of VMware Cloud on AWS"
image: /images/blog/1-1.png
tags: ["Ops", "opvizor"]
date: "2018-05-17"
---

Please find [here](https://blogs.vmware.com/performance/2018/04/sql-server-vmware-cloud-aws-performance.html) the original article from VMware's performance team or scroll down for more information.

In the past, I’ve always benchmarked performance of SQL Server VMs on vSphere with “on-premises” infrastructure.  Given the skyrocketing interest in the cloud, I was very excited to get my hands on [VMware Cloud on AWS](https://cloud.vmware.com/vmc-aws) – just in time for Amazon’s [AWS Summit](https://aws.amazon.com/summits/san-francisco/)!

A key question our customers have is: **how well do applications (like SQL Server) perform** in our cloud?  Well, I’m happy to report that the answer is **great**!

## VMware Cloud on AWS Environment

First, here is a screenshot of what my vSphere-powered Software-Defined Data Center (SDDC) looks like:

![SQL Server](/images/blog/1-1.png)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2018/04/sql-server-vmware-cloud-aws-performance.html)

screenshot shows several notable items:

- The HTML5-based vSphere Client interface should be very familiar to vSphere administrators, making the move to the cloud extremely easy
- This SDDC instance was auto-provisioned with 4 ESXi hosts and 2TB of memory, all of which were pre-configured with vSAN storage and NSX networking.
    - Each host is configured with two CPUs (Intel Xeon Processor E5-2686 v4); each socket contains 18 cores running at 2.3GHz, resulting in 144 physical cores in the cluster. For more information, see the [VMware Cloud on AWS Technical Overview](https://assets.cloud.vmware.com/v3/assets/blt719094f4883f620b/blt61dafeacad75e15b/5a345939b2f23a2f7143b373/download?disposition=inline)
- Virtual machines are provisioned within the customer workload resource pool, and vSphere DRS automatically handles balancing the VMs across the compute cluster.

## Benchmark Methodology

To measure SQL Server database performance, I used [HammerDB](http://www.hammerdb.com/), an open-source database load testing and benchmarking tool.  It implements a TPC-C like workload, and reports throughput in TPM (Transactions Per Minute).

To measure how well performance scaled in this cloud, I started with a single 8 vCPU, 32GB RAM VM for the SQL Server database.  To drive the workload, I created a 4 vCPU, 4GB RAM HammerDB driver VM.  I then cloned these VMs to measure 2 database VMs being driven simultaneously:

![SQL Server](/images/blog/2-2.png)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2018/04/sql-server-vmware-cloud-aws-performance.html)

I then doubled the number of VMs again to 4, 8, and finally 16.  As with any benchmark, these VMs were completely driven up to saturation (100% load) – “pedal to the metal”!

## Results

So, how did the results look?  Well, here is a graph of each VM count and the resulting database performance:

![SQL Server](/images/blog/3.png)

Photo courtesy of [VMware's performance team](https://blogs.vmware.com/performance/2018/04/sql-server-vmware-cloud-aws-performance.html)

As you can see, database performance scaled great; when running 16 8-vCPU VMs, VMware Cloud on AWS was able to sustain **6.7 million database TPM**!

I’ll be detailing these benchmarks more in an upcoming whitepaper, but wanted to share these results right away.  If you have any questions or feedback, please leave me a comment!

Please find [here](https://blogs.vmware.com/performance/2018/04/sql-server-vmware-cloud-aws-performance.html) the original article from VMware's Performance Team with all comments.
