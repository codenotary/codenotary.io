<template>
	<div>
		<ProductsLedgerComplianceMetricsAndLogsHeader />
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsFeatures /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsIntegrations :integrations="integrations" /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsGotYouCovered /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsTabs /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsHowItWorks /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsWhatsHappening /> -->
		</LazyHydrate>
		<LazyHydrate when-visible>
			<!-- <ProductsLedgerComplianceMetricsAndLogsReadMoreAboutCNIL /> -->
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
	name: 'ImmutableLedgerMetricsAndLogs',
	components: {
		LazyHydrate,
	},
	// async asyncData ({ $content }) {
	// 	const integrations = await $content('products/integration')
	// 			.only(['title', 'date', 'image', 'slug', 'tags'])
	// 			.sortBy('date', 'desc')
	// 			.fetch();

	// 	return { integrations };
	// },
	head() {
		return {
			title: title('Immutable Ledger (Public Cloud)'),
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
