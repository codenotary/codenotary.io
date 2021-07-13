<template>
	<div>
		<LedgerComplianceHeader
			@onLedgerComplianceModal="ledgerComplianceModalOpen = true"
		/>
		<LazyHydrate when-visible>
			<LedgerComplianceFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<HomeVideos class="_margin-top-4" />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CustomerSuccessStories
				@onWebinarModal="webinarModalOpen = true"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LedgerComplianceInfrastructure />
		</LazyHydrate>

		<!-- ACTIVE CAMPAING MODALS -->
		<LazyHydrate when-idle>
			<UiModalLedgerCompliance
				v-model="ledgerComplianceModalOpen"
			/>
		</LazyHydrate>
		<LazyHydrate when-idle>
			<UiModalWebinarModal
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
import { title } from '~/helpers/meta';

export default {
	name: 'ImmutableLedgerOnPremise',
	components: {
		LazyHydrate,
	},
	data: () => ({
		ledgerComplianceModalOpen: false,
		webinarModalOpen: false,
	}),
	head() {
		return {
			title: title('Immutable Ledger (on-premise)'),
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',
				light: true,
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

<style lang="scss">
#codenotary-ledger-compliance-section {
	background-color: var(--v-grey-lighten2);
}

#tree-image {
	margin-top: 6rem;
	margin-bottom: -6rem;
	height: 25rem;
	width: auto;
}
</style>
