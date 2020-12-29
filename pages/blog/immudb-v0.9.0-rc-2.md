---
title: "immudb v0.9.0 Release Candidate 2!"
date: "2020-12-29"
image: "/images/blog/immudb-mascot-small.png"
tags: ["release", "0.9", "release-candidate", "immutable"]
---

v0.9.0 Release Candidate 2 is out. The next release candidate of immudb 0.9.0 that integrates our new embeddable cryptographic-proof storage engine is available.

![immudb v0.9.0 Release Candidate 2](/images/blog/immudb-mascot-small.png)

**7 times** faster data writes than the former version 0.8.0 and instant cryptographic proof!

Here are the changes since Release Candidate 1:

# Changelog

### Bug Fixes
- **cmd/immuadmin/command:** fix unit tests
- **cmd/immuclient:** fix unit tests
- **embedded/tbtree:** sync GetTs to prevent data races
- **pkg/api:** change order of validations when checking state signature

### Changes
- adapt coverage to the new server implementation
- fix immuserver mock
- **cmd/immuadmin:** disable stats and removed print tree command
- **cmd/immuclient:** print verified label when executing safereference
- **pkg/client:** update service mock to new API
- **pkg/database:** add input validations during verifiable set
- **pkg/database:** implements History using lock-based operation

### Code Refactoring
- uniform server and client tests
- improving buffconn server with splitting start method in initialization and start

### Features
- **embedded/store:** implements lock-based History without requiring snapshot creation
- **pkg/client:** update auditor implementation to new server API
- **pkg/client:** implementation of client-side verifiedZAdd
- **pkg/client:** implements VerifiedSetReference
- **pkg/database:** implementation of verifiableZAdd
- **pkg/database:** implementation of VerifiableSetReference

Release Source:
https://github.com/codenotary/immudb/tree/v0.9.0-RC2

# Downloads

**Docker image**
https://hub.docker.com/r/codenotary/immudb

**Immudb Binaries**

File | SHA256
------------- | -------------
[immudb-v0.9.0-RC2-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immudb-v0.9.0-RC2-darwin-amd64) | c16f1a762c7460fe66df2490a5ac5f1e4eb662584b63334eddf78e90fe4147b4 
[immudb-v0.9.0-RC2-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immudb-v0.9.0-RC2-linux-amd64) | 45fc2fe6407d63f35dfa7a7d9b864acb9b0fe81e3ca684b20f50be1809830e06 
[immudb-v0.9.0-RC2-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immudb-v0.9.0-RC2-linux-amd64-static) | 2f5b895d1ca745ec1ff57bb238ba9420891f1c1201c29b8efef1e203d86623ab 
[immudb-v0.9.0-RC2-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immudb-v0.9.0-RC2-linux-s390x) | c2c78756fc701627e46735a2fc7c5c1afbc99e5a26e7b9a60e763ec7115ea422 
[immudb-v0.9.0-RC2-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immudb-v0.9.0-RC2-windows-amd64.exe) | 26ab5c6d267e9f71d79b3ea2633cfa103084e56d2f5da1987e3dca417f8564e7


**Immuclient Binaries**

File | SHA256
------------- | -------------
[immuclient-v0.9.0-RC2-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuclient-v0.9.0-RC2-darwin-amd64) | 473050e446741a6147ef365192f3599a70e8b4d176e9068be5c6d5895f086110 
[immuclient-v0.9.0-RC2-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuclient-v0.9.0-RC2-linux-amd64) | 2d0c18ef6f827ffe0bb28350618f890260997334dc3fba50040af9fdd14f0375 
[immuclient-v0.9.0-RC2-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuclient-v0.9.0-RC2-linux-amd64-static) | 504365eeb2cec1349f56fe9a64ba4c0bb052a7eaf3574d488fbfb9c0708846bc 
[immuclient-v0.9.0-RC2-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuclient-v0.9.0-RC2-linux-s390x) | 2832f468cf951adf030401f436338b067f8c4d6dab043d4cf7e850d2e74e7b19 
[immuclient-v0.9.0-RC2-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuclient-v0.9.0-RC2-windows-amd64.exe) | 11c3611410ada6b823759b3fe1ff71e3318901d5d9d903606a62ec5357bf8616 

**Immuadmin Binaries**

File | SHA256
------------- | -------------
[immuadmin-v0.9.0-RC2-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuadmin-v0.9.0-RC2-darwin-amd64) | 51302ba08a291a384a0b966cd7bcc6dbb29f94546888e105db0771ec1d19389c 
[immuadmin-v0.9.0-RC2-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuadmin-v0.9.0-RC2-linux-amd64) | 223248531930710721933df915821b230bfd1de0f25ff32a3dfbb3259b782095 
[immuadmin-v0.9.0-RC2-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuadmin-v0.9.0-RC2-linux-amd64-static) | 3fb1a05ad1a73e46fa9804ffa541e3d93f8f6beaff485fdb1a7bf3dd53fe1b3a 
[immuadmin-v0.9.0-RC2-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuadmin-v0.9.0-RC2-linux-s390x) | 0332f5fc773eb93478facf02641dbfcbf51f0a5a73146288d42fa6f77b7e1d3a 
[immuadmin-v0.9.0-RC2-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0-RC2/immuadmin-v0.9.0-RC2-windows-amd64.exe) | fac79bad8285e0167a06c2a7a5ae8e5e8543ddd431d75a67179fe2cc1b6cd658
