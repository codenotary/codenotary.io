---
title: "VMware vSphere 6 - Adding the ESXi host to the vCenter"
image: /images/blog/wpid-vcenter_add.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2015-05-20"
---

Now the installation and configuration of the vCenter and ESXi hosts is complete it’s time to bring them together. Adding the host to the vCenter is pretty easy.

Just connect to your vCSA using the ip or FQDN using the browser of your choice. Agree that you’re aware of the security issue (since it’s a self-signed certificate).

_Log in to vSphere Web Client_. Please remember to use the administrator-account that you created during the installation of the vCSA and NOT the root account! In my case it’s vsphere6.local/administrator.

Before being able to add the host I’ll have to create a datacenter where I can add it. Doing so using the _Hosts and Clusters_ category.

![Adding the ESXi Host](/images/blog/wpid-vcenter_add.png)

Moving along using the _Actions_ dropdown menu and selecting _New Datacenter…_

_![New Datacenter vSphere 6](/images/blog/wpid-vcenter_add2.png)_

As you might already have noticed, I like to keep things clean and straightforward. So the name will be _DC1\_NoCluster_ since it will be the first datacenter and it won't contain any cluster. Just one single ESXi host.

I can’t get used to those _Getting Started_ pages… (the first thing when I see such a page is: How can I disable it?! – Might not be smart since they might be helpful from time to time, but: Let’s do it manly!). Due to this fact I’m going the regular way by selecting the new created datacenter _DC1\_noCluster_ and click _Actions_ à _Add Host…_ Please don’t forget to select the datacenter because only doing so enables you to get the correct _Actions_ menu!

![Add a vSphere 6 host](/images/blog/wpid-vcenter_add3.png)

Entering the IP of the new installed ESXi 6 host. Please note that you’re able to add other hosts than ESXi but you will need to setup additonal software such as the VMware vCenter Host Gateway. Please find more information about this in the VMware vSphere 6.0 documentation [http://pubs.vmware.com/vsphere-60/index.jsp?lang=en&topic=/com.vmware.vsphere.vcenterhost.doc/GUID-4716945D-42DF-4553-AFBC-F1B30B6B32A0.html](http://pubs.vmware.com/vsphere-60/index.jsp?lang=en&topic=/com.vmware.vsphere.vcenterhost.doc/GUID-4716945D-42DF-4553-AFBC-F1B30B6B32A0.html)

For this case as I only want to setup the vCenter with some ESXi hosts it’s fine like it is.

Entering the root-credentials of the ESXi hosts.

As I’m using the default certificates there is a prompt “Security Alert – Unable to verify the authenticity of the host”. This is fine for me in this case so I will _connect anyway_!

The _Host summary_ is showing the host which will be added, the version and is showing a list of the virtual machines that are running on the ESXi. Since there there is no VM running the list is empty.

Next Step is _Assign license_. I already added some licenses during the installation process so I’m just able to select the license of my choice. The client shows me that _The license assignment is valid_, so everything is fine.

![License for vSphere 6](/images/blog/wpid-vcenter_add4.png)

For the _Lockdown mode_ I will use _Disabled_. Again, this is a testing infrastructure so having access to as much systems as easy as possible is totally fine hier. Please keep in mind that this configuration most likely will not be best practice for a productive vSphere!

In _VM location_ it is possible to define a folder where the VMs located on the host reside.

_Ready to complete -and the host should be added_ successful!

![Summary Deployment vSphere 6](/images/blog/wpid-vcenter_add5.png)

Only a few more steps and we can start to deploy the first VM!

Additional configuration of the ESXi host (storage & network)

## Storage

I don’t want install virtual machines to local storage. Deploying VMs to the local storage of ESX hosts is not recommended. I already prepared two nfs-shares which I will now add to the host.

Just select the host click _Actions_ (remember to select the host otherwise you will end up in the wrong action-menu!) and go to _Storage_ -> _New Datastore_.

![New storage vSphere 6](/images/blog/wpid-vcenter_storage1.png)

 

It’s NFS for me so selecting NFS at this point is pretty smart.

![NFS or VMFS vSphere 6](/images/blog/wpid-vcenter_storage2.png)

NFS 3 it is for my installation. As the installer says, please keep only use one version to access a given datastore. Otherwise bad things might happen.

![NFS Version vSphere 6](/images/blog/wpid-vcenter_storage3.png)

_Name and configuration_ of the already existing nfs datastore is pretty self-explaining. Just enter the address of the nfs server and the folder where the nfs datastore is located. I always try to keep the datastore name in vSphere the same as the nfs export name. This makes it way easier to keep track of everything.

![Mount NFS datastore](/images/blog/wpid-vcenter_storage4.png)

_Ready to complete_, so let’s finish - Adding the ESXi host! 

I’ll repeat this for another datastore (for a special testing scenario I need a second one).

Now I will check if the datastores are showing up at the hosts. Easiest way to do so is to head to the hosts and go to the _Related Objects_ -> _Datastores_.

![NFS datastore added vSphere 6](/images/blog/wpid-vcenter_storage5.png)

All datastores are showing up as assumed.

## Network

At this point it’s also possible to configure additional networks for the virtual machines. As I’m totally fine with the default Portgroup (standard switch) _VM Networks_  and there’s nothing else for me to do except deploying virtual machines!

## The End

After adding the ESXi host, adding the NFS datastore and configuring the network our test environment is finalized. Thanks for your interest in our Series about the Installation and Configuration of vSphere 6.
