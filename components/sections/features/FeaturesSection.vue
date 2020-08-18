<template>
    <PageSection id="features-row">
        <i-container>
            <i-row>
                <Feature title="Turn-key Solution"
                         image="/images/verified.svg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </Feature>
                <Feature title="Immediate Results"
                         image="/images/test.svg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </Feature>
                <Feature title="Monitoring & Analytics"
                         image="/images/analysis.svg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </Feature>
                <Feature title="Data Filtering"
                         image="/images/filter.svg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua
                </Feature>
            </i-row>
        </i-container>
    </PageSection>
</template>

<script>
import Feature from './Feature';
import PageSection from '~/components/layout/PageSection';

export default {
    components: {
        Feature,
        PageSection
    }
}
</script>

<style lang="scss">
#features-row {
    background-color: #e9ecef;
}
</style>
