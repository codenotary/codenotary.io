<template>
    <div>
        <lc-header />
        <lc-features />
        <lc-integrations :integrations="integrations" />
        <lc-infrastructure />
        <lc-testimonials />
    </div>
</template>

<script>
import { title } from '~/helpers/meta';
import LcHeader from '~/components/sections/headers/LcHeader';
import LcFeatures from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcFeatures';
import LcIntegrations from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcIntegrations';
import LcInfrastructure from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcInfrastructure';
import LcTestimonials from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcTestimonials';

export default {
    layout: 'banner',

    head() {
        return {
            title: title('Ledger Compliance for Ops')
        };
    },

    components: {
        LcHeader,
        LcFeatures,
        LcIntegrations,
        LcInfrastructure,
        LcTestimonials
    },

    async asyncData ({ $content }) {
        const integrations = await $content('products/integration')
            .only(['title', 'date', 'image', 'slug', 'tags'])
            .sortBy('date', 'desc')
            .fetch();

        return { integrations };
    }
}
</script>

<style lang="scss"></style>
