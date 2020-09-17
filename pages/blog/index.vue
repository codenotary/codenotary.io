<template>
    <div>
        <page-section>
            <page-section-header title="Blog" tag="h1" />
            <i-container>
                <i-row>
                    <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}" :gutter="{default: '1rem', 700: '1rem'}">
                        <div v-for="article in articles" :key="article.slug" v-masonry-tile class="item" column-width="33px" >
                            <i-card class="blog-post">
                                <div class="image-wrapper">
                                    <img :src="article.image || `/images/blog-post.svg`" class="image -responsive" :alt="article.title" onerror="this.src='/images/blog-post.svg'">
                                </div>
                                <nuxt-link class="_overlay-link" :to="{ name: 'blog-post', params: { post: article.slug } }">
                                    <div class="title">
                                        {{ article.title }}
                                    </div>
                                </nuxt-link>
                                <div class="date">
                                    {{ article.date }}
                                </div>
                            </i-card>
                        </div>
                    </masonry>
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
            .only(['title', 'date', 'image', 'slug'])
            .sortBy('date', 'desc')
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
    margin-bottom: 1rem;

    .image-wrapper {
        width: 100%;
        text-align: center;

        .image {
            object-fit: cover;
            max-height: 80px;
            margin-bottom: 1rem;
            text-align: center;
            background-position: center center;
        }
    }

    .date {
        font-size: 80%;
        color: $text-muted;
    }
}
</style>
