<template>
	<UiPageSection
		id="ci-cd-videos-section"
		class="_padding-top-0"
	>
		<v-container>
			<v-row class="ma-0 pa-0">
				<v-col class="ma-0 pa-0">
					<UiPageSectioNHeader
						title="Community videos"
						:top="0"
						:bottom="2"
					/>
				</v-col>
			</v-row>
			<VueSlickCarousel
				class="fill-width"
				v-bind="settings"
				@beforeChange="page = $event"
			>
				<div class="pa-4-2">
					<div class="_embed _embed-16by9">
						<iframe
							width="504" height="284"
							src="https://www.youtube.com/embed/rQ4iZAM14m0" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
						/>
					</div>
					<!-- <div v-else class="_embed _embed-16by9 video-placeholder" /> -->
				</div>
				<div class="pa-4-2">
					<div class="_embed _embed-16by9">
						<iframe
							width="504" height="284"
							src="https://www.youtube.com/embed/01_wEMdOp1U" frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
						/>
					</div>
					<!-- <div v-else class="_embed _embed-16by9 video-placeholder" /> -->
				</div>
			</VueSlickCarousel>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbCiCdVideos',
	data: () => ({
		page: 2,
		timeout: null,
		settings: {
			slidesToShow: 2,
			rows: 1,
			arrows: true,
			dots: true,
			infinite: true,
			slidesToScroll: 1,
			swipeToSlide: true,
			centerMode: true,
			responsive: [
				{
					breakpoint: 900,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 1,
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
		this.page = null;
		this.timeout = null;
		this.settings = null;
	},
};
</script>

<style lang="scss">
#ci-cd-videos-section {
	background-color: white;
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: 96px;
			object-fit: contain;
		}

		.body {
			border: none;
			text-align: center;
		}
	}

	.video-placeholder {
		// background-color: #000;
	}
}
</style>
