<template>
	<section
		:class="`section ${ getVariant } _padding-top-xs-0 _padding-bottom-xs-2 _padding-top-sm-${ top } _padding-bottom-sm-${bottom} _padding-top-md-${ top } _padding-bottom-md-${bottom} _padding-top-lg-${ top } _padding-bottom-lg-${bottom} _padding-top-xl-${ top } _padding-bottom-xl-${bottom}`"
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
	}
}
</style>
