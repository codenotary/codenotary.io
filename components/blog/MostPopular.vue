<template>
	<section class="most-popular">
		<i-row class="_margin-bottom-1">
			<i-column class="_margin-0 _padding-xs-0" xs="12">
				<h3 class="_margin-0 _padding-xs-0 _font-weight-bold">
					Most popular
				</h3>
			</i-column>
		</i-row>
		<i-row v-if="card">
			<i-column
				v-for="article in articles"
				:key="article.slug"
				xs="12"
				class="_padding-left-0"
			>
				<nuxt-link :to="{ name: 'blog-post', params: { post: article.slug } }">
					<i-card size="sm" class="popular-card _margin-bottom-1">
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
			</i-column>
		</i-row>
		<i-row v-else>
			<i-column
				v-for="article in articles"
				:key="article.slug"
				xs="12"
			>
				<nuxt-link :to="{ name: 'blog-post', params: { post: article.slug } }">
					- {{ article.title }}
				</nuxt-link>
			</i-column>
		</i-row>
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
