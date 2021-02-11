<template>
	<div>
		<HomeHeader />
		<LazyHydrate when-visible>
			<PageSectionHeader
				title="Lorem Ipsum Dolor Sit Amet"
				:top="0"
				:bottom="0"
			/>
		</LazyHydrate>
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
	components: {
		LazyHydrate,
	},
	layout: 'banner',
};
</script>
