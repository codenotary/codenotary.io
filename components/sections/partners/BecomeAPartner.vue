<template>
	<PageSection id="become-a-partner-section">
		<i-container>
			<i-row>
				<i-column>
					<p class="action _text-center">
						<PartnerModal
							v-model="partnerModalOpen"
						/>
						<i-button
							size="lg"
							variant="primary"
							@click="partnerModalOpen = true"
						>
							Become a partner
						</i-button>
					</p>
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'BecomeAPartner',
	data: () => ({
		partnerModalOpen: false,
	}),
	beforeDestroy () {
		this.partnerModalOpen = null;
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#become-a-partner-section {
	background-color: $color-gray-10;
	overflow: hidden;
}
</style>
