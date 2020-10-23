<template>
    <i-modal class="start-trial-modal" size="lg" :value="value" @input="$emit('input', $event)">
        <template slot="header">Start your trial</template>
        <label class="_margin-bottom-2">No excuses - 30 day free!</label>
        <start-trial-form />
    </i-modal>
</template>

<script>
import StartTrialForm from '~/components/common/forms/StartTrialForm';

export default {
    name: 'StartTrialModal',
    components: {
        StartTrialForm
    },
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>
