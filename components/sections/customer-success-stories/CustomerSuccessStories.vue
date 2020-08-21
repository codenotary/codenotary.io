<template>
    <page-section id="customer-success-stories-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Customer Success Stories">
                        With CodeNotary Ledger Compliance&reg; you can easily build immutable,
                        tamper-proof solutions and comply with requirements of your auditors' regulations and laws.
                    </page-section-header>
                </i-column>
            </i-row>
            <i-row>
                <i-column md="6" lg="4">
                    <story-card title="IT Compliance" variant="blue" image="/images/use-cases/it-compliance.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Finance" variant="green" image="/images/use-cases/finance.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Healthcare" variant="red" image="/images/use-cases/healthcare.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Government" variant="purple" image="/images/use-cases/government.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="CI / CD Integrity" variant="gray-70" image="/images/use-cases/cicd.svg" />
                </i-column>
                <i-column md="6" lg="4">
                    <story-card title="Regulatory Compliance" variant="orange" image="/images/use-cases/regulations.svg" />
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import StoryCard from '~/components/common/cards/StoryCard';
import PageSection from '~/components/layout/PageSection';
import PageSectionHeader from '~/components/layout/PageSectionHeader';

export default {
    components: {
        StoryCard,
        PageSection,
        PageSectionHeader
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
