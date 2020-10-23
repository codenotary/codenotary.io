---
title: "Release – Opvizor Performance Analyzer 5.0.2"
tags: ["Ops", "opvizor"]
date: "2019-01-10"
---

We’re thrilled to announce the new release 5.0.2 of our famous Performance Analyzer product to monitor and analyze your virtual datacenter and much more. 

That release is packed with performance improvements of our back-end and front-end. We spent several months to further improve and speed up our data collector engine, the time series performance without asking for more resources. 

The opposite is true as the new release required less CPU cycles and disk space up front. The front-end has been upgraded as well and the dashboards chart caching has been optimized to decrease the loading times, especially in larger environments.

If you´re a storage geek, we have a real goodie for you! Integration of **vSCSIstats** data collection! Configurable on demand and made for storage troubleshooting.

![Performance Analyzer 5](/images/blog/shortvscsiStats_-Cluster_VM.png)

As always there are plenty of new and updated dashboards integrated.

Existing customer, you can find the [patch here](https://opvizor.atlassian.net/wiki/spaces/OPVPA/pages/82057456/Change+Log+Patch) (please always create a snapshot before patching). 

Everyone else can just register on our website to download the latest appliance. 

Here comes the changelog of Performance Analyzer 5.0.2 - what a great release

_Performance Improvements_

- massive overall performance increase
- completely refactored timeseries backend connector
- completely refactored VMware vSphere Crawler (enhanced scalability, greater performance and better resource efficiency) 
- chart rendering caching greatly improved

_Functional improvements_

- added vscsiStats
- Histograms for VMware vSAN

_Backend - Administration_

- separated Admin-UI authentication. Admin-Access now uses OS user instead of Dashboard user
- future upgrades of the appliance merges tag sets on dashboards
- Configuring mail in Admin-UI creates an notification channel automatically
- Added telegraf data collector for 32bit Windows

_Operating System_

- SNMP support automatically pre-installed
- Docker container engine added for future versions
- daily cronjob for configuration backup to second disk
- updated OS data collector packages
- updated Time Series database

_Fixes_

- Cisco UCS Crawler now accepts non IANA time zone database names from UCS Server
- Meaningful subject for report e-mails
- improved handling of inconsistent VMware data
- online resize now handles 0-length files
- removed wildcard default from AD-Group-Selection
- added hints on several fields in Admin-UI
- Testing of NetApp configuration improved
- detect API-incompatible passwords for NetApp and MS SQL
- Testing of MS SQL now reports errors in detail
- incomplete form validation fixed
- dashboards for extensions are updated automatically on Patch install
- warn on missing admin email
- adjust retention for config and performance
- false positive alerts fixed
- and many more

_New dashboards_

- Heatmap Virtual Machine
- Highlights Microsoft SQL Server
- VMware Capacity Planning Detail
- VMware VSAN highlights
- VMware vscsiStats Cluster/VM/Disk
- VMware vscsiStats Host/Datastore
- VMware Wasted Resources Potential Savings

_Improved dashboards_

- Highlights Virtual Machines Disksize:
    - fine-grained CPU-Ready and Costop calculation for SMP-machines
    - include only current Snapshots in top 5 list
    - added guest OS reported free space
- Highlights Virtual Machines:
    - added drill down to detail dashboards
        - fine-grained CPU-Ready and Costop calculation for SMP-machines
- Microsoft Windows Host Overview:
    - Added Disk Reads/sec, Disk Writes/sec, Disk Read Throughput, Disk Write Throughput
- Starter ESXi Host Troubleshooting:
    - added drill down to detail dashboards
    - fine-grained CPU-Ready and Costop calculation for SMP-machines
- Starter VMware Virtual Machines:
    - added drill down to detail dashboards
    - fine-grained CPU-Ready and Costop calculation for SMP-machines
    - added NUMA Home Node Migrations
- VMware Performance ESXi Host:
    - renamed from VMware Performance Host Single
    - added additional NUMA data
- VMware Performance VM Cluster:
    - fine-grained CPU-Ready and Costop calculation for SMP-machines
    - added drill down to detail dashboards
- VMware Performance VM:
    - fine-grained CPU-Ready and Costop calculation for SMP-machines
- VMware VSAN Cache Diskgroup Stats:
    - added Read and Write Requests by Size histograms
    - added Read and Write Requests by Latency histograms
- VMware VSAN Storage Diskgroup Stats:
    - added Read and Write Requests by Size histograms
    - added Read and Write Requests by Latency histograms

vSCSIstats ESXi Host View:

![VMware vSCSIstats Host dashboard](/images/blog/VMware-vscsiStats_-Host_Datastore.png)

vSCSIstats virtual machine view:

![vSCSIstats virtual machines](/images/blog/VMware-vscsiStats_-Cluster_VM_Disk.png)
