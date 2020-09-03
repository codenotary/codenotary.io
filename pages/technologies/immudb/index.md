<page-section id="easy-setup-section">
<i-container>
<i-row>
    <i-column>
        <page-section-header title="Easy setup">
            Build Docker images based on the Dockerfiles in the GitHub repository
            for the most common architectures or use the prebuild ones on Dockerhub for Linux.
        </page-section-header>
    </i-column>
</i-row>
<i-row>
<i-column>

~~~bash
docker run -it -d -p 3322:3322 -p 9497:9497 --name immudb codenotary/immudb:latest
~~~

</i-column>
</i-row>
</i-container>    
</page-section>

<page-section id="performance-section">
<page-section-header title="Unmatched performance">
    immudb has been designed with read and write performance in mind while being tamper-proof. The benchmarks we've done show great results.
</page-section-header>
<i-container>
<i-row>
<i-column md="6">

~~~bash
sequential write
---
Concurrency: 128
Iterations: 1000000
Elapsed t.: 3.06 sec
Throughput: 326626 tx/sec
~~~

</i-column>
<i-column md="6">
<div class="_margin-top-sm-1 _margin-top-xs-1">

~~~bash
batch write (async commit)
---
Concurrency: 16
Iterations: 1000000
Elapsed t.: 0.36 sec
Throughput: 2772181 tx/sec
~~~

</div>
</i-column>
</i-row>
<i-row>
<i-column>
    <div class="_text-center _padding-top-1">
        <ul class="list -inline _text-muted _font-size-sm">
            <li>4 cores</li>
            <li>&middot;</li>
            <li>16GB memory</li>
            <li>&middot;</li>
            <li>single SSD drive</li>
        </ul>
    </div>
</i-column>
</i-row>
<i-row>
<i-column>
    <page-section-header id="qldb-comparison-section">
        <template #title>
        <fa icon="bolt" class="_text-primary"></fa>
        </template>
        immudb is often compared to Amazon QLDB. We compared the performance using a simple demo application to write data (without using any unfair optimization).
    </page-section-header>
</i-column>
</i-row>
<i-row>
    <i-column md="6">
        <img class="image -responsive" src="/images/immudb/benchmark/throughput_read.png" alt="Immudb - Throughput read" />
    </i-column>
    <i-column md="6">
        <img class="image -responsive" src="/images/immudb/benchmark/throughput_write.png" alt="Immudb - Throughput write" />
    </i-column>
</i-row>
<i-row>
    <i-column md="6">
        <img class="image -responsive" src="/images/immudb/benchmark/exectime.png" alt="Immudb - Written records per ms" />
    </i-column>
    <i-column md="6">
        <img class="image -responsive" src="/images/immudb/benchmark/query_bm.png" alt="Immudb - Queried records per ms" />
    </i-column>
</i-row>
</i-container>
</page-section>

<page-section id="video-section">
<i-container>
<i-row>
<i-column>
<div class="section-center">

## Why immudb?
immudb is a ledger database that has been developed with performance, scalability and versatility in mind. The user feedback has shown that they love the very high throughput and being able to store hashes as well as data. They see it as a great alternative to using a blockchain or ledger service.
        
</div>
</i-column>  
</i-row>
<i-row>
<i-column>        
    <div class="video-features">
        <div class="video">
            <div class="_embed _embed-16by9">
                <iframe width="560" height="315" frameborder="0"
                        src="https://www.youtube.com/embed/rQ4iZAM14m0?controls=0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
        </div>
        <ul>
            <li>
                <fa icon="check-circle"></fa>
                Easy setup
            </li>
            <li>
                <fa icon="check-circle"></fa>
                Fast and reliable immutable database
            </li>
            <li>
                <fa icon="check-circle"></fa>
                Secure REST API gateway
            </li>
            <li>
                <fa icon="check-circle"></fa>
                Powerful, easy to use admin
            </li>
            <li>
                <fa icon="check-circle"></fa>
                Open source
            </li>
        </ul>
    </div>
</i-column>
</i-row>
</i-container>
</page-section>


<!-- TERMINAL SECTIONS START -->
<page-section id="code-examples-section">
<i-container>
<!-- TERMINAL SECTION 1 START -->
<i-row>
<i-column lg="5">
<img src="/images/immudb/features/real-world.svg" alt="Immudb - Made for the real world" />

## Very high throughput, immutable database with cryptographic verification
immudb is an indispensable asset when it comes to tamper-proof data:
- Store every update to sensitive database fields (credit card or bank account data) of an existing application database
- Store CI/CD recipes to build and deployment pipelines
- Store public certificates
- Store tamper-proof log streams (i. e. audit logs) 

</i-column>
<i-column lg="7">
<terminal title="immudb">

~~~go
// Store any key, value auditproof and tamperproof
key2, value2 := []byte("myClient"), []byte("Visa 6679499384784022 11/23")
verifiedIndex, err := client.SafeSet(ctx, key2, value2)
if err != nil {
   exit(err)
}
fmt.Println("   SafeSet - add and verify entry:")
printItem(key2, value2, verifiedIndex)
~~~

</terminal>
</i-column>
</i-row>
<!-- TERMINAL SECTION 1 END -->
<!-- TERMINAL SECTION 2 START -->
<i-row>
<i-column lg="7">
<terminal title="immudb">

~~~bash
# install immudb service
./immuadmin service immudb install

# check current immudb service status
./immuadmin service immudb status

# install immugw service
./immuadmin service immugw install

# check immugw service
./immuadmin service immugw status
~~~

