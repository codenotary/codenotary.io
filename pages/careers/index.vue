<template>
	<div>
		<CareersHeader @scrollMeTo="scrollMeTo('openPosition')" />
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
	methods: {
		scrollMeTo(refName) {
			if (refName && this.$refs[refName]) {
				this.$refs[refName].$el.scrollIntoView({ block: 'start', behavior: 'smooth' });
			}
		},
	},
};
</script>
