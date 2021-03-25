<template>
	<div>
		<HomeHeader/>
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
