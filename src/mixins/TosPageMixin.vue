<template>
	<UiPageSection>
		<UiPageSectionHeader :title="'Terms of Service'" tag="h1" />

		<TheSubnavbarTos v-if="!isIndex" />

		<v-container>
			<v-row>
				<v-col v-if="isIndex && articles">
					<ul class="list -unstyled">
						<li
							v-for="article in articles"
							:key="article.slug"
							class="mt-4 text-center"
						>
							<nuxt-link :to="{ name: 'terms-of-service-slug', params: { slug: article.slug } }">
								{{ article.title }}
							</nuxt-link>
						</li>
					</ul>
				</v-col>
				<v-col v-else>
					<article>
						<nuxt-content :document="article" />
					</article>
				</v-col>
				<v-col
					v-if="article.download"
					xs="12"
					class="_margin-top-4 d-flex justify-center _align-content-center"
				>
					<v-col
						xs="12"
						sm="10"
						md="8"
						lg="6"
					>
						<v-btn
							color="primary"
							large
							block
							@click.prevent="download(article.download, article.title)"
						>
							DOWNLOAD
						</v-btn>
					</v-col>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
import axios from 'axios';

export default {
	name: 'TosPageMixin',
	head () {
		return {
			// title: title(this.isIndex ? 'Terms of Service' : `Terms of Service - ${ this.article.title }`),
			title: this.isIndex
				? 'Terms of Service'
				: `Terms of Service - ${ this.article.title }`,
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
