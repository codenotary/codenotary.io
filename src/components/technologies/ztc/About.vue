<template>
	<UiPageSection id="ztc-about">
		<i-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader title="What is the Zero-Trust Consortium?" block>
						We are a consortium blockchain proudly and reliably processing hundreds of thousands of transactions daily. Our mission is to provide a trustable, independent, always-on, permissioned blockchain for the software industry with the following attributes:
					</UiPageSectionHeader>
				</v-col>
			</v-row>
			<v-row>
				<v-col lg="6">
					<ul class="list -unstyled">
						<li><fa icon="check-square" /> Decentralized governance and ownership</li>
						<li><fa icon="check-square" /> Low latency</li>
						<li><fa icon="check-square" /> Optimized for throughput</li>
						<li><fa icon="check-square" /> Zero transactional costs</li>
					</ul>
				</v-col>
				<v-col lg="6">
					<ul class="list -unstyled">
						<li><fa icon="check-square" /> Infinite hash storage</li>
						<li><fa icon="check-square" /> No associated crypto-currency</li>
						<li><fa icon="check-square" /> Globally distributed transparency</li>
						<li><fa icon="check-square" /> Always on</li>
					</ul>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ZtcAbout',
};

</script>

<style lang="scss">
#ztc-about {
	text-align: left;
	background-color: var(--v-grey-lighten4);

	h2 {
		text-align: center;
	}

	.section-header {
		text-align: left;
		margin-bottom: 3rem;
	}

	.list {
		font-size: 1.2rem;
		margin-bottom: 0;

		.svg-inline--fa {
			margin-right: 0.5rem;
			color: var(--v-success-base);
		}
	}
}
</style>
