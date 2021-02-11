<template>
	<div>
		<LCHeader />
		<LazyHydrate when-visible>
			<LcFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CustomerSuccessStories />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LcInfrastructure />
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import { title } from '~/helpers/meta';

export default {
	name: 'LedgerComplianceOnPremise',
	components: {
		LazyHydrate,
	},
	head() {
		return {
			title: title('Ledger Compliance (on-premise)'),
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config/colors";

#codenotary-ledger-compliance-section {
	background-color: $color-gray-20;
}

#tree-image {
	margin-top: 6rem;
	margin-bottom: -6rem;
	height: 25rem;
	width: auto;
}
</style>
