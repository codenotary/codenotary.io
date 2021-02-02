---
title: "Immutability vs Ransomware and file encryption"
date: "2021-02-02"
image: "/images/blog/mascotfree.png"
tags: ["ransomware", "encryption", "immudb", "Go"]
---


# Immutability vs Ransomware and file encryption

The only effective answer to ransomware is to have a clean backup. Some people say the only true weapon against ransomware is to have offline backups. Unfortunately, these are slow and not anywhere close to realtime. In our last blog, we described how immudb can offer protection against ransomware but there were still some questions unanswered. What if the attackers get root access to the immudb server? What if they encrypt the immudb files? The short answer is that you are in trouble if the bad actors gain root access for every system you are using but there are ways to make that scenario almost impossible.

## Access levels and their impact

First of all immudb has to be run in a protected environment in order to add security against 
ransomware. A protected environment means, that the access levels have to be different. Immudb should just be accessible at application level. For example, the attackers gain root access to many servers and encrypt every file they can get their hands on. If immudb was on one of those servers, it's directory would be encrypted too and therefore be inaccessible. The backups have to be done on application level using immudb credentials. Even if the attackers get the credentials for immudb, they cannot encrypt immudb’s data, because records can't be overwritten or changed. Instead, immudb is storing changing records in a history table. Clean versions of the record can later be retrieved through that table. The root access to the remote immudb server should be highly protected. Another possibility is to sync your backup with a remote storage solution, for example, Google Cloud Storage or Amazon S3. 

## Remote Backups with immudb and restic

Now we have learned the recipe for successfully using immudb as a backup tool. The key is to send the backups to a destination that is isolated from the production environment. Cloud storage is an obvious example. Different authentication systems will make it harder (if not impossible) for attackers to gain access. Of course, there are still some basic rules to follow like don't safe credentials for these systems electronically in one place and never stop hardening your network security. 

Immudb is high speed and can be deployed close to your application data, that's why it makes sense to have it running in your production environment. This puts the immudb files at risk of being hit by an attack too. To avoid that, it is feasible to back up the immudb files to a remote location for example by using [restic](https://restic.readthedocs.io/en/latest/index.html). 

Back up the data in a remote restic repository. Supports SFTP, REST, Amazon S3, Google Cloud Storage and many more remote storage solutions.

```bash
restic -r <remote-restic-repository> --verbose backup /home/sebastian/immudb
open repository
enter password for repository: xxxxxxx
repository 0fc337c2 opened successfully, password is correct
created new cache in /root/.cache/restic
lock repository
load index files
start scan on [/home/sebastian/immudb]
start backup on [/home/sebastian/immudb]
scan finished in 0.291s: 533 files, 106.502 MiB

Files:         533 new,     0 changed,     0 unmodified
Dirs:            2 new,     0 changed,     0 unmodified
Data Blobs:    609 new
Tree Blobs:      3 new
Added to the repo: 106.503 MiB

processed 533 files, 106.502 MiB in 0:00
snapshot ad1c1dd6 saved

```
How can you be sure that restic is not backing up by ransomware encrypted files and overwriting the clean ones? Here is the deal: immudb can proof and recalculate the files and check their consistency. Immudb carries along a Merkle tree, which is statically connected to the data, so the construct cannot be changed without knowing. That's why if the backup is encrypted it won’t work with immudb. It can be proved by restoring the backup and starting up immudb. It is that simple.

```bash
$ restic -r <remote-restic-repository>  restore 0fc337c2 --target <target-directory> 
enter password for repository:
restoring <Snapshot of [/home/sebastian/immudb] at 2021-01-26 21:40:19.884408621 +0200 CEST> to <target-directory>
```

<img src="/images/blog/immudbrestic.png">


## Summary and outlook
Being attacked by ransomware groups is now fun. Sometimes people start to overestimate the power those groups have. They won’t be able to hack all cloud storage providers at the same time. Immudb has key advantages, as you can store data cryptographically coherent and verifiable and you will always know if your backups have been compromised. On top of that, the backups are not offline, therefore fast and minimizing the downtime of the affected services. Security can be leveraged by relocating the backup files to a remote location with a different access level. Using immudb as a backup database solution is a highly securable setup. We at CodeNotary are currently working on improving immudb’s abilities for that use case by adding streaming and data splitting features. This will enable immudb to backup files of any size. Stay tuned by leaving us a Star on [Github](https://github.com/codenotary/immudb).
