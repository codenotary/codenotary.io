<template>
    <div class="ledger-compliance-pricing-tables">
        <div class="header">
            <h5>
                Get CodeNotary Ledger Compliance&reg; up and running in no time
            </h5>
        </div>
        <PricingTablesWrapper>
            <PricingTable title="Demo Container" subtitle="&nbsp;">
                <PricingTableRow>10GB storage</PricingTableRow>
                <PricingTableRow>100,000 transactions per second</PricingTableRow>
                <PricingTableRow>1 ledger</PricingTableRow>
                <template slot="price">
                    <strong class="price">FREE</strong>
                </template>
            </PricingTable>
            <PricingTable title="Virtual Appliance" subtitle="Or direct install">
                <PricingTableRow>No storage limit</PricingTableRow>
                <PricingTableRow>No transactions limit</PricingTableRow>
                <PricingTableRow>5 ledgers</PricingTableRow>
                <template slot="price">
                    <small>Starting at</small>
                    <strong class="price">1200</strong>
                    <sup>$</sup><small>/month</small>
                </template>
            </PricingTable>
            <PricingTable title="Hardware Appliance" subtitle="&nbsp;">
                <PricingTableRow>No storage limit</PricingTableRow>
                <PricingTableRow>No transactions limit</PricingTableRow>
                <PricingTableRow>Unlimited ledgers</PricingTableRow>
                <PricingTableRow>Cryptographic Hardware Accelerator</PricingTableRow>
                <PricingTableRow>Tamper-resistant smart card</PricingTableRow>
                <PricingTableRow>Blockchain-protected audit dumps</PricingTableRow>
                <PricingTableRow>Blockchain-protected backup/restore</PricingTableRow>
                <PricingTableRow>Managed service</PricingTableRow>
                <PricingTableRow>24/7 support</PricingTableRow>
                <template slot="price">
                    <i-button variant="primary" :to="{ name: 'contact' }">
                        Contact us for details
                    </i-button>
                </template>
            </PricingTable>
        </PricingTablesWrapper>
        <div>
            <PricingTablesWrapper>
                <PricingTable title="CodeNotary Ledger Compliance features">
                    <template slot="short-row">
                        <PricingTableRow v-for="(item, idx) in parsedFeatures" :key="idx" class="_margin-right-1" :fill="isMobile">
                            {{ item && item.label }}
                        </PricingTableRow>
                        <i-button link variant="secondary" @click="showMore = !showMore">show {{ showMore ? 'less...' : 'more...' }}</i-button>
                    </template>
                </PricingTable>
            </PricingTablesWrapper>
        </div>
    </div>
</template>

<script>
import PricingTable from '~/components/common/pricing-table/PricingTable';
import PricingTableRow from '~/components/common/pricing-table/PricingTableRow';
import PricingTablesWrapper from '~/components/common/pricing-table/PricingTablesWrapper';

const DESKTOP_LIMIT = 5;
const MOBILE_LIMIT = 3;

export default {
    name: 'LedgerCompliancePricing',
    components: {
        PricingTable,
        PricingTableRow,
        PricingTablesWrapper
    },
    data: () => ({
        isMobile: false,
        features: [
            { label: 'ACID' },
            { label: 'Sharding' },
            { label: 'Transactional integrity' },
            { label: 'Batch operations' },
            { label: 'Cryptographic verification' },
            { label: 'Inclusion detection' },
            { label: 'Encryption' },
            { label: 'SDKs (Python, Node.js, Java, Go)' },
            { label: 'Tamperproof backup/restore' },
            { label: 'Tamperproof dump' }
        ],
        limit: DESKTOP_LIMIT,
        showMore: false
    }),
    beforeDestroy () {
        this.isMobile = null;
        this.featues = null;
        this.limit = null;
        this.showMore = null;
    },
    mounted () {
        this.isMobile = this.$device.isMobile;
        this.isMobile && (this.limit = MOBILE_LIMIT);
    },
    computed: {
        parsedFeatures () {
            if (this.features && this.features.length) {
                return this.showMore ? this.features : this.features.slice(0, this.limit);
            }
            return [];
        }
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

.ledger-compliance-pricing-tables {
    .header {
        background: white;
        padding: 2rem 1rem;
        text-align: center;
        border: 1px solid #dee2e6;
        border-bottom: none;

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            margin: 0;
        }

        @include breakpoint-down(md) {
            margin-bottom: 1rem;
            border-bottom: 1px solid #dee2e6;
        }
    }
}
</style>
