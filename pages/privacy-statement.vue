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
};
</script>
