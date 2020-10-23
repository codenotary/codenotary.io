---
title: "VMware vSphere how-to: Clean up snapshot files to free disk space"
tags: ["Ops", "opvizor"]
date: "2015-06-03"
---

![boring job to clean up snapshot files](/images/blog/2150224411_d7061114c7.jpg)

Photo courtesy of [Mr.Thomas](https://www.flickr.com/photos/17813892@N00/2150224411/)([CC ShareALike](http://creativecommons.org/licenses/by-sa/3.0/))

Isn't it boring and frustrating to to do the same work over and over again. Take care of the virtual machine snapshots although you haven't created them. To clean up snapshot files because they haven't been removed automatically.

**Of course it is!**

In today's fast IT time is short, resources are still valuable and there is nothing worse than wasting your precious time on stupid tasks.

We receive so many feedback about our activities around VMware VM snaphots, no matter if they are valid, invalid, inconsistent, hidden, broken or Zombie Snapshots. People don't really understand why a snapshot can be there but is not visible within the VMware snapshot manager nor any other API-related tool. And why should they! It's a bug not a feature.

Most of the inconsistent snapshots are created by Backup products, but its not their fault. They trigger a VM snapshot creation API call and they trigger the snapshot deletion API call. Unfortunately there are situation where the deletion fails without letting the triggering product know. The snapshot gets deleted within the VMware snapshot manager but as the deletion process fails on disk level, the virtual machine is still running on the snapshot delta.vmdk files.

As backups typically happen every day (so the VM snapshot creation) it is a good idea to check for Zombie snapshots daily and remove them. 

Finding the hidden snapshots is one thing, successfully deleting them another, more tricky one.

## Clean up snapshot files

The worst part, hidden or visible snapshots, both need valuable disk space, to the daily Snapshot check is also about **clean up snapshot files to free disk space**.

[![Snapwatcher to clean up snapshot files automatically](/images/blog/wpid-snapwatcher.png)](http://try.opvizor.com/snapwatcherent)

So you can either decide to do all the work yourself, writing scripts or ignoring it until the disk space is filled up. Or you can try our [Snapwatcher](http://try.opvizor.com/snapwatcher "Snapwatcher ") product to catch all kind of VM snapshots and free up your datastore. No more old snapshots, no more hidden snapshots, no more snapshots to be missed. 

As we have the fixing process implemented to even fix Zombie snapshots, you don't need to care about memorizing PowerCLI commands or the Command line way of detecting ESXi hosts locking the vmdk (or cbt) files, unlocking them and consolidating the whole snapshot chain.

Give it a try and check your environment! Little hint, do that task every morning after the virtual machine backups are done.
