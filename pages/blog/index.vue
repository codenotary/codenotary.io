<template>
    <div>
        <page-section>
            <page-section-header title="Blog" tag="h1" />
            <i-container>
                <i-row>
                    <i-column v-for="article of articles" :key="article.slug" md="4">
                        <i-card class="blog-post">
                            <img :src="article.image || `/images/blog-post.svg`" class="image -responsive" :alt="article.title">
                            <nuxt-link class="_overlay-link" :to="{ name: 'blog-post', params: { post: article.slug } }">
                                <div class="title">
                                    {{ article.title }}
                                </div>
                            </nuxt-link>
                            <div class="date">
                                {{ article.date }}
                            </div>
                        </i-card>
                    </i-column>
                </i-row>
            </i-container>
        </page-section>
    </div>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
    head() {
        return {
            title: title('Blog')
        };
    },
    async asyncData ({ $content }) {
        const articles = await $content('blog')
            .only(['title', 'date', 'img', 'slug'])
            .sortBy('createdAt', 'asc')
            .fetch();

        return {
            articles
        };
    }
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config';

.blog-post {
    margin-bottom: 2rem;

    .image {
        margin-bottom: 1rem;
    }

    .date {
        font-size: 80%;
        color: $text-muted;
    }
}
</style>
