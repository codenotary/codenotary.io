<template>
	<PageSection
		id="immudb-users-section"
	>
		<i-container class="floating-container">
			<i-row>
				<i-column>
					<PageSectionHeader
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
					<StoryCard
						v-else-if="item"
						:title="item.label"
						:color="getColor(6)"
						outlined
					/>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';

export default {
	name: 'ImmudbUsers',
	mixins: [colorUtils],
	data: () => ({
		items: [
			{
				label: 'TA Capital',
				image: '/images/immudb/users/ta-capital.svg',
			},
			{
				label: 'Lacroix',
				image: '/images/immudb/users/lacroix.svg',
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
				image: '/images/immudb/users/lord_abbett.svg',
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
				image: '/images/immudb/users/us.svg',
			},
			{
				label: 'Cognizant',
				image: '/images/immudb/users/cognizant.svg',
			},
			{
				label: 'Ruag',
				image: '/images/immudb/users/ruag.svg',
			},
			{
				label: 'Cisco',
				image: '/images/immudb/users/cisco.svg',
			},
			{
				label: 'Fujitsu',
				image: '/images/immudb/users/fujitsu.svg',
			},
		],
	}),
	beforeDestroy () {
		this.items = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-users-section {
	position: relative;
	height: auto;
	min-height: 220px;
	overflow: unset !important;

	@media screen and (max-width: $mobile-max-width) {
		min-height: 150px;
	}

	.floating-container {
		position: absolute;
		bottom: -140px;
		left: 50%;
		transform: translateX(-50%);
		width: 80%;
		background-color: white;
		border-radius: 30px;
		z-index: 10;
	}

	@include breakpoint-down(sm) {
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
			padding: 8px 4px;
			object-fit: contain !important;
			height: 130px;
			transition: transform 100ms linear;

			@media screen and (max-width: 1080px) {
				height: 100px;
			}

			&:hover {
				transform: scale(1.15);
			}
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
		// 			background-color: $cn-color-grey;
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

			@include breakpoint-down(xs) {
				h5 {
					font-size: 1rem;
				}
			}
		}
	}

	@include breakpoint-down(sm) {
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
