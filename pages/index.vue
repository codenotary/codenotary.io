<template>
	<div>
		<HomeHeader/>
		<LazyHydrate when-visible>
			<hero-cards-section />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<WhatWeDoSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<BenefitsSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<NewsletterSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<CustomerSuccessStories
				@onWebinarModal="webinarModalOpen = true"
			/>
		</LazyHydrate>

		<!-- ACTIVE CAMPAING MODALS -->
		<LazyHydrate when-idle>
			<LedgerComplianceModal
				v-model="ledgerComplianceModalOpen"
			/>
		</LazyHydrate>
		<LazyHydrate when-idle>
			<WebinarModal
				v-model="webinarModalOpen"
			/>
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
