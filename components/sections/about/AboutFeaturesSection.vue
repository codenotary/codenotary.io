<template>
	<PageSection
		id="about-features-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column lg="4">
					<FeatureCard title="Who are we?">
						CodeNotary is a young software company founded by a team of very experienced and passionate engineers and entrepreneurs, with headquarters in Houston, Texas, and a team of engineers, researchers, marketers, managers, and customer satisfaction heroes spread out across the globe.
					</FeatureCard>
				</i-column>
				<i-column lg="4">
					<FeatureCard title="What do we do?">
						We bring trust and integrity into the DevOps process by providing end-to-end cryptographically verifiable tracking and provenance for all artifacts, actions, and dependencies.
					</FeatureCard>
				</i-column>
				<i-column lg="4">
					<FeatureCard title="How do we do it?">
						Based on our widely acclaimed <nuxt-link :to="{ name: 'technologies-immudb' }">
							immudb
						</nuxt-link> Open Source immutable database, CodeNotary Immutable Ledger® provides a tamper-proof and indelible solution for processing millions of transactions per second, on-premise or in the cloud, and with cryptographic verification.
					</FeatureCard>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>

export default {
	name: 'AboutFeaturesSection',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#about-features-section {
	.feature {
		text-align: left;
	}

	.column {
		@include breakpoint-down(lg) {
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
