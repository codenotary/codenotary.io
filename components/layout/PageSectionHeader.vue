<template>
    <header class="section-header">
        <h2>{{ title }}</h2>
        <div class="lead">
            <slot />
        </div>
    </header>
</template>

<style lang="scss">
@import '~@inkline/inkline/src/css/config/colors';
@import '../../assets/variables';

.section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 5rem;

    h2 {
        font-weight: bold;
        color: $color-primary;
    }
}
</style>

<script>
export default {
    name: 'PageSectionHeader',
    props: {
        title: {
            type: String,
            default: ''
        }
    }
}
</script>
