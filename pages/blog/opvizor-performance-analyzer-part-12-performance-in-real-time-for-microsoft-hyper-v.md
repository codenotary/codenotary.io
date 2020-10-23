---
title: "Opvizor Performance Analyzer: Part 12 – Performance in real time for Microsoft Hyper-V"
tags: ["Ops", "opvizor"]
date: "2016-10-11"
---

6 Best Practices for Physical Servers Hosting Hyper-V Roles

From the Microsoft Press ebook _Understanding Microsoft Virtualization Solutions: From the Desktop to the Datacenter_ by [Mitch Tulloch](http://mtit.com/).

- Avoid Overloading the Server
- Ensure High-Speed Access to Storage
- Install Multiple Network Interface Cards
- Configure Antivirus Software to Bypass Hyper-V Processes and Directories
- Avoid Storing System Files on Drives Used for Hyper-V Storage
- Monitor Performance to Optimize and Manage Server Loading

## Here are 23 Best Practices to improve Hyper-V and VM Performance

by Nirmal Sharma

1. Avoid overloading Hyper-V Server
2. Avoid creation of multiple Virtual Network Switches
3. Configure antivirus software to bypass Hyper-V processes and directories
4. Avoid Mixing Virtual Machines that can or cannot use Integration Service components
5. Avoid storing system files on drives used for Hyper-V storage
6. Use separate volumes for each VM
7. Avoid single point of failure for network adapters using NIC Teaming
8. Always use Network Isolation Mechanism rather than creating a separate virtual switch
9. Install Multiple Network Interface cards on Hyper-V Server
10. Always use supported guest Operating Systems
11. Always use Generation Type 2 Virtual Machines
12. Always change the default location for storing virtual machine configuration and VHD files
13. Monitor performance of Hyper-V Server for optimization
14. De-fragment Hyper-V Server regularly or before creating a virtual hard disk
15. Always install the Integration Components on the supported virtual machines
16. Always use Fixed VHD files
17. Use Dynamic Memory Feature
18. Configure SCSI disks for Data volumes
19. Relocate paging file to a SCSI Disk Controller
20. Always exclude Paging file for virtual machines participating in Hyper-V Replication
21. Implement Hyper-V in Server Core in Production environment
22. Close unnecessary Windows
23. Use Certified Hardware

## Maximizing Hyper-V Performance

Learn the best practises to optimize Hyper-V by [Michael Otey](http://windowsitpro.com/author/michael-otey)

**Hyper-V Host Performance Tips**

Hyper-V offers extreme scalability with VM’s of up to 64 vCPUs and 1 TB of RAM. However, in order to maximize the performance of your Hyper-V platform there are several best practices that you should follow for the both the Hyper-V host and VM guests. For the host:

- Reserve the parent partition for Hyper-V -- Do not run other roles or applications in the parent partition. The parent platform should be reserved for managing Hyper-V. Running other applications in it will degrade of the performance of all your VMs
- Reserve 1GB for Hyper-V partition – The parent partition needs RAM to manage the various VMs and worker threads. Don’t allocate all of the available RAM to the VMs.
- Don’t over allocate your cores – For maximum performance ensure the each VM has a physical core to handle its workload. A rule of thumb for the best VM performance is 1 CPU core per vCPU.
- Don’t run Hyper-V Manager all the time – Hyper-V Manager is an application and will take resources form your VMs. Don’t leave it up all the time. It’s better to manage Hyper-V from a networked system.

**Hyper-V Guest VM Performance Tips**

For the guest Hyper-V VMs you should:

- Use enlighten guest OSes – Enlightened OS can take advantage of higher performance synthetic drivers that use fewer host CPU cycles.
- Consider separating the paging file from the boot drive – Separating the I/O of the paging file can help improve VM performance. Use a VHD or VHDX that is sized at 1.5x the VM RAM.
- Don’t use checkpoints on production servers – Checkpoints are great for test, lab and help desk systems but they increase I/O requirements which will degrade the performance of production servers.

## The New Way

If you're looking for a very modern way to check and monitor performance, you should give [Performance Analyzer a try](http://try.opvizor.com/perfanalyzer/).

Monitor and Analyze Microsoft Hyper-V configuration and performance metrics. Correlate events and metrics in guest applications and infrastructure with Hyper-V metrics. Troubleshoot issues using our efficient data crawler and preconfigured dashboards.

![Microsoft Hyper-V](/images/blog/1.png)

Some of our VMware vSphere integration features are:

- Find Disk I/O bottlenecks
- Full insights into Disk Latency and VM Disk IOps
- See Memory Issues (Swapping) and Network Issues (Packet Loss) instantly
- See Host OS (MS Windows) bottlenecks and most important performance metrics

![Microsoft Hyper-V](/images/blog/2.png)

### [Sign up](http://try.opvizor.com/perfanalyzer/) for Performance Analyzer today and start 30 days for free.
