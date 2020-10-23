<template>
    <page-section id="customer-success-stories-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Customer Use Cases">
                        With CodeNotary Ledger Compliance&reg; you can easily build immutable,
                        tamper-proof solutions and comply with auditor requirements and regulations and laws.
                    </page-section-header>
                </i-column>
            </i-row>
            <i-row>
                <i-column md="6" lg="4">
                    <story-card title="IT Compliance" :color="getColor(5)" image="/images/use-cases/it-compliance.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Finance" :color="getColor(6)" image="/images/use-cases/finance.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Healthcare" :color="getColor(1)" image="/images/use-cases/healthcare.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Government" :color="getColor(3)" image="/images/use-cases/government.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="CI / CD Integrity" :color="getColor(0)" image="/images/use-cases/cicd.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Regulatory Compliance" :color="getColor(8)" image="/images/use-cases/regulations.svg" />
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import colorUtils from '~/mixins/colorUtils';
import StoryCard from '~/components/common/cards/StoryCard';

export default {
    mixins: [colorUtils],

    components: {
        StoryCard
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#customer-success-stories-section {
    background-color: white;
    overflow: hidden;

    .story-card {
        margin-bottom: 2rem;
    }
}
</style>
