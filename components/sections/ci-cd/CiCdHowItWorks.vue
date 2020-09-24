<template>
    <page-section id="codenotary-how-it-works-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="How it works" />
                </i-column>
            </i-row>
            <i-row>
                <i-column>
                    <VueSlickCarousel v-bind="settings">
                        <div>
                            <i-card>
                                <h5 class="title _text-primary"><strong>1. Sign up</strong></h5>
                                <p>Start your journey to a safer web and a digital world where every digital asset can be authenticated, has a globally meaningful identity and a transparent trust level.</p>
                                <p><a href="https://dashboard.codenotary.io/auth/signup" target="_blank" rel="noopener"><strong>https://dashboard.codenotary.io</strong></a></p>
                            </i-card>
                        </div>
                        <div>
                            <i-card>
                                <h5 class="title _text-primary"><strong>2. Create a unique identity</strong></h5>
                                <p>No matter if its an user of your software or a reader of one of your documents.</p>
                                <p>Start sharing your identity within the authenticate process.</p>
                            </i-card>
                        </div>
                        <div>
                            <i-card>
                                <h5 class="title _text-primary"><strong>3. Notarize your digital asset</strong></h5>
                                <p>Use our modern dashboard to individually notarize and manage all of your notarized digital assets.</p>
                                <p>We at CodeNotary did everything to enable a highly secure (Blockchain-strong) service that timestamps an unique digital asset identity together with your unique identity (notarization).</p>
                                <p><strong>Your file is never uploaded!</strong></p>
                            </i-card>
                        </div>
                        <div>
                            <i-card>
                                <h5 class="title _text-primary"><strong>4. Authenticate</strong></h5>
                                <p>Authenticate (no install).</p>
                                <p>The moment a digital asset like a document or a docker image has been notarized. Everyone from anywhere in the world can authenticate that asset without uploading the file itself. <a href="https://authenticate.codenotary.io" target="_blank" rel="noopener">https://authenticate.codenotary.io</a></p>
                                <p>You can use our command line interface as well. Just think about only starting software or container that are trusted by you (notarized).</p>
                            </i-card>
                        </div>
                    </VueSlickCarousel>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
export default {
    name: 'CiCdHowItWorks',
    data: () => ({
        settings: {
            slidesPerRow: 2,
            arrows: true,
            dots: true,
            centerMode: true,
            focusOnSelect: true,
            lazyLoad: 'progressive'
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

#codenotary-how-it-works-section {
    background-color: $color-gray-10;
    overflow: hidden;

    .card {
        margin-bottom: 2rem;
        background: transparent;

        img {
            height: 96px;
            object-fit: contain;
        }

        .body {
            border: none;
            text-align: left;

            h4 {
                font-weight: bold;
            }

            p {
                font-weight: 300;
            }
        }
    }

    .VueCarousel-pagination {
        button.VueCarousel-dot {
            outline: none !important;

            &.VueCarousel-dot--active {
                background-color: #5FB072 !important;
            }
        }
    }
}
</style>
