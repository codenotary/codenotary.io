---
title: "Debugging crashed Kubernetes container"
tags: ["Ops", "opvizor"]
date: "2019-04-04"
---

When working with [Kubernetes](https://kubernetes.io/), you're often amazed how easy container, service or secret configurations can be deployed with a simple _**kubectl add -f <yaml>**_ command. At least as long as it works. The moment your Kubernetes container doesn't start, you are forced to start debugging and the simplicity to create resources based on community yaml files fires back.

Now you can dig deep into troubleshooting the container and trust me - that's can be no fun at all.

Therefore, we start the post with one of the most annoying issue running your container - a **CrashLoopBackoff** error. That error can really drive you nuts.

# Start to debug

You need to know some very important commands before you can even think of debugging. Next to the common **kubectl get** command, the kubectl describe is your way into detailed information about your environment.

Sometimes a **kubectl cluster-info dump** helps getting started.

Using **kubectl get all** or **kubectl get pods**, you can find the explore your environment, but let's go step by step.

# kubectl describe

Of course, first you need to find out what happens to the container and what's the container (pod) name.

_**kubectl get pods**_ does a good job at that for the current namespace, **_kubectl get pods --namespace monitoring_** for the defined namespace and if you want only want pods of all namespace just use _**kubectl get pods --all-namespaces**_.

When you know the pod name, run a kubectl describe pod/podname to find the reason of the current status. Sometimes its an simple reason, as resources are not available. Examples are not enough memory or no volumes, persistentvolumeclaims available. 

In this example, you just need to create a volume and a PersistentVolumeClaim for the container to be able to start:

![Kubernetes container missing PersistentVolumeClaim](/images/blog/unmet-volumeclaim.png)

But there are much uglier error messages like a CrashLoopBackoff that points to the inside of the pod and not the outside environment.

# CrashLoopBackoff

CrashLoopBackoff is a nasty one, as its a bucket that offers a big set of errors, all nicely hidden behind the same error condition. Our example container is called metrics-prometheus, installed with a helm install command and named metrics.

First thing is to try kubectl describe pod to get some more details. Unfortunately, most of the time, the CrashLoopBackoff isn't showing any outside information. But maybe you're lucky and find some error in the output.

### Log files

Lets try to get some logs

**kubectl logs pod** or **kubelet logs**

As the Kubernetes container keeps crashing, the logs command doesn't help either as its only useful for running container.

We need to get into the Kubernetes container node. To find more information about the container we need to dig deeper using the wide parameter.

**kubectl get pods -o wide**

![kubernetes container](/images/blog/kubectlwide.png)

As we use [juju](https://kubernetes.io/docs/getting-started-guides/ubuntu/) to manage kubernetes, we can directly ssh into the node. But first we need to find the node name using the command juju status.

![juju status](/images/blog/jujustatus.png)

## SSH into the node

The node where the crashed container was last time is called kubernetes-worker/1:

**juju ssh kubernetes-worker/1**

Now we need to find the log files of the crashed container and the log files are stored under /var/log/containers.

**sudo tail /var/log/container/metrics-prometheus ....**

Just walk through the best options and check for errors. Bingo:

![prometheus error](/images/blog/promerror.png)

It seems that the used _prometheus.yml_ configuration file has syntax errors we need to fix before the [Prometheus](https://prometheus.io/) server can start.

So lets delete the whole setup again. As we installed it with [helm](https://helm.sh/), lets keep using that great tool using the same name used for the install **metrics**:

**helm del --purge metrics**

In the case of Prometheus, there are plenty of issues that can happen because of an invalid config file, therefore you should use the following project to check your config before deploying into the deep kubernetes cluster.

[https://www.robustperception.io/how-to-check-your-prometheus-yml-is-valid](https://www.robustperception.io/how-to-check-your-prometheus-yml-is-valid)

After fixing the Prometheus configuration file and redeploying the whole metrics setup using helm, all went well and the container was running smoothly.
