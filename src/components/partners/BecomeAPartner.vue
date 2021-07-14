<template>
	<UiPageSection id="become-a-partner-section">
		<v-container>
			<v-row>
				<v-col>
					<p class="action text-center">
						<v-btn
							color="primary"
							@click="$emit('onPartnerModal')"
						>
							Become a partner
						</v-btn>
					</p>
				</v-col>
			</v-row>
		</v-container>
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
