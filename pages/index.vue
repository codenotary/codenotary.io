<template>
    <div>
        <HomeHeader/>
        <FeaturesSection/>
        <IntegrationsSection/>
    </div>
</template>

<script>
import HomeHeader from '~/components/headers/HomeHeader';
import FeaturesSection from '~/components/sections/features/FeaturesSection';
import IntegrationsSection from '~/components/sections/integrations/IntegrationsSection';

export default {
    components: {
        IntegrationsSection,
        HomeHeader,
        FeaturesSection
    }
}
</script>

<style lang="scss"></style>
