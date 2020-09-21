<template>
    <div class="pricing-table-row" :class="{'_width-100': fill}">
        <fa class="icon" icon="check-square" /> <slot />
    </div>
</template>

<script>
export default {
    props: {
        fill: { type: Boolean, default: false }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.pricing-table {
    .rows {
        .pricing-table-row {
            padding: 1rem 0;

            &:last-child {
                border-bottom: 0;
            }

            .icon {
                margin-right: 1rem;
                color: $color-green;
            }

        }

        &.flex {
            display: flex;
            flex-wrap: wrap;
        }

        &.line {
            .pricing-table-row {
                border-bottom: 1px solid $border-color-light;
            }
        }
    }
}
</style>
