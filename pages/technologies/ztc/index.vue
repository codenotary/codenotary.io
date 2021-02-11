<template>
	<div>
		<ZtcHeader />
		<LazyHydrate when-visible>
			<ZtcAboutSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ZtcTechnologyPlatformSection />
		</LazyHydrate>
		<hr>
		<LazyHydrate when-visible>
			<ZtcMonitoringSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ZtcConsortiumBlockchainSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ZtcMembersSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ZtcJoin-Section />
		</LazyHydrate>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'ZtcPage',
	components: {
		LazyHydrate,
	},
};
</script>
