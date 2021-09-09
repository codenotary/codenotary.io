<template>
	<v-container fluid class="section-container">
		<v-container>
			<v-row>
				<v-col>
					<h4 class="white--text font-weight-700 text-h4 text-center text-uppercase">
						We've got you covered
					</h4>
				</v-col>
			</v-row>
			<v-row>
				<v-col
					v-for="{ text, image } in technologies"
					:key="text"
					cols="3"
					lg="1"
					class="d-flex flex-column align-center justify-center"
				>
					<v-img
						:src="`/images/metrics-and-logs/${image}.svg`"
						contain
					/>
					<span class="white--text font-weight-700">
						{{ text }}
					</span>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsGotYouCovered',
	data() {
		return {
			technologies: [
				{
					image: 'Windows',
					text: 'Windows',
				},
				{
					image: 'Linux',
					text: 'Linux',
				},
				{
					image: 'Unix',
					text: 'Unix',
				},
				{
					image: 'vmWare',
					text: 'vmware',
				},
				{
					image: 'Logs',
					text: 'Logs',
				},
				{
					image: 'ChangeMgmt',
					text: 'Change Mgmt',
				},
				{
					image: 'Switches',
					text: 'Switches',
				},
				{
					image: 'Firewalls',
					text: 'Firewalls',
				},
				{
					image: 'Kubernetes',
					text: 'Kubernetes',
				},
				{
					image: 'Routers',
					text: 'Routers',
				},
				{
					image: 'DBMS',
					text: 'DBMS',
				},
				{
					image: 'StorageMgmt',
					text: 'Storage Mgmt',
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
