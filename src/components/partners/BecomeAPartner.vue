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
#become-a-partner-section {
	background-color: var(--v-grey-lighten4);
	overflow: hidden;
}
</style>
