---
title: "vCenter Appliance (VCSA) root Partition full"
tags: ["Ops", "opvizor"]
date: "2018-02-20"
---

What a mess! VCSA cannot be updated anymore or is stuck because of a full root Partition.

Luckily there are straightforward procedures to investigate what files are filling the root partition and how to get rid of them.

## Typical symptoms?

- ISO staging of the update fails
- vCSA update fails at step #/#
- some vCSA services cannot be started

## Filesystem check

Log into your VCSA console, enable the shell and open the shell.

shell.set --enabled true
shell
df -h

![VCSA root partition full](/images/blog/vcsa_df.png)

Ignore the Use % number in the screenshot above, as the partition has been cleaned up already. But any number higher than 95% will stop your update procedure.

When using Performance Analyzer we have a special Highlights dashboard for VM partitions, that can be used to check the partition utilization as well.

[![Performance Analyzer / check vCSA partition](/images/blog/vcsa_pa.png)](http://try.opvizor.com/perfanalyzer)

Please download the dashboard here, to import it into Performance Analyzer: [Download](https://opvizor.atlassian.net/wiki/download/attachments/82057456/Highlights_%20Virtual%20Machines%20-%20Disksize-1517910633543.json)More information at [http://manual.opvizor.com](http://manual.opvizor.com)

## How to resize the partition

If you don't want to make your hands dirty and clean up the partition, you can resize the related virtual disk and partition by following this KB article: 

[https://kb.vmware.com/s/article/2126276](https://kb.vmware.com/s/article/2126276)

The big issue here is, that you just postpone the file cleanup until the partition fills up again.

## How to clean up the partition

### audit.log

In case the audit.log is filling the partition, the task is quite simple and described in the following KB article: 

[https://kb.vmware.com/s/article/2149278](https://kb.vmware.com/s/article/2149278)

1. cd /var/log/audit
2. ls -lh
3. rm -rf audit.log

Check the KB article for all steps to make sure the audit.log is not filling up again.

### mqueue

Another possible reason for a filled up partition are files in /var/spool/mqueue - a less documented situation.

In general, you can use the following command to find the largest directories checking the current and the first subdirectory: df -h -d1

1. df -h -d1 /var
2. if it's /var/log that is very big, check the audit.log solution
3. if it's /var/spool, continue here
4. find /var/spool/mqueue -name "\*" -delete

The reason to use find and delete instead of rm is, that most of the time /var/spool/mqueue contains to many files to be handled by rm.

Check the partitions again using df -h and restart the appliance if needed.

**Btw. You should consider creating a snapshot before deleting any files**
