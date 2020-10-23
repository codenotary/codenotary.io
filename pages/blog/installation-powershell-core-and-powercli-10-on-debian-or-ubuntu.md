---
title: "Installation PowerShell Core and PowerCLI 10 on Debian or Ubuntu"
tags: ["Ops", "opvizor"]
date: "2018-04-24"
---

Some of you know that already, but the latest PowerCLI 10 release works very nice with PowerShell Core that can be installed on Linux.

That is an amazing step forward to simplify reporting and automation without the requirement of a running Microsoft Windows system - means, no license questions and flexible ways of distribution.

Let´s directly get into it and start with a Debian system.

## Installation PowerShell Core

To install the PowerShell Core you should visit the main project site and [download](https://github.com/PowerShell/PowerShell) the corresponding linux package. For this blog post I have a Debian 8 system, but you can just download the project that fits your system.

[![Download PowerShell Core](/images/blog/download_powershell_core.png)](https://github.com/PowerShell/PowerShell)

Visit https://github.com/PowerShell/PowerShell and download the file or just use wget:

_**wget https://github.com/PowerShell/PowerShell/releases/download/v6.0.2/powershell\_6.0.2-1.debian.8\_amd64.deb**_

\# Install the debian package

_**sudo dpkg -i powershell\_6.0.2-1.debian.8\_amd64.deb**_

If you haven´t already installed some less common packages, you´ll end up with an installation error that some packages are missing:

![Installation Error PowerShell Core](/images/blog/install_error.png)

Luckily installing the dependent packages is absolutely straightforward:

_**sudo apt-get -f install**_

After apt-get installed all the missing packages, you can run the _**dpkg -i powershell\*.deb**_ command again and all should work fine.

![pwsh to start PowerShell Core](/images/blog/first_run.png)

You can start the PowerShell using the command _**pwsh**_

_**get-host**_ shows you the current version of the installed PowerShell Core.

## Installation PowerCLI 10

The PowerCLI project website can be found here: [https://code.vmware.com/tool/vmware-powercli/10.0.0](https://code.vmware.com/tool/vmware-powercli/10.0.0)

To install the PowerCLI 10, you just need to open the PowerShell with the **_pwsh_** command and run a install-module:

**\# either for the system - you need higher permissions of course**

**_Install-Module -Name VMware.PowerCLI_**

**\# or for the current logged in user**

**_Install-Module -Name VMware.PowerCLI -Scope CurrentUser_**

The installation takes a while and you need to agree to trust the PSGallery modules, as PowerCLI is one of them.

Many customers run VMware vCenter with self-signed or even invalid certificates, therefore if you´re one of them make sure to run the following PowerCLI Configuration command before connecting to any vCenter server:

**_Set-PowerCLIConfiguration -InvalidCertificateAction Ignore_**

![PowerCLI 10 linux](/images/blog/invalidcert.png)

## First commands

That was already it, PowerShell Core and PowerCLI 10 are installed and we can connect to a VMware vCenter or ESXi host.

Connect to a vCenter:

_**Connect-VIServer vcenter.dns.name -user <username> -pass <password>**_

![vCenter connection PowerCLI](/images/blog/vcentercon.png)

**_Get-VM_** shows the virtual machines, **_Get-VMHost_** the ESXi hosts managed by vCenter. There are so many cmdlets and possibilities now - just amazing.

Exceptions:

The PowerShell is extremely tolerant when it comes to syntax and shortcuts. On a Linux system that can be annoying, especially if you´re not familiar with Linux vs. PowerShell commands.

As a rule of thumb - make sure not to use any system commands that are also PowerShell shortcuts, i. e. _**sort-object**_ instead of **_sort_**.

If you don´t use _**sort-object**_, the linux sort command will be used by the PowerShell and you typically run into issues. Use the full cmdlet names and no alias and you will be on the safe side.
