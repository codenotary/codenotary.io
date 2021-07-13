<template>
	<i-card class="cn-card">
		<div class="card-content">
			<h4 class="title _margin-top-0 _width-100">
				{{ title }}
			</h4>
			<p class="subtitle">
				{{ subtitle }}
			</p>
			<div class="action">
				<slot name="action">
					<UiButtonCn
						link variant="dark"
						:to="internalLink
							? { name: internalLink.type, params: { post: internalLink.entry }}
							: null"
						:href="actionHref"
					>
						<img
							class="icon"
							src="/icons/arrow-right.svg"
						>
						{{ actionText }}
						</cn-button>
					</uibuttoncn>
				</slot>
			</div>
		</div>
	</i-card>
</template>

<script>
export default {
	name: 'UiCardHero',
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
		internalLink: {
			type: Object,
			default: null,
		},
	},
};
</script>

<style lang="scss" scoped>
.cn-card {
	border-radius: 7px !important;
	overflow: hidden;
	height: 200px;
	width: 320px;
	position: relative;
	color: var(--v-brand-base) !important;
	-webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.25);

	::v-deep .body {
		max-height: 100%;
		border: 0;
		border-image-slice: 1;
		border-bottom: 10px solid;
		border-image-source: linear-gradient(to right, var(--v-accent-lighten1), var(--v-brand-lighten1));
		padding: 40px 20px;
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
			width: 100%;
			color: var(--v-primary-darken3) !important;
		}

		.action {
			width: 100%;
			display: flex;
			flex-direction: row;
			justify-content: flex-start;
			align-items: center;
			margin-top: 5px;

			.icon {
				width: 16px;
				height: 16px;
				margin-right: 5px;
			}

			::v-deep * {
				padding: 0;
				color: var(--v-brand-base) !important;
				font-size: 1em;
				font-weight: 600;
				border: 0;
			}

			justify-self: end;
			padding: 0 !important;
		}
	}
}
</style>
