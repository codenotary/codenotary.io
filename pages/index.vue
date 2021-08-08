<template>
	<div id="homepage">
		<HomeHeader />

		<LazyHydrate when-visible>
			<CNILSection id="cnil-section" class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<ImmudbBuiltOnSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<TrustedSupplyChainSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<BenefitsSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<WhatWeDoSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<CNILAroundTheWorldSection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<WhatClientsSaySection class="section" />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<NewsletterSection id="newsletter-section" class="section" />
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
	name: 'Homepage',
	components: {
		LazyHydrate,
	},
	data() {
		return {
			ledgerComplianceModalOpen: false,
			webinarModalOpen: false,
		};
	},
	head () {
		return {
			title: 'Homepage',
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
#homepage {
	background-color: #e5e5e5;

	.section {
		overflow: visible !important;
	}

	#cnil-section {
		margin-bottom: calc(-80px - 4rem);
	}

	#whatwedo-section {
		margin-bottom: -80px;
	}

	#what-clients-say-section {
		background: transparent;
	}

	#newsletter-section {
		margin-top: -250px;

		@media screen and (min-width: $mobile-max-width) and (max-width: 1199px) {
			margin-top: -125px;
		}
	}
}
</style>
