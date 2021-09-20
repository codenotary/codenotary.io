<template>
	<v-container
		fluid
		class="lighter-gray metrics-logs-tabs pb-16"
	>
		<v-container class="mt-n16 pb-16">
			<v-row class="mt-n10">
				<v-col>
					<v-tabs
						v-model="tab"
						center-active
						show-arrows
						fixed-tabs
						hide-slider
						height="70"
						background-color="transparent"
					>
						<v-tab
							v-for="({ tabTitle }, index) in tabs"
							:key="tabTitle"
							:ripple="false"
							:class="{ 'ml-n5': index > 0 }"
						>
							<v-sheet
								elevation="3"
								:class="tab === index ? 'white' : 'light-gray'"
								width="170"
								class="d-none d-lg-block rounded-xl pb-10 pt-2 text-capitalize font-weight-400 dark--text text-body-2 px-5 tab-sheet"
							>
								{{ tabTitle }}
							</v-sheet>
							<v-sheet
								elevation="3"
								:class="tab === index ? 'white' : 'light-gray'"
								width="150"
								class="d-lg-none rounded-xl pb-10 pt-2 text-capitalize font-weight-700 dark--text text-body-2 px-3 tab-sheet"
							>
								{{ tabTitle }}
							</v-sheet>
						</v-tab>
					</v-tabs>
					<v-tabs-items class="mt-n6 rounded-xl">
						<v-container fluid>
							<v-row>
								<v-col
									cols="12"
									:lg="currentTab.image === null ? 12 : 4"
									class="pb-0 pb-lg-3 mb-2 mb-lg-0 d-flex align-stretch"
								>
									<v-sheet
										:class="{ 'lighter-gray': currentTab.image !== null }"
										class="d-lg-none rounded-xl d-flex flex-column justify-center px-10 py-5"
									>
										<p
											:class="{ 'text-center': currentTab.image === null }"
											class="brand--text font-weight-700 text-h6 mb-2"
										>
											{{ currentTab.title }}
										</p>
										<p
											:class="{ 'text-center': currentTab.image === null }"
											class="mb-0 dark--text text-caption-1"
										>
											{{ currentTab.text }}
										</p>
									</v-sheet>
									<v-sheet
										:height="currentTab.image === null ? 215 : 'auto'"
										:class="{ 'lighter-gray': currentTab.image !== null }"
										class="d-none d-lg-flex rounded-xl flex-column justify-center px-10"
									>
										<p
											:class="{ 'text-center': currentTab.image === null }"
											class="brand--text font-weight-700 text-h6 mb-2"
										>
											{{ currentTab.title }}
										</p>
										<p
											:class="{ 'text-center': currentTab.image === null }"
											class="mb-0 dark--text text-caption-1"
										>
											{{ currentTab.text }}
										</p>
									</v-sheet>
								</v-col>
								<v-col
									v-if="currentTab.image !== null"
									cols="12"
									lg="8"
									class="pt-0 pt-lg-3"
								>
									<v-img
										:src="`/images/metrics-and-logs/tabs/${currentTab.image}.png`"
										cover
										position="top center"
										class="d-lg-none rounded-xl"
									/>
									<v-img
										:src="`/images/metrics-and-logs/tabs/${currentTab.image}.png`"
										height="440"
										cover
										position="top center"
										class="d-none d-lg-block rounded-xl"
									/>
								</v-col>
							</v-row>
						</v-container>
					</v-tabs-items>
				</v-col>
			</v-row>
		</v-container>
	</v-container>
</template>

<script>
const tabs = [
	{
		tabTitle: 'Infrastructure health',
		title: 'Virtual infrastructure health.',
		text: 'Always stay on top of your virtual infrastructure and feel the pulse of your environment. Monitor vital metrics of your most important virtual machines, check the network utilization of your ESXi host and much more from a single pane of glass.',
		image: 'infrastructure-health',
	},
	{
		tabTitle: 'Performance bottlenecks',
		title: 'Find performance bottlenecks quick and easy.',
		text: 'Finding bottlenecks is typically a pain, as you either don’t have the big picture, not the historic data required or you just don’t know the thresholds. We guide you with easy to understand dashboards, embedded help and predefined thresholds.',
		image: 'performance-bottlenecks',
	},
	{
		tabTitle: 'Capacity planning',
		title: 'Capacity planning of VMs and ESXi hosts.',
		text: 'Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.',
		image: 'capacity-planning',
	},
	{
		tabTitle: 'Visual warnings & alerts',
		title: 'Visual warnings and alerts for KPIs.',
		text: 'Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.',
		image: 'visual-warnings-alerts',
	},
	{
		tabTitle: 'Change tracking',
		title: 'Track VM hardware and configuration changes.',
		text: 'Track all kind of changes that happen in the lifetime of a virtual machine. Adding memory, setting a cpu limitation or changing the network portgroup should not happen unnoticed. Correlating changes and performance data can go a long way to find the root cause of an issue.',
		image: null,
	},
	{
		tabTitle: 'Event / performance correlation',
		title: 'Merge Events and Performance data.',
		text: 'Wouldn’t it be great to correlate the performance data in a chart with events that are happening on the virtual machine or the ESXi that provides the computing stack? We thought about that and added VM and ESXi events to the details and top10 cluster dashboards for VMs and ESXi hosts, so you can explain some of the performance peaks in a simple way.',
		image: 'full-stack-view',
	},
	{
		tabTitle: 'Full stack view',
		title: 'Not just the hypervisor.',
		text: 'Everybody is talking about the VM configuration settings and the hypervisor performance as well as the potential performance gap running a VM compared to a bare-metal system. Thanks to our OS agents, integrations with physical network components and storage systems you can check the full stack and compare performance data yourself. Check our integrations page, to find more information about NetApp, Cisco, DataCore, Oracle aso.',
		image: 'full-stack-view',
	},
];

export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsTabs',
	data() {
		return {
			tabs,
			tab: 0,
		};
	},
	computed: {
		currentTab() {
			return this.tabs[this.tab];
		},
	},
};
</script>

<style lang="scss">
.metrics-logs-tabs {
	.v-tab {
		align-items: baseline;

		&::before {
			content: none;
		}
	}
}
</style>
