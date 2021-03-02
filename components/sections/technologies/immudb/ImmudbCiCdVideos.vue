<template>
	<page-section
		id="ci-cd-videos-section"
		class="_padding-top-0"
	>
		<i-container>
			<i-row class="_margin-0 _padding-0">
				<i-column class="_margin-0 _padding-0">
					<page-section-header
						title="Community videos"
						:top="0"
						:bottom="2"
					/>
				</i-column>
			</i-row>
			<VueSlickCarousel v-bind="settings" @beforeChange="page = $event">
				<div>
					<i-row middle class="_padding-1">
						<i-column
							xs="12"
							sm="12"
							md="12"
						>
							<div v-if="page === 2" class="_embed _embed-16by9">
								<iframe
									width="504" height="284"
									src="https://www.youtube.com/embed/rQ4iZAM14m0" frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
								/>
							</div>
							<div v-else class="_embed _embed-16by9 video-placeholder" />
						</i-column>
					</i-row>
				</div>
			</VueSlickCarousel>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'ImmudbCiCdVideos',
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
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

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
