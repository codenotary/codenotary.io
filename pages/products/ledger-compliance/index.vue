<template>
	<div>
		<LCHeader
			@onLedgerComplianceModal="ledgerComplianceModalOpen = true"
		/>
		<LazyHydrate when-visible>
			<LcFeatures />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CustomerSuccessStories
				@onWebinarModal="webinarModalOpen = true"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<LcInfrastructure />
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
import { title } from '~/helpers/meta';

export default {
	name: 'LedgerComplianceOnPremise',
	components: {
		LazyHydrate,
	},
	data: () => ({
		ledgerComplianceModalOpen: false,
	}),
	head() {
		return {
			title: title('Ledger Compliance (on-premise)'),
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
@import "~@inkline/inkline/src/css/config/colors";

#codenotary-ledger-compliance-section {
	background-color: $color-gray-20;
}

#tree-image {
	margin-top: 6rem;
	margin-bottom: -6rem;
	height: 25rem;
	width: auto;
}
</style>
