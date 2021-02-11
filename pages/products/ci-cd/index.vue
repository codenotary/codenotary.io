<template>
	<div>
		<CiCdHeader />
		<LazyHydrate when-visible>
			<CiCdIntegrations />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CiCdFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CiCdHowItWorks />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CiCdGetStarted />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CiCdAnalyzeAndManage />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CiCdVideos />
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'CiCdPage',
	components: {
		LazyHydrate,
	},	
};
</script>
