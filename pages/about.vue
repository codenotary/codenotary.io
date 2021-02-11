<template>
	<div>
		<about-header />
		<hr>
		<about-features-section />
		<management-team-section />
		<board-of-directors-section />
		<scientific-board-section v-if="false" />
	</div>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	layout: 'banner-codenotary',
	head() {
		return {
			title: title('About us'),
		};
	},
};
</script>
