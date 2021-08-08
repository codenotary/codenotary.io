<template>
	<PageSection
		id="immudb-built-on-section"
	>
		<i-container fluid>
			<i-row
				class="row _align-items-center"
			>
				<i-column lg="6">
					<img class="mascot-image" src="/images/immudb-header-mascot.png">
				</i-column>
				<i-column lg="1" />
				<i-column lg="5">
					<h1 class="_font-weight-bold cn-text-white title first">
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
		@media screen and (max-width: $mobile-max-width) {
			display: flex;
			flex-direction: column-reverse;

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
		max-height: 480px;
		object-fit: contain;

		@media screen and (max-width: $mobile-max-width) {
			width: 100%;
			max-width: unset;
			margin-bottom: 40px;
		}
	}
}
</style>
