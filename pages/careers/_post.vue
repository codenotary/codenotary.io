<template>
	<page-section>
		<page-section-header :title="article.title" tag="h1" />
		<i-container>
			<i-row class="_display-flex _flex-direction-column">
				<i-column
					v-if="article.location || article.type || article.requires" class="_margin-bottom-1"
					xs="12"
				>
					<i-card>
						<p v-if="article.location || article.type" class="_margin-top-0 _margin-bottom-0">
							<i-badge
								v-if="article.location" class="_margin-top-1-4 _margin-right-1-4"
								size="sm"
							>
								{{ article.location }}
							</i-badge>
							<i-badge
								v-if="article.type" class="_margin-top-1-4 _margin-right-1-4"
								size="sm"
							>
								{{ article.type }}
							</i-badge>
						</p>
						<p
							v-if="article.requires" class="lead _margin-top-1 _margin-right-1-4 _margin-bottom-0"
							style="font-size: 80%;"
						>
							{{ article.requires }}
						</p>
					</i-card>
				</i-column>
				<i-column xs="12">
					<article>
						<nuxt-content :document="article" :layout="'banner'" />
					</article>
				</i-column>
				<i-column
					v-if="article.apply" xs="12"
					class="_margin-top-4 _display-flex _justify-content-center _align-content-center"
				>
					<i-column
						xs="12" sm="10"
						md="8" lg="6"
					>
						<i-button
							variant="primary" large
							block @click="apply(article.apply)"
						>
							APPLY
						</i-button>
					</i-column>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'CareerPost',
	async asyncData({ $content, params }) {
		const article = await $content('careers', params.post).fetch();

		return { article };
	},
	methods: {
		apply (data) {
			data && window.open(data, '_blank');
		},
	},
	head() {
		return {
			title: title(this.article.title),
		};
	},
};
</script>
