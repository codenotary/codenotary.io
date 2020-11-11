---
title: "Audit VM configuration changes using the vCenter Event Broker"
image: /images/blog/veba_slack_alert.png
tags: ["Ops", "opvizor"]
date: "2019-11-25"
---

You might have seen or even used the vCenter Event Broker applianced that had been released as a [fling](https://flings.vmware.com/vcenter-event-broker-appliance) some weeks ago and was released completely [open source](https://github.com/vmware-samples/vcenter-event-broker-appliance) last week by the excellent team of [Michael Gasch](https://twitter.com/embano1) and [William Lam](https://twitter.com/lamw).

While the tag example that comes with the project and that is covered in the manual is a nice starter, it's not the most useful thing to have. But that can easily be changed. Think about acting based on reconfigure events and push VM config changes to Slack: Audit VM configuration! That way you have all changes documented and searchable using the Slack service.

![](/images/blog/veba_slack_alert.png)

Audit VM configuration

## Setup the vCenter Event Broker Appliance (VEBA)

I won't go into details here, as we covered it already in former blog post.

You can read it here: [https://itnext.io/vmware-fling-vcenter-event-broker-appliance-c97514c9e902](https://itnext.io/vmware-fling-vcenter-event-broker-appliance-c97514c9e902)

## Audit VM configuration requirements

To enable a service to audit VM configuration, we need to add or change the following:

- create a Slack webhook
- vcconfig.json to include Slack details
- template that includes Slack
- stack.yml to use a different container image and to detect vm reconfigure events
- handler function to send the VM change information to Slack

You can also speed things up and use our repository that contains the Example already: [https://github.com/opvizor/vcenter-event-broker-appliance](https://github.com/opvizor/vcenter-event-broker-appliance)

You can find everything under **examples/powercli/hwchange-slack**.

For a quick start simply clone the original or the forked repository:

Original repository:

[https://github.com/vmware-samples/vcenter-event-broker-appliance](https://github.com/vmware-samples/vcenter-event-broker-appliance)

In that case I recommend to copy the example/powercli/tagging into another directory to customize the files.

Quick start is using the forked repository including the Audit VM configuration example:

[https://github.com/opvizor/vcenter-event-broker-appliance](https://github.com/opvizor/vcenter-event-broker-appliance)

```
git clone https://github.com/vmware-samples/vcenter-event-broker-appliance.git
# or
git clone https://github.com/opvizor/vcenter-event-broker-appliance.git
```

## Setup Slack

To generate a Slack webhook just visit the following link while logged into Slack: [https://my.slack.com/services/new/incoming-webhook/](https://my.slack.com/services/new/incoming-webhook/)

![Generate Slack webhook](/images/blog/webhook-1024x709.png)

Simply create and select a Slack channel you want to use for the Audit VM configuration messages.

Copy the Webhook URI and the Channel name and configure that in your [vcconfig.json](https://github.com/opvizor/vcenter-event-broker-appliance/blob/master/examples/powercli/hwchange-slack/vcconfig.json).

## The new Audit VM configuration function

### vcconfig.json

The first file we're changing is our credential file that contains the vCenter connection details and Slack.

```
{
    "VC" : "my-vCenter",
    "VC_USERNAME" : "user@vsphere.local",
    "VC_PASSWORD" : "userpassword",
    "SLACK_URL"   : "https://my.slack.com/services/new/incoming-webhook/",
    "SLACK_CHANNEL" : "vcevent"
}
```

### stack.yml

That file contains the stack definition that will be pushed to the Open FaaS service later on. The important lines are: gateway, image, und topic.

```
provider:
  name: faas
  gateway: https://veba.mynetwork.local
functions:
  powercli-reconfigure:
    lang: powercli
    handler: ./handler
    image: opvizorpa/powercli-slack:latest
    environment:
      write_debug: true
      read_debug: true
      function_debug: false
    secrets:
      - vcconfig
    annotations:
      topic: vm.reconfigured
```

- Gateway: the FQDN of the VEBA Appliance
- Image: the image to be used (best is to use your own Docker Hub account)
- Topic: vm.reconfigured covers all configuration changes of a VM

### handler/script.ps1

This is your function written in PowerShell:

```
# Process function Secrets passed in
$VC_CONFIG_FILE = "/var/openfaas/secrets/vcconfig"
$VC_CONFIG = (Get-Content -Raw -Path $VC_CONFIG_FILE | ConvertFrom-Json)
if($env:function_debug -eq "true") {
    Write-host "DEBUG: `"$VC_CONFIG`""
}

# Process payload sent from vCenter Server Event
$json = $args | ConvertFrom-Json
if($env:function_debug -eq "true") {
    Write-Host "DEBUG: `"$json`""
}

$eventObjectName = $json.objectName

# import and configure Slack
Import-Module PSSlack | Out-Null


Set-PowerCLIConfiguration -InvalidCertificateAction Ignore  -DisplayDeprecationWarnings $false -ParticipateInCeip $false -Confirm:$false | Out-Null

# Connect to vCenter Server
Write-Host "Connecting to vCenter Server ..."
Connect-VIServer -Server $($VC_CONFIG.VC) -User $($VC_CONFIG.VC_USERNAME) -Password $($VC_CONFIG.VC_PASSWORD)

# Retrieve VM changes
$Message = (Get-VM $eventObjectName | Get-ViEvent -MaxSamples 1).FullFormattedMessage

# Bold format for titles
[string]$Message = $Message -replace "Modified","*Modified*" -replace "Added","*Added*" -replace "Deleted","*Deleted*"

# Send VM changes
Write-Host "Detected change to $eventObjectName ..."

New-SlackMessageAttachment -Color $([System.Drawing.Color]::red) `
                           -Title 'VM Change detected' `
                           -Text "$Message" `
                           -Fallback 'ouch' |
    New-SlackMessage -Channel $($VC_CONFIG.SLACK_CHANNEL) `
                     -IconEmoji :fire: |
    Send-SlackMessage -Uri $($VC_CONFIG.SLACK_URL)


Write-Host "Disconnecting from vCenter Server ..."
Disconnect-VIServer * -Confirm:$false
```

Whenever the function is triggered, we receive the object as a payload. Based on that object, we grab the latest event. There is a chance of catching the wrong event if there are too many changes for the same VM in a very short amount of time.

Good news - this is known to the VEBA guys and a change is planned to enhance the payload with the event id.

## FaaS PowerCLI Template

This one is very important as we use it to build and push the container image to our Container image registry. Best is to create your own account on hub.docker.com and login locally: **docker login**

If you don't use the forked repository, copy the PowerCLI template to your working directory from here and change it to add Slack: [https://github.com/vmware-samples/vcenter-event-broker-appliance/tree/master/examples/powercli/tagging/template/powercli](https://github.com/vmware-samples/vcenter-event-broker-appliance/tree/master/examples/powercli/tagging/template/powercli)

### template/powercli/Dockerfile

We simply need to add the following part:

```
# Add PSSlack https://github.com/RamblingCookieMonster/PSSlack
RUN pwsh -c "\$ProgressPreference = \"SilentlyContinue\"; Install-Module PSSlack"
```

Complete file content:

```
FROM vmware/powerclicore:latest

RUN mkdir -p /home/app
USER root
RUN echo "Pulling watchdog binary from Github." \
    && curl -sSL https://github.com/openfaas/faas/releases/download/0.9.14/fwatchdog > /usr/bin/fwatchdog \
    && chmod +x /usr/bin/fwatchdog \
    && cp /usr/bin/fwatchdog /root

# Add PSSlack https://github.com/RamblingCookieMonster/PSSlack
RUN pwsh -c "\$ProgressPreference = \"SilentlyContinue\"; Install-Module PSSlack"

WORKDIR /root

USER root

# Populate example here - i.e. "cat", "sha512sum" or "node index.js"
SHELL [ "pwsh", "-command" ]
ENV fprocess="xargs pwsh ./function/script.ps1"
COPY function function
# Set to true to see request in function logs
ENV write_debug="true"

EXPOSE 8080

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1
CMD [ "fwatchdog" ]
```

## Build, Push and Publish the function

Now comes the easy part as we only need to run a couple of commands:

### FaaS-CLI - configure OpenFaaS

```
# set up faas-cli for first use
export OPENFAAS_URL=https://VEBA_FQDN_OR_IP
faas-cli login -p VEBA_OPENFAAS_PASSWORD --tls-no-verify

# create the secret based on the local file
faas-cli secret create vcconfig --from-file=vcconfig.json --tls-no-verify
```

### Build and Deploy

```
# Build the new container based on the Template
faas-cli build -f stack.yml

# Push the container to the registry
faas-cli push -f stack.yml

# Deploy the function to the OpenFaaS service
faas-cli deploy -f stack.yml --tls-no-verify
```

![](/images/blog/faas-cli_push.png)

Pushing the container image to your Dockerhub repo

You can check the container image on your Dockerhub repo and if the Slack integration worked.

![](/images/blog/dockerhub_template_slack-1024x732.png)

Slack integration

Make sure you receive a 200 code when deploying the function!

## Slack output

OpenFaaS is now configured to watch for VM reconfigure events to trigger the PowerCLI Script.

That's it and you should see a similar message in your chosen Slack channel to audit VM configuration changes.

![Audit VM configuration](/images/blog/veba_slack_alert-1.png)
