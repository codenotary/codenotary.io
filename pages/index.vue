<template>
    <div>
        <Header/>
        <FeaturesSection/>
        <IntegrationsSection/>
    </div>
</template>

<script>

import Header from '../components/Header';
import FeaturesSection from '../components/FeaturesSection';
import IntegrationsSection from '../components/IntegrationsSection';

export default {
    components: {
        IntegrationsSection,
        Header,
        FeaturesSection
    }
}
</script>

<style lang="scss">

</style>
