<template>
    <page-section>
        <page-section-header :title="'Terms of Service'" tag="h1" />

        <tos-sub-navbar v-if="!isIndex" />

        <i-container>
            <i-row>
                <i-column v-if="isIndex && articles">
                    <ul class="list -unstyled">
                        <li v-for="article in articles" :key="article.slug" class="_margin-top-1 _text-center">
                            <nuxt-link :to="{ name: 'terms-of-service-slug', params: { slug: article.slug } }">
                                {{ article.title }}
                            </nuxt-link>
                        </li>
                    </ul>
                </i-column>
                <i-column v-else>
                    <article>
                        <nuxt-content :document="article" />
                    </article>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
    head() {
        return {
            title: title(this.isIndex ? 'Terms of Service' : `Terms of Service - ${this.article.title}`)
        };
    },
    computed: {
        isIndex() {
            return this.$route.path === '/terms-of-service';
        }
    }
}
</script>
