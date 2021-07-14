<template>
	<UiPageSection id="lc-features-section">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="Features" />
				</v-col>
			</v-row>
			<v-row center top>
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
				>
					<i-card>
						<img
							slot="image"
							src="/images/ci-cd/features/easy_to_use.svg"
							alt="Easy to use"
						>
						<h4 class="title font-weight-bold primary--text">
							Turnkey solution
						</h4>
						<p class="lead">
							(5 minute install).
						</p>
					</i-card>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
				>
					<i-card>
						<img
							slot="image"
							src="/images/ci-cd/features/tamperproof.svg"
							alt="Tamperproof"
						>
						<h4 class="title font-weight-bold primary--text">
							Immediate results
						</h4>
						<p class="lead">
							(15 minutes after configuration).
						</p>
					</i-card>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
				>
					<i-card>
						<img
							slot="image"
							src="/images/ci-cd/features/full_transparency.svg"
							alt="Full transparency"
						>
						<h4 class="title font-weight-bold primary--text">
							Meaningful monitoring & analytics
						</h4>
						<p class="lead">
							Simple yet powerful.
						</p>
					</i-card>
				</v-col>
				<v-col
					xs="12"
					sm="6"
					md="4"
					lg="3"
				>
					<i-card>
						<img
							slot="image"
							src="/images/ci-cd/features/notarize.svg"
							alt="Notarize"
						>
						<h4 class="title font-weight-bold primary--text">
							Filter the noise, focus on your critical systems
						</h4>
						<p class="lead">
							be a hero.
						</p>
					</i-card>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsFeatures',
};
</script>

<style lang="scss">
#lc-features-section {
	background-color: var(--v-grey-lighten4);
	overflow: hidden;

	.card {
		margin-bottom: 2rem;
		background: transparent;

		img {
			height: 96px;
			object-fit: contain;
		}

		.body {
			border: none;
			text-align: center;
		}
	}
}
</style>
