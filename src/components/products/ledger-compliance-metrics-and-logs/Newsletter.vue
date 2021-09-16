<template>
	<v-container
		fluid
		class="newsletter mt-n13"
	>
		<v-container class="pt-16">
			<v-row class="pb-2 pt-16">
				<v-col>
					<div class="d-flex flex-column align-center">
						<h4 class="text-h4 white--text font-weight-700 text-center">
							Subscribe to Our Newsletter
						</h4>
						<p class="white--text text-subtitle-1 font-weight-400">
							Get the latest product updates, company news, and special offers delivered right to your inbox.
						</p>
						<v-btn
							color="secondary"
							class="dark--text text-capitalize text-subtitle-1"
							@click.native="newsletterModalOpen = true"
						>
							Subscribe
						</v-btn>
					</div>
				</v-col>
			</v-row>
			<UiModalNewsletter v-model="newsletterModalOpen" />
		</v-container>
	</v-container>
</template>

<script>
export default {
	name: 'ProductsLedgerComplianceMetricsAndLogsNewsletter',
	data() {
		return {
			newsletterModalOpen: false,
		};
	},
};
</script>

<style lang="scss" scoped>
.newsletter {
	background-image: $cn-dark-gradient-inverse;
}
</style>
