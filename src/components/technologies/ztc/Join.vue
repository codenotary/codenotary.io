<template>
	<UiPageSection id="ztc-join">
		<v-container>
			<v-row>
				<v-col>
					<UiPageSectionHeader
						title="Join the Zero-Trust Consortium"
						block
						class="_margin-bottom-2"
					/>
					<v-btn
						color="light"
						@click="joinZtcModalVisible = true"
					>
						Join the Consortium
						<JoinZtcModal
							v-model="joinZtcModalVisible"
						/>
					</v-btn>
				</v-col>
			</v-row>
		</v-container>
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
