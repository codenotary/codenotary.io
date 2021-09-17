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
	transition: all 0.3s ease-out;

	img {
		transition: all 0.3s linear;
	}

	&:hover {
		box-shadow: none;

		img {
			transform: scale(1.1);
		}
	}

	h3 {
		margin-top: 0;
		margin-bottom: 8px;
	}

	&.wide {
		max-width: 310px;
		height: auto;
		min-height: 408px;
		flex: 1;
		padding: 24px 24px;
		justify-content: stretch;

		@media screen and (max-width: $mobile-max-width) {
			max-width: 100%;
			padding: 16px 16px;
			min-height: auto;
		}

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
			margin: 10px 0 0 !important;
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
		margin-bottom: 10px;
	}

	.subtitle {
		max-width: 150px;
		margin: 0;
		text-align: center;
	}

	@media screen and (max-width: 1080px) {
		padding: 16px;
		max-width: 200px;
		height: 180px;

		.card-picture {
			height: 64px;
			width: 150px;
			margin-bottom: 0;
		}

		h3 {
			margin-top: 10px !important;
			margin-bottom: 4px !important;
		}

		.subtitle {
			max-width: unset;
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		max-width: 150px;
		height: 150px;

		p,
		b {
			font-size: 14px;
			line-height: 16px;
		}
	}
}
</style>
