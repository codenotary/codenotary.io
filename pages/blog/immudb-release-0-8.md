---
title: "immudb release v0.8.0!"
date: "2020-09-15"
image: "/images/blog/immudb-mascot-small.png"
---

Release v0.8.0 - atomic multi-key operations, cryptographic root signing and new SDKs

The release sets the basis to support complex use cases with an enhanced security model:

- Atomic multi-key insertion: all entries are applied or none. Built-in atomicity provides the support needed to deal with multiple entities or complex entities mapped into several keys.
- Cryptographic root signing: this feature is now incorporated into the state update protocol to guarantee any single client or auditor is able to irrefutable demonstrate any tampering. 
- Updated Java SDK [immudb4j](https://github.com/codenotary/immudb4j) with step-by-step guides and running samples
- All new SDKs for Python [immudb-py](https://github.com/codenotary/immudb-py), Node.js [immudb-node](https://github.com/codenotary/immudb-node), .net [immudb4dotnet](https://github.com/codenotary/immudb4dotnet)

Thanks again to the community for great feedback, real-life testing and confirming our performance tests.

# Changelog

<a name="v0.8.0"></a>
## [v0.8.0] - 2020-09-15
### Bug Fixes
- fix immudb and immugw version and mangen commands errors Without this change, while immuclient and immuadmin still worked as expected, immudb and immugw version and mangen commands were throwing the following error: ./immugw version Error: flag accessed but not defined: config Usage:   immugw version [flags]
- fix immuclient audit-mode
- **cmd/immuadmin/command:** fix immuadmin dbswitch
- **pkg/client:** setBatch creates structured values
- **pkg/client:** token service manages old token format

### Changes
- update README file ([#487](https://github.com/vchain-us/immudb/issues/487))
- switching README.md end lines to LF
- fix immugw dependency to support new root structure
- update readme, add immudb4j news ([#488](https://github.com/vchain-us/immudb/issues/488))
- **cmd:** add signingKey flag
- **cmd:** remove error suppression in config loader
- **cmd/immutest/command:** remove immugw dependency from immutest
- **pkg:** add kvlist validator ([#498](https://github.com/vchain-us/immudb/issues/498))
- **pkg/server:** log uuid set and get error
- **pkg/server:** log signer initialization in immudb start

### Code Refactoring
- wrap root hash and index in a new structure to support signature
- move immugw in a separate repository
- configs file are loaded in viper preRun method
- **pkg/server:** inject root signer service inside immudb server

### Features
- auditor verifies root signature
- **cmd:** process launcher check if are present another istances. fixes [#168](https://github.com/vchain-us/immudb/issues/168)
- **pkg:** add root signer service
- **pkg/signer:** add ecdsa signer

# Downloads

**Docker image**
https://hub.docker.com/r/codenotary/immudb

**Immudb Binaries**

File | SHA256
------------- | -------------
[immudb-v0.8.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-darwin-amd64) | 4a1e251237f8b51f22015d4e657d7ee5065da6cf8c0c44b6de2c6daf63cce9d2
[immudb-v0.8.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-linux-amd64) | 4d7639117fcd68949c0a12b0430112d066c1299ef22a409b2fb6e4065bb289b7
[immudb-v0.8.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-linux-amd64-static) | c72a6449d670be24d6233fe80e5e262925d1ebacc887269309f0fe4f34a616d4
[immudb-v0.8.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-linux-s390x) | 9b1b795f7127a20ce94c1aeaf444ef8b6e5438fd623854cb18b6447c77b40c57
[immudb-v0.8.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immudb-v0.8.0-windows-amd64.exe) | 74d2000fe3ceea9b78dda45304e4b18070c51218f1d0e593335d67ac3a28d249


**Immuclient Binaries**

File | SHA256
------------- | -------------
[immuclient-v0.8.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuclient-v0.8.0-darwin-amd64) | ba54d3c2fcca4ac12ca4f26e9e6b84e40f5ecd727e2c9a09018495b724faa28a 
[immuclient-v0.8.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuclient-v0.8.0-linux-amd64) | 0cdd0ec9fe85c411745f37c668c3ccbbeb56dcaa0064cb972f46f2159861950f 
[immuclient-v0.8.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuclient-v0.8.0-linux-amd64-static) | b5fe457535b988077d20ff9bf8ae0df00bcd2b6ec74f3ebffbb79c0165493b16 
[immuclient-v0.8.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuclient-v0.8.0-linux-s390x) | bd6f0e724154c208f5e84e44381b77c17baec6892baa7729ddb889b26715e878 
[immuclient-v0.8.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuclient-v0.8.0-windows-amd64.exe) | 1a0346d19bfc17f4c117d0e763a5a38a886c420a89149c8749e077e3319c9aeb 

**Immuadmin Binaries**

File | SHA256
------------- | -------------
[immuadmin-v0.8.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuadmin-v0.8.0-darwin-amd64) | e85c9a5c7b2394383bcefd73a392a9ae6b4c96868adcb57715a0e76775b0cc37 
[immuadmin-v0.8.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuadmin-v0.8.0-linux-amd64) | dac4af24f9c3fce9cd9da755c9abf45a37a2ebde5d732a5599f84eb8d0f1c183 
[immuadmin-v0.8.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuadmin-v0.8.0-linux-amd64-static) | 443803e46aedba428c21108e567a9481ff7e6b269d6d1b0037f59c507326a53e 
[immuadmin-v0.8.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuadmin-v0.8.0-linux-s390x) | 1f713d269986a67abcb9aa74b4f310f467de026faac17976af5450f1dec2b7de 
[immuadmin-v0.8.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.8.0/immuadmin-v0.8.0-windows-amd64.exe) | dd2f32c2b490156814a826e8f3c90ff0290a793427af0f2cbee5b8745f71f162 

```
