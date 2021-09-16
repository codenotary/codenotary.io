<template>
	<PageSection
		id="immudb-features-section"
		:top="2"
		:bottom="0"
	>
		<i-container>
			<i-row class="_display-flex _justify-content-center">
				<i-column>
					<page-section-header :bottom="0" title="Features" />
				</i-column>
			</i-row>
			<i-row class="_padding-x-0 _display-flex _flex-direction-column _justify-content-center">
				<i-column
					class="_margin-top-0 _margin-x-auto _text-center"
					xs="12"
					sm="12"
					md="8"
					lg="8"
				>
					A super-fast, immutable, and cryptographically verifiable ledger database that provides:
				</i-column>
				<i-column
					class="_margin-top-1 _margin-x-auto" xs="12"
					sm="12" md="10"
					xl="10"
				>
					<i-row class="_padding-x-0 _display-flex _justify-content-center">
						<i-column
							xs="6" sm="6"
							md="6" lg="6"
							xl="6"
							class="_padding-x-05"
						>
							<div class="immudb-feature cn-bg-blue cn-text-white _display-flex _flex-direction-column">
								<img class="cn-icon" src="/icons/integrity.svg">
								<h4 class="cn-text-white _font-weight-bold _text-center _margin-0 _margin-top-1">
									Transactional Integrity
								</h4>
							</div>
						</i-column>
						<i-column
							xs="6" sm="6"
							md="6" lg="6"
							xl="6"
							class="_padding-x-05"
						>
							<div class="immudb-feature cn-bg-primary cn-text-white _display-flex _flex-direction-column">
								<img class="cn-icon" src="/icons/acid_compliance.svg">
								<h4 class="cn-text-white _font-weight-bold _text-center _margin-0 _margin-top-1">
									ACID Compliance
								</h4>
							</div>
						</i-column>
					</i-row>
					<i-row>
						<i-column
							xs="6" sm="6"
							md="4" lg="4"
							xl="4"
							class="_padding-x-05"
						>
							<div class="immudb-feature cn-bg-secondary cn-text-white _display-flex _flex-direction-column">
								<img class="cn-icon" src="/icons/auditor.svg">
								<h4 class="cn-text-white _font-weight-bold _text-center _margin-0 _margin-top-1">
									Auditor
								</h4>
							</div>
						</i-column>
						<i-column
							xs="6" sm="6"
							md="8" lg="8"
							xl="8"
							class="_padding-x-05"
						>
							<div class="immudb-feature cn-bg-cyan cn-text-white _display-flex _flex-direction-column">
								<img class="cn-icon" src="/icons/sdk.svg">
								<h4 class="cn-text-white _font-weight-bold _text-center _margin-0 _margin-top-1">
									SDKs for Python, Node.js, Java, Go
								</h4>
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
	name: 'ImmudbFeatures',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-features-section {
	padding-top: 14px !important;
	background-color: $cn-color-background;

	.immudb-feature {
		margin: 8px 0;
		padding: 30px 20px;
		border-radius: $cn-border-radius-lg;
		box-shadow: $cn-shadow-sm;
		border: none;
		transition: all 0.3s linear;

		img {
			object-fit: contain;
			transition: all 0.3s linear;
		}

		&:hover {
			box-shadow: none;

			img {
				transform: scale(1.1);
			}
		}
	}

	@media screen and (max-width: $mobile-max-width) {
		.container {
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
			}
		}
	}

	@media screen and (max-width: 768px) {
		.immudb-feature {
			h4 {
				min-height: 32px;
				font-size: 0.75rem;
			}
		}
	}
}
</style>
