       immudb: the world's fastest immutable database 🥇
```


```
➡️     a quick intro...

```
                                                                                            





```
```
    Don't forget to ⭐ this repo if you like immudb!
```
```



```


[      5M pulls from docker hub!](https://hub.docker.com/r/codenotary)

---


 immudb is a database with built-in cryptographic inclusion proof and verification

* immudb tracks changes of your data 

* the integrity of the history is protected by clients
* the client does not need to trust the server

* immudb operates as a key-value store or as relational database (SQL).
```

```
➡️   As such immudb is a tamper-evident database with built-in crypto verification

---

* Traditional database transactions and logs are hard to scale and are mutable
* there is no way to know for sure if your data has been compromised.
* immudb is immutable, ie. you can add new versions of existing records

☝🏼  but never change or delete record☝🏼
```

```

➡️   this lets you store critical data without fear of it being changed silently.


---

Is it a blockchain or a database?

* Data stored in immudb is cryptographically coherent and verifiable, just like blockchains
* but without all the complexity
* Unlike blockchains, immudb can handle millions of transactions per second
* immudb can be used both as a lightweight service or embedded in your application as a library.
* immudb runs everywhere, on an IoT device,  on-premises or cloud-based.

```

```
➡️   immudb is already used by hundreds of projects to store data in a tamper-proof way 

---
Typical use cases


* secure and tamper-evident log data
* sensor data
* business transactionsi
* software build recipes
* rule-base data
* credit card transaction ledgers
* Storing last known positions of submarines
* etc. etc. 

```

```
[integrating immudb into your application is easy and fast](!)
---

You can learn to use immudb in minutes 🌴

Use the built-in webconsole to get a fast start to immutable data now:

  [online demo environment](https://demo.immudb.io) 



username: immudb 
password: immudb

```

```

---

Some immudb specs

```
| Topic                   | Description                                        |
| ----------------------- | -------------------------------------------------- |
| DB Model                | Key-Value store with 3D access and/or SQL          |
| Data scheme             | schema-free                                        |
| Implementation design   | Cryptographic commit log with parallel Merkle Tree,| 
|                         | (sync/async) indexing with extended B-tree         |
| Implementation language | Go                                                 |
| Server OS(s)            | BSD, Linux, OS X, Solaris, Windows,z/OS            |
| Embeddable              | Yes, optionally                                    |
| Server APIs             | gRPC                                               |
| Partition methods       | Sharding                                           |
| Consistency concepts    | Immediate Consistency                              |
| Transaction concepts    | ACID with Snapshot Isolation (SSI)                 |
| Durability              | Yes                                                |
| Snapshots               | Yes                                                |
| High Read throughput    | Yes                                                |
| High Write throughput   | Yes                                                |
| Optimized for SSD       | Yes                                                |

```

---

Getting immudb running

Download the immudb binary from:
 [the latest releases on Github](https://github.com/codenotary/immudb/releases/latest) 

After downloding, rename it to `immudb`, make sure to mark it as executable, then run it.

 The following example shows how to obtain v1.0.0 for linux amd64:

```bash
wget https://github.com/vchain-us/immudb/releases/download/v1.0.0/immudb-v1.0.0-linux-amd64
mv immudb-v1.0.0-linux-amd64 immudb
chmod +x immudb

# run immudb in the foreground to see all output
./immudb

# or run immudb in the background
./immudb -d
```

Alternatively, you may use Docker to run immudb in a ready-to-use container:

```bash
docker run -d --net host -it --rm --name immudb codenotary/immudb:latest
```

If you are running the Docker image without host networking, make sure to expose ports 3322 and 9497.

---

Connecting with immuclient

You may download the immuclient binary from:
 [the latest releases on Github](https://github.com/codenotary/immudb/releases/latest) 

Once you have downloaded immuclient, rename it to `immuclient`, make sure to mark it as executable, then run it. 

The following example shows how to obtain v1.0.0 for linux amd64:

```bash
wget https://github.com/vchain-us/immudb/releases/download/v1.0.0/immuclient-v1.0.0-linux-amd64
mv immuclient-v1.0.0-linux-amd64 immuclient
chmod +x immuclient

# start the interactive shell
./immuclient

# or use commands directly
./immuclient help
```

---

Or use docker 💁🏽


Alternatively, you may use Docker to run immuclient in a ready-to-use container:

```bash
docker run -it --rm --net host --name immuclient codenotary/immuclient:latest
```

---

Tons of SDKs! 👏🏻


We have SDKs available for the following programming languages:

1. Java [immudb4j](https://github.com/codenotary/immudb4j)
2. Golang (`client` package in the immudb repo)
3. .net [immudb4dotnet](https://github.com/codenotary/immudb4dotnet)
4. Python [immudb-py](https://github.com/codenotary/immudb-py)
5. Node.js [immudb-node](https://github.com/codenotary/immudb-node)

To get started with development, read this quickstart:
[quickstart in our documentation](https://docs.immudb.io/master/jumpstart.html)

 or pick a basic running sample from:
 [immudb-client-examples](https://github.com/codenotary/immudb-client-examples).

--- 

We have a playground! 🎮

Visit our playground to learn more about immudb without having to install anything!

[immudb Playground](https://play.codenotary.com) 

---


Is it fast?

immudb can handle millions of writes per second 🛩️

Here wwe measuree inserting 1M entries on a 4-core E3-1275v6 CPU and SSD disk:


| Entries | Workers | Batch | Batches | time (s) | Entries/s |
| ------ | ------ | ------ | ------ | ------ | ------ |
| 1M | 20 | 1000 | 50 | 1.061 |   1.2M /s |
| 1M  | 50  | 1000 |  20 | 0.543  | 1.8M /s |
| 1M |  100 | 1000 |  10 | 0.615 |  1.6M /s |

[It's also extremely reliable. Some immudb users run billions of transactions every month !](!)

---

Contributing

We welcome [contributions](CONTRIBUTING.md). Feel free to join the team!


immudb is [Apache v2.0 License](LICENSE).


```                                                                     
Don't forget to ⭐ this repo if you like immudb!                        
```      
