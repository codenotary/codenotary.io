---
title: "Grafana Dashboard and PowerCLI"
image: /images/blog/wpid-nice_dashboard.png
tags: ["Ops", "opvizor"]
date: "2015-05-27"
---

Some days ago I stumbled upon a real cool [blog post](http://wahlnetwork.com/2015/04/29/building-a-dashboard-with-grafana-influxdb-and-powercli/ "blog post") from [Chris Wahl](https://twitter.com/chriswahl "Chris Wahl") about his progress in creating a [Grafana](http://grafana.org/blog/2015/04/20/Grafana-2-Released.html "Grafana ") dashboard and filling data from PowerCLI.

I checked Grafana by myself, trying his manual and it's a pretty amazing open source project 100% worth trying.

Behind Grafana is the team of [raintank.io](http://raintank.io/ "raintank.io"), also worth checking out.

If you want to start with a simple test, playing around, there is a demo environment you can use - [play.grafana.org](http://play.grafana.org/ "play.grafana.com")

![Grafana Dashboard](/images/blog/wpid-nice_dashboard.png)

Photo courtesy of [Grafana.org](http://grafana.org/assets/img/docs/nice_dashboard.png)

Installation is extremly simple on a ubuntu, redhat or other linux system and you can connect it with a couple of open source databases.

- [Graphite](http://docs.grafana.org/datasources/graphite/)
- [InfluxDB](http://docs.grafana.org/datasources/influxdb/)
- [OpenTSDB](http://docs.grafana.org/datasources/opentsdb/)

Furthermore you can install it not just on an linux system but also on Windows, MacOS or directly in a docker container.

- [Installing on Mac OS X](http://docs.grafana.org/installation/mac/)
- [Installing on Windows](http://docs.grafana.org/installation/windows/)
