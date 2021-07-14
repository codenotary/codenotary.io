<template>
	<section class="most-popular">
		<v-row class="mb-4">
			<v-col class="_margin-0 _padding-xs-0" xs="12">
				<h3 class="_margin-0 _padding-xs-0 font-weight-bold">
					Most popular
				</h3>
			</v-col>
		</v-row>
		<v-row v-if="card">
			<v-col
				v-for="article in articles"
				:key="article.slug"
				xs="12"
				class="_padding-left-0"
			>
				<nuxt-link :to="{ name: 'blog-post', params: { post: article.slug } }">
					<i-card size="sm" class="popular-card mb-4">
						<img
							slot="image"
							:src="article.image || `/images/blog-post.svg`"
							class="image -responsive"
							:title="article.title"
							:alt="article.title"
							onerror="this.src='/images/blog-post.svg'"
						>
						{{ article.title }}
					</i-card>
				</nuxt-link>
			</v-col>
		</v-row>
		<v-row v-else>
			<v-col
				v-for="article in articles"
				:key="article.slug"
				xs="12"
			>
				<nuxt-link :to="{ name: 'blog-post', params: { post: article.slug } }">
					- {{ article.title }}
				</nuxt-link>
			</v-col>
		</v-row>
	</section>
</template>

<script>
export default {
	name: 'BlogMostPopular',
	props: {
		articles: { type: Array, default: () => [] },
		card: { type: Boolean, default: false },
	},
};
</script>

<style lang="scss" scoped>
.most-popular {
	.popular-card {
		display: flex;
		flex-direction: row;
		height: 96px;

		.image {
			max-height: 100%;
			max-width: 64px;
		}
	}
}
</style>
