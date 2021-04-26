<template>
	<PageSection>
		<PageSectionHeader :title="article.title" tag="h1" />
		<i-container>
			<i-row>
				<i-column>
					<article>
						<nuxt-content :document="article" />
					</article>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'IntegrationPost',
	async asyncData({ $content, params }) {
		const article = await $content('products/integration', params.post).fetch();

		return { article };
	},
	head() {
		return {
			title: title(this.article.title),
		};
	},
};
</script>
