<template>
	<PageSection
		id="immudb-cards-section"
		:bottom="0"
		:top="1"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
				weight="bold"
				:title="content.heroCardsSection.title"
				:top="0"
				:bottom="0"
			/>
		</i-container>
		<i-container class="_display-flex _align-items-center _justify-content-center _flex-direction-column cn-text-dark _padding-left-0 _padding-right-0">
			<i-container class="about-immudb-cards">
				<div v-for="(card, index) in content.heroCardsSection.cards" :key="index">
					<cards-square
						wide
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
// @import "~@inkline/inkline/src/css/mixins";
// @import "~@inkline/inkline/src/css/config";

// #immudb-cards-section {
// 	background-color: transparent;
// 	margin-top: -2rem;
// 	padding-top: 0;

// 	.feature {
// 		padding: 2rem 1rem;
// 		background: white;
// 		border: 1px solid $border-color-light;
// 		border-bottom: 2px solid $color-primary;
// 	}
// }

.subheader {
	max-width: 700px;
}

.about-immudb-cards {
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
