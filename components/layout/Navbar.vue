<template>
    <i-navbar>
        <i-navbar-brand :to="{ name: 'index' }">
            <img class="logo" src="/images/logo.svg" alt="CodeNotary">
        </i-navbar-brand>
        <i-navbar-items class="_justify-content-start">
            <i-nav>
                <i-nav-item :to="{ name: 'index' }">Home</i-nav-item>
                <i-nav-item :to="{ name: 'blog' }">Blog</i-nav-item>
                <i-dropdown trigger="hover">
                    <i-nav-item>Products</i-nav-item>
                    <i-dropdown-menu>
                        <i-dropdown-item href="">CodeNotary Ledger Compliance</i-dropdown-item>
                    </i-dropdown-menu>
                </i-dropdown>
                <i-dropdown trigger="hover">
                    <i-nav-item>Technologies</i-nav-item>
                    <i-dropdown-menu>
                        <i-dropdown-item href="https://immudb.io">immudb</i-dropdown-item>
                        <i-dropdown-item :to="{ name: 'cicd' }">Immutability for CI/CD</i-dropdown-item>
                        <i-dropdown-item href="https://zerotrustconsortium.org/">Zero-Trust Consortium</i-dropdown-item>
                    </i-dropdown-menu>
                </i-dropdown>
                <i-nav-item :to="{ name: 'about' }">About us</i-nav-item>
                <i-nav-item :to="{ name: 'partners' }">Partners</i-nav-item>
                <i-nav-item :to="{ name: 'contact' }">Contact us</i-nav-item>
            </i-nav>
            <!--i-nav>
                <i-button variant="primary">Sign up</i-button>
            </i-nav-->
        </i-navbar-items>
    </i-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

.navbar {
    .logo {
        height: 40px;
        width: auto;
        margin-right: 8px;
    }

    &.-light {
        border-bottom: 1px solid $border-color-light;
        background: white !important;
    }
}
</style>
