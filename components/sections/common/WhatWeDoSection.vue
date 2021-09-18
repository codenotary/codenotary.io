<template>
	<PageSection
		id="whatwedo-section"
		variant="transparent"
		:bottom="0"
		:top="1"
		:top-xs="0"
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
	padding-bottom: 10px;
	margin: 0 !important;
	max-width: 100% !important;

	@media screen and (max-width: $mobile-max-width) {
		padding-top: 10px;
	}

	@media screen and (max-width: 767px) {
		justify-content: center;
	}

	& > div {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;

		@media screen and (max-width: 767px) {
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

		@media screen and (max-width: 767px) {
			margin-top: 10px;
			margin-left: 5px;
			margin-right: 5px;
		}
	}
}
</style>
