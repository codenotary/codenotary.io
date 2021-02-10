<template>
	<div>
		<home-header />
		<features-section />
		<timestamp-service-section />
		<customer-success-stories />
	</div>
</template>

<script>
import HomeHeader from '~/components/sections/headers/HomeHeader';
import FeaturesSection from '~/components/sections/homepage/FeaturesSection';
import TimestampServiceSection from '~/components/sections/homepage/TimestampServiceSection';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';

export default {
	name: 'Homepage',
	components: {
		HomeHeader,
		FeaturesSection,
		TimestampServiceSection,
		CustomerSuccessStories,
	},
	layout: 'banner',
};
</script>
