---
title: "Using eBPF and immudb to audit executed commands on a Linux server"
author: "Duncan Mac-Vicar P."
date: "2021-04-12"
image: "/images/blog/ebpf-linux-immudb.png"
tags: ["observability", "tracing", "immudb", "linux", "ebpf"]
---

## What is eBPF?

[eBPF](https://ebpf.io/) has gained lot of momentum in the last years. The reason is that it brings to the Linux Kernel what Javascript is to a Web browser and what Lua did to game engines.

By turning the Linux Kernel into a re-programmable system, solutions around networking, security and observability can be implemented without having to change code in the Kernel, and without adding complexity to these subsystems.

## How does eBPF works?

eBPF works by embedding a virtual machine into the Linux kernel. Think of it like the Javascript virtual machine in your browser. In a browser, the DOM and other browser APIs are exposed to the Javascript VM. With eBPF, different Kernel observability subsystems (kprobes, tracepoints, uprobes, etc) are exposed to eBPF programs.

## How to use eBPF?

There are different ways to interact with the eBPF subsystem. One of them is to use [the BPF compiler collection](https://github.com/iovisor/bcc) (BCC). For example, if you compile the following code with BCC, it will recognize the prefix of the function (`kprobe__`) to instrument a kprobe on the kernel `tcp_v4_connect` function.

```
int kprobe__tcp_v4_connect(struct pt_regs *ctx, struct sock *sk)
    [...]
}
```

The [bpftrace](https://github.com/iovisor/bpftrace) tool was created by Alastair Robertson. It allows to instrument the kernel with a very simple language inspired by C and awk. It uses eBPF under the hoods. For example, you can save the filename used in a call to `statfs()` in a map by doing:

```
tracepoint:syscalls:sys_enter_statfs
{
        @filename[tid] = args->pathname;
}
```

and then display it once the function exits:

```
tracepoint:syscalls:sys_exit_statfs
/@filename[tid]/
{
        $ret = args->ret;
        $errno = $ret >= 0 ? 0 : - $ret;

        printf("%-6d %-16s %3d %s\n", pid, comm, $errno,
            str(@filename[tid]));
        delete(@filename[tid]);
}
```

[Brendan Gregg](http://www.brendangregg.com) has written many utilities [that ship as examples to bpftrace](https://github.com/iovisor/bpftrace/tree/master/tools).

# Snooping shell commands

Adding a hook to capture all bash commands is just a matter of adding an `uprobe` to the bash readline function.

```
BEGIN
{
        printf("Tracing bash commands... Hit Ctrl-C to end.\n");
        printf("%-9s %-6s %s\n", "TIME", "PID", "COMMAND");
}

uretprobe:/usr/lib64/libreadline.so:readline
{
        time("%H:%M:%S  ");
        printf("%-6d %s\n", pid, str(retval));
}
```

If bash in your distribution is compiled with readline statically, you will need to replace `/usr/lib64/libreadline.so` with `/bin/bash`.

```
$ sudo bpftrace bashreadline.bt
```

And you will start seeing the commands as they are typed.

## Creating a tamper-proof audit log of typed Linux commands.

![Sending data from eBPF to immudb](/images/blog/ebpf-linux-immudb-1.png)

[immudb](https://www.codenotary.com/technologies/immudb) is a database developed by [CodeNotary](https://www.codenotary.com/) which allows to insert data tamper-proof and will full history. The data is protected by the clients, so you can make sure nobody has changed the history since the last time you connected. immudb can be used as a DBMS service or embedded into your application.

We will create a Go program that inserts a eBPF program to capture shell commands and we will send them to a database to be stored tamper-proof. If somebody wants to remove the history of a typed commands, other clients will realize it by receiving a state that does not validate against the previous cryptographic state the client stores.

We could use bpftrace and [immuclient](https://www.codenotary.com/blog/commandline-starter-guide-for-immudb/) to create a very simple script without do any programming. For example:

```bash
uretprobe:/usr/lib64/libreadline.so:readline
{
        printf("immuclient set \"bash:%d-%d-%d\" \"%s\"\n", pid, nsecs, rand, str(retval));
}
```

Would print the immuclient commands to insert into immudb:

```
immuclient set "bash:29152-728945597--647534397" "ls -la"
```

If you wanted to do this from Go, you can start with the [this example](https://github.com/iovisor/gobpf/blob/master/examples/bcc/bash_readline/bash_readline.go).

We define a struct that can be serialized to JSON, which we will use to store the event into immudb:

```go
type Entry struct {
	Pid     uint32 `json:pid`
	Command string `json:command`
}
```

You would need to setup an immudb client just before starting to read the events:

```go
c, err := client.NewImmuClient(client.DefaultOptions())
if err != nil {
	log.Fatal(err)
}

ctx := context.Background()
// login with default username and password and storing a token
lr, err := c.Login(ctx, []byte(`immudb`), []byte(`immudb`))
if err != nil {
	log.Fatal(err)
}
// set up an authenticated context that will be required in future operations
md := metadata.Pairs("authorization", lr.Token)
ctx = metadata.NewOutgoingContext(context.Background(), md)

log.Printf("Connected to immudb")
```

And then on every event, we would insert it:

```go
entry := Entry{Pid: event.Pid, Command: comm}
json, err := json.Marshal(entry)
if err != nil {
	log.Fatal(err)
}

key := fmt.Sprintf("bash:%d:%s", time.Now().UnixNano(), shortuuid.New())
_, err = c.Set(ctx, []byte(key), json)
if err != nil {
	log.Fatal(err)
}
```

Once built, run it, and it should start capturing commands into immudb. We can verify that by doing a scan on the ""bash" prefix:

```
$ immuclient
immuclient>login immudb
Password:
Successfully logged in.
immudb user has the default password: please change it to ensure proper security
immuclient>scan bash
tx:             1
key:            bash:1617959978373826959:RL33FeAh8K2mjrreQ6nAQ9
value:          {"Pid":6793,"Command":"ls -la"}
hash:           7de2e26104283979302dfc790b15de0c1dd53f6275a580460e57aea612f72b1d

tx:             2
key:            bash:1617959983177004413:NDSGRabvtLaEAVH7MBYPmB
value:          {"Pid":6793,"Command":"cat /etc/fstab"}
hash:           2a0c9cac5fc79702e3e15516be24e084120db42fab679853792a4552eed3b254

tx:             3
key:            bash:1617959992408965502:vj9EcBDTNXyAx5dXGqFc5Q
value:          {"Pid":6793,"Command":"immuclient"}
hash:           1cdab4955185414ff5540fdf6d6c20fa60f83dc55c6f1da67a1bd8581c0957d3
```

In a real scenario, you would additionally:

* Handle authentication properly
* Use `VerifiedSet` and handle the case where the server has been tampered

The full program is listed here and also available in this [Github repository](https://github.com/dmacvicar/immubash).

```go
// Copyright 2017 Louis McCormack
// Adapted by Duncan Mac-Vicar
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package main

import (
	"bytes"
	"context"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"github.com/codenotary/immudb/pkg/client"
	bpf "github.com/iovisor/gobpf/bcc"
	"github.com/renstrom/shortuuid"
	"google.golang.org/grpc/metadata"
	"log"
	"os"
	"os/signal"
	"time"
)

const source string = `
#include <uapi/linux/ptrace.h>

struct readline_event_t {
        u32 pid;
        char str[80];
} __attribute__((packed));

BPF_PERF_OUTPUT(readline_events);

int get_return_value(struct pt_regs *ctx) {
        struct readline_event_t event = {};
        u32 pid;
        if (!PT_REGS_RC(ctx))
                return 0;
        pid = bpf_get_current_pid_tgid();
        event.pid = pid;
        bpf_probe_read(&event.str, sizeof(event.str), (void *)PT_REGS_RC(ctx));
        readline_events.perf_submit(ctx, &event, sizeof(event));

        return 0;
}
`

type readlineEvent struct {
	Pid uint32
	Str [80]byte
}

type Entry struct {
	Pid     uint32 `json:pid`
	Command string `json:command`
}

func main() {
	m := bpf.NewModule(source, []string{})
	defer m.Close()

	readlineUretprobe, err := m.LoadUprobe("get_return_value")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to load get_return_value: %s\n", err)
		os.Exit(1)
	}

	err = m.AttachUretprobe("/usr/lib64/libreadline.so", "readline", readlineUretprobe, -1)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to attach return_value: %s\n", err)
		os.Exit(1)
	}

	table := bpf.NewTable(m.TableId("readline_events"), m)

	channel := make(chan []byte)

	perfMap, err := bpf.InitPerfMap(table, channel, nil)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to init perf map: %s\n", err)
		os.Exit(1)
	}

	sig := make(chan os.Signal, 1)
	signal.Notify(sig, os.Interrupt, os.Kill)

	go func() {
		c, err := client.NewImmuClient(client.DefaultOptions())
		if err != nil {
			log.Fatal(err)
		}

		ctx := context.Background()
		// login with default username and password and storing a token
		lr, err := c.Login(ctx, []byte(`immudb`), []byte(`immudb`))
		if err != nil {
			log.Fatal(err)
		}
		// set up an authenticated context that will be required in future operations
		md := metadata.Pairs("authorization", lr.Token)
		ctx = metadata.NewOutgoingContext(context.Background(), md)

		log.Printf("Connected to immudb")

		var event readlineEvent
		for {
			data := <-channel
			err := binary.Read(bytes.NewBuffer(data), binary.LittleEndian, &event)
			if err != nil {
				fmt.Printf("failed to decode received data: %s\n", err)
				continue
			}
			// Convert C string (null-terminated) to Go string
			comm := string(event.Str[:bytes.IndexByte(event.Str[:], 0)])

			entry := Entry{Pid: event.Pid, Command: comm}
			json, err := json.Marshal(entry)
			if err != nil {
				log.Fatal(err)
			}

			key := fmt.Sprintf("bash:%d:%s", time.Now().UnixNano(), shortuuid.New())
			_, err = c.Set(ctx, []byte(key), json)
			if err != nil {
				log.Fatal(err)
			}
		}
	}()

	perfMap.Start()
	<-sig
	perfMap.Stop()
}
```


