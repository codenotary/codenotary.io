<template>
	<PageSection
		id="immudb-codenotary-cloud-section"
		:top="6"
		:bottom="6"
		:bottom-md="4"
	>
		<i-container fluid>
			<i-row
				class="row _align-items-center"
			>
				<i-column lg="1" md="0" />
				<i-column
					lg="5"
					md="6"
					class="content"
				>
					<h1 class="_font-weight-bold cn-text-primary-light title first">
						{{ content.title1 }}
					</h1>
					<h3
						class="_font-weight-bold _text-uppercase cn-text-white title second _margin-0 _margin-bottom-1"
						v-html="content.title2"
					/>
					<p class="cn-text-white title third">
						{{ content.paragraph1 }}
					</p>
					<p class="cn-text-white title third">
						{{ content.paragraph2 }}
					</p>
					<div class="action-buttons">
						<cn-button
							variant="secondary"
							:to="{ path: '/products/ci-cd' }"
							class="discover-button"
						>
							{{ content.cta }}
						</cn-button>
					</div>
				</i-column>
				<i-column lg="6" md="6">
					<img class="mascot-image" src="/images/immudb-codenotary-cloud.png">
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import homepageContent from '@/content/homepage';

export default {
	name: 'CodenotaryCloud',
	data() {
		return {
			content: homepageContent.codenotaryCloud,
		};
	},
};
</script>

<style lang="scss" scoped>
#immudb-codenotary-cloud-section {
	background: $cn-dark-gradient_inverse;

	.row {
		.content {
			padding-bottom: 80px;
		}

		.first {
			margin-top: 0 !important;
		}

		.second {
			max-width: 360px;
		}

		.third {
			max-width: 360px;
		}

		@media screen and (max-width: $mobile-max-width) {
			.content {
				padding-bottom: 48px !important;
			}

			.first,
			.second,
			.third {
				max-width: 100%;
			}

			.first {
				font-size: 32px !important;
				margin-bottom: 0 !important;
			}
		}

		@media screen and (max-width: 767px) {
			display: flex;
			flex-direction: column-reverse;

			.content {
				padding-bottom: 0 !important;
			}

			.first,
			.second,
			.third {
				text-align: center;
			}

			.second {
				font-size: 24px !important;
				line-height: 26px !important;
				font-weight: 700 !important;
			}

			.action-buttons {
				display: flex;
				justify-content: center;
			}
		}
	}

	.mascot-image {
		height: auto;
		max-height: 420px;
		object-fit: contain;

		@media screen and (max-width: $mobile-max-width) {
			width: 100%;
			max-width: unset;
			margin-bottom: 40px;
		}

		@media screen and (max-width: 767px) {
			max-height: 280px;
			margin-bottom: 0;
		}
	}
}
</style>
