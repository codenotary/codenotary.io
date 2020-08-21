<template>
    <div>
        <wordpress-iframe path="" domain="zerotrustconsortium.org" />
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
