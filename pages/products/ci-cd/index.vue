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
			<HomeVideos class="_margin-bottom-4" />
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
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'CiCdPage',
	components: {
		LazyHydrate,
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',
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
