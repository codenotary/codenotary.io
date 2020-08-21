<template>
    <div>
        <wordpress-iframe path="blog" />
    </div>
</template>

<script>
import WordpressIframe from '~/components/common/WordpressIframe';

export default {
    layout: 'iframe',
    components: {
        WordpressIframe
    }
}
</script>

<style lang="scss"></style>
