<template>
	<i-header id="immudb-header">
		<img src="/images/immudb/mascot.png" alt="immudb mascot">

		<h1 class="d6 _margin-top-1 _text-primary">
			immudb
		</h1>

		<div id="github-button">
			<github-button
				href="https://github.com/codenotary/immudb"
				data-icon="octicon-star"
				data-size="large"
				data-show-count="true"
				aria-label="Star codenotary/immudb on GitHub"
			>
				Star
			</github-button>
		</div>

		<h3 class="_margin-bottom-1 description _font-weight-bold">
			World’s fastest immutable database.
		</h3>
		<p class="_margin-top-0 description lead">
			Open Source and easy to use in new applications and easy to integrate into existing application.
		</p>

		<p class="action">
			<i-button
				size="lg"
				variant="primary"
				href="https://docs.immudb.io"
				target="_blank"
				rel="nofollow"
			>
				Get started now
			</i-button>
		</p>

		<i-nav class="header-nav">
			<i-button
				id="research-paper-button"
				link
				variant="primary"
				@click="researchPaperModalVisible = true"
			>
				<span class="underline">Research Paper</span>
			</i-button>
			<i-nav-item class="dot _hidden-sm-and-down">
				&middot;
			</i-nav-item>
			<i-nav-item class="underline" :to="{ name: 'technologies-immudb-immutable-data-science' }">
				Immutable Data Science
			</i-nav-item>
			<i-nav-item class="dot _hidden-sm-and-down">
				&middot;
			</i-nav-item>
			<i-nav-item class="underline" href="https://github.com/codenotary/immudb">
				GitHub
			</i-nav-item>
		</i-nav>

		<ResearchPaperModal
			v-model="researchPaperModalVisible"
		/>

	</i-header>
</template>

<script>
import GithubButton from 'vue-github-button';

export default {
	name: 'ImmudbHeader',
	components: {
		GithubButton,
	},
	data() {
		return {
			researchPaperModalVisible: false,
		};
	},
	methods: {
		openCodingChallenge () {
			const data = 'https://github.com/codenotary/immuchallenge';
			data && window.open(data, '_blank');
		},
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-header {
	padding-top: $spacer-4;
	background-color: white;
	background-image: url('/images/immudb/header.jpg');
	text-align: center;

	img {
		height: 280px;
		width: auto;
		display: block;
		margin: $spacer auto;
	}

	h1 {
		font-weight: bold;
	}

	.description {
		margin: 2rem auto;
		max-width: 35rem;
	}

	.header-nav {
		justify-content: center;

		.dot {
			color: $text-muted;
		}

		@include breakpoint-up(sm) {
			margin-left: -62px;
		}
	}

	.underline {
		text-decoration: underline;

		.dont-underline {
			text-decoration: none !important;
		}
	}

	.dont-underline {
		text-decoration: none !important;
	}

	@media screen and (max-width: 767px) {
		background-image: none;
	}
}
</style>
