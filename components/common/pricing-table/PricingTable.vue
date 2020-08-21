<template>
    <div class="pricing-table">
        <h4 class="title">{{ title }}</h4>
        <slot />
    </div>
</template>

<script>
export default {
    props: {
        title: {
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

    .title {
        margin: 0 0 2rem;
        text-align: center;
        font-weight: bold;
        color: $color-primary;
    }
}
</style>
