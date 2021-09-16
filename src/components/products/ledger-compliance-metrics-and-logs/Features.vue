<template>
	<v-container
		fluid
		class="lighter-gray"
	>
		<v-container>
			<h4 class="text-center text-uppercase brand--text font-weight-700 text-h4 mb-4">
				Features
			</h4>
			<v-row>
				<v-col
					v-for="{ image, title, text } in features"
					:key="title"
					class="d-flex child-flex justify-center"
					cols="6"
					md="3"
				>
					<v-card
						elevation="3"
						max-width="300"
						class="rounded-xl text-center pa-2 pa-md-6"
					>
						<v-img
							:src="`/images/metrics-and-logs/${image}.svg`"
							max-height="80"
							contain
							class="d-none d-md-flex"
						/>
						<v-img
							:src="`/images/metrics-and-logs/${image}.svg`"
							max-height="60"
							contain
							class="d-flex d-md-none"
						/>
						<p class="brand--text font-weight-700 mb-0 mt-2" v-html="title" />
						<p class="dark--text font-weight-400" v-html="text" />
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsFeatures',
	data() {
		return {
			features: [
				{
					image: 'TurnkeySolution',
					title: 'Turnkey<br>Solution',
					text: '(5 minute<br class="d-md-none">&nbsp;install)',
				},
				{
					image: 'Timer',
					title: 'Immediate<br>Results',
					text: '(15 minutes after<br>configuration)',
				},
				{
					image: 'MonitoringAnalytics',
					title: 'Meaningful Monitoring<br>& Analytics',
					text: 'Simple<br>yet powerful.',
				},
				{
					image: 'Notarize',
					title: 'Filter the Noise,<br>Focus on Your Critical<br>Systems',
					text: 'Be a hero.',
				},
			],
		};
	},
};
</script>
