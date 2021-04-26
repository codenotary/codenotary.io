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
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'ZtcPage',
	components: {
		LazyHydrate,
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'white',
				light: true,
			});
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>
