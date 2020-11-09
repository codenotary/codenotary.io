---
title: "Integrate ELK stack and filebeat into Performance Analyzer"
image: /images/blog/elk.png
tags: ["Ops", "opvizor"]
date: "2019-02-19"
---

While we don't have a log management solution (yet, but stay tuned) in our offerings, we help customers to integrate their existing monitoring platforms into Performance Analyzer. One of the most complete and popular solutions we encounter is Elasticsearch, Logstash and Kibana, also known als ELK stack. Furthermore, we notice that File beat is getting more popular to collect application logs and docker container logs.

As we were setting up our latest test lab to include ELK stack to integrate into Performance Analyzer, we decided to blog about the steps we did. You might get some nice insights or learn some new tricks.

# The ELK Stack

If you don't know the [ELK stack](https://www.elastic.co/elk-stack) yet, let's start with a quick intro.

The ELK stack consists of [Elasticsearch](https://www.elastic.co/products/elasticsearch), [Logstash](https://www.elastic.co/products/logstash), and [Kibana](https://www.elastic.co/products/kibana). All built as separate projects by the open-source company [Elastic](https://www.elastic.co/) these 3 components are a perfect fit to work together. In the meantime its a complete log management and analytics software suite. 

Central log management and indexing is a functionality that is simply required to run a data center, cluster, distributed server, and much more. 

While Elasticsearch is the backend that functions as a data storage, Logstash is the data processing engine (server-side data-processing pipeline) that ingests data from a variety of sources, transforms it into the required format and forwards it into the data storage (like Elasticsearch), Kibana is the dashboard front-end engine that allows to view and analyse log data (and more) using a browser. 

If you want to install the complete ELK stack from scratch, there are plenty of guidelines available. If you don't want to spend much time and go for a jump start, think about docker hub.

## ELK Docker container

While there are plenty of ELK container we figured that one project is maintained very well and is very popular:

[https://hub.docker.com/r/sebp/elk/](https://hub.docker.com/r/sebp/elk/) (5m+ downloads, 800+ stars)

There is also a great documentation about how to use the container as well: [elk-docker](https://elk-docker.readthedocs.io/)As we want to run multiple container, docker-compose is always the best bet to go for.**docker-compose.yml**

version: '3.7'
services:  
   elk:    
        image: sebp/elk    
        ports:      
               - "5601:5601"      
               - "9200:9200"      
               - "5044:5044"      
        restart: "unless-stopped"    
        container\_name: opvizor-elk

docker-compose up -d  && docker-compose ps

![ELK Stack docker](/images/blog/elk.png)

All done, ELK stack in a minimal config up and running as a daemon.

## Filebeat

Next thing we wanted to do is collecting the log data from the system the ELK stack was running on.

[Filebeat](https://www.elastic.co/products/beats/filebeat)

is a great and fast option to do so.Let's run the filebeat container without a config to customize the existing ELK stack (create index, add dashboards and more). Make sure to change the Kibana and Elasticsearch host parameter to match your installation. If the container is running on the same host as the ELK stack (docker-compose up) you can also use the container\_name within the docker-compose.yml file (if you use the correct network too).To find the network name, simply run

_docker network ls_

Typically the network is named like the service and \_default is added.

![docker network](/images/blog/network.png)

There are so many ways to connect docker container, feel free to use alternatives you like more.

docker run  
--network=elk\_default docker.elastic.co/beats/filebeat:6.6.0  
setup -E setup.kibana.host=opvizor-elk:5601   
-E output.elasticsearch.hosts=\["opvizor-elk:9200"\] 

If all went well, you should see the following output:

_Loaded index template__Loading dashboards (Kibana must be running and reachable)__Loaded dashboards__Loaded machine learning job configurations_

## Run Filebeat

First thing to do is creating a configuration file for filebeat - you can also download a template:

curl -L -O https://raw.githubusercontent.com/elastic/beats/6.6/deploy/docker/filebeat.docker.yml

This config has out-of-the-box docker support and only needs Elasticsearch target:

filebeat.config:
  modules:
    path: ${path.config}/modules.d/\*.yml
    reload.enabled: falsefilebeat.autodiscover:
  providers:
    - type: docker
      hints.enabled: trueprocessors:
- add\_cloud\_metadata: ~output.elasticsearch:
  hosts: '${ELASTICSEARCH\_HOSTS:opvizor-elk:9200}'

In our case adding filebeat to the docker-compose.yml makes sense:

 filebeat:
    image: docker.elastic.co/beats/filebeat:${ELASTIC\_VERSION:-6.5.0}
    hostname: "opvizor-elk-filebeat"    
    container\_name: filebeat   
    restart: unless-stopped    
    user: root    
    volumes:      
           - ./filebeat.docker.yml:/usr/share/filebeat/filebeat.yml      
           - filebeat:/usr/share/filebeat/data     
           - /var/run/docker.sock:/var/run/docker.sock      
           - /var/lib/docker/containers/:/var/lib/docker/containers/:ro     
           - /var/log/:/var/log/:ro    
    environment:      
           - ELASTICSEARCH\_HOST=opvizor-elk:9200    
           # disable strict permission checks    
    command: \["--strict.perms=false"\]
volumes:  filebeat:

Restart the container

docker-compose down && docker-compose up -d

## Kibana

Elasticsearch is ready to receive data, Filebeat is sending data to Logstash, Logstash is processing data and stores it in Elasticsearch.What is missing? Of course Kibana, the UI to analyze and search through the log data.Kibana runs on Port 5601 and has no authentication by default. 

![Kibana first steps](/images/blog/kibana.png)

As we have only filebeat data incoming right now, create a index filebeat-  and use @timestamp

![Kibana Data Discovery Filebeat](/images/blog/kibana-2.png)

## Syslog

Next thing to add are VMware ESXi logs via syslog. Of course, you could setup logstash to receive syslog messages, but as we have Filebeat already up and running, why not using the syslog input plugin of it.VMware ESXi syslog only support port 514 udp/tcp or port 1514 tcp for syslog.

![Syslog forwarder ESXi](/images/blog/esxi.png)

Change the firewall to allow outgoing syslog - 1514 TCP

![ESXi syslog firewall](/images/blog/fw.png)

Restart the syslog service

![ESXi restart syslog](/images/blog/restartservice.png)

more information can be found here:

[https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.esxi.upgrade.doc/GUID-9F67DB52-F469-451F-B6C8-DAE8D95976E7.html](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.esxi.upgrade.doc/GUID-9F67DB52-F469-451F-B6C8-DAE8D95976E7.html)

Change of the **docker-compose.yml** file to open port 1514

 filebeat:
    image: docker.elastic.co/beats/filebeat:${ELASTIC\_VERSION:-6.5.0}
    hostname: "opvizor-elk-filebeat"    
    container\_name: filebeat   
    restart: unless-stopped    
    user: root    
    ports:     
           - "1514:1514" 
    volumes:      
           - ./filebeat.docker.yml:/usr/share/filebeat/filebeat.yml      
           - filebeat:/usr/share/filebeat/data     
           - /var/run/docker.sock:/var/run/docker.sock      
           - /var/lib/docker/containers/:/var/lib/docker/containers/:ro     
           - /var/log/:/var/log/:ro    
    environment:      
           - ELASTICSEARCH\_HOST=opvizor-elk:9200    
           # disable strict permission checks    
    command: \["--strict.perms=false"\]
volumes:  filebeat:

**Change the Filebeat.yml to add the Ports section**

filebeat.config:
  modules:
    path: ${path.config}/modules.d/\*.yml
    reload.enabled: falsefilebeat.autodiscover:
  providers:
    - type: docker
      hints.enabled: trueprocessors:
- add\_cloud\_metadata: ~output.elasticsearch:
  hosts: '${ELASTICSEARCH\_HOSTS:opvizor-elk:9200}'
filebeat.inputs:
- type: syslog
  protocol.udp:
    host: ":1514"
filebeat.inputs:
- type: syslog
  protocol.tcp:
    host: ":1514"

## Kibana VMware Syslog 

Let's see if data is incoming:

![Kibana VMware vSphere ESXi](/images/blog/kibana-vmware-syslog.png)

Looks good, now we can start customizing dashboards and input stream processing.

## Performance Analyzer Integration

All data is flowing nicely into our setup, so we can start to add the most important information to a Performance Analyzer dashboard.To integrate Elasticsearch into Performance Analyzer we need to add a data source.

![PA Grafana add data sources](/images/blog/pa_ds.png)

![add source](/images/blog/pa_ds2.png)

Make sure to set the correct index and use a working url, when adding the Elasticsearch Data Source

![Performance Analyzer Elasticsearch](/images/blog/pa_elds.png)

### Create a new Dashboard for Elasticsearch

![Performance Analyzer New Dashboard](/images/blog/newdb.png)

You can change the name using the gearwheel icon (1) and add a new table to view Elasticsearch Entries (2).

![New Table Widget for Performance Analyzer](/images/blog/newwidget.png)

Select the correct data source and create your Elasticsearch query.

![Log Integration](/images/blog/elasticsearch.png)

If all done well, you can mix Log error widgets or counts with ESXi or VM information.

## Clean up job Curator

You might want to clean up the Elasticsearch content from time to time, to avoid storing unneeded data. There is a nice tool available called Curator, that runs nicely in a docker container.The following example cleans the Elasticsearch database and deletes data older than 30 days:

docker run --rm --network=elk\_default -e ES\_HOST=opvizor-elk -e DAYS\_TO\_KEEP=30 omerha/docker-elasticsearch-curator:latest

Of course you can setup a daily cron job to make sure the clean up is done on a regular basis.
