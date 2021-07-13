<template>
	<UiPageSection id="become-a-partner-section">
		<i-container>
			<v-row>
				<v-col>
					<p class="action _text-center">
						<i-button
							size="lg"
							variant="primary"
							@click="$emit('onPartnerModal')"
						>
							Become a partner
						</i-button>
					</p>
				</v-col>
			</v-row>
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
