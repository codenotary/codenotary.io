<template>
    <page-section id="features-section">
        <i-container>
            <i-row>
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
                            Data is never overwritten, so multiple versions of the same key co-exist and are verfiable.
                        </li>
                    </ul>
                </Feature>
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
                            Keys additions and revocations is immutably stored into the database.
                        </li>
                    </ul>
                </Feature>
            </i-row>
            <i-row>
                <i-column class="_text-center _text-muted _margin-top-4">
                    Powered by
                    <a href="https://immudb.io">
                        <img width="28" src="/images/immudb-logo.svg" alt="immudb">
                        <strong class="_text-black">immudb</strong>
                    </a>
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
#features-section {
    background-color: #e9ecef;
}
</style>
