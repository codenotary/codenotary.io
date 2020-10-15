<template>
    <page-section class="footer">
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
                            <a href="https://github.com/vchain-us">
                                <fa :icon="['fab', 'github-square']" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/vChain_US">
                                <fa :icon="['fab', 'twitter-square']" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/VChain-Inc-1991995727783433/">
                                <fa :icon="['fab', 'facebook-square']" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/company/codenotary/">
                                <fa :icon="['fab', 'linkedin']" />
                            </a>
                        </li>
                    </ul>
                </i-column>
                <i-column lg="3" sm="6">
                    <h4>Technologies</h4>
                    <ul class="list -unstyled">
                        <li>
                            <router-link :to="{ name: 'technologies-immudb' }">
                                immudb
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'technologies-ci-cd' }">
                                Immutability for CI/CD
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'technologies-ztc' }">
                                ZTC
                            </router-link>
                        </li>
                    </ul>
                </i-column>
                <i-column lg="3" sm="6">
                    <h4>Company</h4>
                    <ul class="list -unstyled">
                        <li>
                            <router-link :to="{ name: 'about' }">About us</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'careers' }">Careers</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'privacy-statement' }">Privacy Statement</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'terms-of-service' }">Terms of Service</router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'contact' }">Contact us</router-link>
                        </li>
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
        color: $color-gray-50;
    }

    a {
        color: $color-primary-lightest;

        &.-active,
        &:hover,
        &:active {
            color: $color-gray-10;
        }
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
