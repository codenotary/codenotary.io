<template>
    <page-section>
        <page-section-header :title="article.title" tag="h1" />
        <i-container>
            <i-row class="_display-flex _flex-direction-column">
                <i-column xs="12">
                    <article>
                        <nuxt-content :document="article" />
                    </article>
                </i-column>
                <i-column v-if="article.apply" xs="12" class="_margin-top-4 _display-flex _justify-content-center _align-content-center">
                    <i-column xs="12" sm="10" md="8" lg="6">
                        <i-button variant="primary" large block @click="apply(article.apply)">
                            APPLY
                        </i-button>
                    </i-column>
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
            title: title(this.article.title)
        };
    },

    async asyncData({ $content, params }) {
        const article = await $content('careers', params.post).fetch();

        return { article };
    },

    methods: {
        apply (data) {
            data && window.open(data, '_blank');
        }
    }
}
</script>

<style lang="scss"></style>
