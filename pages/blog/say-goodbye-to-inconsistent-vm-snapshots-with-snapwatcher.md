---
title: "Say Goodbye to inconsistent VM snapshots with Snapwatcher - fix VM snapshot"
tags: ["Ops", "opvizor"]
date: "2015-02-25"
---

## How much space is being wasted in your virtual environment by broken snapshots (VMware broken snapshot)?

Broken or **inconsistent VM snapshots** are a common problem that affects 81% of all VMware vSphere environments. In the past these broken snapshots were almost a necessarily evil; virtual environment administrators paid the price in wasted disk space in exchange for the ability to revert to past stages when problems arose. Admins can’t do much to prevent invalid snapshots, as many of them automatically occur during backups that trigger snapshot creation and deletion. Many things can cause VMware to struggle to delete a snapshot, causing invalid snapshots to be created.

Because broken snapshots are often incredibly hard to detect and constantly occur, they are often ignored. The problem is that a single Snapshot’s Delta-file is able to grow to the same size of the original file. Left alone for too long, they can quickly balloon and eat up all the space in your datastores.

[![opvizor Snapwatcher - Fix inconsistent VM Snapshots or fix VM Snapshot](/images/blog/snapwatcher_2.png)](https://www.opvizor.com/wp-content/uploads/2015/02/snapwatcher_2.png)

After noticing that many of our customers were being plagued by inconsistent VM snapshots, as we regularly were detecting TBs of VMware broken snapshot, we began thinking of a proactive solution to protect precious disk space. We believed that VMware admins shouldn’t have an endless battle to fix VMware broken snapshots. We thought that if we could create an easy way for anyone to manage and delete their snapshots, they would be more likely to remove broken snapshots on a daily basis well before they faced disk space shortages.

We’re pleased to announce we have a solution called “Snapwatcher,” a simple tool that can help you discover and remove any ugly and hard-to-find broken snapshot (and fix VM snapshot).

This is the first automated solution that constantly monitors all snapshots in the entire VMware vCenter systems to catch and repair old, VMware broken snapshot or inconsistent VM snapshots. Our powerful grid allows you to manage actions on hundreds of snapshots in one simple dashboard view. Snapwatcher does the hard work to protect your disk space from broken snapshots so you don’t have to. Whenever Snapwatcher is able to free space from removing or repairing snapshots you’ll get a progress report so you can see just how much memory you released.

You can download and try Snapwatcher to fix VM snapshot's here by clicking “[Try Snapwatcher by opvizor!](http://try.opvizor.com/snapwatcher)”
