<template>
    <div>
        <wordpress-iframe path="documentation" />
    </div>
</template>

<script>
import WordpressIframe from '~/components/common/WordpressIframe';
import IframeView from '~/components/layout/IframeView';

export default {
    extends: IframeView,
    layout: 'iframe',
    components: {
        WordpressIframe
    }
}
</script>

<style lang="scss"></style>
