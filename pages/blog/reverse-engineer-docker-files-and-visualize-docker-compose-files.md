---
title: "reverse-engineer docker files and visualize docker-compose files"
image: /images/blog/dive.png
tags: ["Ops", "opvizor", "metrics", "logs"]
date: "2019-10-09"
---

Docker-compose files can become quite complex and in some cases you would like to document not just the docker-compose.yml content, but also visualize how the different docker-compose service communicate. Furthermore, it can be quite interesting to reverse-engineer docker files to get a better understanding, what they are build of.

There are different ways to do so and I want to dig into some of the most popular ones.

# dfimage

Starting with dfimage, a reverse-engineering project for Docker files, that simplifies that task a lot.

You can simply use the available dockerhub image, if you like, or of course build the project yourself.

To run the image against a local (already pulled) docker image, simply execute:

docker images # to pick your image id
# or pull an image
docker pull grafana/grafana #as an example
#docker run -v /var/run/docker.sock:/var/run/docker.sock laniksj/dfimage imageID
docker run -v /var/run/docker.sock:/var/run/docker.sock laniksj/dfimage 808a15f85914

The project needs access to the docker.sock to access the image details, therefore run it with -v /var/run/docker.sock ...

The output for the Grafana image looks like that and can give you a pretty good idea, how the image was build:

FROM grafana/grafana:latest
ADD file:fe64057fbb83dccb960efabbf1cd8777920ef279a7fa8dbca0a8801c651bdf7c in /
CMD \["/bin/sh"\]
ARG GF\_UID=472
ARG GF\_GID=472
ENV PATH=/usr/share/grafana/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin GF\_PATHS\_CONFIG=/etc/grafana/grafana.ini GF\_PATHS\_DATA=/var/lib/grafana GF\_PATHS\_HOME=/usr/share/grafana GF\_PATHS\_LOGS=/var/log/grafana GF\_PATHS\_PLUGINS=/var/lib/grafana/plugins GF\_PATHS\_PROVISIONING=/etc/grafana/provisioning
WORKDIR /usr/share/grafana
RUN |2 GF\_GID=472 GF\_UID=472 /bin/sh -c apk add --no-cache ca-certificates bash \\
    &&     apk add --no-cache --upgrade --repository=http://dl-cdn.alpinelinux.org/alpine/edge/main openssl musl-utils
