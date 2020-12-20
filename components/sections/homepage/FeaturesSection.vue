<template>
    <page-section id="features-section">
        <i-container>
            <i-row>
                <i-column xs="12" lg="4">
                    <Feature title="Immutable" image="/images/features/immutable.svg">
                        <ul class="list -unstyled">
                            <li>
                                Any kind of key-value. Clients can choose how to structure data.
                            </li>
                            <li>
                                <strong>No data mutation APIs</strong> are provided.
                            </li>
                            <li>
                                Data is never overwritten and is cryptographically verifiable.
                            </li>
                            <li>Adress regulatory compliance: SEC 17a-4(f), CFTC 1.31(d), FINRA, and other regulations.</li>
                        </ul>
                    </Feature>
                </i-column>
                <i-column xs="12" lg="4">
                    <Feature title="Auditable" image="/images/features/auditable.svg">
                        <ul class="list -unstyled">
                            <li>
                                Tamper-evident history system with <strong>cryptographic proof</strong>
                            </li>
                            <li>
                                Secure document retention and store sensitive information that is critical to litigation or business use in a tamper-proof state for the desired duration.
                            </li>
                            <li>If tampered, clients and auditors will notice that and take actions.</li>
                        </ul>
                    </Feature>
                </i-column>
                <i-column xs="12" lg="4">
                    <Feature title="Secure" image="/images/features/secure.svg">
                        <ul class="list -unstyled">
                            <li>
                                Data ownership is verifiable by clients and auditors.
                            </li>
                            <li>
                                Sign your data using <strong>Public-Key Cryptography</strong>.
                            </li>
                            <li>
                                Keys additions and revocations are immutably stored into the database.
                            </li>
                        </ul>
                    </Feature>
                </i-column>
            </i-row>
            <i-row v-if="true" class=" _margin-top-4">
                <i-column xs="12" sm="6" lg="3">
                    <Feature subtitle="Record data when it happens" image="/images/features/record_data.svg">
                        <p>Database changes, table history, data access, audit information.</p>
                    </Feature>
                </i-column>
                <i-column xs="12" sm="6" lg="3">
                    <Feature subtitle="Immediate data query" image="/images/features/immediate_query.svg">
                        <p>Extremely fast query engine and always ready to use.</p>
                    </Feature>
                </i-column>
                <i-column xs="12" sm="6" lg="3">
                    <Feature subtitle="Cryptographic verification built-in" image="/images/features/cryptographic_verifcation.svg">
                        <p>Every entry is verifiable using cryptographic proof.</p>
                    </Feature>
                </i-column>
                <i-column xs="12" sm="6" lg="3">
                    <Feature subtitle="Always available" image="/images/features/online.svg">
                        <p>No archive system, data is online and never out of reach.</p>
                    </Feature>
                </i-column>
            </i-row>
            <i-row class=" _margin-top-4">
                <i-column class="_text-center _text-muted">
                    <ul class="list -unstyled">
                        <li class="_margin-bottom-2">
                            <strong>Immutability</strong> by perimeter defense is proven not to work, <strong>Immutability</strong> needs to be embedded in the data structure!
                        </li>
                        <li>
                            Powered by
                            <a href="https://immudb.io">
                                <img width="40" src="/images/logo/icon/logo_icon_black.svg" alt="immudb">
                                <strong class="_text-black">immudb</strong>
                            </a>
                        </li>
                    </ul>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import Feature from '~/components/common/Feature';

export default {
    components: {
        Feature
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#features-section {
    background-color: #e9ecef;

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
