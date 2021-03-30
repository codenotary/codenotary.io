<template>
	<div>
		<HomeHeader/>
		<LazyHydrate when-visible>
			<highlighted-cards />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center _margin-top-8">
				<hr class="_width-100"/>
				<PageSectionHeader
					weight="bold"
					title="WHAT WE DO"
					:top="0"
					:bottom="0"
				/>
			</i-container>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<WhatWeDoSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<i-container class="_display-flex _flex-direction-column _align-items-center _justify-content-center _margin-top-8 _margin-bottom-6">
				<hr class="_width-100"/>
				<PageSectionHeader
					title="Key benefits of using CodeNotary Ledger Compliance"
					:top="0"
					:bottom="0"
				/>
				<fa class="icon" icon="chevron-down" />
			</i-container>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<BenefitsSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<PageSectionHeader
				title="Hundreds of companies trust CodeNotary"
				:top="0"
				:bottom="0"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<FeaturesSection
				@onLedgerComplianceModal="ledgerComplianceModalOpen = true"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TimestampServiceSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<HomeVideos class="_margin-top-4" />
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
