<template>
	<div>
		<LCMlHeader />
		<LazyHydrate when-visible>
			<LcMlFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LcMlIntegrations :integrations="integrations" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LcMlInfrastructure />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<HomeVideos class="_margin-top-4" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LcMlTestimonials />
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
import { title } from '~/helpers/meta';

export default {
	name: 'LedgerComplianceMetricsAndLogs',
	components: {
		LazyHydrate,
	},
	async asyncData ({ $content }) {
		const integrations = await $content('products/integration')
				.only(['title', 'date', 'image', 'slug', 'tags'])
				.sortBy('date', 'desc')
				.fetch();

		return { integrations };
	},
	head() {
		return {
			title: title('Ledger Compliance (Public Cloud)'),
		};
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
