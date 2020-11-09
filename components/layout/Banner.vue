<template>
    <section class="banner _justify-content-center">
        <div class="_display-flex _align-items-center">
            <fa icon="chart-line" class="_margin-top-1-4 _margin-right-1" />
            <span class="lead _font-weight-bold">
                vChain announces acquisition of Opvizor! Now offers CodeNotary for DevOps and Ops.
            </span>
        </div>
        <div class="_display-flex _align-items-center">
            <i-button class="_margin-left-2 _font-weight-bold" variant="dark" outline size="sm" :to="{ name: 'products-ledger-compliance-metrics-and-logs' }">Learn more</i-button>
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

    span,
    .button {
        font-size: 90% !important;
        border-color: rgba(0, 0, 0, 0.35);
        color: rgba(0, 0, 0, 0.7);
    }

    .button {
        &:hover,
        &:active,
        &.nuxt-link-active {
                border-color: rgba(0, 0, 0, 0.55) !important;
                color: rgba(0, 0, 0, 0.9) !important;
        }

        &:hover {
            border-width: 2px !important;
            background: rgba(255, 255, 255, .15) !important;
        }

        &:active,
        &.nuxt-link-active {
            border-width: 2px !important;
            border-color: rgba(0, 0, 0, 0.55) !important;
            background: rgba(255, 255, 255, .05) !important;
        }
    }
}
</style>
