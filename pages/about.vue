<template>
	<div>
		<about-header />
		<hr>
		<LazyHydrate when-visible>
			<about-features-section />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<management-team-section />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<board-of-directors-section />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<scientific-board-section v-if="false" />
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
	name: 'About',
	components: {
		LazyHydrate,
	},
	head() {
		return {
			title: title('About us'),
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
