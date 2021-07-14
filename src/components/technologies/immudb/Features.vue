<template>
	<UiPageSection
		id="immudb-features-section"
		:top="2"
		:bottom="2"
	>
		<v-container>
			<v-row class="d-flex justify-center">
				<v-col>
					<UiPageSectionHeader :bottom="0" title="Features" />
				</v-col>
			</v-row>
			<v-row class="_padding-x-0 d-flex flex-column justify-center">
				<v-col
					class="_margin-top-0 _margin-x-auto text-center"
					xs="12"
					sm="12"
					md="8"
					lg="8"
				>
					A super-fast, immutable, and cryptographically verifiable ledger database that provides:
				</v-col>
				<v-col
					class="_margin-top-2 _margin-x-auto" xs="12"
					sm="12" md="10"
					xl="10"
				>
					<v-row class="_padding-x-0 d-flex justify-center">
						<v-col
							xs="6" sm="6"
							md="6" lg="6"
							xl="6"
						>
							<div class="immudb-feature cn-bg-brand cn-text-white d-flex flex-column">
								<img class="cn-icon" src="/icons/integrity.svg">
								<h4 class="cn-text-white font-weight-bold text-center _margin-0 mt-4">
									Transactional Integrity
								</h4>
							</div>
						</v-col>
						<v-col
							xs="6" sm="6"
							md="6" lg="6"
							xl="6"
						>
							<div class="immudb-feature cn-bg-primary cn-text-white d-flex flex-column">
								<img class="cn-icon" src="/icons/acid_compliance.svg">
								<h4 class="cn-text-white font-weight-bold text-center _margin-0 mt-4">
									ACID Compliance
								</h4>
							</div>
						</v-col>
					</v-row>
					<v-row>
						<v-col
							xs="6" sm="6"
							md="4" lg="4"
							xl="4"
						>
							<div class="immudb-feature cn-bg-secondary cn-text-white d-flex flex-column">
								<img class="cn-icon" src="/icons/auditor.svg">
								<h4 class="cn-text-white font-weight-bold text-center _margin-0 mt-4">
									Auditor
								</h4>
							</div>
						</v-col>
						<v-col
							xs="6" sm="6"
							md="8" lg="8"
							xl="8"
						>
							<div class="immudb-feature cn-bg-cyan cn-text-white d-flex flex-column">
								<img class="cn-icon" src="/icons/sdk.svg">
								<h4 class="cn-text-white font-weight-bold text-center _margin-0 mt-4">
									SDKs for Python, Node.js, Java, Go
								</h4>
							</div>
						</v-col>
					</v-row>
				</v-col>
			</v-row>
		</v-container>
	</UipageSection>
</template>

<script>
export default {
	name: 'TechnologiesImmudbFeatures',
};
</script>

<style lang="scss">
#immudb-features-section {
	padding-top: 14px !important;
	padding-bottom: 162px !important;

	.immudb-feature {
		margin: 16px 0;
		padding: 30px 20px;
		border-radius: $cn-border-radius-lg;
		box-shadow: $cn-shadow-sm;
		border: none;

		img {
			height: 96px;
			object-fit: contain;
		}
	}

	@media (max-width: $sm) {
		.container {
			margin: 0 auto -170px !important;
			padding: 0 22px !important;
			width: 100% !important;
			min-width: 100%;
		}

		.column {
			padding: 8px !important;

			.section-header {
				margin-bottom: -16px !important;
			}

			.immudb-feature {
				margin: 0 !important;
				width: 100% !important;

				h4 {
					min-height: 32px;
					font-size: 0.75rem;
				}
			}
		}
	}
}
</style>
