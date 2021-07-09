<template>
	<div class="home-header-container">
		<i-header
			id="home-header"
			size="sm"
		>
			<i-row class="_align-items-center main-content">
				<i-column lg="5">
					<h2 class="_font-weight-bold cn-text-white title first">
						{{ content.headerSection.title1 }}
					</h2>
					<h2 class="_font-weight-bold cn-text-secondary title first">
						{{ content.headerSection.title2 }}
					</h2>
					<h2 class="_font-weight-bold cn-text-white title">
						{{ content.headerSection.title3 }}
					</h2>

					<p class="lead cn-text-muted_blue subtitle cn-text-sm">
						{{ content.headerSection.subtitle }}
					</p>
					<!--				<h5 class="_margin-top-1 _margin-bottom-2 _font-weight-bold _text-white">-->
					<!--					Powered by the world’s fastest immutable database.-->
					<!--				</h5>-->
					<p class="action _display-flex _flex-direction-row">
						<cn-button
							variant="secondary"
							href="https://dashboard.codenotary.io/auth/signup"
							target="_blank"
							rel="nofollow"
							size="lg"
						>
							Free Trial
						</cn-button>
						<!--
						<cn-button
							variant="light"
							size="lg"
							class="_margin-left-1"
							@click.native="onDownloadClick"
						>
							Self-Hosted
						</cn-button>
						-->
					</p>
				</i-column>
				<i-column lg="1" />
				<i-column
					id="video-column"
					lg="6"
					:class="{ 'playing': playing }"
				>
					<div id="video" class="_embed _embed-16by9">
						<LazyHydrate when-idle>
							<video
								ref="videoPlayer"
								src="/videos/ci-cd.mp4"
								poster="/videos/ci-cd.jpg"
								width="1280"
								height="720"
								:controls="playing"
								@playing="onPlayVideo"
								@pause="onPauseVideo"
								@ended="onPauseVideo"
							/>
						</LazyHydrate>
						<div class="video-play_button" @click="playVideo">
							<img src="/icons/play.svg">
						</div>
					</div>
					<img
						id="mascot"
						src="/images/mascot.png"
						alt="CodeNotary Mascot"
					>
				</i-column>
			</i-row>
		</i-header>
		<client-only>
			<div class="gradient-box" />
			<div class="secondary-box" :style="computedStyle" />
		</client-only>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import homepage from '@/content/homepage';
import { eventHub } from '@/helpers/eventhub';

export default {
	name: 'HomeHeader',
	components: {
		LazyHydrate,
	},
	data() {
		return {
			content: homepage,
			playing: false,
			timeout: null,
			rightBarBottom: '0px',
		};
	},
	computed: {
		computedStyle() {
			return {
				bottom: this.rightBarBottom,
			};
		},
	},
	beforeDestroy () {
		this.ledgerComplianceModalOpen = null;
		this.playing = null;
		this.timeout = null;
	},
	mounted() {
		if (typeof window !== 'undefined') {
			this.calculateSecondaryBar();
			window.addEventListener('resize', this.calculateSecondaryBar, { passive: true });
		}
	},
	methods: {
		onPlayVideo() {
			clearTimeout(this.timeout);
			this.playing = true;
		},
		playVideo() {
			if (this.$refs.videoPlayer) {
				this.$refs.videoPlayer.play();
			}
		},
		onPauseVideo() {
			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.playing = false;
			}, 500);
		},
		calculateSecondaryBar() {
			if (!process.browser) {
				return;
			}

			const gradientDegrees = window.innerWidth >= 2800 ? 2 : window.innerWidth <= 991 ? 8 : 5; // Skew of the gradient div
			const secondaryDegrees = window.innerWidth >= 2800 ? 1 : window.innerWidth <= 991 ? 5 : 3; // Skew of the secondary div
			const gradientLineLength = window.innerWidth / Math.sin((90 - gradientDegrees) * Math.PI / 180) * Math.sin(90 * Math.PI / 180); // How long is the oblique line of the gradient div
			const secondaryLineSideLength = gradientLineLength / 2 / Math.sin((90 - secondaryDegrees) * Math.PI / 180) * Math.sin((gradientDegrees + secondaryDegrees) * Math.PI / 180); // How long is the right side of the secondary div
			this.rightBarBottom = (-secondaryLineSideLength + (window.innerWidth <= 991 ? 50 : 100)) + 'px'; // How far should I move the secondary div to the bottom in order to meet the gradient div exactly in the middle
		},
		onDownloadClick() {
			eventHub.$emit('displayTrialModal', true);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-height: 164px;
$mascot-height-small: 100px;

#home-header {
	background: transparent;
	z-index: 3;
	position: relative;
}

