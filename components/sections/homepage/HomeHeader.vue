<template>
	<i-header
		id="home-header"
		size="sm"
	>
		<i-row class="_align-items-center">
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
}

::v-deep #home-header {
	overflow: hidden;
	width: 100%;

	h1 {
		margin-top: 0;
		margin-bottom: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
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

	#video {
		border-radius: 30px;
	}

	&.playing {
		#mascot {
			transform: translateX($mascot-width);
		}
	}
}

#mascot {
	width: $mascot-width;
	height: auto;
	position: absolute;
	right: 0;
	bottom: -1rem;
	transition: transform 0.5s ease;
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
</style>
