<template>
    <i-header id="about-header">
        <i-row class="_align-items-center">
            <i-column md="8">
                <h1 class="d6 _font-weight-bold _text-primary _margin-top-0">
                    vChain Inc
                </h1>
                <h2 class="_font-weight-bold _margin-top-1">
                    The leading company for immutable recording of data and processes.
                </h2>
                <p class="lead _margin-bottom-0">
                    Our solutions can be used on-premise or in the cloud, are always easy to use and can process millions of transactions a second with cryptographic verification.
                </p>
            </i-column>
            <i-column md="4" class="_text-center">
                <img src="/images/vchain-logo.svg" alt="vChain Inc" class="image -responsive" width="200">
                <img src="/images/cncf.png" alt="CNCF" class="image -responsive _margin-top-2" width="200">
            </i-column>
        </i-row>
    </i-header>
</template>

<script>
export default {
    name: 'AboutHeader'
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#about-header {
    background-color: white;
    width: 100%;
    text-align: left;

    h1 {
        margin-top: 0;
    }

    @include breakpoint-down(md) {
        padding-top: 5rem;
        padding-bottom: 5rem;
        text-align: center;
    }
}
</style>
