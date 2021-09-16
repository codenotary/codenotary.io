<template>
	<v-container fluid class="section-container pb-16">
		<v-row>
			<v-col>
				<h4 class="white--text font-weight-700 text-h4 text-center text-uppercase">
					How it works
				</h4>
			</v-col>
		</v-row>
		<v-row class="pb-16">
			<v-col class="d-flex flex-column flex-md-row justify-center align-center align-md-start">
				<v-sheet
					v-for="({ text, image }, index) in steps"
					:key="text"
					max-width="250"
					color="transparent"
					:class="{ 'mt-9': index > 0 }"
					class="d-flex flex-column align-center justify-center mt-md-0"
				>
					<v-img
						:src="`/images/metrics-and-logs/${image}.svg`"
						contain
						height="145"
						aspect-ratio="1.5"
					/>
					<span class="white--text text-h5 text-center">
						{{ text }}
					</span>
				</v-sheet>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsHowItWorks',
	data() {
		return {
			steps: [
				{
					text: 'Download',
					image: 'Download',
				},
				{
					text: 'Deploy OVA',
					image: 'Deploy',
				},
				{
					text: 'Connect one or many VMware vCenter',
					image: 'Connect',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.section-container {
	background-image: $cn-dark-gradient-inverse;
}
</style>
