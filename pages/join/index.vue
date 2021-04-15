<template>
	<div>
		<CareersHeader @scrollMeTo="scrollMeTo('openPosition')" />
		<OurValues />
		<RemoteFriendly />
		<OpenPositions ref="openPosition" :open-positions="openPositions" />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'JoinPosts',
	async asyncData ({ $content }) {
		const openPositions = await $content('join')
				.only(['title', 'slug', 'location', 'type', 'requires', 'apply', 'weight', 'active'])
				.sortBy('date', 'desc')
				.fetch();

		return { openPositions };
	},
	head() {
		return {
			title: title('Join our Team'),
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
