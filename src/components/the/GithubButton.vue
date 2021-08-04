<template>
	<v-btn
		depressed
		color="accent"
		class="pa-0 overflow-hidden"
		href="https://github.com/codenotary/immudb"
		target="_blank"
	>
		<v-icon class="pa-2" color="white">
			{{ mdiGithub }}
		</v-icon>
		<span class="white brand--text py-2 pl-1 pr-2 text-subtitle-1">
			{{ stars }}
			<v-icon color="accent">
				{{ mdiStar }}
			</v-icon>
		</span>
	</v-btn>
</template>

<script>
import {
	mdiStar,
	mdiGithub,
} from '@mdi/js';
import { GithubService } from '@/services/github';

export default {
	name: 'TheGithubButton',
	data() {
		return {
			stars: null,
			mdiStar,
			mdiGithub,
		};
	},
	async fetch() {
		const { data } = await GithubService.getStars();
		const { stargazers_count: stargazersCount = null } = data;

		this.stars = stargazersCount;
	},
	fetchOnServer: false,
	computed: {
		parsedStars () {
			return this.stars === null
				? this.stars
				: Number(this.stars).toLocaleString();
		},
	},
};
</script>
