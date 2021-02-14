<template>
	<PageSection
		id="features-section"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="right"
						title="Most advanced immutable data platform"
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
							Don't trust central or online services to provide immutability for your precious data. CNLC uses the world's fastest immutable database <span class="_font-weight-bold">immudb</span>, to provide full immutability and client-cryptographic proof.
							That cryptographic verification guarantees data integrity and tamper-evidence.
						</p>
						<template #button>
							<i-button
								class="_padding-x-4"
								size="lg"
								variant="primary"
								:to="{ name: '' }"
							>
								Start trial
							</i-button>
						</template>
					</Feature>
				</i-column>
				<i-column
					class="_margin-y-4"
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="left"
						title="World's fastest immutable ledger"
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
							To keep up with today's need for high-speed applications, you need a high-speed database.
							This new class of immutable database, allows to directly store and access data, without compromising <span class="_font-weight-bold">performance</span>.
							CNLC is able to support 10.000.000 transactions a second.
							Immutability and high-speed performance - first time combined.
						</p>
						<template #button>
							<i-button
								class="_padding-x-4"
								size="lg"
								variant="primary"
								:to="{ name: '' }"
							>
								Start trial
							</i-button>
						</template>
					</Feature>
				</i-column>
				<i-column
					class="_margin-y-4"
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="right"
						title="Ready in minutes"
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
							Vestibulum massa ante, <span class="_font-weight-bold">scelerisque ac nisl quis</span>, blandit pretium mauris.
							Mauris ut pellentesque est. Praesent condimentum ipsum et tempor lobortis.
							Nulla velit augue, aliquet eget justo vitae, volutpat consequat justo.
						</p>
						<template #button>
							<i-button
								class="_padding-x-4"
								size="lg"
								variant="primary"
								:to="{ name: '' }"
							>
								Start trial
							</i-button>
						</template>
					</Feature>
				</i-column>
				<i-column
					class="_margin-top-4"
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="left"
						title="CI/CD, Change Data Capture and SDKs"
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
							Ut ut laoreet ex. Morbi sed leo at libero luctus interdum non blandit magna.
							Donec tincidunt, urna ac rutrum tristique, sapien diam facilisis sem,
							eu vehicula urna massa vel urna. Nullam sagittis semper iaculis.
							Maecenas scelerisque, lacus vel cursus ultricies, risus mi porttitor mauris.
						</p>
						<template #button>
							<i-button
								class="_padding-x-4"
								size="lg"
								variant="primary"
								:to="{ name: '' }"
							>
								Start trial
							</i-button>
						</template>
					</Feature>
				</i-column>
			</i-row>
			<i-row class=" _margin-top-4">
				<i-column class="_text-center _text-muted">
					<ul class="list -unstyled">
						<li class="_margin-bottom-2">
							<strong>Immutability</strong> by perimeter defense is proven not to work, <strong>Immutability</strong> needs to be embedded in the data structure!
						</li>
						<li>
							Powered by
							<a href="https://immudb.io">
								<img
									width="40"
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
