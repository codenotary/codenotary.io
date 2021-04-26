<template>
	<header class="section-header" :class="{'block': block, [`_margin-top-${top}`]: true, [`_margin-bottom-${bottom}`]: true}">
		<slot name="title">
			<h2 :is="tag">
				{{ title }}
			</h2>
		</slot>
		<div class="lead">
			<slot />
		</div>
	</header>
</template>

<script>
export default {
	name: 'PageSectionHeader',
	props: {
		title: { type: String, default: '' },
		tag: { type: String, default: 'h2' },
		block: { type: Boolean, default: false },
		top: { type: String, default: '0' },
		bottom: { type: String, default: '6' },
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config/colors';
@import '../../assets/variables';

.section-header {
	text-align: center;

	h1,
	h2,
	h3 {
		margin-top: 0;
		font-weight: bold;
		color: $color-primary;
	}

	&.-block {
		max-width: none;
	}
}
</style>
