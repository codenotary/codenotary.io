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
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.section {
	width: 100%;
	overflow: hidden;

	&.variant- {
		&white {
			background-color: white;
		}

		&blue {
			background-color: $color-primary;
		}

		&light-blue {
			background-color: $color-primary-lightest;
		}

		&gray,
		&grey {
			background-color: $color-gray-30;
		}

		&light-gray,
		&light-grey {
			background-color: $background-grey;
		}

		&standard {
			background-color: $cn-color-background;
		}

		&gradient {
			background: $cn-dark-gradient;
		}

		&gradient_inverse {
			background: $cn-dark-gradient_inverse;
		}
	}
}
</style>
