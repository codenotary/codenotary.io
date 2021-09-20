---
title: "Nested vSphere 7 and  Kubernetes Lab Deployment explained"
image: /images/blog/switch_nested.png
tags: ["Ops", "opvizor"]
date: "2020-05-06"
---

[William Lam's great deployment script](https://github.com/lamw/vghetto-vsphere-with-kubernetes-external-nsxt-automated-lab-deployment) triggered the idea of setting up a vSphere 7 and Kubernetes (VCF 4) environment completely nested on top of our development vSphere environment.

While the deployment itself worked very well to deploy the nested vSphere 7 environment, you need to fulfill some important requirements before you can enable the Kubernetes part (VMware Cloud Foundation 4 - VCF). 

This blog post is going to cover these requirements as well as some tips and tricks to work with your fresh VCF 4 environment, the Workload Management and the Tanzu Kubernetes Grid (TKG) cluster.

## Automated Deployment

### Requirements

This one is the requirements part that William proposes to run his script:

- vCenter Server running at least vSphere 6.7 or later
    - If your physical storage is vSAN, please ensure you've applied the following setting as mentioned [here](https://www.virtuallyghetto.com/2013/11/how-to-run-nested-esxi-on-top-of-vsan.html)
- Resource Requirements
    - Compute
        - Ability to provision VMs with up to 8 vCPU
        - Ability to provision up to 116-140 GB of memory
    - Network
        - Single Standard or Distributed Portgroup (Native VLAN) used to deploy all VMs
            - 6 x IP Addresses for VCSA, ESXi, NSX-T UA and Edge VM
            - 5 x Consecutive IP Addresses for Kubernetes Control Plane VMs
            - 1 x IP Address for T0 Static Route
            - 32 x IP Addresses (/27) for Egress CIDR range is the minimum (must not overlap with Ingress CIDR)
            - 32 x IP Addresses (/27) for Ingress CIDR range is the minimum (must not overlap with Egress CIDR)
            - All IP Addresses should be able to communicate with each other
    - Storage
        
        - Ability to provision up to 1TB of storage
        
        **Note:** For detailed requirements, plesae refer to the official document [here](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-kubernetes/GUID-B1388E77-2EEC-41E2-8681-5AE549D50C77.html)
- [VMware Cloud Foundation Licenses](https://docs.vmware.com/en/VMware-vSphere/7.0/vmware-vsphere-with-kubernetes/GUID-9A190942-BDB1-4A19-BA09-728820A716F2.html)
- Desktop (Windows, Mac or Linux) with latest PowerShell Core and PowerCLI 12.0 Core installed. See [instructions here](https://blogs.vmware.com/PowerCLI/2018/03/installing-powercli-10-0-0-macos.html) for more details
- vSphere 7 & NSX-T OVAs:
    - [vCenter Server Appliance 7.0 Build 15952498](https://my.vmware.com/web/vmware/details?downloadGroup=VC700&productId=974&rPId=45006)
    - [NSX-T Unified Appliance 3.0 OVA - Build 15946738](https://my.vmware.com/group/vmware/details?downloadGroup=NSX-T-300&productId=982&download=true&fileId=35e89f7fce7f0681258656c9b16ebc5d&secureParam=3e43a22a12477bcae462c37d09677dd2&uuId=724599c8-41c9-47ca-8995-eda318eda20e&downloadType=)
    - [NSX-T Edge 3.0 OVA - Build 15946738](https://my.vmware.com/group/vmware/details?downloadGroup=NSX-T-300&productId=982&download=true&fileId=7ca3ab9202b39d92b805d5414628215a&secureParam=833ac1e89d29baa2c62c274d5fc072f7&uuId=f79fbe81-d12e-4403-b0c5-e8f76aa5621e&downloadType=)
    - [Nested ESXi 7.0 OVA - Build 15344619](https://download3.vmware.com/software/vmw-tools/nested-esxi/Nested_ESXi7.0_Appliance_Template_v1.ova)

### Additional requirements

In case you want to continue enabling Workload Management (VCF) within your nested environment we would further recommend the following - otherwise your SupervisorControlPlaneVM won't be completely initialized.

- configure MTU size 1600 or higher on every virtual and physical swith on the communication path from the NSX T0 uplink to your Internet gateway (sNAT). That includes the underlying (where the nested environment is deployed) and the nested vSwitch/dvSwitch!
- Accept Security Promiscuous mode and Forged transmits setting on your Portgroups
- Configure a PFsense (or something similar) to act as a Gateway including SNAT for your NSX T0 Uplinks

![](/images/blog/switch_nested.png)

Accept Promiscuous mode and Forged Transmits for underlying and nested Portgroups

### Run the script

Simply is to clone the GitHub repository, change the script according to the README.md and run it using the PowerCLI.

When the script successfully deployed your nested ESXi, the vCSA, the NSX Management and the NSX Edge, you can go ahead and connect to your newly deployed vCSA 7.

![](/images/blog/nested.png)

Nested environment deployed

## Enable the Workload Management

To enable the workload management and deploy the Kubernetes environment by doing so, simply select Workload Management in your vSphere client Menu.

![](/images/blog/workload-management.png)

Enable Workload Management

Let's enable the Workload Management

![](/images/blog/enable-workload-1024x639.png)

The wizard guides you through the most important steps and most people can select tiny as a deployment size.

To simplify the guideline we used all the network settings William is using in his script.

![](/images/blog/ipsetting-1024x714.png)

IP Settings

You need to make sure that your gateway has an adapter and ip address in the Management and Workload network (Ingress and Egress) to be sure that container images can be downloaded later on.

Furthermore, make sure to enable SNAT in your Gateway and to configure the firewall.

![](/images/blog/pfsense-1024x706.png)

pfsense example

The next important step is to select the correct Datastore for all your images and related data.

![](/images/blog/storage-1024x401.png)

After starting the enablement, its time to get a coffee because that process can take some time.

## Deployment trouble

The first couple of minutes are pretty boring and you can ignore some of the errors.

![](/images/blog/1stminutes-1024x497.png)

But it doesn't hurt to check the events of the first SuperVisorControlPlaneVM that will be powered on. That one is the Kubernetes Master and if this deployment fails, not much will happen in the future.

![](/images/blog/checkcontrolplane-1024x408.png)

Check the Events of the first ControlPlaneVM

If you see some entries like Event

**burst of 'com.vmware.vc.guestOperations.GuestOperation' started**

in the Events of the first powered on SupervisorControlPlaneVM, you can be pretty sure that the deployment is progressing well and the communication between the nested ESXi and the VCF VMs works.

**Don't be impatient!**

Some of the errors are absolutely normal and can be ignored if these don't last for more than 15-20 minutes.

![](/images/blog/error-progress-1024x558.png)

You can also test the environment during the install by pinging the NSX T0 uplinks.

When the master VM is configured, the other 2 SupervisorControlPlane VMs will start as well and all configurations is copied over to them.

![](/images/blog/success-workload-1024x158.png)

## Create your first namespace

When you select the Namespaces tab, you can create your first namespace to deploy demo applications or just test a bit.

![](/images/blog/workload-create.png)

Let's create the Namespace test

![](/images/blog/testns-1.png)

Add permissions and storage

![](/images/blog/permissions.png)

## Connect to the Control Plane

The main tool to work with the Kubernetes platform is kubectl that can be downloaded by visiting the Control Plane IP using your browser or simply click Open under Link to CLI Tools.

![](/images/blog/kubernetes-clitools-747x1024.png)

Download kubectl and the vsphere plugin, so you can directly connect to your vSphere based Kubernetes deployment:

```
# Login to Kubernetes
kubectl vsphere login --server=https://controlplane-ip -u administrator@vsphere.local --insecure-skip-tls-verify

# select the test namespace - it safes you typing -n test after each command
kubectl config use-context test

# show all existing resources
kubectl get all
```

If you haven't deployed anything yet, you simply see **No resources found in test namespace**. We're going to change that.

## Run a test Pod

Let's test, if we can access the internet to pull images by creating a demo nginx pod.

```
# deploy nginx for testing
kubectl run nginx --image=nginx

# ignore the warning as we're just testing:
kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.
deployment.apps/nginx created

# check the deployment status
kubectl get all
```

![](/images/blog/test-deploy.png)

Seems to work!

If it doesn't work for you, try these commands to get details:

```
# get information about nginx deployment
kubectl describe deployment.apps/nginx

# get pods with label/value run=nginx and return full configuration
kubectl get pods -l run=nginx -o yaml
```

You can track all events and the configuration files in your vSphere client as well.

![](/images/blog/events-1024x357.png)

Track all Kubernetes events

![](/images/blog/deployment-1024x367.png)

Check the deployed configurations - view the YAML for details

```
# delete the pod
kubectl delete pods -l run=nginx

# check for pods again and you'll find a new pod with a low AGE
kubectl get pods -l run=nginx

# delete the deployment
kubectl delete deployment nginx

# check for pods again and you'll nothing will be shown
kubectl get pods
```

This little exercise explains a bit how Kubernetes works. The pod will be created based on a replicaset, that is created by the deployment. If we delete the pod the replicaset creates a new one.

Deleting the deployment deletes the pod and the replicaset as well.

Next blog post will be about adding the Tanzu Content Library, creating a TKG cluster and how to monitor logs and performance.

![](/images/blog/kubernetes-perf-1024x243.png)
