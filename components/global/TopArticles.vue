<template>
    <section class="top-articles">
        <i-row class="_margin-bottom-1">
            <i-column xs="12">
                <h3 class="_margin-0 _font-weight-bold">Top articles</h3>
            </i-column>
        </i-row>
        <i-row>
            <i-column xs="12" v-for="article in articles" :key="article.slug">
                <nuxt-link :to="{ name: 'blog-post', params: { post: article.slug } }">
                    - {{ article.title }}
                </nuxt-link>
            </i-column>
        </i-row>
    </section>
</template>

<script>
export default {
    name: 'TopArticles',
    props: {
        articles: { type: Array, default: () => [] }
    }
}
</script>
