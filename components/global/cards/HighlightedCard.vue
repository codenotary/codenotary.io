<template>
	<i-card class="cn-card" :style="dynamicBackground">
		<div class="card-content">
			<h4 class="title">
				{{ title }}
			</h4>
			<p class="subtitle">
				{{ subtitle }}
			</p>
			<div class="action">
				<slot name="action">
					<a v-if="actionHref && actionText" :href="actionHref">
						{{ actionText }}
					</a>
				</slot>
			</div>
		</div>
	</i-card>
</template>

<script>
export default {
	name: 'HighlightedCard',
	props: {
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			default: null,
		},
		actionText: {
			type: String,
			default: null,
		},
		actionHref: {
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
				background: `grey url('${ this.imageUrl }') no-repeat center !important`,
				'background-size': 'cover !important',
			};
		},
	},
};
</script>

<style lang="scss" scoped>
.cn-card {
	border-radius: 15px !important;
	overflow: hidden;
	height: 200px;
	width: 300px;
	position: relative;
	//background: grey url('/images/placeholder.svg') no-repeat center !important;

	color: white !important;

	::v-deep .body {
		max-height: 100%;
	}

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: black;
		filter: opacity(0.5);
	}

	.card-content {
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.title {
			margin: 40px 0 15px;
			font-weight: 600;
		}

		.subtitle {
			flex: 1;
			margin: 0;
		}

		.action {
			::v-deep * {
				color: white !important;
				font-size: 1em;
				font-weight: 600;
			}

			justify-self: end;
			padding: 0 !important;
		}
	}
}
</style>
