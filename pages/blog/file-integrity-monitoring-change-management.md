---
title: "File Integrity Monitoring & Change Management"
image: /images/blog/login.png
date: "2020-02-11"
---

The term "file integrity monitoring" was introduced in 2001 as a security specification as part of the PCI standard.

## What is file integrity monitoring

It basically covers the technology that monitors and detects changes in files that may indicate a cyber attack. File integrity monitoring is a critical security control, that needs to be simple to setup and configure. Furthermore, it needs to be more than a simple change detection. The fundamental technology needs to be tamperproof and the alerting needs to live out of reach of the monitored system.

## A typical file integrity monitoring process

File integrity process requires the following steps:

1. Set policy: Start by defining your notification policy, identifying which files on which devices need to be monitored.
2. Baseline files: Make sure you're files are in a good state, before starting the integrity monitoring. Evaluating content, version, creation date and modification date, or any other file attribute is a good start.
3. Monitor & Reconcile Changes: You may see dozens or hundreds of file changes on a normal day on a single system. Focus on the critical configuration files and binaries is important to avoid notification flooding. The use of ignore lists or well defined monitoring configurations is key.
4. Alert and action: When unauthorized changes are detected, go for the most critical alerts and take action before more damage is done.
5. Dashboard: FIM is required for PCI compliance and most other standards. Clear dashboards displaying tamperproof data are vital for operational processes and audit compliance.

## Why is file integrity monitoring important?

- Cloud server are by definition accessible over the internet. Even a small misconfigutation or weakness, can allow unauthorized access. It doesn't matter if you're using Google, Amazon, Azure or a local provider to host your server - you are responsible to protect your systems.
- File servers are a prime target and at risk of internal and external attacks. Data breaches have the potential to cause massive financial or reputational damage to your organization.
- The average cost of a lost or stolen record is $148 and some companies made headlines of millions of records leaked due to data breaches.
- It doesn't really matter if the file change was made by an internal user or external bad guy. What really matters is, if you are able to detect that change immediately or only weeks, months or years later - or maybe never.

## Change detection

Its as simple as "Every security breach begins with a single change"!

Its very common for attackers to start with a single change and monitor the system behaviour and if something is added to the log files.

When it comes to configuration files, even a small manipulation in one file can put your whole network at risk. File integrity monitoring, is about tracking these changes of files you want to protect.

It all starts with setting the baseline using the integrity of a file or a whole folder and add alerting to any unexpected change that might point to a security risk or a compromise. Whether it’s a website hack, a phishing scam, malware, ransomware or insider threat, your solution should alert you immediately.

## The importance of a tamperproof system

**_The best file integrity monitoring fails, if someone can either manipulate the baseline or deactivate the alert._**

CodeNotary brings a huge advantage compared to other solutions out there: its base is tamperproof!

The complete process uses tamperproof storage and alerting systems independent of your systems or environments.

- Whenever a baseline is set, a globally, unique checksum is calculated of the file integrity. Every single bit-change results in a different integrity checksum. That's true for single files and whole directories.
- The checksum, file or folder attributes and your identity are written to a tamperproof blockchain structure (Distributed Ledger Technology - DLT).
- The alert configuration is stored in the blockchain-protected CodeNotary environment.
- CodeNotary services (outside of the monitored systems!) are triggered when a file change happens OR someone tampers with the alerting system.
- CodeNotary supports a kind of a dead-man switch; when no file or folder verification happen anymore for a certain amount of time, a alert is triggered.

## Set up your first system

### Install CodeNotary vcn

To start your file integrity monitoring the only requirement is a local installation of the CodeNotary vcn command line. You can find the latest release here:

