---
title: "Storage Administrators Have a Lot to Take Advantage of With vSphere 6 and VMware Performance Monitoring Tools"
image: /images/blog/bigstock-Cloud-Computing-Word-Cloud-81470858.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-01-08"
---

Released in March, vSphere 6 is another step in the direction toward a fully [software-defined data center](http://www.webopedia.com/TERM/S/software_defined_data_center_SDDC.html). In this environment, all of the infrastructure layers will be virtualized, and the virtual machine is the centerpiece of all the action. Policy will direct all of the provision, monitoring, and management tasks. The importance of any given application will dictate the amount of resources it is allotted and exactly how the SLA will be maintained, no matter what happens in terms of hardware and/or software failures. vSphere 6 is a small step for VMware, and a huge step for the software-defined data center. What will storage administrators get out of this new product?

**All New for vSphere 6: VVOLs**

\[caption id="" align="aligncenter" width="586"\]![VMware performance](/images/blog/bigstock-Cloud-Computing-Word-Cloud-81470858.jpg) vSphere 6 makes it easier to allot resources among applications and virtual machines.\[/caption\]

VMware got the community exited about the concept of Virtual Volumes, aka [VVOLs](http://searchvirtualstorage.techtarget.com/feature/Prepare-for-VMware-VVOLs-and-how-they-will-change-storage-products), way back in 2011 at VMworld, but the concept only came to fruition with this release of vSphere. At the same time, various storage vendors also announced support of VVOL within their own products, so it was a timely rollout for all. A simple way to visualize what VVOLs empower the provision, monitoring, and management of application storage at the machine level. VVOLs eliminate the mismatch of architecture between the storage and the virtual machine, empowering the admin to deliver precise, policy-based access to a virtual machine. Better yet, the resources can be redistributed as needed as application requirements change.

**vSphere 6 Features Improvements to Replication**

vSphere 6 makes full synchronizations more efficient for specific storage arrays by making it possible for vSphere to communicate with Replication in order to get storage allocation info and to reduce traffic on the network. It's now much easier to distribute resources using Storage vMotion and DRS without having to violate RPOs to recover a virtual machine. (Note: Replication is not a part of VDP 6.0, which has a completely separate replication engine.)

**vSphere 6 Features Improvements in Security & Data Protection**

\[caption id="" align="aligncenter" width="584"\]![VMware performance](/images/blog/bigstock-Protection-concept-Data-Secur-92894576.jpg) Version 6 also featured lots of improvements relative to data protection and security.\[/caption\]

Data protection and security also [got major enhancements with version 6](http://searchvirtualstorage.techtarget.com/feature/VMware-vSphere-6-release-good-news-for-storage-admins). VMware released VMWare Data Protection Advanced (VDP-A) with the previous version, but the latest version combines VDP and VDP-A functionality. This version supports external proxies, and are able to be deployed in other vSphwere clusters. As many as 24 concurrent streams of backups are possible using external proxies, and it supports Red Hat Enterprise Linux Logical Volume Manager as well as Ext4 file systems. It's free to those who use Essentials Plus Kit 6.0, vSphere with Operations Management 6.0, and vCloud Suite 6.0.

**vSphere 6 Features Improvements in VSAN**

Aside from VVOLs, VSLAN (Virtual SAN) just might be the most important improvements in vSphere 6. Both of these features allow the storage administrator to abstract and pool storage and services in order to provision, monitor, and manage storage based on policies and at the virtual machine level. Along with VSLAN, version 6 also features improvements in snapshots, clones, and the ability to create as many as 32 snapshots or clones for each virtual machine. This amounts to 16K in snapshots or clones for each cluster. There are also improvements in power and rack failures and added support for blade infrastructures.

Are you looking for superior VMware performance monitoring tools to go along with the improvements and enhancements to vSphere 6? [Sign up for Snapwatcher](http://try.opvizor.com/snapwatcher/) today.![](http://mediashower.com/content?Action=tp&cid=35376)
