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
import LazyHydrate from 'vue-lazy-hydration';
import { title } from '~/helpers/meta';

export default {
	name: 'About',
	layout: 'banner-codenotary',
	components: {
		LazyHydrate,
	},	
	head() {
		return {
			title: title('About us'),
		};
	},
};
</script>
