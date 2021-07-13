<template>
	<UiPageSection id="become-a-partner-section">
		<i-container>
			<i-row>
				<i-column>
					<p class="action _text-center">
						<i-button
							size="lg"
							variant="primary"
							@click="$emit('onPartnerModal')"
						>
							Become a partner
						</i-button>
					</p>
				</i-column>
			</i-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'PartnersBecomeAPartner',
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
