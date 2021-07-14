<template>
	<div class="square-card" :class="{ wide }">
		<div class="card-picture">
			<img class="cn-icon" :src="imageUrl">
		</div>
		<h3 class="font-weight-bold cn-text-brand mt-4">
			{{ title }}
		</h3>
		<h6 class="subtitle cn-text-sm" v-html="subtitle" />
	</div>
</template>

<script>
export default {
	name: 'UiCardSquare',
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
		wide: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.square-card {
	max-width: 250px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: $cn-border-radius-lg;
	background-color: white;
	padding: 25px;
	box-shadow: $cn-shadow-sm;

	&.wide {
		max-width: 373px;
		flex: 1;

		.subtitle {
			max-width: none;
		}
	}

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
