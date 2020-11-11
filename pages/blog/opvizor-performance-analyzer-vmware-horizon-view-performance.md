---
title: "Opvizor Performance Analyzer - VMware Horizon View Performance"
image: /images/blog/vmware_view-3.png
tags: ["Ops", "opvizor"]
date: "2018-06-05"
---

Since we started the Performance Analyzer development some years ago, it was always important that our customers cannot just monitor and analyze the VMware vSphere performance, but also checking the applications and the underlying hardware.

The integration of [VMware Horizon View](https://www.vmware.com/products/horizon.html) Performance is another step into that direction to monitor the virtual desktop performance from inside the guest and not just the outside view using VMware vCenter data.

That offers a single view that provides visibility from the end user VDI experience to operating system, storage and network issues. All critical metrics are tracked for PCoIP and VMware Blast, gathering data for logon duration, frames per second, data transfer and application, OS and ESXi performance.

Our latest version 4.9 is ready to integrate data from all of your virtual desktops to get performance data from PCoIP and the new VMware Blast protocol.

The architecture consists of a Guest agent that runs within your Microsoft Windows virtual desktops as a Windows service and gathers all required PCoIP or Blast metrics, depending on the protocol you´re using and the VMware View dashboard that makes sense of the received data in a simple and efficient way.

The dashboard merges information of the Guest OS, VMware VMkernel information and PCoIP or Blast metrics.

[![VMware Horizon View Performance PCoIP](/images/blog/vmware_view-3.png)](https://try.opvizor.com/perfanalyzer)

Especially critical metrics like Frames per Second, RTL or Packet loss are directly visible. Furthermore you can check if network bandwidth is taken using USB devices.

![VMware Horizon Blast Protocol](/images/blog/blast-1.png)

Combined with VMware Performance data directly from the VMkernel it makes a complete picture!

![VMware View Blast combined with VMkernel Performance](/images/blog/vmview_blast_v2_sm.png)

These are the metrics we´re collecting:

## PCoIP Session Metrics

- Session Duration Seconds
- Bytes Received
- Bytes Sent
- Packets Received
- Packets Sent
- RX Packets Lost
- TX Packets Lost

## PCoIP Session Network Statistics

- Round Trip Latency ms
- RX BW kbit/sec
- RX BW Peak kbit/sec
- RX Packet Loss %
- TX BW kbit/sec
- TX BW Active Limit kbit/sec
- TX BW Limit kbit/sec
- TX Packet Loss %

## PCoIP Session Imaging Statistics

- Imaging Bytes Received
- Imaging Bytes Sent
- Imaging RX BW kbit/sec
- Imaging TX BW kbit/sec
- Imaging Encoded Frames/sec
- Imaging Active Minimum Quality
- Imaging Decoder Capability kbit/sec
- Imaging Megapixel/sec

## VMware Blast HTML5 MMR counters

- Received Packets
- Transmitted Packets
- Received Bytes
- Transmitted Bytes

## VMware Blast Imaging Counters

- Dirty frames per second
- Poll Rate
- FBC Rate
- Frames per second
- Received Packets
- Transmitted Packets
- Received Bytes
- Transmitted Bytes

## VMware Blast Session Counters

- Received Packets
- Transmitted Packets
- Received Bytes
- Transmitted Bytes
- Jitter (Uplink)
- RTT
- Packet Loss (Uplink)
- Estimated Bandwidth (Uplink)
