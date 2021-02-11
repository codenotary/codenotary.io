<template>
	<div>
		<PageSection>
			<PageSectionHeader title="Blog" tag="h1" />
			<i-container>
				<i-row>
					<i-column xs="12" class="blog-search-wrapper _hidden-sm-and-down _padding-right-2 _padding-left-2 _margin-bottom-2">
						<i-input
							v-model="filter"
							class="blog-search"
							placeholder="Filter post by title, date or tag"
							:clearable="!!filter"
						/>
					</i-column>
					<i-column xs="12" class="blog-search-wrapper mobile _hidden-md-and-up _padding-right-1 _padding-left-1 _margin-bottom-2">
						<i-input
							v-model="filter"
							class="blog-search"
							placeholder="Filter post by title, date or tag"
							:clearable="!!filter"
						/>
					</i-column>
					<i-column xs="12">
						<no-ssr>
							<masonry
								class="_width-100"
								:cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
								:gutter="{default: '1rem', 700: '1rem'}"
							>
								<div
									v-for="article in filteredArticles"
									:key="article.slug"
									class="item"
									column-width="33px"
								>
									<i-card class="blog-post _display-flex _flex-direction-column _justify-content-space-between">
										<div>
											<div class="image-wrapper">
												<img
													:src="article.image || `/images/blog-post.svg`"
													class="image -responsive"
													:title="article.title"
													:alt="article.title"
													onerror="this.src='/images/blog-post.svg'"
												>
											</div>
											<nuxt-link class="_overlay-link" :to="{ name: 'blog-post', params: { post: article.slug } }">
												<div
													v-if="article.title"
													class="title"
												>
													{{ article.title | truncate(48, '...') }}
												</div>
											</nuxt-link>
											<div class="date">
												{{ article.date }}
											</div>
										</div>
										<div>
											<i-badge
												v-for="(tag, idx) in article.tags"
												:key="`${tag}-${idx}`"
												class="_margin-top-1-4 _margin-right-1-4"
												size="sm"
												@click.stop.prevent="filter=tag"
											>
												{{ tag }}
											</i-badge>
										</div>
									</i-card>
								</div>
							</masonry>
						</no-ssr>
						<no-ssr>
							<infinite-loading @infinite="infiniteHandler">
								<template
									slot="spinner"
									class="text-muted small-text"
								>
									Loading...
								</template>
								<div
									slot="no-more"
									class="text-muted small-text"
								>
									--- End ---
								</div>
								<div
									slot="no-results"
									class="text-muted small-text"
								>
									No results message
								</div>
							</infinite-loading>
						</no-ssr>
					</i-column>
				</i-row>
			</i-container>
		</PageSection>
	</div>
</template>

<script>
import NoSSR from 'vue-no-ssr';
import { title } from '~/helpers/meta';

const BLOG_POSTS_PER_PAGE = 12;
const INFINITE_LOAD_DELAY = 0;

export default {
	name: 'BlogPosts',
	components: {
		'no-ssr': NoSSR,
	},
	layout: 'banner',
	async asyncData ({ $content }) {
		const articles = await $content('blog')
				.only(['title', 'date', 'image', 'slug', 'tags'])
				.sortBy('date', 'desc')
				.limit(BLOG_POSTS_PER_PAGE)
				.fetch();

		return { articles };
	},
	data: () => ({
		filter: '',
		articles: [],
		page: 0,
	}),
	head () {
		return {
			title: title('Blog'),
		};
	},
	computed: {
		filteredArticles () {
			if (this.filter) {
				return this.articles && this.articles.filter((_) => {
					const title = _.title.toLowerCase().includes(this.filter.toLowerCase());
					const date = _.date.includes(this.filter.replace(/\//g, '-'));
					const tags = _.tags ? _.tags.map(_ => _.toLowerCase()).includes(this.filter.toLowerCase()) : false;
					return title || date || tags;
				});
			}
			return this.articles;
		},
	},
	mounted () {
		if (typeof this.$redrawVueMasonry === 'function') {
			this.$redrawVueMasonry();
		}
	},
	beforeDestroy () {
		this.filter = null;
		this.articles = null;
		this.page = 0;
	},
	methods: {
		infiniteHandler ($state) {
			setTimeout(async () => {
				this.page += 1;
				const lazyArticles = await this.$content('blog')
						.only(['title', 'date', 'image', 'slug', 'tags'])
						.sortBy('date', 'desc')
						.limit(BLOG_POSTS_PER_PAGE)
						.skip(BLOG_POSTS_PER_PAGE * this.page)
						.fetch();

				if (lazyArticles && lazyArticles.length > 0) {
					this.articles.push(...lazyArticles);
					$state.loaded();
				}
				else {
					$state.complete();
				}
			}, INFINITE_LOAD_DELAY);
		},
	},
};
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

.blog-search-wrapper {
	display: flex;
	justify-content: flex-end;

	&.navbar {
		position: absolute;
		min-width: 240px;
		max-width: 240px;
		top: 24px;
		right: 16px;
		background-color: transparent;
		z-index: 1010;
	}

	&.mobile {
		min-width: 100%;
		max-width: 100%;

		.blog-search {
			min-width: 100%;
			max-width: 100%;
			padding-right: 16px;
		}
	}

	.blog-search {
		min-width: 320px;
		max-width: 480px;
	}
}

.blog-post {
	margin-bottom: 1rem;
	height: 320px;

	.body {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.image-wrapper {
		width: 100%;
		text-align: center;

		.image {
			object-fit: contain;
			height: 112px;
			margin-bottom: 1rem;
			text-align: center;
			background-position: center center;
			background-color: white;
		}
	}

	.date {
		font-size: 80%;
		color: $text-muted;
	}
}
</style>
