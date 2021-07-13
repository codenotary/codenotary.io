<template>
	<section
		:class="`section ${ getVariant } _padding-top-${ top } _padding-bottom-${bottom}`"
	>
		<slot />
	</section>
</template>

<script>
const VARIANTS = [
	'standard',
	'white',
	'blue',
	'light-blue',
	'gray', 'grey',
	'light-gray', 'light-grey',
	'gradient',
	'gradient_inverse',
];
export default {
	name: 'UiPageSection',
	props: {
		variant: {
			type: String,
			default: 'standard',
		},
		top: {
			type: Number,
			default: 4,
		},
		bottom: {
			type: Number,
			default: 4,
		},
	},
	computed: {
		getVariant () {
			if (VARIANTS.includes(this.variant)) {
				return `variant-${ this.variant }`;
			}
			return 'variant-white';
		},
	},
};
</script>

<style lang="scss">
.section {
	width: 100%;
	overflow: hidden;

	&.variant- {
		&white {
			background-color: white;
		}

		&blue {
			background-color: var(--v-primary-base);
		}

		&light-blue {
			background-color: var(--v-primary--lighten3);
		}

		&gray,
		&grey {
			background-color: var(--v-grey-lighten1);
		}

		&light-gray,
		&light-grey {
			background-color: var(--v-grey-base);
		}

		&standard {
			background-color: var(--v-grey-lighten3);
		}

		&gradient {
			background: $cn-dark-gradient;
		}

		&gradient_inverse {
			background: $cn-dark-gradient-inverse;
		}
	}
}
</style>
