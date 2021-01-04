<template>
	<div>
		<LCHeader />
		<lc-features />
		<customer-success-stories />
		<lc-infrastructure />
		<ledger-compliance />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';
import LCHeader from '~/components/sections/headers/LCHeader';
import LcFeatures from '~/components/sections/products/ledger-compliance/LcFeatures';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';
import LcInfrastructure from '~/components/sections/products/ledger-compliance/LcInfrastructure';
import LedgerCompliance from '~/components/sections/products/LedgerCompliance';

export default {

	components: {
		LCHeader,
		LcFeatures,
		CustomerSuccessStories,
		LcInfrastructure,
		LedgerCompliance,
	},
	head() {
		return {
			title: title('Ledger Compliance'),
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
