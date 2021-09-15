<template>
	<PageSection
		id="bom-info-section"
		:top-xs="7"
		:top="8"
		:bottom-xs="8"
		:bottom="6"
	>
		<i-container class="main-container _display-flex _flex-direction-column _align-items-center _justify-content-center">
			<h3 class="_font-weight-bold cn-text-white _text-uppercase _text-center">
				Our CLI tool makes your software supply chain auditable with tamperproof Bill of Material
			</h3>
			<i-row style="width: 100%;">
				<i-column
					id="video-column"
					:class="{ playing }"
				>
					<div
						id="video"
						ref="video"
						class="_embed"
					>
						<template
							v-if="!playing"
						>
							<img
								src="/videos/bom-info-screenshot.svg"
							>
							<div
								class="video-play_button"
							>
								<img
									src="/icons/play.svg"
									@click="playVideo"
								>
							</div>
						</template>
					</div>
				</i-column>
			</i-row>
			<div class="_margin-top-3 _margin-bottom-2 _margin-bottom-xs-8">
				<h3 class="_font-weight-bold cn-text-white _text-uppercase _text-center">
					Software Bill of Material for:
				</h3>
				<div class="tech-row">
					<i-column
						v-for="tech in technologies"
						:key="tech.title"
						xs="3"
						sm="3"
						md="3"
						lg="1"
						class="tech-column"
					>
						<div class="tech">
							<img
								:src="`/icons/${tech.image}.svg`"
								:alt="tech.title"
								width="90"
								class="tech-image"
							>
							<p class="tech-title">
								{{ tech.title }}
							</p>
						</div>
					</i-column>
					<i-column
						xs="12"
						sm="12"
						md="12"
						lg="1"
						class="tech-column"
					>
						<p class="and-more">
							and more...
						</p>
					</i-column>
				</div>
			</div>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'BOMInfoSection',
	data() {
		return {
			playing: false,
			technologies: [
				{
					image: 'docker',
					title: 'Docker',
				},
				{
					image: 'python',
					title: 'Python',
				},
				{
					image: 'Go',
					title: 'Go',
				},
				{
					image: 'Maven',
					title: 'Java (Maven)',
				},
				{
					image: 'node.js',
					title: 'Node.js (NPM)',
				},
				{
					image: 'dotNet',
					title: '.Net',
				},
				{
					image: 'C',
					title: 'C',
				},
				{
					image: 'CPP',
					title: 'C++',
				},
			],
			asciinemaId: 'Jnu5dIanEMzJQ8cNqjlN5su9Q',
		};
	},
	methods: {
		playVideo() {
			const screenWidth = window.innerWidth;
			const columnsConfig = screenWidth < 768
				? screenWidth > 575
					? { 'data-cols': 70 }
					: { 'data-cols': Math.floor(this.$refs.video.clientWidth / 7) }
				: {};
			const videoConfig = {
				id: 'asciicast-434900',
				src: 'https://asciinema.org/a/434900.js',
				async: 'true',
				'data-width': 400,
				'data-size': 'small',
				'data-rows': Math.floor(this.$refs.video.clientHeight / 16),
				...columnsConfig,
				'data-autoplay': 'true',
			};
			const videoScript = document.createElement('script');

			Object.entries(videoConfig).forEach((entry) => {
				videoScript.setAttribute(...entry);
			});

			this.$refs.video.appendChild(videoScript);

			this.playing = true;
		},
	},
};
</script>

<style lang="scss">
#bom-info-section {
	background: $cn-dark-gradient_inverse;

	h3 {
		margin: 0;
		margin-bottom: 20px;
		font-size: 32px !important;
		font-weight: 700 !important;
		line-height: 34px !important;

		@media screen and (max-width: $mobile-max-width) {
			font-size: 24px !important;
			line-height: 26px !important;
		}
	}

	#video-column {
		padding: 0;

		#video {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 15px;
			height: 455.34px;

			@media screen and (min-width: 992px) {
				height: 426px;
			}

			@media screen and (min-width: 768px) {
				height: 426px;
			}

			@media screen and (max-width: 768px) {
				height: 280px;
			}

			@media screen and (max-width: 680px) {
				height: 134px;
			}

			img {
				width: 100%;
			}
		}

		.asciicast {
			&,
			iframe {
				width: 100% !important;
			}
		}

		.video-play_button {
			position: absolute;
			top: 47%;
			left: 49%;
			transform: translate(-50%, -50%) scale(1.2);
			cursor: pointer;
			z-index: 1;

			img {
				transition: transform 100ms linear;
				border-radius: 50%;

				&:hover {
					transform: scale(1.02);
					box-shadow: $cn-shadow-hoverBtn;
				}
			}

			@media screen and (max-width: 767px) {
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%) scale(0.7);
			}
		}
	}

	.tech-row {
		width: 100%;
		display: flex;
		justify-content: space-evenly;
		margin-top: -20px;
		flex-wrap: wrap;

		.tech-column {
			display: flex;
			flex-direction: column;
			align-items: center;
			min-width: 70px;
			margin-top: 20px;
		}

		.tech {
			text-align: center;

			&-image {
				height: 45px;
				margin-bottom: 10px;
				transition: transform 100ms linear;

				@media screen and (max-width: 767px) {
					height: 30px;
				}

				&:hover {
					transform: scale(1.2);
				}
			}

			&-title {
				margin: 0;
				font-weight: 700;
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				color: white;

				@media screen and (max-width: 767px) {
					font-size: 10px;
				}
			}
		}

		.and-more {
			font-weight: 700;
			font-size: 16px;
			line-height: 22px;
			color: #9fefde;
			height: 45px;
			display: flex;
			align-items: center;
			white-space: nowrap;
			margin: 0;
		}
	}
}
</style>
