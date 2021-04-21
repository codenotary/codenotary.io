<template>
	<PageSection
		id="whatwedo-section"
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
		<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-column cn-text-dark">
			<h6 class="subheader _margin-0">
				{{ content.whatWeDoSection.subtitle }}
			</h6>
			<i-container class="what_we_do-cards _margin-top-2">
				<cards-square v-for="(card, index) in content.whatWeDoSection.cards" :title="card.title" :image-url="card.imageUrl" :subtitle="card.subtitle" :key="index"/>
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
	justify-content: space-evenly;
	align-items: center;
	flex: 1 0 100%;
	flex-wrap: wrap;
	padding: 0;
	padding-top: 10px;
	padding-bottom: 10px;

	& > * {
		margin-top: 10px;
		padding-left: 10px;
		padding-right: 10px;
	}
}
</style>
