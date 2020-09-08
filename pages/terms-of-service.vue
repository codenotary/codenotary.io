<template>
    <article>
        <page-section>
            <page-section-header title="Terms of Service" tag="h1" />
            <i-container>
                <i-row>
                    <i-column>
                        <nuxt-content :document="page" />
                    </i-column>
                </i-row>
            </i-container>
        </page-section>
    </article>
</template>

<script>
import { title } from '~/helpers/meta';

export default {
    head() {
        return {
            title: title('Terms of Service')
        };
    },
    async asyncData ({ $content }) {
        const page = await $content('terms-of-service').fetch();

        return {
            page
        };
    }
}
</script>
