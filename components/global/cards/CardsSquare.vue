<template>
	<div class="square-card" :class="{ wide }">
		<div class="card-picture">
			<img class="cn-icon" :src="imageUrl">
		</div>
		<h3 class="_font-weight-bold cn-text-brand">
			{{ title }}
		</h3>
		<h6 class="subtitle cn-text-sm" v-html="subtitle" />
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
		wide: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss">
.square-card {
	max-width: 230px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: $cn-border-radius-lg;
	background-color: white;
	padding: 25px;
	box-shadow: $cn-shadow-sm;

	h3 {
		margin-top: 0;
		margin-bottom: 8px;
	}

	&.wide {
		max-width: 373px;
		flex: 1;
		padding: 25px 40px;
		justify-content: stretch;

		h3 {
			margin: 0 !important;
		}

		p,
		b {
			color: $cn-color-dark !important;
			font-size: 16px;
			line-height: 22px;
		}

		p {
			margin: 18px 0 0 !important;
		}

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
