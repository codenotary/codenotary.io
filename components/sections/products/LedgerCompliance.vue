<template>
	<page-section id="ledger-compliance-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="CodeNotary Ledger Compliance®" block>
						With CodeNotary Ledger Compliance&reg; you can start keeping a tamper-proof and indelible
						ledger for your mission-critical and sensitive applications. Whether you use Java, Node.js, Python,
						Go, .NET, on-premise or in the cloud, CodeNotary Ledger Compliance® processes millions of
						transactions per second reliably and with cryptographic verification.
					</page-section-header>
				</i-column>
			</i-row>
			<i-row>
				<i-column>
					<PricingTables />
				</i-column>
			</i-row>
			<i-row v-if="tree" class="_text-center">
				<i-column>
					<img
						id="tree-image" src="/images/word-tree.png"
						alt="CodeNotary Word Cloud" class="image -responsive"
						width="650"
					>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import PricingTables from '~/components/sections/products/PricingTables';

export default {
	name: 'LedgerCompliance',

	components: {
		PricingTables,
	},

	props: {
		tree: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config/colors";

#ledger-compliance-section {
	background-color: $color-gray-20;
}

#tree-image {
	margin-top: 6rem;
	margin-bottom: -6rem;
	height: 25rem;
	width: auto;
}
</style>
