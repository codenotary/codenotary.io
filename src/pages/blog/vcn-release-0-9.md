---
title: "vcn release v0.9.0!"
date: "2020-12-15"
image: "/images/blog/codenotary_mascot_final-oicljfj7ltjgxnmn3023a3ip293np0m2c1rvwo1yu2.png"
tags: ["release", "0.9", "vcn", "trust"]
---

Release v0.9.0 - parallel notarizations, wildcard support, Ledger Compliance support

We're more than happy to announce the v0.9.0 release of vcn. The latest news around the [Solarwinds hack](https://krebsonsecurity.com/2020/12/u-s-treasury-commerce-depts-hacked-through-solarwinds-compromise/) and the addition of malicious code to software updates (incl. valid code signing) shows again the importance of solid alternatives to digital signatures.

This release adds:

- parallel notarizations for the same account
- wildcard support for files and directories
- timestamp is always returned when authenticating
- support for CodeNotary Ledger Compliance, the high-speed immutable ledger that runs in any cloud or on-premise.


Thanks again to the community for great feedback!

# Changelog

<a name="v0.9.0"></a>
## [v0.9.0] - 2020-12-08
### Bug Fixes
- restore verification with the highest level available when not logged
- fix integration tests and add circleci job for go 1.15
- fix dist release go1.15.6
- fix ledger-compliance-go dependency
- **pkg/api:** swap signerID position with the hash in the vcn lc key format
- **pkg/api:** fix artifact status json unmarshall
- **pkg/cmd:** don't track untrusted verification
- **pkg/cmd/inspect:** fix inspect ux, examples and errors
- **pkg/cmd/verify:** fix empty signerid handling
- **pkg/meta:** add apikey env var

### Changes
- bump sdk version, remove useless package
- bump lc sdk version
- add swagger.json
- bumb version of go-ethereum and smart contracts
- fix inspect full history message
- upgrade go version to 1.15 and sdk
- remove all whitespaces from otp
- **pkg/cmd:** show status unknown if tamper is detected
- **pkg/cmd/serve:** handle missing api key error
- **pkg/extractor:** fix typo
- **pkg/extractor/wildcard:** remove max notarization limit
- **pkg/extractor/wildcard:** improve max notarized files number with wildcard

### Code Refactoring
- change api in order to make atomic indexing of notarized items in lc
- **pkg/extractor:** handle array of artifacts instead of a single one in extractor

### Features
- vcn accepts a certificate to setup a tls connection
- if no limit or filter are submitted inspect return last 100 items
- add multiple notarizations capability with wildcard
- add wildcard extractor
- add serve LC inspect
- improve inspect result with timestamp for each element
- add verify filter by LC signerID. fix [#104](https://github.com/vchain-us/vcn/issues/104)
- add vcn LC login. fix [#103](https://github.com/vchain-us/vcn/issues/103)
- partial parallel notarizations support
- add inspect for ledger compliance
- add otp_empty environment var
- add LC operations for vcn server
- add verify asset on ledger compliance
- add ledger compliance authentication and notarization
- Add otp support. close [#87](https://github.com/vchain-us/vcn/issues/87) close [#88](https://github.com/vchain-us/vcn/issues/88)
- **pkg/cmd:** add inspect api
- **pkg/cmd/inspect:** improve inspect in lc
- **pkg/cmd/verify:** manage verify by hash in lc mode

# Downloads

**Docker image**
https://hub.docker.com/r/codenotary/vcn

**Binaries**

File | SHA256
------------- | -------------
[codenotary_vcn_v0.9.0_setup.exe](https://github.com/vchain-us/vcn/releases/download/v0.9.0/codenotary_vcn_v0.9.0_setup.exe) | 638efd932aabc5770723eb844329983d64d8a2260976a6f9750a73003f8a34d5 
[vcn-v0.9.0-darwin-amd64](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-darwin-amd64) | b34ea15a46565f3d5a88a12835c9ae8d56cc4999a1b99083f6783cffc5cf934b 
[vcn-v0.9.0-linux-amd64](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-linux-amd64) | 90b07343c44980e8dbad1d59c2a7a2b9266ac94b31a5c5ad42abe47d0f9de3b6 
[vcn-v0.9.0-linux-amd64-static](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-linux-amd64-static) | cd7acd10d271aab4c97bdd22ce3627f2030c10859fd1f1e82bbe49d8f1c2c140 
[vcn-v0.9.0-linux-arm64](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-linux-arm64) | 7d9cd1292ac7756879cad902fad8510263746b5c32d5e2471bff540ad8c79a05 
[vcn-v0.9.0-linux-ppc64le](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-linux-ppc64le) | 14d2f04625d2b37300713449bda80d107367ad664dbc8f074a59363985f4203c 
[vcn-v0.9.0-linux-s390x](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-linux-s390x) | 8f7402ad58f8a03391992cd01806a839e1ec66007457970a8b7ca03064e5944e 
[vcn-v0.9.0-windows-amd64.exe](https://github.com/vchain-us/vcn/releases/download/v0.9.0/vcn-v0.9.0-windows-amd64.exe) | efe63be40f7cfb688ebb4ce477bcc07d9641e6772d6ebea22133d233e9cbb6f1
