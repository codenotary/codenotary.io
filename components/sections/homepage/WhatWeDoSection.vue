<template>
	<PageSection
		id="whatwedo-section"
		variant="transparent"
		:bottom="0"
		:top="1"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
				weight="bold"
				:title="content.whatWeDoSection.title"
				:top="0"
				:bottom="0"
			/>
		</i-container>
		<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-column cn-text-dark _padding-left-0 _padding-right-0">
			<h6 class="subheader _margin-0 _text-center">
				{{ content.whatWeDoSection.subtitle }}
			</h6>
			<i-container class="what_we_do-cards">
				<div v-for="(card, index) in content.whatWeDoSection.cards" :key="index">
					<cards-square
						:title="card.title"
						:image-url="card.imageUrl"
						:subtitle="card.subtitle"
					/>
				</div>
			</i-container>
		</i-container>
	</PageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'WhatWeDoSection',
	data() {
		return {
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>
.subheader {
	max-width: 700px;
}

.what_we_do-cards {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex: 1 0 100%;
	flex-wrap: wrap;
	padding: 0;
	//padding-top: 10px;
	padding-bottom: 10px;

	@media screen and (max-width: $mobile-max-width) {
		padding-top: 10px;

		& ::v-deep .square-card {
			padding: 16px;
			max-width: 213px;
			height: 157px;

			.card-picture {
				height: 64px;
				width: 200px;
			}

			h3 {
				margin-top: 10px !important;
				margin-bottom: 4px !important;
			}

			.subtitle {
				max-width: unset;
			}
		}
	}

	@media screen and (max-width: 767px) {
		justify-content: center;
	}

	& > div {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;

		@media screen and (max-width: 1199px) {
			& {
				flex-basis: calc(50% - 40px);
				display: flex;

				&:nth-child(even) {
					justify-content: flex-start;
				}

				&:nth-child(odd) {
					justify-content: flex-end;
				}
			}
		}
	}
}
</style>
