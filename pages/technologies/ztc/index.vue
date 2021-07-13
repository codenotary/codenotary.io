<template>
	<div>
		<TechnologiesZtcHeader />
		<LazyHydrate when-visible>
			<TechnologiesZtcAbout />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesZtcTechnologyPlatform />
		</LazyHydrate>
		<hr>
		<LazyHydrate when-visible>
			<TechnologiesZtcMonitoring />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesZtcConsortiumBlockchain />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesZtcMembers />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<TechnologiesZtcJoin />
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
	name: 'ZtcPage',
	components: {
		LazyHydrate,
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'white',
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