[https://github.com/vchain-us/vcn](https://github.com/vchain-us/vcn)

and the documentation here:

[https://docs.codenotary.io/guide/quickhelp.html](https://docs.codenotary.io/guide/quickhelp.html)

### Register your account to enable file integrity monitoring and alerting

[https://dashboard.codenotary.io/auth/signup](https://dashboard.codenotary.io/auth/signup)

When setting up your account, you also create your credentials to start notarizing files and folders. That the notarization process will be used to set the file integrity baseline as well as the alert, when a change is detected.

### Connect your system with the CodeNotary account

To connect your local system with your CodeNotary identity, you can simply type

![](/images/blog/login.png)

CodeNotary Login

## Create the file integrity baseline

To setup the first file integrity monitoring alert, just use the vcn notarize command and include the alert flag. In the following example we notarize the network interface config file ([netplan](https://netplan.io/)) as well the SSH (/etc/ssh) folder, that needs integrity monitoring as well.

![](/images/blog/notarize-1024x387.png)

vcn notarize

```
# notarize netplan configuration file
vcn notarize --create-alert --alert-name "netplan config of DESKTOP-82S443U" /etc/netplan/50-cloud-init.yaml
```

![](/images/blog/notarize-netplan-1024x350.png)

NetPlan config alert set

Now we notarize the /etc/sshfolder as well, to detect any changes to our secure shell settings.

```
vcn notarize --create-alert --alert-name "ssh config of DESKTOP-82S443U" --no-ignore-file dir:///etc/ssh
```

![](/images/blog/vcn-dir-1024x331.png)

notarize and protect /etc/ssh

You might have seen the --no-ignore-file flag. We used that flag to disable the creation of the .vcnignore file inside of the /etc/ssh directory, because our user has no permission to write into that folder. But that also deactivates the change details, like added, modified or deleted file name.

To make sure the file changes inside the folder (where the user has no write permission) are still tracked, please use the --read-only flag.

```
vcn notarize --create-alert --alert-name "ssh config of DESKTOP-82S443U" --read-only dir:///etc/ssh
```

![](/images/blog/readonly-1024x356.png)

notarize read-only directories

### Activate the file integrity monitoring

To activate the file integrity monitoring, you can simply run the integrity verification check:

```
vcn authenticate --alerts
```

It also makes sense to add that command to your cron job.

```
# add the following line to /etc/crontab, sudo nano /etc/crontab:
*/5 * * * * dennis /usr/local/bin/vcn authenticate --alerts

# one command, as elivated user:
echo "*/5 * * * * username /usr/local/bin/vcn authenticate --alerts" >> /etc/crontab
```

**That cron job runs every 5 minutes the CodeNotary authenticate job. As CodeNotary has a "dead man switch" built in, an alert will be triggered as well, if no authenticate command will be received for one hour.**

## Check the existing file integrity alerts

When logging into the CodeNotary dashboard, you can find your configured file integrity monitoring alerts in the Alerts section. That way you can see all the alerts of all your systems.

![](/images/blog/db-alerts-1024x319.png)

all Alerts are listed in the dashboard

or you can use the vcn command line as well to see just the alerts of the local system:

```
vcn alerts list
```

## File integrity changed - triggering the alert

As long as no one tampered with your files or folders, you don't receive any alerts by email or shown within the dashboard.

But when the file integrity changes, you immediately get an email alert:

![](/images/blog/alerttriggered-1024x154.png)

triggered alert inside the CodeNotary dashboard

![](/images/blog/email.png)

email alert about changed file integrity

For security reasons, we don't disclose more information, but you can click the dashboard link and login to see all details.

If you don't want to receive the alerts anymore, you can either acknowledge it or deactivate the alert completely.

**All alert and file integrity data including history is stored immutable, you need to create a new alert if the file or folder changes are ok and intended and deactivate the "old" alert.**

## File Integrity Monitoring user

We definitely recommend to create a special user account for all file integrity checks that never logs in. That way you can enable an even more secure monitoring system to alert you whenever important data are changed.

## Summary

There is no excuse anymore to have others hijack or manipulate your system configuration files or important data. Using CodeNotary, you get an service that fulfills all the requirements for a secure and tamperproof file integrity monitoring. Protect your cloud services, protect your most important and critical data and set up alerts for any file or folder change that might happen.
