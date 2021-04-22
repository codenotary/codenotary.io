<template>
	<PageSection
		id="benefits-section"
	>
		<i-container class="main-container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<PageSectionHeader
				:title="content.benefitsSection.title"
				weight="bold"
				class="_width-75 _text-uppercase"
				:top="0"
				:bottom="2"
			/>
			<div class="benefits-body">
				<div class="benefit-card" v-for="(card, index) in content.benefitsSection.cards" :key="index" :class="'cn-bg-' + card.backgroundColor">
					<div class="benefit-card-header">
						<img :src="card.iconName">
					</div>
					<div class="benefit-card-body">
						<h4 class="cn-text-white _font-weight-bold _text-center _margin-0">{{ card.title }}</h4>
						<p class="cn-text-white _margin-0 _text-center">{{ card.subtitle }}</p>
					</div>
				</div>
			</div>
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

.container {
	padding-left: 30px;
	padding-right: 30px;
	padding-bottom: 60px;
}

.main-container {
	background-color: white;
	border-radius: $cn-border-radius-lg;
}

.benefits-body {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	width: 100%;

	.benefit-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: start;
		height: 420px;
		width: 276px;
		border-radius: $cn-border-radius-lg;
		box-shadow: $cn-shadow-sm;

		.benefit-card-header {
			background-color: white;
			flex: 0 0 0;
			width: 100%;
			min-height: 180px;
			display: flex;
			align-items: center;
			justify-content: center;
			margin-bottom: 20px;
			box-shadow: $cn-shadow-sm;
			border-radius: $cn-border-radius-lg;
		}

		.benefit-card-body {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			padding: 8px 20px 30px;
			flex: 1;

			h4 {
				min-height: 70px;
			}
		}
	}
}
</style>
