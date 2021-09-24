---
title: "immudb v1.1 released - featuring improved SQL, S3 and replication"
date: "2021-09-22"
image: "/images/blog/immudb-mascot-small.png"
tags: ["immudb", "release", "1.1", "data security", "immutable"]
---
​
<img src="/images/blog/immudb-mascot-small.png" width="300"/>
​
immudb v1.1.0 is officially released and you will love it!

Many of the features included in this release were requested and discussed by community members, to whom we're grateful for all the interaction and contributions!

Today's release includes a more matured and robust SQL engine, built-in replication, stable cloud storage capabilities, among many minor improvements and fixes.
​
## What makes immudb so unique?

immudb layered design makes it a great fit for a wide range of use cases; **immudb's heart consists of an embeddable, verifiable key-value store** and as such, it can be used as an embedded cryptographically verifiable log or as a full-blown key-value store.

The pluggable SQL Engine converts it into a relational database, similar to SQLite but tamper-proof!

If that weren't enough, immudb is released as a stand-alone server with user management and multi-database support, making it super easy to integrate with any application. Now with built-in replication and cloud storage capabilities!

## Major new features:

* SQL improvements
  immudb can be used both as a key-value store and as a [relational database (SQL)](https://docs.immudb.io/1.0.0/quickstart.html#sql-operations-with-immuclient), making it the first embeddable/client-server immutable database with relational capabilities. immudb also expands tampering verification capabilities to rows.
  
  The following features were added to the SQL Engine:
    - AUTO_INCREMENT primary key
  	- Unique indexes
  	- Multi-column indexes
  	- Multi-column primary keys
  	- Support for negative values in INTEGER columns and calculations using negative values
	- Huge improvements of query optimization with indexes
  	- Explicit index selection
  	- Un-restricted joins (joins involving sub-queries)

  All these features together with [queries across time](https://docs.immudb.io/1.0.0/quickstart.html#time-travel) and tampering verification capabilities make immudb unique.

* Replication
  immudb built-in replication makes it possible to replicate databases for backup and distributing query workloads.

* S3 storage backend
  ​Remote storage is now marked stable. With the S3 backend, immudb 	automatically uploads the data into an S3-compatible server reducing the amount of data stored locally.

* Reproducible databases
  By default, ingesting the same data into different databases may produce different and incomparable cryptographic proofs. This release includes the possibility to have a deterministic state by ingesting the same data.

* Improved docker images
  New release comes with changes to how our docker images are built.
  
  The main codenotary/immudb image is now built using a scratch base to reduce the image size and increase its security.

  There are two more versions of the immudb image - one based on debian (codenotary/immudb:1.1.0-bulllseye-small) and one based on almalinux (codenotary/immudb:1.1.0-almalinux-8-minimal).

## Important notes

* Breaking changes on the SQL layer
  This release is using completely new format for storing SQL data. This change was necessary to support new features but it is not compatible with the old format.
  
  After upgrading to immudb 1.1.0, the old data will not be available through the SQL interface even though immudb still contains the low-level KV representation of those entries. If you need to migrate the old data to the new format, please contact us on our discord channel.

* Go version support
  Starting with the next release our official builds and docker images will be compiled and tested using go 1.17. In order to support older systems where go 1.17 is not easily available, we are providing statically-linked binaries. We also ensure that binaries can be manually compiled with older go versions down to 1.13 (excluding tests).


Downloads for all major platforms are [available on Github](https://github.com/codenotary/immudb/releases/tag/v1.1.0). Documentation and a getting started guide are [available on the immudb.io website](https://docs.immudb.io/master/).
​
## Contact Us
​
For any question contact us on [Discord](https://discord.com/invite/ThSJxNEHhZ).
​
Codenotary Inc.<br>
6750 West Loop South, Suite 845<br>
Bellaire, TX 77401, United States<br>