<template>
	<!-- <div class="immudb-header-container">
		<v-app-bar
			id="immudb-header"
		>
			<v-row class="align-center main-content">
				<v-col lg="5">
					<h1 class="font-weight-bold cn-text-white title first">
						{{ content.headerSection.title1 }}
					</h1>
					<h3
						class="font-weight-bold _font-uppercase cn-text-white title second"
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
						<UiButtonCn
							variant="secondary"
							href="https://docs.immudb.io/"
							target="_blank"
							rel="nofollow"
							class="get-started-button"
						>
							Get Started Now
						</UiButtonCn>
					</div>
					<div class="useful-links">
						<a class="useful-link research-paper cn-text-white" @click="researchPaperModalVisible = true">
							<img
								src="/icons/research_paper.svg"
								alt="research paper"
							>
							<span class="ml-4-2 text-decoration-underline">
								Research Paper
							</span>
						</a>
						<a href="https://www.codenotary.com/technologies/immudb/immutable-data-science" class="useful-link cn-text-white">
							<img
								src="/icons/immutable_data_science.svg"
								alt="immutable data science"
							>
							<span class="ml-4-2 text-decoration-underline">
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
							<span class="ml-4-2 text-decoration-underline">
								GitHub
							</span>
						</a>
					</div>
				</v-col>
				<v-col lg="1" />
				<v-col
					id="mascot-column"
					lg="6"
				>
					<img class="mascot-image" src="/images/immudb-header-mascot.png">
				</v-col>
			</v-row>
		</v-app-bar>
		<client-only>
			<div class="gradient-box" />
			<div class="secondary-box" :style="computedStyle" />
		</client-only>
		<UiModalResearchPaper
			v-model="researchPaperModalVisible"
		/>
	</div> -->
	<div class="immudb-header dark">
		<v-container>
			<v-row>
				<v-col xs="12" md="6">
					<h1 class="text-h1 font-weight-700 white--text">
						immudb
					</h1>
					<h3 class="text-h3 text-uppercase font-weight-700 white--text">
						world's fastest <span class="secondary--text">immutable</span> database.
					</h3>
					<p class="text-subtitle-1 font-weight-400 white--text">
						Open Source and easy to use in new applications and easy to integrate into existing application.
					</p>
					<TheGithubButton />
					<v-btn
						class="dark--text text-capitalize"
						color="secondary"
					>
						Get Started Now
					</v-btn>
				</v-col>
				<v-col
					xs="12"
					md="6"
					class="d-flex justify-center align-center"
				>
					<!-- <v-img src="/images/immudb-header-mascot.png" /> -->
				</v-col>
			</v-row>
		</v-container>
		<div class="boxes">
			<div class="box box-yellow" />
			<div class="box box-gradient" />
		</div>
	</div>
</template>

<script>
import immudbContent from '@/content/immudb';

import TheGithubButton from '@/components/the/GithubButton';

export default {
	name: 'TechnologiesImmudbHeader',
	components: { TheGithubButton },
	data() {
		return {
			researchPaperModalVisible: false,
			content: immudbContent,
		};
	},
};
</script>

<style lang="scss">
.immudb-header {
	position: relative;

	.boxes {
		overflow: hidden;
		position: absolute;
		top: 0;
		bottom: -100px;
		left: 0;
		right: 0;
		z-index: -1;
		display: none;

		.box {
			width: 100%;
			position: absolute;
			top: 0;

			&-gradient {
				height: 510px;
				background: red;
				transform: skewY(-3deg);
			}

			&-yellow {
				height: 500px;
				background: yellow;
				transform: skewY(3deg);
			}
		}
	}
}
</style>
