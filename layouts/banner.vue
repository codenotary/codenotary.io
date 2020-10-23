<template>
    <section class="banner-layout" :class="{ scrolled }">
        <Banner id="banner" :scrolled="scrolled" />
        <Navbar id="navbar" />
        <div id="content">
            <nuxt/>
        </div>
        <Footer />
        <Copyright />
    </section>
</template>

<script>
import Banner from '~/components/layout/Banner';
import Navbar from '~/components/layout/Navbar';
import Footer from '~/components/layout/Footer';
import Copyright from '~/components/layout/Copyright';

const SCROLL_THRESHOLD = 200;

export default {
    components: {
        Banner,
        Navbar,
        Footer,
        Copyright
    },

    data: () => ({
        scrolled: false
    }),

    beforeDestroy () {
        this.scrolled = null;
    },

    mounted () {
        window.addEventListener('scroll', this.handleScroll);
    },

    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll (event) {
            const window = event.path[1];
            if (window) {
                const offsetY = window.pageYOffset;
                this.scrolled = offsetY >= SCROLL_THRESHOLD;
            }
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

$navbar-height: 80;
$banner-height: 60;
$banner-scrolled-height: 40;

section.banner-layout {
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
        transition: all .15s ease-out;
    }

    #navbar {
        position: fixed;
        top: #{$banner-height}px !important;
        left: 0;
        width: 100%;
        z-index: 999;
    }

    #content {
        margin-top: #{$banner-height + $navbar-height}px  !important;
    }

    &.scrolled {

        #banner {
            height: #{$banner-scrolled-height}px  !important;
        }

        #navbar {
            top: #{$banner-scrolled-height}px  !important;
        }

        #content {
            margin-top: #{$banner-scrolled-height + $navbar-height}px;
        }
    }
}
</style>
