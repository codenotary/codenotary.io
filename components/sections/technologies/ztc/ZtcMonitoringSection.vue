<template>
	<page-section id="ztc-monitoring-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="Monitoring the Network" block>
						The ZTC has implemented a monitoring infrastructure using <a href="http://www.opvizor.com/">Opvizor Performance Analyzer</a> to ensure nodes health, valid runtime configurations and working mining activities.
					</page-section-header>
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
	</page-section>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-monitoring-image {
	max-width: 800px;
}
</style>
