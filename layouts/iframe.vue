<template>
    <div>
        <Navbar id="navbar" />
        <div id="content">
            <nuxt/>
        </div>
    </div>
</template>

<script>
import Navbar from '~/components/layout/Navbar';

export default {
    components: {
        Navbar
    }
}
</script>

<style lang="scss">
$navbar-height: 80px;

#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    height: $navbar-height;
}

#content {
    margin-top: $navbar-height;
}
</style>
