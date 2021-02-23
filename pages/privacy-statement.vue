<template>
	<article>
		<PageSection>
			<PageSectionHeader title="Privacy Statement" tag="h1" />
			<i-container>
				<i-row>
					<i-column>
						<nuxt-content :document="page" />
					</i-column>
				</i-row>
			</i-container>
		</PageSection>
	</article>
</template>

<script>
import { mapActions } from 'vuex';
import {
	VIEW_MODULE,
	SET_NAVBAR,
} from '@/store/view/constants';
import { title } from '~/helpers/meta';

export default {
	name: 'PrivacyStatement',
	async asyncData ({ $content }) {
		const page = await $content('privacy-statement').fetch();

		return {
			page,
		};
	},
	head() {
		return {
			title: title('Privacy Statement'),
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
