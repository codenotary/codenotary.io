<template>
	<PageSection
		id="trusted-supply-chain-section"
		variant="transparent"
		:bottom="0"
	>
		<i-container class="container">
			<i-row>
				<i-column
					sm="12" lg="6"
					class="column first"
				>
					<h3
						class="_font-weight-bold _text-uppercase cn-text-white title second"
					>
						End-to-end<br>
						<span class="cn-text-secondary">trusted supply chain</span><br>
						integrity and authenticity<br>
						including SBOM<br>
						(Software Bill of<br>
						Material)
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
							<img src="/images/download.svg">
							<span>Download PDF</span>
						</cn-button>
					</div>
				</i-column>
				<i-column
					sm="12" lg="6"
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
			@media screen and (max-width: $mobile-max-width) {
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
					max-height: 500px;
					padding: 30px;
				}
			}

			@media screen and (max-width: $mobile-max-width) {
				padding: 0 30px !important;

				&.second {
					padding-top: 15px !important;
					max-height: 50% !important;
					padding-bottom: 20px !important;

					img {
						max-height: 100% !important;
					}
				}
			}
		}

		@media screen and (max-width: $mobile-max-width) {
			flex-direction: column;
			background-position: 550px bottom;
			background-size: cover;

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
