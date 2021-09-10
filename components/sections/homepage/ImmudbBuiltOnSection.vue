<template>
	<PageSection
		id="immudb-built-on-section"
		:bottom-xs="3"
		:bottom-sm="4"
		:bottom="6"
		:top="4"
	>
		<i-container fluid>
			<i-row
				class="row _align-items-center"
			>
				<i-column lg="1" md="0" />
				<i-column lg="5" md="6">
					<img class="mascot-image" src="/images/immudb-header-mascot.png">
				</i-column>
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
						{{ content.title3 }}
					</p>
					<div class="action-buttons">
						<cn-button
							variant="secondary"
							:to="{ path: '/technologies/immudb' }"
							class="discover-button"
						>
							Discover immudb
						</cn-button>
					</div>
				</i-column>
				<i-column lg="1" md="0" />
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import homepageContent from '@/content/homepage';

export default {
	name: 'ImmudbBuiltOnSection',
	data() {
		return {
			content: homepageContent.builtOnSection,
		};
	},
};
</script>

<style lang="scss" scoped>
#immudb-built-on-section {
	background: $cn-dark-gradient_inverse;

	.row {
		.content {
			.first {
				margin-bottom: 10px;
			}

			.third {
				max-width: 370px;
			}
		}

		@media screen and (max-width: $mobile-max-width) {
			.first {
				font-size: 32px !important;
				margin-bottom: 0 !important;
			}
		}

		@media screen and (max-width: 767px) {
			display: flex;
			flex-direction: column-reverse;

			.content {
				padding-left: 10px;

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

				.third {
					max-width: 100%;
				}

				.action-buttons {
					display: flex;
					justify-content: center;
				}
			}
		}
	}

	.mascot-image {
		height: auto;
		max-height: 400px;
		object-fit: contain;

		@media screen and (max-width: $mobile-max-width) {
			width: 100%;
			max-width: unset;
			max-height: 350px;
		}

		@media screen and (max-width: 767px) {
			width: 100%;
			max-width: unset;
			max-height: 250px;
			margin-bottom: 20px;
		}
	}
}
</style>
