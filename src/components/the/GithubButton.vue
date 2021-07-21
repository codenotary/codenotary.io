<template>
	<p>{{ stars }}</p>
</template>

<script>
import { GithubService } from '@/services/github';

export default {
	name: 'TheGithubButton',
	data() {
		return {
			stars: null,
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
