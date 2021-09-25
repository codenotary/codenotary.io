---
title: "Pushing technology the hard way (Part2) immudb Kubernetes StatefulSet"
author: "Sebastian Wind"
date: "2021-09-25"
image: "/images/blog/image.png"
tags: ["guideline", "golang", "immudb", "linux", "cloudfoundry"]
---


# Pushing new technology the hard way (Part2)

  

In the last part of this blog, we discussed why innovative technology is very important for organizations. We demonstrated how to start an innovation project in a real-world scenario with [immudb](https://www.codenotary.com/technologies/immudb/). Now we have to get on the next level and find a proper production environment for [immudb](https://www.codenotary.com/technologies/immudb/).

The lab is a great place to present and test technology but it is isolated and doesn't fulfill production requirements like scalability, high availability, or a backup concept.

How do we find that place in a large company? There are many platforms to choose from. Innovative projects are always very risky, that's why you should look out for positive cross effects. Which platform is strategic for the company or is becoming big in the future? Which skills are valuable for your position? Doing something new is always a great opportunity for upskilling. Just do it in the right direction.

  

[Kubernetes](https://kubernetes.io/) is a good example of a fast-growing platform that will [sooner or later be used by most organizations](https://www.redhat.com/en/blog/kubernetes-future-what-does-future-look).

In this blog, we will deploy [immudb](https://www.codenotary.com/technologies/immudb/) as a [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) in [Kubernetes](https://kubernetes.io/) with replication. For that, we start with a [minikube](https://minikube.sigs.k8s.io/docs/) tutorial. Of course, we will also go into the real-world challenges of applying for the same work in a large organization. The real-world examples are from an undisclosed IT service provider hosting over 2000 servers and 16000 virtual machines.

  

## Run [immudb](https://www.codenotary.com/technologies/immudb/) as Replicated Stateful Application

  

In this tutorial shows how to run the [immudb](https://www.codenotary.com/technologies/immudb/) database as a replicated stateful application using a [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) controller. Before that, we need a [Kubernetes](https://kubernetes.io/) cluster and the kubectl command-line tool. This tutorial is using minikube to create and run the cluster. The example immudb deployment consists of [YAML](https://yaml.org/) files that are creating a [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/), [Services](https://kubernetes.io/docs/concepts/services-networking/service/) and the [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) itself:

  

- configmap.yaml

- service.yaml

- immudb-statefulset.yaml

  

Note: this tutorial is focusing on running [immudb](https://www.codenotary.com/technologies/immudb/) as a stateful application in [Kubernetes](https://kubernetes.io/). It is not a production configuration as [Kubernetes policies](https://kubernetes.io/docs/concepts/policy/pod-security-policy/) are not part of the tutorial and [immudb](https://www.codenotary.com/technologies/immudb/) settings remain defaults. Also, you have to be familiar with the concepts of [StatefulSets](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/), [ConfigMaps](https://kubernetes.io/docs/concepts/configuration/configmap/), [Services](https://kubernetes.io/docs/concepts/services-networking/service/) , [Volumes](https://kubernetes.io/docs/concepts/storage/volumes/), [StorageClasses](https://kubernetes.io/docs/concepts/storage/storage-classes/), and [PersistentVolumes](https://kubernetes.io/docs/concepts/storage/persistent-volumes/)/[Claims](https://kubernetes.io/docs/tasks/configure-pod-container/configure-persistent-volume-storage/).

  

### ConfigMap

The [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) is being used for providing configuration data to the application containers. With the [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/), we can use customized configurations for the [immudb](https://www.codenotary.com/technologies/immudb/) database servers.

```YAML
apiVersion: v1
kind: ConfigMap
metadata:
  name: immudb
  labels:
    app: immudb
data:
  primary.cnf: |
    dir = "./data/master"
    network = "tcp"
    address = "0.0.0.0"
    port = 3322
    dbname = "immudb"
    pgsql-server = true # enable or disable pgsql server
    pgsql-server-port = 5432  
    web-server-port = 8080   
  replica.cnf: |
    replication-enabled = true
    replication-master-address="immudb-0.immudb"
    replication-master-port=3322 
    replication-follower-username="immudb"
    replication-follower-password="immudb"
    port=3334
    pgsql-server-port=5434
    dir="./data/replica"
    pgsql-server = true # enable or disable pgsql server
    web-server-port = 9090
```

The [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) with the name "immudb" provides individual configuration files for the master and replica servers. The primary.cnf is almost equivalent to the standard config of [immudb](https://www.codenotary.com/technologies/immudb/). The working directory for the databases has been changed to "./data/master". That directory will later be mounted in the [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/). The replica.cnf config however is different. [immudb](https://www.codenotary.com/technologies/immudb/) will start up as a replica server when using the replica.cnf. It will be read-only and replicate databases in the master database server (at the moment systemdb and defaultdb). That's why the ports are different. It also contains the replication parameters. The replication-master-address is a static DNS name for the [immudb](https://www.codenotary.com/technologies/immudb/) master server. That means it won't change even if the pod is restarting. Apply, show, and delete the [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) like this:
```bash
    # Apply the ConfigMap
    kubectl apply -f configmap.yaml
    # Show the content of the ConfigMap immudb
    kubectl describe configmap immudb
    # Clean-up
    kubectl delete configmap immudb
```
### Services
[Services](https://kubernetes.io/docs/concepts/services-networking/service/)  in [Kubernetes](https://kubernetes.io/) are a way to expose an app running on a set of [Pods](https://kubernetes.io/de/docs/concepts/workloads/pods/).
```YAML
# Headless service for stable DNS entries of StatefulSet members.
apiVersion: v1
kind: Service
metadata:
  name: immudb
  labels:
    app: immudb
spec:
  ports:
  - name: immudb
    port: 3322
  clusterIP: None
  selector:
    app: immudb
---
# Client service for connecting to any immudb instance for reads.
# For writes, you must instead connect to the primary: immudb-0.immudb.
apiVersion: v1
kind: Service
metadata:
  name: immudb-read
  labels:
    app: immudb
spec:
  ports:
  - name: immudb
    port: 3334
  selector:
    app: immudb
---
# immudb master webserver (read/write)
apiVersion: v1
kind: Service
metadata:
  name: immudb-webserver
  labels:
    app: immudb
spec:
  ports:
  - name: immudb
    port: 8080
  selector:
    statefulset.kubernetes.io/pod-name: immudb-0
---
# immudb replica webserver (read-only)
apiVersion: v1
kind: Service
metadata:
  labels:
    app: immudb
  name: immudb-ext
spec:
  ports:
    - port: 9090
  selector:
    statefulset.kubernetes.io/pod-name: immudb-2b
```
The Headless [Service](https://kubernetes.io/docs/concepts/services-networking/service/) "immudb" is beeing defined with the attribute "clusterIP: None". That means it uses the DNS entries from the [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) controller. Pods are accessible by their pod-name.headless-service-name so for our [immudb](https://www.codenotary.com/technologies/immudb/) master pod that would be "immudb-0.immudb". The Service "immudb-read" is a Client Serivce. It is a standard [Service](https://kubernetes.io/docs/concepts/services-networking/service/) with its own cluster IP and is connecting to all [immudb](https://www.codenotary.com/technologies/immudb/) Pods including the master. The [Service](https://kubernetes.io/docs/concepts/services-networking/service/) "immudb-webserver" is connecting to the [immudb](https://www.codenotary.com/technologies/immudb/) master webserver "immudb-0" and providing read/write capabilities. The [Service](https://kubernetes.io/docs/concepts/services-networking/service/) "immudb-ext" is conneting to the webinterface of a replica server. These [Services](https://kubernetes.io/docs/concepts/services-networking/service/) have been assign to later test our [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) App comfortably from webbrowser.
```bash
    # Apply the ConfigMap
    kubectl apply -f service.yaml
    # Show Services 
    kubectl get services 
    # Clean-up 
    kubectl delete service <service-name>
```

### StatefulSet 
A [StatefulSet](https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/) manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods.

```YAML
apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: immudb
spec:
  selector:
    matchLabels:
      app: immudb
  serviceName: immudb
  replicas: 3
  template:
    metadata:
      labels:
        app: immudb
    spec:    
      initContainers:
      - name: init-immudb
        image: codenotary/immudb:latest-bullseye-slim
        command:
        - bash
        - "-c"
        - |
          set -ex
          # Generate immudb server-id from pod ordinal index.
          [[ `hostname` =~ -([0-9]+)$ ]] || exit 1
          ordinal=${BASH_REMATCH[1]}
          if [[ $ordinal -eq 0 ]]; then
            cp /mnt/config-map/primary.cnf /mnt/configs/immudb.toml
          else
            cp /mnt/config-map/replica.cnf /mnt/configs/immudb.toml
          fi          
        volumeMounts:
        - name: conf
          mountPath: /mnt/configs
          subPath: immudb.toml
        - name: config-map
          mountPath: /mnt/config-map
      containers:
      - name: immudb
        image: codenotary/immudb:latest-bullseye-slim
        command: ["immudb","--config","/mnt/configs/immudb.toml"]
        env:
        - name: IMMU_ADMIN_PASSWORD
          value: "secret"
        ports:
        - name: immudbgprc
          containerPort: 3322
        - name: immudbweb
          containerPort: 8080
        - name: immudbrepbweb
          containerPort: 9090
        volumeMounts:
        - name: data
          mountPath: /data/master
        - name: data
          mountPath: /data/replica
        - name: conf
          mountPath: /mnt/configs
          subPath: immudb.toml
      volumes:
      - name: conf
        emptyDir: {} 
      - name: scripts
        emptyDir: {} 
      - name: config-map
        configMap:
          name: immudb
  volumeClaimTemplates:
  - metadata:
      name: data
    spec:
      accessModes: ["ReadWriteOnce"]
      resources:
        requests:
          storage: 2Gi
```
The “initContainer” is copying the configs of the [ConfigMap](https://kubernetes.io/docs/concepts/configuration/configmap/) based on the Hostname into the mounted volumes for the Container. The Hostname of the [immudb](https://www.codenotary.com/technologies/immudb/) master database server is "immudb-0" and the replicas are called "immudb-1", "immudb-2", and so on. The "primary.cnf" is only copied into "immudb.toml" when the pod name ends with a zero, every pod name greater than that will get the replica config. The image from DockerHub for the containers is the "codenotary/immudb:latest-bullseye-slim" image with bash and hostname commands available. The [immudb](https://www.codenotary.com/technologies/immudb/) is then being started by using the command "immudb --config="/mnt/configs/immudb.toml" which translates into "command: ["immudb","--config","/mnt/configs/immudb.toml"]" in the immudb-statefulset.yaml file.
```bash
    # Apply the statefulset
    kubectl apply -f immudb-statefulset.yaml
    # Clean-up
    kubectl delete statefulset immudb
```
## Did it work?
There are several ways to check if your application is running. Look up the status of the pods:
```bash
    kubectl get pods -o wide
    
    NAME       READY   STATUS    RESTARTS   AGE   IP           NODE       NOMINATED NODE   READINESS GATES
    immudb-0   1/1     Running   0          40m   172.17.0.5   minikube   <none>           <none>
    immudb-1   1/1     Running   0          40m   172.17.0.6   minikube   <none>           <none>
    immudb-2   1/1     Running   0          40m   172.17.0.7   minikube   <none>           <none>    
```
Get the logs of a pod:
```bash
    # Logs of pod-name immudb-1 in container (-c) immudb 
    kubectl logs immudb-1 -c immudb
    immudb  2021/09/25 16:46:20 INFO: Replication from 'systemdb@immudb-0.immudb:3322' to 'systemdb' succesfully initialized
    immudb  2021/09/25 16:46:20 INFO: Creating database 'defaultdb' {replica = true}...
    immudb  2021/09/25 16:46:20 INFO: Connecting to 'immudb-0.immudb':'3322' for database 'systemdb'...
```
Jump into the pod's commandline to figure out problems like "no file or directory":
```bash
    kubectl exec --stdin --tty immudb-o -c immudb -- bash
```
The most comfortable way is to start up the [Kubernetes Dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/). [This is how it works with Minikube](https://minikube.sigs.k8s.io/docs/handbook/dashboard/):
```bash
    minikube dashboard
```
The [dashboard](https://minikube.sigs.k8s.io/docs/handbook/dashboard/) is showing an overview about your apps and helps troubleshooting aswell as managing the cluster.
![minikube dashboard](/images/blog/minikubedashboard.jpg)

## Expose the [Services](https://kubernetes.io/docs/concepts/services-networking/service/) to the LocalHost

The Apps can be accessed by running a minikube tunnel. Through the tunnel it is possible to connect to the defined [Services](https://kubernetes.io/docs/concepts/services-networking/service/)

```bash
    minikube tunnel
	Status:
        machine: minikube
        pid: 66484
        route: 10.96.0.0/12 -> 192.168.99.101
        minikube: Running
        services: [immudb-ext]
    errors:
                minikube: no errors
```
The [immudb](https://www.codenotary.com/technologies/immudb/) webinterface is now available the ip and port displayed in the [Services](https://kubernetes.io/docs/concepts/services-networking/service/) information.
```bash
    kubectl get services
    NAME               TYPE           CLUSTER-IP       EXTERNAL-IP      PORT(S)          AGE
    immudb             ClusterIP      None             <none>           3322/TCP         3d14h
    immudb-ext         LoadBalancer   10.104.160.179   10.104.160.179   9090:30184/TCP   57m
    immudb-read        ClusterIP      10.107.246.97    <none>           3322/TCP         3d14h
    immudb-webserver   ClusterIP      10.108.213.230   <none>           8080/TCP         57m
    kubernetes         ClusterIP      10.96.0.1        <none>           443/TCP          3d17h
```

That means the [immudb](https://www.codenotary.com/technologies/immudb/) master webserver is found on 10.108.213.230:8080 and the replica webservers use 10.104.160.179:9090. Each server is individually taking care of their users. Logon to test the replication feature with the default [immudb](https://www.codenotary.com/technologies/immudb/) credentials (user: immudb, password immudb). Add demo data to the default database in the master webserver. The data should now be available in the replica too. Refresh the replica and query the database table. 
![immudb webinterface](/images/blog/webreplicaserver.jpg)
  

## Real-world challenges when applying the work in a large organization

It is one thing to set something up on your own computer with minikube with all the authorizations and without any policies. Unfortunately, when working in a managed environment, most challenges are quite different from what you would expect. First of all many colleagues don't like to share privileges or a whole lot of knowledge. You are basically given access to a black box. In this case a [Kubernetes](https://kubernetes.io/) cluster. The internal documentation is often incomplete, outdated, or even straight-up misleading. Questions that would take 30 seconds to be answered are being declined by saying that there is no time and they will look at it if a ticket or issue is being created. The main hiccups are due to customized policies and custom storage configurations. The lesson is that there is no way around understanding the stack yourself and that you have to look for people with the same goals as you. You can find those in the [immudb community](https://github.com/codenotary/immudb/blob/master/CONTRIBUTING.md).  Join the wonderful [immudb community](https://github.com/codenotary/immudb/blob/master/CONTRIBUTING.md)!

  

## Coming up next

In the next blog, we will integrate immudb into an enterprise process and enhance our [Kubernetes Application](https://kubernetes.io/docs/tasks/run-application/). We will also talk about how to present an innovative project because work can only be valued if it’s visible. It is the perceived performance that is most important.


