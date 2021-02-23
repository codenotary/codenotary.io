<template>
	<div>
		<CareersHeader
			@scrollMeTo="scrollMeTo('openPosition')"
		/>
		<LazyHydrate when-visible>
			<OurValues />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<RemoteFriendly />
		</LazyHydrate>
		<LazyHydrate when-visible>
			<OpenPositions ref="openPosition" :open-positions="openPositions" />
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
	name: 'CareerPosts',
	components: {
		LazyHydrate,
	},
	async asyncData ({ $content }) {
		const openPositions = await $content('careers')
				.only(['title', 'slug', 'location', 'type', 'requires', 'apply', 'weight', 'active'])
				.sortBy('date', 'desc')
				.fetch();

		return { openPositions };
	},
	head() {
		return {
			title: title('Careers'),
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
		scrollMeTo(refName) {
			if (refName && this.$refs[refName]) {
				this.$refs[refName].$el.scrollIntoView({ block: 'start', behavior: 'smooth' });
			}
		},
	},
};
</script>
