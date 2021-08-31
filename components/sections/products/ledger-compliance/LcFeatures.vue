<template>
	<PageSection id="lc-features-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="Codenotary Cloud® Features" />
				</i-column>
			</i-row>
			<i-row center top>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<FeatureCard
						subtitle="Immutable and tamperproof transactional ledgers"
						image="/images/features/immutable.svg"
					>
						<p class="lead">
							Data cannot be deleted or modified. Support for Intel SGX enclaves.
						</p>
					</FeatureCard>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<FeatureCard
						subtitle="Always online - no archival system"
						image="/images/features/hand.svg"
					>
						<p class="lead">
							Virtual Appliance, Linux or Kubernetes deployment
						</p>
					</FeatureCard>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<FeatureCard
						subtitle="Millions of transaction per second"
						image="/images/features/cogwheels.svg"
					>
						<p class="lead">
							Can processes millions of transactions per second reliably and with the cryptographic verification.
						</p>
					</FeatureCard>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<FeatureCard
						subtitle="Compliance and Audit"
						image="/images/features/audit.svg"
					>
						<p class="lead">
							Complete and sequenced history. Query capabilities for auditors.
						</p>
					</FeatureCard>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'LcFeatures',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-features-section {
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
			text-align: center;
		}
	}
}
</style>
