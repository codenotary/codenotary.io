<template>
	<div class="home-header-container">
		<i-header
			id="home-header"
			size="sm"
		>
			<i-row class="_align-items-center main-content">
				<i-column lg="6">
					<h1 class="h2 _font-weight-bold cn-text-dark title">
						{{ content.headerSection.title }}
					</h1>

					<p class="lead cn-text-muted_blue subtitle">
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
						>
							Cloud
						</cn-button>
						<cn-button
							variant="light"
							size="lg"
							class="_margin-left-1"
							@click="ledgerComplianceModalOpen = true"
						>
							Self-Hosted
						</cn-button>
						<ledger-compliance-modal v-model="ledgerComplianceModalOpen" />
					</p>
				</i-column>
				<i-column
					id="video-column"
					lg="6"
					:class="{ 'playing': playing }"
				>
					<div id="video" class="_embed _embed-16by9">
						<LazyHydrate when-idle>
							<video
								src="/videos/ci-cd.mp4"
								poster="/videos/ci-cd.jpg"
								width="1280"
								height="720"
								controls
								@playing="onPlayVideo"
								@pause="onPauseVideo"
								@ended="onPauseVideo"
							/>
						</LazyHydrate>
					</div>
					<img
						id="mascot"
						src="/images/mascot.png"
						alt="CodeNotary Mascot"
					>
				</i-column>
			</i-row>
		</i-header>
		<div class="gradient-box"></div>
		<div class="secondary-box"></div>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import homepage from '@/content/homepage';

export default {
	name: 'HomeHeader',
	components: {
		LazyHydrate,
                LedgerComplianceModal: () => import('~/components/global/modals/LedgerComplianceModal'),
	},
	data() {
		return {
			ledgerComplianceModalOpen: false,
			content: homepage,
			playing: false,
			timeout: null,
		};
	},
	beforeDestroy () {
		this.ledgerComplianceModalOpen = null;
		this.playing = null;
		this.timeout = null;
	},
	methods: {
		onPlayVideo() {
			clearTimeout(this.timeout);
			this.playing = true;
		},
		onPauseVideo() {
			clearTimeout(this.timeout);
			this.timeout = setTimeout(() => {
				this.playing = false;
			}, 500);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-width: 175px;

#home-header {
	background: $cn-dark-gradient;
	z-index: 2;
}

::v-deep #home-header {
	overflow-x: hidden;
	width: 100%;

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 6rem;
		margin-bottom: 2rem;
		text-align: center;

		.button-wrapper {
			margin-bottom: $spacer * 2;
		}
	}

	.action {
		padding-top: 30px;
	}
}

#video-column {
	position: relative;
	z-index: 4;

	#video {
		border-radius: 30px;
	}

	&.playing {
		#mascot {
			//transform: translateX($mascot-width);
			left: 100%;
			right: 0;
		}
	}
}

#mascot {
	z-index: 4;
	width: $mascot-width;
	height: auto;
	position: absolute;
	left: 0;
	bottom: -6rem;
	//transition: all 0.8s ease-in-out;
	-webkit-transtition: left 0.8s ease-in-out, right 0.8s ease-in-out;
	transition: left 0.8s ease-in-out, right 0.8s ease-in-out;

	@media screen and (max-width: 1000px) {
		left: calc(#{$mascot-width} * 3);
	}
}

.title {
	color: white !important;
}

.subtitle {
	color: white !important;
}

@media screen and (min-width: 1024px) {
	.title {
		text-transform: uppercase;
	}
}

.home-header-container {
	position: relative;
}

.gradient-box {
	width: 100vw;
	max-width: 100%;
	height: 150px;
	position: absolute;
	bottom: -75px;
	left: 0;
	transform: skewY(-5deg);
	-webkit-transform-origin: left;
	z-index: 3;
	box-shadow: 3px 10px 10px -10px rgba(0, 0, 0, 0.15); // Custom bottom-only shadow
	overflow: hidden;

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
	width: 50vw;
	height: 100px;
	position: absolute;
	bottom: -50px;
	right: 0;
	-webkit-transform-origin: right;
	transform: skewY(3deg);
	z-index: 1;
	box-shadow: $cn-shadow-sm;
}

.main-content {
	z-index: 3;
}
</style>
