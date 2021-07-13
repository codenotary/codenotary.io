<template>
	<UiPageSection
		id="home-videos-section"
		variant="white"
		:top="0"
		:bottom="0"
	>
		<i-container>
			<VueSlickCarousel
				v-bind="settings"
				@beforeChange="page = $event"
			>
				<div>
					<v-row middle class="_padding-1">
						<v-col
							class="_margin-x-auto"
							xs="8"
						>
							<div
								v-if="page === 0"
								class="_embed _embed-16by9"
							>
								<iframe
									width="560"
									height="315"
									src="https://www.youtube.com/embed/n9X89xVRbv8"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
							<div v-else class="_embed _embed-16by9 video-placeholder" />
						</v-col>
					</v-row>
				</div>
			</VueSlickCarousel>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'HomepageVideos',
	data: () => ({
		page: 0,
		timeout: null,
		settings: {
			arrows: true,
			dots: true,
			lazyLoad: 'progressive',
		},
	}),
};
</script>

<style lang="scss">

#ci-cd-videos-section {
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
