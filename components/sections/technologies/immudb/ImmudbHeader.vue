<template>
	<div class="immudb-header-container">
		<i-header
			id="immudb-header"
			size="sm"
		>
			<i-row class="_align-items-center main-content">
				<i-column
					sm="6"
					mg="6"
					lg="6"
					class="_padding-x-0"
				>
					<h1 class="title-pageHeader first">
						{{ content.headerSection.title1 }}
					</h1>
					<h3
						class="_font-weight-bold _font-uppercase cn-text-white title second"
						v-html="content.headerSection.title2"
					/>
					<p class="cn-text-white title third">
						{{ content.headerSection.title3 }}
					</p>
					<div class="action-buttons">
						<a
							class="cn-github"
							href="https://github.com/codenotary/immudb"
							target="_blank"
							rel="nofollow"
						>
							<div class="github-star-button">
								<div class="github-logo">
									<img src="/icons/github.svg" alt="">
								</div>
								<div class="github-count">
									<span>{{ parsedStars }}</span>
									<img src="/icons/star.svg">
								</div>
							</div>
						</a>
						<cn-button
							variant="secondary"
							href="https://docs.immudb.io/"
							target="_blank"
							rel="nofollow"
							class="get-started-button"
						>
							Get Started Now
						</cn-button>
					</div>
					<div class="useful-links">
						<a class="link-icon research-paper cn-text-white" @click="researchPaperModalVisible = true">
							<svg
								width="22px"
								height="24px"
								viewBox="0 0 22 24"
							>
								<path fill="currentColor" d="M10.656 17.479c-2.813 0-5.105-2.292-5.105-5.105a5.11 5.11 0 0 1 5.105-5.1c2.813 0 5.105 2.292 5.105 5.105a5.11 5.11 0 0 1-5.105 5.101zm0-8.675a3.58 3.58 0 0 0-3.574 3.574 3.58 3.58 0 0 0 3.574 3.574 3.58 3.58 0 0 0 3.574-3.574 3.58 3.58 0 0 0-3.574-3.574z" />
								<path fill="currentColor" d="M17.034 19.522c-.196 0-.392-.076-.541-.225l-3.316-3.316a.764.764 0 1 1 1.081-1.081l3.316 3.316a.76.76 0 0 1 0 1.081c-.148.148-.344.225-.541.225zM10.746 20H2.804A2.81 2.81 0 0 1 0 17.191V2.809A2.81 2.81 0 0 1 2.809 0h11.737a2.81 2.81 0 0 1 2.809 2.809v6.23a.77.77 0 0 1-.766.766.77.77 0 0 1-.765-.766v-6.23a1.28 1.28 0 0 0-1.277-1.278H2.809a1.28 1.28 0 0 0-1.278 1.278v14.388a1.28 1.28 0 0 0 1.278 1.273h7.943a.77.77 0 0 1 .765.765.77.77 0 0 1-.77.766zm2.78-15.373H3.828a.77.77 0 0 1-.766-.766.77.77 0 0 1 .766-.766h9.699a.77.77 0 0 1 .765.766.77.77 0 0 1-.765.766zM7.048 7.081h-3.22a.77.77 0 0 1-.766-.766.77.77 0 0 1 .766-.766h3.22a.77.77 0 0 1 .766.766c0 .421-.34.766-.766.766z" />
							</svg>
							<span class="_margin-left-1-2 _text-decoration-underline">
								Research Paper
							</span>
						</a>
						<a
							href="/technologies/immudb/immutable-data-science"
							class="link-icon cn-text-white"
						>
							<svg
								width="24px"
								height="24px"
								viewBox="0 0 24 24"
							>
								<path fill="currentColor" d="M12.971 5.898H7.029v1.131h-.587V8.2h.587v1.209h-.587v1.17h.587v1.209h-.587v1.17h.587v1.131h5.937v-1.131h.587v-1.17h-.587v-1.209h.587v-1.17h-.587V8.2h.587V7.03h-.587V5.898h.004zm-1.174 4.689H8.204v-1.17h3.593v1.17zm0 2.344H8.204v-1.17h3.593v1.17zM8.204 8.243v-1.17h3.593v1.17H8.204zm11.463 4a13.52 13.52 0 0 0-.822-2.247c1.209-2.591 1.507-5.143.693-7.053A1.75 1.75 0 0 0 20 1.757 1.76 1.76 0 0 0 17.057.462c-1.91-.814-4.462-.517-7.053.693C9.256.802 8.501.528 7.757.333 5.115-.36 2.881.039 1.46 1.46S-.36 5.115.333 7.757a13.52 13.52 0 0 0 .822 2.247c-1.209 2.591-1.507 5.143-.693 7.053A1.75 1.75 0 0 0 0 18.243 1.76 1.76 0 0 0 1.757 20a1.76 1.76 0 0 0 1.186-.462c.724.309 1.538.458 2.415.458 1.432 0 3.029-.399 4.638-1.151a13.11 13.11 0 0 0 2.247.822c.845.223 1.652.333 2.403.333 1.589 0 2.932-.493 3.898-1.46 1.417-1.421 1.816-3.656 1.123-6.297zM18.239 1.174c.325 0 .587.262.587.587a.59.59 0 0 1-.587.587c-.325 0-.587-.262-.587-.587a.59.59 0 0 1 .587-.587zm-6.391.497c1.796-.603 3.428-.658 4.654-.172a1.87 1.87 0 0 0-.02.258 1.76 1.76 0 0 0 1.757 1.757 1.87 1.87 0 0 0 .258-.02c.489 1.229.431 2.857-.172 4.654l-.184.509c-.783-1.335-1.793-2.634-2.982-3.824s-2.489-2.2-3.824-2.982l.513-.18zm5.695 8.325c-.779 1.511-1.883 3.006-3.209 4.333s-2.823 2.43-4.334 3.209c-1.503-.775-2.986-1.867-4.325-3.209S3.241 11.507 2.466 10c.779-1.511 1.883-3.006 3.209-4.333s2.822-2.431 4.333-3.209c1.503.775 2.986 1.867 4.325 3.209s2.434 2.826 3.209 4.329zM1.464 7.46c-.583-2.223-.29-4.059.826-5.17.74-.74 1.796-1.115 3.072-1.115.646 0 1.35.098 2.102.294.399.106.806.239 1.209.395-1.319.775-2.622 1.777-3.828 2.982S2.638 7.354 1.863 8.673a10.97 10.97 0 0 1-.399-1.213zm.297 11.366c-.325 0-.587-.262-.587-.587s.262-.587.587-.587.587.262.587.587a.59.59 0 0 1-.587.587zm6.391-.497c-1.796.603-3.429.657-4.654.172a1.87 1.87 0 0 0 .02-.258 1.76 1.76 0 0 0-1.757-1.757 1.92 1.92 0 0 0-.258.02c-.489-1.229-.431-2.857.172-4.654l.184-.509c.783 1.335 1.793 2.634 2.982 3.824s2.489 2.2 3.824 2.982l-.513.18zm9.558-.618c-1.116 1.115-2.951 1.405-5.17.822a12.42 12.42 0 0 1-1.209-.391c1.319-.775 2.622-1.777 3.828-2.982s2.207-2.509 2.982-3.828a11.2 11.2 0 0 1 .395 1.209c.583 2.223.29 4.059-.826 5.17z" />
							</svg>
							<span class="_margin-left-1-2 _text-decoration-underline">
								Immutable Data Science
							</span>
						</a>
						<a
							href="https://github.com/codenotary/immudb/"
							class="link-icon cn-text-white"
						>
							<svg
								style="width: 24px; height: 24px;"
								viewBox="0 0 24 24"
							>
								<path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
							</svg>
							<span class="_margin-left-1-2 _text-decoration-underline">
								GitHub
							</span>
						</a>
					</div>
				</i-column>
				<i-column
					id="mascot-column"
					sm="6"
					mg="6"
					lg="6"
				>
					<img class="mascot-image" src="/images/immudb-header-mascot.png">
				</i-column>
			</i-row>
		</i-header>
		<client-only>
			<div class="gradient-box" />
			<div class="secondary-box" :style="computedStyle" />
		</client-only>
		<ResearchPaperModal
			v-model="researchPaperModalVisible"
		/>
	</div>
