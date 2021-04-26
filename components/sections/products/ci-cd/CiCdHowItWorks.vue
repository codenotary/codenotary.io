<template>
	<PageSection id="codenotary-how-it-works-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="How it works" />
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<VueSlickCarousel v-bind="settings">
						<div>
							<i-card>
								<h5 class="title _font-weight-bold _text-primary">
									1. Sign up
								</h5>
								<p class="lead">
									Start your journey to a safer web and a digital world where every digital asset can be authenticated, has a globally meaningful identity and a transparent trust level.
								</p>
								<p class="lead">
									<a
										href="https://dashboard.codenotary.io/auth/signup"
										target="_blank"
										rel="noopener"
									><strong>https://dashboard.codenotary.io</strong></a>
								</p>
							</i-card>
						</div>
						<div>
							<i-card>
								<h5 class="title _font-weight-bold _text-primary">
									2. Create a unique identity
								</h5>
								<p class="lead">
									No matter if it is a user of your software or a reader of one of your documents.
								</p>
								<p class="lead">
									Start sharing your identity within the authentication process.
								</p>
							</i-card>
						</div>
						<div>
							<i-card>
								<h5 class="title _font-weight-bold _text-primary">
									3. Notarize your digital asset
								</h5>
								<p class="lead">
									Use our modern dashboard to individually notarize and manage all of your notarized digital assets.
								</p>
								<p class="lead">
									We at CodeNotary did everything to enable a highly secure (Blockchain-strong) service that timestamps a unique digital asset identity together with your unique identity (notarization).
								</p>
								<p class="lead _font-weight-bold">
									Your file is never uploaded!
								</p>
							</i-card>
						</div>
						<div>
							<i-card>
								<h5 class="title _font-weight-bold _text-primary">
									4. Authenticate
								</h5>
								<p class="lead">
									Authenticate (no install).
								</p>
								<p class="lead">
									From the moment a digital asset like a document or a docker image has been notarized, everyone from anywhere in the world can authenticate that asset without uploading the file itself. <a
										href="https://authenticate.codenotary.io"
										target="_blank"
										rel="noopener"
									>https://authenticate.codenotary.io</a>
								</p>
								<p class="lead">
									You can use our command line interface as well. Just think about only starting software or container that are trusted by you (notarized).
								</p>
							</i-card>
						</div>
					</VueSlickCarousel>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'CiCdHowItWorks',
	data: () => ({
		settings: {
			slidesToShow: 2,
			arrows: true,
			dots: true,
			focusOnSelect: true,
			lazyLoad: 'progressive',
			responsive: [
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
					},
				},
			],
		},
	}),
	beforeDestroy () {
		this.settings = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#codenotary-how-it-works-section {
	background-color: $color-gray-10;
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
			text-align: left;
		}
	}
}
</style>
