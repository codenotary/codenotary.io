<template>
	<div>
		<careers-header @scrollMeTo="scrollMeTo('openPosition')" />
		<our-values />
		<remote-friendly />
		<open-positions ref="openPosition" :open-positions="openPositions" />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';
import CareersHeader from '~/components/sections/headers/CareersHeader';
import OurValues from '~/components/sections/careers/OurValues';
import RemoteFriendly from '~/components/sections/careers/RemoteFriendly';
import OpenPositions from '~/components/sections/careers/OpenPositions';

export default {
	name: 'CareerPosts',
	head() {
		return {
			title: title('Careers'),
		};
	},
	components: {
		CareersHeader,
		OurValues,
		RemoteFriendly,
		OpenPositions,
	},
	async asyncData ({ $content }) {
		const openPositions = await $content('careers')
				.only(['title', 'slug', 'location', 'type', 'requires', 'apply', 'weight', 'active'])
				.sortBy('date', 'desc')
				.fetch();

		return { openPositions };
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
