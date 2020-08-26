<template>
    <div>
        <page-section>
            <page-section-header>
                <h1 slot="title" class="d6">Contact us</h1>
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
import { title } from '~/helpers/meta';

export default {
    head() {
        return {
            title: title('Contact us')
        };
    },
    components: {
        ContactForm
    }
}
</script>

<style lang="scss"></style>
