<template>
	<div>
		<HomeHeader />
		<LazyHydrate when-visible>
			<PageSectionHeader
				title="Lorem Ipsum Dolor Sit Amet"
				:top="0"
				:bottom="0"
			/>
		</LazyHydrate>
		<LazyHydrate when-visible>
			<FeaturesSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TimestampServiceSection />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<CustomerSuccessStories />
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
	layout: 'banner',
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
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
