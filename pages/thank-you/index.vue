<template>
	<page-section>
		<page-section-header :title="page.title" tag="h1" />
		<i-container>
			<i-row>
				<i-column>
					<article class="thank-you-page">
						<nuxt-content :document="page" />
					</article>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'ThankYou',
	async asyncData({ $content, params }) {
		console.log(params);
		const page = await $content('thank-you', 'index').fetch();
		console.log(page);

		return { page };
	},
	head() {
		return {
			title: title(this.page.title),
		};
	},
};
</script>

<style lang="scss">
article.thank-you-page {
	text-align: center;
}
</style>
