<template>
	<PageSection
		id="bom-info-section"
		:top="8"
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
						class="_embed"
					>
						<script
							v-if="playing"
							id="asciicast-Jnu5dIanEMzJQ8cNqjlN5su9Q"
							src="https://asciinema.org/a/Jnu5dIanEMzJQ8cNqjlN5su9Q.js"
							async
							data-width="400"
							data-size="small"
							data-rows="13"
							data-autoplay="true"
						/>
						<img
							v-if="!playing"
							src="/videos/bom-info-screenshot.svg"
						>
						<div
							v-if="!playing"
							class="video-play_button"
						>
							<img
								src="/icons/play.svg"
								@click="playing = true"
							>
						</div>
					</div>
				</i-column>
			</i-row>
			<h3 class="_font-weight-bold cn-text-white _text-uppercase _text-center _margin-top-2">
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
		#video {
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 15px;
			height: 455.34px;

			@media screen and (min-width: 992px) {
				height: 362.28px;
			}

			@media screen and (min-width: 768px) {
				height: 270.88px;
			}

			@media screen and (max-width: 767px) {
				height: 203.56px;
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
			min-width: 90px;
			margin-top: 20px;
		}

		.tech {
			text-align: center;

			&-image {
				height: 45px;
				margin-bottom: 10px;
			}

			&-title {
				margin: 0;
				font-weight: 700;
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				color: white;
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
