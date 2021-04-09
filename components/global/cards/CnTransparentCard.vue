<template>
	<div class="transparent-card">
		<div class="card-picture" :style="dynamicBackground"/>
		<h3 class="_font-weight-bold">
			{{ title }}
		</h3>
		<h6 class="_font-weight-bold subtitle">
			{{ subtitle }}
		</h6>
	</div>
</template>

<script>
export default {
	name: 'CnTransparentCard',
	props: {
		title: {
			type: String,
			default: null,
		},
		subtitle: {
			type: String,
			default: null,
		},
		imageUrl: {
			type: String,
			default: '/images/placeholder.svg',
		},
	},
	computed: {
		dynamicBackground() {
			return {
				background: `url('${ this.imageUrl }') no-repeat center !important`,
				'background-size': 'contain !important',
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.transparent-card {
	max-width: 200px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.card-picture {
		height: 100px;
		width: 200px;
	}

	.subtitle {
		max-width: 150px;
		margin: 0;
		//align-self: start;
		text-align: center;
	}
}
</style>
