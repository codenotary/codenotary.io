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
import LcFeatures from '~/components/sections/products/lc-for-ops/LcFeatures';
import LcIntegrations from '~/components/sections/products/lc-for-ops/LcIntegrations';
import LcInfrastructure from '~/components/sections/products/lc-for-ops/LcInfrastructure';
import LcTestimonials from '~/components/sections/products/lc-for-ops/LcTestimonials';

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
