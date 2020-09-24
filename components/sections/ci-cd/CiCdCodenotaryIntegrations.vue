<template>
    <page-section id="codenotary-integrations-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="CodeNotary Integrations">
                        <p class="lead">CodeNotary integrates easily the most popular CI, CI/CD and DevOps tools, and you can add new ones in a flash with our API and command line tools.</p>
                    </page-section-header>
                </i-column>
            </i-row>
            <i-row>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="immudb" subtitle="high-speed immutable database" variant="dark" image="/images/immudb/mascot.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Docker" subtitle="Docker container protection" variant="info" image="/images/integrations/white/docker.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Kubernetes" subtitle="Kube-notary for Kubernetes" variant="blue" image="/images/integrations/white/kubernetes.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Javascript" subtitle="JSVCN library for the web" variant="warning" image="/images/integrations/white/javascript.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Java" subtitle="JVCN library for Java" variant="red" image="/images/integrations/white/java.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Maven" subtitle="Java Maven package" variant="pink" image="/images/integrations/white/maven.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Jenkins" subtitle="Jenkins CI" variant="red" image="/images/integrations/white/jenkins.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Powershell" subtitle="Windows command line" variant="teal" image="/images/integrations/white/powershell.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Github" subtitle="Github Actions" variant="dark" image="/images/integrations/white/github.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Gitlab" subtitle="Gitlab CI/CD" variant="purple" image="/images/integrations/white/gitlab.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Git" subtitle="Standalone" variant="orange" image="/images/integrations/white/git.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Travis" subtitle="Travis CI" variant="success" image="/images/integrations/white/travis.png" />
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import StoryCard from '~/components/common/cards/StoryCard';

export default {
    name: 'CiCdCodenotaryIntegrations',
    components: {
        StoryCard
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#codenotary-integrations-section {
    background-color: $color-gray-10;
    overflow: hidden;

    .story-card {
        min-height: 200px;
        max-height: 200px;
        margin-bottom: 2rem;
        padding: 1rem;

        img {
            height: 64px;
        }

        @include breakpoint-down(xs) {
            h5 {
                font-size: 1rem;
            }
        }
    }
}
</style>
