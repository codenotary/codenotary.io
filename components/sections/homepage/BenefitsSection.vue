<template>
	<PageSection
		id="benefits-section"
		variant="transparent"
		:top="0"
		:bottom="0"
	>
		<i-container>
			<i-row>
				<i-column sm="12">
					<div class="main-container _display-flex _flex-direction-column _align-items-center _justify-content-center _padding-bottom-2">
						<PageSectionHeader
							:title="content.benefitsSection.title"
							weight="bold"
							class="_width-75 _text-uppercase"
							:top="0"
							:bottom="0"
						/>
						<div class="benefits-body">
							<div v-for="(card, index) in content.benefitsSection.cards" :key="index">
								<div class="benefit-card _margin-top-1" :class="`cn-bg-${card.backgroundColor}`">
									<div class="benefit-card-header">
										<img class="cn-icon" :src="card.iconName">
									</div>
									<div class="benefit-card-body">
										<h5 class="cn-text-white _font-weight-bold _text-center _margin-0">
											{{ card.title }}
										</h5>
										<p class="cn-text-white _margin-0 _text-center">
											{{ card.subtitle }}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import homepage from '@/content/homepage';

export default {
	name: 'BenefitsSection',
	data() {
		return {
			carouselSettings: {
				arrows: true,
				// fade: true,
				infinite: true,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				lazyLoad: 'progressive',
				adaptiveHeight: true,
				autoplay: true,
				autoplaySpeed: 5000,
			},
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>
#benefits-section {
	@media screen and (max-width: 767px) {
		border-top: 1px solid $cn-color-light;
		margin-top: -100px;
	}

	@media screen and (max-width: 576px) {
		margin-top: -140px;
	}

	.container {
		padding-left: 0;
		padding-right: 0;

		@media screen and (max-width: 767px) {
			margin-right: 0 !important;
			margin-left: 0 !important;
			max-width: 100% !important;
		}
	}

	.main-container {
		background-color: white;
		border-radius: $cn-border-radius-lg;
		box-shadow: $cn-shadow-sm;
		z-index: 2;
		position: relative;
		margin-top: -4rem;

		@media screen and (max-width: 767px) {
			margin-top: 0;
			background-color: transparent;
			box-shadow: none;
		}

		::v-deep h2 {
			margin-bottom: 8px;

			@media screen and (max-width: 767px) {
				color: #fff !important;
			}
		}
	}

	.benefits-body {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		width: 100%;
		flex-wrap: wrap;

		@media screen and (max-width: 767px) {
			justify-content: center;
		}

		@media screen and (max-width: 767px) {
			& > * {
				flex-basis: 50%;
				display: flex;

				&:nth-child(even) {
					justify-content: flex-start;
				}

				&:nth-child(odd) {
					justify-content: flex-end;
				}
			}
		}

		.benefit-card {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			height: 380px;
			width: 220px;
			border-radius: $cn-border-radius-lg;
			box-shadow: $cn-shadow-sm;
			margin-left: 10px;
			margin-right: 10px;

			.benefit-card-header {
				background-color: white;
				position: relative;
				flex: 0 0 0;
				width: 100%;
				min-height: 115px;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 39px;
				box-shadow: $cn-shadow-sm;
				border-radius: $cn-border-radius-lg;

				&::after {
					content: url('/icons/triangle.svg');
					position: absolute;
					bottom: -25px;
					transform: rotate(180deg) scale(0.8);
				}
			}

			.benefit-card-body {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: flex-start;
				padding: 0 16px 16px;
				flex: 1;

				h5 {
					min-height: 50px;
					width: 160px;
				}
			}
		}
	}

	@media screen and (max-width: 1080px) {
		::v-deep h2 {
			font-size: 24px;
			line-height: 24px;
		}

		.benefits-body {
			.benefit-card {
				width: 180px;
				height: 350px;
				margin-left: 10px;
				margin-right: 10px;

				.benefit-card-body {
					padding: 16px;
					min-height: 53px;

					h5 {
						font-size: 18px;
						line-height: 24px;
						min-height: 50px;
					}
				}

				.benefit-card-header {
					min-height: 85px;
					margin-bottom: 8px;
				}
			}
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		::v-deep h2 {
			font-size: 24px;
			line-height: 24px;
		}

		.benefits-body {
			.benefit-card {
				width: 230px;
				height: 300px;
				margin-left: 10px;
				margin-right: 10px;

				.benefit-card-body {
					padding: 16px;
					min-height: 53px;

					h5 {
						font-size: 18px;
						line-height: 24px;
						min-height: 50px;
					}
				}

				.benefit-card-header {
					min-height: 85px;
					margin-bottom: 8px;
				}
			}
		}
	}
}
</style>
