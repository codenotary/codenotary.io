<template>
    <section class="banner _justify-content-center">
        <div class="_display-flex _align-items-center">
            <span class="lead">
                vChain announces acquisition of Opvizor! Now offers CodeNotary for DevOps and Ops.
            </span>
        </div>
        <div class="_display-flex _align-items-center">
            <i-button class="_margin-left-2" variant="white" outline size="sm" :to="{ name: 'products-lc-for-ops' }">Learn more</i-button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Banner'
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';
@import '~@inkline/inkline/src/css/mixins';

section.banner {
    background-color: $color-warning;

    &.-light {
        border-bottom: 1px solid $border-color-light;
        background: white !important;
    }

    span,
    .button {
        font-size: 90% !important;
        color: $color-gray-10;
    }

    .button {
        &:hover,
        &:active,
        &.nuxt-link-active {
                color: $color-gray-30 !important;
        }

        &:hover {
            background: rgba(255, 255, 255, .15) !important;
        }

        &:active,
        &.nuxt-link-active {
            background: rgba(255, 255, 255, .05) !important;
        }
    }
}
</style>
