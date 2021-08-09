<template>
	<PageSection id="what-clients-say-section">
		<i-container class="floating-container _padding-x-4">
			<i-row>
				<h3 class="title">
					What Clients Say About Us
				</h3>
			</i-row>
			<i-row>
				<i-column>
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
							<div class="review-content-wrapper">
								<p class="review-content">
									{{ review.content }}
								</p>
								<hr>
								<p v-if="review.author.name" class="review-author-name">
									{{ review.author.name }}
								</p>
								<p class="review-author-description">
									{{ review.author.title }}, {{ review.author.company }}
								</p>
							</div>
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
						breakpoint: 991,
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

					Also I like the very great support from the Merics and Logs team!`,
					author: {
						name: 'Jan Unger',
						title: 'Network and Datacenter Engineer',
						company: 'Netcloud AG',
					},
				},
				{
					content: 'While looking for a suitable monitoring, analysis and troubleshooting product for our VMware vSphere infrastructure, we found Performance Analyzer. We were impressed by the flexibility and ease of deployment of the virtual appliance and the nearly instant time to value.',
					author: {
						name: 'Millie Cruz',
						title: 'Network Administrator',
						company: 'American College of Surgeons',
					},
				},
				{
					content: 'We receive all key indicators at a glance and no longer have to gather the information in various systems.',
					author: {
						title: 'Team Lead IT Platforms',
						company: '3rd largest Bank in Germany',
					},
				},
				{
					content: 'Performance Analyzer was running in 25 minutes. CodeNotary CNIL Metrics and Logs has provided us with insights into our VMware cluster performance that we have never previously had and immediately alerted us to several issues we were unaware of.',
					author: {
						title: 'Head of Information Systems',
						company: 'Brett Martin Ltd',
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

	.title {
		text-transform: uppercase;
		margin-bottom: -100px;
		z-index: 1;
		text-align: center;
		width: 100%;
		color: #244583;
		font-weight: 700;
		font-size: 32px !important;
		line-height: 34px !important;

		@media screen and (max-width: $mobile-max-width) {
			margin-top: -80px;
			color: white;
		}
	}

	.floating-container {
		position: absolute;
		top: -80px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;

		@media screen and (min-width: 768px) and (max-width: $mobile-max-width) {
			top: -20px;
		}
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
		padding: 95px 50px 50px;
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

			@media screen and (max-width: 529px) {
				bottom: 0;
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

		.review {
			overflow: hidden;
			position: relative;
			padding: 20px 10px 10px;
			height: 100%;

			&-content-wrapper {
				background: #faf9f8;
				border-radius: 30px;
				border: 1px solid #244583;
				box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
				padding: 90px 48px 48px 60px;
				height: 100%;
				display: flex;
				flex-direction: column;

				@media screen and (max-width: $mobile-max-width) {
					padding-top: 60px;
				}
			}

			&-content,
			&-author-name,
			&-author-description {
				margin: 0;
			}

			&-quote-image {
				position: absolute;
				top: 0;
				left: 70px;
			}

			&-content {
				font-weight: 400;
				font-size: 16px;
				line-height: 20px;
				flex: auto;
			}

			&-author-name {
				color: #244583;
				font-weight: 700;
				font-size: 16px;
				line-height: 20px;
			}

			&-author-description {
				color: #768e98;
				font-weight: 400;
				font-size: 16px;
				line-height: 22px;
				margin-top: 5px;
			}

			hr {
				border-top: 1px solid #c1c1c1;
			}

			@media screen and (max-width: $mobile-max-width) {
				padding: 30px 35px 25px;
			}

			@media screen and (max-width: 529px) {
				padding: 0;
			}
		}
	}

	.slick-list {
		overflow-y: visible;
	}

	.slick-slide {
		& > div {
			height: 100%;
		}
	}
}
</style>
