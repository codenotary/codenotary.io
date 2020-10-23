---
title: "Recover kubectl config running Kubernetes on Ubuntu"
tags: ["Ops", "opvizor"]
date: "2019-06-18"
---

We already [covered](https://www.opvizor.com/install-kubernetes-on-vsphere-using-ubuntu-juju) the installation and configuration of the [Ubuntu integrated Kubernetes deployment](https://jaas.ai/canonical-kubernetes) with conjure-up and juju. But there can be quite some trouble if you delete or lose your kubectl config file to access the Kubernetes cluster.

Luckily there is an extremely simple way to get that solved and to recover kubectl config.

Just imaging you play around with different Kubernetes environments and suddenly you want to clean up all the testing. rm -rf .kube or rm .kube/\* and all clean.

Unfortunately you also delete your access to the running Kubernetes cluster you always work with.

You're going to notice that pretty quick as a kubectl get all returns an error.

Something like:

**The connection to the server localhost:8080 was refused - did you specify the right host or port?**

Alright, now how to recover the configuration?

When you run juju status, you're going to see a Kubernetes master, typically kubernetes-master/0. And in the user directory on the kubernetes-master system is a kubectl config as well. So we just need to copy it to our local system. Either ssh into the kubernetes-master/0, juju ssh kubernetes-master/0 and copy the content of the config file into your local homedirectory .kube/config or use juju scp.

juju scp kubernetes-master/0:config ~/.kube/

That's it and kubectl get all should work as usual again.
