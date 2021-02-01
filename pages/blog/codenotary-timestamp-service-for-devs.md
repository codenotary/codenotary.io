---
title: "CodeNotary free trusted timestamping service for Developer"
date: "2021-01-25"
image: "/images/blog/mascot_timestamp.png"
tags: ["timestamp", "DevOps", "immudb", "Trust"]
---
# CodeNotary Trusted Timestamping Service 

Every build has a story to tell - Tamperproof provenance for your code and CI/CD pipeline

Quickstart here: https://timestamp.codenotary.com

The combination of our free, lightning-fast and always-on timestamp service and the easy to use cli tool, gets you started in a minute.

<img style="float: right;" src="/images/blog/mascot_timestamp.png" width="350">


## What means trusted timestamping
[Trusted timestamping](https://en.wikipedia.org/wiki/Trusted_timestamping) is the process of securely keeping track of the creation and modification time of a document. Security here means that no one—not even the owner of the document—should be able to change it once it has been recorded provided that the timestamper's integrity is never compromised.
CodeNotary uses its immutable open source database [immudb](https://github.com/codenotary/immudb) to provide this service that includes cryptographic verification and immutable data history.

## Use cases

This timestamping service provides full immutability for all data ever written and unique data checksum ever stored including its history. As a trust level comes with the timestamp, you can change your mind over time (unsupport, untrust) without touching the code or binary. As the complete trust and timestamping history is stored for any digital identity (SHA-256 checksum), you can easily create workflows and decision trees in your CI/CD recipes.

There are plenty of different use cases:

* Add a trusted timestamp to code
* Add an immutable timestamp to electronic signatures
* Seal the data integrity and your trust level at a given point in time
* Prove the existence of elecronic data at a specific point in time
* CI/CD integration - notarize all outgoing assets, authenticate all incoming
* Mark your applications and container that are tested and compatible
* Store provenance for you own sources
* Unsupport deprecated versions of your software and run update checks bases on the latest timestamp
* Revoke trust (untrust) at any time without the need to touch your code or binaries
* Trust or remove trust for digital assets and act on the status (within your script or pipeline)
* Simply timestamp files and sources to doublecheck at any time in the future if these are still the same (backup/restore)


**Simply request your API key and get started within a minute! This service is free forever and was built using Open Source!** 


Notarized assets informations is stored in a tamperproof ledger with cryptographic verification backed by [immudb](https://codenotary.com/technologies/immudb/), the immutable database.


### Obtain an API Key
To provide access to our timestamping service a valid API Key is required. If you don't have one yet, simply signup here [CodeNotary Timestamp](https://timestamp.codenotary.com/)
This API Key is bound to your email address and it's required during vcn login.


## Quick start

1. **Installer** In case you use Linux or macOS, the quickest start is our install script:
```bash
bash <(curl https://getvcn.codenotary.com -L)
```

You can also [download the latest release](https://github.com/vchain-us/vcn/releases/latest)

2. **Login** to [timestamp.codenotary.com](https://timestamp.codenotary.com/)
```bash
vcn login --lc-host timestamp.codenotary.com # type in your API key when requested
# or setting the API key
VCN_LC_API_KEY=<Your-API-Key vcn login --lc-host timestamp.codenotary.com
```

3. **Notarize existing digital objects** Once you have an account you can start notarizing digital assets to give them an identity.
```bash
vcn n <file|dir://directory|docker://dockerimage|git://gitdirectory>
```

4. **Authenticate digital objects** You can use the command as a starting point.

```bash
vcn a <file|dir://directory|docker://dockerimage|git://gitdirectory>
```

For detailed **command line usage**, just run `vcn help`.

## Usage

#### Wildcard support and recursive notarization

It's also possible to notarize assets using a wildcard pattern.

With `--recursive` flag the utility can recursively notarize inner directories.
```shell script
vcn n "*.md" --recursive
```

#### Notarization

Start with the `login` command. `vcn` will walk you through login and importing up your secret upon initial use.

```
vcn login --lc-host timestamp.codenotary.com
```

Once your secret is set, you can notarize assets like in the following examples:

```
vcn notarize <file>
vcn notarize dir://<directory>
vcn notarize docker://<imageId>
vcn notarize podman://<imageId>
vcn notarize git://<path_to_git_repo>
vcn notarize --hash <hash>
```

Change the asset's status:

```
vcn unsupport <asset>
vcn untrust <asset>
```

#### Authentication

```
vcn authenticate <file>
vcn authenticate dir://<directory>
vcn authenticate docker://<imageId>
vcn authenticate podman://<imageId>
vcn authenticate git://<path_to_git_repo>
vcn authenticate --hash <hash>
```

To output results in `json` or `yaml` formats:
```
vcn authenticate --output=json <asset>
vcn authenticate --output=yaml <asset>
```

## Examples

#### Authenticate a Docker image automatically prior to running it

First, you’ll need to pull the image by using:

```
docker pull hello-world
```

Then use the below command to put in place an automatic safety check. It allows only verified images to run.

```
vcn authenticate docker://hello-world && docker run hello-world
```
If an image was not verified, it will not run and nothing will execute.


#### Authenticate multiple assets
You can authenticate multiple assets by piping other command outputs into `vcn`:
```
ls | xargs -n 1 vcn authenticate
```
> The exit code will be `0` only if all the assets in you other command outputs are verified.

#### Authenticate by a specific signer
By adding `--signerID`, you can authenticate that your asset has been signed by a specific SignerID.
You can find your own signer id in the output of `vcn n` or `vcn a` (Signer).

> A SignerID is the signer public address (represented as a 40 hex characters long string prefixed with `0x`).

```
vcn authenticate --signerID 0x8... docker://hello-world
```

#### Authenticate using the asset's hash

If you want to authenticate an asset using only its hash, you can do so by using the command as shown below:

```
vcn authenticate --hash fce...
```

#### Unsupport/untrust an asset you do not have anymore

In case you want to unsupport/untrust an asset of yours that you no longer have, you can do so using the asset hash(es) with the following steps below.

First, you’ll need to get the hash of the asset from your CodeNotary Ledger Compliance dashboard or alternatively you can use the `vcn list` command. Then, in the CLI, use:

```
vcn untrust --hash <asset's hash>
# or
vcn unsupport --hash <asset's hash>
```

#### Notarization within automated environments

Simply set up your environment accordingly using the following commands:

```bash
export VCN_LC_API_KEY=Your-API-Key
```

Once done, you can use `vcn` in your non-interactive environment using:

```
vcn login --lc-host timestamp.codenotary.com
vcn notarize <asset>
```

> Other commands like `untrust` and `unsupport` will also work.


#### Add custom metadata when signing assets
The user can upload custom metadata when doing an asset notarization using the `--attr` option, e.g.:

```shell script
vcn n README.md --attr Testme=yes --attr project=5 --attr pipeline=test
```

This command would add the custom asset metadata Testme: yes, project: 5, pipeline: test.

The user can read the metadata back on asset authentication, i.e. using the `jq` utility:

```shell script
vcn a README.md -o json | jq .metadata
```

#### Inspect
Inspect has been extended with the addition of new filter: `--last`, `--first`, `--start` and `--end`.
With `--last` and `--first` are returned the N first or last respectively.

```shell script
vcn inspect document.pdf --last 10
```

With `--start` and `--end` it's possible to use a time range filter:

```shell script
vcn inspect document.pdf --start 2020/10/28-08:00:00 --end 2020/10/28-17:00:00
```

If no filters are provided, only a maximum of 100 items are returned.

#### Signer Identifier
It's possible to filter results by signer identifier:

```shell script
vcn inspect document.pdf --signerID Cyg...
```

