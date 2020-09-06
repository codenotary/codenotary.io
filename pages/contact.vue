<template>
    <div>
   		<page-section>
            <page-section-header>
                <h1 slot="title" class="d6">Contact us</h1>
            </page-section-header>
            <i-container>
                <i-row class="_align-items-center">
                    <i-column>
					<h1 slot="title" class="d6">vChain, Inc.</h1>			
     				<h2 class="_font-weight-bold _margin-top-1">
                    4141 Southwest Fwy, Suite 340
					</br>
                    Houston, TX 77027, United States
					</h2>
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

<style lang="scss"></style>
