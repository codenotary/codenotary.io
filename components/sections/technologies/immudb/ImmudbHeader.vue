<template>
	<div class="immudb-header-container">
		<i-header
			id="immudb-header"
			size="sm"
		>
			<i-row class="_align-items-center main-content">
				<i-column lg="5">
					<h2 class="_font-weight-bold cn-text-white title first">
						{{ content.headerSection.title1 }}
					</h2>
					<h2 class="_font-weight-bold cn-text-white title second" v-html="content.headerSection.title2" />
					<h2 class="_font-weight-bold cn-text-white title third">
						{{ content.headerSection.title3 }}
					</h2>
					<p class="lead cn-text-muted_blue subtitle cn-text-sm">
						<i-button :loading="$fetchState.pending" class="cn-button">
							{{ stargazersCount }}
						</i-button>
						<cn-button
							variant="secondary"
							href="https://dashboard.codenotary.io/auth/signup"
							target="_blank"
							rel="nofollow"
							size="lg"
						>
							Get Started Now
						</cn-button>
					</p>
				</i-column>
				<i-column lg="1" />
				<i-column
					id="mascot-column"
					lg="6"
				>
					<img src="/images/immudb-header-mascot.png" style="width: 100%;">
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<div class="useful-links">
						<span class="useful-link cn-text-white" @click="researchPaperModalVisible = true">
							<img src="/icons/research_paper.svg" alt="">
							Research Paper
						</span>
						<a href="https://www.codenotary.com/technologies/immudb/immutable-data-science" class="useful-link cn-text-white">
							<img src="/icons/immutable_data_science.svg" alt="">
							Immutable Data Science
						</a>
						<a href="https://github.com/codenotary/immudb/" class="useful-link cn-text-white">
							<img src="/icons/github.svg" alt="">
							GitHub
						</a>
					</div>
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
import axios from 'axios';

import { IMMUCHALLENGE_URL } from '@/common/consts';

import immudbContent from '@/content/immudb';

export default {
	name: 'ImmudbHeader',
	data() {
		return {
			researchPaperModalVisible: false,
			content: immudbContent,
			rightBarBottom: '0px',
			stargazersCount: null,
		};
	},
	async fetch() {
		const { data } = await axios.get('https://api.github.com/repos/codenotary/immudb');
		const { stargazers_count: stargazersCount } = data;

		console.log({ stargazersCount });

		this.stargazersCount = stargazersCount;
	},
	computed: {
		computedStyle() {
			return {
				bottom: this.rightBarBottom,
			};
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
	z-index: 3;
	position: relative;
}

::v-deep #immudb-header {
	overflow-x: hidden;
	width: 100%;

	h2 {
		margin-top: 0;
		margin-bottom: 20px;
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
	.title.second {
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

.immudb-header-container {
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

.useful-links {
	display: flex;
	flex-direction: column;

	.useful-link {
		text-decoration: underline;
		font-weight: 700;
		font-size: 14px;
	}
}
</style>
