<template>
    <div class="ledger-compliance-pricing-tables">
        <div class="header">
            <h5>
                Get CodeNotary Ledger Compliance&reg; up and running in no time
            </h5>
        </div>
        <PricingTablesWrapper>
            <PricingTable title="Demo Container">
                <PricingTableRow>10GB storage</PricingTableRow>
                <PricingTableRow>100,000 transactions per second</PricingTableRow>
                <PricingTableRow>1 database</PricingTableRow>
                <template slot="price">
                    <strong class="price">FREE</strong>
                </template>
            </PricingTable>
            <PricingTable title="Virtual Appliance" subtitle="Or direct install">
                <PricingTableRow>No storage limit</PricingTableRow>
                <PricingTableRow>No transactions limit</PricingTableRow>
                <PricingTableRow>5 databases</PricingTableRow>
                <template slot="price">
                    <small>Starting at</small>
                    <strong class="price">1200</strong>
                    <sup>$</sup><small>/month</small>
                </template>
            </PricingTable>
            <PricingTable title="Hardware Appliance">
                <PricingTableRow>No storage limit</PricingTableRow>
                <PricingTableRow>No transactions limit</PricingTableRow>
                <PricingTableRow>Unlimited databases</PricingTableRow>
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
                <PricingTable title="All products include">
                    <PricingTableRow>Transactional integrity</PricingTableRow>
                    <PricingTableRow>ACID compliance</PricingTableRow>
                    <PricingTableRow>Encryption</PricingTableRow>
                    <PricingTableRow>Python SDK</PricingTableRow>
                    <PricingTableRow>Node.js SDK</PricingTableRow>
                    <PricingTableRow>Java SDK</PricingTableRow>
                    <PricingTableRow>Go SDK</PricingTableRow>
                </PricingTable>
            </PricingTablesWrapper>
        </div>
    </div>
</template>

<script>
import PricingTable from '~/components/common/pricing-table/PricingTable';
import PricingTableRow from '~/components/common/pricing-table/PricingTableRow';
import PricingTablesWrapper from '~/components/common/pricing-table/PricingTablesWrapper';

export default {
    name: 'CodeNotaryLedgerCompliancePricing',
    components: {
        PricingTable,
        PricingTableRow,
        PricingTablesWrapper
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
