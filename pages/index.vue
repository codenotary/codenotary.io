<template>
    <div>
        <home-header />
        <features-section />
        <customer-success-stories />
        <ledger-compliance tree />
    </div>
</template>

<script>
import HomeHeader from '~/components/sections/headers/HomeHeader';
import FeaturesSection from '~/components/sections/homepage/FeaturesSection';
import CustomerSuccessStories from '~/components/sections/homepage/CustomerSuccessStories';
import LedgerCompliance from '~/components/sections/products/LedgerCompliance';

export default {
    layout: 'banner',

    components: {
        HomeHeader,
        FeaturesSection,
        CustomerSuccessStories,
        LedgerCompliance
    }
}
</script>

<style lang="scss"></style>
