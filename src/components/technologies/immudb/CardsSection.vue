<template>
	<UiPageSection
		id="immudb-cards-section"
		:top="1"
		:bottom="0"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<UiPageSectionHeader
				weight="bold"
				:title="content.heroCardsSection.title"
				:top="0"
				:bottom="0"
			/>
		</i-container>
		<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-row-wrap cn-text-dark">
			<i-row class="about-immudb-cards">
				<i-column
					v-for="(card, index) in content.heroCardsSection.cards"
					:key="index"
					class="_margin-top-1 _padding-bottom-1"
					xs="12"
					sm="6"
					md="4"
					lg="4"
				>
					<UiCardSquare
						wide
						:title="card.title"
						:image-url="card.imageUrl"
						:subtitle="card.subtitle"
					/>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
import immudbContent from '@/content/immudb';

export default {
	name: 'TechnologiesImmudbCardsSection',
	data() {
		return {
			content: immudbContent,
		};
	},
};
</script>

<style lang="scss">
#immudb-cards-section {
	@media (max-width: $xs) {
		align-items: start;
		padding: 0 0 16px 0 !important;
		margin-bottom: -18px !important;
		width: 100% !important;
		min-width: 100%;
		z-index: 2;

		.container {
			padding: 0 !important;

			.row.about-immudb-cards {
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: stretch;
				flex: 1 0 100%;
				flex-wrap: wrap;
				margin: 0;
				padding: 0;

				.column {
					padding: 0 auto !important;

					.square-card {
						max-width: 100%;
					}

					h3 {
						margin-top: 8px !important;
						margin-bottom: 4px !important;
					}

					.subtitle {
						max-width: unset;
					}
				}
			}
		}
	}
}
</style>
