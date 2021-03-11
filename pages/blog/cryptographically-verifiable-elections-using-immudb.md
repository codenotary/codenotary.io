---
title: "Cryptographically verifiable elections using immudb and Golang"
date: "2021-03-11"
image: "https://raw.githubusercontent.com/padurean/immuvoting/main/client/immuvoting-logo.svg"
tags: ["Go", "immudb", "immutability", "usecase", "election"]

---

# Cryptographically verifiable elections using immudb and Golang

<img src="https://raw.githubusercontent.com/padurean/immuvoting/main/client/immuvoting-logo.svg" height="85">

Valentin, one of our engineers started a nice side project to show the possibilities of immudb. His goal is to showcase a website that provides a secure way for elections. 

_Powered by_ **[immudb](https://github.com/codenotary/immudb)**


The main feature is that the voting platform built on immudb is automatically verified by everyone who visits the website! So immudb could run on an untrusted system, but the amount of users visiting the website makes it impossible to manipulate the data unnoticed.

* Electronic voting system allowing anyone to act as an auditor and (cryptographically) verify that the election data has not been tampered.
* The cryptographic verification, a.k.a the consistency proof, is achieved by leveraging the core features of immudb. It is based on multiple Merkle Trees.

**If you just want to go ahead and visit the GitHub project**: https://github.com/padurean/immuvoting

Continue reading to get some more information about how it works.

## The verification Go code

The code gets compiled to WASM and resides in the [VerifyConsistency function](https://github.com/padurean/immuvoting/blob/fa8e7f32b0745c844f5185c08fb72068518c6cf4/server/verifier/verifier.go#L38). 

In it’s definition the code is split in 5 steps (there are comments in the code, marking each step):

1. Get the local state which was persisted to local storage during a previous run
2. Get the current server (immudb) state by sending a GET /state request to the immuvoting REST server. *NOTE*: when interracting with immudb directly, through an SDK, the CurrentState method must be used instead
3. Get a verifiable transaction between the local and current states by sending a GET /verifiable-tx to the immuvoting REST server. *NOTE*:when interracting with immudb directly, through an SDK, the VerifiableTXByID method must be used instead
4. Use the verifiable transaction to do the actual verification. This will run only in the client browser, with no other interraction with the server. Show the result of the verification in the UI; OK or Tampered
5. If the verification passed, persist the fresh state from the server (obtained at step 2.) to local storage (overwrite the previous one), otherwise do nothing (keep the last non-tampered state in local storage)

## To compile the verification code to WebAssembly

1. Compile as WASM, outputing to the client folder: 
```go
GOOS=js GOARCH=wasm go build -o ../client/verifier.wasm ./verifier/verifier.go*
```
2. Make sure wasm_exec.js is present in the client folder. If it’s not there, copy it from your Go distribution:
```bash
cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ./client/
```

---

## Short demo video

<iframe width="560" height="315" src="https://www.youtube.com/embed/brFN6TzmI2M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


---

## How to run it

### Prerequisites

- [immudb](https://github.com/codenotary/immudb) v0.9.x - the immutable database. GitHub repo is [here](https://github.com/codenotary/immudb). More details about it can be found on it's [official site](https://www.codenotary.com/technologies/immudb/).

- A modern browser (the web interface uses relatively new HTML and ES6 features - e.g. the `featch` API, `const` keyword etc.).

### Fire it up!

- Run **`immudb`**

**_NOTE_**: _**immuvoting**_ will try to connect to it using default config: `localhost`, port `3322`, database `defaultdb` and default credentials (have a look in [server/main.go](./server/main.go) for more details)

- from _**immuvoting**_'s [server](./server) folder run:
  - `go get ./...`
  - `go run .` to start the HTTP API server (backend)

- a separate HTTP server needs to be started to serve the frontend (in the [client](./client) folder) - e.g. if using [VSCode](https://code.visualstudio.com), you can just use it's _**Go Live**_ feature; or you can use any other solution, like `python -m SimpleHTTPServer`.

**That's all.** You can now access the fronted at [http://localhost:&lt;xxx&gt;](http://localhost:5500).

**_NOTE_**: Port number depends on the HTTP server you used: default port for [VSCode](https://code.visualstudio.com)'s _**Go Live**_ it's `5500`, for python's `SimpleHTTPServer` it's `8000`.

---

## Miscellanea

- The cryptographic verification of the election data (a.k.a. the _consistency proof_ or _tampering proof_) is written in [Go](https://golang.org) and it's code resides in [server/verifier/verifier.go](./server/verifier/verifier.go). 
It is compiled to [WebAssembly](https://webassembly.org) (i.e. to [client/verifier.wasm](./client/verifier.wasm)) and runs in the browser, on the voter's / auditor's machine, automatically at a fixed interval. 

For instructions on how to recompile it to WASM, see the [README](./server/verifier/README.md) in the [server/verifier](./server/verifier) folder.

### How it works: Consistency proofs and Merkle Trees

- The cryptographic verification, a.k.a the _consistency proof_, is achieved by leveraging the core features of [immudb](https://www.codenotary.com/technologies/immudb/). 
It is based on [Merkle Trees](https://brilliant.org/wiki/merkle-tree/). 

More details about this can be read, for example, in [this article](https://transparency.dev/verifiable-data-structures/) or in [this one](https://computersciencewiki.org/index.php/Merkle_proof) which explains the [Merkle proofs](https://computersciencewiki.org/index.php/Merkle_proof).

