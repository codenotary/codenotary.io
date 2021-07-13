<template>
	<UiPageSection id="ztc-monitoring">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="Monitoring the Network" block>
						The ZTC has implemented a monitoring infrastructure using <a href="http://www.opvizor.com/">Opvizor Performance Analyzer</a> to ensure nodes health, valid runtime configurations and working mining activities.
					</UiPageSectionHeader>
				</v-col>
			</v-row>
			<v-row>
				<v-col class="_text-center">
					<img
						id="ztc-monitoring-image"
						class="image -responsive"
						src="/images/ztc/monitoring.png"
						alt="Monitoring"
					>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ZtcMonitoring',
};
</script>

<style lang="scss">
#ztc-monitoring {
	#ztc-monitoring-image {
		max-width: 800px;
	}
}
</style>
