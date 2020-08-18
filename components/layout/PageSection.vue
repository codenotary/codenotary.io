<template>
    <section class="section">
        <slot />
    </section>
</template>

<style lang="scss">
.section{
    padding-top: 5rem;
    padding-bottom: 5rem;
    width: 100%;
}
</style>

<script>
export default {
    name: 'PageSection'
}
</script>
