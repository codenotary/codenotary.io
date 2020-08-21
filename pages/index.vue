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
import CustomerSuccessStories from '~/components/sections/customer-success-stories/CustomerSuccessStories';
import CodeNotaryLedgerCompliance from '~/components/sections/products/CodeNotaryLedgerCompliance';

export default {
    components: {
        CodeNotaryLedgerCompliance,
        HomeHeader,
        FeaturesSection,
        CustomerSuccessStories
    }
}
</script>

<style lang="scss"></style>
