<template>
	<v-container>
		<h4 class="brand--text text-h4 font-weight-700 text-center">
			Features
		</h4>
		<p class="text-center font-weight-400">
			A super-fast, immutable, and cryptographically verifiable ledger database that provides:
		</p>
		<div class="features">
			<v-row v-for="row in featureRows" :key="row[0].name">
				<v-col
					v-for="column in row"
					:key="column.name"
					v-bind="column.columnAttributes"
					class="d-flex flex-column"
				>
					<v-sheet :color="column.color" class="rounded-xl pa-5 d-flex flex-column justify-center flex-grow-1">
						<v-img
							:src="`/icons/${column.imageName}.svg`"
							max-height="80"
							contain
						/>
						<h5 class="font-weight-700 white--text text-h5 text-center mt-2">
							{{ column.name }}
						</h5>
					</v-sheet>
				</v-col>
			</v-row>
		</div>
	</v-container>
</template>

<script>
export default {
	name: 'TechnologiesImmudbFeatures',
	data() {
		return {
			featureRows: [
				[
					{
						name: 'Transactional Integrity',
						imageName: 'integrity',
						color: 'blue',
					},
					{
						name: 'ACID Compliance',
						imageName: 'acid_compliance',
						color: 'accent',
					},
				],
				[
					{
						name: 'Auditor',
						imageName: 'auditor',
						color: 'secondary',
						columnAttributes: { md: 4 },
					},
					{
						name: 'SDKs for Python, Node.js, Java, Go',
						imageName: 'sdk',
						color: 'cyan',
						columnAttributes: { md: 8 },
					},
				],
			],
		};
	},
};
</script>
