<template>
	<section
		class="section"
		:class="sectionClass"
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
const additionalOffsets = [
	'top-xs',
	'top-sm',
	'top-md',
	'top-lg',
	'top-xl',
	'bottom-xs',
	'bottom-sm',
	'bottom-md',
	'bottom-lg',
	'bottom-xl',
];
const getOffsetPropName = (offset) => {
	const [direction, size] = offset.split('-');
	const [firstLetter, ...otherLetters] = size.split('');

	return `${ direction }${ firstLetter.toUpperCase() }${ otherLetters }`;
};
const getOffsetDirection = offset => offset.split('-')[0];

const additionalProps = additionalOffsets.reduce((propsObject, offset) =>
	Object.assign(
		{},
		propsObject, {
			[getOffsetPropName(offset)]: {
				type: Number,
				default: null,
			},
		}), {});

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
		...additionalProps,
	},
	computed: {
		colorVariant () {
			return VARIANTS.includes(this.variant)
				? `variant-${ this.variant }`
				: 'variant-white';
		},
		sectionClass () {
			const additionalClasses = additionalOffsets
					.map((offset) => {
						const prop = this[getOffsetPropName(offset)];
						const offsetValue = prop === null
							? this[getOffsetDirection(offset)]
							: prop;

						return `_padding-${ offset }-${ offsetValue }`;
					})
					.join(' ');

			return `${ this.colorVariant } ${ additionalClasses }`;
		},
	},
};
</script>

<style lang="scss">
.section {
	width: 100%;
	overflow: hidden;

	&.variant- {
		&transparent {
			background-color: transparent;
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
