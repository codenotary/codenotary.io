---
title: "Codenotary Inc Releases immudb v1.0"
date: "2021-05-21"
image: "/images/blog/immudb-mascot-small.png"
tags: ["immudb", "release", "1.0", "data security", "immutable"]
---

<img src="/images/blog/immudb-mascot-small.png" width="300"/>

The CodeNotary team is excited to announce the release of version 1.0 of its immutable database immudb, now with support for SQL and the new TimeTravel(™) feature. 

immudb is the first database to provide tamper-evident data management, immutable history and client-cryptographic proof. Every change is preserved and can't be changed without clients noticing. Clients do not need to trust the server and every new client adds trust to the deployment. Licensed under the Apache 2.0 license, immudb is open source and free for all to use. 

Prior to release v1.0,  immudb already offered a high speed  key-value database paradigm, which is extremely popular and used in hundreds of different projects, both of proprietary and open source nature. This new version being released today  introduces the first open-source immutable SQL database that extends the already known highly-secure client verification technology to SQL queries. 

This leap forward enables businesses to take advantage of the tamper-proof capabilities while modeling their data as they were used to without changing application logic. 

Not happy with the major new feature of SQL support, the team at Codenotary went and overdid itself and also announced TimeTravel(™).  This new functionality allows travel back in time through the data change history, and even compares these values in the same query! Of course, all results are client-verifiable and returned tamper-evident. That enables insights into data never seen before, while enabling users to continue to use the well-known SQL language.

Also in today’s release of immudb v1.0, we are announcing the availability of the Postgres wire protocol compatibility with immudb. Any application using the Postgres pgsql protocol is automatically compatible with immudb as today, and allows users to get tamper-evident cryptographic verification without changing your app! 

One more thing, however. Listening to the needs of our amazing user base, we worked hard, to embed a web console that allows for easy monitoring, basic administrative tasks and SQL based data query, all from the comfort of your browser. 

## Major new features:

* Relational (SQL) Support
  immudb can be used both as a key-value store and as a [relational database (SQL)](https://docs.immudb.io/1.0.0/quickstart.html#sql-operations-with-immuclient), making it the first immutable database with relational capabilities. immudb also expands tampering verification capabilities to rows.
* TimeTravel(™)
  immudb is the first database which allows you to do [queries across time](https://docs.immudb.io/1.0.0/quickstart.html#time-travel). You can pin a table into a point in time inside a query or subquery, allowing for powerful comparisons.
* immudb Web Console
  immudb includes an [embedded web console](https://docs.immudb.io/1.0.0/getstarted/webconsole.html#accessing-the-web-console) with administration and query capabilities. Create users, manage databases, and query relational data with no additional downloads or tools.
  ![immudb webconsole](/images/immudb/immudb-webconsole-release.png)

* PostgreSQL wire protocol Compatibility
  immudb SQL features can be used with libraries compatible with the pgsql protocol. This means popular database access frameworks already available in Ruby, C, Java JDBC, PHP, etc., [can be used to perform operations on immudb](https://docs.immudb.io/1.0.0/develop/pg.html).

Downloads for all major platforms are [available on Github](https://github.com/codenotary/immudb/releases/tag/v1.0.0). Documentation and a getting started guide are [available on the immudb.io website](https://docs.immudb.io/master/).

## Contact Us

For any question contact us on [Discord](https://discord.com/invite/ThSJxNEHhZ).

Codenotary Inc.<br>
6750 West Loop South, Suite 845<br>
Bellaire, TX 77401, United States<br>

