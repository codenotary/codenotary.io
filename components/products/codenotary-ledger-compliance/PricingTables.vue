<template>
    <PricingTablesWrapper>
        <PricingTable title="Demo Container">
            <PricingTableRow>10GB storage</PricingTableRow>
            <PricingTableRow>100000 transactions per second</PricingTableRow>
            <PricingTableRow>1 database</PricingTableRow>
        </PricingTable>
        <PricingTable title="Virtual Appliance">
            <PricingTableRow>No storage limit</PricingTableRow>
            <PricingTableRow>No transactions limit</PricingTableRow>
            <PricingTableRow>5 databases</PricingTableRow>
        </PricingTable>
        <PricingTable title="Hardware Appliance">
            <PricingTableRow>No storage limit</PricingTableRow>
            <PricingTableRow>No transactions limit</PricingTableRow>
            <PricingTableRow>Unlimited databases</PricingTableRow>
            <PricingTableRow>Hardware-based acceleration</PricingTableRow>
            <PricingTableRow>Managed service</PricingTableRow>
            <PricingTableRow>24/7 support</PricingTableRow>
        </PricingTable>
    </PricingTablesWrapper>
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
