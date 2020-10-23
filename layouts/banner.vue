<template>
    <div>
        <Banner id="banner" />
        <Navbar id="navbar" />
        <div id="content">
            <nuxt/>
        </div>
        <Footer />
        <Copyright />
    </div>
</template>

<script>
import Banner from '~/components/layout/Banner';
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import Copyright from '~/components/layout/Copyright';

export default {
    components: {
        Banner,
        Navbar,
        Footer,
        Copyright
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

$navbar-height: 80;
$banner-height: 60;

#banner {
    position: fixed;
    display: flex;
    flex-direction: row;
    height: #{$banner-height}px;
    padding: $spacer-1;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
}

#navbar {
    position: fixed;
    top: #{$banner-height}px !important;
    left: 0;
    width: 100%;
    z-index: 999;
}

#content {
    margin-top: #{$banner-height + $navbar-height}px;
}
</style>
