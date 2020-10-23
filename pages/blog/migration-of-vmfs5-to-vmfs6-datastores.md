---
title: "Migration of VMFS5 to VMFS6 Datastores"
tags: ["Ops", "opvizor"]
date: "2018-10-30"
---

vSphere 6.5 and vSphere 6.7 support VMFS6, the new filesystem format of VMware. Migrating from VMFS-5 to VMFS-6 is pretty straightforward and can be easily automated using the PowerCLI command Update-VMFSDatastore.

David Stamen, Technical Marketing Engineer at VMware published a very [helpful guide](https://blogs.vmware.com/vsphere/2018/10/automating-migration-of-vmfs-5-to-vmfs-6-datastores.html).

\>>

Once all of your ESXi hosts that are connected to the VMFS-5 datastore have been upgraded to vSphere 6.5 or vSphere 6.7 you can then proceed with your datastore VMFS6 migration.

Please note that vSphere 6.7 no longer supports VMFS-3. Prior to upgrading your ESXi host you should do an upgrade from VMFS-3 to VMFS-5 or they will be upgraded automatically during the Host upgrade.

## Migrating from VMFS-5 to VMFS-6

When we start our migration of our datastore’s to VMFS-6 you may be wondering… Do I need to? What are the benefits? As we can see below graphic there was quite a few enhancements in support for Automatic Space Reclamation, In-Guest Space Reclamation and native support for 4K native storage.

![VMFS Migration](/images/blog/vmfs1.png)

Photo courtesy of [David Stamen](https://blogs.vmware.com/vsphere/2018/10/automating-migration-of-vmfs-5-to-vmfs-6-datastores.html)

You will also see that we have mentioned migrating from VMFS-5 to VMFS-6. Due to the underlying storage changes to support 4K Native storage as well as other features the metadata has changed and the upgrade cannot be done In-Place. The migration requires you to delete the current datastore and re-create. In a later section we will cover how to automate this process.

You can find out more information on vSphere 6.7 Storage enhancements [here](https://storagehub.vmware.com/export_to_pdf/vsphere-6-7-core-storage-1).

## Checking Current VMFS Version

In case you are not sure what VMFS version your datastore is currently running, we can find out with a simple PowerCLI one-liner.

_Get-Datastore | Select Name, FileSystemVersion_

Here we can see that DS01 is still at VMFS-5 and DS02 has already been upgraded to VMFS-6. In the next section we will target upgrading our datastore to VMFS-6.

## Updating VMFS Version

When it comes to migrating to VMFS-6 we have a few methods. A good reference to use is [KB2147924](https://kb.vmware.com/s/article/2147824), this KB covers the supported methods and ways to update your VMFS version. My colleague Nigel Hickey has covered how to do GUI based [upgrades of VMFS](https://blogs.vmware.com/vsphere/2018/09/vsphere-upgrade-series-part-5-upgrading-vmfs-storage.html). However, when you have many datastore’s it may help to automate this process.

As we reference the above KB it mentions a PowerCLI cmdlet called **Update-VMFSDatastore.** This is an powerful tool that acts a bit different than your standard PowerCLI cmdlet, it is very verbose and detailed with the checks that it does. However, there are also some considerations to take into account when using it.

A few considerations when using it are as follows:

- Requires use of datastore cluster and have a temporary VMFS-5 datastore of equal or greater capacity.
- Issues storage vMotion requests to the temporary datastore.
- Validates that no unsupported VMs exist on the datastore such as those with SRM, VADP, VRM or Clustering.
- Will temporarily disable Storage DRS and enable once complete.
    - If cmdlet fails enabling storage DRS is a manual effort.
- Carefully review the usage of the **Resume** and **Rollback** parameters in case of any errors.

So now that we know some things to look out for what does the cmdlet actually do?

1. Checks for VADP, SMPFT, MSCS/RAC virtual machines on Source Datastore.
2. Makes sure datastore is accessible to all hosts.
3. Validates Temporary datastore has sufficient capacity.
4. Modifies Storage DRS Automation to manual
5. Moves VM and orphaned data from Source to Temp datastore.
6. Unmount Source Datastore
7. Recreate Source Datastore as VMFS-6
8. Moves VM and orphaned data from Temp to Source datastore.
9. Restores Original Storage DRS setting.

Now that we understand how it works, lets jump into the usage.

_Connect-VIServer vCenter_

_$Source = Get-Datastore "DSS"_

_$Temp = Get-Datastore "DST"_

_$Server = (Get-VIServer -Server "vCenter")_ 

_Update-VmfsDatastore -Datastore $Source -TemporaryDatastore $Temp -TargetVmfsVersion "6" -Server $Server_

It requires very minimal input, we will put in the source datastore, the temporary datastore, vCenter Server and the Target VMFS version. 

It is quite simple and if you encounter errors they will be logged and you can rollback using the **rollback** parameter of if the error can resumed you can use the **resume** parameter.

You can see more information on the usage of **Update-VMFSDatastore** at the [PowerCLI Reference](https://code.vmware.com/docs/5730/cmdlet-reference#/doc/Update-VmfsDatastore.html).

Find the full article here: 

[https://blogs.vmware.com/vsphere/2018/10/automating-migration-of-vmfs-5-to-vmfs-6-datastores.html](https://blogs.vmware.com/vsphere/2018/10/automating-migration-of-vmfs-5-to-vmfs-6-datastores.html)
