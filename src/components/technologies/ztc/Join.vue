<template>
	<UiPageSection id="ztc-join">
		<i-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="Join the Zero-Trust Consortium"
						block
						class="_margin-bottom-2"
					/>
					<i-button
						size="lg"
						variant="light"
						@click="joinZtcModalVisible = true"
					>
						Join the Consortium
					</i-button>
					<JoinZtcModal
						v-model="joinZtcModalVisible"
					/>
				</v-col>
			</v-row>
		</i-container>
	</UiPageSection>
</template>

<script>
export default {
	name: 'ZtcJoin',
	data() {
		return {
			joinZtcModalVisible: false,
		};
	},
};
</script>

<style lang="scss">
#ztc-join {
	text-align: center;
	background-color: var(--v-primary-base);

	h2 {
		color: white;
	}
}
</style>
