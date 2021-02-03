<template>
	<div>
		<home-header />
		<features-section />
		<timestamp-service-section />
		<customer-success-stories />
		<ledger-compliance tree />
	</div>
</template>

<script>
import HomeHeader from '~/components/sections/headers/HomeHeader';
import FeaturesSection from '~/components/sections/homepage/FeaturesSection';
import TimestampServiceSection from '~/components/sections/homepage/TimestampServiceSection';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';
import LedgerCompliance from '~/components/sections/products/LedgerCompliance';

export default {
	name: 'Homepage',
	layout: 'banner',
	components: {
		HomeHeader,
		FeaturesSection,
		TimestampServiceSection,
		CustomerSuccessStories,
		LedgerCompliance,
	},
};
</script>
