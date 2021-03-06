<template>
	<PageSection
		id="features-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column
					class="_margin-bottom-xs-2 _margin-bottom-sm-4 _margin-bottom-md-4 _margin-bottom-lg-4 _margin-bottom-xl-4"
					style="height: 100%;"
					xs="12"
				>
					<Feature
						image="/images/features/feat-immutability.png"
						content-side="right"
						title="Cryptographic verifiable immutable data platform"
						:inner-content="[
							{
								title: '100% immutability',
								text: 'Complete and sequenced history of data and data changes',
							},
							{
								title: '100% client-cryptographic proof',
								text: 'Fully integrated hash-tree provides mathematic proof to any client',
							},
						]"
					>
						<p>
							Don't trust central or online services to provide immutability for your precious data. CNIL uses the world's fastest immutable database <span class="_font-weight-bold">immudb</span>, to provide full immutability and client-cryptographic proof.
							That cryptographic verification guarantees data integrity and tamper-evidence.
						</p>
					</Feature>
				</i-column>
				<i-column
					class="_margin-y-xs-2 _margin-y-sm-4 _margin-y-md-4 _margin-y-lg-4 _margin-y-xl-4"
					style="height: 100%;"
					xs="12"
				>
					<Feature
						image="/images/features/feat-performance.png"
						content-side="left"
						title="World's fastest immutable ledger"
						:inner-content="[
							{
								title: '10.000.000 tx/s',
								text: 'Limitless performance despite tamper resistance',
							},
							{
								title: '650 times faster',
								text: 'Highest thruput of any immutable ledger technology',
							},
						]"
					>
						<p>
							To keep up with today's need for high-speed applications, you need a high-speed database.
							This new class of immutable database, allows to directly store and access data, without compromising <span class="_font-weight-bold">performance</span>.
							CNIL is able to support 10.000.000 transactions a second.
							Immutability and high-speed performance - first time combined.
						</p>
						<template #button>
							<i-button
								class="_padding-x-4"
								size="lg"
								variant="primary"
								@click="$emit('onLedgerComplianceModal')"
							>
								Start trial
							</i-button>
						</template>
					</Feature>
				</i-column>
				<i-column
					class="_margin-top-xs-2 _margin-top-sm-4 _margin-top-md-4 _margin-top-lg-4 _margin-top-xl-4"
					style="height: 100%;"
					xs="12"
					sm="6"
				>
					<Feature
						content-side="left"
						title="CI/CD, Change Data Capture and SDKs"
						:inner-content="[
							{
								title: '100% Trusted pipeline',
								text: 'Tamperproof provenance for your code and CI/CD pipeline',
							},
							{
								title: '8 SDKs and plugins',
								text: 'Out of the box support for Go, Java, Python, Node.js to support custom applications',
							},
						]"
					>
						<p>
							The SDKs enable your developers to write data to CodeNotary Immutable Ledger using a few lines of code.
							Write and read your data records into Immutable Ledger making sure your data history trace is always available.
							Use the powerful plugins to record all PostgreSQL database changes in an immutable Ledger using CDC (change data capture).
						</p>
					</Feature>
				</i-column>
				<i-column
					class="_margin-top-xs-2 _margin-top-sm-4 _margin-top-md-4 _margin-top-lg-4 _margin-top-xl-4"
					style="height: 100%;"
					xs="12"
					sm="6"
				>
					<Feature
						content-side="left"
						title="Ready in minutes"
						:inner-content="[
							{
								title: 'Linux, Container or virtual appliance',
								text: 'Install and run CNIL in minutes using our universal install options',
							},
							{
								title: 'On-premise, cloud-based or managed service',
								text: 'You run it, or we run it for you. It\'s your choice',
							},
						]"
					>
						<p>
							Deploy as a virtual appliance or install on any Linux system, <span class="_font-weight-bold">CNIL</span>
							is ready within minutes to receive and store your data tamper-proof. You can run CNIL on-premise, in the cloud
							or in hybrid environments. If you wish for an independent deployment outside of your environment, we offer
							managed service as well.
						</p>
					</Feature>
				</i-column>
			</i-row>
			<i-row
				class="_margin-top-xs-2 _margin-top-sm-4 _margin-top-md-4 _margin-top-lg-4 _margin-top-xl-4"
			>
				<i-column
					class="_text-center _text-muted"
					style="height: 100%;"
				>
					<ul class="list -unstyled">
						<li class="_margin-bottom-2">
							<strong>Immutability</strong> by perimeter defense is proven not to work, <strong>Immutability</strong> needs to be embedded in the data structure!
						</li>
						<li>
							Powered by
							<a href="https://immudb.io">
								<img
									height="48"
									width="48"
									src="/images/logo/icon/logo_icon_black.svg"
									alt="immudb"
								>
								<strong class="_text-black">immudb</strong>
							</a>
						</li>
					</ul>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'FeaturesSection',
	data() {
		return {
			ledgerComplianceModalOpen: false,
			playing: false,
			timeout: null,
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#features-section {
	.column {
		@include breakpoint-down(lg) {
			.feature {
				margin-bottom: $spacer * 2;
			}

			&:last-child .feature {
				margin-bottom: 0;
			}
		}
	}
}
</style>
