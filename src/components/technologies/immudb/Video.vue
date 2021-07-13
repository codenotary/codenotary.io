<template>
	<UiPageSection
		id="immudb-video-section"
	>
		<i-container>
			<v-row class="_display-flex _justify-content-center">
				<v-col
					xs="12"
					sm="12"
					md="10"
					lg="10"
					xl="10"
				>
					<UiPageSectionHeader
						title="Why immudb?"
						:bottom="0"
						color="white"
						weight="bold"
					/>
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 _display-flex _justify-content-center">
				<v-col
					class="_margin-bottom-3 _margin-x-auto"
					xs="12"
					sm="12"
					md="8"
					lg="8"
				>
					<span class="_text-white _text-center">
						immudb is a ledger database that has been developed with performance, scalability and versatility in mind. The user feedback has shown that they love the very high throughput and being able to store hashes as well as data. They see it as a great alternative to using a blockchain or ledger service.
					</span>
				</v-col>
			</v-row>
			<v-row class="_margin-bottom-1 _display-flex _justify-content-center">
				<v-col
					xs="12"
					sm="12"
					md="10"
					lg="10"
					xl="10"
				>
					<div class="video-features">
						<div class="video-feature-items">
							<v-row class="_margin-bottom-1 _display-flex _justify-content-center">
								<v-col
									class="video-feature-item"
									xs="6"
									sm="4"
									md="3"
									lg="2"
									xl="2"
								>
									<img class="cn-icon" src="/icons/easy_setup.svg">
									<p>
										Easy setup
									</p>
								</v-col>
								<v-col
									class="video-feature-item"
									xs="6"
									sm="4"
									md="3"
									lg="2"
									xl="2"
								>
									<img class="cn-icon" src="/icons/reliable_database.svg">
									<p>
										Fast and reliable immutable database
									</p>
								</v-col>
								<v-col
									class="video-feature-item"
									xs="6"
									sm="4"
									md="3"
									lg="2"
									xl="2"
								>
									<img class="cn-icon" src="/icons/secure_api.svg">
									<p>
										Secure REST API gateway
									</p>
								</v-col>
								<v-col
									class="video-feature-item"
									xs="6"
									sm="4"
									md="3"
									lg="2"
									xl="2"
								>
									<img class="cn-icon" src="/icons/admin.svg">
									<p>
										Powerful, easy to use admin
									</p>
								</v-col>
								<v-col
									class="video-feature-item"
									xs="6"
									sm="4"
									md="3"
									lg="2"
									xl="2"
								>
									<img class="cn-icon" src="/icons/open_source.svg">
									<p>
										Open source
									</p>
								</v-col>
							</v-row>
						</div>
					</div>
				</v-col>
			</v-row>
			<v-row class="_display-flex _justify-content-center">
				<v-col
					xs="12"
					sm="12"
					md="10"
					lg="10"
					xl="10"
				>
					<div
						v-if="!showVideo"
						class="thumbnail"
						@click="playVideo"
					>
						<img
							class="image-box image -responsive _margin-y-0 _margin-x-auto"
							:src="'/videos/thumbnail.png'"
							:alt="'immudb video thumbnail'"
						>
					</div>
					<div
						v-else
					>
						<youtube
							ref="player"
							video-id="rQ4iZAM14m0"
							:player-vars="{ autoplay: 1 }"
						/>
					</div>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbVideo',
	data: () => ({
		showVideo: false,
	}),
	methods: {
		playVideo () {
			this.showVideo = true;
		},
	},
};
</script>

<style lang="scss">
#immudb-video-section {
	padding: 187px 0 297px !important;
	color: white;
	background: $cn-dark-gradient;
	text-align: center;

	@media (max-width: $sm) {
		height: auto !important;
		margin-bottom: -60px;

		.column {
			padding: 0;

			.thumbnail {
				height: auto;
				max-width: 100%;
			}
		}
	}

	h2 {
		margin-top: 0;
		border-bottom: 0;
		color: white;
	}

	p {
		color: rgba(white, 0.8);
	}

	.thumbnail {
		position: relative;
		flex: 0 0 0;
		width: 100%;
		max-height: 360px;
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			max-height: 360px;
		}
	}

	.video {
		width: 100%;
		max-height: 360px;
	}

	.video-features {
		display: flex;
		flex-direction: column;

		.video-feature {
			&-items {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-bottom: 15px;
			}

			&-item {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				p {
					font-weight: 600;
				}
			}
		}

		@media screen and (max-width: 979px) {
			.video {
				width: 100%;
			}
		}
	}
}
</style>
