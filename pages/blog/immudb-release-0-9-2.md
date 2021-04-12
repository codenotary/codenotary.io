---
title: "immudb 0.9.2 released"
date: "2021-04-12"
image: "/images/blog/immudb-mascot-small.png"
tags: ["release", "0.9.2"]
---

Dear community, immudb v0.9.2 has just been released.

# Highlights

* immudb gRPC API now support streams.
  The Go SDK provides the methods Stream* to perform streaming operations. Eg. StreamSet, StreamGet
* In the past, immudb returned the last indexed transaction by default. As the indexing was asynchronous, the returned data it may not be the last inserted value, unless `SinceTx` was specified with a value bigger than the current transaction.
  immudb now defaults to a more intuitive behavior, where operations will wait until indexing is completed and return the last transaction. If speed has priority, the flag `NoWait=true` will operate on the current state of the index.
* immudb now performs index compaction asynchronously, without blocking insertions.

For a full changelog, visit the [release page in Github](https://github.com/codenotary/immudb/releases/tag/v0.9.2).

# Downloads

* [0.9.2 Docker image](https://hub.docker.com/r/codenotary/immudb)
* [v0.9.2 binaries](https://github.com/codenotary/immudb/releases/tag/v0.9.2)

# Learn more

immudb is a key-value database with built-in cryptographic proof and verification. It can track changes in sensitive data and the integrity of the history will be protected by the clients, without the need to trust the server.

To learn more about immudb, visit the [project](https://github.com/codenotary/immudb).
To learn interactively and get started with immudb from the command line and programming languages, visit the [immudb Playground](https://play.codenotary.com).
