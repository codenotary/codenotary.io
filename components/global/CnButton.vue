<template>
	<i-button
		:size="size"
		:outline="outline"
		:variant="variant"
		:href="href"
		:target="href ? '_blank' : null"
		:rel="href ? 'nofollow' : null"
		:to="to"
		@click="$emit('click', $event)"
	>
		<slot />
	</i-button>
</template>
<script>
export default {
	name: 'CnButton',
	props: {
		type: {
			type: String,
			default: 'dark',
		},
		href: {
			type: String,
			default: null,
		},
		outline: {
			type: Boolean,
		},
		to: {
			type: Object,
			default: null,
		},
		size: {
			type: String,
			default: 'lg',
		},
	},
	computed: {
		variant() {
			return this.type;
			// return 'dark';
		},
	},
};
</script>
