<template>
	<UiPageSection
		id="ci-cd-get-started-section"
		variant="white"
	>
		<i-container>
			<v-row>
				<v-col>
					<h5 class="description lead _text-center _margin-bottom-3">
						Ready to try? Get started in a fistful of clicks!
					</h5>
					<p class="action _text-center">
						<i-button
							size="lg"
							variant="primary"
							href="https://dashboard.codenotary.io/auth/signup"
							target="_blank"
						>
							Get started
						</i-button>
					</p>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CiCdGetStarted',
};
</script>
