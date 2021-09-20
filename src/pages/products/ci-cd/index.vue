<template>
	<div>
		<ProductsCiCdHeader />
		<LazyHydrate when-visible>
			<ProductsCiCdIntegrations />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsCiCdFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<HomepageVideos class="_margin-bottom-4" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsCiCdHowItWorks />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsCiCdGetStarted />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsCiCdAnalyzeAndManage />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsCiCdVideos />
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
