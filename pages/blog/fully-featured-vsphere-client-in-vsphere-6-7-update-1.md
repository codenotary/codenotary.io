---
title: "Fully Featured vSphere Client in vSphere 6.7 Update 1"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-10-24"
---

One of the best updates of the vSphere 6.7 Update 1 is the full featured vSphere Client. Finally, the days are gone, switching between different the HTML5 and the Web Client.

Here comes the [full list](https://blogs.vmware.com/vsphere/2018/10/fully-featured-vsphere-client-in-vsphere-6-7-update-1.html) of the new HTML5 client.

From the VMware vSphere client product managers:

We’ve ported all remaining features into the vSphere Client, including Auto Deploy, Host Profiles, VMware vSphere Update Manager (VUM), vCenter High Availability (VCHA), network topology diagrams, overview performance charts, and more. Read about all the features released in this version of the vSphere Client by visiting [Functionality Updates for the vSphere Client](https://docs.vmware.com/en/VMware-vSphere/6.5/rn/vsphere-client-65-html5-functionality-support.html) site.

**Feature highlights**

As part of our drive towards tailoring the vSphere Client to serve your needs, we’ve improved workflow usability and overall performance. You’ll notice some changes how you work with the vSphere Client compared to earlier clients. Here are some of the areas that have changed significantly.

- vCenter High Availability (VCHA)
    - We redesigned VCHA workflows to combine the Basic and Advanced configuration workflows. This streamlines the user experience and eliminates the need for manual intervention of some deployments.
- Search Experience
    - We revamped the search experience. In this version of the vSphere Client, you can now search for objects with a string and filter the search results based on Tags/Custom attributes. You can also filter the object lists in the search even further. For instance, you can filter on the power state of the VMs etc., You can save your searches and revisit them later.
- Performance Charts
    - You can pop the performance charts into a separate tab and zoom in on a specific time in the chart. We also added overview performance charts for datacenters and clusters.
- Dark Theme
    - Dark theme has been one of the most requested features for the vSphere Client so we’re introducing a Dark mode setting. Support for the Dark theme is available for all core vSphere Client functionality and implementation for vSphere Client plugins is in progress.
- Alarm Definitions
    - We greatly simplified the way you define new alarms, particularly in how you create rules for trigger conditions.

Let’s highlight a couple of features which are **available only in the vSphere Client**.

- In-product Feedback Tool
    - We wanted to make it very easy for you to give us feedback so we included an In-product feedback tool in the vSphere Client. After you login to the vSphere Client, notice the smile icon on the top right corner. You can click the icon to send feedback as a free-form text. You also have an option to capture a screenshot to include in the feedback, annotate, and obfuscate any private information in the captured screenshot. Optionally, you can include your email address so that we can reach out to you to follow-up on your feedback.
- Dashboard
    - The home page of vSphere Client is a dashboard that displays resource utilization information (CPU, Memory and Storage), the number of VMs, hosts, a list of objects with critical alerts, and a list of installed plugins that vCenter finds in the environment.

To get familiar with modified workflows and new features in the vSphere Client, take a look at [this series of short videos](https://www.youtube.com/playlist?list=PLmp0id7yKiEcEzzXTOr2DrThIsPvfn1EX) on YouTube.

**vSphere Client Plugins**

vSphere Client Plugins are UI components built by VMware and our partners to enable you to manage the additional suite of products that work with vSphere. We provided our plugin partners with SDK tools to migrate their plugins to the vSphere Client in advance of this release and client plugins for the following solutions are now available:

- VMware plugins: VMware vSphere Update Manager (VUM), vSAN, NSX, vRealize Operations (vROPs), Site Recovery Manager (SRM), vSphere Replication (VR), vSphere Integrated Containers (VIC).
- Partner plugins certified for the vSphere Client: IBM Spectrum Protect, IBM Storage Enhancements, Veeam, StorMagic, INFINIDAT, HPE OneVIew, Fujitsu Software ServerView, Fujitsu ETERNUS, ATTO vconfigutoolui. Please refer to [VMware Compatibility Guide](https://www.vmware.com/resources/compatibility/search.php) for the latest set of certified plugins.

We are actively engaging with the additional partners to migrate the remaining plugins. You could refer [vSphere 6.7 Client Plugin Readiness](https://blogs.vmware.com/vsphere/2018/06/vsphere-6-7-client-plugin-readiness.html) blog post to get tentative schedules of additional partner plugins.

**vSphere Client flings**

We continue to release [vSphere Client flings](https://labs.vmware.com/flings/vsphere-html5-web-client). We often use flings for early feature validation so some features are first released in a fling and later released as part of a standard vSphere release. vSphere Client code in a fling gets the same quality and performance testing as the code in the official supported vSphere releases. Please continue using flings and giving us feedback on how we can make our new features better for you.

To take advantage of all features in the vSphere Client, upgrade to vSphere 6.7 U1 as soon as you can. Until you’re ready to upgrade, you can continue using the vSphere Client flings for vCenter Server 6.5 and vCenter Server 6.0 to get some of the features that are missing in these versions. Please take a moment to fill out [this short 2-minute survey](https://www.surveymonkey.com/r/vSphereClientExp) about your experience using the vSphere Client so-far.