::v-deep #home-header {
	overflow-x: hidden;
	width: 100%;

	h2 {
		margin-top: 0;
		margin-bottom: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 6rem;
		//margin-bottom: 2rem;
		text-align: center;

		.button-wrapper {
			margin-bottom: $spacer * 2;
		}
	}
}

#video-column {
	#video {
		border-radius: 30px;
	}

	&.playing {
		#mascot {
			left: 100%;
			right: 0;
		}

		.video-play_button {
			pointer-events: none;
			opacity: 0;
		}
	}
}

#mascot {
	//z-index: 4;
	height: $mascot-height;
	width: auto;
	position: absolute;
	left: 0;
	bottom: -6rem;
	transition: all 0.8s ease-in-out;

	@media screen and (max-width: $mobile-max-width) {
		height: $mascot-height-small;
		bottom: -3rem;
	}
}

//.title {
//	color: white !important;
//}

.subtitle {
	color: white !important;
	margin-bottom: 20px;
	margin-top: 20px;
}

@media screen and (min-width: 992px) {
	.title {
		text-transform: uppercase;
	}
}

@media screen and (max-width: $mobile-max-width) {
	.title:first-of-type {
		margin-top: 20px !important;
	}

	.action {
		justify-content: center;
		margin-bottom: 30px;
	}
}

.home-header-container {
	position: relative;
	background-color: $cn-color-background;
}

// Oblique box on the bottom
.gradient-box {
	width: 100vw;
	max-width: 100%;
	height: 150%;
	position: absolute;
	bottom: 100px;
	left: 0;
	transform: skewY(-5deg);
	-webkit-transform-origin: right;
	z-index: 2;
	box-shadow: 3px 10px 10px -10px rgba(0, 0, 0, 0.15); // Custom bottom-only shadow
	overflow: hidden;
	transition: transform 0.5s linear, bottom 0.5s linear;

	@media screen and (min-width: 2800px) {
		transform: skewY(-2deg);

		&::after {
			transform: skewY(2deg);
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		transform: skewY(-8deg);
		bottom: 50px;

		&::after {
			transform: skewY(8deg);
		}
	}

	&::after {
		content: '';
		background: $cn-dark-gradient;
		transform: skewY(5deg);
		width: 100%;
		height: 200%;
		position: inherit;
	}
}

.secondary-box {
	background-color: $cn-color-secondary;
	width: 100%;
	position: absolute;
	right: 0;
	height: 100%;
	-webkit-transform-origin: right;
	transform: skewY(3deg);
	z-index: 1;
	box-shadow: $cn-shadow-sm;
	transition: transform 0.5s linear, bottom 0.5s linear;

	@media screen and (min-width: 2800px) {
		transform: skewY(1deg);
	}

	@media screen and (max-width: $mobile-max-width) {
		transform: skewY(5deg);
	}
}

.main-content {
	z-index: 3;

	@media screen and (max-width: $mobile-max-width) {
		padding-top: 16px;

		.title.first {
			display: inline;
		}
	}
}

.video-play_button {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #15395475;
	transition: opacity 0.15s ease-in-out;
	opacity: 1;

	img {
		transition: transform 100ms linear;

		@media screen and (max-width: $mobile-max-width) {
			height: 70px;
			width: 70px;
		}

		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
