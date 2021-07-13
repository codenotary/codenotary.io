<template>
	<UiPageSection
		id="ztc-technology-platform"
		variant="white"
	>
		<i-container>
			<i-row>
				<i-column>
					<UiPageSectionHeader title="The Technology Platform" block>
						We operate a <a href="https://www.parity.io/ethereum/">Parity Ethereum</a> multi-purpose blockchain. It enables our consortium members to develop and operate their own distributed applications without the cost and complex aspects of running their own operations.
						Parity is a derivative of Ethereum. It combines the advantages of the public Ethereum chain with key benefits of consortium-based chains.
					</UiPageSectionHeader>
				</i-column>
			</i-row>
			<i-row>
				<i-column lg="6">
					<ul class="list -unstyled">
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-1.png"
								alt="ZTC Technology Platform"
							>
						</li>
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-3.png"
								alt="ZTC Technology Platform"
							>
						</li>
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-4.png"
								alt="ZTC Technology Platform"
							>
						</li>
					</ul>
				</i-column>
				<i-column lg="6">
					<ul class="list -unstyled">
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-2.png"
								alt="ZTC Technology Platform"
							>
						</li>
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-5.png"
								alt="ZTC Technology Platform"
							>
						</li>
						<li>
							<img
								class="image -responsive"
								src="/images/ztc/technology-platform/tech-6.png"
								alt="ZTC Technology Platform"
							>
						</li>
					</ul>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ZtcTechnologyPlatform',
};
</script>

<style lang="scss">
	@import "~@inkline/inkline/src/css/mixins";
	@import "~@inkline/inkline/src/css/config";

	#ztc-technology-platform {
		text-align: center;

		.list {
			font-size: 1.2rem;

			.svg-inline--fa {
				margin-right: 0.5rem;
				color: $color-success;
			}
		}
	}
</style>
