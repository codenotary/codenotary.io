---
title: "New PostgreSQL Database support in Performance Analyzer"
tags: ["Ops", "opvizor"]
date: "2019-08-05"
---

We're more than happy to announce a new database integration in Performance Analyzer: [PostgreSQL](https://www.postgresql.org/)

As we already have support for Microsoft SQL server and Oracle for quite some time, we noticed a great interest from our customer base to add PostgreSQL as well.

![PostgreSQL](/images/blog/PostgreSQL_logo.3colors.120x120.png)

When running Performance Analyzer 6, you need to make sure to install the 6.2.5 patch and the PostgreSQL license to have the options available to add the database servers.

Please have your PostgreSQL server network dns or ip address ready and a database user that can access the database metrics.

Adding the database server including all databases to the data (metrics) collector is as simple as always using Performance Analyzer, just click add.

![PostgreSQL integration](/images/blog/admin.png)

Next thing you can see is a new dashboard and the data flowing into:

![PostgreSQL dashboard](/images/blog/1-10.png)

The header section allows you to select between the database servers and databases.

We don't just collect the server settings, all kinds of metrics and counters, we also show sessions, the queries and their runtime.

![Postgre Sessions](/images/blog/session.png)

**Collector information:**

- starting time
- cpu usage
- memory usage

**Settings:**

- Shared Buffers
- Effective Cache
- Maintenance Work Mem
- Work Mem
- Max WAL Size
- Random Page Cost
- Sequential Page Cost
- Max Worker Processes
- Max Parallel Workers

**General Counters:**

- Version
- Max Connections
- fetched tuples
- inserted tuples
- update tuples
- deleted tuples 

![PostgreSQL database stats](/images/blog/stats.png)

Database Stats:

- Used connections
- Transactions /sec
- Cache Hit Rate
- Tuple Insert /sec
- Tuples Fetch /sec
- Tuples Returned /sec
- Tuples Delete /sec
- Temp File (Bytes)
- Buffers (bgwriter)
- Lock Tables
- Conflicts
- Deadlocks
- Idle sessions
- Active sessions
- Checkpoint stats

Please contact us if you want to integrate your PostgreSQL database server as well. Its a great addition to our already existing VMware vSphere support, Linux, Docker, Kubernetes aso.
