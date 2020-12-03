<template>
    <page-section id="open-positions-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Open positions" />
                </i-column>
            </i-row>
            <i-row>
                <no-ssr>
                    <masonry class="_width-100" :cols="{default: 3, 1000: 2, 700: 1, 400: 1}" :gutter="{default: '1rem', 700: '1rem'}">
                        <div v-for="article in sortedOpenPositions" :key="article.slug" class="item" column-width="33px">
                            <i-card v-if="article.active" class="career-post">
                                <div>
                                    <nuxt-link :to="{ name: 'careers-post', params: { post: article.slug } }">
                                        <div class="_overlay-link title _margin-bottom-1 _text-weight-bold">
                                            {{ article.title | truncate(64) }}
                                        </div>
                                    </nuxt-link>
                                    <div v-if="article.location" class="location _margin-bottom-1">
                                        <fa icon="globe" style="margin-right: .5rem" />
                                        {{ article.location }}
                                    </div>
                                    <div v-if="article.type" class="type _margin-bottom-1">
                                        <fa icon="award" style="margin-right: .5rem" />
                                        {{ article.type }}
                                    </div>
                                    <div v-if="article.requires" class="requires lead _margin-bottom-1">
                                        {{ article.requires }}
                                    </div>
                                </div>
                                <div>
                                    <i-button variant="primary" large block>
                                        More info
                                    </i-button>
                                </div>
                            </i-card>
                        </div>
                    </masonry>
                </no-ssr>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
    name: 'LcIntegrations',

    components: {
        'no-ssr': NoSSR
    },

    props: {
        openPositions: { type: Array, default: () => {} }
    },

    computed: {
        sortedOpenPositions () {
            if (this.openPositions && this.openPositions.length) {
                return this.openPositions
                    .slice()
                    .sort((a, b) => a.weight <= b.weight ? -1 : 1)
            }
            return [];
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#open-positions-section {
    background-color: white;
    overflow: hidden;

    .career-post {
        margin-bottom: 1rem;
        height: 272px;

        > .body {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .location,
        .type,
        .requires {
            font-size: 80%;
            color: $text-muted;
            text-decoration: none !important;
            outline: none !important;
        }

        &:hover,
        &:active {
            * {
                text-decoration: none !important;
                outline: none !important;
            }
        }
    }
}
</style>
