---
title: "Quick and easy data transfer for VMware ESXi and more"
image: /images/blog/start_python_server.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2016-03-24"
---

Who doesn´t know the situation that you need to copy a single file from your local computer to an ESXi host or vice versa, but your firewall is blocked, ssh disabled or scp is just damn slow.

Funny enough, there is a simple yet powerful way of copying data from any system to any system, not just ESXi. It might even run on a mobile?!?

The only thing you need is a standard python installation as the required library comes automatically with it.

But here is the command: 

python -m SimpleHTTPServer <Port>

Looks simple, right! That command opens up a low weight HTTP server that starts with its root folder within the directory the command is started. 

![data transfer for VMware ESXi - start HTTP server](/images/blog/start_python_server.png)

**Port Warning 8000**

I use port 8000 in this example as this port is used for vMotion and therefore mostly opened and permitted within the built in ESXi firewall at any time. Please make sure to check, that you use a port that is not used by any other service at the same time (you can expect an error message, that the port is in use) and that there is no vMotion process ongoing or planned while having this server active. In our demo environment vMotion is not possible, therefore I don´t expect any vMotion transfer, yet the port is always open.

To be on the safe side, you should open and use a different port, like 57007, that is less common to be used.

![Firewall ESXi](/images/blog/port_esxi.png)

## Start the server

That means, if start python -m SimpleHTTPServer 8000 while within the /usr folder, I can access all files and traverse into all subdirectories. Clicking on a directory lets me walk into it, clicking a file downloads or opens it in the browser. There is no authentication needed and the server runs under the permissions of the logged in user that starts the command.

![Access filesystem using HTTP Server](/images/blog/access_http_server-1.png)

## Advantages

- no installation needed for most linux based systems
- very versatile
- secure, when used on demand
- extremely fast data transfer

As there is no network protocol encryption done during the whole communication and the http server very lightweight, the data transfer is extremely fast. Compared to SCP data transfer you can easy reach 5-10 times speed improvements.

## Firewall

As you open up an incoming port you need to make sure, that there is no firewall blocking that port on the system the python command is started. Furthermore, to start the command you need to have access to [SSH on your ESXi host](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=2004746).

## Summary

Of course, you should never run that server continuously or even permanent as it opens up a massive security leak (cleartext and no authentication). But used temporary to copy some files and closed afterwards is perfect.
