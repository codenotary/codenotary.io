---
title: "PowerShell File Trust without digital certificates"
image: /images/blog/env-1024x619.png
date: "2019-10-28"
---

CodeNotary allows to trust, untrust or unsupport any file, script or document on your system. Digital certificates only help with scripts and need to travel with the file itself. In real world scenarios your workflow consists of much more than the script, you typically have configuration files as well or other documents to use.

That blog post introduces the CodeNotary PowerShell repository that is home to some decent and easy to use PowerShell integrations:

- notarize files with your identity and a certain trust level based on the directory you store them
- authenticate files or scripts before you run or use them

## PowerShell File Trust Watchdog

Let's start with the CodeNotary PowerShell Watchdog, that listens to file creation events in a given directory and notarizes these files using your identity. CodeNotary can be used to substitute digital certificates. To get your identity simply get your free account here:

[**CodeNotary Free account**](https://dashboard.codenotary.io/auth/signup)

Use cases:

- immutably notarize all files in a given directory, i. e. PowerShell scripts for production, configuration files, or documents
- create a test, stage, production folder workflow by changing the script to watch each folder and adding a custom attribute when notarizing
- create a trust, untrust, unsupport workflow by changing the script to watch each folder and notarize, untrust or unsupport the files when they move to the defined folder

## Preparation

Make sure to install the CodeNotary vcn command that can be found here:

[https://github.com/vchain-us/vcn/releases/latest](https://github.com/vchain-us/vcn/releases/latest)

You can simply use the vcn setup for Microsoft Windows or alternatively download the vcn executable and store it locally. The location of vcn.exe needs to be configured in the script.

If you want to fully automate the watchdog, you need to set some environment variables. To do so, simply run sysdm.cpl using the Win+R shortcut:

![PowerShell File Trust CodeNotary environment variabless](/images/blog/env-1024x619.png)

- VCN\_USER
- VCN\_PASSWORD
- VCN\_NOTARIZATION\_PASSWORD

more information about the supported environmenment variables can be found here: [https://docs.codenotary.io/vcn/user-guide/environments.html](https://docs.codenotary.io/vcn/user-guide/environments.html)

### Watch a single directory

Watching a single directory is pretty straightforward and you only need to change the $vcnpath, $watcher.path and if you want to check sub directories as well.

```
### Set vcn binary path - please download vcn here: https://github.com/vchain-us/vcn/releases/latest
   $vcnpath = """$env:programfiles\codenotary\vcn.exe"""

### Set target directory and file types to watch for changes and if you want to include subdirectories
   $watcher = New-Object System.IO.FileSystemWatcher
	 $watcher.Path = "C:\Users\user\Documents\Notarize"
   $watcher.IncludeSubdirectories = $true
   $watcher.EnableRaisingEvents = $true  

### Define notarization when files are detected
   $action = { $path = $Event.SourceEventArgs.FullPath
             $changeType = $Event.SourceEventArgs.ChangeType
	 $param = " n " + """$Path""" + " --attr PSEvent=True"
	 $command = $vcnpath + "$param"
			iex "& $command"
           $logline = "Notarized $(Get-Date), $changeType, $path"
           write-host $logline
		  Add-content ($watcher.Path + "\codenotary.log") -value $logline
              }    
### DECIDE WHICH EVENTS SHOULD BE WATCHED 
   Register-ObjectEvent $watcher "Created" -Action $action
	
   while ($true) {sleep 5}
```

Every time a file is stored within that directory a notarization of that file is processed and you can check your CodeNotary dashboard to get more details:

![CodeNotary dashboard - check the File Trust level](/images/blog/dashboard-1024x349.png)

### Workflow environment based on folder structure

Let's simply create the following folder structure:

- Production (Trusted)
- Old (unsupported)
- Unwanted (Untrusted)

Based on the following script, files that are either created or moved in the corresponding folder get notarized with the chosen trust level.

![file trust workflow](/images/blog/old-1024x162.png)

That way you can create a full workflow including an immutable trust level by simply moving files based on their lifecycle.

```
# Set vcn binary path - please download vcn here: https://github.com/vchain-us/vcn/releases/latest
   $vcnpath = """$env:programfiles\codenotary\vcn.exe"""
   $logpath = "C:\CodeNotary\codenotary.log"
## Define all environments

### Set Production environment
   $watchertrusted = New-Object System.IO.FileSystemWatcher
   $watchertrusted.Path = "C:\CodeNotary\Production"
   $watchertrusted.IncludeSubdirectories = $true
   $watchertrusted.EnableRaisingEvents = $true  

### Set Old environment
   $watcherunsupported = New-Object System.IO.FileSystemWatcher
   $watcherunsupported.Path = "C:\CodeNotary\Old"
   $watcherunsupported.IncludeSubdirectories = $true
   $watcherunsupported.EnableRaisingEvents = $true  

### Set Unwanted environment
   $watcheruntrusted = New-Object System.IO.FileSystemWatcher
   $watcheruntrusted.Path = "C:\CodeNotary\Unwanted"
   $watcheruntrusted.IncludeSubdirectories = $true
   $watcheruntrusted.EnableRaisingEvents = $true  



## Define notarization when files are detected
   $actiontrusted = { $path = $Event.SourceEventArgs.FullPath
             $changeType = $Event.SourceEventArgs.ChangeType
			 $param = " notarize " + """$Path""" + " --attr PSEvent=True"
			 $command = $vcnpath + "$param"
			 iex "& $command"
             $logline = "Trust $(Get-Date), $changeType, $path"
             write-host $logline
		     Add-content ($logpath) -value $logline
             }    

   $actionunsupported = { $path = $Event.SourceEventArgs.FullPath
             $changeType = $Event.SourceEventArgs.ChangeType
			 $param = " unsupport " + """$Path""" + " --attr PSEvent=True"
			 $command = $vcnpath + "$param"
			 iex "& $command"
             $logline = "Unsupport $(Get-Date), $changeType, $path"
             write-host $logline
		     Add-content ($logpath) -value $logline
             }    
   
   $actionuntrusted = { $path = $Event.SourceEventArgs.FullPath
             $changeType = $Event.SourceEventArgs.ChangeType
			 $param = " untrust " + """$Path""" + " --attr PSEvent=True"
			 $command = $vcnpath + "$param"
			 iex "& $command"
             $logline = "Untrust $(Get-Date), $changeType, $path"
             write-host $logline
		     Add-content ($logpath) -value $logline
             }    

# Register all Watcher
   Register-ObjectEvent $watchertrusted "Created" -Action $actiontrusted
   Register-ObjectEvent $watcherunsupported "Created" -Action $actionunsupported
   Register-ObjectEvent $watcheruntrusted "Created" -Action $actionuntrusted

	
   while ($true) {sleep 5}
```
