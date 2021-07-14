<template>
	<UiPageSection id="ledger-compliance-section">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="CodeNotary Immutable Ledger®" block>
						With CodeNotary Immutable Ledger&reg; you can start keeping a tamper-proof and indelible
						ledger for your mission-critical and sensitive applications. Whether you use Java, Node.js, Python,
						Go, .NET, on-premise or in the cloud, CodeNotary Immutable Ledger® processes millions of
						transactions per second reliably and with cryptographic verification.
					</UiPageSectionHeader>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<UiPricingTables />
				</v-col>
			</v-row>
			<v-row
				v-if="tree"
				class="text-center"
			>
				<v-col>
					<img
						id="tree-image"
						src="/images/word-tree.png"
						alt="CodeNotary Word Cloud"
						class="image -responsive"
						width="650"
					>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ProductsLedgerCompliance',
	props: {
		tree: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss">
#ledger-compliance-section {
	background-color: var(--v-grey-lighten2);
}

#tree-image {
	margin: $spacer-6 auto -#{$spacer-6};
	height: 20rem;
	width: auto;
	object-fit: contain;

	@media (max-width: $md) {
		height: auto !important;
		margin: $spacer-2 auto -#{$spacer-6} !important;
	}
}
</style>
