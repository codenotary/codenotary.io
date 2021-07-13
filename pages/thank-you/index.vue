<template>
	<UiPageSection>
		<UiPageSectionHeader :title="page.title" tag="h1" />
		<i-container>
			<i-row>
				<i-column>
					<article class="thank-you-page">
						<nuxt-content :document="page" />
					</article>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import { title } from '~/helpers/meta';

export default {
	name: 'ThankYou',
	async asyncData({ $content, params }) {
		const page = await $content('thank-you', 'index').fetch();

		return { page };
	},
	head() {
		return {
			title: title(this.page.title),
		};
	},
	mounted () {
		this.$nextTick(() => {
			this.setNavbar({
				background: 'light-transparent',
				light: true,
			});
		});
	},
	methods: {
		...mapActions(VIEW_MODULE, {
			setNavbar: SET_NAVBAR,
		}),
	},
};
</script>

<style lang="scss">
article.thank-you-page {
	text-align: center;
}
</style>
