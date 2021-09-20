<template>
	<UiPageSection class="article-section">
		<UiPageSectionHeader :title="article.title" tag="h1" />
		<v-container>
			<v-row>
				<v-col
					xs="12"
					sm="12"
					md="9"
				>
					<article class="blog-post-page">
						<nuxt-content :document="article" />
					</article>
				</v-col>
				<v-col
					xs="12"
					sm="12"
					md="3"
				>
					<BlogMostPopular
						class="most-popular-wrapper"
						:articles="mostPopular"
						card
					/>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
import { mapGetters } from 'vuex';
import {
	VIEW_MODULE,
	MOBILE,
} from '@/store/view/constants';
import { title, meta, DEFAULT_META } from '@/helpers/meta/index';

export default {
	name: 'BlogPost',
	layout: 'immudb-star-banner',
	async asyncData({ $content, params }) {
		const BLOG_POST_PATH = 'blog';
		const post = params && params.post ? params.post.replace('.md', '') : '';
		const article = await $content(BLOG_POST_PATH, post).fetch();
		const mostPopular = await $content(BLOG_POST_PATH).where({ top: true }).fetch();

		return { article, mostPopular };
	},
	head () {
		return {
			title: title(this.article.title),
			meta: [
				...this.meta,
				{ property: 'article:published_time', content: this.article.date },
				{ property: 'article:modified_time', content: this.article.date },
				{ property: 'article:tag', content: this.article.tags ? this.article.tags.toString() : '' },
				{ name: 'twitter:label1', content: 'Written by' },
				{ name: 'twitter:data1', content: this.article.author || DEFAULT_META.AUTHOR },
				{ name: 'twitter:label2', content: 'Filed under' },
				{ name: 'twitter:data2', content: this.article.tags ? this.article.tags.toString() : '' },
			],
			link: [
				{ hid: 'canonical', rel: 'canonical', href: this.postUrl },
			],
		};
	},
	computed: {
		...mapGetters(VIEW_MODULE, {
			mobile: MOBILE,
		}),
		getDescription () {
			const MAX_DESCRIPTION = 160;
			const description = this.jsonTreeToString(this.article.body.children);
			return description ? description.slice(0, MAX_DESCRIPTION) : '';
		},
		meta () {
			return meta({
				type: 'article',
				title: this.article.title,
				description: this.article.description || this.getDescription,
				url: this.postUrl,
				mainImage: this.article.image,
			});
		},
		postUrl () {
			return `${ DEFAULT_META.SITE_URL }${ this.$route.fullPath }`;
		},
	},
	methods: {
		jsonTreeToString (data) {
			if (data && data.length) {
				return data.reduce((acc, x, idx) => {
					const result = x && x.children ? this.jsonTreeToString(x.children) : x.value;
					result && result !== 'undefined' && (acc += result);
					return acc;
				}, '');
			}
		},
	},
};
</script>

<style lang="scss">
section.article-section {
	article.blog-post-page {
		padding-right: $spacer-4;

		img {
			display: block;
			max-width: 100%;
			margin: $spacer-2 auto;
			padding: 0 0 $spacer-1 $spacer-1;
		}

		table {
			width: 100%;
			margin: $spacer-2 0;
			border-collapse: collapse;
		}

		tr:nth-of-type(even) {
			background: var(--v-primary-lighten4);
		}

		th {
			background: var(--v-primary-base);
			color: #fff;
			font-weight: bold;
		}

		td,
		th {
			padding: 6px;
			border: 1px solid #e6e6e6;
			text-align: left;
		}

		.nuxt-content-highlight {
			margin: $spacer-1-2 0;
		}

		@media (min-width: md) {
			border-right: 1px solid #e6e6e6;
		}

		@media (max-width: sm) {
			padding: 0;
			padding-bottom: $spacer-2;

			h1 {
				font-size: 1.5rem;
				font-weight: bold;
			}

			h2 {
				font-size: 1.25rem;
				font-weight: bold;
			}

			img {
				width: 100%;
				padding: 0;
			}

			table {
				table-layout: fixed;
				width: 100%;
				word-wrap: break-word;
			}
		}
	}

	.most-popular-wrapper {
		padding: 0;

		@media (max-width: $sm) {
			padding-top: $spacer-2;
			padding-left: $spacer-1;
			border-top: 1px solid #e6e6e6;
		}
	}

	@media (max-width: $sm) {
		padding: 0 !important;

		.section-header {
			margin-bottom: $spacer-1 !important;
		}
	}
}
</style>
