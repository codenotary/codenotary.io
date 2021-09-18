<template>
	<div id="codenotary-cloud">
		<CodenotaryCloudPageHeader />

		<LazyHydrate when-visible>
			<CodenotaryCloudBenefitsSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<TrustedSupplyChainSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<BOMInfoSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<WhatWeDoSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-whisible>
			<CodenotaryCloudDescription class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<Customers />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<WhatClientsSaySection height="450" class="section" />
		</LazyHydrate>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import LazyHydrate from 'vue-lazy-hydration';

export default {
	name: 'CodenotaryCloud',
	components: {
		LazyHydrate,
	},
	data() {
		return {
			ledgerComplianceModalOpen: false,
			webinarModalOpen: false,
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'dark-transparent',
				light: false,
			});
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>

<style lang="scss" scoped>
#codenotary-cloud {
	.section {
		overflow: visible !important;
	}

	#cnil-section {
		padding-top: 20px !important;

		@media screen and (max-width: 768px) {
			padding-top: 30px !important;
		}

		@media screen and (max-width: 375px) {
			padding-top: 0 !important;
		}
	}

	#whatwedo-section {
		margin-bottom: -80px;
	}

	#what-clients-say-section {
		background: transparent;
	}
}
</style>
