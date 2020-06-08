<template>
    <i-navbar class="contact-bar" size="sm" variant="dark">
        <i-navbar-items class="_justify-content-end">
            <i-nav>
                <i-nav-item :to="{ name: 'index' }">Blog</i-nav-item>
                <i-nav-item :to="{ name: 'about' }">Demo</i-nav-item>
                <i-dropdown trigger="hover">
                    <i-nav-item>Tools</i-nav-item>
                    <i-dropdown-menu variant="dark">
                        <i-dropdown-item href="">Snapwatcher</i-dropdown-item>
                    </i-dropdown-menu>
                </i-dropdown>
            </i-nav>
        </i-navbar-items>
    </i-navbar>
</template>

<script>
export default {
    name: 'Contactbar'
}
</script>

<style lang="scss">
.contact-bar {
    height: 40px;
    .item {
        font-size: small;
    }
    z-index: 99
}
</style>



