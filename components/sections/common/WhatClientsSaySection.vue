<template>
	<PageSection
		id="what-clients-say-section"
		variant="transparent"
		:top-md="0"
		:top-sm="0"
		:top-xs="0"
		:style="`height: ${height}px`"
	>
		<i-container class="floating-container">
			<i-row>
				<h2 class="title">
					What Clients Say About Us
				</h2>
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
								src="/images/quotation.svg"
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
	props: {
		height: {
			type: [Number, String],
			default: 610,
		},
	},
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
					content: 'I have been using CodeNotary for years. Setup and operational in less than 30 minutes and provides immediate feedback on performance, KPIs, health and areas of concerns. Highly recommended!',
					author: {
						name: 'Tarun Keswani',
						title: 'Principal Staff Engineer',
						company: 'Motorola Solutions',
					},
				},
				{
					content: 'It is amazing to have this tremendous flexibility and the possibilities of easy and fast integrations.',
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
	overflow: unset !important;

	.title {
		text-transform: uppercase;
		z-index: 1;
		text-align: center;
		width: 100%;
		color: #244583;
		font-weight: 700;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 32px !important;
		line-height: 34px !important;

		@media screen and (max-width: $mobile-max-width) {
			font-size: 24px !important;
			line-height: 26px !important;
			top: -12px;
		}

		@media screen and (max-width: 767px) {
			max-width: 250px;
			top: -4px;
		}
	}

	.floating-container {
		position: absolute;
		top: -80px;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;

		@media screen and (max-width: 1080px) {
			top: -60px;
		}

		@media screen and (min-width: 768px) and (max-width: $mobile-max-width) {
			top: -80px;
		}
	}

	@include breakpoint-down(sm) {
		.floating-container {
			position: relative;
			margin: 0 !important;
			padding: 0 !important;
			width: 100% !important;
			bottom: -20px;
		}

		.slick-slider {
			padding: 16px 16px 0 16px !important;

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

		@media screen and (max-width: $mobile-max-width) {
			padding: 70px 50px 50px;
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
				padding: 60px 38px 30px 38px;
				height: 100%;
				min-height: 280px;
				display: flex;
				flex-direction: column;

				@media screen and (max-width: $mobile-max-width) {
					padding-top: 60px;
				}

				@media screen and (max-width: 529px) {
					padding-top: 50px;
				}
			}

			&-content,
			&-author-name,
			&-author-description {
				margin: 0;
			}

			&-quote-image {
				position: absolute;
				top: -7px;
				left: 49px;
				width: 80px;

				@media screen and (max-width: 1080px) {
					top: 3px;
				}

				@media screen and (max-width: $mobile-max-width) {
					top: 2px;
				}

				@media screen and (max-width: 767px) {
					width: 60px;
					left: 38px;
					top: 60px;
				}
			}

			&-content {
				font-weight: 400;
				font-size: 14px;
				line-height: 22px;
				flex: auto;
			}

			&-author-name {
				color: #244583;
				font-weight: 700;
				font-size: 14px;
				line-height: 12px;
			}

			&-author-description {
				color: #768e98;
				font-weight: 400;
				font-size: 12px;
				line-height: 12px;
				margin-top: 5px;
			}

			hr {
				border-top: 1px solid #c1c1c1;
			}

			@media screen and (max-width: $mobile-max-width) {
				padding: 30px 35px 25px;
			}

			@media screen and (max-width: 767px) {
				padding: 100px 35px 25px;
			}

			@media screen and (max-width: 529px) {
				padding: 0;
				padding-top: 80px;
			}
		}
	}

	.slick-slide {
		& > div {
			height: 100%;
		}
	}
}
</style>
