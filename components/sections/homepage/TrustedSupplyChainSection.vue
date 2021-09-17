<template>
	<PageSection
		id="trusted-supply-chain-section"
		variant="transparent"
		:bottom="0"
		:top="4"
		:left="2"
	>
		<div class="trusted-supply-chain-section">
			<i-container class="container _padding-x-0">
				<i-row>
					<i-column
						sm="12"
						md="6"
						lg="6"
						class="column first"
					>
						<h3
							class="_font-weight-bold _text-uppercase cn-text-white title second"
						>
							End-to-end <br>
							<span class="cn-text-secondary">trusted supply chain</span>
							integrity and authenticity including SBOM (Software Bill of Material)
						</h3>
						<p class="cn-text-white title third">
							Zero Trust infrastructures, SDLC evidence and SBOM are important to comply with the 2021 Cyber Security Executive Order!
						</p>
						<div class="action-buttons">
							<cn-button
								variant="secondary"
								target="_blank"
								class="discover-button cn-button_icon"
								@click.native="SBOMModalOpen = true"
							>
								<svg style="width: 24px; height: 24px;" viewBox="0 0 24 24">
									<path fill="currentColor" d="M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" />
								</svg>
								<!-- <img src="/images/download.svg"> -->
								<span>Download PDF</span>
							</cn-button>
						</div>
					</i-column>
					<i-column
						sm="12"
						md="6"
						lg="6"
						class="column second _text-center"
					>
						<img
							class="image -responsive"
							src="/images/sbom.png"
							alt="Software Bill of Material"
						>
					</i-column>
				</i-row>
			</i-container>
		</div>
		<SBOMModal v-model="SBOMModalOpen" />
	</PageSection>
</template>

<script>
export default {
	name: 'TrustedSupplyChainSection',
	data() {
		return {
			SBOMModalOpen: false,
		};
	},
};
</script>

<style lang="scss">
#trusted-supply-chain-section {
	.trusted-supply-chain-section {
		width: 80%;
		margin: 0 auto;

		@media screen and (max-width: 1080px) {
			width: 90%;
		}

		@media screen and (max-width: 1767px) {
			width: 93%;
		}
	}

	.container {
		background: url(/images/sbom-bg.png);
		border-radius: 30px;
		border: 1px solid white;
		box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
		display: flex;
		align-items: center;
		position: relative;
		margin-top: calc(-4rem - 80px);
		margin-bottom: calc(-4rem - 20px);

		.row {
			@media screen and (max-width: 767px) {
				max-height: 100% !important;
				flex-direction: column;
			}
		}

		.column {
			&.first {
				padding: 3rem 4rem;
				flex: 1;
			}

			&.second {
				padding-right: 4rem;
				flex: 1;

				img {
					max-height: 350px;
					padding: 20px;
				}
			}
		}

		.title {
			margin-top: 0 !important;
		}

		@media screen and (max-width: $mobile-max-width) {
			.first {
				padding: 2rem 2rem !important;
			}

			.second {
				padding-right: 1rem !important;

				img {
					max-height: 700px !important;
					padding: 10px !important;
				}
			}
		}

		@media screen and (max-width: 768px) {
			flex-direction: column;
			background-position: 550px bottom;
			background-size: cover;
			padding: 0 20px !important;

			.first {
				padding: 1rem 1rem 0 !important;
			}

			.second {
				padding-top: 15px !important;
				max-height: 50% !important;
				padding-bottom: 10px !important;

				img {
					max-height: 250px !important;
					padding: 10px;
				}
			}

			.second,
			.third {
				text-align: center;
			}

			.action-buttons {
				display: flex;
				justify-content: center;
			}
		}
	}
}
</style>
