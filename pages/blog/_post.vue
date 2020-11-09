<template>
    <page-section>
        <page-section-header :title="article.title" tag="h1" />
        <i-container>
            <i-row class="_justify-content-space-between">
                <i-column xs="12" md="8">
                    <article>
                        <nuxt-content :document="article" />
                    </article>
                </i-column>
                <i-column xs="12" md="3">
                    <top-articles class="top-articles-wrapper" :articles="topArticles" />
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import { title, meta, DEFAULT_META } from '@/helpers/meta/index';
import { TopArticles } from '@/components/global/TopArticles';

export default {
    components: {
        TopArticles
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
                { name: 'twitter:data2', content: this.article.tags ? this.article.tags.toString() : '' }
            ],
            link: [
                { hid: 'canonical', rel: 'canonical', href: this.postUrl }
            ]
        };
    },
    async asyncData({ $content, params }) {
        const article = await $content('blog', params.post).fetch();
        const topArticles = await $content('blog')
            .where({ top: true })
            .fetch();

        console.log(topArticles);

        return { article, topArticles };
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
        }
    },
    computed: {
        getDescription () {
            const MAX_DESCRIPTION = 160;
            const description = this.jsonTreeToString(this.article.body.children)
            return description ? description.slice(0, MAX_DESCRIPTION) : '';
        },
        meta () {
            return meta({
                type: 'article',
                title: this.article.title,
                description: this.article.description || this.getDescription,
                url: this.postUrl,
                mainImage: this.article.image
            });
        },
        postUrl () {
            return `${DEFAULT_META.SITE_URL}${this.$route.fullPath}`;
        }
    }
}
</script>

<style lang="scss"></style>
