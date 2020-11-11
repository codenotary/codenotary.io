---
title: "Use OpBot for quick VMware vSphere health checks"
image: /images/blog/badvms.png
tags: ["Ops", "opvizor"]
date: "2017-01-26"
---

One of the cool things about our OpBot product, your always-ready-to-help virtual assistant for VMware vSphere, is that you can use it to get an overview of your vSphere systems status at any point in time, using any device you like.

Check for virtual machines that are disconnected, inaccessible, invalid or orphaned. Check for VMware ESXi hosts or cluster in a red alert state.

## Bad VMs

[![VMware vSphere health check](/images/blog/badvms.png)](http://try.opvizor.com/opbot)

That happens if a datastore went off but your virtual machines were still on it.

Try it yourself, [download OpBot](http://try.opvizor.com/opbot), enter the Slack channel you added the Bot and type:

**posh get-view -ViewType VirtualMachine -Filter @{'RunTime.ConnectionState'='disconnected|inaccessible|invalid|orphaned'} | select name**

You don't want to type that long command all the time, just create an alias:

**alias badvms=posh get-view -ViewType VirtualMachine -Filter @{'RunTime.ConnectionState'='disconnected|inaccessible|invalid|orphaned'} | select name**

From now on, you can type _**@opbot badvms**_ and you see all virtual machines with one or the other issue.

## ESXi hosts on red alert

When it can happen to a virual machine, let's check for the ESXi hosts too. Maybe there are some alerts I should look into. Honestly it's so much more convenient to check that on my iPhone then opening the VMware vSphere Web Client.

![red alert on ESXi host](/images/blog/badhosts.png)

posh get-view -ViewType HostSystem -Filter @{'overallStatus'='red'} | select name

## ESXi hosts disconnected

Any ESXi hosts disconnected? Such a simple and nice command: 

**posh Get-VMHost -state Disconnected**

![ESXi host disconnected](/images/blog/disconnected.png)

This time I'm lucky and no host is disconnected.

## What about my cluster state

posh get-view -ViewType ComputeResource  -Filter @{'overallStatus'='red'} | select name

again, setting an alias makes things easier in the future:

alias redcluster=posh get-view -ViewType ComputeResource  -Filter @{'overallStatus'='red'} | select name

## Last but not least I want to know about the Host Profile Compliance

![Host Profile Compliance](/images/blog/profiles.png)

Damn, I forgot to add profile to my hosts. Here is the script (please copy/paste as there is no alias support for these multi line commands yet.

posh $HPDetails = @()

Foreach ($VMHost in Get-VMHost) {

   $HostProfile = $VMHost | Get-VMHostProfile

   if ($VMHost | Get-VMHostProfile) {

      $HP = $VMHost | Test-VMHostProfileCompliance

      If ($HP.ExtensionData.ComplianceStatus -eq "nonCompliant") {

         Foreach ($issue in ($HP.IncomplianceElementList)) {

            $Details = "" | Select VMHost, Compliance, HostProfile, IncomplianceDescription

            $Details.VMHost = $VMHost.Name

            $Details.Compliance = $HP.ExtensionData.ComplianceStatus

            $Details.HostProfile = $HP.VMHostProfile

            $Details.IncomplianceDescription = $Issue.Description

            $HPDetails += $Details

         }

      } Else {

         $Details = "" | Select VMHost, Compliance, HostProfile, IncomplianceDescription

         $Details.VMHost = $VMHost.Name

         $Details.Compliance = "Compliant"

         $Details.HostProfile = $HostProfile.Name

         $Details.IncomplianceDescription = ""

         $HPDetails += $Details

      }

   } Else {

      $Details = "" | Select VMHost, Compliance, HostProfile, IncomplianceDescription

      $Details.VMHost = $VMHost.Name

      $Details.Compliance = "No profile attached"

      $Details.HostProfile = ""

      $Details.IncomplianceDescription = ""

      $HPDetails += $Details

   }

}

$HPDetails

## I bet, you like what you just saw. [Go ahead and try OpBot now!](http://try.opvizor.com/opbot)
