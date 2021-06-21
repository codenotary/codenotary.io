---
title: "Introducing VMware Kubernetes Engine™ (VKE)"
image: /images/blog/cloud-hand-hero-img.jpg
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2018-07-17"
---

# Introducing VMware Kubernetes Engine™ (VKE)

Today we want to share an article from the [VMware Cloud](https://cloud.vmware.com/community/author/mblogsadmin/) team. Please find [here](https://cloud.vmware.com/community/2018/06/26/introducing-VMware-kubernetes-engine-vke/) the original article with all comments and scroll down for more information.

_This post was co-authored by Krishna Ganugapati and Bill Shelton, VMware_

Today, we are excited to announce the public beta of VMware Kubernetes Engine, a Kubernetes-as-a-Service offering that is the latest addition to our VMware Cloud Services portfolio.

If you are not familiar with VMware Cloud Services, it is a portfolio of SaaS-based offerings designed to help with operations across clouds. All services within the portfolio share single sign-on, billing, global support and are accessible [here.](http://cloud.vmware.com/)

VMware Kubernetes Engine is an enterprise-grade Kubernetes-as-a-Service offering that provides easy to use, “secure by default”, and cost-effective Kubernetes. VKE will launch first on AWS. In the future, VMware will also support VKE on Azure and additional cloud environments as part of our multi-cloud strategy.

We would like to share some of the customer feedback we have received that frames our goals and priorities.

![Kubernetes Engine](/images/blog/cloud-hand-hero-img.jpg)

## Simplification

When we look at the surface area of Kubernetes today relative to eighteen months ago, the growth is astounding. Kubernetes is an incredibly rich application runtime environment with continuing growth potential but with an associated complexity challenge. Some customers we talked to have the scale or strategic need to build a dedicated Kubernetes team to assure the full value of the platform is available to their applications. However, many customers we have talked to see Kubernetes as a candidate to consume as a service where they get all the value of the growing ecosystem while maintaining focus on developing their applications. It is this desire by customers to get the full benefit of Kubernetes while not having to take on the operational burden and build a highly specialized team, that serves as our “north star” for making VKE Simple and Easy to Use.

This leads to various directions we’d like to share:

- We have created an abstraction we call VMware Smart Cluster™. The Smart Cluster is a collection of policies that capture the desired state of a fully compliant Kubernetes cluster. The Smart Cluster implementation takes the policies and continuously evaluates the security, health, and size of the Kubernetes clusters and remediates any deviations.
- Building on the Smart Cluster, we have created a set of strongly typed Smart Clusters to choose from. VKE currently has two Smart Cluster types, Developer and Production, that factor the over 50 different configuration decisions that need to be made to achieve security and availability best practices for Kubernetes and AWS into a simple choice, given your service-level objectives. The various decisions regarding master nodes, etcd, and worker node composition, network and storage configuration are managed by VKE given your service-level objectives. This is obviously just a start in capturing the full breadth of policy intents for Kubernetes clusters, so we look forward to your feedback on how we can evolve these policies to better meet your needs.
- The last and possibly most important architectural decision we have made regarding Smart Clusters is the scope of the abstraction itself. We see three basic models going forward regarding abstractions of the Kubernetes cluster:

1. Abstract nothing.
2. Abstract the control plane only, pull the control plane (master nodes and etcd) behind the curtain and leave the customer to manage the hundreds of worker nodes.
3. Abstract everything, pull both the control plane and the worker nodes behind the curtain.

- We are operating under the assumption the highest ratio of customer value to cost is in the ‘abstract everything’ model and therefore have set our bar at turning the entire Kubernetes cluster into a policy-defined, dial-tone service. We don’t see this as a right or wrong decision as there are trade-offs between these different models. Have we nailed every trade-off perfectly? Absolutely not. However, we are fully committed to continuing to work this problem until customers tell us that we are hitting the sweet spot between simplicity and flexibility.

Here is the [link to a demo video](https://www.youtube.com/watch?v=YVoE5Mowl4c&t=8) of the service that shows just how simple and easy it is to create clusters and to start deploying applications.

![Kubernetes Engine](/images/blog/deeds-not-words.jpeg)

## Cost Efficiency

Another area we have heard feedback regards keeping costs of Kubernetes down–both labor costs and underlying compute costs. We have set out to work this problem from a few dimensions:

- Cost of Operations: Most importantly the underlying goal of the simplifications brought by VKE is to enable adoption of Kubernetes without additional, highly specialized staff.
- Resource Optimization: The Smart Cluster has a couple behaviors that help with economizing the cost of your clusters. First, it removes the need for educated guesses around the appropriate instance sizes and cluster composition. Yes, we said instance and not VM. A Smart Cluster is built directly on AWS EC2. When new instance families are launched by AWS that provide superior price and performance, the Smart Cluster will identify these savings opportunities and migrate your clusters to latest instance families upon your next version upgrade. Second, the Smart Cluster grows and shrinks to the most efficient size given the currently deployed pods. These optimizations represent just the most basic, common sense resource optimizations. We have received encouraging feedback from customers on additional opportunities to bring other strategies to optimizing the resource backing of the clusters which we continue to develop.
- Pay for What You Use: A cost savings principle that we think the cloud platforms have nailed and we strongly believe in is paying for what you use. We are still working out exact price points, but VKE enables you to pay for your Kubernetes clusters and only the vCPUs and RAM you have used down to the second.

## Policy Based Management

In initial customer discussions, we heard from a customer that “… managing a couple clusters is hard but managing tens of Kubernetes clusters with hundreds of namespaces and developers scattered around the world is impossible.” We loved the articulation of the problem statement and started digging into what the issues were and how we might help. What we found was too many repetitive settings and actions that were needed on each individual cluster. This in turn led us to our global control and policy plane. Here are some of the basic concepts that we think clarify how it might be useful to you:

- Similar to Google Cloud Platform a user in VKE is provided a simple tree structure to organize resources into logical containers, the user optionally sets policies on select containers (nodes of the tree), and those policies will inherit recursively down to child containers (traverse the tree).
- Every customer environment in VKE is isolated from all other customer environments. In fact, each occupies its own AWS account! We call these environments “orgs”. An org has one or more folders. A folder is a logical construct that is global in scope. Each folder has one or more projects that, like folders, are logical containers which are global in scope. A project contains one or more Smart Clusters that are pinned to a specific AWS region thus providing you complete control over data locality. Then, of course, a Smart Cluster has one or more namespaces. You get the idea. A simple, extensible tree structure that enables VKE access policies to be attached to a node and have them inherit down to child nodes.
- Eventually these VKE access policies are cast into native Kubernetes RBAC (the native role-based access control system for Kubernetes). We are pushing the resultant Kubernetes RBAC roles to one of the master nodes where it is propagated to all other masters. To assure these Kubernetes RBAC roles stay consistent with VKE, we implement a custom Admission Controller to avoid any drift between the VKE policy scope and the Kubernetes clusters themselves. A quick use case to pull some of this together. When you set a policy on the root node of your org that enables specific permissions to a given identity or group of identities, every access from those identities to any cluster (existing or newly created) anywhere in the world is governed by that single access policy. Basic management of many-as-one.
- Over time, we plan to add additional policy types to the base policy framework to enable cost management, configuration, connectivity policies between clusters and namespaces, and other governance and control use cases that we think would benefit from this pattern.

We have some additional thoughts on how these policies can be managed using the large developer tools ecosystem, but we’ll come back to that in a future blog post.

## Multi-Cloud Ready

More than any other area, we really wanted to punch through the multi-cloud marketing buzzwords and be very clear as to our multi-cloud goals and objectives. Let me first distill the key directions we have heard from customers and which we believe just make sense from first-hand experience.

First, Kubernetes represents a very useful standardization of many application runtime capabilities. VKE vends only native upstream certified compliant Kubernetes. Your applications and the management tools that you run with VKE are compatible with all other standard Kubernetes environments. In the case of PKS, the Pivotal and VMware Kubernetes container offering, we go one step further and assure that we always have a shared, supported version so you can be assured that even deltas between Kubernetes versions don’t create issues.

Second, Kubernetes, as impressive as it is in scope, is just one element in building modern cloud native applications. The other elements include data services, developer tool chain services, analytic services, and infrastructure services such as storage and networking just to name a few. In the public cloud, many of these services are provided by the cloud platform itself. AWS is most frequently used today, but Azure and Google Cloud Platform will likely increase in relative share over time. Integrations with AWS, Azure and potentially other cloud platforms, assure every bit of the differentiated value of those underlying clouds flows through to our customers. For us, multi-cloud done right is a great Kubernetes experience on AWS AND a great Kubernetes experience on Azure AND so on. Multi-cloud is a least common denominator decorator across public clouds with “lip service” integrations.

So, with those motivations on the table here are some of the implementation details in VKE in support of multi-cloud:

- VMware Kubernetes Engine itself runs on AWS and supports the creation of clusters on native EC2 instances. At General Availability, we will be in three AWS regions–US-East1, US-West2 and EU-West1. VKE provides a single endpoint for the service which spans all supported regions. The VKE service and its state are replicated across all regions while maintaining sufficiently loose coupling so all regions can continue to operate in the event of region failure or network partitioning of one region from the others. This architecture will later be extended to include Azure as another supported region that will be under the same unified, global control plane.
- The VKE Connections feature offers a native integration with AWS’ VPC peering capability for customers who want to access their existing AWS workloads and AWS services using private network connectivity. You can initiate VPC peering requests for any VKE production Smart Cluster directly from the console or CLI to easily set up the connections to one or more AWS VPCs running in your accounts. After the peering request is accepted, the connection is established and the peer VPCs services can be accessed directly from any Kubernetes pod in the Smart Cluster. VPC peering connections provide a simple and secure method to integrate your Kubernetes applications with your existing AWS accounts.
- To assure as much compatibility as possible across different Kubernetes environments, VKE and PKS maintain Kubernetes version compatibility so that customers can be assured they are not confronted with some incompatibility across Kubernetes versions that causes issues.

## Highly Secure by Default

The simple story here is that VMware Kubernetes Engine manages security for the customers by (a) making sure that all components are fully patched with a Kubernetes environment hardened for production, (b) encrypting communications, and (c) providing network isolation. Obviously, this is just scratching the surface and I will cover this further in a future blog post.

Please try out VMware Kubernetes Engine and let us know how we can evolve the service.

If you are interested and would like to try it out, VMware Kubernetes Engine is available for beta on our website; simply visit [cloud.vmware.com/vmware-kubernetes-engine](https://cloud.vmware.com/vmware-kubernetes-engine) to learn more details and request access to the service.

_This post was co-authored by Krishna Ganugapati and Bill Shelton, VMware_

[![Download Performance Analyzer](/images/blog/button_download-performance-analyzer-6-360x41-3.png)](https://www.opvizor.com/)
