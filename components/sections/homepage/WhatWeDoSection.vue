<template>
	<PageSection
		id="whatwedo-section"
		variant="white"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<hr class="_width-100"/>
			<PageSectionHeader
				weight="bold"
				:title="content.whatWeDoSection.title"
				:top="0"
				:bottom="0"
			/>
		</i-container>
		<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-column">
			<h6 class="subheader _margin-0">
				{{ content.whatWeDoSection.subtitle }}
			</h6>
			<i-container class="transparent-cards _margin-top-3">
				<cn-transparent-card v-for="(card, index) in content.whatWeDoSection.cards" :title="card.title" :image-url="card.imageUrl" :subtitle="card.subtitle" :key="index"/>
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

.transparent-cards {
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: baseline;
	flex: 1 0 100%;
	flex-wrap: wrap;

	& > * {
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 10px;
	}
}
</style>
