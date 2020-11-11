<template>
    <page-section id="ztc-consortium-blockchain-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="The Consortium Blockchain" block>
                        The Zero-Trust Consortium does not use the public Etherum Blockchain because of the current limitations in scalability due to high latency and very high costs involved to store data and run distributed applications.
                    </page-section-header>

                    <p>
                        The Zero-Trust Consortium runs a worldwide, distributed Ethereum blockchain using the Parity project. Built for mission-critical use service providers, and exchanges that need fast synchronization and maximum uptime.
                    </p>

                    <p>
                        Parity Ethereum provides the core infrastructure essential for speedy and reliable services.
                    </p>

                    <ul class="list -unstyled">
                        <li><fa icon="check-square" /> Clean, modular codebase for easy customisation</li>
                        <li><fa icon="check-square" /> Advanced CLI-based client</li>
                        <li><fa icon="check-square" /> Minimal memory and storage footprint</li>
                        <li><fa icon="check-square" /> Synchronize in hours, not days with Warp Sync</li>
                        <li><fa icon="check-square" /> Modular for light integration into your service or product</li>
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

#ztc-consortium-blockchain-section {
    text-align: left;
    background-color: $color-gray-10;

    h2 {
        text-align: center;
    }

    .section-header {
        text-align: left;
        margin-bottom: 1rem;
    }

    .list {
        font-size: 1.2rem;
        margin-bottom: 0;
        padding-left: 1.2rem;

        .svg-inline--fa {
            margin-right: 0.5rem;
            color: $color-success;
        }
    }
}
</style>