</template>

<script>
import { GithubService } from '@/services/github';

import { IMMUCHALLENGE_URL } from '@/common/consts';

import immudbContent from '@/content/immudb';

export default {
	name: 'ImmudbHeader',
	data() {
		return {
			researchPaperModalVisible: false,
			content: immudbContent,
			rightBarBottom: '0px',
			stars: null,
		};
	},
	async fetch() {
		const { data } = await GithubService.getStars();
		const { stargazers_count: stargazersCount } = data;

		this.stars = stargazersCount;
	},
	fetchOnServer: false,
	computed: {
		computedStyle() {
			return {
				bottom: this.rightBarBottom,
			};
		},
		parsedStars () {
			if (this.stars && typeof this.stars === 'string') {
				return Number(this.stars).toLocaleString();
			}
			return this.stars;
		},
	},
	methods: {
		openCodingChallenge () {
			window.open(IMMUCHALLENGE_URL, '_blank');
		},
	},
};
</script>

<style lang="scss" scoped>
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

$mascot-height: 164px;
$mascot-height-small: 100px;

#immudb-header {
	background: transparent;
	padding-top: 3rem;
	padding-bottom: 3rem;
	z-index: 3;
	position: relative;

	@media screen and (max-width: 768px) {
		padding-top: 0;
		padding-bottom: 0;
	}

	.third {
		max-width: 370px;
	}
}

