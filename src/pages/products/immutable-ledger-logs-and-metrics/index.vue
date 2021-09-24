<template>
	<div class="metrics-logs">
		<ProductsLedgerComplianceMetricsAndLogsHeader
			@openStartTrial="startTrialModalOpen = true"
		/>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsIntegrations
				:integrations="integrations"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsGotYouCovered />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsTabs />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsHowItWorks />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsWhatsHappening
				@openStartTrial="startTrialModalOpen = true"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsReadMoreAboutCNIL
				:blog-posts="blogPosts"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<ProductsLedgerComplianceMetricsAndLogsNewsletter />
		</LazyHydrate>
		<ProductsLedgerComplianceMetricsAndLogsSupportQuote
			id="metrics-and-logs-support-quote"
		/>
		<UiModalStartTrial
			:value="startTrialModalOpen"
			@close="startTrialModalOpen = false"
		/>
	</div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';

import { title } from '~/helpers/meta';

export default {
	name: 'ImmutableLedgerMetricsAndLogs',
	components: {
		LazyHydrate,
	},
	async asyncData ({ $content }) {
		const integrationsPromise = $content('products/integration')
				.only(['title', 'date', 'image', 'slug', 'tags'])
				.sortBy('date', 'desc')
				.fetch();

		const blogPostsPromise = $content('blog')
				.only(['title', 'date', 'image', 'path'])
				.where({
					tags: { $containsAny: ['metrics', 'logs', 'opvizor'] },
					date: { $gte: '2020-01-01' },
				})
				.sortBy('date', 'desc')
				.limit(25)
				.fetch();

		const [integrations, blogPosts] = await Promise.all([
			integrationsPromise,
			blogPostsPromise,
		]);

		return { integrations, blogPosts };
	},
	data() {
		return {
			startTrialModalOpen: false,
		};
	},
	head() {
		return {
			title: title('CodeNotary Metrics & Logs'),
		};
	},
};
</script>

<style lang="scss" scoped>
.metrics-logs {
	background-image: radial-gradient(var(--v-light-base) 1.55px, var(--v-bg-secondary-base) 0);
	background-size: 31px 31px;
	background-repeat: repeat;

	#metrics-and-logs-support-quote {
		position: fixed;
		right: 0;
		bottom: 32px;
		z-index: 5;
	}

	#chat-widget {
		position: fixed;
		bottom: 20px;
		right: 20px;
		z-index: 100;
	}
}
</style>