RUN |2 GF\_GID=472 GF\_UID=472 /bin/sh -c if \[ \`arch\` = "x86\_64" \]; then       apk add --no-cache --virtual phantomjs-utils curl \\
    &&       cd /tmp \\
    &&       curl -Ls https://github.com/dustinblackman/phantomized/releases/download/2.1.1/dockerized-phantomjs.tar.gz | tar xz \\
    &&       cp -R lib lib64 / \\
    &&       cp -R usr/lib/x86\_64-linux-gnu /usr/lib \\
    &&       cp -R usr/share/fonts /usr/share \\
    &&       cp -R etc/fonts /etc \\
    &&       rm -rf /tmp/\* \\
    &&       apk del --no-cache phantomjs-utils;     fi
COPY dir:44ba505a8722a860c8980bd5fc72dc9df74b7364a65579eaf9df86a41f1492e4 in /usr/share/grafana
RUN |2 GF\_GID=472 GF\_UID=472 /bin/sh -c mkdir -p "$GF\_PATHS\_HOME/.aws" \\
    &&     addgroup -S -g $GF\_GID grafana \\
    &&     adduser -S -u $GF\_UID -G grafana grafana \\
    &&     mkdir -p "$GF\_PATHS\_PROVISIONING/datasources"              "$GF\_PATHS\_PROVISIONING/dashboards"              "$GF\_PATHS\_PROVISIONING/notifiers"              "$GF\_PATHS\_LOGS"              "$GF\_PATHS\_PLUGINS"              "$GF\_PATHS\_DATA" \\
    &&     cp "$GF\_PATHS\_HOME/conf/sample.ini" "$GF\_PATHS\_CONFIG" \\
    &&     cp "$GF\_PATHS\_HOME/conf/ldap.toml" /etc/grafana/ldap.toml \\
    &&     chown -R grafana:grafana "$GF\_PATHS\_DATA" "$GF\_PATHS\_HOME/.aws" "$GF\_PATHS\_LOGS" "$GF\_PATHS\_PLUGINS" "$GF\_PATHS\_PROVISIONING" \\
    &&     chmod -R 777 "$GF\_PATHS\_DATA" "$GF\_PATHS\_HOME/.aws" "$GF\_PATHS\_LOGS" "$GF\_PATHS\_PLUGINS" "$GF\_PATHS\_PROVISIONING"
EXPOSE 3000
COPY file:3e1dfb34fa6281634e9860cf1caea6384f6978cb513eb33b07f04752b4879694 in /run.sh
USER grafana
ENTRYPOINT \["/run.sh"\]

![dive docker image](/images/blog/dive.png)

The project can be found here: [https://github.com/LanikSJ/dfimage](https://github.com/LanikSJ/dfimage)

## dive

dive is a tool to explore every single layer of a docker image. It can not just help to audit a docker image, but also to find ways to shrink your image size.

As always you can either build the dive command, download a release or use a docker container. I use the debian release v.0.8.1 in that example:

wget https://github.com/wagoodman/dive/releases/download/v0.8.1/dive\_0.8.1\_linux\_amd64.deb
sudo dpkg -i dive\_0.8.1\_linux\_amd64.deb
# check the Grafana image
dive 808a15f85914
Fetching image... (this can take a while with large images)
Parsing image...
Analyzing image...
Building cache...

[![dive usage demo Dockerfile](/images/blog/dive-demo.gif)](https://github.com/wagoodman/dive)

The project demo video

Our Grafana image looks more like that 

![dive grafana image](/images/blog/dive-command.png)

Another nice dive feature is the integration into a CI build process, by setting the CI variable to true

**CI=true dive <your-image>**

The release downloads can be found here: [https://github.com/wagoodman/dive/releases/tag/v0.8.1](https://github.com/wagoodman/dive/releases/tag/v0.8.1)

The dive project can be found here:

[https://github.com/wagoodman/dive](https://github.com/wagoodman/dive)

## Docker-Compose-Viz

The last project I want to cover is the visualization of a docker-compose file. That's very convenient, when you want to visualize the communication between ports or different services inside your docker-compose file. It's using the graphviz project to create a image file. Just make sure, you're running the following command within the same directory as the docker-compose.yml file and make sure you have write permissions. 

After running the command you'll find the docker-compose.png file within that directory as well.

docker run --rm -it --name dcv -v $(pwd):/input pmsipilot/docker-compose-viz render -m image docker-compose.yml

This example is a simple [prest/postgres](https://github.com/prest/prest) project based on the following docker-compose.yml file:

version: "3"
services:
    prest:
        image: prest/prest
        links:
            - "postgres:postgres"
        environment:
            - PREST\_DEBUG=true # remove comment for enable DEBUG mode (disable JWT)
            - PREST\_PG\_HOST=postgres
            - PREST\_PG\_USER=prest
            # - PREST\_PG\_PASS=prest
            - PREST\_PG\_DATABASE=prest
            - PREST\_PG\_PORT=5432
            - PREST\_JWT\_DEFAULT=false # remove if need jwt
        depends\_on:
            - postgres
        ports:
            - "13000:3000"
    postgres:
        image: postgres:latest
        volumes:
            - "./data:/var/lib/postgresql/data"
        environment:
            - POSTGRES\_USER=prest
            - POSTGRES\_DB=prest
            # - POSTGRES\_PASSWORD=prest
        ports:
            - "15432:5432"

![docker-compose prest visualize](/images/blog/docker-compose-viz-prest.png)

or [dgraph](https://github.com/dgraph-io/dgraph):

version: "3.2"
services:
  zero:
    image: dgraph/dgraph:latest
    volumes:
      - type: volume
        source: dgraph
        target: /dgraph
        volume:
          nocopy: true
    ports:
      - 5080:5080
      - 6080:6080
    restart: on-failure
    command: dgraph zero --my=zero:5080
  server:
    image: dgraph/dgraph:latest
    volumes:
      - type: volume
        source: dgraph
        target: /dgraph
        volume:
          nocopy: true
    ports:
      - 18080:8080
      - 19080:9080
    restart: on-failure
    command: dgraph alpha --my=server:7080 --lru\_mb=2048 --zero=zero:5080
  ratel:
    image: dgraph/dgraph:latest
    volumes:
      - type: volume
        source: dgraph
        target: /dgraph
        volume:
          nocopy: true
    ports:
      - 8000:8000
    command: dgraph-ratelvolumes:
  dgraph:

![dgraph viz](/images/blog/docker-compose.png)

Depending on the amount and complexity of the services, you can get some decent sized images generated - so make sure to have a big screen. 

The docker-compose viz project can be found here: [https://github.com/pmsipilot/docker-compose-viz](https://github.com/pmsipilot/docker-compose-viz)
