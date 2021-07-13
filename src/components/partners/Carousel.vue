<template>
	<UiPageSection
		id="partners-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column xs="12">
					<VueSlickCarousel v-if="partners && partners.length" v-bind="settings">
						<div
							v-for="partner in partners"
							:key="partner.slug"
							class="partner-wrapper"
						>
							<a
								v-if="partner.link && partner.link.url"
								:href="partner.link.url"
								:target="partner.link.target || '_blank'"
								:title="partner.title"
								rel="nofollow"
							>
								<UiCardStory
									color="transparent"
									:title="partner.title"
									:subtitle="partner.subtitle"
									:image="partner.image "
								/>
							</a>
							<UiCardStory
								v-else
								color="transparent"
								:title="partner.title"
								:subtitle="partner.subtitle"
								:image="partner.image "
							/>
						</div>
					</VueSlickCarousel>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'PartnersCarousel',
	props: {
		partners: { type: Array, default: () => {} },
	},
	data: () => ({
		settings: {
			slidesToShow: 4,
			rows: 4,
			arrows: true,
			dots: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
			speed: 600,
			slidesToScroll: 1,
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
#partners-section {
	overflow: hidden;

	a {
		&:hover,
		&:active {
			text-decoration: none !important;
			opacity: 0.9 !important;

			.story-card {
				opacity: 0.9;

				h5 {
					text-decoration: none !important;
					outline: none !important;
				}
			}
		}
	}

	.story-card {
		min-height: 180px;
		max-height: 2180px;
		margin-bottom: 1rem;
		padding: 1rem;

		img {
			height: 64px;
			width: auto;
			-moz-user-select: none;
			-webkit-user-select: none;
			user-select: none;
			pointer-events: none;
			opacity: 0.55;
		}

		.title,
		.subtitle {
			color: #666 !important;
		}

		&:hover {
			img {
				opacity: 1;
			}

			.title,
			.subtitle {
				color: #111 !important;
			}
		}

		@media (max-width: $xs) {
			h5 {
				font-size: 1rem;
			}
		}
	}

	.partner-wrapper {
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
