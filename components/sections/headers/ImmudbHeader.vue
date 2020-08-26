<template>
    <i-header id="immudb-header">
        <research-paper-modal v-model="researchPaperModalVisible" />

        <img src="/images/immudb/mascot.png" alt="immudb mascot">

        <h1 class="d6 _text-primary">immudb</h1>
        <p class="description lead">
            immudb - the lightweight, high-speed immutable database for systems and applications. Open Source and easy to integrate into any existing application.
        </p>

        <p class="action">
            <i-button size="lg" variant="primary">Get immudb now</i-button>
        </p>

        <i-nav class="header-nav">
            <i-nav-item href="https://docs.immudb.io">Documentation</i-nav-item>
            <i-nav-item class="dot _hidden-sm-and-down">&middot;</i-nav-item>
            <i-nav-item :to="{ name: 'technologies-immudb-immutable-data-science' }">Immutable Data Science</i-nav-item>
            <i-nav-item class="dot _hidden-sm-and-down">&middot;</i-nav-item>
            <i-nav-item href="https://github.com/codenotary/immudb">GitHub</i-nav-item>
        </i-nav>

        <p class="_margin-top-3">
            <i-button id="research-paper-button" link variant="primary" @click="researchPaperModalVisible = true">
                <i-badge size="sm" variant="success" class="_margin-right-1-2">New</i-badge>
                <span>Download Research Paper</span>
            </i-button>
        </p>

        <div id="github-button">
            <github-button href="https://github.com/codenotary/immudb"
                           data-icon="octicon-star" data-size="large" data-show-count="true"
                           aria-label="Star codenotary/immudb on GitHub">
                Star
            </github-button>
        </div>
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

        .dot {
            color: $text-muted;
        }
    }
}
</style>
