<template>
	<div
		class="feature"
		data-aos="fade-zoom-in"
	>
		<img
			v-if="image"
			class="image -responsive"
			:src="image"
			:alt="title"
		>
		<slot name="icon" />
		<h3 v-if="title" class="title _text-primary">
			{{ title }}
		</h3>
		<h5 v-if="subtitle" class="title">
			{{ subtitle }}
		</h5>
		<slot />
	</div>
</template>

<script>
export default {
	name: 'Feature',
	props: {
		image: {
			type: String,
			default: '',
		},
		icon: {
			type: String,
			default: '',
		},
		title: {
			type: String,
			default: '',
		},
		subtitle: {
			type: String,
			default: '',
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config";

.feature {
	text-align: center;

	.title {
		font-weight: bold;
		color: $color-primary;
	}

	.subtitle {
		font-weight: 500;
		color: $color-dark;
	}

	img {
		width: 80px;
		height: auto;
		display: block;
		margin: 0 auto;
	}
}
</style>
