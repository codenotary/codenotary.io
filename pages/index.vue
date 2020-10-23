<template>
    <div>
        <home-header />
        <features-section />
        <customer-success-stories />
        <code-notary-ledger-compliance />
    </div>
</template>

<script>
import HomeHeader from '~/components/sections/headers/HomeHeader';
import FeaturesSection from '~/components/sections/features/FeaturesSection';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';
import CodeNotaryLedgerCompliance from '~/components/sections/products/LedgerCompliance';

export default {
    layout: 'banner',

    components: {
        CodeNotaryLedgerCompliance,
        HomeHeader,
        FeaturesSection,
        CustomerSuccessStories
    }
}
</script>

<style lang="scss"></style>
