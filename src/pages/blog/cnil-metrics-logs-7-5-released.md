---
title: "Metrics and Logs 7.5 released"
image: /images/blog/acmgmt.png
tags: ["Ops", "metrics", "logs", "compliance"]
date: "2021-06-29"
---

After a long period of adding new features, bug fixing and testing we're excited to announce the Metrics and Logs 7.5 release.  
Before we get into bug fixes and improvements, we are thrilled to highlight an absolute innovation that brings significant savings in licensing costs. If you can reduce the number of CPU cores to license because you can now prove that nothing has moved or changed, you can potentially save tens of thousands, hundreds of thousands or more dollars/euros.

## Auditable Change Management
Our new software functionality connects to your VMware management (one or many vCSA) and collects the most important ESXi hardware, VM hardware and configuration changes as well as the virtual machine location over time. Additionally we can even detect when certain operating systems are installed (and running) or applications like Oracle database, Microsoft SQL server or Oracle Java are running.

The screenshot shows the changes that happen to your virtual machines over time. Of course you can create reports based on that and query in realtime.
![Auditable Change Management](/images/blog/acmgmt.png)

This information is not simply stored in a common database, its immutably stored using the [immudb](https://www.codenotary.com/technologies/immudb) database. That provides the foundation for a change audit, as you have a cryptographically-verifiable proof of any change that happened.

Our customers are already using this audit capability to prove to vendors such as Oracle or Red Hat which systems and applications are running where and when. To do so, the VM location (ESXi, cluster, network) and VM resource changes (CPU, memory, network) need to be tracked complete and tamper-proof.

### Virtual machine location tracking

We decided to use a swimlane diagram that allows you to track your automatic (DRS) or manual VM migration.
![VM location changes](/images/blog/vm-location-over-time.png)

If you feel more comfortable using table views, we provide a new dashboard to get a quick overview of all migrations that happen within or across VMware vSphere clusters.
![VM cluster movement](/images/blog/migration-acrosscluster.png)

### Automatic workload detection

Another very useful feature is the automatic detection of operating systems and applications where resource usage and location are relevant for the resulting license costs.
![Detect VM workloads](/images/blog/workload-detection.png)

Today the automatic detection supports:

- Red Hat OS
- Microsoft SQL
- Oracle Database
- Java runtime

Please contact us if you miss an important vendor in our list for your license tracking.

## Where to get the new version?

Existing customers can find the latest patch in our [customer portal](https://www.opvizor.com/activecustomer/) and everyone who likes to evaluate **Metrics & Logs** can simply click [**Start trial**](https://www.codenotary.com/products/immutable-ledger-metrics-and-logs) on our website.

## new Features and Extensions

- configure Log compliance retentions
- Auditable Change Management: Crawler, Dashboards, Reports
- Added NUMA Recommendation engine
- collect Numa Configuration Metrics from Hosts and VMs
- added ESXi power management metrics
- Added HW Version to Metrics
- Diagrams for Appliance metrics
- Limit to TLS v1.2, only high and medium ciphers
- Reports based on [immudb](https://www.codenotary.com/technologies/immudb)
- index compaction for [immudb](https://www.codenotary.com/technologies/immudb)
- Enable large_dir mode for filesystem

Of course we fixed and updated all of our components that includes improved image rendering (for alerting), updated vCenter diagrams and many dashboard updates.


