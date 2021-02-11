<template>
	<div>
		<HomeHeader />
		<LazyHydrate when-visible>
			<FeaturesSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TimestampServiceSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CustomerSuccessStories />
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'Homepage',
	layout: 'banner',
	components: {
		LazyHydrate,
	},
};
</script>
