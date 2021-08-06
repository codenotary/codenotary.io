<template>
	<PageSection id="trusted-supply-chain-section">
		<i-container class="container">
			<i-row>
				<i-column
					sm="12" lg="6"
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
							:to="{ path: '/technologies/immudb' }"
							class="discover-button"
						>
							<img src="/images/download.png"> Download PDF
						</cn-button>
					</div>
				</i-column>
				<i-column
					sm="12" lg="6"
					class="_text-center"
				>
					<img
						class="image -responsive"
						src="/images/sbom.png"
						alt="Software Bill of Material"
					>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'TrustedSupplyChainSection',
};
</script>

<style lang="scss">
#trusted-supply-chain-section {
	.container {
		background: url(/images/sbom-bg.png);
	}
}
</style>
