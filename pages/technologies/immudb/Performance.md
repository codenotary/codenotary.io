<page-section id="immudb-performance-section">
<page-section-header title="Unmatched performance" class="_padding-bottom-2 _display-flex _justify-content-center">
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
