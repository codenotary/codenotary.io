---
title: "What´s new in vCenter Server 6.7 U1"
tags: ["Ops", "opvizor"]
date: "2018-10-26"
---

Emad Younis (Staff Technical Marketing Architect at VMware) shares the new features of the vCenter Server 6.7 U1.

[What’s New in vCenter Server 6.7 Update 1](https://blogs.vmware.com/vsphere/2018/10/whats-new-in-vcenter-server-6-7-update-1.html)

Today I’m happy to announce [vSphere 6.7 Update 1](https://my.vmware.com/en/web/vmware/info/slug/datacenter_cloud_infrastructure/vmware_vsphere/6_7) is now generally available. This release includes a single vSphere Client to manage them all. I’m referring to the HTML5 based vSphere Client, now fully featured. Also, included in this release are the necessary tools for convergence and repointing. An external Platform Services Controller (PSC) for enhanced linked mode is a thing of the past. Customers can now convert to a simplified embedded deployment supporting the same functionality.

The vSphere SSO domain also is receiving more flexibility with support for embedded repointing. Now a single embedded deployment can move to another vSphere SSO domain. Another feature with enhancements in vSphere 6.7 Update 1 is Content Library. It now supports native vCenter Server templates (.vmtx) and Open Virtual Appliance (OVA). Of course, there are more new features and enhancements in this release. Without further ado, here is what’s new in vCenter Server 6.7 Update 1.

vSphere Client

The wait is finally over! We now have a fully featured vSphere client in vSphere 6.7 Update 1. Delivering a fully featured client to customers was only part of the process. The vSphere team also wanted to optimize the vSphere Client’s performance and workflows. Ensuring the best customer experience possible. This release includes smart porting over and completing the remaining features which included:

- vCenter High Availability (VCHA)
- Auto Deploy
- Host Profiles
- vSphere Update Manager
- Network Topology Diagrams
- Performance Charts
- Improved Searching
- Dark Theme
- more…[vSphere Client Youtube Playlist](https://www.youtube.com/playlist?list=PLmp0id7yKiEcEzzXTOr2DrThIsPvfn1EX)

There are two features I want to highlight from the vSphere Client in vSphere 6.7 Update 1. The first is the improved searching capabilities. Customers can now search objects with a string and filter based attributes. These attributes include Tags, Custom Attributes, and VM power state to name a few. For common searches, there is also an option to save the search for future usage.

The second feature I want to highlight is considered one of the top feature requests. The vSphere team has been listening and now the dark theme option is available. Now customers can switch between the traditional light theme to the new dark theme in a single click. When switching to dark theme a blue information banner appears at the top of the screen. In this release dark theme supports vSphere features and plugins. Keep in mind other features and plugins may not render well until the necessary changes are in place. Glad the vSphere team was able to get this nice surprise in this release.

Convergence Tool

vCenter Server is going back to its roots of a simplified architecture. vSphere 6.0 introduced us to a new vCenter Server service called the PSC. The role of the PSC is to manage the following vSphere SSO domain components:

- Authentication
- Licensing
- Tags & Categories
- Global Permissions
- Custom Roles
- Certificates

The PSC has two deployment models, embedded and external. The only reason to use an external PSC at the time was for Enhanced Linked Mode (ELM). Otherwise, use the embedded deployment model for simplicity. Starting with vSphere 6.7 and 6.5 Update 2 the embedded deployment model supports ELM, but only for greenfield deployments. Until now customers who deployed an external PSC for ELM had no way to change their topology to an embedded PSC. vSphere 6.7 Update 1 introduces a new CLI tool to converge a PSC deployment from external to embedded.

The convergence tool is available in a directory called “VCSA-Converge-CLI” on the VCSA 6.7 Update 1 ISO. Before using the convergence tool there are two important prerequisites. First, a vSphere environment must be running vSphere 6.7 Update 1. This includes all the external PSCs and vCenter Servers in the vSphere SSO domains. Second, the convergence tool does not support Windows PSCs or vCenters Servers. Meaning migrate to the vCenter Server Appliance (VCSA) you should!

There are two JSON template options, converge and decommission. We start by using the converge JSON which will install the necessary PSC RPMs on the external VCSA. After the PSC service gets registered on the external VCSA, its now converted to embedded. But we’re not done, we still need to replicate the vSphere SSO data between the external PSC and the embedded PSC. This is actually taken care of as part of the JSON template and requires no manual intervention. The final step is to decommission the external PSC using the decommission JSON template. Stay tuned, there will be a more detailed blog post with examples coming soon.

**Note:** Embedded PSC is the recommended deployment model for vCenter Server.

Embedded Domain Repoint

Domain repoint is a feature available in vSphere 6.7 using the cmsso-util CLI command. Customers can repoint an external vCenter Server across a vSphere SSO domain. New in vSphere 6.7 Update 1 is support for embedded deployment domain repoint. Remember the time you selected a new vSphere SSO domain instead of an existing? Leaving you with several single embedded deployment instances. With domain repoint we can now join them to a single vSphere SSO domain. Other use cases are merges or acquisitions, no longer requiring a setup of a new vSphere SSO domain.

vCenter High Availability

vCenter Server native high availability was first introduced in vSphere 6.5. This is an active/passive solution designed to protect against application failure. In this case, it’s protecting the vCenter Server application. In vSphere 6.7 Update 1 vCenter High Availability is an example of a smart port workflow. There is no longer two workflows of basic and advanced, now only one workflow. The new workflow is a three-step configuration:

- vSphere SSO credentials for either management vCenter Server or management credentials
- Resource settings for the Passive and Witness nodes including compute, storage, and network
- IP Settings for the Passive and Witness nodes

Also included is auto-creation of the Active node clones to create the Passive and Witness nodes. A prerequisite for auto clone provisioning is entering the vSphere SSO domain credentials. Regardless of its self-managed or managed by another vCenter Server. Other enhancements including auto-detection of VCHA during an upgrade. Customers no longer have to destroy a VCHA configuration before upgrading to vSphere 6.7 U1. The upgrade wizard is aware of the configuration and will handle it as part of the upgrade process. We’ll save the best for last, REST APIs for VCHA are also included in the VCSA 6.7 Update 1 API Explorer.

Content Library

This feature has been around since vSphere 6.0 and is one of my favorites. As a customer, I had to manage several images, scripts, OVAs, and templates for several remote sites. Having to maintain and update the same content in several locations can be a nightmare. Content Library is a native vCenter Server service which solves this problem. It uses the subscriber/publisher model to distribute content. There are two deployment models when using Content Library:

- Single vCenter Server managing several sites
    - Centralized managed content
    - Uses WAN to sync content, requires publishing vCenter Server to be available
    - Content stored on a datastore at the remote sites
    - When provisioning content at the remote sites, traffic is kept local
- Multi vCenter Server
    - Centralized managed content
    - Uses WAN to sync content
    - Can sustain publishing vCenter Server failure, remote locations continue to operate
    - Content stored on a datastore at the remote sites
    - When provisioning content at the remote sites, traffic is kept local

This release Content Library now supports two more new file formats. This functionality is already available to VMware Cloud on AWS customers. Now it’s making its way to on-premises vSphere customers in vSphere 6.7 Update 1. Customers can now manage their templates on the local vCenter Server Content Library. Replication of template files to other subscriber Content Libraries is not available in this release. The other new supported format is Open Virtual Appliance (OVA). When importing an OVA file format in a Content Library, its content is first extracted. This allows Content Library to validate the OVA manifest and certificate. After the validation process is complete, it creates an OVF item for deployment. Give Content Library a try in your environment and let us know your thoughts.

vSphere Health

This is a new feature with huge potential. When deploying your vCenter Server there is an option to enable CEIP. It stands for Customer experience improvement program. When enabled data gets sent to VMware’s analytics cloud, customer workload data is not part of the data collected. This is all anonymous, data is secure and housed in VMware’s data centers. VMware uses this telemetry data to help improve features and customer experience. Now when enabled this functionality provides even more value to the customers. It provides an assessment of the vSphere environment and returns KBs on how to solve the problem at hand. For example, the warning you get when you only have a single management network for your ESXi hosts. We detect and provide alarms for both existing and potential problems. This helps in protecting customer environments from future problems.

Keep in mind this is a new service and will not have all health checks day one. The good news is this services independent of the vSphere release cycle. It features an out-of-band delivery infrastructure. If you are running vSphere 6.7 you also have the same capabilities as well. The goal here is overtime this service will become more proactive to ensure you have a healthy vSphere environment. If you haven’t enabled CEIP during your vSphere deployment, it’s easy enough to enable and gain the new benefits this service has to offer.

Appliance Management

The appliance management interface (VAMI) continues to gain new functionality with every release. vSphere 6.7 Update 1 continues to add-on from what vSphere 6.5 started. In this release, there is a new tab called “Firewall”. Now customers can manage firewall rules on the VCSA from the VAMI. This was previously only available using the VAMI APIs.

Another new feature which isn’t obvious is the ability to login VAMI with a local SSO user account. This release supports local vSphere SSO users who are members of the “SytemConfiguration.Administrators group. Also, members of the “Systemonfiguration.BashShellAdministrators” can use their SSO account to log in the VCSA bash shell. This makes it easier from a security perspective to track who logged in and what they did.

Summary

As you can see vSphere 6.7 Update 1 is full of new features and enhancements for vCenter Server. We will go into more details on these new vCenter Server features and enhancements in future posts and walkthroughs. Please post questions in the comments section or reach out to me [@emad\_younis](https://twitter.com/emad_younis) via Twitter.
