---
title: "Performance Comparison of Containerized Machine Learning Applications Running Natively with Nvidia vGPUs vs. in a VM"
image: /images/blog/1-1.jpg
tags: ["Ops", "opvizor"]
date: "2018-05-15"
---

This article is by Hari Sivaraman, Uday Kurkure, and Lan Vu from the Performance Engineering team at VMware. Please find [here](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html) the original article and all related comments and blog posts.

## Performance Comparison of Containerized Machine Learning Applications

Docker containers \[6\] are rapidly becoming a popular environment in which to run different applications, including those in machine learning \[1, 2, 3\]. NVIDIA supports Docker containers with their own Docker engine utility, nvidia-docker \[7\], which is specialized to run applications that use NVIDIA GPUs.

The nvidia-docker container for machine learning includes the application and the machine learning framework (for example, TensorFlow \[5\]) but, importantly, it does not include the GPU driver or the CUDA toolkit.

Docker containers are hardware agnostic so, when an application uses specialized hardware like an NVIDIA GPU that needs kernel modules and user-level libraries, the container cannot include the required drivers. They live outside the container.

One workaround here is to install the driver inside the container and map its devices upon launch. This workaround is not portable since the versions inside the container need to match those in the native operating system.

The nvidia-docker engine utility provides an alternate mechanism that mounts the user-mode components at launch, but this requires you to install the driver and CUDA in the native operating system before launch. Both approaches have drawbacks, but the latter is clearly preferable.

In this episode of our series of blogs \[8, 9, 10\] on machine learning in vSphere using GPUs, we present a comparison of the performance of MNIST \[4\] running in a container on CentOS executing natively with MNIST running in a container inside a CentOS VM on vSphere. Based on our experiments, we demonstrate that running containers in a virtualized environment, like a CentOS VM on vSphere, suffers no performance penlty, while benefiting from the tremenduous management capabilities offered by the VMware vSphere platform.

## Experiment Configuration and Methodology

We used MNIST \[4\] to compare the performance of containers running natively with containers running inside a VM. The configuration of the VM and the vSphere server we used for the “virtualized container” is shown in Table 1. The configuration of the physical machine used to run the container natively is shown in Table 2.

![Nvidia](/images/blog/1-1.jpg)

Photo courtesy of [Performance Engineering team at VMware](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html)

_Table 1. Configuration of VM used to run the nvidia-docker container_

![Nvidia](/images/blog/2-1.jpg)

Photo courtesy of [Performance Engineering team at VMware](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html)

_Table 2. Configuration of physical machine used to run the nvidia-docker container_

The server configuration we used is shown in Table 3 below. In our experiments, we used the NVIDIA M60 GPU in vGPU mode only. We did not use the Direct I/O mode. In the scenario in which we ran the container inside the VM, we first installed the NVIDIA vGPU drivers in vSphere and inside the VM, then we installed CUDA (driver 8.0 with runtime version 7.5), followed by Docker and nvidia-docker \[7\]. In the case where we ran the container natively, we installed the NVIDIA driver in CentOS running natively, followed by CUDA (driver 8.0 with runtime version 7.5),  Docker and finally, nvidia-docker \[7\]. In both scenarios we ran MNIST and we measured the run time for training using a wall clock.

![Nvidia](/images/blog/3-2.jpg)

Photo courtesy of [Performance Engineering team at VMware](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html)

_Figure 1. Testbed configuration for comparison of the performance of containers running natively vs. running in a VM_

![Nvidia](/images/blog/4-1.jpg)

Photo courtesy of [Performance Engineering team at VMware](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html)

_Table 3. Server configuration_

## Results

The measured wall-clock run times for MNIST are shown in Table 4 for the two scenarios we tested:

1. Running in an nvidia-docker container in CentOS running natively.
2. Running in an nvidia-docker container inside a CentOS VM on vSphere.

From the data, we can clearly see that there is no measurable performance penalty for running a container inside a VM as compred to running it natively.

![Nvidia](/images/blog/5-1.jpg)

Photo courtesy of [Performance Engineering team at VMware](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html)

_Table 4. Comparison of the run-time for MNIST running in a container on native CentOS vs. in a container in virtualized CentOS_

Please find [here](https://blogs.vmware.com/performance/2017/11/machine-learning-virtualized-containers-nvidia-vgpu-performance.html) the original article from VMware's Performance Engineering Team and all related comments and articles.

This article is by Hari Sivaraman, Uday Kurkure, and Lan Vu from the Performance Engineering team at VMware
