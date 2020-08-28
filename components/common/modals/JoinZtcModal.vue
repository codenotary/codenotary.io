<template>
    <i-modal class="ztc-modal" size="lg" :value="value" @input="$emit('input', $event)">
        <template slot="header">Join the Consortium</template>
        <join-ztc-form />
    </i-modal>
</template>

<script>
import JoinZtcForm from '~/components/common/forms/JoinZtcForm';

export default {
    name: 'JoinZtcModal',
    components: {
        JoinZtcForm
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>
