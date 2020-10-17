<template>
    <page-section id="integrations-section">
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
                    <story-card title="immudb" subtitle="high-speed immutable database" :color="getColor(0)" image="/images/immudb/mascot.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Docker" subtitle="Docker container protection" :color="getColor(1)" image="/images/integrations/white/docker.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Kubernetes" subtitle="Kube-notary for Kubernetes" :color="getColor(2)" image="/images/integrations/white/kubernetes.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Javascript" subtitle="JSVCN library for the web" :color="getColor(3)" image="/images/integrations/white/javascript.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Java" subtitle="JVCN library for Java" :color="getColor(4)" image="/images/integrations/white/java.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Maven" subtitle="Java Maven package" :color="getColor(5)" image="/images/integrations/white/maven.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Jenkins" subtitle="Jenkins CI" :color="getColor(6)" image="/images/integrations/white/jenkins.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Powershell" subtitle="Windows command line" :color="getColor(7)" image="/images/integrations/white/powershell.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Github" subtitle="Github Actions" :color="getColor(8)" image="/images/integrations/white/github.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Gitlab" subtitle="Gitlab CI/CD" :color="getColor(9)" image="/images/integrations/white/gitlab.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Git" subtitle="Standalone" :color="getColor(10)" image="/images/integrations/white/git.png" />
                </i-column>
                <i-column xs="6" sm="4" md="3" lg="3">
                    <story-card title="Travis" subtitle="Travis CI" :color="getColor(11)" image="/images/integrations/white/travis.png" />
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';
import StoryCard from '~/components/common/cards/StoryCard';

export default {
    name: 'CiCdIntegrations',

    mixins: [colorUtils],

    components: {
        StoryCard
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#integrations-section {
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
