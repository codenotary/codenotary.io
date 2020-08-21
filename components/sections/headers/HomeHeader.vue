<template>
    <i-header id="home-header" class="_text-center">
        <i-container>
            <i-row class="_align-items-center">
                <i-column class="_text-left" md="6">
                    <h1 class="h2 _font-weight-bold">
                        Immutable recording of data and processes with CodeNotary Ledger Compliance&reg;
                    </h1>
                    <p class="lead">
                        On-premise or in the cloud, easy to use tamperproof ledger with cryptographic verification,
                        processing millions of transactions a second.
                    </p>
                    <i-button variant="primary" size="lg" class="_margin-right-1">Read more</i-button>
                </i-column>
                <i-column id="video-column" md="6" :class="{ 'playing': playing }">
                    <div id="video" class="_embed _embed-16by9">
                        <youtube ref="youtube"
                                 class="_rounded"
                                 :video-id="videoId"
                                 @playing="onPlayVideo"
                                 @paused="onPauseVideo"
                                 @ended="onPauseVideo" />
                    </div>
                    <img id="mascot" src="/images/codenotary_mascot.png" alt="CodeNotary Mascot">
                </i-column>
            </i-row>
        </i-container>
    </i-header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            playing: false,
            videoId: 'EPbYwTd-M3A'
        }
    },
    computed: {
        player() {
            return this.$refs.youtube.player
        }
    },
    methods: {
        onPlayVideo() {
            this.playing = true;
        },
        onPauseVideo() {
            this.playing = false;
        }
    }
}
</script>

<style lang="scss">
$mascot-width: 175px;

#home-header {
    background-color: white;
    background-image: url('/images/headers/home.svg');
    background-repeat: no-repeat;
    /*background-attachment: fixed;*/
    /*background-size: 100% 100%;*/
    background-position: 0 bottom;
    background-size: cover;
    overflow: hidden;
    width: 100%;

    h1 {
        margin-top: 0;
    }
}

#video-column {
    position: relative;

    &.playing {
        #mascot {
            transform: translateX($mascot-width);
        }
    }
}

#mascot {
    width: $mascot-width;
    height: auto;
    position: absolute;
    right: 0;
    bottom: -1rem;
    transition: transform 0.5s ease;
}
</style>
