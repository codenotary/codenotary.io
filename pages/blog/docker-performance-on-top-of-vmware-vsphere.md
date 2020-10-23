---
title: "Docker Performance on top of VMware vSphere"
tags: ["Ops", "opvizor"]
date: "2016-06-07"
---

Virtualization is not a new concept. Many companies, websites and service providers and many more have been using this technique to deploy their software efficiently for years. Using virtualization, developers can make their code available in the way they want and test it, without any compromise. It offers an easy way of getting the right environment for the applications using limited resources. VMware is the market leader in providing virtualization solutions to many IT companies. 

With cloud computing and many other new software technologies coming into play, virtualization is undergoing many changes to stay in the play. VMware vSphere is the platform that offers cloud computing in virtualization. This gives excellent results for deploying applications using the whole (mixed) environment that is best suited in the code to run. 

Nevertheless, in a extremely agile and quick changing world, especially in product development, virtualization itself became too slow and the footprint too big. We see more and more companies and developers using  containers instead or additionally to virtualization concepts. That makes it very interesting to see the evolution of VMware vSphere in these fast changing deploying conditions. A reasone why the Photon project was born and gains a lot of traction.

Although software containers and virtual machines are said to be competing technologies, it is important to understand the pros and cons of both of them and eventually create a hybrid environment. The results give a clear understanding of these technologies.

## **Docker Software Container**

Known for its ease of use and unmatched container registry, Docker gives excellent performance in most conditions. It is one of the fast growing trends in the IT world. As application deployment is a crucial and difficult task, people usually look for new and reliable method for this purpose. Docker offers a new and improved way of deploying software with all essentials. 

With it, you can run, deploy and manage your applications easily. As more people test and try this platform, there are various reports of its performance in different situations. As VMware vSphere is a popular platform for server virtualization, people have tested Docker performance in vSphere. 

The results varied from scenario to scenario. There can be many important metrics that should be looked at while checking Docker performance in vSphere. To be accepted as a production platform, Docker must fare well in vSphere. As vSphere is the most well known virtualization option provided by VMware, many are curious to see the result of these tests. Performance is an important factor that should be looked at while testing Docker in VMware.

## **About Docker Performance on vSphere**

It is obvious that compared deploying applications in physical servers, deploying them in container or in container on vSphere will compromise on performance to some extent. There are various scenarios of software deployment that have to be considered. 

[![Test Scenarios - docker performance](/images/blog/scnerios.png)](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html)

[](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html)

[Photo courtesy of](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html) [VMware Blog](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html)

- First is the regular and well known scenario of a Linux OS running on a native hardware. In this, there are hardly any complications involved. Considered as bare-metal installation with no layers between the OS and the hardware. 
- The second scenario was VMware vSphere as a bare metal installation and the virtual machine sitting on top with its own OS and the application. Benefits are clearly the better utilization of the hardware (consolidation) and the flexibility running VMs with different OS on the same hardware.
- These two scenarios do not give the liberty to provide varying environments for deploying applications with low footprint and maximum deployment speed. 
- The third and fourth scenario bring container into play using Docker in native OS or in the OS of the virtual machine. 
- The fourth scenario is the full blown package, having vSphere on top of the hardware, Virtual Machines deployed with different OS options and running container within the Guest OS to gain maximum agility. 

There are many aspects of performance testing that were tried and the results were surprising.

## **Parameters Of Testing**

Performance testing is a complex task. It involves testing many aspects and conditions. To measure performance in the best manner, there should be thorough testing. 

![Linpack performance Docker on vSphere](/images/blog/linpack.png)

Photo courtesy of [VMware Blog](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html)

Docker Performance on top of VMware vSphere

When checking the normalized LINPACK performance the performance difference was minimal. Very likely hard to notice from a end user perspective. That result means, docker and VMware work great together when it comes to computing resources.

LINPACK detail: 

_LINPACK solves a dense system of linear equations (Ax=b), measures the amount of time it takes to factor and solve the system of N equations, converts that time into a performance rate, and tests the results for accuracy. We used an optimized version of the LINPACK benchmark binary based on the Intel Math Kernel Library (MKL)._

_Source:_ http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html

![Docker performance on vSphere](/images/blog/netperf-latency.png)

Photo courtesy of [VMware Blog](http://blogs.vmware.com/performance/2014/10/docker-containers-performance-vmware-vsphere.html)

Network latency, throughput, storage performance are some of the vital parameters that should be tested in various scenarios. As far as network latency goes, Docker was at par with the pure native scenario as long as the hostnet was used.  

As soon as the Docker networking "proxy" that runs in the user space came into play, the latency increased by nearly 25%. That means the very comfortable "let docker do the network stuff" approach slows down the latency pretty much.

Having an additional virtualization layer doesn´t do good for the network latency as another layer adds more latency. Therefore, running on top of VMware vSphere, the container architecture should use the HostNet to gain the best possible Docker performance.

That shows, that Docker performs very well in a VMware environment, at least in most cases. You can get all benefits of the existing abstraction layer technologies (Virtualization + Containerization). With Docker container in VMware vSphere, developers as well as the system admins can take advantages of both technologies in the same environment without much overhead. Performance testing showed that Docker on top of VMware vSphere can co-exist as they with their respective benefits without a real performance degredation. 

As the demand for new and quick technologies increase rapidly, developers can try a combination of these two technologies and see their smooth integration.

## **vSphere and Docker Together**

As the performance test showed positive results for using Docker container in VMware vSphere, it is important to understand the things that developers can get if they use both these technologies together. vSphere is a popular system known for offering the best in the virtual machine field.

Virtual servers are well known for quickly providing the required server environment for application deployment. Many application developers use this concept for getting the environment of their choice ready using limited hardware resources. With the introduction of Docker in the recent times, things have changed for the better. Software containers offer a different approach to the virtualization concept. 

With this technology, developers can get the reliability of the Linux kernel and many other features to go with their software applications. 

Although that container are viewed by many as the next generation of virtualization, Docker has its vulnerabilities and its not really true, that container can replace all scenarios for virtualization. By using Docker in vSphere, developers can balance both these environments easily. 

vSphere integrated containers are now becoming popular as developer realize their benefits. This type of vSphere infrastructure is suited perfectly for deploying applications that are quick and do a lot of work without any issues. They give the best user experience.

[![Performance Analysis Docker](/images/blog/perfdocker.png)](http://try.opvizor.com/perfanalyzer/)

To monitor docker container on top of VMware - check out [Performance Analyzer](http://try.opvizor.com/perfanalyzer/).
