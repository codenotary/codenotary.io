<template>
	<PageSection id="Homepage-users-section" variant="transparent">
		<i-container class="floating-container">
			<i-row>
				<i-column sm="12">
					<PageSectionHeader
						title="Customers"
						:bottom="1"
						class="_text-uppercase"
						weight="bold"
					/>
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _justify-content-center">
				<i-column
					class="_margin-x-auto _text-center" xs="12"
					sm="12" md="8"
					lg="8"
				>
					<span class="_text-dark _text-center block padding-x-15">
						Hundreds of happy customers trust our solutions to optimize their virtual environment.
					</span>
				</i-column>
			</i-row>
			<i-row
				class="image-wrapper _padding-x-1 _padding-y-1 _display-flex _justify-content-center"
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
						class="image -responsive"
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
				label: 'US',
				image: '/images/logos/US_Department_of_State.svg',
			},
			{
				label: 'Motorola',
				image: '/images/logos/Motorola.svg',
			},
			{
				label: 'Ruag',
				image: '/images/logos/Ruag.svg',
			},
			{
				label: 'Centrale Nantes',
				image: '/images/logos/Centrale_Nantes.svg',
			},
			{
				label: 'Tas Networks',
				image: '/images/logos/TasNetworks.png',
			},
			{
				label: 'ifolor',
				image: '/images/logos/ifolor.svg',
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

#Homepage-users-section {
	position: relative;
	height: auto;
	min-height: 240px;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		top: -140px;
		left: 50%;
		transform: translateX(-50%);
		background-color: #fff;
		border-radius: 30px;
		z-index: 10;
		width: 81%;
	}

	.padding-x-15 {
		padding-left: 15px;
		padding-right: 15px;
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
			top: -100px;

			h2 {
				margin-top: 30px !important;
			}
		}
	}

	.image-wrapper {
		.image {
			position: relative;
			padding: 8px;
			object-fit: contain !important;
			height: 130px;
			transition: transform 100ms linear;

			&:hover {
				transform: scale(1.15);
			}
		}

		@include breakpoint-down(sm) {
			.image {
				height: 100px;
			}
		}

		.column {
			&:nth-child(1) {
				.image {
					height: 110px;
				}
			}

			&:nth-child(2) {
				.image {
					height: 100px;
				}
			}

			&:nth-child(6) {
				.image {
					height: 90px;
				}
			}
		}

		//.column {
		//	&:not(:last-child) {
		//		&::before {
		//			content: '';
		//			position: absolute;
		//			top: 10%;
		//			right: 0;
		//			width: 1px;
		//			height: 80%;
		//			background-color: $cn-color-grey;
		//			z-index: 2;
		//		}
		//	}
		//}

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
