---
title: "Run immudb on Raspberry Pi and other ARM systems"
date: "2020-10-01"
image: "/images/blog/raspberry-pi.jpg"
tags: ["ARM", "Raspberry", "immudb"]

---
# immudb support for ARM architectures

It's exciting to learn that more and more projects are using immudb as their core immutable data storage. Different projects also mean different deployments and requirements.
One of the latest requests we received, is the support for ARM architecture. Besides running immudb on ARM server hardware, some IoT projects are looking into smaller systems as well, like a Raspberry Pi.

Reason is, that IoT produces a lot of sensor data that are the being used to make decisions. Therefore, it is important to to store that data at least for a certain amount of time, tamperproof.
Most IoT and embedded systems run on ARM, MIPS or RISC-V architectures. 


As ARM is the most popular platform, we started to compile and test immudb for ARM architecture and want to share the good news.

## ARM 64-Bit

immudb is written in Go and designed to run on 64-Bit systems. That made it very straighforward to compile it for ARM systems.


Simply clone the immudb repository on your system (best to have a Go development environment there as well) and run:

`GOOS=linux GOARCH=arm64 make immudb-static`

You can copy and run the immudb binary on your ARM 64 Bit system (Linux in the example above):


## ARM 32-Bit

![ARM 32-Bit](/images/blog/immudb-arm.jpg)

32-Bit wasn't part of our initial design, but it didn't took us long to make it 32-Bit ready.
For now you can find the 32-Bit version in a separate branch, but that is going to change soon.

https://github.com/codenotary/immudb/tree/feat/arch32

To compile it:

```bash
git clone -b feat/arch32 https://github.com/codenotary/immudb
GOOS=linux GOARCH=arm make immudb-static
```

After compiling immudb successfully, you can copy the binary to your Raspberry Pi and run it.

```bash
pi@raspberrypi:~ $ file immudb
immudb: ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), dynamically linked, interpreter /lib/ld-linux-armhf.so.3, for GNU/Linux 3.2.0, Go BuildID=TxxkBVvt8FdwuoIF2tEm/OPsPR6svuMAkJjgMkcM-/fOv8jdEgvaxbsCClESmX/LMxHKjo4E-Ce3YMYMDZV, BuildID[sha1]=9c97b6a3ad64bb9691b126c3daf877555a105ec5, stripped
```

```bash
pi@raspberrypi:~ $ ./immudb
 _                               _ _
(_)                             | | |
 _ _ __ ___  _ __ ___  _   _  __| | |__
| | '_ ` _ \| '_ ` _ \| | | |/ _` | '_ \
| | | | | | | | | | | | |_| | (_| | |_) |
|_|_| |_| |_|_| |_| |_|\__,_|\__,_|_.__/

================ Config ================
Data dir        : ./data
Address         : 0.0.0.0:3322
Metrics address : 0.0.0.0:9497/metrics
Config file     : configs/immudb.toml
MTLS enabled    : false
Auth enabled    : true
Dev mode        : false
Default database: defaultdb
Maintenance mode: false
----------------------------------------
Superadmin default credentials
   Username     : immudb
   Password     : immudb
========================================

immudb  2020/10/01 15:23:33 INFO: Admin user immudb successfully created
immudb  2020/10/01 15:23:33 INFO: Started with an empty database
immudb  2020/10/01 15:23:33 INFO: Starting consistency-checker
You can now use immuadmin and immuclient CLIs to login with the immudb superadmin user and start using immudb.

```

Now you can connect and use immudb with our SDKs:

https://github.com/codenotary/immudb#using-immudb


