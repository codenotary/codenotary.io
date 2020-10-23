<template>
    <article class="immudb">
        <immudb-header />
        <immudb-features-section />
        <immudb-runs-on-section />
        <nuxt-content :document="page" />
    </article>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import ImmudbHeader from '~/components/sections/headers/ImmudbHeader';
import ImmudbFeaturesSection from '~/components/sections/features/ImmudbFeaturesSection';
import ImmudbRunsOnSection from '~/components/sections/immudb/ImmudbRunsOnSection';
import { title } from '~/helpers/meta';

export default {
    head() {
        return {
            title: title('immudb')
        };
    },
    components: {
        ImmudbFeaturesSection,
        ImmudbHeader,
        ImmudbRunsOnSection
    },
    async asyncData ({ $content }) {
        const page = await $content('technologies/immudb/index').fetch();

        return {
            page
        };
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.immudb {
    #easy-setup-section {
        margin-top: -2rem;
        text-align: center;

        .container {
            max-width: 980px;
        }

        pre.language-bash {
            width: auto;
            display: inline-block;
            max-width: 100%;
        }
    }

    #performance-section {
        background: $color-gray-10;

        img {
            margin: 1rem auto 0;
        }
    }

    #qldb-comparison-section {
        padding-top: 5rem;

        .fa-bolt {
            color: $color-primary;
            font-size: 64px;
            margin-bottom: 2rem;
        }
    }

    #video-section {
        color: white;
        background-color: $color-primary;
        text-align: center;
        background-image: url('/images/immudb/corner-left-right-asymmetric-gray.png');
        background-size: 100% auto;
        background-repeat: no-repeat;
        background-position: top center;

        h2 {
            margin-top: 0;
            border-bottom: 0;
            color: white;
        }

        p {
            color: rgba(white, 0.8);
        }

        .video-features {
            display: flex;
            width: 100%;
            margin-top: 4rem;

            ul {
                width: 33%;
                text-align: left;
                margin-left: 2rem;

                li {
                    display: flex;
                    align-items: center;
                    margin-bottom: 0.5rem;
                }

                svg {
                    margin-right: 1rem;
                }
            }

            .video {
                padding: 1rem;
                background: white;
                display: block;
                width: 67%;
                box-sizing: border-box;
            }

            @media screen and (max-width: 979px) {
                flex-direction: column;

                ul,
                .video {
                    width: 100%;
                    margin-left: 0;
                }

                ul {
                    margin-top: 2rem;
                }
            }
        }
    }

    #code-examples-section {
        svg {
            width: 3rem;
            height: 3rem;
            color: $color-primary;
        }

        img {
            width: 4rem;
        }

        h2 {
            margin-top: 1rem;
        }

        .row {
            align-items: center;
            margin-bottom: 5rem;

            &:last-child {
                margin-bottom: 0;
            }
        }

        @media screen and (max-width: 979px) {
            text-align: center;

            .inverse {
                flex-direction: column-reverse;
            }

            p, ul {
                text-align: left;
            }

            .terminal-wrapper {
                margin-bottom: 1rem;
            }
        }
    }

    #comingsoon-section {
        text-align: center;

        img {
            display: block;
            margin: 0 auto;
        }

        ul {
            display: inline-block;
            font-weight: bold;

            li._text-muted {
                @media screen and (max-width: 767px) {
                    display: none;
                }
            }
        }
    }

    #usedby-section {
        padding-top: 4rem;
        padding-bottom: 2rem;
        justify-content: space-between;
        text-align: center;

        .column {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            a {
                margin: 1rem;
            }
        }

        img {
            display: block;
            height: 80px !important;
            max-width: 140px !important;
            width: auto;
            margin: 0 .75rem 2rem;
            opacity: .5;
            transition: opacity .3s ease;
            object-fit: contain;

            &:hover {
                opacity: .95;
            }
        }
    }

    #code-tabs-section {
        background: $color-gray-10;

        .tabs {
            display: flex;
            flex-direction: row;

            .header {
                width: 25%;
                margin-right: 1rem;
                flex: 1;

                .button-group {
                    display: flex;
                    flex-direction: column;
                    border-radius: 4px;
                    overflow: hidden;

                    .button {
                        border-radius: 0;
                    }
                }
            }

            .tab {
                width: 75%;
            }

            @include breakpoint-down(md) {
                flex-direction: column;

                .header {
                    width: 100%;
                }

                .tab {
                    width: 100%;
                }
            }
        }
    }

    #get-started-end-section {
        text-align: center;
    }
}
</style>
