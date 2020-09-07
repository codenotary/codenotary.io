<template>
    <div>
        <page-section>
            <page-section-header>
                <h1 slot="title" class="d6">Contact us</h1>
            </page-section-header>
            <i-container>
                <i-row class="_text-center">
                    <i-column id="map-embed">
                        <div class="_embed-16by9">
                            <iframe
                                width="1200"
                                height="400"
                                src="https://maps.google.com/maps?hl=en&amp;q=4141 Southwest Freeway, Houston Texas+(Maps)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
                                frameborder="0"
                                scrolling="no"
                                marginheight="0"
                                marginwidth="0" />
                        </div>
                        <h3 class="_margin-top-1">vChain, Inc.</h3>
                        <div class="_margin-top-1">
                            4141 Southwest Fwy, Suite 340
                        </div>
                        <div class="_margin-bottom-1 _font-size-sm">
                            Houston, TX 77027, United States
                        </div>
                    </i-column>
                </i-row>
            </i-container>
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

<style lang="scss">
#map-embed {
    iframe {
        max-width: 100%;
    }
}
</style>
