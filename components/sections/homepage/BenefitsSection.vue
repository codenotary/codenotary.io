<template>
	<PageSection
		id="benefits-section"
	>
		<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center">
			<hr class="_width-100"/>
			<PageSectionHeader
				:title="content.benefitsSection.title"
				weight="bold"
				:top="0"
				:bottom="2"
			/>
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
					<img :src="slide.imageUrl" draggable="false">
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
				autoplay: true,
				autoplaySpeed: 5000,
			},
			content: homepage,
		};
	},
};
</script>

<style lang="scss" scoped>

.custom-arrow {
	color: $cn-color-dark;
}

.slide {
	position: relative;
	border-radius: 7px !important;
	//border: 3px solid $cn-color-grey;
	overflow: hidden;
	//height: 500px;
	display: flex !important;
	flex-direction: row;
	height: 500px;

	img {
		//background: #a1aec0;
		object-fit: contain;
		//width: 40%;
		width: 100%;
		border-radius: 25px;
		position: relative;
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
