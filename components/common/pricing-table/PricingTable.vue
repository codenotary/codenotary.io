<template>
    <div class="pricing-table">
        <h4 class="title">{{ title }}</h4>
        <div v-if="subtitle === '&nbsp;'" class="_margin-bottom-4" />
        <div v-else class="subtitle">
            {{ subtitle }}
        </div>
        <div class="body">
            <div class="rows line">
                <slot />
            </div>
            <div class="rows flex _justify-content-center">
                <slot name="short-row" />
            </div>
            <div class="price-wrapper">
                <slot name="price" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        subtitle: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.pricing-table {
    flex: 1;
    background: white;
    border: 1px solid $border-color-light;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;

    .title {
        margin: 0 0;
        text-align: center;
        font-weight: bold;
        color: $color-primary;
    }

    .subtitle {
        color: $text-muted;
        text-align: center;
        margin: 0.5rem 0 2rem;
    }

    .body {
        flex: 1;
        display: flex;
        flex-direction: column;
        // flex-direction: row;
        // flex-wrap: wrap;
        justify-content: space-between;
    }

    .price-wrapper {
        text-align: center;
        margin-top: 2rem;

        .price {
            font-weight: bold;
            color: $color-primary;
            font-size: 32px;
        }
    }
}
</style>
