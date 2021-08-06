<template>
	<PageSection id="what-clients-say-section">
		<i-container class="floating-container _padding-x-4">
			<i-row>
				<i-column>
					<div>
						<VueSlickCarousel v-bind="settings">
							<div
								v-for="review in reviews"
								:key="review.author.name"
								class="review"
							>
								<img
									class="cn-icon review-quote-image"
									src="/images/quotation.png"
									alt="quote"
								>
								<p class="review-content">
									{{ review.content }}
								</p>
								<hr>
								<p class="review-author-name">
									{{ review.author.name }}
								</p>
								<p class="review-author-company">
									{{ review.author.company }}
								</p>
							</div>
							<template #prevArrow>
								<div class="custom-arrow _display-flex _justify-content-center _align-items-center">
									<img class="cn-icon" src="/icons/carousel-arrow-left.svg">
								</div>
							</template>
							<template #nextArrow>
								<div class="custom-arrow _display-flex _justify-content-center _align-items-center">
									<img class="cn-icon" src="/icons/carousel-arrow-right.svg">
								</div>
							</template>
							<template #customPaging>
								<div class="custom-dot" />
							</template>
						</VueSlickCarousel>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'WhatClientsSaySection',
	data() {
		return {
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				infinite: true,
				arrows: true,
				dots: true,
				focusOnSelect: true,
				lazyLoad: 'progressive',
				responsive: [
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						},
					},
				],
			},
			reviews: [
				{
					content: 'It makes for a great one-stop shop for monitoring key VMware metrics! I have been using CodeNotary CNIL Metrics and Logs for about a year. Setup and operational in less than 30 minutes. It comes pre-packaged with ready to use dashboards that are color coded with thresholds providing immediate feedback on performance, KPIs, health and areas of concerns. The team is skilled in this area and knows what their customer base is seeking. Overall, I’m very pleased with the application and the support team behind it. Highly recommended!',
					author: {
						name: 'Tarun Keswani',
						title: 'Principal Staff Engineer',
						company: 'Motorola Solutions',
					},
				},
				{
					content: `
					The tremendous flexibility and and the possibility to create your own dashboards with the metrics you want to keep one eye on it all the time across different infrastructure products from different vendors.

					Also I like the very great support from the Merics and Logs team!			`,
					author: {
						name: 'Jan Unger',
						title: 'Network and Datacenter Engineer',
						company: 'Netcloud AG',
					},
				},
				{
					content: 'It makes for a great one-stop shop for monitoring key VMware metrics! I have been using CodeNotary CNIL Metrics and Logs for about a year. Setup and operational in less than 30 minutes. It comes pre-packaged with ready to use dashboards that are color coded with thresholds providing immediate feedback on performance, KPIs, health and areas of concerns. The team is skilled in this area and knows what their customer base is seeking. Overall, I’m very pleased with the application and the support team behind it. Highly recommended!',
					author: {
						name: 'Tarun Keswani',
						title: 'Principal Staff Engineer',
						company: 'Motorola Solutions',
					},
				},
				{
					content: `
					The tremendous flexibility and and the possibility to create your own dashboards with the metrics you want to keep one eye on it all the time across different infrastructure products from different vendors.

					Also I like the very great support from the Merics and Logs team!			`,
					author: {
						name: 'Jan Unger',
						title: 'Network and Datacenter Engineer',
						company: 'Netcloud AG',
					},
				},
				{
					content: 'It makes for a great one-stop shop for monitoring key VMware metrics! I have been using CodeNotary CNIL Metrics and Logs for about a year. Setup and operational in less than 30 minutes. It comes pre-packaged with ready to use dashboards that are color coded with thresholds providing immediate feedback on performance, KPIs, health and areas of concerns. The team is skilled in this area and knows what their customer base is seeking. Overall, I’m very pleased with the application and the support team behind it. Highly recommended!',
					author: {
						name: 'Tarun Keswani',
						title: 'Principal Staff Engineer',
						company: 'Motorola Solutions',
					},
				},
				{
					content: `
					The tremendous flexibility and and the possibility to create your own dashboards with the metrics you want to keep one eye on it all the time across different infrastructure products from different vendors.

					Also I like the very great support from the Merics and Logs team!			`,
					author: {
						name: 'Jan Unger',
						title: 'Network and Datacenter Engineer',
						company: 'Netcloud AG',
					},
				},
			],
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#what-clients-say-section {
	position: relative;
	background-color: $cn-color-background;
	height: 760px !important;
	overflow: unset !important;

	.floating-container {
		position: absolute;
		top: -240px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
	}

	@include breakpoint-down(sm) {
		margin-bottom: -260px;

		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -20px;
		}

		.slick-slider {
			padding: 16px 16px 32px 16px !important;

			.slick-arrow {
				z-index: 1;

				&.slick-prev,
				&.slick-next {
					&,
					img {
						height: 40px !important;
						max-width: 40px !important;
					}
				}

				&.slick-next {
					right: -8px !important;
				}

				&.slick-prev {
					left: -8px !important;
				}
			}
		}
	}

	.slick-slider {
		padding: 50px;
		background: white;
		border-radius: 30px;

		.slick-dots {
			bottom: 15px;
			left: 0;

			.custom-dot {
				width: 15px;
				height: 15px;
				border-radius: 30px;
				background: $cn-color-primary_light;
				border: 1px solid $cn-color-dark !important;
			}

			.slick-active {
				.custom-dot {
					background: $cn-color-primary;
				}
			}
		}

		.slick-arrow {
			img {
				object-fit: contain;
			}

			&.slick-next {
				right: -50px;
			}

			&.slick-prev {
				left: -50px;
			}
		}

		.custom-arrow {
			width: 100px;
			height: 100px;

			&::before {
				content: none;
			}

			img {
				transform: scale(1.5);
			}
		}
	}
}
</style>
