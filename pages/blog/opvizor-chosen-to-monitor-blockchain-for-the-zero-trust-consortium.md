---
title: "Opvizor chosen to monitor Blockchain for the Zero Trust Consortium"
image: /images/blog/ztc-2.png
tags: ["Ops", "opvizor"]
date: "2019-02-12"
---

Opvizor is a proud founding member of the [Zero Trust Consortium](https://www.zerotrustconsortium.org) and provides the monitoring capabilities for the ZTC operations team. That's an important decision as its extremely vital to monitor blockchain configuration and runtime.

Performance Analyzer is used to monitor and analyze the following components provided by ZTC:

1. full monitoring of all member nodes (that run the distributed Blockchain)
2. full monitoring of the container and applications (incl. configuration, metrics and logfiles) of the ZTC mainnet
3. monitoring and alerting of the backend (blockchain itself and the consensus)

That package allows the ZTC operations team to stay on top of the consortium blockchain, inform members if issues occur on their nodes or the blockchain stability or consensus is in danger.

Performance Analyzer has been enhanced and customized to enable [Parity Ethereum](https://www.parity.io/) performance and functional monitoring additionally to the already built-in Linux, Windows and Docker monitoring. 

Before we dig into details here comes a quick introduction what the Zero Trust Consortium does.

# About the Zero Trust Consortium (ZTC)

The Zero Trust Consortium is an independent, community-led membership group whose purpose is to support the usage of a fast permissioned blockchain, free of per transaction fees, for software vendors, by the software vendors. We guarantee that no one member has consensus control and therefore operate a truly distributed blockchain.

The Zero Trust Consortium was founded through seed support from vChain Inc, Chainstack Inc, Acronis AG, and others.

The founders realized that existing blockchains are too expensive (on a per transaction fee basis) and too slow to allow software vendors to create zero trust solutions which are based on such public blockchains. At the same time, having a distributed, uncontrolled, fast (i.e. near real-time) and free permissioned blockchain has the potential to disrupt today’s incumbent software solutions with new approaches where the customers and users do not require to extend trust based on certificates, public/private keys schemes or reputation only.

The Zero Trust Consortium serves as the host and center of administrative and user support for the Zero Trust Permissioned Blockchain environment. This includes the open-source software developed as part of the Zero Trust project and, when appropriate and feasible, software developed by (1) additional follow-on research and development projects, and (2) members of the Zero Trust user community.

Opvizor Performance Analyzer has been chosen to monitor blockchain performance and other vital metrics for the ZTC. 

[![ZTC](/images/blog/ztc-2.png)](https://www.zerotrustconsortium.org)

## Parity Ethereum blockchain using Aura

ZTC chose Parity Ethereum to provide a consortium blockchain, that is permissioned, but public. Public visibility is important, so every user worldwide can doublecheck if the information stored on the consortium blockchain are valid. Aura (Authority Round) has been chosen as the consensus algorithm of the ZTC Parity Ethereum implementation. You can read more about Aura here: [https://wiki.parity.io/Aura](https://wiki.parity.io/Aura)

There are a couple of critical configs, metrics and log entries that need to be monitored consistently.

### Let's start with the Node Monitoring

- exact time: all nodes need to run at the exact same time, 1-3 seconds difference are not good but ok, over 5 seconds is critical and can lead to the exclusion of the node. The time drift needs to be monitored.
- always on: blockchain nodes uptime is critical, not for a single node but if many nodes fail (consensus can be in danger)
- disk space: the blockchain nodes should not run out of space as they store and sync the blockchain data
- memory utilization: the blockchain nodes should not run out of memory and start swapping
- network latency: as the blockchain nodes are in constant sync with each other, its extremely important that all nodes have a stable and fast internet connection.
- Port reachability from the internet: the Ethereum clients run a listener (default: TCP 30303) and a discovery (default UDP 30303) port. The port can differ between setups but the availability from the outside needs to be checked

![monitor blockchain nodes](/images/blog/Highlights2.png)

### The Container Monitoring

ZTC delivers the Parity Ethereum node package as a docker-compose setup that runs 4 container:

1. Parity Ethereum blockchain node
2. Telegraf metric collector
3. Filebeat log collector
4. Parity Ethereum Healthcheck app

These four container need to be checked for the normal uptime and performance metrics, but the Parity Ethereum container needs more checks.

- watch the parity container image version
- watch the amount of containers running next to the Parity setup
- monitor file changes of the Parity blockchain configuration
- monitor file changes of the keypairs (node identity)
- check for specific log entries like benign behavior, that points to sync issues of the nodes
- check the last block number mined/synced, to notice node sync issues
- check the number of peers, to notice node sync issues (i. e. time drift, downtimes or hard forks

![Docker Host and container monitoring](/images/blog/docker.png)

### Monitoring the Parity Ethereum Blockchain

So far we only monitored the vital metrics of the individual node, but not the blockchain as a whole. The importance here is, that you need a connection to the blockchain itself using RPC-JSON (default is 8545) to collect all important information. That RPC-JSON Port can be used to do malicious attacks on a blockchain and there are plenty of bots out there just scanning for that port to attack it. 

Good news, you only need to expose the RPC-JSON port to trusted parties.

We decided to run a replica node (no miner, no write permission) that exposes port 8545 to companion container on the same host, but not the public, to monitor blockchain performance and important metrics. The companion container connects to the Parity Ethereum blockchain, gathers important metrics and exposes them via Prometheus client. That data is scraped every 5 seconds by our Prometheus server.

Metrics scraped:

- Current block number
- Sync progress
- Transactions/sec 
- Latest block mined by what node
- Gas price (0 in the ZTC case, as no cryptocurrency is used)
- Parity nodes (peers seen by replica node)
- Transactions in mempool
- Mempool size
- Latest Block transactions
- Pending Block transactions
- Latest Block number across all nodes

Example Screenshot of the testnet

![Parity Ethereum Performance - to monitor blockchain](/images/blog/parity2.png)

### Monitoring the log files

Currently we have an ELK stack up and running to analyze the log files and content, but you can expect our own Log Analyzer within the next 3-4 months, that will share the Grafana Dashboard engine with Performance Analyzer. As we know that many of our customers are really looking forward to have the log file analysis combined with performance metrics, be assured, that we put a lot of effort into that upcoming version. 

As ZTC required a solution before our log analyzer product is ready, we decided to setup an ELK stack and query elasticsearch (filebeat) results into Performance Analyzer dashboards.

![ELK elasticsearch Grafana](/images/blog/logallgood.png)

No entries within the 4 boxes means all good. In our test we checked of course if its getting triggered, when something bad happens - and it did.

![Log Alerts triggered](/images/blog/logalerts2.png)

It can be very cumbersome to look for the needle in a haystack, therefore the ZTC operations team was quite happy to see, that all can be queried and build into Performance Analyzer. The [ELK stack](https://www.elastic.co/elk-stack) and [filebeat](https://www.elastic.co/products/beats/filebeat) is only being used to collect, store and query the data.

## Summary

No matter what blockchain technology you chose to run private or consortium blockchains, it its very important to monitor blockchain configuration, performance and potential traps or errors. Performance Analyzer is the perfect solution to monitor blockchains of any kind. Parity Ethereum, Sawtooth and others can be integrated including the nodes operating system or container management that have been chosen.
