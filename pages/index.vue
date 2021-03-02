<template>
	<div>
		<home-header />
		<features-section />
		<customer-success-stories />
	</div>
</template>

<script>
import HomeHeader from '~/components/sections/headers/HomeHeader';
import FeaturesSection from '~/components/sections/homepage/FeaturesSection';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';

export default {
	name: 'Homepage',
	components: {
		HomeHeader,
		FeaturesSection,
		CustomerSuccessStories,
	},
	layout: 'banner',
};
</script>
