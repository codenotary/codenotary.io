<template>
	<i-modal
		class="partner-modal" size="lg"
		:value="value" @input="$emit('input', $event)"
	>
		<template slot="header">
			Become a partner
		</template>
		<partner-form />
	</i-modal>
</template>

<script>
import PartnerForm from '~/components/common/forms/PartnerForm';

export default {
	name: 'PartnerModal',

	components: {
		PartnerForm,
	},

	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
