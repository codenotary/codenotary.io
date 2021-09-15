<template>
	<div class="immudb-header-container">
		<i-header
			id="immudb-header"
			size="sm"
		>
			<i-row class="_align-items-center main-content">
				<i-column lg="5" class="_padding-x-0">
					<h1 class="_font-weight-bold cn-text-primary-light title first">
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
							class="github-link"
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
						<a class="useful-link research-paper cn-text-white" @click="researchPaperModalVisible = true">
							<img
								src="/icons/research_paper.svg"
								alt="research paper"
							>
							<span class="_margin-left-1-2 _text-decoration-underline">
								Research Paper
							</span>
						</a>
						<a href="/technologies/immudb/immutable-data-science" class="useful-link cn-text-white">
							<img
								src="/icons/immutable_data_science.svg"
								alt="immutable data science"
							>
							<span class="_margin-left-1-2 _text-decoration-underline">
								Immutable Data Science
							</span>
						</a>
						<a
							href="https://github.com/codenotary/immudb/"
							class="useful-link cn-text-white"
						>
							<img
								src="/icons/github.svg"
								alt="github"
							>
							<span class="_margin-left-1-2 _text-decoration-underline">
								GitHub
							</span>
						</a>
					</div>
				</i-column>
				<i-column lg="1" />
				<i-column
					id="mascot-column"
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
}

::v-deep #immudb-header {
	overflow-x: hidden;
	width: 100%;

	.container {
		padding-left: 0;
		padding-right: 0;
	}

	h1 {
		font-size: 68px !important;

		@media screen and (max-width: $mobile-max-width) {
			font-size: 40px !important;
		}
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

	@include breakpoint-down(md) {
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

//.title {
//	color: white !important;
//}

.subtitle {
	color: white !important;
	margin-bottom: 20px;
	margin-top: 20px;
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
	margin-top: 20px;

	.useful-link {
		display: flex;
		justify-content: flex-start;
		text-align: left;
		font-weight: 700;
		font-size: 14px;

		img {
			height: 20px !important;
			width: 20px !important;
		}

		&:not(:first-child) {
			margin-top: 10px;
		}

		&.research-paper {
			cursor: pointer;

			&:hover {
				text-decoration: underline;
			}
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		align-items: flex-start;

		.useful-link {
			justify-content: center;
			text-align: center;
			width: 100%;
			// max-width: 240px;
		}
	}
}

.action-buttons {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	max-width: 330px;

	.github-link {
		&:hover {
			text-decoration: none;
		}

		.github-star-button {
			display: flex;
			height: $cn-button-height !important;
			align-items: stretch;
			border: 1px solid transparent;

			.github-logo {
				padding: 14px;
				background: $cn-color-primary;
				border-top-left-radius: 8px;
				border-bottom-left-radius: 8px;
				display: flex;
				align-items: center;

				img {
					height: 30px;
					width: 30px;
				}
			}

			.github-count {
				display: flex;
				align-items: center;
				padding: 14px;
				background: white;
				border-top-right-radius: 8px;
				border-bottom-right-radius: 8px;

				img {
					margin-left: 10px;
				}

				span {
					color: $cn-color-brand;
				}
			}
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		flex-direction: column;
		align-items: center;
		height: 112px;
		max-width: none;
	}
}
</style>
