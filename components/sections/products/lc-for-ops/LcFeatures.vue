<template>
    <page-section id="lc-features-section">
        <i-container>
            <i-row>
                <i-column>
                    <page-section-header title="Features" />
                </i-column>
            </i-row>
            <i-row center top>
                <i-column xs="12" sm="6" md="4" lg="3">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/easy_to_use.svg" alt="Easy to use" >
                        <h4 class="title _font-weight-bold _text-primary">Turnkey solution</h4>
                        <p class="lead">(5 minute install).</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="4" lg="3">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/tamperproof.svg" alt="Tamperproof" >
                        <h4 class="title _font-weight-bold _text-primary">Immediate results</h4>
                        <p class="lead">(15 minutes after configuration).</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="4" lg="3">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/full_transparency.svg" alt="Full transparency" >
                        <h4 class="title _font-weight-bold _text-primary">Meaningful monitoring & analytics</h4>
                        <p class="lead">Simple yet powerful.</p>
                    </i-card>
                </i-column>
                <i-column xs="12" sm="6" md="4" lg="3">
                    <i-card>
                        <img slot="image" src="/images/ci-cd/features/notarize.svg" alt="Notarize" >
                        <h4 class="title _font-weight-bold _text-primary">Filter the noise, focus on your critical systems</h4>
                        <p class="lead">be a hero.</p>
                    </i-card>
                </i-column>
            </i-row>
        </i-container>
    </page-section>
</template>

<script>
export default {
    name: 'LcFeatures'
}
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#lc-features-section {
    background-color: $color-gray-10;
    overflow: hidden;

    .card {
        margin-bottom: 2rem;
        background: transparent;

        img {
            height: 96px;
            object-fit: contain;
        }

        .body {
            border: none;
            text-align: center;
        }
    }
}
</style>
