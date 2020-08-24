<template>
    <page-section class="copyright">
        <i-container>
            <i-row>
                <i-column>
                    Copyright &copy; {{ year }} vChain, Inc. All rights reserved.
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
import PageSection from '~/components/layout/PageSection';

export default {
    components: {
        PageSection
    },
    data() {
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss">
@import '~@inkline/inkline/src/css/config/colors';

.copyright {
    padding: 1.5rem 0;
    background: $color-gray-80;
    color: $color-gray-30;
    text-align: center;
    font-size: 90%;
}
</style>
