---
title: "CNIL Metrics and Logs: Part 11 – Performance in real time for Azure SQL"
image: /images/blog/mssql1.png
tags: ["Ops", "opvizor"]
date: "2016-10-06"
---

Performance best practices for SQL Server in Azure Virtual Machines, find the complete article from Microsoft Azure [here](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-windows-sql-performance/) incl a quick check list by [Jason Roth](https://github.com/rothja).

"This topic provides best practices for optimizing SQL Server performance in Microsoft Azure Virtual Machine. While running SQL Server in Azure Virtual Machines, we recommend that you continue using the same database performance tuning options that are applicable to SQL Server in on-premises server environment. However, the performance of a relational database in a public cloud depends on many factors such as the size of a virtual machine, and the configuration of the data disks.

When creating SQL Server images, [consider provisioning your VMs in the Azure portal](https://azure.microsoft.com/en-us/documentation/articles/virtual-machines-windows-portal-sql-server-provision/). SQL Server VMs provisioned in the Portal with Resource Manager implement all these best practices, including the storage configuration.

This article is focused on getting the _best_ performance for SQL Server on Azure VMs. If your workload is less demanding, you might not require every optimization listed below. Consider your performance needs and workload patterns as you evaluate these recommendations."

## Also from Microsoft Azure:

Azure SQL Database performance guidance for single databases by [Carl Rabeler](https://github.com/CarlRabeler). Find the complete article [here](https://azure.microsoft.com/en-us/documentation/articles/sql-database-performance-guidance/).

"Microsoft Azure SQL Database has three service tiers, Basic, Standard, and Premium. All strictly isolate the resource provided to your Azure SQL Database and guarantee predictable performance. Performance is measured in DTUs. To get more information about DTUs, see what is a DTU. This article provides guidance in choosing the service tier for your application and provides recommendations for tuning your application to get the most out of your Azure SQL Database.

- Basic: The Basic service tier is designed to provide good performance predictability for each database hour over hour. The DTU of a Basic database is designed to provide sufficient resources for small databases without multiple concurrent requests to performance nicely.
- Standard: The Standard service tier offers improved performance predictability and raises the bar for databases with multiple concurrent requests like workgroup and web applications. Using a Standard service tier database allows you to size your database application based on predictable performance minute over minute.
- Premium: The Premium service tier provides predictable performance second over second for each Premium database. Using the Premium service tier allows you to size your database application based on peak load for that database and removes cases where performance variance can cause small queries to take longer than expected in latency-sensitive operations. This model can greatly simplify the development and product validation cycles needed for applications that need to make strong statements about peak resource needs, performance variance, or query latency."

## Performance Monitoring with Application Insights

[Here](https://azure.microsoft.com/en-us/documentation/videos/performance-monitoring-application-insights/) is a video available for "Detect, Diagnose & Solve Problems with Application Insights"

## Performance tips for DocumentDB

[Mimi Gentz](https://github.com/mimig1) wrote:

"Azure DocumentDB is a fast and flexible distributed database that scales seamlessly with guaranteed latency and throughput. You do not have to make major architecture changes or write complex code to scale your database with DocumentDB. Scaling up and down is as easy as making a single API call or SDK method call. However, because DocumentDB is accessed via network calls there are client-side optimizations you can make to achieve peak performance."

## The new Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/). 

Monitor and Analyze Azure SQL Server configuration and performance metrics. Troubleshoot bottlenecks and capacity issues in minutes using our efficient data crawler and preconfigured dashboards. Easy integration through Azure Management services.

![Azure SQL](/images/blog/mssql1.png)

Some of our Azure SQL Server integration features are:

- Visualize real-time and historical performance metrics of your SQL Server
- Set important thresholds for your SQL Server based on custom metrics
- Use Database I/O and Size trends to plan capacity and performance ahead
- Share important data from your SQL Server with your team in real-time

![Azure SQL](/images/blog/mssql2.png)

### [Sign Up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today!

Performance Monitoring with Application Insights
