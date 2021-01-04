<template>
	<i-modal
		class="contact-modal" size="lg"
		:value="value" @input="$emit('input', $event)"
	>
		<template slot="header">
			Contact us
		</template>
		<contact-form />
	</i-modal>
</template>
<script>
import ContactForm from '~/components/common/forms/ContactForm';

export default {
	name: 'ContactModal',
	components: { ContactForm },
	props: {
		value: {
			type: Boolean,
			default: false,
		},
	},
};
</script>
