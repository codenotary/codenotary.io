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
						title="Lorem Ipsum Dolor Sit Amet"
						:inner-content="[
							{
								title: 'Title 1',
								text: 'Lorem Ipsum Dolort Sit Amet',
							},
							{
								title: 'Title 2',
								text: 'Lorem Ipsum Dolort Sit Amet',
							},
						]"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vestibulum venenatis lacus <span class="_font-weight-bold">at mi rutrum</span>, et vulputate eros luctus.
							Pellentesque commodo tellus libero, ut vestibulum mauris pharetra vitae.
						</p>
						<template #button>
							<i-button
								size="lg"
								variant="primary"
								:to="{ name: '' }"
							>
								BUTTON
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
						title="Lorem Ipsum Dolor Sit Amet"
					>
						<p>
							Integer nec orci id nisi ultricies feugiat at vitae nibh.
							Nunc vitae fringilla tellus, <span class="_font-weight-bold">eget pulvinar est</span>.
							Curabitur malesuada augue mauris, vitae fringilla ex ultricies eu.
							Donec vel ex sed sem molestie mollis.
						</p>
					</Feature>
				</i-column>
				<i-column
					class="_margin-y-4"
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="right"
						title="Lorem Ipsum Dolor Sit Amet"
					>
						<p>
							Vestibulum massa ante, <span class="_font-weight-bold">scelerisque ac nisl quis</span>, blandit pretium mauris.
							Mauris ut pellentesque est. Praesent condimentum ipsum et tempor lobortis.
							Nulla velit augue, aliquet eget justo vitae, volutpat consequat justo.
						</p>
					</Feature>
				</i-column>
				<i-column
					class="_margin-top-4"
					xs="12"
				>
					<Feature
						image="https://via.placeholder.com/150"
						content-side="left"
						title="Lorem Ipsum Dolor Sit Amet"
					>
						<p>
							Ut ut laoreet ex. Morbi sed leo at libero luctus interdum non blandit magna.
							Donec tincidunt, urna ac rutrum tristique, sapien diam facilisis sem,
							eu vehicula urna massa vel urna. Nullam sagittis semper iaculis.
							Maecenas scelerisque, lacus vel cursus ultricies, risus mi porttitor mauris.
						</p>
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
