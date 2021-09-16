<template>
	<PageSection
		id="immudb-benchmarks-section"
		:top="0"
		:bottom="2"
	>
		<i-container>
			<i-row class="_display-flex _justify-content-center">
				<i-column>
					<page-section-header :bottom="0" title="Benchmarks" />
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _flex-direction-column _justify-content-center">
				<i-column
					class="_margin-top-0 _margin-x-auto _text-center"
					xs="12"
					sm="12"
					md="10"
					lg="8"
				>
					Codenotary vs immudb vs Oracle vs Amazon QLDB - Throughput and Cost Comparison
				</i-column>
				<i-column
					class="_margin-top-1 _padding-x-0" xs="12"
					sm="12" md="12"
					xl="12"
				>
					<i-row class="_padding-x-0 _display-flex _justify-content-center">
						<i-column
							xs="12" sm="12"
							md="7" lg="7"
							xl="7"
							class="_padding-x-05 cn-text-center"
						>
							<img class="immudb-benchmarks-img" src="/images/immudb/benchmark/DatabaseThroughputComparision.svg">
						</i-column>
						<i-column
							xs="12" sm="12"
							md="5" lg="5"
							xl="5"
							class="_padding-x-05 cn-text-center"
						>
							<img class="immudb-benchmarks-img" src="/images/immudb/benchmark/TransactionsPerDollar.svg">
						</i-column>
					</i-row>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ImmudbBenchmarks',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-benchmarks-section {
	padding-top: 14px !important;

	.immudb-benchmarks-img {
		width: 100%;
		height: auto;
		border-radius: 25px;
		box-shadow: $cn-shadow-sm;
		border: none;
		transition: all 0.3s linear;

		@media screen and (max-width: $mobile-max-width) {
			border-radius: 15px;
		}

		@media screen and (max-width: 767px) {
			border-radius: 20px;

			&:first-child {
				margin-bottom: 10px;
			}
		}
	}
}
</style>
