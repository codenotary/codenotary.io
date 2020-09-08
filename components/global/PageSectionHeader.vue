<template>
    <header class="section-header" :class="classes">
        <slot name="title">
            <h2 :is="tag">{{ title }}</h2>
        </slot>
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
    max-width: 760px;
    margin: 0 auto 6rem;

    h1,
    h2,
    h3 {
        margin-top: 0;
        font-weight: bold;
        color: $color-primary;
    }

    &.-block {
        max-width: none;
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
        },
        tag: {
            type: String,
            default: 'h2'
        },
        block: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return {
                '-block': this.block
            }
        }
    }
}
</script>
