<template>
	<UiPageSection id="ztc-monitoring">
		<i-container>
			<i-row>
				<i-column>
					<UiPageSectionHeader title="Monitoring the Network" block>
						The ZTC has implemented a monitoring infrastructure using <a href="http://www.opvizor.com/">Opvizor Performance Analyzer</a> to ensure nodes health, valid runtime configurations and working mining activities.
					</UiPageSectionHeader>
				</i-column>
			</i-row>
			<i-row>
				<i-column class="_text-center">
					<img
						id="ztc-monitoring-image"
						class="image -responsive"
						src="/images/ztc/monitoring.png"
						alt="Monitoring"
					>
				</i-column>
			</i-row>
		</i-container>
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
