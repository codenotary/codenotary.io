<template>
    <div>
        <LCMetricsAndLogsHeader />
        <lc-features />
        <lc-integrations :integrations="integrations" />
        <lc-infrastructure />
        <lc-testimonials />
    </div>
</template>

<script>
import { title } from '~/helpers/meta';
import LCMetricsAndLogsHeader from '~/components/sections/headers/LCMetricsAndLogsHeader';
import LcFeatures from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcFeatures';
import LcIntegrations from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcIntegrations';
import LcInfrastructure from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcInfrastructure';
import LcTestimonials from '~/components/sections/products/ledger-compliance-metrics-and-logs/LcTestimonials';

export default {
    layout: 'banner',

    head() {
        return {
            title: title('Ledger Compliance Metrics and Logs')
        };
    },

    components: {
        LCMetricsAndLogsHeader,
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
