<template>
    <page-section id="ztc-about-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="What is the Zero-Trust Consortium?" block>
                        We are a consortium blockchain proudly and reliably processing hundreds of thousands of transactions daily. Our mission is to provide a trustable, independent, always-on, permissioned blockchain for the software industry with the following attributes:
                    </page-section-header>
                </i-column>
            </i-row>
            <i-row>
                <i-column lg="6">
                    <ul class="list -unstyled">
                        <li><fa icon="check-square" /> Decentralized governance and ownership</li>
                        <li><fa icon="check-square" /> Low latency</li>
                        <li><fa icon="check-square" /> Optimized for throughput</li>
                        <li><fa icon="check-square" /> Zero transactional costs</li>
                    </ul>
                </i-column>
                <i-column lg="6">
                    <ul class="list -unstyled">
                        <li><fa icon="check-square" /> Infinite hash storage</li>
                        <li><fa icon="check-square" /> No associated crypto-currency</li>
                        <li><fa icon="check-square" /> Globally distributed transparency</li>
                        <li><fa icon="check-square" /> Always on</li>
                    </ul>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-about-section {
    text-align: left;
    background-color: $color-gray-10;

    h2 {
        text-align: center;
    }

    .section-header {
        text-align: left;
        margin-bottom: 3rem;
    }

    .list {
        font-size: 1.2rem;
        margin-bottom: 0;

        .svg-inline--fa {
            margin-right: 0.5rem;
            color: $color-success;
        }
    }
}
</style>