::v-deep #immudb-header {
	overflow-x: hidden;
	width: 100%;

	.container {
		padding-left: 0;
		padding-right: 0;
	}

	h3 {
		margin-top: 0;
		margin-bottom: 20px;

		@media screen and (max-width: $mobile-max-width) {
			margin: 0 auto !important;
			font-size: 24px !important;
			line-height: 24px !important;
		}
	}

	@media screen and (max-width: 576px) {
		padding-top: 0;
		padding-bottom: 0;
		text-align: center;

		.button-wrapper {
			margin-bottom: $spacer * 2;
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

.subtitle {
	color: white !important;
	margin-bottom: 20px;
	margin-top: 20px;
}

@media screen and (max-width: $mobile-max-width) {
	.action {
		justify-content: center;
		margin-bottom: 30px;
	}
}

.immudb-header-container {
	position: relative;
	background-color: $cn-color-background;

	.get-started-button {
		font-size: 16px !important;
	}
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

.mascot-image {
	height: auto;
	max-height: 480px;
	object-fit: contain;

	@media screen and (max-width: 1080px) {
		max-height: 380px;
	}

	@media screen and (max-width: $mobile-max-width) {
		width: 100%;
		max-width: unset;
		margin-bottom: 40px;
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

	.title.second {
		text-transform: uppercase;
	}

	@media screen and (max-width: $mobile-max-width) {
		padding-top: 16px;

		.title.first {
			display: inline;
		}
	}
}

.useful-links {
	display: flex;
	flex-direction: column;
	margin-top: 10px;

	.link-icon {
		margin-top: 10px;

		@media screen and (max-width: 576px) {
			justify-content: center;
			text-align: center;
			width: 100%;
		}
	}

	@media screen and (max-width: 576px) {
		align-items: flex-start;
	}
}

.action-buttons {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	max-width: 330px;

	@media screen and (max-width: 768px) {
		max-width: 308px;
	}

	@media screen and (max-width: 576px) {
		flex-direction: column;
		align-items: center;
		height: 90px;
		max-width: none;
	}
}
</style>
