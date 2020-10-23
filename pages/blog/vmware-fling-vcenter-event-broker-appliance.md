---
title: "VMware Fling: vCenter Event Broker Appliance"
tags: ["Ops", "opvizor"]
date: "2019-11-13"
---

There is a new VMware Fling on the block and its pretty powerful. Whenever you thought of reacting based on a VMware vSphere event, the vCenter Event Broker Appliance (vEBA) could be your choice. The excellent team of [Michael Gasch](https://twitter.com/embano1) and [William Lam](https://twitter.com/lamw) created that neat appliance.

For the impatient guy - you can download the appliance and the documentation here and just skip this blog post:

[https://flings.vmware.com/vcenter-event-broker-appliance#summary](https://flings.vmware.com/vcenter-event-broker-appliance#summary)

If you want to get some real life experience - here we go, basically with the same example adding a tag whenever a virtual machine is powered on:

# Deployment

After downloading the virtual appliance as an ova file, simply deploy it the usual way:

![VMware vCenter Event Broker Appliance](/images/blog/deploy-1.png)

To avoid a nasty troubleshooting later on, make sure to set the hostname of the appliance correctly, so it can be resolved. When entering the vCenter address, make sure the vEBA can resolve it.

![veba appliance name](/images/blog/settings.png)

I can really recommend making sure that name resolution is set up correctly, as the web applications might not show up. 

**Don't just try the ip address or a different name than used during the deployment.** 

Therefore, either have DNS setup or use your local host file on the client and the system you're using to deploy the FaaS stuff (in case its not the same system).

Then it will work as expected.

## First start

After powering on the virtual machine, the system will setup itself with a neat Kubernetes cluster inside.

![veba-webpages](/images/blog/appliance.png)

To check the OpenFaaS, simply visit https://<the FQDN you choose> and login using **admin** and the password you configured during deployment.

You should see an empty OpenFaaS Portal without any functions. We're going to change that now.

![OpenFaaS initial](/images/blog/openfaas.png)

## Install required tools

Next step is the installation of the tools that are required to configure the vCenter Event Broker.

### govc

Of course you could also create the tags we're going to use in the demo yourself and figure out what URN it is, but govc makes it damn simple.

[https://github.com/vmware/govmomi/releases](https://github.com/vmware/govmomi/releases)

\# Download govcwget https://github.com/vmware/govmomi/releases/download/v0.21.0/govc\_linux\_amd64.gz# extractgunzip govc\_linux\_amd64.gz# make executablechmod +x govc\_linux\_amd64.gz# move into a pathsudo mv govc\_linux\_amd64 /usr/local/bin/govc

You can already set the environment variables we need for govc:

\# only required if you have a self-signed certificateexport GOVC\_INSECURE=true# set the passwordGOVC\_URL="administrator@vsphere.local:whatastrongpassword@vcsa.mydomain.local"

### git

Most people have it probably installed anyway. Just in case, if you're using Ubuntu or Debian: **sudo apt-get install git**

### OpenFaaS CLI

That one is probably something  rare to have installed, but its easy to get:

[https://github.com/openfaas/faas-cli](https://github.com/openfaas/faas-cli)

\# install OpenFaaS clicurl -sSL https://cli.openfaas.com | sudo sh# let's set the environment variable for the server connection as wellexport OPENFAAS\_URL=https://veba.mydomain.local

## Create the tag to be used

As we have the govc environment variables already set, let's check the existing tags first: **govc tags.ls**

If there is a tag you want to use, get the urn path: **govc tags.info <tagname>**

![get tag urn](/images/blog/get-tag.png)

Remember the urn!

If there is no tag you want to use, you can simply create one:

\# first create the category govc tags.category.create democat1# then create the tag using that categorygovc tags.create -c democat1 demotag1

**When creating the tag you get the urn shown as a result. Copy that one!**

## Configure OpenFaaS

Next thing to do is to tell OpenFaaS what to do, when a vCenter event happens. The Fling creators Michael Gasch and William Lam were so nice, to create a demo repository as well.

Start by cloning the repository:

**git clone https://github.com/embano1/pytagfn**

### Step 1: change the secret

Enter the **vCSA URL**, your **user account** and the **password** as well as the urn you remembered when creating the tag.

cd pytagfncat 
cat vcconfig.toml
\[vcenter\]
server = "vcsa.mydomain.local"
user = "administrator@vsphere.local"
password = "whatastrongpassword"
\[tag\]
urn = "urn:vmomi:InventoryServiceTag:d1c0516f-ec8a-4e3d-b064-21dc573e3cf2:GLOBAL"
action = "attach" # or detach

Deploy the secret to OpenFaaS

**faas-cli login -p <vEBA password> --tls-no-verify**

**faas-cli secret create vcconfig --from-file=vcconfig.toml --tls-no-verify**

If the return code is success, you can delete the vcconfig.toml.

### Step 2: configure and deploy the function

simply change the function file within the git project stack.yml to reflect your environment:

cat stack.ymlprovider:
  name: faas
  gateway: https://veba.mydomain.local
functions:
  pytag-fn:
    lang: python3
    handler: ./pytag-fn
    image: embano1/pytag-fn:0.2
    environment:
      write\_debug: true
      read\_debuge: true
    secrets:
      - vcconfig
    annotations:
      topic: drs.vm.powered.on

It's important to note, that the gateway needs to be set to your vEBA fqdn and the annotations need to contain the event your want to react on. 

**vm.powered.on** = virtual machine is powered on without DRS

**drs.vm.powered.on** = virtual machine is powered on by DRS

#required if you never used faas-cli before to deploy somethingfaas-cli template pull#deploy the functionfaas deploy -f stack.yml --tls-no-verify

You should be able to see the function in the OpenFaaS portal as well:

![OpenFaaS function](/images/blog/deployedfunction.png)

## Result

When starting a virtual machine a tag should be added automatically by the vCenter Event Broker.

![Tag set](/images/blog/tagset.png)

That's a nice start but there are so many other things that can be done using a event-driven approach. Curious what the community is going to build on top of it.

## Troubleshooting

That part can be quite tough. First of all make sure, you follow all the steps carefully, especially the DNS part. Then make sure to chose the correct event based on manual or DRS.

You can also log into the appliance with ssh using the root account and the configured password and running the following command:

**kubectl -n openfaas logs deploy/vcenter-connector -f**

That way you get information about the events the vCenter connector is receiving from the vCenter. That helps a lot to check, if the connectivity is working well and you react on the correct events.
