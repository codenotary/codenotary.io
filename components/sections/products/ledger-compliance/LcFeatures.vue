<template>
	<page-section id="lc-features-section">
		<i-container>
			<i-row>
				<i-column>
					<page-section-header title="CodeNotary Ledger Compliance Features" />
				</i-column>
			</i-row>
			<i-row center top>
				<i-column
					xs="12" sm="6"
					md="4" lg="3"
				>
					<i-card>
						<img
							slot="image" src="/images/cn-lc/features/immutable.svg"
							alt="Immutable and tamperproof transactional ledgers"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Immutable and tamperproof transactional ledgers
						</h4>
						<p class="lead">
							Data cannot be deleted or modified. Complete and sequenced history.
						</p>
					</i-card>
				</i-column>

				<i-column
					xs="12" sm="6"
					md="4" lg="3"
				>
					<i-card>
						<img
							slot="image" src="/images/cn-lc/features/online.svg"
							alt="Always online - no archival system"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Always online - no archival system
						</h4>
						<p class="lead">
							Virtual Appliance, Linux or Kubernetes deployment
						</p>
					</i-card>
				</i-column>

				<i-column
					xs="12" sm="6"
					md="4" lg="3"
				>
					<i-card>
						<img
							slot="image" src="/images/cn-lc/features/speed.svg"
							alt="Millions of transaction per second"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Millions of transaction per second
						</h4>
						<p class="lead">
							Data cannot be deleted or modified. Complete and sequenced history.
						</p>
					</i-card>
				</i-column>
				<i-column
					xs="12" sm="6"
					md="4" lg="3"
				>
					<i-card>
						<img
							slot="image" src="/images/cn-lc/features/compliance.svg"
							alt="Compliance and Audit"
						>
						<h4 class="title _font-weight-bold _text-primary">
							Compliance and Audit
						</h4>
						<p class="lead">
							Query capabilities for auditors
						</p>
					</i-card>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'LcFeatures',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-features-section {
	background-color: $color-gray-10;
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
