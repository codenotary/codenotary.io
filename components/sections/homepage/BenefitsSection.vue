<template>
	<i-container>
		<VueSlickCarousel v-bind="carouselSettings" class="benefits-carousel">
			<template #prevArrow>
				<fa class="icon custom-arrow" icon="chevron-left" />
			</template>
			<template #nextArrow>
				<fa class="icon custom-arrow" icon="chevron-right" />
			</template>
			<img v-for="(slide, index) in slides" :key="index" :src="slide.url" :alt="slide.alt" :title="slide.alt" class="slide" draggable="false"></img>
		</VueSlickCarousel>
	</i-container>
</template>

<script>
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
			slides: [
				{ url: '/images/placeholder.svg', alt: 'Placeholder Alt Text 1' },
				{ url: '/images/placeholder.svg', alt: 'Placeholder Alt Text 2' },
				{ url: '/images/placeholder.svg', alt: 'Placeholder Alt Text 3' },
				{ url: '/images/placeholder.svg', alt: 'Placeholder Alt Text 4' },
			],
		};
	},
};
</script>

<style lang="scss" scoped>

.custom-arrow {
	color: #a1aec0;
}

.slide {
	border-radius: 30px;
	border: 3px solid #a1aec0;
	overflow: hidden;
	background: #a1aec0;
	height: 500px;
	object-fit: cover;
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
