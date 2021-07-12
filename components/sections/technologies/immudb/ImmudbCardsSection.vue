<template>
	<PageSection
		id="immudb-cards-section"
		:top="1"
		:bottom="0"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
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
					<cards-square
						wide
						:title="card.title"
						:image-url="card.imageUrl"
						:subtitle="card.subtitle"
					/>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import immudbContent from '@/content/immudb';

export default {
	name: 'ImmudbCardsSection',
	data() {
		return {
			content: immudbContent,
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.subheader {
	max-width: 700px;
}

#immudb-cards-section {
	@include breakpoint-down(sm) {
		.container {
			width: 100%;
		}
	}
}

.about-immudb-cards {
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: stretch;
	flex: 1 0 100%;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;

	@media screen and (max-width: $mobile-max-width) {
		align-items: start;
		margin: 0 auto -180px !important;
		padding: 0 !important;
		width: 100% !important;
		min-width: 100%;

		.column {
			padding: 0 !important;

			.card-picture {
				height: 64px;
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
		width: min-content !important;
	}
}
</style>
