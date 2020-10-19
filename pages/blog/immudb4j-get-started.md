---
title: "First steps to use Java SDK for immudb — the open source immutable database"
date: "2020-08-20"
image: "/images/blog/java-640x360.jpg"
tags: ["SDK", "Java"]

---

**immudb** is **lightweight, high-speed immutable database** for systems and applications. immudb is open source under the [Apache v2.0 License](https://github.com/codenotary/immudb/blob/master/LICENSE).

With [immudb](https://github.com/codenotary/immudb) you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a tamperproof database. immudb makes sure that not just the latest data, but the complete history of, say, your debit/credit transactions is stored unchangeable.

## Setup immudb

If you haven't setup immudb yet, this is the time to do so. You only need to start immudb either as a process, a service or a docker container.

It's up to you if you want to build the Docker /images/blog yourself based on the Dockerfiles in the GitHub repository or use the prebuild ones on Dockerhub.

immudb is using the following defaults:

- Auth user: immudb
- Auth password: immudb
- Service Port: 3322 (immudb)
- Metrics Port: 9497 (Prometheus exporter)

### immudb **Dockerhub**

docker run -it -d -p 3322:3322 -p 9497:9497 — name immudb codenotary/immudb:latest

### standalone Binaries

Each release provides all binaries for different operating systems. you can find these here: [immudb releases](https://github.com/codenotary/immudb/releases)

If you want to build the \*\*binaries \*\*yourself, simply [clone this repo](https://github.com/codenotary/immudb) and run one of the following commands based on your operating system.

```shell
# Linux
GOOS=linux GOARCH=amd64 make immudb-static
# macOS
GOOS=darwin GOARCH=amd64 make immudb-static
# Microsoft Windows
GOOS=windows GOARCH=amd64 make immudb-static
```

Then you can run immudb

```shell
# run immudb in the foreground 
./immudb
# run immudb in the background 
./immudb -d
```

### install immudb as a service

```shell
# install immudb service 
./immudb service install
\# check current immudb service status 
./immudb service status
\# stop immudb service 
./immudb service stop
\# start immudb service 
./immudb service start
```

## Where to find the official Java SDK for immudb

The always up2date Java SDK for immudb can be find as [immudb4j on Github](https://github.com/codenotary/immudb4j)

## immudb4j Introduction

immudb4j implements a [grpc](https://grpc.io/) immudb client. A minimalist API is exposed for applications while cryptographic verifications and state update protocol implementation are fully implemented by this client. Latest validated immudb state may be keep in the local filesystem when using default `FileRootHolder`, please read [immudb research paper](https://immudb.io/) for details of how immutability is ensured by [immudb](https://immudb.io/).

## Installation

Just include immudb4j as a dependency in your project:

if using `Maven`:
```xml
    <dependency>
        <groupId>io.codenotary</groupId>
        <artifactId>immudb4j</artifactId>
        <version>0.1.8</version>
    </dependency> 
```

if using `Gradle`:
```groovy
    compile 'io.codenotary:immudb4j:0.1.8'
```

immudb4j hosted on [Maven Central].

[Maven Central]: https://search.maven.org/artifact/io.codenotary/immudb4j

## Supported Versions

immudb4j supports the [latest immudb release](https://github.com/codenotary/immudb/releases/tag/v0.7.1).

## Quickstart

[Hello Immutable World!](https://github.com/codenotary/immudb-client-examples/tree/master/java) example can be found in `immudb-client-examples` repo.

Follow its `README` to build and run it.

## Step by step guide

### Creating a Client

The following code snippets shows how to create a client.

Using default configuration:

    ImmuClient immuClient = ImmuClient.newBuilder().build();

Setting `immudb` url and port:

    ImmuClient immuClient = ImmuClient.newBuilder()
                                .setServerUrl("localhost")
                                .setServerPort(3322)
                                .build();

Customizing the `Root Holder`:

    FileRootHolder rootHolder = FileRootHolder.newBuilder()
                                    .setRootsFolder("./my_immuapp_roots")
                                    .build();

    ImmuClient immuClient = ImmuClient.newBuilder()
                                      .withRootHolder(rootHolder)
                                      .build();

### User sessions

Use `login` and `logout` methods to initiate and terminate user sessions:

    immuClient.login("usr1", "pwd1");

    // Interact with immudb using logged user

    immuClient.logout();

### Creating a database

Creating a new database is quite simple:

    immuClient.createDatabase("db1");

### Setting the active database

Specify the active database with:

    immuClient.useDatabase("db1");

### Traditional read and write

immudb provides read and write operations that behave as a traditional key-value store i.e. no cryptographic verification is done. This operation may be used when validations can be postponed:

    client.set("k123", new byte[]{1, 2, 3});
    
    byte[] v = client.get("k123");

### Verified or Safe read and write

immudb provides built-in cryptographic verification for any entry. The client implements the mathematical validations while the application uses as a traditional read or write operation:

    try {
        client.safeSet("k123", new byte[]{1, 2, 3});
    
        byte[] v \= client.safeGet("k123");

    } (catch VerificationException e) {

        //TODO: tampering detected!

    }

### Closing the client

To programmatically close the connection with immudb server use the `shutdown` operation:

    immuClient.shutdown();

Note: after shutdown, a new client needs to be created to establish a new connection.

There are easier options for non-developers (like immuclient) and also SDK driver for .net, Java, Node.js, Python available.
