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
					<div class="image">
						<img :src="card.image" :alt="card.title">
					</div>
					<div class="content" :class="card.primaryTextColor">
						<h2 class="big-title">
							{{ card.bigTitle }}
						</h2>
						<p class="small-title">
							{{ card.smallTitle }}
						</p>
						<p class="description">
							{{ card.description }}
						</p>
						<cn-button
							variant="primary"
							:to="card.actionButton.to"
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
		max-height: 330px;
		border-radius: 30px;
		background: white;
		display: flex;
		border: 1px solid $cn-color-brand;
		box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
		padding: 35px 48px 48px 0;

		&:not(:first-child) {
			margin-left: 20px;
		}

		.image {
			width: 50%;
			display: flex;
			justify-content: center;
			align-items: center;

			img {
				max-width: 100%;
			}
		}

		.content {
			width: calc(50% - 48px);

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
				line-height: 83px !important;
			}

			.small-title {
				font-weight: 700;
				font-size: 24px;
				line-height: 26px;
			}
		}
	}
}

@media screen and (max-width: $mobile-max-width) {
	.cnil-body {
		flex-direction: column;

		.cnil-card:not(:first-child) {
			margin-left: 0;
			margin-top: 20px;
		}
	}
}
</style>
