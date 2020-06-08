<template>
    <i-navbar>
        <i-navbar-brand :to="{ name: 'index' }">
            <img id="logo" src="~/assets/images/logo1.png" alt="logo"/>
            <strong id="logo-name">opvizor</strong>
        </i-navbar-brand>
        <i-navbar-items class="_justify-content-end">
            <i-nav>
                <i-nav-item :to="{ name: 'index' }">How it works</i-nav-item>
                <i-nav-item :to="{ name: 'about' }">Pricing</i-nav-item>
                <i-nav-item :to="{ name: 'contact' }">Customers</i-nav-item>
                <i-dropdown trigger="hover">
                    <i-nav-item>About us</i-nav-item>
                    <i-dropdown-menu>
                        <i-dropdown-item href="">Opvizor team</i-dropdown-item>
                        <i-dropdown-item href="">Partner and reseller</i-dropdown-item>
                        <i-dropdown-item href="">Technology partner</i-dropdown-item>
                    </i-dropdown-menu>
                </i-dropdown>
                <i-nav-item :to="{ name: 'contact' }">Contact us</i-nav-item>
            </i-nav>
            <i-nav>
                <i-button variant="primary">Start free trial</i-button>
            </i-nav>
        </i-navbar-items>
    </i-navbar>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss">
#logo {
    height: 40px;
    width: auto;
    margin-right: 8px;
}
#logo-name {
    font-size: large;
}
</style>
