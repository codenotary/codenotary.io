<template>
	<v-container fluid class="section-container">
		<v-container>
			<v-row>
				<v-col>
					<h4 class="white--text font-weight-700 text-h4 text-center text-uppercase">
						How it works
					</h4>
				</v-col>
			</v-row>
			<v-row>
				<v-col
					cols="12"
					md="3"
					class="pa-0"
				/>
				<v-col
					v-for="{ text, image } in steps"
					:key="text"
					cols="12"
					md="2"
					class="text-center d-flex flex-column align-center justify-center"
				>
					<v-img
						:src="`/images/metrics-and-logs/${image}.svg`"
						contain
						aspect-ratio="1.5"
					/>
					<span class="white--text text-heading-5">
						{{ text }}
					</span>
				</v-col>
				<v-col
					cols="12"
					md="3"
					class="pa-0"
				/>
			</v-row>
		</v-container>
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
