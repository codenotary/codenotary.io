<template>
	<div>
		<LCMlHeader />
		<LcMlFeatures />
		<LcMlIntegrations :integrations="integrations" />
		<LcMlInfrastructure />
		<LcMlTestimonials />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'LedgerComplianceMetricsAndLogs',
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
};
</script>
