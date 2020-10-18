<template>
    <page-section id="partners-section">
        <i-container>
            <i-row>
                <i-column xs="12">
                    <VueSlickCarousel v-if="partners && partners.length" v-bind="settings">
                        <div v-for="(partner, idx) in partners" :key="partner.slug" class="partner-wrapper">
                            <a v-if="partner.link && partner.link.url" :href="partner.link.url" :target="partner.link.target || '_blank'" :title="partner.title" rel="nofollow">
                                <story-card :color="getColor(idx)" :title="partner.title" :subtitle="partner.subtitle" :image="partner.image " />
                            </a>
                            <story-card v-else :color="getColor(idx)" :title="partner.title" :subtitle="partner.subtitle" :image="partner.image " />
                        </div>
                    </VueSlickCarousel>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';
import StoryCard from '~/components/common/cards/StoryCard';

export default {
    name: 'Partners',

    mixins: [colorUtils],

    components: {
        StoryCard
    },
    props: {
        partners: { type: Array, default: () => {} }
    },
    data: () => ({
        settings: {
            slidesToShow: 4,
            rows: 4,
            arrows: true,
            dots: true,
            infinite: true,
            autoplay: false,
            autoplaySpeed: 3000,
            speed: 600,
            slidesToScroll: 3,
            swipeToSlide: true,
            pauseOnDotsHover: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        }
    }),
    beforeDestroy () {
        this.settings = null;
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#partners-section {
    background-color: white;
    overflow: hidden;

    a {
        &:hover {
            text-decoration: none !important;
            opacity: .9 !important;

            .story-card {
                opacity: .9;

                h5 {
                    text-decoration: none !important;
                    outline: none !important;
                }
            }
        }
    }

    .story-card {
        min-height: 200px;
        max-height: 200px;
        margin-bottom: 1rem;
        padding: 1rem;

        img {
            height: 84px;
            width: auto;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            pointer-events: none;
        }

        @include breakpoint-down(xs) {
            h5 {
                font-size: 1rem;
            }
        }
    }

    .partner-wrapper {
        padding: 0 .5rem;
    }

    .slick-arrow {
        opacity: .55;

        &::before {
            background: transparent;
            color: #333;
        }

        &:hover {
            opacity: 1;
        }
    }
}
</style>
