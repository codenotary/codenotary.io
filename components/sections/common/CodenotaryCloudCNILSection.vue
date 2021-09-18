<template>
	<PageSection
		id="cnil-section"
		class="_margin-top-4"
		:bottom="0"
	>
		<i-container class="main-container _display-flex _flex-direction-column _align-items-xs-stretch _justify-content-center">
			<PageSectionHeader
				weight="bold"
				:top="0"
				:bottom="0"
				:with-header="false"
				class="_width-75 _text-uppercase"
			/>
			<div class="cnil-body">
				<div class="cnil-card">
					<div class="image-container">
						<img
							:src="content.image"
							:alt="content.title"
							class="image -responsive"
						>
					</div>
					<div class="content _display-flex _flex-direction-column _justify-content-center _padding-left-sm-1" :class="content.primaryTextColor">
						<p class="small-title _text-uppercase">
							{{ content.smallTitle }}
						</p>
						<h2 class="big-title _text-uppercase">
							{{ content.bigTitle }}
						</h2>
						<p class="description" v-html="content.description" />
					</div>
				</div>
			</div>
		</i-container>
	</PageSection>
</template>

<script>
import content from '@/content/codenotaryCloud';

export default {
	name: 'CNILSection',
	data() {
		return {
			content,
		};
	},
};
</script>

<style lang="scss" scoped>
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#cnil-section {
	background-color: $cn-color-background;

	.main-container {
		padding: 0;
	}
}

.cnil-body {
	display: flex;
	justify-content: center;

	.cnil-card {
		border-radius: 30px;
		background: white;
		display: flex;
		border: 1px solid $cn-color-brand;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
		padding: 32px 40px;
		justify-content: space-around;
		flex: 1;

		&:not(:first-child) {
			margin-left: 20px;
		}

		.image-container {
			max-width: 35%;
			display: flex;
			align-items: center;
		}

		.content {
			&.blue {
				.big-title {
					background: -webkit-linear-gradient(left, $cn-color-blue, $cn-color-primary_light);
				}

				.small-title {
					color: $cn-color-blue;
				}
			}

			&.green {
				.big-title {
					background: -webkit-linear-gradient(left, $cn-color-primary, #ffdb87);
				}

				.small-title {
					color: $cn-color-primary;
				}
			}

			.big-title,
			.small-title,
			.description {
				margin: 0;
			}

			.small-title {
				font-weight: 700;
				font-size: 24px;
				line-height: 26px;
			}

			.description {
				font-weight: 400;
				font-size: 16px;
				line-height: 20px;
				padding-top: 10px;
			}
		}
	}
}

@include breakpoint-down(xs) {
	#cnil-section {
		margin-top: 1rem !important;
	}

	.cnil-body {
		.cnil-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 16px 0;
			padding-right: 0;

			.content {
				padding-top: 10px;
			}
		}
	}
}
</style>
