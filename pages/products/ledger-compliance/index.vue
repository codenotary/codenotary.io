<template>
    <div>
        <LCHeader />
        <features-section />
        <ledger-compliance />
    </div>
</template>

<script>
import { title } from '~/helpers/meta';
import LCHeader from '~/components/sections/headers/LCHeader';
import FeaturesSection from '~/components/sections/features/FeaturesSection';
import LedgerCompliance from '~/components/sections/products/LedgerCompliance';

export default {
    head() {
        return {
            title: title('Ledger Compliance')
        };
    },

    components: {
        LCHeader,
        FeaturesSection,
        LedgerCompliance
    }
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/config/colors";

#codenotary-ledger-compliance-section {
    background-color: $color-gray-20;
}

#tree-image {
    margin-top: 6rem;
    margin-bottom: -6rem;
    height: 25rem;
    width: auto;
}
</style>
