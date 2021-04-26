<template>
	<page-section>
		<page-section-header :title="'Terms of Service'" tag="h1" />

		<LayoutSubnavbarTos v-if="!isIndex" />

		<i-container>
			<i-row>
				<i-column v-if="isIndex && articles">
					<ul class="list -unstyled">
						<li
							v-for="article in articles" :key="article.slug"
							class="_margin-top-1 _text-center"
						>
							<nuxt-link :to="{ name: 'terms-of-service-slug', params: { slug: article.slug } }">
								{{ article.title }}
							</nuxt-link>
						</li>
					</ul>
				</i-column>
				<i-column v-else>
					<article>
						<nuxt-content :document="article" />
					</article>
				</i-column>
				<i-column
					v-if="article.download" xs="12"
					class="_margin-top-4 _display-flex _justify-content-center _align-content-center"
				>
					<i-column
						xs="12" sm="10"
						md="8" lg="6"
					>
						<i-button
							variant="primary" large
							block @click.prevent="download(article.download, article.title)"
						>
							DOWNLOAD
						</i-button>
					</i-column>
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
import axios from 'axios';
import { title } from '~/helpers/meta';

export default {
	head() {
		return {
			title: title(this.isIndex ? 'Terms of Service' : `Terms of Service - ${ this.article.title }`),
		};
	},
	computed: {
		isIndex() {
			return this.$route.path === '/terms-of-service';
		},
	},
	methods: {
		download (url, label) {
			axios.get(url, { responseType: 'blob' })
					.then((response) => {
						const blob = new Blob([response.data], { type: 'application/pdf' });
						const link = document.createElement('a');
						link.href = URL.createObjectURL(blob);
						link.download = label;
						link.click();
						URL.revokeObjectURL(link.href);
					})
					.catch((err) => {
						console.error(err);
					});
		},
	},
};
</script>
