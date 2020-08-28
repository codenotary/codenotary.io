<template>
    <div>
        <wordpress-iframe :path="post" />
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
    data() {
        return {
            post: this.$route.params.post
        };
    },
    layout: 'iframe',
    components: {
        WordpressIframe
    }
}
</script>

<style lang="scss"></style>
