<template>
	<i-header
		id="home-header"
		size="sm"
	>
		<i-row class="_align-items-center">
			<i-column lg="6">
				<h1 class="h2 _font-weight-bold _text-white">
					Immutable change history of your business data with CodeNotary Ledger Compliance&reg;
				</h1>
				<p class="lead _text-white">
					On-premise or in the cloud; Secure, actionable observability with real cryptographic verification,
					processing millions of transactions a second.
				</p>
				<h5 class="_margin-top-1 _margin-bottom-2 _font-weight-bold _text-white">
					Powered by the world’s fastest immutable database.
				</h5>
				<p class="action">
					<i-button
						size="lg"
						outline
						variant="white"
						href="https://democnlc.codenotary.com"
						target="_blank"
						rel="nofollow"
					>
						Demo
					</i-button>
					<i-button
						variant="white"
						size="lg"
						class="_margin-left-1"
						@click="$emit('onLedgerComplianceModal')"
					>
						Start trial
					</i-button>
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

export default {
	name: 'HomeHeader',
	components: {
		LazyHydrate,
	},
	data() {
		return {
			playing: false,
			timeout: null,
		};
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

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-width: 175px;

#home-header {
	background: $color-primary;
	// -webkit-gradient(
	// 	linear,
	// 	left top,
	// 	left bottom,
	// 	180deg,
	// 	rgba(20, 96, 182, 1),
	// 	rgba(15, 72, 136, 1),
	// 	rgba(10, 48, 90, 1)
	// );
	overflow: hidden;
	width: 100%;

	h1 {
		margin-top: 0;
	}

	@include breakpoint-down(md) {
		padding-top: 5rem;
		padding-bottom: 5rem;
		text-align: center;

		.button-wrapper {
			margin-bottom: $spacer * 2;
		}
	}
}

#video-column {
	position: relative;

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
</style>
