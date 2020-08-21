<template>
    <div class="pricing-table-row">
        <fa class="icon" icon="check-square" /> <slot />
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.pricing-table {
    .pricing-table-row {
        border-bottom: 1px solid $border-color-light;
        padding: 1rem 0;

        &:last-child {
            border-bottom: 0;
        }

        .icon {
            margin-right: 1rem;
            color: $color-green;
        }
    }
}
</style>
