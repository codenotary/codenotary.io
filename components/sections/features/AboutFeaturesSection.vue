<template>
    <page-section id="about-features-section">
        <i-container>
            <i-row>
                <i-column lg="4">
                    <Feature title="Who are we?">
                        vChain is a young software firm with headquarters in Houston, Texas, and a team of engineers, researcher, analysts, marketers, managers, and customer satisfaction heroes spread out across the globe.
                    </Feature>
                </i-column>
                <i-column lg="4">
                    <Feature title="What do we do?">
                        We create Open Source solutions to easily record sensitive data and processes in a tamperproof and immutable way, to ensure compliance with industry security standards and regulations like PCI and GDPR and to bring back trust and integrity to the digital world.
                    </Feature>
                </i-column>
                <i-column lg="4">
                    <Feature title="How do we do it?">
                        Our tamperproof solution CodeNotary Ledger Compliance&reg; is processing millions of transactions per second reliably, on-premise or in the cloud, and with cryptographic verification. It is based on our Open Source lightweight, high-speed immutable database <nuxt-link :to="{ name: 'technologies-immudb' }">immudb</nuxt-link>.
                    </Feature>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import Feature from '~/components/common/Feature';
import PageSection from '~/components/layout/PageSection';

export default {
    components: {
        Feature,
        PageSection
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#about-features-section {
    background-color: #e9ecef;

    .feature {
        text-align: left;
    }

    .column {
        @include breakpoint-down(lg) {
            .feature {
                margin-bottom: $spacer * 2;
            }

            &:last-child .feature {
                margin-bottom: 0;
            }
        }
    }
}
</style>
