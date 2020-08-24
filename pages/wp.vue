<template>
    <div>
        <wordpress-iframe :path="path" />
    </div>
</template>

<script>
import WordpressIframe from '~/components/common/WordpressIframe';

export default {
    layout: 'iframe',
    data() {
        return {
            path: this.$route.name
        };
    },
    components: {
        WordpressIframe
    }
}
</script>

<style lang="scss"></style>
