<template>
    <div>
        <ci-cd-header />
        <ci-cd-codenotary-integrations />
        <ci-cd-features />
        <ci-cd-how-it-works />
        <ci-cd-get-started />
        <ci-cd-analyze-and-manage />
        <ci-cd-videos />
    </div>
</template>

<script>
import CiCdHeader from '~/components/sections/headers/CiCdHeader';
import CiCdCodenotaryIntegrations from '~/components/sections/ci-cd/CiCdCodenotaryIntegrations';
import CiCdFeatures from '~/components/sections/ci-cd/CiCdFeatures';
import CiCdHowItWorks from '~/components/sections/ci-cd/CiCdHowItWorks';
import CiCdGetStarted from '~/components/sections/ci-cd/CiCdGetStarted';
import CiCdAnalyzeAndManage from '~/components/sections/ci-cd/CiCdAnalyzeAndManage';
import CiCdVideos from '~/components/sections/ci-cd/CiCdVideos';

export default {
    components: {
        CiCdHeader,
        CiCdCodenotaryIntegrations,
        CiCdFeatures,
        CiCdHowItWorks,
        CiCdGetStarted,
        CiCdAnalyzeAndManage,
        CiCdVideos
    }
}
</script>

<style lang="scss"></style>
