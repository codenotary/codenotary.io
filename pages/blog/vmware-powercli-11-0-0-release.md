---
title: "VMware PowerCLI 11.0.0 release"
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-10-12"
---

VMware just released PowerCLI 11.0 with some cool new integrations. Especially the Horizon View integration is worth a look.

There is also a nice review of the Horizon View integration that can be found here: 

[https://www.retouw.nl/vexpert/vmware-powercli-11-0-0-release-with-new-horizon-7-6-api-calls/](https://www.retouw.nl/vexpert/vmware-powercli-11-0-0-release-with-new-horizon-7-6-api-calls/)

The complete cmdlet reference can be found [here](https://code.vmware.com/docs/7336/cmdlet-reference)

If you run PowerCLI 10 already, you can simply issue the following command to update PowerCLI

**Update-Module VMware.PowerCLI**

if you don't have PowerCLI 10 yet, use

**Install-Module -Name VMware.PowerCLI**

PowerCLI has been moving at quite the rapid pace over the last 2 years. In 2018, we’ve been releasing roughly every other month to make sure we get the latest features, performance improvements, and updates available as quickly as possible. Well, it’s been two months and we’re not going to break this trend. Today, we are releasing PowerCLI 11.0.0!

PowerCLI 11.0.0 comes with the following updates:

Added a new Security module

Added new cmdlets for Host Profiles

Added a new cmdlet to interact with NSX-T in VMware Cloud on AWS

Support for vSphere 6.7 Update 1

Support for NSX-T 2.3

Support for Horizon View 7.6

Support for vCloud Director 9.5

Multiplatform support for the Cloud module

Updated the Get-ErrorReport cmdlet

Removed the PCloud module

Removed the HA module

[https://blogs.vmware.com/PowerCLI/2018/10/new-release-powercli-11-0-0.html](https://blogs.vmware.com/PowerCLI/2018/10/new-release-powercli-11-0-0.html)

New Security Module

There has been a tremendous amount of improvements around security for vSphere lately. The new VMware.VimAutomation.Security module ensures you have the ability to automate these new features.

The Security module includes the following cmdlets:

- Get-SecurityInfo
- Get-VTpm
- Get-VTpmCertificate
- Get-VTpmCSR
- New-VTpm
- Remove-VTpm
- Set-VTpm
- Unlock-VM

Also, thanks to the Security module (with a little help from the Storage module), several other cmdlets are receiving enhancements as well:New-VM has added the following parameters:

- KmsCluster
- StoragePolicy
- SkipHardDisks
- StoragePolicy
- ReplicationGroup
- StoragePolicyTarget

Set-VM has added the following parameters:

- DisableEncryption
- KmsCluster
- SkipHardDisks
- StoragePolicy

Set-VMHost has added the following parameter:

- KmsCluster

Set-HardDisk has added the following parameters:

- DisableEncryption
- KmsCluster
- StoragePolicy

New-HardDisk has added the following parameters:

- KmsCluster
- StoragePolicy

Host Profile Updates

There have been a lot of requests coming in for updates to the set of cmdlets available to manage Host Profiles. The VMware.VimAutomation.Core module has some updates you’ll want to check out!

The following cmdlets have been added to help manage Host Profiles:

- Get-VMHostProfileUserConfiguration
- Set-VMHostProfileUserConfiguration
- Get-VMHostProfileStorageDeviceConfiguration
- Set-VMHostProfileStorageDeviceConfiguration
- Get-VMHostProfileImageCacheConfiguration
- Set-VMHostProfileImageCacheConfiguration
- Get-VMHostProfileVmPortGroupConfiguration
- Set-VMHostProfileVmPortGroupConfiguration

Storage Module Updates

The VMware.VimAutomation.Storage module has grown by leaps and bounds in the last couple releases. This release adds two new cmdlets and quite a few updates to existing cmdlets. Some of the improvements include an update to support predefined time ranges when using Get-VsanStat. Get-VsanDisk has some additional properties which are returned, such as: capacity, used percentage, and reserved percentage. Also receiving an update is the Get/Import/Export-SpbmStoragePolicy cmdlets, as they now support storage policy components.

The following cmdlets have been added to help automate vSAN:

- Get-VsanObject
- Get-VsanComponent

More details on these updates for vSAN can be found on the Virtual Blocks blog, by Jase McCarty: [More vSAN Cmdlets in PowerCLI 11!](https://blogs.vmware.com/virtualblocks/2018/10/11/more-vsan-cmdlets-in-powercli-11/)

vCloud Director Updates

This update is another direct result from feedback. There has been an impressive amount of people requesting updates to the VMware.VimAutomation.Cloud module. With this release, we are updating the module to support vCloud Director 9.5. There are also a couple of new cmdlets being added.

The following cmdlets have been added to help automate vCloud Director networking:

- Get-EdgeGateway
- New-OrgVdcNetwork
- Remove-OrgVdcNetwork
- Set-OrgVdcNetwork
