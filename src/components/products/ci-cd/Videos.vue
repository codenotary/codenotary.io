<template>
	<UiPageSection
		id="ci-cd-videos-section"
		variant="white"
	>
		<i-container>
			<VueSlickCarousel v-bind="settings" @beforeChange="page = $event">
				<div>
					<v-row middle class="_padding-1">
						<v-col
							xs="12"
							sm="12"
							md="4"
						>
							<h4 class="title _font-weight-bold _text-primary">
								immudb is a lightweight, high-speed immutable database for systems and applications.
							</h4>
							<p class="lead">
								With immudb you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a the tamperproof immudb database. This allows you to keep an indelible history of, say, your debit/credit transactions.
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="12"
							md="8"
						>
							<div v-if="page === 2" class="_embed _embed-16by9">
								<iframe
									width="504"
									height="284"
									src="https://www.youtube.com/embed/rQ4iZAM14m0"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
							<div v-else class="_embed _embed-16by9 video-placeholder" />
						</v-col>
					</v-row>
				</div>
				<div>
					<v-row middle class="_padding-1">
						<v-col
							xs="12"
							sm="12"
							md="4"
						>
							<h4 class="title _font-weight-bold _text-primary">
								Email and Attachment Trust & Integrity
							</h4>
							<p class="lead">
								Protect yourself and your colleagues by enabling file integrity and origin verification (email, wetransfer, aso).
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="12"
							md="8"
						>
							<div v-if="page === 0" class="_embed _embed-16by9">
								<iframe
									width="504"
									height="284"
									src="https://www.youtube.com/embed/lCxfijPEY5M"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
							<div v-else class="_embed _embed-16by9 video-placeholder" />
						</v-col>
					</v-row>
				</div>
				<div>
					<v-row middle class="_padding-1">
						<v-col
							xs="12"
							sm="12"
							md="4"
						>
							<h4 class="title _font-weight-bold _text-primary">
								Trusted DevOps and CI/CD using CodeNotary.
							</h4>
							<p class="lead">
								CodeNotary enables any company, developer, automation engineer, DevOps engineer ... to secure a single or all stages of a Continous Integration & Continuous Deployment pipeline. Authenticate all incoming data and notarize all results including metadata on a Blockchain using the CodeNotary.io service.
							</p>
						</v-col>
						<v-col
							xs="12"
							sm="12"
							md="8"
						>
							<div v-if="page === 1" class="_embed _embed-16by9">
								<iframe
									width="504"
									height="284"
									src="https://www.youtube.com/embed/EPbYwTd-M3A"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								/>
							</div>
							<div v-else class="_embed _embed-16by9 video-placeholder" />
						</v-col>
					</v-row>
				</div>
			</VueSlickCarousel>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CiCdVideos',
	data: () => ({
		page: 2,
		timeout: null,
		settings: {
			arrows: true,
			dots: true,
			lazyLoad: 'progressive',
		},
	}),
	beforeDestroy () {
		this.page = null;
		this.timeout = null;
		this.settings = null;
	},
};
</script>

<style lang="scss">

#ci-cd-videos-section {
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: 96px;
			object-fit: contain;
		}

		.body {
			border: none;
			text-align: center;
		}
	}

	.video-placeholder {
		// background-color: #000;
	}
}
</style>
