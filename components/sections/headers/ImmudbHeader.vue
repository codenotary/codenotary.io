<template>
    <i-header id="immudb-header">
        <research-paper-modal v-model="researchPaperModalVisible" />

        <img src="/images/immudb/mascot.png" alt="immudb mascot">

        <h1 class="d6 _text-primary">immudb</h1>

        <div id="github-button">
            <github-button href="https://github.com/codenotary/immudb"
                           data-icon="octicon-star" data-size="large" data-show-count="true"
                           aria-label="Star codenotary/immudb on GitHub">
                Star
            </github-button>
        </div>

        <p class="description lead">
            immudb - the lightweight, high-speed immutable database for systems and applications. Open Source and easy to integrate into any existing application.
        </p>

        <p class="action">
            <i-button size="lg" variant="primary" href="https://docs.immudb.io">Get immudb now</i-button>
        </p>

        <i-nav class="header-nav">
            <i-button id="research-paper-button underline" link variant="primary" @click="researchPaperModalVisible = true">
                <span>Research Paper</span>
            </i-button>
            <i-nav-item class="dot _hidden-sm-and-down">&middot;</i-nav-item>
            <i-nav-item class="underline" :to="{ name: 'technologies-immudb-immutable-data-science' }">Immutable Data Science</i-nav-item>
            <i-nav-item class="dot _hidden-sm-and-down">&middot;</i-nav-item>
            <i-nav-item class="underline" href="https://github.com/codenotary/immudb">GitHub</i-nav-item>
        </i-nav>

        <p class="_margin-top-3">
            <i-button id="research-paper-button" class="underline" link variant="primary" @click="openCodingChallenge()">
                <!-- <i-badge size="sm" variant="success" class="_margin-right-1-2">New</i-badge> -->
                <i-badge size="sm" variant="danger" class="_margin-right-1-2">
                    <fa icon="fire" style="margin-right: .15rem" />
                    Hot
                </i-badge>
                <span>immudb Coding Challenge</span>
            </i-button>
        </p>
    </i-header>
</template>

<script>
import GithubButton from 'vue-github-button';
import ResearchPaperModal from '~/components/common/modals/ResearchPaperModal';

export default {
    name: 'ImmudbHeader',

    components: {
        ResearchPaperModal,
        GithubButton
    },

    data() {
        return {
            researchPaperModalVisible: false
        };
    },

    methods: {
        openCodingChallenge () {
            const data = 'https://github.com/codenotary/immuchallenge';
            data && window.open(data, '_blank');
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#immudb-header {
    background-color: white;
    background-image: url('/images/immudb/header.jpg');
    text-align: center;

    img {
        height: 280px;
        width: auto;
        display: block;
        margin: 3rem auto 1.5rem;
    }

    h1 {
        font-weight: bold;
    }

    .description {
        margin: 2rem auto;
        max-width: 35rem;
    }

    .header-nav {
        justify-content: center;

        .underline {
            text-decoration: underline;
        }

        .dot {
            color: $text-muted;
        }

        @include breakpoint-up(sm) {
            margin-left: -62px;
        }
    }
}
</style>
