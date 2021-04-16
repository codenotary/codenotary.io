<template>
	<header
		:class="`section-header ${ block ? '-block' : '' } _font-weight-${ weight } _margin-top-${top} _margin-bottom-${bottom}`"
	>
		<slot name="title">
			<h2 :is="tag" :class="`cn-text-${ color } _font-weight-${ weight }`">
				{{ title }}
			</h2>
		</slot>
		<div
			v-if="hasDefaultSlot"
			class="-body-1"
		>
			<slot />
		</div>
	</header>
</template>

<script>
export default {
	name: 'PageSectionHeader',
	props: {
		title: {
			type: String,
			default: '',
		},
		tag: {
			type: String,
			default: 'h2',
		},
		block: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
			default: 'brand',
		},
		weight: {
			type: String,
			default: 'normal',
		},
		top: {
			type: Number,
			default: 0,
		},
		bottom: {
			type: Number,
			default: 4,
		},
	},
	computed: {
		hasDefaultSlot () {
			return !!this.$slots.default;
		},
	},
};
</script>

<style lang="scss">
.section-header {
	text-align: center;

	&.-block {
		max-width: none;
		width: 100%;
	}
}
</style>
