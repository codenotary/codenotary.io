---
title: "Installing vSphere 6.0 ESXi Hosts nested - preconfiguration"
tags: ["Ops", "opvizor"]
date: "2015-04-23"
---

## Introduction

After covering the installing of the vCSA in the [last article](https://www.opvizor.com/blog/installing-vsphere-6-vcsa-vcenter-server-appliance/ "Installing vSphere 6 – vCSA (vCenter Server Appliance)"), we now care about the ESXi 6.0 Hosts installation and integration. I need to run the ESXi hosts nested as virtual machines themselves as this will be a testing environment. All systems installed are based on an existing physical environment running vSphere 5.5. The process of deploying on physical hosts instead on virtual machines may vary at some points.

## Existing Situation

The base for the installation is an existing vSphere 5.5 using a Microsoft Windows based vCenter and several physical ESXi-Hosts (based on Cisco UCS).

The vCenter for the nested test environment is already installed in form of the vCSA 6.0 (vCenter Server Appliance 6.0). If you want to know how to install the vCSA 6.0 please read my [previous article](https://www.opvizor.com/blog/installing-vsphere-6-vcsa-vcenter-server-appliance/ "Installing vSphere 6 – vCSA (vCenter Server Appliance)"). In summary I’m going to deploy 3 ESXi-hosts to cover two different scenarios. One scenario having 2 hosts in a cluster and one scenario having a single host without a cluster.

## Requirements

For each installation of a nested ESXi-hosts the requirements are: 2 vCPUs, 6GB Memory (4GB is the minimum), 15GB Storage (4GB is the minimum), at least 1 IP address + DNS entries (if you want to). The ESXi 6.0 installation medium can be found on the VMware portal, after you logged in

## HowTo

To keep in mind for the installation process:

- I’m logged in to the productive MS Windows vCenter 5.5 using RDP
- I’m using Firefox on the vCenter to connect to the local vSphere VMware WebClient

Working this way enables me to deploy everything locally in our datacenter instead of having to use my small bandwidth connection to the datacenter. For the installation I will start creating an empty virtual machine and deploy the ESXi to this VM.

## Creating the VM for the installation

Since there is no official existing template nor an existing .ovf for the deploy of an ESXi Hosts nested. If you are ok with unofficial releases you should check for the [vGhetto Nested ESXi Template Content Library in vSphere 6.0](http://www.virtuallyghetto.com/2015/04/subscribe-to-vghetto-nested-esxi-template-content-library-in-vsphere-6-0.html)

I will have to create a new virtual machine and install ESXi to this VM. My way of creating a VM is just to go to the host of my choice and click Actions > New virtual Machine…

[![vSphere 6 new virtual machine](/images/blog/new_vm_1.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_1.jpg)

### Select a creation type

Since there is nothing to re-use, the only way to get the ESXi up and running for me is to Create a new virtual machine [![New Virtual Machine vSphere 6](/images/blog/new_vm_2.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_2.jpg)

### Edit Settings

I’ll call it esxqa6\_1 and place it to the folder vSphere6.0 and select a host and a datastore with sufficient resources

[![New Virtual Machine vSphere 6](/images/blog/new_vm_3.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_3.jpg)

### Compatibility

The Compatibility with ESXi 5.5 and later is fine in my case, but you need to think about your migration possibilities and how they get limited. That’s the same as selecting the latest version of virtual hardware (10) on this installation as it is running on vSphere 5.5.

[![New VM vSphere 6](/images/blog/new_vm_4.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_4.jpg)

Since there is no Guest-OS nested vSphere 6, the guest-os type is other 64-bit with the Guest OS Name ESXi 6.0.

[![New VM OS type vSphere 6](/images/blog/new_vm_5.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_5.jpg)

The configuration is pretty straightforward:

- 2 vCPUs (2 CPU is the minimum requirement)
- 6GB of memory (4 GB is minimum, 8 GB and more is recommended for productive infrastructures)
- 15GB of disk-space as a single hard disk
- vmxnet 3 for the network adapter type

  [![New VM Hardware setup vSphere 6 ESXi Hosts nested](/images/blog/new_vm_6-300x300.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_6.jpg)

## Finish

If the summary screen shows all the correct settings hit Finish to deploy the VM and start the advanced settings.

### Advanced settings of the VM

After creating the empty VM I have to change some advanced settings to to have ESXi 6.0 running smoothly. CPU Hardware virtualization should be set to “Expose hardware assisted virtualization to the guest OS” to have full virtualization support on the CPU enabled.

[![VM advanced settings to run nested ESXi Expose hardware assisted virtualization to the guest OS](/images/blog/new_vm_advsettings_6.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_advsettings_6.jpg)

And second to make sure to enable the Failed Boot Recovery option. Using this option the VM reboots frequently when no boot device is found. So it’s looping reboots till the .iso is attached to the system. This is only necessary for the installation process and can be unchecked when the installation is complete.

[![more VM advanced settings to run nested ESXi Failed Boot Recovery option](/images/blog/new_vm_advsettings_7.jpg)](https://www.opvizor.com/wp-content/uploads/2015/04/new_vm_advsettings_7.jpg)

## Installation of ESXi within the VM

You are ready now to install **ESXi Hosts nested**. The installation itself will be [covered in the next article](https://www.opvizor.com/blog/installing-vsphere-6-0-esxi-hosts-nested-install-2/). 

<script>setInterval(_gaq.push(['_trackEvent', 'blog post', 'read 15 seconds', '']), 15000);</script>
