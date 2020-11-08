<template>
    <page-section id="features-section">
        <i-container>
            <i-row>
                <i-column lg="4">
                    <Feature title="Immutable"
                             image="/images/features/immutable.svg">
                        <ul class="list -unstyled">
                            <li>
                                Any kind of key-value. Clients can choose how to structure data.
                            </li>
                            <li>
                                <strong>No data mutation APIs</strong> are provided.
                            </li>
                            <li>
                                Data is never overwritten, so multiple versions of the same key co-exist and are verifiable.
                            </li>
                        </ul>
                    </Feature>
                </i-column>
                <i-column lg="4">
                    <Feature title="Auditable"
                             image="/images/features/auditable.svg">
                        <ul class="list -unstyled">
                            <li>
                                Tamper-evident history system.
                            </li>
                            <li>
                                Clients and auditors want <strong>cryptographic proof</strong> of data inclusion and
                                historical consistency in real time.
                            </li>
                            <li>If tampered, clients and auditors will notice that and take actions.</li>
                        </ul>
                    </Feature>
                </i-column>
                <i-column lg="4">
                    <Feature title="Secure"
                             image="/images/features/secure.svg">
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
            <i-row>
                <i-column class="_text-center _text-muted _margin-top-4">
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
