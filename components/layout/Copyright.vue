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
export default {
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
    padding: 1.5rem 0 !important;
    background: $color-gray-80;
    color: $color-gray-30;
    text-align: center;
    font-size: 90%;
}
</style>
