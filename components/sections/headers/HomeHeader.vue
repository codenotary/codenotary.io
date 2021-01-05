<template>
	<i-header id="home-header">
		<i-row class="_align-items-center">
			<i-column lg="6">
				<h1 class="h2 _font-weight-bold">
					Immutable change history of your business data with CodeNotary Ledger Compliance&reg;
				</h1>
				<p class="lead">
					On-premise or in the cloud; Secure, actionable observability with real cryptographic verification,
					processing millions of transactions a second. Built-in Immutability for Cyber Resiliency.
				</p>
				<div class="button-wrapper">
					<webinar-modal v-model="webinarModalOpen" />
					<i-button
						variant="primary" size="lg"
						@click="webinarModalOpen = true"
					>
						Schedule a Webinar
					</i-button>
				</div>
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
import WebinarModal from '~/components/common/modals/WebinarModal';

export default {
	name: 'HomeHeader',
	components: {
		WebinarModal,
	},
	data() {
		return {
			webinarModalOpen: false,
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
