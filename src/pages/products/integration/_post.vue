<template>
	<UiPageSection>
		<UiPageSectionHeader :title="article.title" tag="h1" />
		<i-container>
			<v-row>
				<v-col>
					<article>
						<nuxt-content :document="article" />
					</article>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
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
