<template>
    <section class="section">
        <slot>
        </slot>
    </section>
</template>

<style lang="scss">
.section{
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
}
</style>

<script>
    export default {
        name: 'PageSection'
    }
</script>
