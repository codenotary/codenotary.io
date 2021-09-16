<template>
	<v-container>
		<h4 class="rounded-xl accent white--text text-uppercase text-center text-h4 font-weight-700 pt-6 pb-14">
			What's happening at metrics and logs
		</h4>
		<v-carousel
			v-model="currentFeature"
			hide-delimiters
			:height="null"
			class="mt-n10"
		>
			<v-carousel-item
				v-for="({ text, image }, index) in features"
				:key="text"
			>
				<v-container fluid>
					<v-row>
						<v-col
							cols="12"
							md="9"
							lg="10"
							class="pa-0"
						>
							<v-img
								:src="`/images/metrics-and-logs/whats-happening/${image}.png`"
								height="450"
								cover
								class="d-none d-md-block rounded-xl"
							/>
							<v-img
								:src="`/images/metrics-and-logs/whats-happening/${image}.png`"
								height="160"
								cover
								class="d-md-none rounded-xl"
							/>
						</v-col>
						<v-col
							cols="12"
							md="3"
							lg="2"
							class="rounded-xl darker pl-7 py-5 pr-9 pl-md-4 pr-md-6 pt-md-6 pl-lg-8 pr-lg-12 pt-lg-13 d-flex d-md-block flex-row align-center"
						>
							<p class="mb-0 mr-4 mr-md-0 text-h3 text-md-h1 accent--text">
								{{ index + 1 }}
							</p>
							<hr class="accent mb-3 d-none b-md-block">
							<p class="ma-0 white--text text-body-2">
								{{ text }}
							</p>
						</v-col>
					</v-row>
				</v-container>
			</v-carousel-item>
			<div class="delimiters d-flex justify-center align-center mt-4 mt-md-6">
				<div
					v-for="({ text }, index) in features"
					:key="text"
					:class="[index === currentFeature ? 'accent' : 'info', { 'ml-1': index > 0 }]"
					class="delimiter rounded-xl cursor-pointer"
					@click="currentFeature = index"
				/>
			</div>
		</v-carousel>
		<div class="d-flex justify-center mt-4 mt-md-6">
			<v-btn
				color="secondary"
				class="text-capitalize dark--text"
				@click="$emit('openStartTrial')"
			>
				Start Free Trial
			</v-btn>
		</div>
	</v-container>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsWhatsHappening',
	data() {
		return {
			features: [
				{
					image: '1',
					text: 'See at one sight, which Virtual Machines suffer from performance problems. Drill for CPU, Memory, Storage and Network Details.',
				},
				{
					image: '2',
					text: 'Have an eye on your hosts - is there an overloaded hosts? Track all important metrics over time, so that you can respond to incidents.',
				},
				{
					image: '3',
					text: 'Make a deep analysis of Virtual Machines, Hosts, Datastores, Network: How was performance at a certain point in time? See NUMA issues whit Opvizor, you would otherwise only see in ESXTOP right when they happen.',
				},
				{
					image: '4',
					text: 'Make an in depth analysis for Latency, IOPS and Block sizes on your storage. See your read/write mix and have the numbers for optimizing your storage. Explore from VM side, host side, datastore side or see the picture from your storage system.',
				},
				{
					image: '5',
					text: 'Have an Overview over your complete infrastructure, set Alarms where needed. See current and historic data and compare over time.',
				},
				{
					image: '6',
					text: 'Make forecasts for your infrastructure. When will you need the next hardware upgrade, and are you currently still within operational limits?',
				},
				{
					image: '7',
					text: 'Watch also your network hardware: Are there any ports producing errors? Is your network overloaded? Who causes excess traffic?',
				},
				{
					image: '8',
					text: 'Watch VM Migrations: When was a virtual machine migrated and to which host?',
				},
				{
					image: '9',
					text: 'Monitor MSSQL-Server performance over time - see CPU and Memory, and many specific details.',
				},
			],
			currentFeature: 0,
		};
	},
	methods: {
		prevSlide() {
			const newSlideIndex = this.currentFeature > 0
				? this.currentFeature - 1
				: this.features.length - 1;

			this.currentFeature = newSlideIndex;
		},
		nextSlide() {
			const newSlideIndex = this.currentFeature < this.features.length - 1
				? this.currentFeature + 1
				: 0;

			this.currentFeature = newSlideIndex;
		},
	},
};
</script>

<style lang="scss" scoped>
.delimiter {
	height: 15px;
	width: 15px;
}
</style>
