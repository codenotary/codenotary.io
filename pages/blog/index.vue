<template>
    <div>
        <wordpress-iframe path="blog" />
    </div>
</template>

<script>
import { title } from '~/helpers/meta';
import WordpressIframe from '~/components/common/WordpressIframe';
import IframeView from '~/components/layout/IframeView';

export default {
    extends: IframeView,
    head() {
        return {
            title: title('Blog')
        };
    },
    layout: 'iframe',
    components: {
        WordpressIframe
    }
}
</script>

<style lang="scss"></style>
