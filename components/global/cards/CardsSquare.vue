<template>
	<div class="square-card">
		<div class="card-picture">
			<img class="cn-icon" :src="imageUrl">
		</div>
		<h3 class="_font-weight-bold cn-text-brand _margin-top-1">
			{{ title }}
		</h3>
		<h6 class="subtitle">
			{{ subtitle }}
		</h6>
	</div>
</template>

<script>
export default {
	name: 'CardsSquare',
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
};
</script>

<style lang="scss" scoped>
.square-card {
	max-width: 250px;
	height: 228px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: $cn-border-radius-lg;
	background-color: white;
	padding: 25px;
	box-shadow: $cn-shadow-sm;

	.card-picture {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100px;
		width: 200px;
	}

	.subtitle {
		max-width: 150px;
		margin: 0;
		text-align: center;
	}
}
</style>
