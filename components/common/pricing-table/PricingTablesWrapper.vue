<template>
    <div class="pricing-tables-wrapper">
        <slot />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.pricing-tables-wrapper {
    display: flex;
    flex: 1;

    @include breakpoint-down(lg) {
        flex-direction: column;

        .pricing-table {
            margin-bottom: $spacer;

            &:last-child {
                margin-bottom: 0;
            }
        }
    }
}
</style>
