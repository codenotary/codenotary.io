<template>
	<PageSection
		id="lc-integrations-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="Immutable Ledger Integrations">
						<p class="lead">
							Integrations for Hypervisor, Storage systems, OS and applications.
						</p>
					</PageSectionHeader>
				</i-column>
			</i-row>
			<i-row>
				<i-column xs="12">
					<VueSlickCarousel v-if="integrations && integrations.length" v-bind="settings">
						<div
							v-for="integration in integrations"
							:key="integration.slug"
							class="integration-wrapper"
						>
							<nuxt-link :to="{ name: 'products-integration-post', params: { post: integration.slug } }">
								<StoryCard color="transparent" :image="integration.image " />
							</nuxt-link>
						</div>
					</VueSlickCarousel>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'LcMlIntegrations',
	props: {
		integrations: { type: Array, default: () => {} },
	},
	data: () => ({
		settings: {
			slidesToShow: 4,
			rows: 3,
			arrows: true,
			dots: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
			speed: 600,
			slidesToScroll: 3,
			swipeToSlide: true,
			pauseOnDotsHover: true,
			pauseOnFocus: true,
			pauseOnHover: true,
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 3,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		},
	}),
	beforeDestroy () {
		this.settings = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-integrations-section {
	overflow: hidden;

	.story-card {
		min-height: 200px;
		max-height: 200px;
		margin-bottom: 1rem;
		padding: 1rem;

		img {
			height: 84px;
			-moz-user-select: none;
			-webkit-user-select: none;
			user-select: none;
			pointer-events: none;
			opacity: 0.55;
		}

		@include breakpoint-down(xs) {
			h5 {
				font-size: 1rem;
			}
		}

		&:hover {
			img {
				opacity: 1;
			}
		}
	}

	.integration-wrapper {
		padding: 0 0.5rem;
	}

	.slick-arrow {
		opacity: 0.55;

		&::before {
			background: transparent;
			color: #333;
		}

		&:hover {
			opacity: 1;
		}
	}
}
</style>
