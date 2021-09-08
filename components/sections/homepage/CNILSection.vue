<template>
	<PageSection
		id="cnil-section"
	>
		<i-container class="main-container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
				:title="content.title"
				weight="bold"
				class="_width-75 _text-uppercase"
				:top="0"
				:bottom="0"
			/>
			<div class="cnil-body">
				<div
					v-for="card in content.cards"
					:key="card.title"
					class="cnil-card"
				>
					<div class="image-container">
						<img
							:src="card.image"
							:alt="card.title"
							class="image -responsive"
						>
					</div>
					<div class="content" :class="card.primaryTextColor">
						<template v-if="card.reversedTitles">
							<p class="small-title _text-uppercase">
								{{ card.smallTitle }}
							</p>
							<h2 class="big-title _text-uppercase">
								{{ card.bigTitle }}
							</h2>
						</template>
						<template v-else>
							<h2 class="big-title _text-uppercase">
								{{ card.bigTitle }}
							</h2>
							<p class="small-title _text-uppercase">
								{{ card.smallTitle }}
							</p>
						</template>
						<p class="description" v-html="card.description" />
						<cn-button
							variant="primary"
							:to="card.actionButton.to"
							class="_margin-top-1"
						>
							{{ card.actionButton.text }}
						</cn-button>
					</div>
				</div>
			</div>
		</i-container>
	</PageSection>
</template>

<script>
import homepage from '@/content/homepage';
import CnButton from '@/components/global/CnButton.vue';

export default {
	name: 'CNILSection',
	components: { CnButton },
	data() {
		return {
			content: homepage.cnilSection,
		};
	},
};
</script>

<style lang="scss" scoped>
.cnil-body {
	display: flex;
	justify-content: center;

	.cnil-card {
		max-width: 570px;
		border-radius: 30px;
		background: white;
		display: flex;
		border: 1px solid $cn-color-brand;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
		padding: 32px 0;
		justify-content: space-evenly;
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

			.big-title {
				background-clip: text !important;
				-webkit-background-clip: text !important;
				-webkit-text-fill-color: transparent;
				font-weight: 700;
				font-size: 68px !important;
				line-height: 58px !important;
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

@media screen and (max-width: 1200px) {
	.cnil-body {
		flex-direction: column;

		.cnil-card {
			flex-direction: column;
			align-items: center;
			text-align: center;
			padding: 16px 0;
			padding-right: 0;

			&:not(:first-child) {
				margin-left: 0;
				margin-top: 20px;
			}

			.content {
				padding-top: 10px;

				.big-title {
					font-size: 46px !important;
					line-height: 42px !important;
				}
			}
		}
	}
}
</style>
