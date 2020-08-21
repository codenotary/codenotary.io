<template>
    <div>
        <page-section>
            <page-section-header>
                <h1 slot="title" class="_margin-top-0">Contact us</h1>
            </page-section-header>
            <i-container>
                <i-row>
                    <i-column>
                        <contact-form />
                    </i-column>
                </i-row>
            </i-container>
        </page-section>
    </div>
</template>

<script>
import ContactForm from '~/components/common/forms/ContactForm';
import PageSection from '~/components/layout/PageSection';
import PageSectionHeader from '~/components/layout/PageSectionHeader';

export default {
    components: {
        PageSectionHeader,
        PageSection,
        ContactForm
    }
}
</script>

<style lang="scss"></style>
