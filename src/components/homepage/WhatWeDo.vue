<template>
	<UiPageSection
		id="whatwedo-section"
		:bottom="0"
		:top="1"
	>
		<v-container class="d-flex flex-column align-center justify-center">
			<UiPageSectionHeader
				weight="bold"
				:title="content.whatWeDoSection.title"
				:top="0"
				:bottom="0"
			/>
		</v-container>
		<v-container class="d-flex align-center justify-center flex-column cn-text-dark _padding-left-0 _padding-right-0">
			<h6 class="subheader _margin-0 text-center">
				{{ content.whatWeDoSection.subtitle }}
			</h6>
			<v-container class="what_we_do-cards">
				<div v-for="(card, index) in content.whatWeDoSection.cards" :key="index">
					<UiCardSquare
						:title="card.title"
						:image-url="card.imageUrl"
						:subtitle="card.subtitle"
					/>
				</div>
			</v-container>
		</v-container>
	</UiPageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'HomepageWhatWeDo',
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

	@media (max-width: $xs) {
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
