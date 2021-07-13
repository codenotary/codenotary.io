<template>
	<UiPageSection
		id="about-features-section"
		variant="white"
	>
		<v-container>
			<v-row>
				<v-col lg="4">
					<UiCardFeature title="Who are we?">
						CodeNotary is a young software company founded by a team of very experienced and passionate engineers and entrepreneurs, with headquarters in Houston, Texas, and a team of engineers, researchers, marketers, managers, and customer satisfaction heroes spread out across the globe.
					</UiCardFeature>
				</v-col>
				<v-col lg="4">
					<UiCardFeature title="What do we do?">
						We bring trust and integrity into the DevOps process by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies.
					</UiCardFeature>
				</v-col>
				<v-col lg="4">
					<UiCardFeature title="How do we do it?">
						Based on our widely acclaimed <nuxt-link :to="{ name: 'technologies-immudb' }">
							immudb
						</nuxt-link> Open Source immutable database, CodeNotary Immutable Ledger® provides a tamper-proof and indelible solution for processing millions of transactions per second, on-premise or in the cloud, and with cryptographic verification.
					</UiCardFeature>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>

export default {
	name: 'AboutFeatures',
};
</script>

<style lang="scss">
#about-features-section {
	.feature {
		text-align: left;
	}

	.column {
		@media (max-width: $lg) {
			.feature {
				margin-bottom: $spacer * 2;
			}

			&:last-child .feature {
				margin-bottom: 0;
			}
		}
	}
}
</style>
