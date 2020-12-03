---
title: "gRPC-routing using Træfik vs NGINX"
date: "2020-12-03"
image: "/images/blog/proxy-flow.png"
tags: ["Go", "traefik", "NGINX", "gRPC"]
---

# gRPC-routing using Træfik vs NGINX

## Current Scenario

When developing a web-based software that has a shiny web UI, a set of APIs and is written in Go, you're typically using the excellent gRPC standard to ensure maximum flexibility and performance.

Imagine the application is composed of various modules, each implemented as a different executable, each responsible for a different task. 
All modules work together to compose the web application. A simple reverse proxy stands in front of the modules, choosing the correct one based on the URL prefix. 

A different port is used for the gRPC interface. A simple setup, as you can see in this picture

![NGINX](/images/blog/grpc-flow.png "NGINX as Proxy")

For the role of reverse proxy a common choice is [NGINX](https://www.nginx.com/): you simply can’t go wrong with NGINX and most admins know it. 
Furthermore, it’s fast, powerful and can handle the TLS layer without issues. 
So anybody can configure it, and it's **really** great as a reverse proxy.

## Issues

You could think, that the story is already over and NGINX was running fine for us. Not really…

In a typical enterprise environment, the only ports you want (or you're allowed) to use are 80 (HTTP) and 443 (HTTPS). Everything else is *mostly* blocked by a firewall or a proxy and it can take months to be authorized to configure (if at all).
But, as gRPC is based on HTTP, why not we simply use port 80 and route gRPC requests to the gRPC module using the reverse proxy?

Let's implement that! gRPC is based on HTTP2, actually, but that shouldn’t be a concern. NGINX speaks HTTP2 so let’s give it a try?
As always, the devil is in the details.
You can’t easily use the URI to route the requests, because the URI depends on the gRPC schema and that may collide with the previous statements. 

Fortunately, there is another way: let’s use **Træfik**.

## Enter Træfik

Træfik (you can find it [here](https://traefik.io/traefik/)) is a reverse proxy especially designed for working as a router. Having a Cloud Native approach, it is well integrated and deployable with Kubernetes, Docker, and all container management systems. 
It’s dynamically configurable and reliable. Like NGINX, it’s powerful, can handle the TLS layer and it’s very fast. 

It also shines, more than NGINX, as it is designed to work in a 12-factor application (you can find more information [here](https://12factor.net) and it can use different rules to route HTTP requests. 
You can use the URI, but you can also use other information extracted from the request.

All gRPC requests have a content-type set to “application/grpc”. So it’s easy to write a rule for that (I’ll use Kubernetes dynamic configuration syntax):

```yaml
- match: Headers(`content-type`,`application/grpc`) 
name: route2grpc
kind: Rule
priority: 50
services:
- name: grpc
port: 8080
scheme: h2c
```

That way, we can send the gRPC request to the correct backend (remember to use the h2c scheme), multiplexing the requests over a single HTTP (or HTTPS) port:

![Træfik](/images/blog/proxy-flow.png "Træfik as proxy")

So, switching from NGINX to Træfik allows a solution that’s compatible with enterprise settings, and it’s even easier to deploy.

