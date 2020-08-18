<template>
    <PageSection class="footer">
        <i-container>
            <i-row>
                <i-column lg="6">
                    <img class="logo" src="/images/logo-white.svg" alt="CodeNotary">
                    <p>
                        Immutable notarization for all your sensitive data. On-premise or in the cloud, easy to use
                        tamperproof storage with cryptographic verification, processing millions of transactions a
                        second.
                    </p>
                    <ul class="social-links list -inline">
                        <li>
                            <a href="https://facebook.com/codenotary">
                                <fa :icon="['fab', 'facebook-square']" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/codenotary">
                                <fa :icon="['fab', 'twitter-square']" />
                            </a>
                        </li>
                    </ul>
                </i-column>
                <i-column lg="3">
                    <h4>Technologies</h4>
                    <ul class="list -unstyled">
                        <li>
                            <a href="https://immudb.io">immudb</a>
                        </li>
                        <li>
                            <router-link :to="{ name: 'cicd' }">Immutability for CI/CD</router-link>
                        </li>
                        <li>
                            <a href="https://zerotrustconsortium.org">ZTC</a>
                        </li>
                    </ul>
                </i-column>
                <i-column lg="3">
                    <h4>Company</h4>
                    <ul class="list -unstyled">
                        <li>
                            <router-link :to="{ name: 'about' }">About us</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'partners' }">Partners</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contact' }">Contact us</router-link>
                        </li>
                    </ul>
                </i-column>
            </i-row>
        </i-container>
    </PageSection>
</template>

<script>
import PageSection from '~/components/layout/PageSection';

export default {
    components: {
        PageSection
    }
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config/colors';
@import '../../assets/variables';

.footer {
    background: $color-gray-90;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: $color-white;
        margin-top: 0;
    }

    p {
        color: $color-gray-60;
    }

    a {
        color: $color-primary-light;
    }

    .logo {
        height: 40px;
        margin-top: -10px;
        width: auto;
    }

    .social-links {
        font-size: 32px;
    }
}
</style>
