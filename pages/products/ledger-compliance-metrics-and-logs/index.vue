<template>
	<div>
		<LCMlHeader />
		<lc-ml-features />
		<lc-ml-integrations :integrations="integrations" />
		<lc-ml-infrastructure />
		<lc-ml-testimonials />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';
import LCMlHeader from '~/components/sections/headers/LCMlHeader';
import LcMlFeatures from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcMlFeatures';
import LcMlIntegrations from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcMlIntegrations';
import LcMlInfrastructure from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcMlInfrastructure';
import LcMlTestimonials from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcMlTestimonials';

export default {
	components: {
		LCMlHeader,
		LcMlFeatures,
		LcMlIntegrations,
		LcMlInfrastructure,
		LcMlTestimonials,
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
			title: title('Ledger Compliance Metrics and Logs'),
		};
	},
};
</script>
