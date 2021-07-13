<template>
	<UiPageSection id="lc-features-section">
		<i-container>
			<i-row>
				<i-column>
					<UiPageSectionHeader title="CodeNotary Immutable Ledger Features" />
				</i-column>
			</i-row>
			<i-row center top>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<UiCardFeature
						subtitle="Immutable and tamperproof transactional ledgers"
						image="/images/features/immutable.svg"
					>
						<p class="lead">
							Data cannot be deleted or modified. Support for Intel SGX enclaves.
						</p>
					</UiCardFeature>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<UiCardFeature
						subtitle="Always online - no archival system"
						image="/images/features/hand.svg"
					>
						<p class="lead">
							Virtual Appliance, Linux or Kubernetes deployment
						</p>
					</UiCardFeature>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<UiCardFeature
						subtitle="Millions of transaction per second"
						image="/images/features/cogwheels.svg"
					>
						<p class="lead">
							Can processes millions of transactions per second reliably and with the cryptographic verification.
						</p>
					</UiCardFeature>
				</i-column>
				<i-column
					xs="12"
					sm="6"
					lg="3"
				>
					<UiCardFeature
						subtitle="Compliance and Audit"
						image="/images/features/audit.svg"
					>
						<p class="lead">
							Complete and sequenced history. Query capabilities for auditors.
						</p>
					</UiCardFeature>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceFeatures',
};
</script>

<style lang="scss">
#lc-features-section {
	background-color: var(--v-grey-lighten4);
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
