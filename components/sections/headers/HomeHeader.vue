<template>
	<i-header id="home-header">
		<i-row class="_align-items-center">
			<i-column lg="6">
				<h1 class="h2 _font-weight-bold">
					World's first cryptographically signed and client-verifiable journal with CodeNotary Ledger Compliance&reg;
				</h1>
				<p class="lead">
					Deploy anywhere; Store transactions, CI/CD pipelines, audit-trails, IoT telemetry, ML test sets  with cryptographic verification;
					Processing millions of transactions a second.
				</p>
				<p class="_font-weight-bold">
					Powered by the world’s fastest immutable database.
				</p>
				<p class="action">
					<i-button
						size="lg"
						outline
						variant="primary"
						href="https://democnlc.codenotary.com"
						target="_blank"
						rel="nofollow"
					>
						Demo
					</i-button>
					<i-button
						variant="primary"
						size="lg"
						class="_margin-left-1"
						@click="ledgerComplianceModalOpen = true"
					>
						Start trial
					</i-button>
					<ledger-compliance-modal v-model="ledgerComplianceModalOpen" />
				</p>
			</i-column>
			<i-column
				id="video-column" lg="6"
				:class="{ 'playing': playing }"
			>
				<div id="video" class="_embed _embed-16by9">
					<video
						src="/videos/ci-cd.mp4"
						poster="/videos/ci-cd.jpg"
						width="1280" height="720"
						controls
						@playing="onPlayVideo"
						@pause="onPauseVideo"
						@ended="onPauseVideo"
					/>
				</div>
				<img
					id="mascot" src="/images/mascot.png"
					alt="CodeNotary Mascot"
				>
			</i-column>
		</i-row>
	</i-header>
</template>

<script>
export default {
	name: 'HomeHeader',
	components: {
		LedgerComplianceModal: () => import('~/components/common/modals/LedgerComplianceModal'),
	},
	data() {
		return {
			ledgerComplianceModalOpen: false,
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

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-width: 175px;

#home-header {
	background-color: white;
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
