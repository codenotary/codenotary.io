<template>
	<div>
		<SectionsHomepageHomeHeader />
		<LazyHydrate when-visible>
			<SectionsHomepageHeroCardsSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<SectionsHomepageWhatWeDoSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<SectionsHomepageBenefitsSection />
		</LazyHydrate>

		<LazyHydrate when-visible>
			<SectionsHomepageNewsletterSection />
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
