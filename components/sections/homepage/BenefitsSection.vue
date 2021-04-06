<template>
	<PageSection
		id="benefits-section"
		variant="white"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center _margin-bottom-6">
			<hr class="_width-100"/>
			<PageSectionHeader
				title="Key benefits of using CodeNotary Ledger Compliance"
				:top="0"
				:bottom="0"
			/>
			<fa class="icon" icon="chevron-down" />
		</i-container>
		<i-container>
			<VueSlickCarousel v-bind="carouselSettings" class="benefits-carousel">
				<template #prevArrow>
					<fa class="icon custom-arrow" icon="chevron-left"/>
				</template>
				<template #nextArrow>
					<fa class="icon custom-arrow" icon="chevron-right"/>
				</template>
				<div v-for="(slide, slideIndex) in content.benefitsSection.slides" :key="slideIndex"
					class="slide"
				>
					<div class="imageLabel">
						{{ slide.imageLabel }}
					</div>
					<img :src="slide.imageUrl" draggable="false">
					<div class="details _margin-left-1">
						<h5 class="title _font-weight-bold">
							{{ slide.title }}
						</h5>
						<div class="content cn-text-muted_blue">
							<ul>
								<li v-for="(feature, featureIndex) in slide.list" :key="featureIndex">
									{{ feature }}
								</li>
							</ul>
						</div>

						<cn-button link variant="dark"
							class="action cn-text-muted_blue"
							:to="slide.internalLink ? { name: slide.internalLink.type, params: { post: slide.internalLink.entry }} : null" :href="slide.href">
							{{ slide.actionText }}
							<fa class="icon _margin-left-2" icon="arrow-right" />
						</cn-button>
					</div>
				</div>
			</VueSlickCarousel>
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
			},
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>

.custom-arrow {
	color: #a1aec0;
}

.slide {
	position: relative;
	border-radius: 30px;
	border: 3px solid #a1aec0;
	overflow: hidden;
	height: 500px;
	display: flex !important;
	flex-direction: row;

	img {
		background: #a1aec0;
		object-fit: cover;
		width: 40%;
		border-radius: 25px;
		position: relative;
	}

	.imageLabel {
		width: 38%;
		position: absolute;
		left: 5%;
		top: 15px;
		background-color: #a1aec0;
		color: white;
		z-index: 2;
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.details {
		padding: 30px;
		display: flex;
		height: 100%;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-self: flex-start;

		.title {
			display: flex;
			flex: 1;
			align-items: flex-end;
		}

		.content {
			flex: 1;
		}

		.action {
			align-self: end;
			flex: 0 0 0;
		}
	}
}

::v-deep .slick-list {
	height: 500px !important;

	//@media (min-width: 1024px) {
	.slick-slide {
		padding-right: 10px;
		padding-left: 10px;
	}

	//}
}

.container {
	padding-left: 30px;
	padding-right: 30px;
}
</style>
