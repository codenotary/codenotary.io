<template>
	<PageSection id="ztc-join-section">
		<i-container>
			<i-row>
				<i-column>
					<PageSectionHeader
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
				</i-column>
			</i-row>
		</i-container>
	</PageSection>
</template>

<script>
export default {
	name: 'ZtcJoinSection',
	data() {
		return {
			joinZtcModalVisible: false,
		};
	},
};
</script>

<style lang="scss">
@import "~@inkline/inkline/src/css/mixins";
@import "~@inkline/inkline/src/css/config";

#ztc-join-section {
	text-align: center;
	background-color: $color-primary;

	h2 {
		color: white;
	}
}
</style>
