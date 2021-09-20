<template>
	<v-container>
		<v-sheet elevation="3" class="rounded-xl py-14">
			<h4 class="text-center text-h4 font-weight-700 brand--text">
				Unmatched Performance
			</h4>
			<p class="text-center">
				immudb can handle millions of writes per second. The following table shows<br>
				performance of the embedded store inserting 1M entries on a 4-core E3-1275v6<br>
				CPU and SSD disk with 20-100 parallel workers:
			</p>
			<div class="rounded-lg text-center overflow-hidden pa-0 mx-4">
				<v-row class="ma-0">
					<v-col
						v-for="(title, titleIndex) in titles"
						:key="title"
						class="darker-blue info--text font-weight-700"
						:class="{ 'ml-1': titleIndex > 0 }"
					>
						{{ title }}
					</v-col>
				</v-row>
				<v-row
					v-for="(set, setIndex) in valueSets"
					:key="`${ set[0] }-${ setIndex }`"
					class="ma-0 mt-1"
				>
					<v-col
						v-for="(value, valueIndex) in set"
						:key="value"
						class="dark-blue white--text font-weight-700"
						:class="{ 'ml-1': valueIndex > 0 }"
					>
						{{ value }}
					</v-col>
				</v-row>
			</div>
			<div class="mx-4 mt-2 d-flex justify-center">
				<div
					v-for="(spec, index) in specs"
					:key="spec"
					class="spec light d-inline-block py-5 px-6"
					:class="{ 'ml-4': index > 0 }"
				>
					{{ spec }}
				</div>
			</div>
		</v-sheet>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbPerformance',
	data() {
		return {
			titles: ['Entries', 'Workers', 'Batch', 'Batches', 'time(s)', 'Entries/s'],
			valueSets: [
				['1M', 20, 1000, 50, 1.061, '1.2M /s'],
				['1M', 50, 1000, 20, 0.543, '1.8M /s'],
				['1M', 100, 1000, 10, 0.615, '1.6M /s'],
			],
			specs: ['4-core E3-1275v6 CPU', 'SSD disk'],
		};
	},
};
</script>

<style lang="scss" scoped>
.spec {
	border: 2px solid var(--v-accent-base);
}
</style>
