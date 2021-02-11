<template>
	<section
		class="section"
		:class="{
			getVariant,
			[`_padding-top-${top}`]: true,
			[`_padding-bottom-${bottom}`]: true,
		}"
	>
		<slot />
	</section>
</template>

<script>
const VARIANTS = [
	'white',
	'blue',
	'light-blue',
	'gray', 'grey',
	'light-gray', 'light-grey',
];
export default {
	name: 'PageSection',
	props: {
		variant: {
			type: String,
			default: 'white',
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
			background-color: $color-gray-10;
		}
	}
}
</style>
