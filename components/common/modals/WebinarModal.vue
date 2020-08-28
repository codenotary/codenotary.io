<template>
    <i-modal class="webinar-modal" size="lg" :value="value" @input="$emit('input', $event)">
        <template slot="header">Schedule a Webinar</template>
        <webinar-form />
    </i-modal>
</template>

<script>
import WebinarForm from '~/components/common/forms/WebinarForm';

export default {
    name: 'WebinarModal',
    components: {
        WebinarForm
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>
