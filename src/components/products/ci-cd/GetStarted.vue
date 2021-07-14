<template>
	<UiPageSection
		id="ci-cd-get-started-section"
		variant="white"
	>
		<v-container>
			<v-row>
				<v-col>
					<h5 class="description lead text-center _margin-bottom-3">
						Ready to try? Get started in a fistful of clicks!
					</h5>
					<p class="action text-center">
						<v-btn
							color="primary"
							href="https://dashboard.codenotary.io/auth/signup"
							target="_blank"
						>
							Get started
						</v-btn>
					</p>
				</v-col>
			</v-row>
		</v-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'CiCdGetStarted',
};
</script>