</terminal>
</i-column>
<i-column lg="5">
<img src="/images/immudb/features/intuitive-setup4.svg" alt="immudb - intuitive setup" />

## Intuitive setup 
immudb is built with simplicity in mind:
- Use the prebuilt binaries or Docker container images for a fast start
- Install, manage and run immudb and immugw as services (use 'immuadmin service')
- Simple make command integration if you want to build the applications yourself
- RESTful interfaces and easy to use clients
- Combine with any existing application 

</i-column>
</i-row>
<!-- TERMINAL SECTION 2 END -->
<!-- TERMINAL SECTION 3 START -->
<i-row>
<i-column lg="5">
<img src="/images/immudb/features/consistency-check2.svg" alt="Immudb - Made for the real world" />

## Consistency check built-in
immudb architecture has built-in verification and audit functionality:
- immudb server is continuously checking disk/memory consistency 
- immugw is continuously checking the data consistency and integrity
- immuclient has built-in data consistency and integrity checks
- API's provide data ownership proof, verification and integrity functions

</i-column>
<i-column lg="7">
<terminal title="immudb">

~~~go
// built-in verification for every entry
verifiedItem, err := client.SafeGet(ctx, key2)
if err != nil {
    exit(err)
}
fmt.Println("   SafeGet - fetch and verify entry:")
printItem(nil, nil, verifiedItem)
~~~

</terminal>
</i-column>
</i-row>
<!-- TERMINAL SECTION 3 END -->
</i-container>
</page-section>
<!-- TERMINAL SECTIONS END -->

<hr/>

<page-section id="comingsoon-section">
<i-container>
<i-row>
<i-column>
    <img class="image -responsive _margin-bottom-4" width="400" src="/images/immudb/rocket.jpg" alt="Coming Soon" />
    <page-section-header title="Coming soon">
        We're working hard every day to improve immudb and everything it has to offer. Here are some of the features we're planning to release:
    </page-section-header>
</i-column>
</i-row>
<i-row>
<i-column>
    <div class="_text-center lead  _font-weight-semibold">
        <ul class="list -inline">
            <li>rsyslog support</li>
            <li class="_text-muted">&middot;</li>
            <li>Log4j integration</li>
            <li class="_text-muted">&middot;</li>
            <li>PostgreSQL listener</li>
            <li class="_text-muted">&middot;</li>
            <li>Managed ledger DBMS</li>
        </ul>
    </div>
</i-column>
</i-row>
</i-container>
</page-section>

<hr class="_margin-0"/>

<page-section id="usedby-section">
    <i-container>
        <i-row>
            <i-column>
                <a href="https://opvizor.com" target="_blank">
                    <img src="/images/immudb/logos/opvizor.png" alt="Opvizor" />
                </a>
                <a href="https://www.ta.capital/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/tacapital.png" alt="TA Captial" />
                </a>
                <a href="https://www.esoftthings.com/en/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/esoftthings.png" alt="eSoftThings" />
                </a>
                <a href="https://www.greentube.com/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/greentube.svg" alt="GreenTube" />
                </a>
                <a href="https://www.tinaba.bancaprofilo.it/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/tinaba.png" alt="Tinaba" />
                </a>
                <a rel="nofollow">
                    <img src="/images/immudb/logos/la-logo.png" alt="Lord Abbett" />
                </a>
                <a href="https://naveum.ch/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/logo_naveum.svg" alt="Naveum" />
                </a>
                <a href="https://truecore.ch/" target="_blank" rel="nofollow">
                    <img src="/images/immudb/logos/logo_truecore.svg" alt="TrueCore" />
                </a>
                <a rel="nofollow">
                    <img src="/images/immudb/logos/rs-logo.svg" alt="TrueCore" />
                </a>
            </i-column>
        </i-row>
    </i-container>
</page-section>

<hr class="_margin-bottom-0" />

<page-section id="code-tabs-section">
<page-section-header title="By developers, for developers">
    We have carefully designed immudb to be the one-stop intuitive immutable database solution, simple to write and simple to use.
</page-section-header>
<i-container>
<i-row>
<i-column>
<i-tabs custom>
<i-tab title="Connect to immudb">

~~~go
client, err := immuclient.NewImmuClient(immuclient.DefaultOptions())
 if err != nil {
	exit(err)
 }
ctx := context.Background()
~~~

</i-tab>
<i-tab title="Store verified items">

~~~go
key2, value2 := []byte("client:Mr. Archibald Beatty"), []byte("Visa 6679499384784022 11/23")
verifiedIndex, err := client.SafeSet(ctx, key2, value2)
if err != nil {
	exit(err)
}
fmt.Println("   SafeSet - add and verify entry:")
printItem(key2, value2, verifiedIndex)
~~~

</i-tab>
<i-tab title="Get verified items">

~~~go
verifiedItem, err := client.SafeGet(ctx, key2)
if err != nil {
	exit(err)
}
fmt.Println("   SafeGet - fetch and verify entry:")
printItem(nil, nil, verifiedItem)
~~~

</i-tab>
    </i-tabs>
</i-column>
</i-row>
</i-container>
</page-section>

<hr class="_margin-top-0" />

<page-section id="get-started-end-section">
<page-section-header title="The open-source immutable database">
    Run immudb easily on Linux, FreeBSD, Microsoft Windows, and macOS, along with other systems derived from them, such as Kubernetes and Docker.
</page-section-header>
<i-container>
<i-row>
<i-column>
    <i-button variant="primary" size="lg" href="https://docs.immudb.io">Get started today</i-button>
</i-column>
</i-row>
</i-container>
</page-section>
