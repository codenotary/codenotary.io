<template>
    <article>
        <page-section>
            <page-section-header title="Privacy Statement" tag="h1" />
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
            title: title('Privacy Statement')
        };
    },
    async asyncData ({ $content }) {
        const page = await $content('privacy-statement').fetch();

        return {
            page
        };
    }
}
</script>
