---
title: "immudb v0.9.0 officially released!"
date: "2021-01-07"
image: "/images/blog/immudb-mascot-small.png"
tags: ["release", "0.9", "data security", "immutable"]
---

Happy New Year to everyone!

![immudb v0.9.0](/images/blog/immudb-mascot-small.png)

immudb v0.9.0 has officially been released! Thanks to the community to support us testing our release candidates, sending in valuable feedback and some bug reports. Everything has been implemented and fixed and 2021 starts with immudb 0.9!

Our new embeddable cryptographic-proof storage engine has been thoroughly tested and has shown nice and impressive performance improvements.
Not only it's **7 times** faster than v0.8.0 in writing data, it also shines with instant cryptographic proof! Local tests (AWS c5d instances) have shown close to 10 million entries being written in 1 second.

* key-value database
* immutable history
* built-in cryptographic proof 
* embeddable
* indexing
* scanning
* data-compression
* multi-threading support
* parallel I/O

Here you can find the changelog as well as the download locations:

# Changelog

<a name="v0.9.0"></a>
## [v0.9.0] - 2021-01-07
### Bug Fixes
- update metrics and fix stats command
- **cmd/immuadmin/command:** fix immuadmin stats ([#592](https://github.com/vchain-us/immudb/issues/592))
- **pkg/database:** enable scan on fresh snapshot
- **pkg/server:** shutdown handlers and metrics server are moved in start method

### Changes
- removing audit-signature and add serverSigningPubKey
- remove print tree method
- restore inmemory_cache test
- **cmd/immuadmin:** temporary disable stats functionality
- **pkg/api:** upgrade rest endpoints
- **pkg/client:** implement missing methods in immuclient mock
- **pkg/server:** temporary remove proactive corruption checker ([#595](https://github.com/vchain-us/immudb/issues/595))

### Features
- add signature verification with a submitted public key

# Downloads

**Docker image**
https://hub.docker.com/r/codenotary/immudb

**Immudb Binaries**

File | SHA256
------------- | -------------
[immudb-v0.9.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immudb-v0.9.0-darwin-amd64) | 3e809e30e295218596cfeaccbff46a6e85ced8ec61298c7a3c73eff5c885a9be 
[immudb-v0.9.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immudb-v0.9.0-linux-amd64) | 887d9ae18216252de2e3cc002ce8cbd03d01aa1663e56af1c720a15274bfabd1 
[immudb-v0.9.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immudb-v0.9.0-linux-amd64-static) | ec5de19a88bead9b7d55e87777b81885382124ca0f5f18c8321efb3816bb01f8 
[immudb-v0.9.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immudb-v0.9.0-linux-s390x) | ad65bfb6f25d34ce8576a6e2b10e77f5164248de0e9805d719326f4b3aa6ea0d 
[immudb-v0.9.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immudb-v0.9.0-windows-amd64.exe) | 48ae6028a3e5fcafcc045a461bd89541f795d20e57d0c8b7472ebecceb17c42c 


**Immuclient Binaries**

File | SHA256
------------- | -------------
[immuclient-v0.9.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuclient-v0.9.0-darwin-amd64) | f644e623050c725ccc6b15d22ff0ca5b7a8c1d67b6bdf37bb4b87c54a5a4be76 
[immuclient-v0.9.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuclient-v0.9.0-linux-amd64) | 656756ee29142149ab97d7f7055fc8656e43df6299c338197e7c8476861638f2 
[immuclient-v0.9.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuclient-v0.9.0-linux-amd64-static) | 179d09603f4cbf5bf59871d47f49f2d38fe26457acfbd9950ddb90fbe94262b0 
[immuclient-v0.9.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuclient-v0.9.0-linux-s390x) | d5731b512ec5d08ac7964e344789da995d009688369807cafde1043a9b17f624 
[immuclient-v0.9.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuclient-v0.9.0-windows-amd64.exe) | 1eafe1db5b930f3c47a4320aed0300c723acd642d52e028e74ba1826f6662dbc 

**Immuadmin Binaries**

File | SHA256
------------- | -------------
[immuadmin-v0.9.0-darwin-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuadmin-v0.9.0-darwin-amd64) | bb360463bfa2d86a22fa67e1f72161e4b1d0b2dd2ca373e358551331de01fd3d 
[immuadmin-v0.9.0-linux-amd64](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuadmin-v0.9.0-linux-amd64) | 9cfcf0fd86cec1170560c45d7a75dfd1145b740676a2aa070063e3d3301ec152 
[immuadmin-v0.9.0-linux-amd64-static](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuadmin-v0.9.0-linux-amd64-static) | eab4ad0d9bd7b306c0d22754d05e43a1baa753d5c2e3e1fcd9ed791debde3437 
[immuadmin-v0.9.0-linux-s390x](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuadmin-v0.9.0-linux-s390x) | ad409d6b36c890d3173cabf9e7846ef93d65c031ceb068f39173314fceec77ad 
[immuadmin-v0.9.0-windows-amd64.exe](https://github.com/vchain-us/immudb/releases/download/v0.9.0/immuadmin-v0.9.0-windows-amd64.exe) | 9ff4361bb92789f2b1df18716be4141cbc5fe8272f3e44480b497551a0bada05 
