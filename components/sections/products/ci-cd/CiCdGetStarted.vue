<template>
	<page-section id="ci-cd-get-started-section">
		<i-container>
			<i-row>
				<i-column>
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
				</i-column>
			</i-row>
		</i-container>
	</page-section>
</template>

<script>
export default {
	name: 'CiCdGetStarted',
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ci-cd-get-started-section {
	background-color: white;
	overflow: hidden;
}
</style>
