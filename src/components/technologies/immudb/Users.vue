<template>
	<UiPageSection id="immudb-users-section">
		<i-container class="floating-container">
			<i-row>
				<i-column>
					<UiPageSectionHeader
						title="immudb Users"
						:bottom="2"
						weight="bold"
					/>
				</i-column>
			</i-row>
			<i-row
				class="image-wrapper _padding-x-1 _display-flex _justify-content-center"
			>
				<i-column
					v-for="(item, idx) in items"
					:key="`${item}-${idx}`"
					class="_display-flex _justify-content-center _align-items-center"
					xs="6"
					sm="6"
					md="2"
					lg="2"
				>
					<img
						v-if="item && item.image"
						class="image -responsive _padding-y-2"
						:class="{'image-only': !item.label }"
						:src="item.image"
						:alt="item.label"
					>
					<UiCardStory
						v-else-if="item"
						:title="item.label"
						:color="getColor(6)"
						outlined
					/>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';

export default {
	name: 'TechnologiesImmudbUsers',
	mixins: [colorUtils],
	data: () => ({
		items: [
			{
				label: 'TA Capital',
				image: '/images/immudb/users/ta-capital.png',
			},
			{
				label: 'Lacroix',
				image: '/images/immudb/users/lacroix.png',
			},
			{
				label: 'Green Tube',
				image: '/images/immudb/users/green-tube.svg',
			},
			{
				label: 'Tinaba',
				image: '/images/immudb/users/tinaba.png',
			},
			{
				label: 'Lord Abbet',
				image: '/images/immudb/users/lord-abbet.png',
			},
			{
				label: 'Naveum',
				image: '/images/immudb/users/naveum.svg',
			},
			{
				label: 'True Core',
				image: '/images/immudb/users/true-core.svg',
			},
			{
				label: 'Us',
				image: '/images/immudb/users/us.png',
			},
			{
				label: 'Cognizant',
				image: '/images/immudb/users/cognizant.png',
			},
			{
				label: 'Ruag',
				image: '/images/immudb/users/ruag.svg',
			},
			{
				label: 'Cisco',
				image: '/images/immudb/users/cisco.jpeg',
			},
		],
	}),
	beforeDestroy () {
		this.items = null;
	},
};
</script>

<style lang="scss">
#immudb-users-section {
	position: relative;
	background: var(--v-blue-grey-lighten5);
	height: auto;
	min-height: 280px;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		bottom: -140px;
		left: 50%;
		transform: translateX(-50%);
		background-color: #fff;
		border-radius: 30px;
		z-index: 10;
	}

	@media (max-width: $sm) {
		height: auto !important;
		padding-top: 40px !important;
		padding-bottom: 81px !important;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -20px;

			h2 {
				margin-top: 30px !important;
			}
		}
	}

	.image-wrapper {
		.image {
			position: relative;
			padding: 16px;
			object-fit: contain !important;
			height: 160px;
		}

		// .column {
		// 	&:not(:last-child) {
		// 		&::before {
		// 			content: '';
		// 			position: absolute;
		// 			top: 0;
		// 			right: 0;
		// 			width: 1px;
		// 			height: 100%;
		// 			background-color: var(--v-blue-grey-lighten4);
		// 			z-index: 2;
		// 		}
		// 	}
		// }

		.story-card {
			margin: 51px 0;
			width: 100%;
			padding: 1rem !important;

			h5 {
				margin: 0;
			}

			@media (max-width: $xs) {
				h5 {
					font-size: 1rem;
				}
			}
		}
	}

	@media (max-width: $sm) {
		.analyze-and-manage-tabs {
			.button-group {
				display: block;

				button {
					width: 100%;
				}
			}
		}
	}
}
</style>
