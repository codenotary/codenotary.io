<template>
	<PageSection id="ztc-monitoring-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader title="Monitoring the Network" block>
						The ZTC has implemented a monitoring infrastructure using <a href="http://www.opvizor.com/">Opvizor Performance Analyzer</a> to ensure nodes health, valid runtime configurations and working mining activities.
					</PageSectionHeader>
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
	</PageSection>
</template>

<script>
export default {
	name: 'ZtcMonitoringSection',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-monitoring-image {
	max-width: 800px;
}
</style>
