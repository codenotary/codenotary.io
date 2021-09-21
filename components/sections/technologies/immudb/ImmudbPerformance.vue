<template>
	<PageSection
		id="immudb-performance-section"
		:top="1"
		:top-xl="0"
		:bottom="2"
	>
		<i-container>
			<i-row>
				<i-column>
					<i-row class="_margin-x-0">
						<i-column>
							<page-section-header title="Unmatched performance" :bottom="2">
								immudb can handle millions of writes per second. The following table shows performance of the embedded store inserting 1M entries on a 4-core Intel® Xeon® E3-1275v6 CPU and SSD disk with 20-100 parallel workers:
							</page-section-header>
						</i-column>
					</i-row>
					<i-row class="_margin-x-0">
						<i-column class="_padding-x-0">
							<table>
								<thead>
									<tr>
										<th>Entries</th>
										<th>Workers</th>
										<th>Batch</th>
										<th>Batches</th>
										<th>Time(s)</th>
										<th>Entries/s</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1M</td>
										<td>20</td>
										<td>1000</td>
										<td>50</td>
										<td>1.061</td>
										<td>1.2M /s</td>
									</tr>
									<tr>
										<td>1M</td>
										<td>50</td>
										<td>1000</td>
										<td>20</td>
										<td>0.543</td>
										<td>1.8M /s</td>
									</tr>
									<tr>
										<td>1M</td>
										<td>100</td>
										<td>1000</td>
										<td>10</td>
										<td>0.615</td>
										<td>1.6M /s</td>
									</tr>
								</tbody>
							</table>
						</i-column>
					</i-row>
					<i-row class="_margin-x-0">
						<i-column class="padding-x-1-2">
							<div class="options">
								<div class="option">
									4-core Intel® Xeon® E3-1275v6 CPU
								</div>
								<div class="option">
									SSD disk
								</div>
							</div>
						</i-column>
					</i-row>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ImmudbPerformance',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-performance-section {
	@include breakpoint-down(sm) {
		position: relative;
		padding: 30px 0 !important;
		top: -160px !important;

		&.section.variant-standard {
			padding-top: 120px !important;
			margin-bottom: -160px;

			.container {
				padding: 0 0 20px 0 !important;
			}
		}
	}

	.container {
		background: white;
		padding: 0 70px 30px;
		width: 80%;
		margin: 0 auto !important;
		border-radius: 30px;
		box-shadow: $cn-shadow-sm;
		border: none !important;

		@media screen and (max-width: 678px) {
			width: 83%;
		}

		table {
			margin: 0 auto;
			overflow: hidden;
			border-radius: 30px;
			box-shadow: $cn-shadow-sm;

			thead {
				color: $cn-color-primary_light;

				th {
					&:first-child {
						border-top-left-radius: 30px;

						@media screen and (max-width: 573px) {
							border-top-left-radius: 8px;
						}
					}

					&:last-child {
						border-top-right-radius: 30px;

						@media screen and (max-width: 573px) {
							border-top-right-radius: 8px;
						}
					}
				}
			}

			tbody {
				color: white;

				tr:last-child {
					td {
						&:first-child {
							border-bottom-left-radius: 30px;

							@media screen and (max-width: 573px) {
								border-bottom-left-radius: 8px;
							}
						}

						&:last-child {
							border-bottom-right-radius: 30px;

							@media screen and (max-width: 573px) {
								border-bottom-right-radius: 8px;
							}
						}
					}
				}
			}

			th,
			td {
				background: $cn-color-primary_dark;
				padding: 15px 40px;
				text-align: center;
				border: 1px solid $cn-color-primary;

				@media screen and (max-width: 573px) {
					padding: 15px 3px;
					font-size: 12px;
				}

				@media screen and (min-width: 573px) and (max-width: 768px) {
					padding: 15px 5px;
				}

				@media screen and (min-width: 768px) and (max-width: $mobile-max-width) {
					padding: 15px;
				}

				@media screen and (min-width: $mobile-max-width) and (max-width: 1199px) {
					padding: 15px 30px;
				}
			}
		}

		.options {
			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			justify-content: center;
			margin-top: 32px;

			@include breakpoint-down(sm) {
				margin-top: 16px;
			}

			.option {
				padding: 20px 30px;
				border: 1px solid $cn-color-primary;
				border-radius: 8px;
				background: $cn-color-light;

				@include breakpoint-down(sm) {
					margin-bottom: 8px;
					font-size: 14px;
					text-align: center;
					padding: 8px 16px;
				}
			}

			.option + .option {
				margin-left: 10px;
			}
		}

		@media screen and (max-width: 573px) {
			padding: 30px 5px;
		}
	}
}
</style>
