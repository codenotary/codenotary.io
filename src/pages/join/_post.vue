<template>
	<UiPageSection>
		<UiPageSectionHeader :title="article.title" tag="h1" />
		<v-container>
			<v-row class="_display-flex _flex-direction-column">
				<v-col
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
				</v-col>
				<v-col xs="12">
					<article>
						<nuxt-content :document="article" :layout="'banner'" />
					</article>
				</v-col>
				<v-col
					v-if="article.apply" xs="12"
					class="_margin-top-4 _display-flex _justify-content-center _align-content-center"
				>
					<v-col
						xs="12" sm="10"
						md="8" lg="6"
					>
						<v-btn
							color="primary"
							large
							block @click="apply(article.apply)"
						>
							APPLY
						</v-btn>
					</v-col>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
	name: 'JoinPost',
	async asyncData({ $content, params }) {
		const article = await $content('join', params.post).fetch();

		return { article };
	},
	head() {
		return {
			title: title(this.article.title),
		};
	},
	methods: {
		apply (data) {
			data && window.open(data, '_blank');
		},
	},
};
</script>
