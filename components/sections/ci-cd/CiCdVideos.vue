<template>
    <page-section id="ci-cd-videos-section">
        <i-container>
            <VueSlickCarousel v-bind="settings" @beforeChange="page = $event">
                <div>
                    <i-row middle class="_padding-1">
                        <i-column xs="12" sm="12" md="4">
                            <h4 class="title _text-primary"><strong>immudb is a lightweight, high-speed immutable database for systems and applications.</strong></h4>
                            <p style="font-weight: 300">With immudb you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a the tamperproof immudb database. This allows you to keep an indelible history of, say, your debit/credit transactions.</p>
                        </i-column>
                        <i-column xs="12" sm="12" md="8">
                            <div v-if="page === 2" class="_embed _embed-16by9">
                                <iframe width="504" height="284" src="https://www.youtube.com/embed/rQ4iZAM14m0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            </div>
                            <div v-else class="_embed _embed-16by9 video-placeholder" />
                        </i-column>
                    </i-row>
                </div>
                <div>
                    <i-row middle class="_padding-1">
                        <i-column xs="12" sm="12" md="4">
                            <h4 class="title _text-primary"><strong>immudb is a lightweight, high-speed immutable database for systems and applications.</strong></h4>
                            <p style="font-weight: 300">With immudb you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a the tamperproof immudb database. This allows you to keep an indelible history of, say, your debit/credit transactions.</p>
                        </i-column>
                        <i-column xs="12" sm="12" md="8">
                            <div v-if="page === 0" class="_embed _embed-16by9">
                                <iframe width="504" height="284" src="https://www.youtube.com/embed/lCxfijPEY5M" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
                            </div>
                            <div v-else class="_embed _embed-16by9 video-placeholder" />
                        </i-column>
                    </i-row>
                </div>
                <div>
                    <i-row middle class="_padding-1">
                        <i-column xs="12" sm="12" md="4">
                            <h4 class="title _text-primary"><strong>immudb is a lightweight, high-speed immutable database for systems and applications</strong>.</h4>
                            <p style="font-weight: 300">With immudb you can track changes in sensitive data in your transactional databases and then record those changes indelibly in a the tamperproof immudb database. This allows you to keep an indelible history of, say, your debit/credit transactions.</p>
                        </i-column>
                        <i-column xs="12" sm="12" md="8">
                            <div v-if="page === 1" class="_embed _embed-16by9">
                                <iframe width="504" height="284" src="https://www.youtube.com/embed/EPbYwTd-M3A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            </div>
                            <div v-else class="_embed _embed-16by9 video-placeholder" />
                        </i-column>
                    </i-row>
                </div>
            </VueSlickCarousel>
        </i-container>
    </page-section>
</template>

<script>
export default {
    name: 'CiCdVideos',
    data: () => ({
        page: 2,
        timeout: null,
        settings: {
            arrows: true,
            dots: true,
            lazyLoad: 'progressive'
        }
    }),
    beforeDestroy () {
        this.page = null;
        this.timeout = null;
        this.settings = null;
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ci-cd-videos-section {
    background-color: white;
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
            text-align: center;

            h4 {
                font-weight: bold;
            }

            p {
                font-weight: 300;
            }
        }
    }

    .video-placeholder {
        // background-color: #000;
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
