<template>
	<header
		class="section-header"
		:class="`${ block ? '-block' : '' } _font-weight-${ weight } _${offsetType}-top-${top} _${offsetType}-bottom-${bottom} ${ round ? '-round' : '' }`"
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
			default: 'bold',
		},
		top: {
			type: Number,
			default: 0,
		},
		bottom: {
			type: Number,
			default: 4,
		},
		offsetType: {
			type: String,
			default: 'margin',
		},
		round: {
			type: Boolean,
			default: false,
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

	&.-round {
		border-radius: $cn-border-radius-lg;
	}
}
</style>
